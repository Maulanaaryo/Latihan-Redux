const initialState = {
  userInfo: {},
  isLoggedIn: false,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "USER_INFO":
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      return { ...state, userInfo: userInfo, isLoggedIn: true };
    case "AUTH":
      localStorage.setItem("userInfo", JSON.stringify(action.payload.userInfo));
      localStorage.setItem("isLoggedIn", true);
      return { ...state, userInfo: action.payload.userInfo, isLoggedIn: true };
    case "LOGOUT":
      localStorage.removeItem("userInfo");
      localStorage.removeItem("isLoggedIn");
      return { ...state, userInfo: {}, isLoggedIn: false };
    default:
      return state;
  }
};

export default auth;
