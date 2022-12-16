var centerX = 800/2, centerY = 600/2;
demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){
        game.load.image('gameclear', 'assets/pictures/youwin.png');
        //game.load.spritesheet('dolljumpscare', 'assets/pictures/dolljumpscare.png', 800, 600);
    },
    create: function(){
        game.stage.backgroundColor = "#000000";
        var clear = game.add.sprite(0, 0, 'gameclear');



        //dolljumpscare = game.add.sprite(0, 0, 'dolljumpscare');
        //dolljumpscare.visible = false;
        //dolljumpscare.animations.add('djumpscare', [0, 1, 2, 3, 4]);
        //djumpscare.onComplete.add(animationStopped, this);
    },
    update: function(){
        //game.debug.geom(floor,'#0fffff');
        //dolljumpscare.animations.play('djumpscare', 8, false);
    }
};

function move(pointer, x, y) {

	mask.x = x - 100;
	mask.y = y - 100;

}

