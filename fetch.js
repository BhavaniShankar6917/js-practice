fetch("https://swapi.dev/api/planets/1/")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    const filmData = data.films[1];               //returns the details of the films fetched here
    return fetch(filmData);
  })
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR");
  });

//output
{
  "title": "Return of the Jedi",
  "episode_id": 6,
  "opening_crawl": "Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...",
  "director": "Richard Marquand",
  "producer": "Howard G. Kazanjian, George Lucas, Rick McCallum",
  "release_date": "1983-05-25",
  "characters": [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/3/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/5/",
    "https://swapi.dev/api/people/10/",
    "https://swapi.dev/api/people/13/",
    "https://swapi.dev/api/people/14/",
    "https://swapi.dev/api/people/16/",
    "https://swapi.dev/api/people/18/",
    "https://swapi.dev/api/people/20/",
    "https://swapi.dev/api/people/21/",
    "https://swapi.dev/api/people/22/",
    "https://swapi.dev/api/people/25/",
    "https://swapi.dev/api/people/27/",
    "https://swapi.dev/api/people/28/",
    "https://swapi.dev/api/people/29/",
    "https://swapi.dev/api/people/30/",
    "https://swapi.dev/api/people/31/",
    "https://swapi.dev/api/people/45/"
  ],
  "planets": [
    "https://swapi.dev/api/planets/1/",
    "https://swapi.dev/api/planets/5/",
    "https://swapi.dev/api/planets/7/",
    "https://swapi.dev/api/planets/8/",
    "https://swapi.dev/api/planets/9/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/2/",
    "https://swapi.dev/api/starships/3/",
    "https://swapi.dev/api/starships/10/",
    "https://swapi.dev/api/starships/11/",
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/15/",
    "https://swapi.dev/api/starships/17/",
    "https://swapi.dev/api/starships/22/",
    "https://swapi.dev/api/starships/23/",
    "https://swapi.dev/api/starships/27/",
    "https://swapi.dev/api/starships/28/",
    "https://swapi.dev/api/starships/29/"
  ],
  "vehicles": [
    "https://swapi.dev/api/vehicles/8/",
    "https://swapi.dev/api/vehicles/16/",
    "https://swapi.dev/api/vehicles/18/",
    "https://swapi.dev/api/vehicles/19/",
    "https://swapi.dev/api/vehicles/24/",
    "https://swapi.dev/api/vehicles/25/",
    "https://swapi.dev/api/vehicles/26/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "species": [
    "https://swapi.dev/api/species/1/",
    "https://swapi.dev/api/species/2/",
    "https://swapi.dev/api/species/3/",
    "https://swapi.dev/api/species/5/",
    "https://swapi.dev/api/species/6/",
    "https://swapi.dev/api/species/8/",
    "https://swapi.dev/api/species/9/",
    "https://swapi.dev/api/species/10/",
    "https://swapi.dev/api/species/15/"
  ],
  "created": "2014-12-18T10:39:33.255000Z",
  "edited": "2014-12-20T09:48:37.462000Z",
  "url": "https://swapi.dev/api/films/3/"
}
