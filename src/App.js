import React from "react";
import { Product } from "./components/fieldset/";
import { CtaContainer } from "./components/cta";
import "./App.css";

function App(products) {
  const product = products.products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  const handleSubmit = (e) => {
    alert("how do i get the data: later task");
    console.log(`${product.id}: ${product.totalAmount}`);
    console.log(product);
    e.preventDefault();
  };
  return (
    <div className="App">
      <main>
        <h1>hi</h1>
        <form onSubmit={handleSubmit}>
          {product}
          <CtaContainer />
        </form>
      </main>
    </div>
  );
}

export default App;
