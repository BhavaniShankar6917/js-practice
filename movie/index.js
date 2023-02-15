const fetchData = async (searchterm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "af08d5b1",
      // imdbid: "tt0468569",
      i: "tt6723592",
      s: searchterm,
    },
  });
  console.log(response.data);
};
const input = document.querySelector("input");
// let timeoutId;
const debounce = (func) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, 500);
  };
};
const onInput = (e) => {
  // if (timeoutId) {
  //   clearTimeout(timeoutId);
  // }
  // timeoutId = setTimeout(() => {
  fetchData(e.target.value);
  // }, 500);
};
input.addEventListener("input", debounce(onInput));

// let timeoutID;
// const inputEvent = (e) => {
//   if (timeoutID) {
//     // timeoutID = 1;
//     clearTimeout(timeoutID);
//     console.log("set to ZERO!");
//   }
//   timeoutID = setTimeout(() => {
//     console.log("Word typed!", e.target.value);
//   }, 2000);
// };
// input.addEventListener("input", inputEvent);
