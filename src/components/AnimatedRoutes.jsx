import { Routes, Route, useLocation } from "react-router-dom";

import { AnimatePresence } from  "framer-motion"

import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer";

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category_id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
