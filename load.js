var load_state = {
  preload: function() { 
    // Function called first to load all the assets
    this.game.stage.backgroundColor = '#66ccff'

    this.game.load.image('bird', 'assets/bird.png');
    this.game.load.image('pipe', 'assets/pipe.png');
   

    this.game.load.audio('jump', 'assets/jump.wav');
    },

  create: function () {
 this.game.state.start('menu');
  }

};