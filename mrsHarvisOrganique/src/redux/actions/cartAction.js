export const ADD = (item) => {
  return {
    type: 'ADD_CART',
    payload: item,
  };
};

// remove iteams
export const DLT = (product_id) => {
  return {
    type: 'RMV_CART',
    payload: product_id,
  };
};
export const TTL = (totalCartPrice) => {
    return {
      type: 'TOTAL_PRICE',
      payload: totalCartPrice,
    };
  };
