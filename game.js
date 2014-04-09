//Initialise phaser

var game = new phaser.game(400, 490, Phaser.Auto, 'game_div');


//our 'score' global variable

var score = 0;

//define the other states

game.state.add('load', load_state);  
game.state.add('menu', menu_state);  
game.state.add('play', play_state);  

// Start with the 'load' state

game.state.start('load');  