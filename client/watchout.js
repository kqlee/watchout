// // start slingin' some d3 here.
// $(document).ready(function() {

// //   //Create scoring counters
// //   var score = 0;
// //   var bestScore = 0;

// //   //Create a new bird, and pass in starting positions for x and y coordinates
// //   var flappyBird = new Bird(20, 10);

// //   //Spacebar
// //   var moveSelection = function(e) {
// //     if (e.keyCode === 32) {
// //       //add pixels to the character to the y axis
// //       this.y += 10;
// //     }
// //   };

// //   //Collision Detection
// //   var checkCollision = function() {

// //   };

//   var dataset = [10,20,89,40,20,10,44,33,22,66,55];

//   setInterval(function() {
//     var index = Math.floor(Math.random()*10);
//     var newHeight = Math.floor(Math.random()*200)+50;
//     dataset.splice(index, 1, newHeight);

//      var barPadding = 20;

//   var tube = board.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//      return i * (w / dataset.length);
//    }).attr("y", function(d) {
//      return h - (d * 4);
//    }).attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//      return d * 4;
//    })
//     .attr("fill", "green");

//   }, 3000);


// //   //event listener when the document is ready
// //   (function docReady() {
// //     window.addEventListener('keydown', moveSelection);
// //   })();
// });



// //Game board
// var h = 500;
// var w = 800;

// var board = d3.select("body")
//               .append("svg")
//               .attr("id", "board")
//               .attr("height", h)
//               .attr("width", w)
//               .style("background-color", "lightblue");

// var flappyBird = board.append("rect")
//                       .attr("id", "flappy")
//                       .attr("x", 25)  //sets the padding on the left
//                       .attr("y", 150) //sets the padding from the top
//                       .attr("width", 50)  //sets the width size
//                       .attr("height", 50) //sets the height
//                       .attr("fill", "yellow");



// // Create tubes as obstacles periodically    
// // var tubeList = [10, 20, 30, 40, 50];

// // setInterval(function() {
// //   tubes.push(Math.random() * 20);
// // }, 2000);


// var tubes = board.append("div")
//                 .data(tubeList)
//                 .enter()
//                 .attr("class", "tube");

//   var dataset = [10,20,89,40,20,10,44,33,22,66,55];

//   setInterval(function() {
//     var index = Math.floor(Math.random()*10);
//     var newHeight = Math.floor(Math.random()*200)+50;
//     dataset.splice(index, 1, newHeight);

//      var barPadding = 20;

//   var tube = board.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//      return i * (w / dataset.length);
//    }).attr("y", function(d) {
//      return h - (d * 4);
//    }).attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//      return d * 4;
//    })
//     .attr("fill", "green");

//   }, 3000);

//   var barPadding = 20;

//   var tube = board.selectAll("rect")
//    .data(dataset)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//      return i * (w / dataset.length);
//    }).attr("y", function(d) {
//      return h - (d * 4);
//    }).attr("width", w / dataset.length - barPadding)
//    .attr("height", function(d) {
//      return d * 4;
//    })
//     .attr("fill", "green");

    



