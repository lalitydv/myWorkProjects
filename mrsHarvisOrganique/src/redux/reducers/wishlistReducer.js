const INIT_STATE = {
  wishlist: [],
};

export const wishlistReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload],
      };

    case "REMOVE_FROM_WISHLIST_IN_PRODUCT":
      const data = state.wishlist.filter((el) => el.id !== action.payload);
      return {
        ...state,
        wishlist: data,
      };
    default:
      return state;
  }
};
