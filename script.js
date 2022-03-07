const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const sprites = World.build(Levels.getLevel(3));


const controller = new Controller();




setInterval(() => {

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const sprite of sprites) {

    if (sprite.isPlayer) {
      for (const wall of sprites) {
        if (!wall.isPlayer) {
          if (isColliding(sprite, wall)) {
            solidCollision(sprite, wall);
          }
        }
      }
    }

    sprite.draw(context);

    sprite.update(canvas, controller);

  }


}, 30);

function isColliding(player, wall) {
  const collidingX = player.x <= (wall.x + wall.width) && (player.x + player.width) >= wall.x
  const collidingY = player.y <= (wall.y + wall.height) && (player.y + player.height) >= wall.y
  return collidingX && collidingY;
}



function solidCollision(player, entity) {

  const playerXmid = player.x + player.width / 2;
  const playerYmid = player.y + player.height / 2;
  const wallXmid = entity.x + entity.width / 2;
  const wallYmid = entity.y + entity.height / 2;

  const dx = (wallXmid - playerXmid)
  const dy = (wallYmid - playerYmid)

  const absDX = Math.abs(dx);
  const absDY = Math.abs(dy);

  if (absDX > absDY) {

    if (dx < 0) {
      player.x = entity.x + entity.width + 0.1;
    } else {
      player.x = entity.x - player.width - 0.1;
    }
    player.speedX = 0;
    
  } else if (absDY > absDX) {

    if (dy < 0) {
      player.y = entity.y + entity.height + 0.1;
    } else {
      player.y = entity.y - player.height - 0.1;
    }
    player.speedY = 0;
  }
};

