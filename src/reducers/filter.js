const filterReducer = (state = { category: 'All', brand: 'All' }, action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return { ...state, category: action.category };
    case 'CHANGE_BRAND':
      return { ...state, brand: action.brand };

    default:
      return state;
  }
};

export default filterReducer;
