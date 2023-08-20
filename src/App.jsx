import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/header'
import ContactForm from './pages/contact';
import Vuelos from './pages/vuelos';




// import { Reaccion } from './components/react'


function App() {

  return (


    <Router>
      <div className="app">
        <NavBar />
        <br />
        <br />
        <br />
        <br />

        <Routes>
          <Route path="/contact" element={<ContactForm/>} />
          <Route path='/vuelos' element={<Vuelos/>} />     

        </Routes>
      
      </div>
    </Router>

  )
}

export default App
