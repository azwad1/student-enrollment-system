import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AddStudent from './pages/AddStudent.jsx'
import ViewStudent from './pages/ViewStudent.jsx'
import UpdateStudent from './pages/UpdateStudent.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/viewstudent" element={<ViewStudent />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/updatestudent/:id" element={<UpdateStudent/>}/>
      </Routes>
    </>
  )
}

export default App