const express = require('express')
const bodyParser = require('body-parser')

const { getCurrentInjector, initInjector } = require('./injector')

initInjector()

const injector = getCurrentInjector()

const app = express()
app.use(bodyParser.json())

const textController = injector.resolve('controller:text')
const envConfig = injector.resolve('config:env')

app[textController.method](textController.url, textController.handler)

app.listen(envConfig.port)
