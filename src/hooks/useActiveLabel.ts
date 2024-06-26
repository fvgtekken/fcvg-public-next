import { useState } from 'react'

interface UseActiveLabel {
  activeLabel: { [key: string]: boolean }
  setActiveLabel: (arg: string) => void
}

export const useActiveLabel = (initialLabel: string): UseActiveLabel => {
  const [activeLabel, setActiveLabel] = useState<{ [key: string]: boolean }>({
    [initialLabel]: true,
  })

  const setLabel = (label: string) => {
    const cActiveLabel: { [key: string]: boolean } = { ...activeLabel }
    Object.keys(cActiveLabel).forEach((key) => {
      cActiveLabel[`${key}`] = false
    })

    setActiveLabel(() => ({
      ...cActiveLabel,
      [label]: true,
    }))
  }

  return {
    activeLabel,
    setActiveLabel: setLabel,
  }
}
