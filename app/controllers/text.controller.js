class TextController {
    constructor(injector) {
        this._textService = injector.resolve('service:text')

        this.url = '/text'
        this.method = 'post'

        this.handler = this.handler.bind(this)
    }

    handler(req, res) {
        const text = req.body.text

        this._textService.registerText(text)

        res.status(200).end()
    }
}

module.exports = TextController
