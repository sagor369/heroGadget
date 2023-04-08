import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Product from "./component/Product/Product";

function App() {
  const productsData = useLoaderData();
  console.log(productsData);
  return (
    <div className="max-w-7xl mx-auto mb-36 min-h-[100vh -114px]">
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {productsData.map((product) => (
          <Product 
          product={product} 
          key={product.id}
          ></Product>
        ))}
      </div>
    </div>
  );
}

export default App;
