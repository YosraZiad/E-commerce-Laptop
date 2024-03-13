import { Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home";
import Registry from "./components/pages/Registry";
import ShoppingCartProvider from "./components/context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/register" element={<Registry />} />
        </Routes>
      </div>
    </ShoppingCartProvider>
  );
}

export default App;
