import { collection, getDocs, addDoc} from "firebase/firestore";
import {db} from "./firebase";

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


export const saveSale = async (cartItems,count) => {
    try {
        console.log("Creando una venta...");
        const ventasCollection = collection(db, "ventas");
        await addDoc(ventasCollection, {
            cartItems,
            cantidad: count,
        });
        console.log("Venta guardada exitosamente en Firebase");
        } catch (error) {
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