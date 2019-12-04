const Router = express;
const Team = require("./model");
const router = new Router();

router.get("/team", (request, response, next) => {
  Team.findAll()
    .then(data => response.send(data))
    .catch(errors => next(errors));
});

module.exports = router;
