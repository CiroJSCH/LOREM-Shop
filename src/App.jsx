// Libraries
import { BrowserRouter } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import AnimatedRoutes from "./components/AnimatedRoutes";

// Styles
import "./styles/reset.css";

const App = () => {
  return (
    <div className="App bg-secondary min-vh-100">
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
};

export default App;
