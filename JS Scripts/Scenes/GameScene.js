
var player;
var coins;
var enemy;
var enemy2;
var flag;
var spikes;
var platforms
var cursors;
var BGM;
var ding;
var camera;


var score=0;
var scoreText;
var collectCoinsText;
var collectCoins =0;


class GameScene extends Phaser.Scene{
    constructor(){
        super('GameScene');
    }

    preload(){
        this.load.image("bg_1", "Assets/Images/Back Ground/bg_1.jpg");
        

        this.load.spritesheet('dude', "Assets/Images/Others/slime1.png",{
            frameWidth: 32,
            frameHeight: 48,
    });
        this.load.image('face', "Assets/Images/Others/face.png");
        this.load.image('coins', 'Assets/Images/Others/Coin.png');
        this.load.image('ground',"Assets/Images/Others/brick.png",{frameWidth:256,frameHeight:32});
        this.load.image('spikes',"Assets/Images/Others/spike.png");
        this.load.audio('bgmusic', 'Assets/Sounds/gamemusic.wav');
        this.load.audio('pickup', 'Assets/Sounds/pickupCoin.wav');
        
    }

    create(){
        //background
        this.add.image(0, 0, 'bg_1').setOrigin(0).setScrollFactor(1);
        this.add.image(0, 0, 'bg_2').setOrigin(0).setScrollFactor(1);

        //Sounds
  BGM = this.sound.add('bgmusic');
  BGM.loop=true;
  BGM.play();
  BGM.setVolume(0.3);

  ding = this.sound.add('pickup');



      

       
        platforms = this.physics.add.staticGroup();
  
        platforms.create(170, 700, "ground").setScale(1.5);
        platforms.create(640, 700, "ground").setScale(1.6);
       

        
        platforms.create(650,500,'ground').setScale(1.8,1);

        
        platforms.create(175,300,'ground').setScale(1.5);
        platforms.create(1120,300,'ground').setScale(1.5);
   

        
          player = this.physics.add.sprite(200, 600, "dude");
          player.setBounce(0.2);
          player.setCollideWorldBounds(true,false,false,false);
          player.body.gravity.y = 350;

     
        spikes= this.physics.add.staticGroup();
        spikes.create(390,700, 'spikes').setScale(1.3);
        spikes.create(900,700, 'spikes').setScale(1.3);
        spikes.create(920,700, 'spikes').setScale(1.3);
        spikes.create(940,700, 'spikes').setScale(1.3);
        spikes.create(960,700, 'spikes').setScale(1.3);
        spikes.create(990,700, 'spikes').setScale(1.3);
        spikes.create(1020,700, 'spikes').setScale(1.3);
        spikes.create(1040,700, 'spikes').setScale(1.3);
        spikes.create(1060,700, 'spikes').setScale(1.3);
        


        coins= this.physics.add.staticGroup();
        coins.create(100, 500,'coins').setScale(1);
        coins.create(200, 500,'coins').setScale(1);
        coins.create(400, 550,'coins').setScale(1);
        coins.create(100, 200,'coins').setScale(1);
        coins.create(200, 200,'coins').setScale(1);
        coins.create(1100, 200,'coins').setScale(1);
        coins.create(1200, 200,'coins').setScale(1);
        coins.create(500, 360,'coins').setScale(1);
        coins.create(740, 360,'coins').setScale(1);
        

       
        enemy = this.physics.add.sprite(100, 200, "face");
        enemy.setBounce(0.2);
        enemy.setCollideWorldBounds(true);
        enemy.body.gravity.y = 350;

        enemy2 = this.physics.add.sprite(1000, 200, "face");
        enemy2.setBounce(0.2);
        enemy2.setCollideWorldBounds(true);
        enemy2.body.gravity.y = 350;

        this.tweens.add({
          targets:enemy,
          x: 100,
          y: 0,
          duration: 3000,
          ease: 'Linear',
          repeat: -1,
          yoyo: true
      });

      this.tweens.add({
        targets:enemy2,
        x: 1000,
        y: 0,
        duration: 3000,
        ease: 'Linear',
        repeat: -1,
        yoyo: true
    });





   //  Input Events
   cursors = this.input.keyboard.createCursorKeys();

    //Adding texts
 scoreText = this.add.text(16, 16, "Score: 0", {
  fontSize: "32px",
  fill: "#FFFFFF",
});

collectCoinsText = this.add.text(850, 16, "Collected Coins: 0", {
  fontSize: "32px",
  fill: "#FFFFFF",
});


      
    
      camera= this.cameras.main;
      this.cameras.main.setBounds(0, 0, 1600, 750);
      scoreText.setScrollFactor(0);
      collectCoinsText.setScrollFactor(0);
     
      camera.startFollow(player);
      this.cameras.main.setZoom(1.5);
      

 

 
  this.physics.add.collider(player, platforms);
  this.physics.add.collider(enemy, platforms);
  this.physics.add.collider(enemy2, platforms);

  this.physics.add.collider(player, spikes, HitSpike, null, this);
  this.physics.add.collider(player, coins, collectCoin, null, this);
  this.physics.add.collider(player, enemy2, HitSpike, null, this);
  this.physics.add.collider(player, enemy, HitSpike, null, this);
  



    }
    update(){
        if (cursors.left.isDown) {
            player.setVelocityX(-160);
        
            player.anims.play("left", true);
          } else if (cursors.right.isDown) {
            player.setVelocityX(160);
        
            player.anims.play("right", true);
          } else {
            player.setVelocityX(0);
        
            player.anims.play("turn");
          }
        
          if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-500);
          }
        }

    

}