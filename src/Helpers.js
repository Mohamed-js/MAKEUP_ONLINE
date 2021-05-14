export const getCatOptions = (makeup) => {
  if (makeup) {
    const allOptions = [];
    makeup.forEach((item) => allOptions.push(item.category));
    const filtered = allOptions.filter(Boolean).sort();
    const filterCatOptions = new Set(filtered);
    return filterCatOptions;
  }
};

export const getBrandOptions = (makeup) => {
  if (makeup) {
    const allOptions = [];
    makeup.forEach((item) => allOptions.push(item.brand));
    const filtered = allOptions.filter(Boolean).sort();
    const filterBrandOptions = new Set(filtered);
    return filterBrandOptions;
  }
};

export const FilterCats = (filter, makeup) => {
  if (filter !== 'All') {
    return makeup.filter((item) => item.category === filter);
  } else {
    return makeup;
  }
};

export const FilterBrands = (brand, makeupToFilter) => {
  if (brand !== 'All') {
    return makeupToFilter.filter((item) => item.brand === brand);
  } else {
    return makeupToFilter;
  }
};
