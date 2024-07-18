export const formatCurrency = value =>
  new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2
  }).format(value);

export const getCategoryImageMapping = () => {
  const map = new Map();
  map.set('Transportation', '/transport.png');
  map.set('Clothing', '/clothing.png');
  map.set('Miscellaneous', '/miscellaneous.png');
  map.set('Education', '/education.png');
  map.set('Entertainment', '/entertainment.png');
  map.set('Food', '/food.png');
  map.set('Health Care', '/health.png');
  map.set('House', '/house.png');
  map.set('Insurance', '/insurance.png');
  map.set('Personal Care', '/personal.png');
  map.set('Shopping', '/shopping.png');
  map.set('Utilities', '/utilities.png');
  return map;
};

export const formatDate = value =>
  new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(value);
