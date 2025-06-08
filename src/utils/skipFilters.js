export const filterSkips = (skips, filters) => {
  return skips.filter(skip => {
    // Basic size filtering
    if (filters.minSize && skip.size < filters.minSize) return false;
    if (filters.maxSize && skip.size > filters.maxSize) return false;

    // Road placement filtering
    if (filters.needsRoadPlacement !== undefined && 
        skip.allowed_on_road !== filters.needsRoadPlacement) return false;

    // Heavy waste filtering
    if (filters.needsHeavyWaste && !skip.allows_heavy_waste) return false;

    // Price range filtering
    if (filters.maxPrice && skip.price_before_vat > filters.maxPrice) return false;
    if (filters.minPrice && skip.price_before_vat < filters.minPrice) return false;

    // Postcode filtering
    if (filters.postcode && skip.postcode !== filters.postcode) return false;

    return true;
  });
};

export const calculatePriceWithVAT = (price, vat) => {
  return price + (price * (vat / 100));
};

export const getSkipSizeLabel = (size) => {
  return `${size} Yard${size === 1 ? '' : 's'}`;
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP'
  }).format(price);
}; 