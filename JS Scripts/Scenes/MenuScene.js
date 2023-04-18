class MenuScene extends Phaser.Scene{
    constructor(){
        super('MenuScene');
    }

    preload(){
    this.load.image("BG", "Assets/Images/Back Ground/bg_1.jpg");

    this.load.image("Play", "Assets/Images/Buttons/play2.png");
    this.load.image("Credits", "Assets/Images/Buttons/Credits.png");
    this.load.image("Exit", "Assets/Images/Buttons/power.jpg");

    }
    create(){
        this.add.image(500, 400, "BG").setScale(2);


    let playText = this.add.text(500,220, 'Press to Start',{font: '50px Arial', fill: "black"});
    playText.setInteractive({userHandCursor: true});

    let playButton = this.add.image(650,400, 'Play').setScale(2);
    playButton.setInteractive();
    playButton.on('pointerdown',() => {this.scene.start('GameScene')
});


    let creditButton = this.add.image(200,600, 'Credits').setScale(1);
    creditButton.setInteractive();
    creditButton.on('pointerdown',() => {this.scene.start('CreditScene')});

    let exitButton = this.add.image(1100,600, 'Exit').setScale(0.08);
    exitButton.setInteractive();
    exitButton.on('pointerdown',() => {alert('THANK YOU FOR PLAYING!')});


   }
    
    update(){}
}
