import { collection, getDocs, addDoc, doc, deleteDoc} from "firebase/firestore";
import {db} from "./firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//Obtengo los productos de mi base de datos
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

//Me guardo los items seleccionados en el carrito de la base de datos
export const saveCarrito = async (cartItems,count, itemName, itemImg) => {
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

