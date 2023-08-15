import React, { useState, useEffect } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import './styles.css';

export const NavBar = () => {
    const [isOpen, setOpen] = useState(false);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 768);
            if (window.innerWidth >= 768) {
                setOpen(false); // Cerrar el menú hamburguesa en pantallas grandes
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='nav'>
            <h2 className='navTitle'>Aterrizar</h2>
            {isLargeScreen ? (
                <ul className='navList'>
                    <li><a href="">Acerca de</a></li>
                    <li><a href="">Vuelos</a></li>
                    <li><a href="">Hoteles</a></li>
                    <li><a href="">Contacto</a></li>
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
                    <li><a href="">Acerca de</a></li>
                    <li><a href="">Vuelos</a></li>
                    <li><a href="">Hoteles</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
            )}
        </div>
    );
};
