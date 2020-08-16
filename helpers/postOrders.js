const axios = require('axios').default;
const dotenv = require('dotenv');
const ordersModel = require('../models/ordersModel');

// Inicia leitura do arquivo .env
dotenv.config();

const postOrders = async (PURCHASE_ORDERS) => {
  try {
    const data = PURCHASE_ORDERS;

    data.forEach(async (order) => {
      const req = await axios.post(`${process.env.BASE_URL_POST}`, order);
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = postOrders;
