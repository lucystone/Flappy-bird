var menu_state = {
  create: function(){
    //call the 'start' function when pressing the space bar //
  
var space_key = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
 space_key.onDown.add(this.start, this); 

   var style = { font: "30px Arial" , fill: '#ffffff'};
      this.label_score = this.game.add.text(20,20, "0", style);

      this.jump_sound = this.game.add.audio('jump');
    
    var x = game.world.width /2,
        y = game.world.height /2;

      var text = this.game.add.text(x, y-50, "press space to start", style);
            text.anchor.setTo(0.5, 0.5);

    //if there is already a score//
    if (score > 0) {
      //display its score
      
      var score_label = this.game.add.text(x, y+50, "score: " + score, style); 
     score_label.anchor.setTo(0.5, 0.5); 

   }
 },

    start: function(){
      this.game.state.start('play');
    

  }
};