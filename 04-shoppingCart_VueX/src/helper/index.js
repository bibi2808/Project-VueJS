const toCurrency = function(value, unit = "USD", dir = "right") {
  // USD 12 - 12 USD
  if (dir === "right") return value + " " + unit;
  else return unit + " " + value;
};

const validateQuantity = function(quantity) {
  let num = parseInt(quantity);

  if (num == quantity && !isNaN(num)) {
    return num >= 1;
  }
  return false;
};

export { toCurrency, validateQuantity };
