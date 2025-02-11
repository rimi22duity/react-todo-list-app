import { useDispatch } from "react-redux";
import { deleteTodo, markTodoAsCompleted } from "./thunks";
import styled from "styled-components";


const CardContainer = styled.div`
        border-radius: 10px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        padding: 16px;
    `

export default function TodoListItem({ todo }) {

    const dispatch = useDispatch()

    return (
        <CardContainer>
            <h3>{todo.text}</h3>
            {todo.isCompleted && <p>Completed!</p>}
            {todo.isCompleted 
                ? <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete Item</button>
                : <button onClick={() => dispatch(markTodoAsCompleted(todo.id))}>Mark as Complete</button>
            }
        </CardContainer>
    );
}