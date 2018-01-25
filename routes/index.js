const product = require('./product')

module.exports = function (app) {
  app.use('/api/v1/product', product)
}
