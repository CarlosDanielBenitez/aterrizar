import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './components/header'
import ContactForm from './pages/contact';
import Vuelos from './pages/vuelos';
import { Counter } from './components/counter';
import { useState } from 'react';
import { Input } from './components/input';





// import { Reaccion } from './components/react'


function App() {
  const [task, setTask] = useState('');
  const [active, setActive] = useState(false);

  // Counter
  const [counter, setCounter] = useState(0);
  const isValidCounter = counter > 0;

  const onIncrementCounter = () => {
    setCounter(prevValue => prevValue + 1)
  }

  const onDecrementCounter = () => {
    if (!isValidCounter) return;
    setCounter(prevValue => prevValue - 1)

  }

  //Input

  const onChange = (event) => {
    const value = event.target.value;
    setTask(value)
  }

  const onFocus = () => {
    setActive(true);
  }

  const onBlur = () => {
    setActive(false);
  }

  const inputClass =  `container ${active ? active : ''}`

  return (


    <Router>
      <div className="app">
        <NavBar />


        <Routes>
          <Route path="/contact" element={<ContactForm />} />
          <Route path='/vuelos' element={<Vuelos />} />
        </Routes>

        <Counter isValidCounter={isValidCounter} counter={counter} onDecrementCounter={onDecrementCounter} onIncrementCounter={onIncrementCounter} />

        <Input
         placeholder='Add a new task'
          id='task'
          required={true}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          className={inputClass}
          name='Task'
          />
        
      </div >
    </Router>


  )
}

export default App
