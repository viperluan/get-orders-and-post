const newOrderModel = (purchaseOrders) => {
  const ordersMap = purchaseOrders.map((order) => {
    const {
      cliente,
      itens,
      representante,
      numero,
      valorDesconto,
      valorFrete,
    } = order;

    const { endereco } = cliente;
    const { bairro, cidade, complemento, rua, pais, uf } = endereco;

    const totalValue = itens.reduce((acc, curr) => {
      return acc + curr.valorTotal;
    }, 0);

    return {
      cpfCnpjCliente: cliente.cpfCnpj,
      cpfCnpjRepresentante: representante.cpfCnpj,
      enderecoEntrega: {
        bairro,
        cidade,
        complemento,
        logradouro: rua,
        numero: endereco.numero,
        pais,
        uf,
      },
      numero,
      produtos: itens.map(({ codigo, preco, quantidade, valorTotal }) => {
        return {
          precoUnitario: preco,
          quantidade,
          sku: codigo,
          valorTotal,
        };
      }),
      valorDesconto: valorDesconto,
      valorFrete: valorFrete,
      valorTotal: totalValue + valorFrete - valorDesconto,
    };
  });

  return ordersMap;
};

module.exports = newOrderModel;
