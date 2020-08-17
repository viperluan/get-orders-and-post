const express = require('express');
const app = express();
const dotenv = require('dotenv');

const getOrders = require('./helpers/getOrders');
const postOrders = require('./helpers/postOrders');
const clearPurchaseArray = require('./helpers/clearPurchases');
const intervalOfRequests = require('./helpers/intervalOfRequests');

// Inicia a leitura do arquivo .env
dotenv.config();

const finalDate = '2020-08-16T00%3A00';
const initialDate = '2020-08-15T00%3A00';

const timeInMinutes = 5;

const PURCHASE_ORDERS = [];
let numberOfRequests = 0;

app.get('/', (_, res) => {
  try {
    res.send({
      message: `Número de requisições dessa sessão: ${numberOfRequests}`,
      orders: PURCHASE_ORDERS,
    });
  } catch (error) {
    console.log(error);
  }
});

const incrementRequests = () => {
  numberOfRequests++;
};

const start = async () => {
  incrementRequests();
  await getOrders(PURCHASE_ORDERS, finalDate, initialDate);
  await postOrders(PURCHASE_ORDERS);
};

start();

intervalOfRequests(timeInMinutes, PURCHASE_ORDERS, clearPurchaseArray, start);

const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});
