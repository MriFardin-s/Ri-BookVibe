import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from 'react-router'
import MainLayout from './layout/MainLayout'
import Homepage from './Pages/Homepage/Homepage'
import Books from './Book/Books'
import { router } from './routes/Routes'
import BookProvider from './context/BookProvider'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
    </BookProvider>
     
  </StrictMode>,
)
