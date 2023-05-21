import { collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "./firebase";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//import {collection} from "firebase/firestore" me permite traer la colección que quiero



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


export const saveCarrito = async (cartItems,count, itemName) => {
    try {
        await toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1000)),
            {
                pending: "Creando una venta...",
                success: "Venta guardada exitosamente en Firebase",
            }
        );
        const ventasCollection = collection(db, "ventas");
        await addDoc(ventasCollection, {
            cartItems,
            cantidad: count,
            itemName: itemName,
        });
        /* console.log ("Venta guardada")
        toast.success("Venta guardada exitosamente en Firebase"); */
        } catch (error) {
        toast.error("Error al guardar la venta en Firebase");
        console.log("Error al guardar la venta en Firebase:", error);
        }
};


/* const getProductoDetail = () => {



} */









/* export const getProductosPorCategoria = ({category}) => {
    const productosCollection= collection(db,"productos")
    const filtro = query (productosCollection, where("sabor", "==", category))


    getDocs (filtro)
    .then((response) => {
        console.log ("salio todo bien: ")
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


} */