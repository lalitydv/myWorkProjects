let INIT_STATE = {
  user: []
};

export const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { ...state, ...action.payload };
    case "LOGOUT_USER":
      state = {};
      return state;
    default:
      return state;
  }
};
