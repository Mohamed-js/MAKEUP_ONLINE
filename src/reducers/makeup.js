const makeupReducer = (state = [], action) => {
  switch (action.type) {
    case 'STORE_MAKEUP':
      return [action.payload];

    default:
      return state;
  }
};

export default makeupReducer;
