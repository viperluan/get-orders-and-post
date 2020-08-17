const clearPurchaseArray = require('./clearPurchases');

const intervalOfRequests = (timeInMinutes, PURCHASE_ORDERS, start) => {
  const timeInMilliseconds = timeInMinutes * 60000;

  return setInterval(() => {
    clearPurchaseArray(PURCHASE_ORDERS);
    start();
  }, timeInMilliseconds);
};

module.exports = intervalOfRequests;
