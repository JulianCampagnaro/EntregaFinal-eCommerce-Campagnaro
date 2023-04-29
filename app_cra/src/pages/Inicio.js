import { Link, useParams } from "react-router-dom"


const productos = [ 
    {
        id:1,
        sabor: "Dulces",
        categoria:1,
        img: "/images/aran.png"
    },
    {
        id:2,
        sabor: "Saladas",
        categoria:2,
        img: "/images/queso.png"
    }
]

const Inicio = () => {

    const resultadoDelHook = useParams ()

/*     if (resultadoDelHook.id) {
        console.log ("aca voy a buscar los productos de la categoria " + resultadoDelHook.id)
    } else {
        console.log ("aca voy a buscar los productos de todas las categorias")
    } */

    return (
        <main className="main">   
                <h2 className= "main__titulo">Alimentate de manera ¡inteligente!</h2>
                <section clasName="cards">
                    {
                        productos.map (producto=> {
                            return (
                                <div className ="card" key={producto.id}>
                                    <h3 className="card__tienda__h3">{producto.sabor}</h3>
                                    <img src={producto.img} alt="" className="card__tienda__img"/>
                                    {producto.nombre}
                                    <Link to={"/categoria/" + producto.id } className="card__tienda__link">Ver más</Link>
                                </div>
                            )
                        })
                    }
                </section>
        </main>
    )
}   



export default Inicio