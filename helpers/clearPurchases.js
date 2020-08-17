const clearPurchaseArray = (PURCHASE_ORDERS) => {
  while (PURCHASE_ORDERS.length > 0) {
    PURCHASE_ORDERS.pop();
  }
};

module.exports = clearPurchaseArray;
