const createAutoComplete = ({
  root,
  renderOption,
  onOptionSelect,
  inputValue,
  fetchData,
}) => {
  // const root = document.querySelector(".auto-complete");
  root.innerHTML = `
  <label><b>Search</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdowm-content results"></div>
    </div>
  </div>
  `;
  const input = root.querySelector("input");
  const dropdown = root.querySelector(".dropdown");
  const resultsWrapper = root.querySelector(".results");

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
      const option = document.createElement("a");
      option.classList.add("dropdown-item");

      option.innerHTML = renderOption(movie);

      option.addEventListener("click", (e) => {
        dropdown.classList.remove("is-active");
        input.value = inputValue(movie);
        onOptionSelect(movie);
      });
      resultsWrapper.appendChild(option);
    }
    document.addEventListener("onclick", (e) => {
      // dropdown.classList.remove("is-active");
      if (root.contains(e.target)) {
        dropdown.classList.add("is-active");
      } else {
        dropdown.classList.remove("is-active");
      }
    });
  };
  input.addEventListener("input", debounce(onInput));
};
