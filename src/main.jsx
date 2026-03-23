import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router/AppRouter'


createRoot(document.getElementById('root')).render(
   <AppRouter />
)
