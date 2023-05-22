import { collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import {Link} from "react-router-dom"


export const getProductos =   () => {

    const productosCollection = collection ( db, "productos")
    return getDocs (productosCollection)
        .then((response) => {
            /* console.log ("salio todo bien: ") */
            const laRespuestaParseada = response.docs.map( (doc) => {
                const producto = {
                    id: doc.id,
                    ...doc.data ()
                }
                return producto //Tranforma cada cosa del response a .json
                
            }) 
            return laRespuestaParseada 
        })        
        .catch ((err) => {
            console.log ("Hubo un error aquí pidiendo los productos")
        })
}

export const saveCarrito = async (cartItems,count, itemName, itemImg, itemCost) => {
    try {
        await toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1000)),
            {
                pending: "Creando una venta...",
                success: "Venta guardada exitosamente en la base de datos",
            }
        );
        const ventasCollection = collection(db, "carrito");
        await addDoc(ventasCollection, {
            cartItems,
            cantidad: count,
            itemName: itemName,
            itemImg: itemImg,
            precio: itemCost,
        });
        } catch (error) {
        toast.error("Error al guardar la venta en la base de datos");
        console.log("Error al guardar la venta en la base de datos:", error);
        }
};

export const getProductosEnCart = async () => {
    
    const ventasCollection = collection(db, "carrito");
    return getDocs (ventasCollection)
        .then((response) => {
            /* console.log ("salio todo bien: ") */
            const laRespuestaParseada = response.docs.map( (doc) => {
                const producto = {
                    id: doc.id,
                    ...doc.data ()
                }
                return producto
            }) 
            return laRespuestaParseada 
        })        
        .catch ((err) => {
            console.log ("Hubo un error aquí pidiendo los productos")
        })



    
};

export const eliminarItemsSeleccionados = async (ventasItems) => {
    try {
        for (const item of ventasItems) {   
            const ventaDocRef = doc(db, "carrito", item.id); // Suponiendo que cada item tiene un campo "id" que representa su identificador en la base de datos
            await deleteDoc(ventaDocRef);
        }
        toast.success("Los items seleccionados se han eliminado de la base de datos.");
        window.location.reload();
        } catch (error) {
        console.error("Error al eliminar los items seleccionados:", error);
        }
};

export const calcularPrecioTotal = (item) => {
    return item.cantidad * item.precio;
};

export const calcularPrecioTotalGeneral = (ventasItems) => {
    const total = ventasItems.reduce(
        (acc, item) => acc + calcularPrecioTotal(item),
        0
    );
    return total;
};


export const mostrarNotificacionExito = () => {
    confirmAlert({
        title: 'Compra procesada',
        message: 'La compra se ha procesado con éxito.',
        buttons: [
            {
                label: 'Aceptar',
            }
        ],
        closeOnClickOutside: false, // Evita que el SweetAlert se cierre al hacer clic fuera de él
        closeOnEscape: false
    });
    
};
