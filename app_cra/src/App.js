
import Footer from "./componentes/Footer";
import NavBar from "./componentes/NavBar"
import Main from "./componentes/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./componentes/CustomProvider";


const App = () => {
  return (

    <BrowserRouter>
      <CustomProvider>
        <NavBar />
        <Main/>
        <Footer />
      </CustomProvider>
    </BrowserRouter>

    
  )
}

export default App;


/* import {BrowserRouter} from "react-router-dom" */