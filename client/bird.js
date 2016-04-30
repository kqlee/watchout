var Bird = function(x, y) {
  this.x = x;
  this.y = y;
};

Bird.prototype.jump = function() {
  if (this.y < window.canvas.width) {
    //move our bird up the screen
    this.y -= 10;
  }
};