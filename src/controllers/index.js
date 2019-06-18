const express = require("express");
const { check, validationResult } = require("express-validator/check");

const home = require("./home");
const error = require("./error");
const input = require("./input");

const app = express();

const router = express.Router();

// GET
router.get("/", home.get);

// POST
router.post(
  "/post",
  [
    check("name")
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage("You should input your name"),
    check("quote")
      .not()
      .isEmpty()
      .escape()
      .withMessage("Your should input a quote")
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    } else {
      input.post(req, res);
    }
  }
);

router.get("*", error.client);
router.use(error.server);

module.exports = router;
