#vote_counter (Marketing Analysis - Bus Mall)

## N13
HTML Framework
+ Three img tags inside <div>
+ Put that <div> inside another <div> for styling purposes
+ Another <div> with two future <button>'s

### JAVASCRIPT
+ Attempting to use document.getElementById inside an Object Literal. ???
+ This IFFE works
  + (function buildAlbum() {
    for (var i = 0; i < productNames.length; i++){
      new Product(productNames[i], 'img/' + name + '.jpg');
      console.log(productNames[i]);
    }
  })()
+ Product constructor
  + changed this.path = "img/" + name + '.jpg' and moved this into the above for loop
  + function Product(name, path) {
    this.name = name;
    this.path = path;
    // this.votes = ?
    allProducts.push(this);
  };
+ displayImages: function()
  + displays three random images
  + no repeating images (if statement)
  + update .src and .id

+ First button is no longer hidden after Event Listener

### CSS
+ Includes normalize.css
+ Google Font: font-family: 'EB Garamond', serif;
+ Used a linear-gradient for background
+ Using a max-width of 1300px because using 960px was too small

## N14
+ link to CDN for chart.js
+ Before my Product constructor, add this data variable
  + var data = {
  			labels: productNames,
  			datasets: [
  				{
  					label: 'Votes per Product',
  					backgroundColor: 'rgba(233, 220, 35, 0.5)',
  					data: []
  				}
  			]
  		};
  + Now, we must push the data into this variable
    + data.datasets[0].data.push(this.tally); (add to Product constructor)
  + And we must count the clicks in tallyClicks with this:
    + data.datasets[0].data[i] = allProducts[i].tally;
  + Finally, instead of the 'ul' we had before, we now have variables that help us render a chart
    + displayResults: function() {

        var ctx = document.getElementById('myChart').getContext('2d');
        var myChart = new Chart(ctx, {
					type: 'bar',
					data: data,
				});
      },
