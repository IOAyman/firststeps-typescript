/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/express/express.d.ts"/>

import express = require("express");
let router = express.Router()

router.get('/', (req,res)=>{
    res.end('You have to authenticate through /auth/user\n')
})

module.exports = router