// Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Footer from "./components/Footer";

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
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
};

export default App;
