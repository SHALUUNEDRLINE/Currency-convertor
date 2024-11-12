import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BackgroundChanger from './BackgroundChanger.jsx';
// src/index.js
import './index.css';  // Or import './tailwind.css' if that's your file name

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BackgroundChanger />
  </StrictMode>,
)
