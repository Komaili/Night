var demo = {};
var centerX = 800/2, centerY = 600/2;
demo.state1 = function(){};
demo.state1.prototype = {
    preload: function(){
        game.load.image('title', 'assets/pictures/titlescreen.png');
        game.load.audio('titlescreen', 'assets/music/titlescreen.mp3');
    },
    create: function(){
        game.stage.backgroundColor = "#000000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        //console.log('state2');
        bg = game.add.button(0, 0, 'title', startGame1);
        
        title = game.add.audio('titlescreen');
        title.loop = true;
        title.play();

    },
    update: function(){

    }
};

function startGame1(){
    game.state.start("state6");
    title.stop();
    wordIndex = 0;
    lineIndex = 0;

    wordDelay = 120;
    lineDelay = 400;
}