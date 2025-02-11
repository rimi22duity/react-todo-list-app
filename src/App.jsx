import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadTodos } from './thunks'
import './App.css'
import TodoList from './TodoList'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTodos())
  }, [])

  function createTodo(text) {
    setIncompleteTodos([...incompleteTodos, {text, isCompleted: false}])
  }

  return (
    <>
     <TodoList />
    </>
  );
}

export default App
