const storeMakeup = (makeup) => {
  return {
    type: 'STORE_MAKEUP',
    payload: makeup,
  };
};

export const fetchMakeup = () => {
  return async (dispatch) => {
    await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick'
    )
      .then((res) => {
        return res.json();
      })
      .then((makeup) => {
        dispatch(storeMakeup(makeup));
      });
  };
};
