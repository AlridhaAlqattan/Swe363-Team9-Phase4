import { useState } from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Technician from './pages/Technician';
import PendingReports from './pages/PendingReports';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Technician" element={<Technician />} />
        <Route path="/Technician/PendingReports" element={<PendingReports />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
