// login user
export const LOGIN_USER = (login) => {
  return {
    type: "LOGIN_USER",
    payload: login,
  };
};

// logout user
export const LOGOUT_USER = (logout) => {
  return {
    type: "LOGOUT_USER",
    payload: logout,
  };
};
