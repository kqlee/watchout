var currentScore = 0;
var bestScore = 0;
var collisions = 0;
var numEnemies = 20;
var width = 800;
var height = 500;

//Board

var canvas = d3.select('body')
            .append('svg')
            .attr({'width': width, 'height': height});

//Player

var drag = d3.behavior.drag()
             .on('drag', function() {
               player.attr({
                 'cx': Math.max(25, Math.min(width - 25, d3.event.x)),
                 'cy': Math.max(25, Math.min(height - 25, d3.event.y))
               });
             });

var player = canvas.selectAll('#player')
                  .data([{x: width / 2, y: height / 2}])
                  .enter()
                  .append('circle')
                  .attr({
                    'cx': function(d) {
                      return d.x;
                    },
                    'cy': function(d) {
                      return d.y;
                    },
                    'r': 25,
                    'id': 'player',
                    'fill': 'red'
                  })
                  .call(drag);

//Scores

var updateScores = function() {
  d3.select('.current').select('span').text(currentScore++);
  if (currentScore > bestScore) {
    bestScore = currentScore;
    d3.select('.highscore').select('span').text(bestScore - 1);
  }
};

//Enemies
var enemies = [];

for (var i = 0; i < numEnemies; i++) {
  enemies.push({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100
  });
}

var createEnemies = canvas.selectAll('circle')
                          .data(enemies)
                          .enter()
                          .append('circle')
                          .attr({
                            'cx': function() {
                              return width - (Math.random() * width) - 50;
                            },
                            'cy': function() {
                              return height - (Math.random() * height) - 50;
                            },
                            'r': 15,
                            'class': 'enemies',
                            'fill': 'blue'
                          });

var move = function() {
  canvas.selectAll('.enemies')
        .transition()
        .ease('linear')
        .duration(2000)
        .attr({
          'cx': function() {
            return (Math.random() * width);
          },
          'cy': function() {
            return (Math.random() * height);
          },
          'r': (Math.random() * 25) + 5
        });
};

//Collisions




//Invocation of functions

setInterval(updateScores, 1000);
setInterval(move, 2000);