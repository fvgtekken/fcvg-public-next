##########
## DEPS ##
##########
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i; \
    else echo "Lockfile not found." && exit 1; \
    fi


####################
## Native Binaries Deps ##
####################
FROM --platform=amd64 node:16-alpine AS binaries-deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Prisma client
COPY --from=deps /app/node_modules ./node_modules
COPY prisma ./prisma
RUN npx prisma generate

# Put any other binary build process here if needed


#############
## BUILDER ##
#############
FROM node:16-alpine AS builder

WORKDIR /app

COPY --from=binaries-deps /app/node_modules ./node_modules

ENV NODE_ENV=production

COPY . .

RUN yarn build

############
## RUNNER ##
############
FROM --platform=amd64 node:16-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Entrypoint to run before the final CMD, 
# place any additional commands that can only be run during runtime,
# such as DB migration.
COPY --chown=nextjs:nodejs deployment/docker-entrypoint.sh .

EXPOSE 3000

ENV PORT 3000

ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["node", "server.js"]