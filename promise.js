const request = (url) => {
  return new Promise((resolve, reject) => {       ///Returns the Promise object
    setTimeout(() => {
      const pages = {                             ///pages is an object that has two properties each being extension or the url
        "/users": [
          { id: 1, username: "Matthew" },
          { id: 2, username: "alberto" },
        ],
        "/about": "This is the about page",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data });
      } else {
        reject({ status: 404 });
      }
    }, 1000);
  });
};
request("/about").then((res) => {               ///Here the url passed is '/about'
  console.log("status", res.status);
  console.log("data", res.data);
});
request().catch((res) => {
  console.log("status", res.status);
});

//*************////
const button = document.querySelector("button");
const initButtonRect = button.getBoundingClientRect();
const moveX = (amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = button.getBoundingClientRect().right;
      const currLeft = initButtonRect.left;
      if (elRight + amount > bodyBoundary) {
        reject();
      } else {
        button.style.transform = `translateX(${elRight - currLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};
moveX(100, 1000)
  .then(() => moveX(100, 1000))
  .then(() => moveX(100, 1000))
  .then(() => moveX(100, 1000))
  .then(() => moveX(100, 1000))
  .catch(() => console.log("CANNOT MOVE FURTHER"));
