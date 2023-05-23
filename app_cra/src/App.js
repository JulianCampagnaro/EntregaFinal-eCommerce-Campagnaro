
import Footer from "./componentes/Footer";
import NavBar from "./componentes/NavBar"
import Main from "./componentes/Main";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./componentes/CustomProvider";
import 'react-toastify/dist/ReactToastify.css';

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
