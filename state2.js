// demo = {...demo};
var centerX = 800/2, centerY = 600/2, character, weaponOut = false, speed = 0, boomove = 0, utensilmovex = true, utensilmovey = 0, facedetect = false, gems = 0, utensilmovex2 = true, utensilmovex3 = true, walkvar = 0, faceswitch = true;
demo.state2 = function(){};
demo.state2.prototype = {
    preload: function(){
        game.load.tilemap('map1', 'assets/tilemaps/demomap1.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('tiles', 'assets/tilemaps/tiles.png');
        game.load.image('tiles2', 'assets/tilemaps/tiles2.png');
        game.load.image('tiles3', 'assets/tilemaps/tiles3.png');
        game.load.image('tiles4', 'assets/tilemaps/tiles4.png');
        game.load.image('tiles5', 'assets/tilemaps/tiles5.png');
        game.load.image('tile6', 'assets/tilemaps/tile6.png');

        game.load.image('facescare', 'assets/pictures/facescare.png');
        game.load.image('bar', 'assets/pictures/bar.png');
        game.load.image('gem1', 'assets/pictures/gem1.png');
        game.load.image('gem2', 'assets/pictures/gem2.png');
        game.load.image('gem3', 'assets/pictures/gem3.png');
        game.load.image('gem4', 'assets/pictures/gem2.png');
        game.load.image('gem5', 'assets/pictures/gem3.png');

        //game.load.image('tiles4', 'assets/pictures/youwin.png');
        game.load.spritesheet('character', 'assets/pictures/char1.png', 32, 32);
        game.load.spritesheet('boo', 'assets/pictures/boo.png', 32, 32);
        game.load.spritesheet('boo1', 'assets/pictures/boo1.png', 32, 32);
        game.load.spritesheet('utensil', 'assets/pictures/untensils.png', 32, 32);
        game.load.spritesheet('utensils2', 'assets/pictures/utensils2.png', 32, 32);
        game.load.spritesheet('utensils3', 'assets/pictures/utensils3.png', 32, 32);
        game.load.spritesheet('doll', 'assets/pictures/doll.png', 48, 48);
        game.load.spritesheet('dolljumpscare', 'assets/pictures/dolljumpscare.png', 800, 600);
        game.load.spritesheet('face1', 'assets/pictures/face1.png', 32, 32);
        game.load.spritesheet('face12', 'assets/pictures/face12.png', 32, 32);
        game.load.spritesheet('face2', 'assets/pictures/face2.png', 32, 32);

        
        //load sounds
        game.load.audio('bgmusic', 'assets/music/bgmusic.mp3');
        game.load.audio('boo_scream', 'assets/music/boo_scream.wav');
        game.load.audio('boo_death', 'assets/music/boo_death.wav');
        game.load.audio('utensil_scream', 'assets/music/utensil_scream.wav');
        game.load.audio('utensil_death', 'assets/music/utensil_death.wav');
        game.load.audio('char_swordswing', 'assets/music/char_swordswing.wav');
        game.load.audio('unlock', 'assets/music/unlock.mp3');
        game.load.audio('dollscream', 'assets/music/dollscream.wav');
        game.load.audio('collectGemSE', 'assets/music/collectGemSE.mp3');
        game.load.image('gameclear', 'assets/pictures/youwin.png');
        
        
                

    },
    create: function(){
        game.stage.backgroundColor = "#000000";
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // bg = game.add.sprite(0, 0, 'map');
        
        var map = game.add.tilemap('map1');
        map.addTilesetImage('tiles1', 'tiles');
        map.addTilesetImage('tiles2', 'tiles2');
        map.addTilesetImage('tiles3', 'tiles3');
        map.addTilesetImage('tiles4', 'tiles4');
        map.addTilesetImage('tiles5', 'tiles5');
        map.addTilesetImage('tile6', 'tile6');
        
        
        Ground = map.createLayer('Ground');
        Walls = map.createLayer('Walls');
        carpets = map.createLayer('carpets');
        Decor = map.createLayer('Decor');
        collisiondecor = map.createLayer('collisiondecor');
        noncollisiondecor = map.createLayer('noncollisiondecor');
        
        // layer = map.createLayer('Items')

        //Collision physics
        // map.setCollision(34, true, 'Walls');
        // map.setCollision(258, true, 'Walls');
        map.setCollisionBetween(33, 36, true, 'Walls');
        map.setCollisionBetween(256, 260, true, 'Walls');
        map.setCollisionBetween(1000, 8000, true, 'Decor');
        map.setCollisionBetween(451, 452, true, 'Walls');
        map.setCollisionBetween(482, 484, true, 'Walls');
        map.setCollisionBetween(1000, 8000, true, 'collisiondecor');
        map.setCollisionBetween(1, 10000, true, 'collisiondecor');

        // map.setCollisionBetween(1603, 1606, true, 'Decor');
        // map.setCollisionBetween(1611, 1616, true, 'Decor');
        // map.setCollision(35, true, 'Walls');
        // map.setCollision(289, true, 'Walls');
        // map.setCollisionBetween(1, 289, true, 'Walls');

        game.world.setBounds(0, 0, 6000, 4000);
        //All moving objects in the game
        character = game.add.sprite(950, 1200, 'character');
        boo = game.add.sprite(800, 1100, 'boo');
        boo1 = game.add.sprite(560, 624, 'boo1');
        utensil = game.add.sprite(900, 2000, 'utensil');
        utensils2 = game.add.sprite(1872, 800, 'utensils2');
        utensils3 = game.add.sprite(1488, 800, 'utensils3');
        doll = game.add.sprite(3504, 1536, 'doll');
        face1 = game.add.sprite(1982, 2040, 'face1');
        face12 = game.add.sprite(1982, 2040, 'face12');
        face12.visible = false;
        face2 = game.add.sprite(650, 1210, 'face2');
        gem1 = game.add.image(2102, 2240, 'gem1');
        //gem4 = game.add.image(character.x - 280, character.y + 220, 'gem1');
        //gem4.visible = false;
        gem2 = game.add.image(2262, 616, 'gem2');
        //gem5 = game.add.image(character.x - 260, character.y + 220, 'gem1');
        //gem5.visible = false;
        gem3 = game.add.image(3504, 1536, 'gem3');
        gem3.visible = false;
        //gem6 = game.add.image(character.x - 240, character.y + 220, 'gem1');
        //gem6.visible = false;
        gem4 = game.add.image(752, 528, 'gem4');
        gem5 = game.add.image(4080, 1025, 'gem5');
        bar = game.add.sprite(character.x - 400, character.y + 197, 'bar');
        text1 = game.add.text(character.x - 380, character.y + 220, 'Gems collected: ' + gems, { font: "15px Arial", fill: "#ff0000" });
        //Dialogues
        //var bar = game.add.graphics();
        //bar.beginFill(0x000000, 1);
        //bar.lineStyle(3, 0xff0000, 1);
        //bar.drawRect(character.x - 400, character.y + 200, 800, 100);
        //updateBar();
        //game.world.bringToTop(bar);
        //text = game.add.text(32, 32, '', { font: "15px Arial", fill: "#ff0000" });
        //var fog = game.add.sprite(0, 0, 'fog');
        //filter = game.add.sprite(0, 0, 'filter');

        //filter2 = game.add.drawRect(0, 0, 2500, 2500);
        //filter2.beginFill(0xffffff, 0);

        dolljumpscare = game.add.sprite(0, 0, 'dolljumpscare');
        dolljumpscare.visible = false;


        character.anchor.setTo(0.5, 0.5);
        gem1.anchor.setTo(0.5, 0.5);
        gem2.anchor.setTo(0.5, 0.5);
        gem3.anchor.setTo(0.5, 0.5);
        gem4.anchor.setTo(0.5, 0.5);
        gem5.anchor.setTo(0.5, 0.5);
        boo.anchor.setTo(0.5, 0.5);
        utensil.anchor.setTo(0.5, 0.5);
        utensils2.anchor.setTo(0.5, 0.5);
        utensils3.anchor.setTo(0.5, 0.5);
        doll.anchor.setTo(0.5, 0.5);
        // doll.alpha = 0;
        character.scale.setTo(0.7, 0.7);

        //animation
        character.animations.add('walkleft', [15, 16]);
        character.animations.add('walkright', [0, 1]);
        character.animations.add('walkup', [10, 13, 14]);
        character.animations.add('walkdown', [5, 8, 9]);
        character.animations.add('standstill', [5]);
        upanime = character.animations.add('drawWeaponWalkUp', [11]);
        
        downanime = character.animations.add('drawWeaponWalkDown', [6]);
        rightanime = character.animations.add('drawWeaponWalkRight', [3]);
        leftanime = character.animations.add('drawWeaponWalkLeft', [18]);
        character.animations.add('attackUp', [12, 11]);
        character.animations.add('attackDown', [7, 6]);
        character.animations.add('attackRight', [4, 3]);
        character.animations.add('attackLeft', [19, 18]);
        //character.animations.add('standweaponLeft', [18]);
        //character.animations.add('standweaponRight', [3]);
        //character.animations.add('standweaponUp', [11]);
        //character.animations.add('standweaponDown', [6]);

        djs = dolljumpscare.animations.add('djumpscare', [0, 1, 2, 3, 4]);
        djs.onComplete.add(animationStopped, this);
        face2.animations.add('face2move', [0, 1, 2, 3, 4, 5]);

        //Physics Enable
        game.physics.enable(character);
        game.physics.enable(boo);
        game.physics.enable(boo1);
        game.physics.enable(utensil);
        game.physics.enable(utensils2);
        game.physics.enable(utensils3);
        game.physics.enable(doll);
        game.physics.enable(face12);
        game.physics.enable(face2);

        character.body.collideWorldBounds = true;

        //Sound Effects
        clockSE = game.add.audio('bgmusic');
        clockSE.loop = true;
        clockSE.play();
        booScream = game.add.audio('boo_scream');
        booDeath = game.add.audio('boo_death');
        charSwordswing = game.add.audio('char_swordswing', 0.05);
        charWalking = game.add.audio('char_walking');
        utensilScream = game.add.audio('utensil_scream');
        dollscream = game.add.audio('dollscream');
        utensilDeath = game.add.audio('utensil_death');
        unlock = game.add.audio('unlock');
        collectGemSE = game.add.audio('collectGemSE');
        //jumpscare countdown
        facescare = game.add.sprite(400, 400, 'facescare');
        facescare.anchor.setTo(0.5, 0.5);
        facescare.visible = false;
        game.time.events.add(Phaser.Timer.SECOND * 30, showPicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 30.05, fadePicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 150, showPicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 150.05, fadePicture2, this);        
        game.time.events.add(Phaser.Timer.SECOND * 270, showPicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 270.05, fadePicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 400, showPicture2, this);
        game.time.events.add(Phaser.Timer.SECOND * 400.05, fadePicture2, this);

        

        //Camera
        game.camera.follow(character);
        // game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);

        // var dialogue = game.add.Rect(0, 500, 800, 100, 0x6666ff)
        // game.tweens.add({

        //     targets: dialogue,
        //     alpha: 0.5,

    
        // });

        // fog of war
        fogCircle = new Phaser.Circle(400, 300, 350);

        fringe = 64;
    
        //  Create a new bitmap data the same size as our game
        bmd = game.make.bitmapData(800, 500);
    
        updateFogOfWar();
        
        var fogSprite = bmd.addToWorld();
        //Disable the effect:
        //fogSprite.visible = false;
        fogSprite.fixedToCamera = true;
    
        cursors = game.input.keyboard.createCursorKeys();
    
        var tween = game.add.tween(player).to({ x: 2000, y: 800 }, 15000, "Linear", true, 0, -1, true);
    
        tween.onLoop.add(function (sprite, tween) {
            sprite.scale.x *= -1
        }, 0, this);


    },
    update: function(){

        game.physics.arcade.collide(character, Walls);
        game.physics.arcade.collide(character, Decor, function() {
            console.log("collision");
            // if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
            //     var textt = game.add.text(character.x, character.y + 200, "Nothing special");
            //     textt.bringToTop();
            // }
            // else{
            //     textt.destroy();
            // }
        });
        //enemy movement

        if(utensilmovex == true){
            if(utensil.x > 1100){
                utensilmovex = false;
            }
            utensil.x += 1;
        }
        if(utensilmovex==false){
            if(utensil.x < 750){
                utensilmovex = true;
            }
            utensil.x -= 1;
        }
        
        if(utensilmovex2 == true){
            if(utensils2.x > 2002){
                utensilmovex2 = false;
            }
            utensils2.x += 1;
        }
        if(utensilmovex2==false){
            if(utensils2.x < 1822){
                utensilmovex2 = true;
            }
            utensils2.x -= 1;
        }

        if(utensilmovex3 == true){
            if(utensils3.x > 1618){
                utensilmovex3 = false;
            }
            utensils3.x += 1;
        }
        if(utensilmovex3==false){
            if(utensils3.x < 1338){
                utensilmovex3 = true;
            }
            utensils3.x -= 1;
        }

        if(face2.body.velocity.x != 0 || face2.body.velocity.y != 0 ){
            face2.animations.play('face2move', 8, true);
        }

        // if(utensil.x > 444){
        //     utensil.setPosition(0, 256);
        //     utensil.x += 1;
        // }
        if (game.physics.arcade.distanceBetween(boo, character) < 90) {
            // booScream.play();
            
            if (character.x < boo.x && boo.body.velocity.x >= 0) {
                
                
                boo.body.velocity.x = -50;
            }
            
            else if (character.x > boo.x && boo.body.velocity.x <= 0) {
                
                
                boo.body.velocity.x = 50;

            }
            else if(character.y < boo.y && boo.body.velocity.y >= 0){
                
                boo.body.velocity.y = -50;
            }
            else if(character.y > boo.y && boo.body.velocity.y <= 0){
                
                boo.body.velocity.y = 50;
            }
            }
        else{
            boo.body.velocity.x = 0;
            boo.body.velocity.y = 0;
        }

        if (game.physics.arcade.distanceBetween(boo1, character) < 90) {
            // booScream.play();            
            if (character.x < boo1.x && boo1.body.velocity.x >= 0) {                
                boo1.body.velocity.x = -50;
            }
            
            else if (character.x > boo1.x && boo1.body.velocity.x <= 0) {               
                boo1.body.velocity.x = 50;
            }
            else if(character.y < boo1.y && boo1.body.velocity.y >= 0){                
                boo1.body.velocity.y = -50;
            }
            else if(character.y > boo1.y && boo1.body.velocity.y <= 0){                
                boo1.body.velocity.y = 50;
            }
            }
        else{
            boo1.body.velocity.x = 0;
            boo1.body.velocity.y = 0;
        }

        if (game.physics.arcade.distanceBetween(face2, character) < 120) {
            // booScream.play();
            
            if (character.x < face2.x && face2.body.velocity.x >= 0) {               
                face2.body.velocity.x = -50;
            }
            
            else if (character.x > face2.x && face2.body.velocity.x <= 0) {               
                face2.body.velocity.x = 50;

            }
            else if(character.y < face2.y && face2.body.velocity.y >= 0){                
                face2.body.velocity.y = -50;
            }
            else if(character.y > face2.y && face2.body.velocity.y <= 0){                
                face2.body.velocity.y = 50;
            }
            }
        else{
            face2.body.velocity.x = 0;
            face2.body.velocity.y = 0;
        }

        if (game.physics.arcade.distanceBetween(doll, character) < 150) {
            // booScream.play();            
            if (character.x < doll.x && doll.body.velocity.x >= 0) {                                
                doll.body.velocity.x = -70;
            }           
            else if (character.x > doll.x && doll.body.velocity.x <= 0) {                               
                doll.body.velocity.x = 70;
            }
            else if(character.y < doll.y && doll.body.velocity.y >= 0){                
                doll.body.velocity.y = -70;
            }
            else if(character.y > doll.y && doll.body.velocity.y <= 0){                
                doll.body.velocity.y = 70;
            }
            }
        else{
            doll.body.velocity.x = 0;
            doll.body.velocity.y = 0;
        }
        //Character movement
        if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){

            walkvar = 1;
            ////////////////made changes
            //////previous > character.x += speed;
            //// instead of changing the coordinates, you need to give it velocity

            character.body.velocity.x = 150;
            character.body.velocity.y = 0;
            character.scale.setTo(0.7, 0.7);
            character.animations.stop('walkleft');
            character.animations.stop('walkup');
            character.animations.stop('walkdown');
            character.animations.play('walkright', 14, true);            

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
            walkvar = 2;
            character.body.velocity.x = -150;
            character.body.velocity.y = 0;
            character.scale.setTo(0.7, 0.7);
            character.animations.stop('walkright');
            character.animations.stop('walkup');
            character.animations.stop('walkdown');
            character.animations.play('walkleft', 14, true);

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.UP)){
            walkvar = 3;
            character.body.velocity.x = 0;
            character.body.velocity.y = -150;
            character.animations.stop('walkright');
            character.animations.stop('walkleft');
            character.animations.stop('walkdown');
            character.animations.play('walkup', 14, true);
            
            

        }
        else if(game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
            walkvar = 4;
            character.body.velocity.x = 0;
            character.body.velocity.y = 150;
            character.animations.stop('walkleft');
            character.animations.stop('walkright');
            character.animations.stop('walkup');
            character.animations.play('walkdown', 14, true);

        }
        else{
            character.body.velocity.x = 0;
            character.body.velocity.y = 0;
            character.animations.stop('walkleft');
            character.animations.stop('walkright');
            character.animations.stop('walkup');
            character.animations.stop('walkdown');
            //character.animations.stop('drawWeapon');
            
        }

        //Enemy Movement
        //while(boomove < 2000){
            // boo.x += speed;
            // boo.x += speed;
            // boo.x += speed;
            // boo.x += speed;
            // boo.y += speed;
            // boo.y += speed;
            // boo.y += speed;
            // boo.y += speed;
            // boo.x -= speed;
            // boo.x -= speed;
            // boo.x -= speed;
            // boo.x -= speed;
            // boo.y -= speed;
            // boo.y -= speed;
            // boo.y -= speed;
            // boo.y -= speed;
            // boomove += 1;
            /*tempvar = Math.floor(4*Math.random(0, 1))
            if(tempvar === 0){
                boo.x += speed;
            }
            else if(tempvar === 1){
                boo.x -= speed;
            }
            else if(tempvar === 2){
                boo.y += speed;
            }
            else if(tempvar === 3){
                boo.y -= speed;
            }*/
        //}



        //Weapon equipped
        if(game.input.keyboard.isDown(Phaser.Keyboard.SHIFT)){
            if(walkvar === 2){

                character.animations.play('drawWeaponWalkLeft');
            }
            else if(walkvar === 1){

                character.animations.play('drawWeaponWalkRight');
            }
            else if(walkvar === 3){

                character.animations.play('drawWeaponWalkUp');
            }
            else if(walkvar === 4){

                character.animations.play('drawWeaponWalkDown');
            }
            
            if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){

                charSwordswing.play();
                if(walkvar === 2){
                    character.animations.stop('drawWeaponWalkLeft');
                    character.animations.play('attackLeft', 14, false);
                    character.animations.stop('attackLeft');

                }
                else if(walkvar === 1){
                    character.animations.stop('drawWeaponWalkRight');
                    character.animations.play('attackRight', 14, false);
                    character.animations.stop('attackRight');

                }
                else if(walkvar === 3){
                    character.animations.stop('drawWeaponWalkUp');
                    character.animations.play('attackUp', 14, false);
                    character.animations.stop('attackUp');

                }
                else if(walkvar === 4){
                    character.animations.stop('drawWeaponWalkDown');
                    character.animations.play('attackDown', 14, false);
                    character.animations.stop('attackDown');

                }

                if(Math.abs(character.x - boo.x) < 40 && Math.abs(character.y - boo.y) < 40){
                    boo.x = 0;
                    boo.y = 0;
                    boo.alpha = 0;
                    booDeath.play();
                }

                if(Math.abs(character.x - boo1.x) < 40 && Math.abs(character.y - boo1.y) < 40){
                    boo1.x = 0;
                    boo1.y = 0;
                    boo1.alpha = 0;
                    booDeath.play();
                }

                if(Math.abs(character.x - doll.x) < 40 && Math.abs(character.y - doll.y) < 40){
                    doll.x = 0;
                    doll.y = 0;
                    doll.alpha = 0;
                    gem3.visible = true;
                    booDeath.play();
                    //spawnDoll();
                }

                if(Math.abs(character.x - utensil.x) < 40 && Math.abs(character.y - utensil.y) < 40){
                    utensil.x = 0;
                    utensil.y = 0;
                    utensil.alpha = 0;
                    utensilDeath.play();
                }

                if(Math.abs(character.x - utensils2.x) < 40 && Math.abs(character.y - utensils2.y) < 40){
                    utensils2.x = 0;
                    utensils2.y = 0;
                    utensils2.alpha = 0;
                    utensilDeath.play();
                }

                if(Math.abs(character.x - utensils3.x) < 40 && Math.abs(character.y - utensils3.y) < 40){
                    utensils3.x = 0;
                    utensils3.y = 0;
                    utensils3.alpha = 0;
                    utensilDeath.play();
                }
                if(Math.abs(character.x - face2.x) < 40 && Math.abs(character.y - face2.y) < 40){
                    face2.x = 0;
                    face2.y = 0;
                    face2.alpha = 0;
                    utensilDeath.play();
                }

            }
            else{
                character.animations.stop('attackLeft');
            }

                if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
                    //character.scale.setTo(0.7, 0.7);
                    character.animations.play('drawWeaponWalkLeft', 14, false);
                    if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                        charSwordswing.play();
                        character.animations.stop('drawWeaponWalkLeft');
                        character.animations.play('attackLeft', 14, false);
                        character.animations.stop('attackLeft');
                        if(Math.abs(character.x - boo.x) < 40 && Math.abs(character.y - boo.y) < 40){
                            boo.x = 0;
                            boo.y = 0;
                            boo.alpha = 0;
                            booDeath.play();
                        }
                        if(Math.abs(character.x - boo1.x) < 40 && Math.abs(character.y - boo1.y) < 40){
                            boo1.x = 0;
                            boo1.y = 0;
                            boo1.alpha = 0;
                            booDeath.play();
                        }
                        if(Math.abs(character.x - doll.x) < 40 && Math.abs(character.y - doll.y) < 40){
                            doll.x = 0;
                            doll.y = 0;
                            doll.alpha = 0;
                            gem3.visible = true;
                            booDeath.play();
                            //spawnDoll();
                        }

                        if(Math.abs(character.x - utensil.x) < 40 && Math.abs(character.y - utensil.y) < 40){
                            utensil.x = 0;
                            utensil.y = 0;
                            utensil.alpha = 0;
                            utensilDeath.play();
                        }

                        if(Math.abs(character.x - utensils2.x) < 40 && Math.abs(character.y - utensils2.y) < 40){
                            utensils2.x = 0;
                            utensils2.y = 0;
                            utensils2.alpha = 0;
                            utensilDeath.play();
                        }

                        if(Math.abs(character.x - utensils3.x) < 40 && Math.abs(character.y - utensils3.y) < 40){
                            utensils3.x = 0;
                            utensils3.y = 0;
                            utensils3.alpha = 0;
                            utensilDeath.play();
                        }
                        if(Math.abs(character.x - face2.x) < 40 && Math.abs(character.y - face2.y) < 40){
                            face2.x = 0;
                            face2.y = 0;
                            face2.alpha = 0;
                            utensilDeath.play();
                        }

                    }
                    else{
                        character.animations.stop('attackLeft');
                    }
                }
                
                    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
                        character.animations.play('drawWeaponWalkRight', 14, false);
                        if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                            charSwordswing.play();
                            character.animations.stop('drawWeaponWalkRight');
                            character.animations.play('attackRight', 14, false);
                            character.animations.stop('attackRight');
                            if(Math.abs(character.x - boo.x) < 40 && Math.abs(character.y - boo.y) < 40){
                                boo.x = 0;
                                boo.y = 0;
                                boo.alpha = 0;
                                booDeath.play();

                            }
                            if(Math.abs(character.x - boo1.x) < 40 && Math.abs(character.y - boo1.y) < 40){
                                boo1.x = 0;
                                boo1.y = 0;
                                boo1.alpha = 0;
                                booDeath.play();
                            }
                            if(Math.abs(character.x - doll.x) < 40 && Math.abs(character.y - doll.y) < 40){
                                doll.x = 0;
                                doll.y = 0;
                                doll.alpha = 0;
                                booDeath.play();
                                gem3.visible = true;
                                //spawnDoll();
                            }

                            if(Math.abs(character.x - utensil.x) < 40 && Math.abs(character.y - utensil.y) < 40){
                                utensil.x = 0;
                                utensil.y = 0;
                                utensil.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils2.x) < 40 && Math.abs(character.y - utensils2.y) < 40){
                                utensils2.x = 0;
                                utensils2.y = 0;
                                utensils2.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils3.x) < 40 && Math.abs(character.y - utensils3.y) < 40){
                                utensils3.x = 0;
                                utensils3.y = 0;
                                utensils3.alpha = 0;
                                utensilDeath.play();
                            }
                            if(Math.abs(character.x - face2.x) < 40 && Math.abs(character.y - face2.y) < 40){
                                face2.x = 0;
                                face2.y = 0;
                                face2.alpha = 0;
                                utensilDeath.play();
                            }

                        }
                        else{
                            character.animations.stop('attackRight');
                        }
                    }
                    else if (game.input.keyboard.isDown(Phaser.Keyboard.UP)){
                        character.animations.play('drawWeaponWalkUp', 14, false);
                        if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                            charSwordswing.play();
                            character.animations.stop('drawWeaponWalkUp');
                            character.animations.play('attackUp', 14, false);
                            character.animations.stop('attackUp');
                            if(Math.abs(character.x - boo.x) < 40 && Math.abs(character.y - boo.y) < 40){
                                boo.x = 0;
                                boo.y = 0;
                                boo.alpha = 0;
                                booDeath.play();
                                
                            }
                            if(Math.abs(character.x - boo1.x) < 40 && Math.abs(character.y - boo1.y) < 40){
                                boo1.x = 0;
                                boo1.y = 0;
                                boo1.alpha = 0;
                                booDeath.play();
                            }
                            if(Math.abs(character.x - doll.x) < 40 && Math.abs(character.y - doll.y) < 40){
                                doll.x = 0;
                                doll.y = 0;
                                doll.alpha = 0;
                                booDeath.play();
                                gem3.visible = true;
                                //spawnDoll();
                            }

                            if(Math.abs(character.x - utensil.x) < 40 && Math.abs(character.y - utensil.y) < 40){
                                utensil.x = 0;
                                utensil.y = 0;
                                utensil.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils2.x) < 40 && Math.abs(character.y - utensils2.y) < 40){
                                utensils2.x = 0;
                                utensils2.y = 0;
                                utensils2.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils3.x) < 40 && Math.abs(character.y - utensils3.y) < 40){
                                utensils3.x = 0;
                                utensils3.y = 0;
                                utensils3.alpha = 0;
                                utensilDeath.play();
                            }
                            if(Math.abs(character.x - face2.x) < 40 && Math.abs(character.y - face2.y) < 40){
                                face2.x = 0;
                                face2.y = 0;
                                face2.alpha = 0;
                                utensilDeath.play();
                            }

                        }
                        else{
                            character.animations.stop('attackUp');
                        }
                    }
                    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)){
                        character.animations.play('drawWeaponWalkDown', 14, false);
                        if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                            charSwordswing.play();
                            character.animations.stop('drawWeaponWalkDown');
                            character.animations.play('attackDown', 14, false);
                            character.animations.stop('attackDown');
                            if(Math.abs(character.x - boo.x) < 40 && Math.abs(character.y - boo.y) < 40){
                                boo.x = 0;
                                boo.y = 0;
                                boo.alpha = 0;
                                booDeath.play();
                                
                            }
                            if(Math.abs(character.x - boo1.x) < 40 && Math.abs(character.y - boo1.y) < 40){
                                boo1.x = 0;
                                boo1.y = 0;
                                boo1.alpha = 0;
                                booDeath.play();
                            }
                            if(Math.abs(character.x - doll.x) < 40 && Math.abs(character.y - doll.y) < 40){
                                doll.x = 0;
                                doll.y = 0;
                                doll.alpha = 0;
                                booDeath.play();
                                gem3.visible = true;
                                //spawnDoll();
                            }
                            if(Math.abs(character.x - utensil.x) < 40 && Math.abs(character.y - utensil.y) < 40){
                                utensil.x = 0;
                                utensil.y = 0;
                                utensil.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils2.x) < 40 && Math.abs(character.y - utensils2.y) < 40){
                                utensils2.x = 0;
                                utensils2.y = 0;
                                utensils2.alpha = 0;
                                utensilDeath.play();
                            }
    
                            if(Math.abs(character.x - utensils3.x) < 40 && Math.abs(character.y - utensils3.y) < 40){
                                utensils3.x = 0;
                                utensils3.y = 0;
                                utensils3.alpha = 0;
                                utensilDeath.play();
                            }
                            if(Math.abs(character.x - face2.x) < 40 && Math.abs(character.y - face2.y) < 40){
                                face2.x = 0;
                                face2.y = 0;
                                face2.alpha = 0;
                                utensilDeath.play();
                            }

                        }
                        else{
                            character.animations.stop('attackDown');
                        }
                    }
                    // else if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                    //     if(drawWeaponWalkUp.isPlaying === true){
                    //         character.animations.stop('drawWeaponWalkUp');
                    //         character.animations.play('attackUp', 14, false);
                    //         character.animations.stop('attackUp');
                    //     }

                    // }
                }
                else{
                    character.animations.stop('attackDown');
                    character.animations.stop('attackUp');
                    character.animations.stop('attackRight');
                    character.animations.stop('attackLeft');
                    
                }


        



            //boo kill 
            if(boo.alpha != 0){
                if(Math.abs(boo.x - character.x)<10){
                    if(Math.abs(boo.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }
            
            if(boo1.alpha != 0){
                if(Math.abs(boo1.x - character.x)<10){
                    if(Math.abs(boo1.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }
            if(face2.alpha != 0){
                if(Math.abs(face2.x - character.x)<10){
                    if(Math.abs(face2.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }            
            // utensil kill
            if(utensil.alpha != 0){
                if(Math.abs(utensil.x - character.x)<10){
                    if(Math.abs(utensil.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }
            if(utensils2.alpha != 0){
                if(Math.abs(utensils2.x - character.x)<10){
                    if(Math.abs(utensils2.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }

            if(utensils3.alpha != 0){
                if(Math.abs(utensils3.x - character.x)<10){
                    if(Math.abs(utensils3.y - character.y)<10){
                        clockSE.stop();
                        dollscream.play();
                        game.state.start('state3');
                    }
                    
                }
            }
            if(doll.alpha != 0){
                if(Math.abs(doll.x - character.x)<10){
                    if(Math.abs(doll.y - character.y)<10){
                        clockSE.stop();
                        game.state.start('state5');
                        //fogSprite.visible = false;
                        // dolljumpscare.x = character.x - 400;
                        // dolljumpscare.y = character.x - 300;
                        // dolljumpscare.visible = true;
                        // dollscream.play();
                        // dolljumpscare.animations.play('djumpscare', 3, false);
                        
                        //dolljumpscare.visible = false;
                        // dolljumpscare2.x = character.x - 400;
                        // dolljumpscare2.y = character.x - 300;
                        // dolljumpscare2.visible = true;
                        // dolljumpscare2.animations.play('djumpscare2', 8, false);
                        // if(djumpscare.animations.loopCount === 1){
                        //     game.state.start('state3');
                        // }

                        //game.state.start('state3');
                        // if(djumpscare.index === 4){
                        //     game.state.start('state3');
                        // }
                        //djumpscare.onComplete.add(animationStopped, this);
                    }
                    
                }
            }
            

        if(Math.abs(character.x - 3670)<44 && Math.abs(character.y - 1550) < 44){
            if(gems === 5){
                if(game.input.keyboard.isDown(Phaser.Keyboard.Z)){
                    clockSE.stop();

                    game.state.start('state4');
                }
            }
        }
        updateBar();
        collectGem1();
        collectGem2();
        collectGem3();
        collectGem4();
        collectGem5();
        unlockdoor();
        if(Math.abs(character.x - 3008)<30 && Math.abs(character.y - 1344) < 30){
            if(faceswitch === true){
                face2.alpha = 1;
                face2.x = 2768;
                face2.y = 1330;
                booScream.play();
                faceswitch = false;
            }


        }
        }
        

    
};

function spawnDoll(){
    if(boo.alpha == 0 && utensil.alpha == 0){
        doll.x = 255;
        doll.y = 255;
        unlock.play();
    }
}

function animationStopped(sprite, animation){
    game.state.start('state3');
}

function move(pointer, x, y) {

	mask.x = x - 100;
	mask.y = y - 100;

}

function update ()
{
    fogCircle.x = player.x;
    fogCircle.y = player.y;



    updateFogOfWar();
}

function updateFogOfWar ()
{
    var gradient = bmd.context.createRadialGradient(
        fogCircle.x - game.camera.x,
        fogCircle.y - game.camera.y,
        fogCircle.radius,
        fogCircle.x - game.camera.x,
        fogCircle.y - game.camera.y,
        fogCircle.radius - fringe
    );
    //change the last parameter for the rgba in the first line to change the alpha of darkness
    gradient.addColorStop(0, 'rgba(0,0,0,0.995');
    gradient.addColorStop(0.4, 'rgba(0,0,0,0.7');
    gradient.addColorStop(1, 'rgba(0,0,0,0.4');

    bmd.clear();
    bmd.context.fillStyle = gradient;
    bmd.context.fillRect(0, 0, 800, 600);
}

function showPicture2() {
    facescare.x = character.x;
    facescare.y = character.y;
    facescare.visible = true;
    //facescare.visible = false;

}
function fadePicture2() {
    facescare.x = character.x;
    facescare.y = character.y;
    //facescare.visible = true;
    facescare.visible = false;

}


function updateBar(){
    bar.x = character.x - 410;
    bar.y = character.y + 197;
    text1.x = character.x - 380;
    text1.y = character.y + 220;
    if(gems<5){
        text1.setText('Gems collected: ' + gems);
    }

}

function collectGem1(){
    if(Math.abs(character.x - gem1.x) < 15 && Math.abs(character.y - gem1.y) < 15 ){
        gem1.x = 0;
        gem1.y = 0;
        gems++;
        collectGemSE.play();
        face12.visible = true;
        face1.visible = false;
        face12.body.velocity.y = 500;
        face12.body.velocity.x = 200;
        dollscream.play();

    }
    
}

function collectGem2(){
    if(Math.abs(character.x - gem2.x) < 15 && Math.abs(character.y - gem2.y) < 15 ){
        gem2.x = 0;
        gem2.y = 0;
        gems++;
        collectGemSE.play();
    }
    
}

function collectGem3(){
    if(Math.abs(character.x - gem3.x) < 15 && Math.abs(character.y - gem3.y) < 15 ){
        gem3.x = 0;
        gem3.y = 0;
        gems++;
        collectGemSE.play();
    }
    
}

function collectGem4(){
    if(Math.abs(character.x - gem4.x) < 15 && Math.abs(character.y - gem4.y) < 15 ){
        gem4.x = 0;
        gem4.y = 0;
        gems++;
        collectGemSE.play();
    }
    
}

function collectGem5(){
    if(Math.abs(character.x - gem5.x) < 15 && Math.abs(character.y - gem5.y) < 15 ){
        gem5.x = 0;
        gem5.y = 0;
        gems++;
        collectGemSE.play();
        boo.x = 3952;
        boo.y = 1080;
        boo.alpha = 1;
        booScream.play();
    }
    
}

function unlockdoor(){
    if (gem1.x === 0 && gem1.y === 0 && gem2.x === 0 && gem2.y === 0 && gem3.x === 0 && gem3.y === 0 && gem4.x === 0 && gem4.y === 0 && gem5.x === 0 && gem5.y === 0){
        unlock.play();
        gem1.x = 1;
        text1.setText('The door is unlocked');
    }
    
}