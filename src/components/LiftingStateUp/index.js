import React from "react";
import { Category } from "./Category";
import { CtaContainer } from "../cta";

export const LiftingStateUp = (props) => {
  const categories = props.categories.map((category) => (
    <Category
      key={category.id}
      catgoryId={category.id}
      categoryName={category.name}
      products={category.products}
    />
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
        <h1>Lifting State Up</h1>
        <form onSubmit={handleSubmit} onReset={handleReset}>
          {categories}
          <CtaContainer />
        </form>
      </main>
    </div>
  );
};
