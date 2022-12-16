const game = new Phaser.Game(800, 600, Phaser.AUTO, '', { 
    preload: preload, 
    create: create, 
    update: update
});

function preload() {
    game.load.image('map', 'assets/bg.png');
    game.load.spritesheet('character', 'assets/char1.png');

}

var char;
var bg;
var nightWorld = {
    velocity: 3
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0,0,'map');
    game.add.sprite(0,0,'circle');
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;

    game.stage.backgroundColor = '#87CEEB';

    this.char = game.add.sprite(game.world.centerX, game.world.centerY, 'guy');

    this.char.anchor.set(0.5, 0.5);
    this.keys = game.input.keyboard.createCursorKeys();

}

function update() {
    if (this.keys.left.isDown) {
        this.char.x -= nightWorld.velocity;
    }
    if (this.keys.right.isDown) {
        this.char.x += nightWorld.velocity;
    }
    if (this.keys.up.isDown) {
        this.char.y -= nightWorld.velocity;
    }
    if (this.keys.down.isDown) {
        this.char.y += nightWorld.velocity;
    }
}