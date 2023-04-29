

const Producto = ({producto}) => {
  return (
    <section className="cards">
      <img src={producto.imgUrl} alt={producto.nombre} />
      <p>Stock: {producto.stock}</p>
      <p>Precio: {producto.precio}</p>
    </section>
  )
}

export default Producto


{/* <div className = "itemListContainer__producto">
      <p className="itemListContainer__producto__valor">Quiero <span>{props.numero}</span> tortitas</p>
      <Button id="btn" className="itemListContainer__producto__btn" variant="dark" size="lg" onClick= {props.handleClick}>QUIERO TORTITAS</Button>
    </div> */}