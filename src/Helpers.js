export const getCatOptions = (makeup) => {
  let filtered;
  if (makeup) {
    const allOptions = [];
    makeup.forEach((item) => allOptions.push(item.category));
    filtered = allOptions.filter(Boolean).sort();
  }
  return Array.from(new Set(filtered));
};

export const getBrandOptions = (makeup) => {
  let filtered;
  if (makeup) {
    const allOptions = [];
    makeup.forEach((item) => allOptions.push(item.brand));
    filtered = allOptions.filter(Boolean).sort();
  }
  return Array.from(new Set(filtered));
};

export const FilterCats = (filter, makeup) => {
  if (filter !== 'All') {
    return makeup.filter((item) => item.category === filter);
  }
  return makeup;
};

export const FilterBrands = (brand, makeupToFilter) => {
  if (brand !== 'All') {
    return makeupToFilter.filter((item) => item.brand === brand);
  }
  return makeupToFilter;
};
