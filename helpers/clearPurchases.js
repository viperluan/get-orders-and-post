const clearPurchaseArray = (orders) => {
  while (orders.length > 0) {
    orders.pop();
  }
};

module.exports = clearPurchaseArray;
