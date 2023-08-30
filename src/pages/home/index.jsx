import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from '../contact';
import Vuelos from '../vuelos';
// import { Counter } from './components/counter';
import { useEffect, useState } from 'react';
// import { Input } from './components/input';
import { CustomerSupport } from '../../components/custom';
import { NavBar } from '../../components/header';





// import { Reaccion } from './components/react'


function Home() {
    const [task, setTask] = useState('');
    const [active, setActive] = useState(false);



    //* Counter
    // const [counter, setCounter] = useState(0);
    // const isValidCounter = counter > 0;

    // const onIncrementCounter = () => {
    //   setCounter(prevValue => prevValue + 1)
    // }

    // const onDecrementCounter = () => {
    //   if (!isValidCounter) return;
    //   setCounter(prevValue => prevValue - 1)

    // }

    //*Input

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

    useEffect(() => {
        console.log("Hi function useEffect mount..");

        return () => {
            console.log("Dismount..");
        }
    }, [])

    const inputClass = `container ${active ? active : ''}`


    return (


        <Router>
            <>

                <NavBar/>

                <Routes>
                    <Route path='/' element={<Vuelos />} />
                    <Route path="/contact" element={<ContactForm />} />
                    <Route path='/vuelos' element={<Vuelos />} />
                    <Route path='/custom' element={<CustomerSupport />} />
                </Routes>
                {/* 
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
        /> */}

            </ >
        </Router>


    )
}

export default Home
