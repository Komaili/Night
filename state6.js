var centerX = 800/2, centerY = 600/2;
var content = [
    "Andy loves going to haunted houses around this time of the year.",
    "A new haunted house called “Nightfall Mansion” opened up for an exclusive immersive",  
    "experience of the year.",
    "What Andy didn’t know is that the mansion is actually haunted by ghosts, ",
    "and will never experience anything like this ever.",
    "",
    "Controls: Arrow keys to move",
    "Shift to equip a weapon",
    "Press 'Z' to attack",
    "",
    "Explore the house and collect 5 gems to unlock the exit for Andy",
    "Find the door that is the exit and press Z to escape the mansion. "
    
];

var line = [];

var wordIndex = 0;
var lineIndex = 0;

var wordDelay = 120;
var lineDelay = 400;
demo.state6 = function(){};
demo.state6.prototype = {
    preload: function(){
        //game.load.image('playbutton', 'assets/pictures/playbutton.png');
        game.load.image('handprint', 'assets/pictures/handprint.png');
        game.load.audio('titlescreen', 'assets/music/titlescreen.mp3');
        game.load.audio('drummy', 'assets/music/drummy.mp3');
    },
    create: function(){
        text = game.add.text(32, 32, '', { font: "17px Arial", fill: "#ff0000" });
        drummy = game.add.audio('drummy');
        bg = game.add.audio('titlescreen');
        start = game.add.text(640, 450, 'Click below to Start', { font: "15px Arial", fill: "#ff0000" });
        start.visible = false;
        bg.play();
        nextLine();
        handprint = game.add.button(680, 480, 'handprint', startGame);
        handprint.visible = false;
        game.time.events.add(Phaser.Timer.SECOND * 17, showPicture, this);

    },
    update: function(){

    }
};
function startGame(){
    gems =0;
    game.state.start("state2");
    bg.stop();
}

function nextLine() {

    if (lineIndex === content.length)
    {
        return;
    }

    
    line = content[lineIndex].split(' ');

    
    wordIndex = 0;

    
    game.time.events.repeat(wordDelay, line.length, nextWord, this);

    //  Advance to the next line
    lineIndex++;

}

function nextWord() {

    //  Add the next word onto the text string, followed by a space
    text.text = text.text.concat(line[wordIndex] + " ");

    //  Advance the word index to the next word in the line
    wordIndex++;

    //  Last word?
    if (wordIndex === line.length)
    {
        //  Add a carriage return
        text.text = text.text.concat("\n");

        //  Get the next line after the lineDelay amount of ms has elapsed
        game.time.events.add(lineDelay, nextLine, this);
    }

}

function showPicture() {
    drummy.play();
    start.visible = true;
    handprint.visible = true;
    //facescare.visible = false;

}