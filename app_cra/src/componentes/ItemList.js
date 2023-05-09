import React from "react"
import Item from "./Item"

const ImportList = ({productos}) => {
    
    return (
        <div className="itemListContainer">
            {productos.map((producto) => {   
                return (
                <div className="">     
                    <Item producto={producto} key={producto.id}/>
                </div>
                ) 
            })
            }

        </div>
    );




}


export default ImportList