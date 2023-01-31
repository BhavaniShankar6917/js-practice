function isTouching(a, b) {
  const aRect = a.getBoundingClientRect(); ///player
  const bRect = b.getBoundingClientRect(); ///coin

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
const moveCoin = (coin) => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.left = `${x}px`;
  coin.style.top = `${y}px`;
};
const init = () => {
  const player = document.querySelector("#player");
  const coin = document.querySelector("#coin");
  moveCoin(coin);
  window.addEventListener("keyup", function (e) {
    if (e.key == "ArrowRight" || e.key == "Right") {
      moveHorizontal(player, 100);
      player.style.transform = "scale(1,1)";
    } else if (e.key == "ArrowLeft" || e.key == "Left") {
      moveHorizontal(player, -100);
      player.style.transform = "scale(-1,1)"; //when player moves backwards he turns left
    } else if (e.key == "ArrowUp" || e.key == "Up") {
      moveVertical(player, -100);
    } else if (e.key == "ArrowDown" || e.key == "Down") {
      moveVertical(player, 100);
    }
    if (isTouching(player, coin)) {
      moveCoin(coin);
    }
  });
};
init();
// moves the object horizontally by 100px(left or right)
const moveHorizontal = (player, value) => {
  const currLeft = extractPos(player.style.left);
  player.style.left = `${currLeft + value}px`;
};
//  moves the object vertically by 100px(top or bottom)
const moveVertical = (player, value) => {
  const currTop = extractPos(player.style.top);
  player.style.top = `${currTop + value}px`;
};

// Extracts the postion of the object in the window
const extractPos = (pos) => {
  if (!pos) return 0; //if initial position is not found then it is set to 0
  return parseInt(pos.slice(0, -2));
};

///*************HTML*****************///
/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Coin Game Starter</title>
  <link rel="stylesheet" href="app.css">
</head>

<body>
  <img id="player" src="https://media.tenor.com/images/0791eb3858075aca85eed5ecfe08c778/tenor.gif" alt="">
  <img id="coin" src="https://i.gifer.com/origin/71/719ea2f44c791fc07e0e811940a0232b_w200.gif" alt="">
  <script src="app.js"></script>
</body>

</html>
*/

