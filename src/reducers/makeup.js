const makeupReducer = (state = {}, action) => {
  switch (action.type) {
    case 'STORE_MAKEUP':
      return { makeup: action.payload };
    case 'STORE_ITEM':
      return { ...state, item: action.payload };
    case 'STORE_CATEGORY':
      return { ...state, category: action.payload };
    default:
      return state;
  }
};

export default makeupReducer;
