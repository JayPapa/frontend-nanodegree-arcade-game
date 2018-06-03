// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() * (350 - 50 + 1)) + 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    // Reset the position of the enemy if it goes offscreen
    // to create a new-enemy-effect
    if(this.x > 520){
      this.x = -100;
    }
    //Check collision checks if the player is near the enemy
    //and resets the player
    if (player.x < this.x + 50 && player.x + 50 > this.x &&
    player.y < this.y + 50 && 50 + player.y > this.y){
        player.x = 200;
        player.y = 300;
      }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(){
    this.x = 200;
    this.y = 300;
    this.sprite = 'images/char-boy.png';
  };

  Player.prototype.update = function(dt) {
    //don't let the player go offscreen
    if(this.x > 400){
      this.x = 400;
    }else if (this.x < 0) {
      this.x = 0;
    }else if (this.y > 380) {
      this.y = 380;
    }else if (this.y < 0) {
      //if the player reaches the water, reset player's position and send a msg
      this.x = 200;
      this.y = 300;
      confirm('Congratulation, You Won! The game will be restarted..');
    }
  };

  Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  Player.prototype.handleInput = function(key) {
    switch (key) {
      case 'left':
        this.x -= 100;
        break;
      case 'right':
        this.x += 100;
        break;
      case 'down':
        this.y += 80;
        break;
      case 'up':
        this.y -= 80;
        break;
    }
  };

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

let enemy1 = new Enemy(-120,230);
let enemy2 = new Enemy(-120,140);
let enemy3 = new Enemy(-120,60);
let enemy4 = new Enemy(-420, 60);
const allEnemies = [enemy1, enemy2, enemy3, enemy4];

// Place the player object in a variable called player
let player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
