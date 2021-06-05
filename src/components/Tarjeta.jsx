const Tarjeta = ({product: {img, nombre, descripcion, precio}, pais} ) => {
  //ESTO DE ARRIBA SERÍA LO MÁS LIMPIO, DESTRUCTURING CUANDO LO PASÁS COMO PARÁMETRO

  //const {product: {nombre, descripcion, precio}}  = props; //OTRA OPCIÓN DOBLE DESTRUCTURACIÓN!

  return (
    <section className="product">
      <img src={img} alt="imagen" /> 
      <h2 className="header">{nombre}</h2>
      {/* <h2 className="header">{pais}</h2> */}
      <p className="description">{descripcion}</p>
      <p className="price">${precio}</p>
      <div className="btn">Add to Cart</div>
      <div className="quickview">Quick View</div>
    </section>
  );
};

export default Tarjeta;