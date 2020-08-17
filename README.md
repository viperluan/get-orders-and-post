# Serviço de integração entre sistemas

Esta é uma API fictícia, que executa dois métodos HTTP a cada 5 (cinco) minutos. Primeiro um GET e depois um POST.

## Métodos

GET: este método faz uma requisição em uma API de terceiros, que retorna uma lista aleatória de pedidos. Estes dados são tratados utilizando uma função criada para modelar de acordo com as predefinições da próxima API onde será enviada.

#### Status:

- 200 = OK
- 401 = Unauthorized
- 403 = Forbidden
- 404 = Not Found

POST: como explicado anteriormente, os dados já foram tratados no momento da primeira requisição, após, é feito um POST na próxima API de terceiros, retornando status de acordo com o resultado.

#### Status:

- 200 = OK
- 201 = Created
- 401 = Unauthorized
- 403 = Forbidden
- 404 = Not Found

#### LINK HEROKU

[Heroku APP](https://purchase-orders-web-service.herokuapp.com/)
