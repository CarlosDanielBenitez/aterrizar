import React from 'react';

const PresentationSection = () => {
  return (
    <section className="presentation">
      <div className="presentation-item">
        <h2>A qué nos dedicamos</h2>
        <p>Somos una agencia de viajes especializada en ofrecer paquetes de vuelos a destinos increíbles alrededor del mundo.</p>
      </div>
      <div className="presentation-item">
        <h2>Quiénes somos</h2>
        <p>Somos un equipo apasionado por los viajes y comprometido en brindar las mejores experiencias a nuestros clientes.</p>
      </div>
      <div className="presentation-item">
        <h2>Cuándo se fundó la empresa</h2>
        <p>Nuestra empresa fue fundada en el año 20XX, con el objetivo de hacer que cada viaje sea una aventura inolvidable.</p>
      </div>
      <div className="presentation-item">
        <h2>Descuentos exclusivos</h2>
        <p>Ofrecemos descuentos exclusivos para que puedas viajar a precios increíbles y descubrir nuevos horizontes.</p>
      </div>
      <div className="presentation-item">
        <h2>Destinos destacados</h2>
        <ul>
          <li>Buenos Aires, Argentina</li>
          <li>Miami, EEUU</li>
          <li>Berlín, Alemania</li>
          <li>Cancún, México</li>
        </ul>
      </div>
    </section>
  );
}

export default PresentationSection;
