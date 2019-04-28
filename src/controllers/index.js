const express = require('express');

const home = require('./home');
const error = require('./error');
const input = require('./input');

const app = express();

const router = express.Router();


// GET
router.get ('/', home.get);

router.post('/post', input.post)

router.get ('*', error.client);
router.use(error.server);


module.exports = router;