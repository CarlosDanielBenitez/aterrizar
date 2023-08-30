import React, { useState } from 'react';
import './styles.css'

const Vuelos = () => {
  // Estado para almacenar los valores de entrada y el total
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(0);

  const destinations = [
    { name: 'Buenos Aires, Argentina', price: 1000 },
    { name: 'Miami, E.E.U.U', price: 2000 },
    { name: 'Berlin, Alemania', price: 3000 },
    { name: 'Cancun, Mexico', price: 4000 },
  ];

  // Funciones para manejar los cambios en las entradas
  const handleStartChange = (event) => {
    setStart(event.target.value);
  };

  const handleDestinationChange = (event) => {
    const selectedDestination = event.target.value;
    const destinationInfo = destinations.find(dest => dest.name === selectedDestination);
    if (destinationInfo) {
      setDestination(selectedDestination);
    }
  };

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  // Calcula el total en base a los pasajeros y el destino seleccionado
  const calculateTotal = () => {
    const adultPrice = 1000; // Precio por adulto
    const childPrice = 500;  // Precio por niño
    const selectedDestinationInfo = destinations.find(dest => dest.name === destination);

    if (selectedDestinationInfo) {
      const destinationPrice = selectedDestinationInfo.price;
      const totalAmount = (adults * adultPrice) + (children * childPrice) + destinationPrice;
      setTotal(totalAmount);
    }
  };

  // Renderiza el componente
  return (
    <div className='flightsContainer'>
      <div className='flightsDestinations' >
        <h2>Selecciona tus opciones de vuelo</h2>
        <label>Desde:
          <select value={start} onChange={handleStartChange}>
            {destinations.map(dest => (
              <option key={dest.name} value={dest.name}>{dest.name}</option>
            ))}
          </select>
        </label>
        <label>Hasta:
          <select value={destination} onChange={handleDestinationChange}>
            {destinations.map(dest => (
              <option key={dest.name} value={dest.name}>{dest.name}</option>
            ))}
          </select>
        </label>
      </div>
      <div className='flightsTickets' >
        <label>Adultos:
          <select value={adults} onChange={handleAdultsChange}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index + 1}>{index + 1}</option>
            ))}
          </select>
        </label>
        <label>Niños: 
          <select value={children} onChange={handleChildrenChange}>
            {Array.from({ length: 10 }, (_, index) => (
              <option key={index} value={index}>{index}</option>
            ))}
          </select>
        </label>
        <button onClick={calculateTotal}>Calcular Total</button>
        <h3>Total: $ {total}</h3>
      </div>
    </div>
  );
};

export default Vuelos;
