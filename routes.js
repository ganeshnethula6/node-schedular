const express = require('express');
const router = express.Router();
const schedularController = require('./Controller/schedularController');
router.get('/schedular-call',schedularController.getMyData);
module.exports=router;