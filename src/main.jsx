import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx' 
import DataContext from './context/DataContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DataContext>
      <App />
      <ToastContainer position='top-right'/>
    </DataContext>
  </BrowserRouter>,
)
