import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/tailwind-light/theme.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <PrimeReactProvider>
    <App />
  </PrimeReactProvider>
)
