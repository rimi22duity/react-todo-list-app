import axios from "axios"
import { loadingStarted, loadingCompleted, loadingFailed } from "./loadingSlice"
import { updateTodo } from "./todoSlice"

export const loadTodos = () => async (dispatch) => {
    dispatch(loadingStarted())

    try {
        const response = await axios.get('/api/todos')
        const todos = response.data
        console.log(todos)
        dispatch(loadingCompleted(todos))
    } catch(e) {
        loadingFailed(e)
    }
}

export const createTodo = (newTodoText) => async (dispatch, getState) => {
    try {
        const response = await axios.post('/api/todos', { text: newTodoText })
        const newTodo = response.data
        const updatedTodo = getState().todos.value.concat(newTodo)
        dispatch(updateTodo(updatedTodo))
    } catch (e) {
        console.log(e)
    }
    
}

export const deleteTodo = (todoId) => async (dispatch, getState) => {
    try {
        await axios.delete('/api/todos/'+todoId)
        const updatedTodo = getState().todos.value.filter(t=>t.id != todoId)
        dispatch(updateTodo(updatedTodo))
    } catch(e) {
        console.log(e)
    }
}

export const markTodoAsCompleted = (todoId) => async (dispatch, getState) => {
    try {
        const response = await axios.put('/api/todos/'+todoId, { isCompleted: true })
        const newTodo = response.data
        const updatedTodo = getState().todos.value.map(t => t.id === todoId ? newTodo : t)
        dispatch(updateTodo(updatedTodo))
    } catch (e) {
        console.log(e)
    }
}