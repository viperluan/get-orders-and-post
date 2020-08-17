const intervalOfRequests = (timeInMinutes, PURCHASE_ORDERS, clear, start) => {
  const timeInMilliseconds = timeInMinutes * 60000;

  return setInterval(() => {
    clear(PURCHASE_ORDERS);
    start();
  }, timeInMilliseconds);
};

module.exports = intervalOfRequests;
