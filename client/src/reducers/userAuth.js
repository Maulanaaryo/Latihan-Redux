const initialState = {
  userInfo: {},
  isLogin: false,
};

export const checkUserLogin = () => {
  return {
    type: "INIT_USERINFO",
  };
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "INIT_USERINFO":
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      return { ...state, userInfo, isLogin: true };
    case "LOGIN":
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
      localStorage.setItem("isLogin", true);
      return { ...state, userInfo: action.payload.userInfo, isLogin: true };
    case "LOGOUT":
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isLogin");
      return { ...state, userInfo: {}, isLogin: false };
    default:
      return state;
  }
};

export default auth;
