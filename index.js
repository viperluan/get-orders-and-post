const express = require('express');
const app = express();
const dotenv = require('dotenv');

const getOrders = require('./helpers/getOrders');
const postOrders = require('./helpers/postOrders');
const clearPurchaseArray = require('./helpers/clearPurchases');

// Inicia a leitura do arquivo .env
dotenv.config();

const finalDate = '2020-07-20T00%3A00';
const initialDate = '2020-07-20T00%3A00';
const PURCHASE_ORDERS = [];

app.get('/', (_, res) => {
  try {
    res.send(PURCHASE_ORDERS);
  } catch (error) {
    console.log(error);
  }
});

const start = async () => {
  await getOrders(PURCHASE_ORDERS, finalDate, initialDate);
  await postOrders(PURCHASE_ORDERS);
};

start();
setInterval(() => {
  clearPurchaseArray(PURCHASE_ORDERS);
  start();
}, 2000);

const APP_PORT = process.env.PORT || 3001;
app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});
