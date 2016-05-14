#vote_counter (Marketing Analysis - Bus Mall)

### N13
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
