const { Router } = require("express");
const Team = require("./model");
const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(data => response.send(data))
    .catch(errors => next(errors));
});

router.post("/team", (request, response, next) => {
  Team.create(request.body)
    .then(team => response.send(team))
    .catch(errors => next(erros));
});

router.get("/team/:id", (request, respose, next) => {
  Team.findByPk(request.params.id)
    .then(data => respose.send(data))
    .catch(errors => next(errors));
});

module.exports = router;
