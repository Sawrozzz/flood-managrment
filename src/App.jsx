import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Map from './pages/map/Map'
import Update from './pages/update/Update'
import Recovery from './pages/recovery/Recovery'
import Prediction from './pages/prediction/Prediction'
import FAQ from './pages/faq/Faq'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='map' element={<Map />} />
        <Route path='update' element={<Update />} />
        <Route path='recovery' element={<Recovery />} />
        <Route path='prediction' element={<Prediction />} />
        <Route path='faq' element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
