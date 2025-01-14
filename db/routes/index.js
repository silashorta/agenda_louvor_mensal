const bodyParser = require("body-parser");
const integrantes = require("./rotaAgenda");

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(integrantes);

  app.get('/', (req, res) => res.send('Ola servidor rodando'));
};
