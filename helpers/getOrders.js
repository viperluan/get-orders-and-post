const axios = require('axios').default;
const dotenv = require('dotenv');
const ordersModel = require('../models/ordersModel');

// Inicia leitura do arquivo .env
dotenv.config();

const getOrders = async (PURCHASE_ORDERS, finalDate, initialDate) => {
  try {
    const res = await axios.get(
      `${process.env.BASE_URL_GET}?data_final=${finalDate}&data_inicial=${initialDate}`
    );

    const data = res.data;

    const dataMap = ordersModel(data);

    dataMap.forEach((order) => {
      PURCHASE_ORDERS.push(order);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getOrders;
