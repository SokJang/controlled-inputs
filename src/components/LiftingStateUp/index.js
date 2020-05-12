import React from "react";
import PropTypes from "prop-types";
import { Product } from "./Product";
import { CtaContainer } from "../cta";

export const Categories = (props) => {
  const categories = props.categories.map((category) => {
    return (
      <div key={category.id}>
        <h2>{category.name}</h2>
        {category.products.map((product) => {
          return (
            <Product
              key={product.id}
              totalAmount={product.totalAmount}
              id={product.id}
              name={product.name}
            />
          );
        })}
      </div>
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleReset = (e) => {
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

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};
