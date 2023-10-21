import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Pricing from './Components/Pricing'
import Support from './Components/Support'
import Features from './Components/Features'
import Enterprise from './Components/Enterprise'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Pricing/>}/>
        <Route path="features" element={<Features/>}/>
        <Route path="support" element={<Support/>}/>
        <Route path="enterprise" element={<Enterprise/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  )
}

export default App
