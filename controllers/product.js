module.exports = {
  getAllProducts,
  saveProduct
}

function getAllProducts (req, res, next) {
  return res.status(200).json({message: 'product'})
}

function saveProduct (req, res, next) {

}
