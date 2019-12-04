const { Router } = require("express");
const Player = require("./model");
const router = new Router();
const Team = require("../team/model");

router.get("/player", (request, response, next) => {
  Player.findAll()
    .then(data => response.send(data))
    .catch(errors => next(errors));
});

router.post("/player", (request, response, next) => {
  Player.create(request.body)
    .then(player => response.send(player))
    .catch(errors => next(erros));
});

router.get("/player/:id", (request, respose, next) => {
  Player.findByPk(request.params.id, { include: [Team] })
    .then(data => respose.send(data))
    .catch(errors => next(errors));
});

module.exports = router;
