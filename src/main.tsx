import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Self-hosted fonts, only the weights the design uses.
import '@fontsource/instrument-sans/400.css'
import '@fontsource/instrument-sans/500.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/instrument-sans/700.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/500.css'

import './styles/global.css'
import { App } from './App'
// Last, so reduced motion and print rules win over the component styles.
import './styles/motion.css'

const root = document.getElementById('root')
if (!root) throw new Error('Missing #root element')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
