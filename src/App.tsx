import React from 'react'
import { Outlet } from 'react-router-dom' 
import './App.css'
import PcTop from "./pages/component/pcTop"

function App() { 

  return (
    <main className="App"> 
      <PcTop />
      <Outlet /> 
    </main>
  )
}

export default App
