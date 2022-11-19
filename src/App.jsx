// Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Context
import CartContextProvider from "./context/CartContext";

// Styles
import "./styles/reset.css";

const App = () => {
  return (
    <div className="App bg-secondary min-vh-100">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <AnimatedRoutes />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;


//* TODO: LocalStorage carrito
//* TODO: Remover productos del carrito (Con alerta)
//* TODO: Quitar zona de añadir al carrito cuando ya añadi un item
//* TODO: Validar que no se pase del stock
//* TODO: Slider productos relacionados en ItemDetail
//* TODO: Banner página principal
//! TODO: Arreglar lo del id
// TODO: Footer