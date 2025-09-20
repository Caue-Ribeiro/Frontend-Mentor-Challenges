import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './index'
import { GlobalContextProvider } from './contexts/GlobalContextProvider'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalContextProvider>
            <App />
        </GlobalContextProvider>
    </StrictMode>
)
