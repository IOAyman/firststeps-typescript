/// <reference path="../../typings/node/node.d.ts"/>
/// <reference path="../../typings/express/express.d.ts"/>
/// <reference path="../../typings/morgan/morgan.d.ts"/>

import express = require("express")
import logger = require("morgan")

// setup
const PORT = process.env.PORT || 8000
let app = express()
let router = express.Router()

// server
app.listen(PORT, ()=>{
    console.log('listening on', PORT)
})


// routes
import index = require("./index.route")
import auth = require("./auth.route")

router.use('/', <express.Router>index)
router.use('/auth', <express.Router>auth)


// middleware
app.use('/', router)
app.use(logger('dev'))
router.use('/auth/:user', (req, res, next)=>{
    if(req.params.user !== 'me')
        res.end('Unknown user!\n')
    else 
        next()
})
