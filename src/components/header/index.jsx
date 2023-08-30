import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import './styles.css';
import { useNavigate } from 'react-router-dom';


export const NavBar = () => {
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);




    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (


        <div className='nav'>
            <li className='navTitle'>Aterrizar</li>
            {isLargeScreen ? (
                <ul className='navList'>
                    <li onClick={() => navigate('/vuelos')}>Vuelos</li>
                    <li onClick={() => navigate('/contact')} >Contacto</li>
                    <li onClick={() => navigate('/custom')}>Customer Support</li>
                </ul>
            ) : (
                <Hamburger
                    toggled={isOpen} toggle={toggleMenu}
                    duration={0.8}
                    color="#4FD1C5"
                />
            )}

            {isOpen && !isLargeScreen && (
                <ul className='navList'>
                    <li onClick={() => navigate('/vuelos')}>Vuelos</li>
                    <li onClick={() => navigate('/contact')} >Contacto</li>
                    <li onClick={() => navigate('/custom')}>Customer Support</li>
                </ul>
            )}


        </div>



    );
};
