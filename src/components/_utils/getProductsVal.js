// get product values
export const getProductsAmounts = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      let value;
      value = selectorContainer[i].products[j].firstChild.nextSibling.value;
      dataContainer[i].push(value);
    }
  }
};

export const getProductsIds = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      let val;
      val =
        selectorContainer[i].products[j].firstChild.nextSibling.dataset
          .productId;
      dataContainer[i].push(val);
    }
  }
};

export const getProductsNames = (selectorContainer, dataContainer) => {
  for (let i = 0; i < selectorContainer.length; i++) {
    dataContainer[i] = [];
    for (let j = 0; j < selectorContainer[i].products.length; j++) {
      let val;
      val =
        selectorContainer[i].products[j].firstChild.nextSibling.dataset
          .productName;
      dataContainer[i].push(val);
    }
  }
};

// Assemble Products Values
export const assembleProductGroups = (prodIds, prodNames, prodAmounts) =>
  prodIds.map((idsPerCategory, indexCategory) => {
    return idsPerCategory.map((id, indexProduct) => {
      return {
        id: id,
        name: prodNames[indexCategory][indexProduct],
        totalAmount: prodAmounts[indexCategory][indexProduct],
      };
    });
  });
