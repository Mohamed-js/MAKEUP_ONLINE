const storeMakeup = (makeup) => ({
  type: 'STORE_MAKEUP',
  payload: makeup,
});

const currentItem = (item) => ({
  type: 'STORE_ITEM',
  payload: item,
});

const currentCategory = (category) => ({
  type: 'STORE_CATEGORY',
  payload: category,
});

export const fetchMakeup = () => async (dispatch) => {
  await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick',
  )
    .then((res) => res.json())
    .then((makeup) => {
      dispatch(storeMakeup(makeup));
    });
};

export const fetchItemById = (id) => async (dispatch) => {
  await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
    .then((res) => res.json())
    .then((item) => {
      dispatch(currentItem(item));
    });
};

export const fetchItemsByCategory = (category) => async (dispatch) => {
  await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${category}`,
  )
    .then((res) => res.json())
    .then((category) => {
      dispatch(currentCategory(category));
    });
};

export const CHANGE_FILTER = (filter) => ({
  type: 'CHANGE_FILTER',
  category: filter,
});

export const CHANGE_BRAND = (filter) => ({
  type: 'CHANGE_BRAND',
  brand: filter,
});
