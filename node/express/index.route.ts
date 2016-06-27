/// <reference path="../../typings/tsd.d.ts"/>

import express = require("express");
let router = express.Router()

router.get('/', (req, res)=>{
    res.end('Hello, World!\n')
})
router.get('/auth', (req,res)=>{
    res.end('You have to authenticate through /auth/user\n')
})

module.exports = router
