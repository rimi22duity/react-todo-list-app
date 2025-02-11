import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { todoSlice } from './todoSlice'
import { loadingSlice } from './loadingSlice'

//Creating a Redux store
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    loading: loadingSlice.reducer
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
