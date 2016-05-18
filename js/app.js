var allProducts = [];
var productNames = ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water_can', 'wine_glass'];

var data = {
			labels: productNames,
			datasets: [
				{
					label: 'Votes per Product',
					backgroundColor: 'rgba(233, 220, 35, 0.5)',
					data: []
				}
			]
		};

function Product(name, path) {//builds each img object creates ONE INSTANCE
  //both args are at the dirivitive YOUR RELATIVE PATH WILL BE THAT IMG OBJECT WHERE THAT PATH IS APPLIED
  this.name = name;
  this.path = path;
  this.tally = 0;
  allProducts.push(this);
  data.datasets[0].data.push(this.tally);
};
//iffe that runs a for loop. iterate over productNames array, pushes to Products, adds to allProducts array
(function buildAlbum() {
  for (var i = 0; i < productNames.length; i++) {
    new Product(productNames[i], 'img/' + productNames[i] + '.jpg');//populates Product parameters
  }
})();

var productRank = { //Tracker Object Literal

  totalClicks: 0,
  leftObj: null,
  midObj: null,
  rightObj: null,

  leftEl: document.getElementById('imgOne'),
  midEl: document.getElementById('imgTwo'),
  rightEl: document.getElementById('imgThree'),
  imageEls: document.getElementById('images'), //section that holds each img element
  resultsEl: document.getElementById('results'), //after buttons: display RESULTS in 'li'
  resultsButton: document.getElementById('showResults'),
  resetButton: document.getElementById('reset'),

    getRandomIndex: function() { //from allProducts INCLUSIVE ZERO get number value to use in allProducts array
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
        data.datasets[0].data[i] = allProducts[i].tally;// or +=1
        this.totalClicks ++;

				var storage = JSON.stringify(allProducts);
					console.log(typeof(storage));

				localStorage.setItem('votes', storage);

				var storedVotes = localStorage.getItem('votes');
				storedVotes = JSON.parse(storedVotes);
					console.log(typeof(storedVotes));
      }
      }
    },

    displayResults: function() {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
					type: 'bar',
					data: data,
				});
      },

    showButton: function() { //at 15 votes, show button; click view Results; show RESET button

      this.resultsButton.hidden = false;
      this.resultsButton.addEventListener('click', function() {
        productRank.resetButton.hidden = false;
        productRank.resultsButton.hidden = true;
        productRank.displayResults();

        productRank.resetButton.addEventListener('click', function() {
        productRank.resetButton.hidden = true;
        location.reload();
        })
      });
    },

    onClick: function() {
      //IF you click on img's section, figure out which img
      if (event.target.id === productRank.leftObj.name || event.target.id === productRank.midObj.name || event.target.id === productRank.rightObj.name) {
          productRank.tallyClicks(event.target.id);

          if (productRank.totalClicks % 15 === 0) {
              //Put listener on section containing the images
              productRank.imageEls.removeEventListener('click', productRank.onClick);
              productRank.showButton();
          }

      productRank.displayImages();
      } else {
        alert('CLICK THE IMAGE');
      }

    }
  };
//Listener is on section containing the images.
productRank.imageEls.addEventListener('click', productRank.onClick);
productRank.displayImages();//will give us first 3 images on page load.
