import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes, useNavigate } from 'react-router-dom'
import { FieldsComponent } from './pages/FieldsComponent'
import { FieldsFormComponent } from './pages/FieldsFormComponent'
import { DataComponent } from './pages/DataComponent'


function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      
      <Route path='/fields' element={<FieldsComponent></FieldsComponent>}></Route>
      <Route path='/form' element={<FieldsFormComponent></FieldsFormComponent>}></Route>
      <Route  path='/data' element={<DataComponent></DataComponent>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
