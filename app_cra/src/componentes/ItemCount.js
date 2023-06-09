import { useEffect, useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = (props) => {

    const initial = 1
    const stock = props.stockDisp
    const [count, setCount] = useState(initial);


    useEffect(() => {
    }, []);

    useEffect(() => {
    }, [count]);

    const addHandler = () => {
    setCount(count + 1);
    };

    const removeHandler = () => {
    if (count > 1) setCount(count - 1);
    };


    return (
    <>
        <div className="Itemcount">
            <div className='ItemCount-add'>
                <button className="removeButton" onClick={removeHandler}>  {" "}
                    -{" "} 
                </button>
                <strong className="count"> {count} </strong>
                <button className="addButton"  onClick={addHandler} 
                disabled={count === stock ? true : null }>
                    {" "}
                    +{" "}
                </button>
            </div>
            <button className='addCarrito' onClick={() => props.onAdd(count)}> Agregar al carrito </button>
        </div>
        <ToastContainer/>
    </>
    );
};

export default ItemCount;
