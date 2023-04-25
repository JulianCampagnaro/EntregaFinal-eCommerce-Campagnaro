
import Footer from "./componentes/Footer";
import NavBar from "./componentes/NavBar"
import Main from "./componentes/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (


    <BrowserRouter>
      <NavBar />
      <Main titulo="Alimentante de manera ¡inteligente!" />
      <Footer />
    </BrowserRouter>

    
  )
}

export default App;


/* import {BrowserRouter} from "react-router-dom" */