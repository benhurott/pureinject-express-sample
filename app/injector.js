const { createInjector } = require('pureinject')

const LogService = require('./services/log.service')
const TextService = require('./services/text.service')

const TextController = require('./controllers/text.controller')

const envConfig = require('./config/env.config')

let currentInjector = null

function initInjector() {
    currentInjector = createInjector()

    currentInjector.register('config:env', () => envConfig)

    currentInjector.register('service:log', () => new LogService())
    currentInjector.register(
        'service:text',
        injector => new TextService(injector)
    )
    currentInjector.register(
        'controller:text',
        injector => new TextController(injector)
    )
}

function getCurrentInjector() {
    return currentInjector
}

module.exports = {
    initInjector,
    getCurrentInjector
}
