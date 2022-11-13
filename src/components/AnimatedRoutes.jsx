// Libraries
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from  "framer-motion"

// Components
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart"; 

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category_id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
