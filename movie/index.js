const fetchData = async (searchterm) => {
  //async function
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "af08d5b1",
      s: searchterm,
    },
  });
  if (response.data.Error) {
    return [];
  }

  return response.data.Search;
};
const root = document.querySelector(".auto-complete");
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdowm-content results"></div>
    </div>
  </div>

  `;
const input = document.querySelector("input");
const dropdown = document.querySelector(".dropdown");
const resultsWrapper = document.querySelector(".results");
const onInput = async (e) => {
  //because fetchData is an async function this should also be treated as an async function or else
  //fetch will return a promise
  const results = await fetchData(e.target.value);
  if (!results.length) {
    dropdown.classList.remove("is-active");
    return;
  }
  resultsWrapper.innerHTML = "";
  dropdown.classList.add("is-active");
  for (let movie of results) {
    const anchor = document.createElement("a");
    anchor.classList.add("dropdown-item");
    if (movie.Poster == "N/A") {
      anchor.innerHTML = `
    <img src="https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg" class="result">
    ${movie.Title}`;
    } else {
      anchor.innerHTML = `
      <img src="${movie.Poster}" class="result">
      ${movie.Title}`;
    }
    anchor.addEventListener("click", (e) => {
      dropdown.classList.remove("is-active");
      input.value = movie.Title;
      fetchMovieData(movie.imdbID);
    });
    resultsWrapper.appendChild(anchor);
  }
  // dropdown.addEventListener("mouseleave", (e) => {
  //   dropdown.classList.remove("is-active");
  // });
  // input.addEventListener("mouseover", (e) => {
  //   dropdown.classList.add("is-active");
  // });
};
document.addEventListener("onclick", (e) => {
  // dropdown.classList.remove("is-active");
  if (root.contains(e.target)) {
    dropdown.classList.add("is-active");
  } else {
    dropdown.classList.remove("is-active");
  }
});
input.addEventListener("input", debounce(onInput));
const fetchMovieData = async (id) => {
  const fullData = await axios.get("http://omdbapi.com/", {
    params: {
      apikey: "af08d5b1",
      i: id,
    },
  });
  document.querySelector("#summary").innerHTML = displayMovieDetails(
    fullData.data
  );
};
const displayMovieDetails = (movieDetail) => {
  return `
  <article class="media">
    <figure class="media-left">
      <p class="image">
        <img src="${movieDetail.Poster}" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <h1>${movieDetail.Title}</h1>
        <h4>${movieDetail.Genre}</h4>
        <p>${movieDetail.Plot}</p>
      </div>
    </div>
  </article>
  <article class="notification is-primary">
    <p class="title">${movieDetail.Awards}</p>
    <p class="subtitle">Awards</p>
  </article>
<article class="notification is-primary">
  <p class="title">${movieDetail.BoxOffice}</p>0
  <p class="subtitle">Box Office</p>
</article>
<article class="notification is-primary">
<p class="title">${movieDetail.Metascore}</p>
<p class="subtitle">Metacritics</p>
</article>
<article class="notification is-primary">
<p class="title">${movieDetail.imdbRating}</p>
<p class="subtitle">IMDB Rating</p>
</article>
<article class="notification is-primary">
<p class="title">${movieDetail.imdbVotes}</p>
<p class="subtitle">IMDb Votes</p>
</article>
  `;
};
