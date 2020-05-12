import React from "react";
import PropTypes from "prop-types";
import { Product } from "./Product";

export const Category = (props) => {
  const [categoryName, products] = [props.categoryName, props.products];
  const productList = products.map((product) => (
    <Product
      key={product.id}
      totalAmount={product.totalAmount}
      id={product.id}
      name={product.name}
    />
  ));

  return (
    <>
      <h2>{categoryName}</h2>
      {productList}
    </>
  );
};

Category.propTypes = {
  categoryName: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};
