class CreditScene extends Phaser.Scene{
    constructor(){
        super('CreditScene');
    }

    preload(){
        this.load.image("BG", "Assets/Images/Back Ground/bg_1.jpg");
        this.load.image("Back", "Assets/Images/Buttons/return.png");

    
    }
    create(){
        this.add.image(0, 0, 'BG').setOrigin(0).setScrollFactor(1);
 
        
    
        let creditText = this.add.text(150,400, 'Janmark Laurence D. Perucho',{font: '50px Arial', fill: "Black"});
        creditText.setInteractive({userHandCursor: true});
       
      
        let sectionText = this.add.text(350,500, 'EMC - A223',{font: '50px Arial', fill: "Black"});
        sectionText.setInteractive({userHandCursor: true});
    
    
    
        let backButton = this.add.image(100,650, 'Back').setScale(1);
        backButton.setInteractive();
        backButton.on('pointerdown',() => {this.scene.start('MenuScene')});
    }
   
}