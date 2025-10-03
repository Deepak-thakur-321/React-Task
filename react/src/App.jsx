import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "../src/components/Product/Product";
import Cart from "../src/components/Product/Cart";
import Navbar from "./components/Product/Navbar";

function App() {
  return (
    <Router>
        <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
