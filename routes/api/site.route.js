const express = require('express');

const ControllerHandler = require('../../middleware/controller.handler');
const ContentController = require('../../controllers/content.controller');

var router = express.Router();

// api/site ----------------------------

router.get('/content/sections',
    ControllerHandler(
        ContentController.getSections
    )
);

module.exports = router;