const initialState = {
    dataUser: null,
    detailUser : null,
  };

  const userReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'GET_USER':
        return {
          ...state,
          dataUser : payload,
        };
        case 'GET_USER_DETAIL':
        return {
          ...state,
          detailUser : payload,
        };
      default:
        return state;
    }
  };

  export default userReducer;

