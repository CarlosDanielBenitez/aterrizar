import React, { useState } from 'react';

const Vuelos = () => {
  // Estado para almacenar los valores de entrada y el total
  const [start, setStart] = useState('');
  const [destination, setDestination] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [total, setTotal] = useState(0);
  
  
  const destinations = [
    { name: 'Buenos Aires, Argentina', price:  200 },
    { name: 'Miami, E.E.U.U', price: 400 },
    { name: 'Berlin, Alemania', price: 300 },
    { name: 'Cancun, Mexico', price: 350 },
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
    //   setDestinationPrice(destinationInfo.price);
    }
  };

  const handleAdultsChange = (event) => {
    setAdults(parseInt(event.target.value));
  };

  const handleChildrenChange = (event) => {
    setChildren(parseInt(event.target.value));
  };

  // Calcula el total en base a los pasajeros
  const calculateTotal = () => {
    const adultPrice = 100; // Precio por adulto
    const childPrice = 50;  // Precio por niño
    const totalAmount = (adults * adultPrice) + (children * childPrice);
    setTotal(totalAmount);
  };

  // Renderiza el componente
  return (
    <div>
  <div>
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
      <h3>Total:$ ${total}</h3>
    </div>
  );
};

export default Vuelos;
