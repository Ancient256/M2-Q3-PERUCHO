var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 0},
        debug: false,
      },
    },
    scene:[MenuScene, GameScene, CreditScene, EndScene,VictoryScene]
  };

  var game = new Phaser.Game(config);

function collectCoin(player, coins){
  coins.disableBody(true, true);
  ding.play();
  ding.setVolume(0.1);

  score += 10;
  scoreText.setText("Score: " + score);

  collectCoins += 1;
  collectCoinsText.setText("Collected Coins: "+ collectCoins);

  if (collectCoins >= 14){
    BGM.stop();
    this.scene.start('VictoryScene');
  }

}

 function HitSpike(player, spikes){
    this.physics.pause();
    BGM.stop();

    player.setTint(0xff0000);

    player.anims.play('turn');

    this.scene.start('EndScene');
    
  }