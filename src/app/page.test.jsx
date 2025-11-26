import { expect, test, describe } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from './page.tsx'

describe('render Home page', () => {
  test('show the title',  () => {
    render(<HomePage />)
    expect(screen.getByTestId('title').textContent).toContain("Dashboard")
  })
})