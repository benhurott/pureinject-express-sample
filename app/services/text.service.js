class TextService {
    constructor(injector) {
        this._logService = injector.resolve('service:log')
    }

    registerText(text) {
        this._logService.log(text)
    }
}

module.exports = TextService
