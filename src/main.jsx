import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Github from './Components/github'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Github></Github>
  </StrictMode>,
)
