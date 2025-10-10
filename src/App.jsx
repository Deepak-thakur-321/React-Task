import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Product from "../src/components/Product/Product";
import Cart from "../src/components/Product/Cart";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} key="product"></Route>
      </Routes>
    </Router>
  );
}

export default App;
