import { collection, getDocs } from "firebase/firestore";
import {db} from "./firebase";

//import {collection} from "firebase/firestore" me permite traer la colección que quiero



export const getProductos = () => {

    const productosCollection = collection ( db, "productos")
    const consulta = getDocs (productosCollection)


    consulta
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
            console.log ("Hubo un error aquí")
        })



}


const saveSale = () => {





}


const getProductoDetail = () => {





}