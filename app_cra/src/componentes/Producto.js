import Button from 'react-bootstrap/Button';

const Producto = (props) => {
  return (
    <div className = "itemListContainer__producto">
      <p className="itemListContainer__producto__valor">Quiero <span>{props.numero}</span> tortitas</p>
      <Button id="btn" className="itemListContainer__producto__btn" variant="dark" size="lg" onClick= {props.handleClick}>QUIERO TORTITAS</Button>
    </div>
  )
}

export default Producto