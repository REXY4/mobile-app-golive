const initialState = {
  isLogin : false,
  users : null,
  role : null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN_SUCCESS':
    console.log(payload.user);
      return {
        ...state,
        isLogin: true,
        users: payload.user,
         role : payload.user.roles[0].name,
        token : payload.token,
      };
      case 'LOGOUT':
          return {
            isLogin: null,
            users: null,
            role : null,
            token : null,
          };
    default:
      return state;
  }
};

export default authReducer;
