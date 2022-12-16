var centerX = 800/2, centerY = 600/2;
demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){
        game.load.image('gameover', 'assets/pictures/gameover.png');
        game.load.image('backbutton', 'assets/pictures/backbutton.png');
        game.load.spritesheet('dolljumpscare', 'assets/pictures/dolljumpscare.png', 800, 600);
        game.load.audio('dollscream', 'assets/music/dollscream.wav');
    },
    create: function(){
        game.stage.backgroundColor = "#000000";
        game.add.image(0, 0, 'gameover');

        var button1 = game.add.button(20,500, 'backbutton', function(){
            
            game.state.start('state1');
        })
        dolljumpscare = game.add.sprite(0, 0, 'dolljumpscare');
        //dolljumpscare.visible = false;
        dollscream = game.add.audio('dollscream');
        djs = dolljumpscare.animations.add('djumpscare', [0, 1, 2, 3, 4]);
        djs.onComplete.add(animationStopped, this);
        dolljumpscare.animations.play('djumpscare', 10, false);
        dollscream.play();

    },
    update: function(){
        

    }
};
function animationStopped(sprite, animation){
    dolljumpscare.visible = false;
}