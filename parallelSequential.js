function changeBodyColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
}
//Sequential
//Works one after another
async function lightShow() {
  await changeBodyColor("green", 1000);    //Waits here for the promise to get resolved then proceeds
  await changeBodyColor("gold", 1000);     //Waits here for the promise to get resolved then proceeds
  await changeBodyColor("silver", 1000);  //Waits here for the promise to get resolved then proceeds
}
lightShow();


///Parallel
async function lightShow() {
  const p1 = changeBodyColor("green", 1000);  //returns a promise here
  const p2 = changeBodyColor("gold", 1000);
  const p3 = changeBodyColor("silver", 1000);
  await p1;                                   //Resolved here in parallel
  await p2;
  await p3;
}
lightShow();
