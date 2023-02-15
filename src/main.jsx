import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { About, Home } from './Pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* https://reactrouter.com/en/main/router-components/browser-router */}
    <BrowserRouter>
      {/* https://reactrouter.com/en/main/components/link */}
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      {/* https://reactrouter.com/en/main/components/routes */}
      <Routes>
        {/* https://reactrouter.com/en/main/route/route */}
        <Route path='/' element={<Home />} />
        {/* Le parametre dynamique de l'url est index */}
        <Route path='/about/:index' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
