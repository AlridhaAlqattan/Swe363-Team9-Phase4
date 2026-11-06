import { useState } from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Technician from './pages/Technician';



function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Technician" element={<Technician />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
