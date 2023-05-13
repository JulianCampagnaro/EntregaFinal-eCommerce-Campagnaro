/* import { Button }  from  "react-bootstrap"; */
import ItemCount from "./ItemCount"


const ItemDetail = (props) => {


    const {stock} = props
    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
    }; 


    return (
        <div className="main">
            <h2 className= "main__titulo">Acá tenes todo el detalle...</h2>
            <div  className = "itemDetailContainer__card" key={props.id}>
                <h3 className="itemDetailContainer__card__h3">{props.nombre}</h3>
                <img className="itemDetailContainer__card__img" src= {props.img} alt= {props.nombre}/>
                <h3 className="itemDetailContainer__card__h3">Precio: ${props.precio}</h3>
                <p className="itemDetailContainer__card__p">Stock: {props.stock}</p>
                <div className='Itemcount-container'> 
                    <ItemCount className='itemcount'  
                        onAdd={onAdd} 
                        stockDisp = {stock}
                    />
                </div>
                {/* <Button className="itemDetailContainer__btn" variant="outline-dark">Comprar</Button> */}
            </div>
        </div>

    )


}


export default ItemDetail