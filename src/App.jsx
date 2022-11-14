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


// TODO: LocalStorage carrito