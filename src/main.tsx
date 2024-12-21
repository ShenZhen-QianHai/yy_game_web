import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Home from './pages/Home'
import Login from './pages/login'
import About from './pages/About'
import AssetWorld from './pages/assetWorld'
import Hi from './pages/hi/[name]'

createRoot(document.getElementById('app')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/Asset" element={<AssetWorld />} />
        <Route path="/hi">
          <Route path=":name" element={<Hi />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
)
