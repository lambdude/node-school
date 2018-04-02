
var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  getProducts: function() {
      return productInventory.products;
  },
  
  getProduct: function(productId) {
    return productInventory.getProduct(productId);
  },
  
  convertToChange: function(amount) {
    return changeHandler.convertToChange(amount);
  }

};
