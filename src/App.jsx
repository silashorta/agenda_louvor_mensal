import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Main from './Components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UploadCSV from './Components/UploadCSV'
import Frequencia from './Components/Frequencia'

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col gap-4 px-16 bg-amber-50'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/uploadCSV' element={<UploadCSV />}/>
          <Route path='/contaFrequencia' element={<Frequencia />}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
