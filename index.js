const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

const getOrders = require('./helpers/getOrders');
const postOrders = require('./helpers/postOrders');
const intervalOfRequests = require('./helpers/intervalOfRequests');

// Inicia a leitura do arquivo .env
dotenv.config();

app.use(cors(process.env.BASE_URL_CORS));

const finalDate = '2020-08-16T00%3A00';
const initialDate = '2020-08-15T00%3A00';

const timeInMinutes = 5;

const PURCHASE_ORDERS = [];
let numberOfRequests = 0;

app.get('/', (_, res) => {
  try {
    res.send({
      requests: numberOfRequests,
      orders: PURCHASE_ORDERS,
    });
  } catch (error) {
    console.log(error);
  }
});

const incrementRequests = () => {
  numberOfRequests++;
};

const startService = async () => {
  incrementRequests();
  await getOrders(PURCHASE_ORDERS, finalDate, initialDate);
  if (PURCHASE_ORDERS.length < 1) {
    startService();
    return;
  }
  await postOrders(PURCHASE_ORDERS);
};

startService();

intervalOfRequests(timeInMinutes, PURCHASE_ORDERS, startService);

const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});
