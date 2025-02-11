import { createSelector } from "@reduxjs/toolkit"


export const getTodosAreLoading = state => !state.loading.value.completed
export const getTodos = state => state.todos.value

export const getCompletedTodos = createSelector([getTodos], todos => todos.filter(t => t.isCompleted))
export const getIncompletedTodos = createSelector([getTodos], todos => todos.filter(t => !t.isCompleted))