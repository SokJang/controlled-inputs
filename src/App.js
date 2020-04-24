import React from "react";
import { FieldSet } from "./components/fieldset/";
import { CtaContainer } from "./components/cta";
import "./App.css";

function App() {
  const products = [
    {
      id: "1",
      totalAmount: "5",
    },
    {
      id: "2",
      totalAmount: "10",
    },
  ];
  const fieldsets = products.map((product) => (
    <FieldSet
      key={product.id}
      id={product.id}
      totalAmount={product.totalAmount}
    />
  ));
  const handleSubmit = () => {
    console.log("all input form values submitted to server");
  };
  return (
    <div className="App">
      <main>
        <h1>hi</h1>
        <form onSubmit={handleSubmit}>
          {fieldsets}
          <CtaContainer />
        </form>
      </main>
    </div>
  );
}

export default App;
