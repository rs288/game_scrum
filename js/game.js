window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        //width: 1000,
        height: 600,
        scene: [StartScene, GameScene]
    };

    new Phaser.Game(config);
}
