var win;
class VictoryScene extends Phaser.Scene{
    constructor(){
        super('VictoryScene');
    }
    preload(){
        this.load.image("again", "Assets/Images/Buttons/reset.png");
        this.load.image("return", "Assets/Images/Buttons/return.png");
        
        this.load.image("BGV", "Assets/Images/Back Ground/bg_1.png");

        this.load.audio('sfx', 'Assets/Sounds/gamemusic.wav');

    }

    create(){
        this.add.image(0, 0, 'BGV').setOrigin(0).setScrollFactor(1);

        win = this.sound.add('sfx');
        win.play();
        win.setVolume(0.3);

        let VictoryText = this.add.text(430,200, 'Congrats!',{font: '100px Arial', fill: "black"});
        VictoryText.setInteractive({userHandCursor: true});

        let restartButton = this.add.image(650,450, 'again').setScale(2);
        restartButton.setInteractive();
        restartButton.on('pointerdown',() => {this.scene.start('GameScene')});

        

        let backButton = this.add.image(150,600, 'return').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
}