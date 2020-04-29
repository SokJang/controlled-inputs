import React from "react";
import { Product } from "./components/fieldset_new/Product";
import { CtaContainer } from "./components/cta";
import { Counter } from "./components/remember/Counter";
import "./App.css";

function App(products) {
  const product = products.products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  const handleSubmit = (e) => {
    console.log("ship current amount values: later task");
    e.preventDefault();
  };

  const handleReset = (e) => {
    console.log("reset current amount values: later task");
    e.preventDefault();
  };

  return (
    <div className="App">
      <main>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {product}
          <CtaContainer />
        </form>
        <Counter />
      </main>
    </div>
  );
}

export default App;
