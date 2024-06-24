// tests/example.test.tsx
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import React from 'react'

const HelloWorld = () => <div>Hello, world!</div>

test('renders hello world testing jest work', () => {
  render(<HelloWorld />)
  const helloWorldElement = screen.getByText(/hello, world!/i)
  expect(helloWorldElement).toBeInTheDocument()
})
