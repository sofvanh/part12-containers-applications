import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  return (
    <>
      {todos.map((todo, index) => (
        <div key={todo._id}>
          {index > 0 && <hr />}
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </div>
      ))}
    </>
  )
}

export default TodoList
