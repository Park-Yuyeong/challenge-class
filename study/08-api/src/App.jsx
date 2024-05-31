import { useEffect } from "react";
import "./App.css";

import { getBrands } from "./api/api.barnd";
import { getProduct, getProducts } from "./api/api.product";

function App() {
  useEffect(() => {
    const productId = 9587059;

    getProduct(productId);
    getProducts();
    getBrands();
  }, []);

  return <main>Hello world</main>;
}

export default App;
