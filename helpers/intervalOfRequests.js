const intervalOfRequests = (
  timeInMinutes,
  orders,
  incrementRequests,
  clear,
  start
) => {
  const time = timeInMinutes * 60000;

  return setInterval(() => {
    incrementRequests();
    clear(orders);
    start();
  }, time);
};

module.exports = intervalOfRequests;
