const button = document.querySelector("button");
const initButtonRect = button.getBoundingClientRect();
const moveX = function (amount, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = button.getBoundingClientRect().right;
      const currLeft = initButtonRect.left;
      if (elRight + amount > bodyBoundary) {
        reject("done");                                                     //Reject
      } else {
        button.style.transform = `translateX(${elRight - currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};
async function animate() {
  await moveX(100, 1000);
  await moveX(100, 1000);                                                     //Moves upto this
  await moveX(100, 1000);
  await moveX(100, 1000);
  await moveX(100, 1000);
}
animate().catch((e) => {                                                      //Error caught here
  console.log("done");
});
