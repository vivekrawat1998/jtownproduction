
import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hompage from './components/Hompage/Hompage'
import Layout from './components/ui/Layout'

function App() {

  return (
    <>
      <div className=' '>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hompage />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
