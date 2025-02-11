import NewTodoForm from "./NewTodoForm"
import TodoListItem from "./TodoListItem"
import { useSelector } from "react-redux"
import { getCompletedTodos, getIncompletedTodos, getTodosAreLoading } from "./selectors"

export default function TodoList() {
    const todosAreLoading = useSelector(getTodosAreLoading)
    const todosCompleted = useSelector(getCompletedTodos)
    const todosIncompleted = useSelector(getIncompletedTodos)
    
    return (
        <div>
            <h1>My Todos</h1>
            <NewTodoForm />
            {todosAreLoading 
            ? <p>Loading...</p>
            : (
                <>
                    <h3>Completed:</h3>
                    {
                        todosCompleted.map((todo) => (
                            <TodoListItem todo={todo} key={todo.id} />
                        ))
                    }
                    <h3>Incomplete:</h3>
                    {
                        todosIncompleted.map((todo) => (
                            <TodoListItem todo={todo} key={todo.id} />
                        ))
                    }
                </>
            )}
        </div>
    )
}