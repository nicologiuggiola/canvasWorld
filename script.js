const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const sprites = World.build(Levels.getLevel(0));


const controller = new Controller();




setInterval(() => {

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (const sprite of sprites) {

        

        sprite.draw(context);
        
        sprite.update(canvas, controller);
        
    }


}, 30);

function checkCollision(player, wall){

    const collidingX = player.x < (wall.x + wall.width) && (player.x + player.width) > wall.x
    const collidingY = player.y < (wall.y + wall.height) && (player.y + player.height) > wall.y
    if (collidingX && collidingY) {
        player.speedX = 0;
        player.speedY = 0;
    }


}