const express=require('express');
const {appendTalentToFile,readTalentDataFromFile} = require('./talentlogger');
const router=express.Router();
const path = require('path');


router.get('/', async (req, res) => {
    
  
    
    
    res.render('./talent');
})

module.exports = router;