var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];
// var counter = 0;

function product(name, path) {
  // Build your constructor and necessary properties
  this.name = name;
  this.path = 'img/' + name + '.jpg';
  // this.votes = ?
  allProducts.push(this);
};

//Don't forget to build your objects. How can you do this without having to write 14 lines of `new Product(., ., .)`?

var productRank = {
  imgOne: document.getElementById('imgOne'),
  imgTwo: document.getElementById('imgTwo'),
  imgThree: document.getElementById('imgThree'),

  getRandomIndex: function() {
    return Math.floor(Math.random() * productNames.length)
  },

}
productRank.getRandomIndex();
