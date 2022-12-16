var centerX = 800/2, centerY = 600/2;
demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){
        game.load.image('gameover', 'assets/pictures/gameover.png');
        game.load.image('backbutton', 'assets/pictures/backbutton.png');
        game.load.image('facescare', 'assets/pictures/facescare.png');
    },
    create: function(){
        game.stage.backgroundColor = "#000000";
        game.add.image(0, 0, 'gameover');
        var button1 = game.add.button(20,500, 'backbutton', function(){
            
            game.state.start('state1');
        })
        //facescare = game.add.sprite(0, 0, 'facescare');
        //facescare.visible = false;
        //game.time.events.add(Phaser.Timer.SECOND * 3, showPicture1, this);
        //game.time.events.add(Phaser.Timer.SECOND * 3.1, fadePicture1, this);

    },
    update: function(){
        

    }
};

function showPicture1() {
    facescare.visible = true;
    //facescare.visible = false;

}

function fadePicture1() {
    //facescare.visible = true;
    facescare.visible = false;

}