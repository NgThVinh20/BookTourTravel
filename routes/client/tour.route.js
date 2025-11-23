const router = require("express").Router();

const tourController = require("../../controllers/client/Tour.controller.js");

router.get('/', tourController.list);

module.exports = router;