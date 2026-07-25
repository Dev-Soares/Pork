import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import App from './App'
import { UserProvider } from './shared/contexts/UserProvider'
import ErrorBoundary from './shared/components/ErrorBoundary'
import './assets/index.css'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <ErrorBoundary>
            <App />
          </ErrorBoundary>
          <Toaster position="top-right" />
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
