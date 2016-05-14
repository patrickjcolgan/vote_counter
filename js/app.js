var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

function Product(name, path) {//builds each img object creates ONE INSTANCE
  //both args are at the dirivitive YOUR RELATIVE PATH WILL BE THAT IMG OBJECT WHERE THAT PATH IS APPLIED
  this.name = name;
  this.path = path;
  this.tally = 0;
  allProducts.push(this);
};
//iffe that runs a for loop. iterate over productNames array, pushes to Products, adds to allProducts array
(function buildAlbum() {
  for (var i = 0; i < productNames.length; i++) {
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');//populates Product parameters
    // console.log(productNames[i]);
    // console.log(path);
  }
})();

var productRank = { //Tracker Object Literal
  //use .src = productRank.imageONE.id
  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,

  leftEl: document.getElementById('imgOne'),
  midEl: document.getElementById('imgTwo'),
  rightEl: document.getElementById('imgThree'),
  imageEls: document.getElementById('images'), //section that holds each img element
  resultsEl: document.getElementById('results'), //after buttons: display RESULTS in 'li'
  resultsButton: document.getElementById('showresults'),
  resetButton: document.getElementById('reset'),

    getRandomIndex: function() { //from allProducts INCLUSIVE get number value to use in allProducts array
      return Math.floor(Math.random() * productNames.length);
    },

    displayImages: function() { //use getRandomIndex to display 3 imgs
        //we need to assign an object to each of these things.
        //run productRank.getRandomIndex(randomly gets an obj), get that value and use as index for product array and assign to leftObj
        productRank.leftObj = allProducts[productRank.getRandomIndex()];
        productRank.midObj = allProducts[productRank.getRandomIndex()];
        productRank.rightObj = allProducts[productRank.getRandomIndex()];
        //if any of the three obj images are the same, call again
        if (productRank.leftObj === productRank.midObj || productRank.leftObj === productRank.rightObj || productRank.midObj === productRank.rightObj) {
          productRank.displayImages(); //call itself again
        }
        //Now that no images are the same, use .src to update the path; use .id to update the name
        productRank.leftEl.src = productRank.leftObj.path;
        productRank.leftEl.id = productRank.leftObj.name;

        productRank.midEl.src = productRank.midObj.path;
        productRank.midEl.id = productRank.midObj.name;

        productRank.rightEl.src = productRank.rightObj.path;
        productRank.rightEl.id = productRank.rightObj.name;
    },

    tallyClicks: function(elId) { // when I click, add a vote to that img
      // USE THE ID OF THE IMG WE CLICKED
      for (var i in allProducts) {
        if (elId === allProducts[i].name) {
        allProducts[i].tally ++;
        this.totalClicks ++;
      }
      }
      console.log(allProducts[0].tally);
      console.log(this.totalClicks);
    }
  };
  productRank.imageEls.addEventListener('click', function(event){
    event.preventDefault();
    productRank.tallyClicks(event.target.id);
    console.log(event.target.id); //get ID of target pass in to tallyClicks
  } );
//
//     displayResults: function() { //renders the list of votes
//       //THIS WILL BE A CHART FOR N14
//       //CREATE 'UL'
//       for ( var i in allPrducts){
//         //VAR CREATE 'LI'
//         //var str = allPrducts[i].name + ' has' + allPrducts[i].tally + ' votes';
//         //str = str.charAt(0).toUppoercase() + str.slice(1);
//         //li
//
//         //
//       }
//     },
//
//     showButton: function() { //when we hit 15 votes, show button; click view REsults show that button
//       //  Hmm... what's going to happen here?
//       this.resultsButton.hidden = false;
//       this.resultsButton.addEventListener('click', function(){
//         //productRank.resetButton.hidden = false;
//         //productRank.resultsButton.hidden = true;
//
//         //productRank.resetButton.addEventListener('click' function(){
//         //jkljlkdjlkdj = true;
//         location.reload();
//       })
//       })
//     },
//
//     onClick: function() {
//       //  Hmm... what's going to happen here?
//       if (event.target.id === productRank.leftObj.name || ){
//       //productRank.tallyClicks(event.target.id);
// }
//       if (productRank.totalClicks % 15 === 0){
//         //removeeventllistener
//         //show button
//       }
//       //productRank.displayImages();
//       //Else {
//       //ALERT('CLICK THE IMAGE');
//     }
//   };
//
  productRank.imageEls.addEventListener('click', productRank.onClick);
//   //imgEls property of img constructor. we have an event listener on all 3 images, put event listener on section/div
//   //click anywhere in this section, but IF you click on this image, lets figure out which img object that is, and add a vote to it
//
  productRank.displayImages();//will give us first 3 images on page load.
// }
