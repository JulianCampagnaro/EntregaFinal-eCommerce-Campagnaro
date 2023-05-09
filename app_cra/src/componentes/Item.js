import React from "react";
import { Link } from 'react-router-dom'
import { Button }   from "react-bootstrap";


const Item = ({producto}) => {

    return (
    <div className="">
        <div className='itemListContainer__card'>
            <h2 className="itemListContainer__card__h2"> {producto.nombre} </h2>
            <img className="itemListContainer__card__img" src={producto.imgUrl} alt= {producto.nombre}/> 
            <Button  className="itemListContainer__card__btn" variant="outline-dark">
                <Link  className="itemListContainer__card__btn__link"  state={producto} to={`/item/${producto.id}`}> Ver más </Link>   
            </Button>
    
        </div>
    </div>
        
    )


};

export default Item;