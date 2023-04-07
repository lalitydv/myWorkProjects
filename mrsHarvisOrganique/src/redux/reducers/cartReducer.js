const INIT_STATE = {
  carts: [],
  total: 0,
};

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };

    case 'RMV_CART':
      const data = state.carts.filter((el) => el.product_id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case 'TOTAL_PRICE':
      return {
        ...state,
        total: state.carts,
      };

    default:
      return state;
  }
};
