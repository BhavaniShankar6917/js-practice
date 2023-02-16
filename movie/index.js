const autocompleteConfig = {
  renderOption(movie) {
    const imgSrc = movie.Poster === "N/A" ? "" : movie.Poster;
    return `
    <img src="${imgSrc}" class="result">
    ${movie.Title}`;
  },

  inputValue(movie) {
    return movie.Title;
  },
  async fetchData(searchterm) {
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
  },
};

createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector(".left-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    fetchMovieData(movie, document.querySelector("#left-summary"), "left");
  },
});
createAutoComplete({
  ...autocompleteConfig,
  root: document.querySelector(".right-autocomplete"),
  onOptionSelect(movie) {
    document.querySelector(".tutorial").classList.add("is-hidden");
    fetchMovieData(movie, document.querySelector("#right-summary"), "right");
  },
});

// dropdown.addEventListener("mouseleave", (e) => {
//   dropdown.classList.remove("is-active");
// });
// input.addEventListener("mouseover", (e) => {
//   dropdown.classList.add("is-active");
// });
let leftMovie;
let rightMovie;
const fetchMovieData = async (id, summaryElement, side) => {
  const fullData = await axios.get("http://omdbapi.com/", {
    params: {
      apikey: "af08d5b1",
      i: id.imdbID,
    },
  });
  summaryElement.innerHTML = displayMovieDetails(fullData.data);
  if (side == "left") {
    leftMovie = fullData.data;
  } else {
    rightMovie = fullData.data;
  }
  if (leftMovie && rightMovie) {
    runComparison();
  }
};

const runComparison = () => {
  console.log("time for comparison");
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
