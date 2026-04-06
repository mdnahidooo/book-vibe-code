import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import { RouterProvider } from 'react-router'
import BookContextProvider from './Context/BookContextProvider'
import { ToastContainer } from 'react-toastify'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookContextProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </BookContextProvider>
  </StrictMode>,
)
