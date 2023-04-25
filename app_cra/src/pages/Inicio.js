import ItemListContainer from "../componentes/ItemListContainer"
const Inicio = () => {
    return (
    <main className="main">
        <h2 className= "main__titulo">Alimentate de manera inteligente!</h2>
        <section className="productos">
            <ItemListContainer/>
        </section>
    </main >)
}

export default Inicio