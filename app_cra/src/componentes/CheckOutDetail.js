import {useState} from "react"
import {mostrarNotificacionExito} from "../utils"
import {Link} from "react-router-dom"
const CheckOutDetail = (props) => {
    

    const [camposCompletos, setCamposCompletos] = useState(false);

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [provincia, setProvincia] = useState('');
    const [localidad, setLocalidad] = useState('');
    const [correo, setCorreo] = useState('');

    const verificarCamposCompletos = () => {
        if (nombre && apellido && direccion && provincia && localidad && correo) {
            setCamposCompletos(true);
        } else {
            setCamposCompletos(false);
        }
    };
    
    const confirmarCompra = (camposCompletos) => {
        if (camposCompletos) {
            mostrarNotificacionExito()
        }
    }


    return (
            <div className ="main">
                <h2 className="main__titulo">Ahora si, ¡terminá tu pedido y a comer!</h2>
                <div className="main">
                    <form onSubmit={props.handleSubmit} className="formulario">
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" name="nombre" required value={nombre} onChange={(e) => { 
                                setNombre(e.target.value); verificarCamposCompletos();
                                }} 
                            />
                        </div>
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="apellido">Apellido</label>
                            <input type="text" id="apellido" name="apellido" required value={apellido} onChange={(e) => { 
                                setApellido(e.target.value); verificarCamposCompletos();
                                }} 
                            />
                        </div>
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="direccion">Dirección</label>
                            <input type="text" id="direccion" name="direccion" required value={direccion} onChange={(e) => { 
                                setDireccion(e.target.value); verificarCamposCompletos();
                                }} 
                            />
                        </div>
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="provincia" >Provincia</label>
                            <input type="text" id="provincia" name="provincia" required value={provincia} onChange={(e) => { 
                                setProvincia(e.target.value); verificarCamposCompletos();
                                }} 
                            /> 
                        </div>
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="localidad" >Localidad</label>
                            <input type="text" id="localidad" name="localidad" required value={localidad} onChange={(e) => { 
                                setLocalidad(e.target.value); verificarCamposCompletos();
                                }} 
                            />
                        </div>
                        <div className="formulario__div">
                            <label className="formulario__div__label" htmlFor="correo" >Correo</label>
                            <input type="email" id="correo" name="correo" required value={correo} onChange={(e) => { 
                                setCorreo(e.target.value); verificarCamposCompletos();
                                }} 
                            />
                        </div>
                        <div className="formulario__div">
                            <h2 className="formulario__div__label" >Total a Pagar ${props.precio}</h2>
                        </div>
                        <Link to="/">
                            <button className="addCarrito" type="submit" onClick ={confirmarCompra} disabled={!camposCompletos}>Confirmar Compra</button>
                        </Link>
                    </form>
                </div>
            </div>
    )
}


export default CheckOutDetail;