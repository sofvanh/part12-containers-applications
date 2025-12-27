import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Todo from './Todo'

describe('Todo', () => {
  test('renders todo text', () => {
    const todo = { _id: '1', text: 'Test todo', done: false }
    render(<Todo todo={todo} deleteTodo={() => { }} completeTodo={() => { }} />)

    expect(screen.getByText('Test todo')).toBeInTheDocument()
  })

  test('shows "not done" info when todo is not done', () => {
    const todo = { _id: '1', text: 'Test todo', done: false }
    render(<Todo todo={todo} deleteTodo={() => { }} completeTodo={() => { }} />)

    expect(screen.getByText('This todo is not done')).toBeInTheDocument()
    expect(screen.getByText('Set as done')).toBeInTheDocument()
  })

  test('shows "done" info when todo is done', () => {
    const todo = { _id: '1', text: 'Test todo', done: true }
    render(<Todo todo={todo} deleteTodo={() => { }} completeTodo={() => { }} />)

    expect(screen.getByText('This todo is done')).toBeInTheDocument()
    expect(screen.queryByText('Set as done')).not.toBeInTheDocument()
  })
})

