import {
  getProductsAmounts,
  getProductsIds,
  getProductsNames,
  assembleProductGroups,
} from "../_utils/getProductsVal";

export const SubmitAllChanges = (e) => {
  e.preventDefault();
  // selectors
  const form = document.getElementById("form");
  const childrenForm = document.getElementById("form").children;
  const products = form.querySelectorAll(".category");
  const productsContainer = [];
  // product data stores
  let productListValues = [];
  const productListIds = [];
  const productListNames = [];
  // assemble values
  const categories = [];

  const getProductsContainer = () => {
    for (let i = 0; i < products.length; i++) {
      let categoryElements = {};
      categoryElements["products"] = products[i].querySelectorAll(
        ".display-container"
      );
      productsContainer.push(categoryElements);
    }
    return productsContainer;
  };
  getProductsContainer();

  getProductsAmounts(productsContainer, productListValues);
  getProductsIds(productsContainer, productListIds);
  getProductsNames(productsContainer, productListNames);

  const productGroups = assembleProductGroups(
    productListIds,
    productListNames,
    productListValues
  );

  const assembleCategories = (productGroups) => {
    const nodes = [...childrenForm];
    nodes.forEach((current) => {
      if (current.nodeName === "DIV") {
        categories.push({
          id: current.id,
          name: current.firstChild.textContent,
          products: productGroups,
        });
      }
    });
    return categories;
  };
  assembleCategories(productGroups);
  console.log("categories = ", categories);
};
