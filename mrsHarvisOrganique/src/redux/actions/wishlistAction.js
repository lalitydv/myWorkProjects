//add to wishlist

export const ADD_WISHLIST = (item) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: item,
  };
};

//remove from wishlist product
export const REMOVE_FROM_WISHLIST_PRODUCT = (id) => {
  return {
    type: "REMOVE_FROM_WISHLIST_IN_PRODUCT",
    payload: id,
  };
};

//remove wishlist
export const REMOVE_WISHLIST = (rmv) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: rmv,
  };
};

//clear wishlist
export const CLEAR_WISHLIST = (clr) => {
  return {
    type: "CLEAR_WISHLIST",
    payload: clr,
  };
};
