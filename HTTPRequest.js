const newRequest = new XMLHttpRequest();
newRequest.responseType = "";
newRequest.onload = () => {
  const data = JSON.parse(newRequest.responseText);
  const residentURL = data.residents[0];
  console.log(data);
};
newRequest.addEventListener("error", () => {
  console, log("ERROR");
});

newRequest.open("GET", "https://swapi.dev/api/planets/1/", "application/JSON");
newRequest.send();

//swapi is a free starwars data provider
//Returned result
/*
{
  "name": "Tatooine",
  "rotation_period": "23",
  "orbital_period": "304",
  "diameter": "10465",
  "climate": "arid",
  "gravity": "1 standard",
  "terrain": "desert",
  "surface_water": "1",
  "population": "200000",
  "residents": [
    "https://swapi.dev/api/people/1/",
    "https://swapi.dev/api/people/2/",
    "https://swapi.dev/api/people/4/",
    "https://swapi.dev/api/people/6/",
    "https://swapi.dev/api/people/7/",
    "https://swapi.dev/api/people/8/",
    "https://swapi.dev/api/people/9/",
    "https://swapi.dev/api/people/11/",
    "https://swapi.dev/api/people/43/",
    "https://swapi.dev/api/people/62/"
  ],
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/4/",
    "https://swapi.dev/api/films/5/",
    "https://swapi.dev/api/films/6/"
  ],
  "created": "2014-12-09T13:50:49.641000Z",
  "edited": "2014-12-20T20:58:18.411000Z",
  "url": "https://swapi.dev/api/planets/1/"
}
*/

//Nested 
const newRequest = new XMLHttpRequest();
newRequest.responseType = "";
newRequest.onload = () => {                                                   //First onload event
  const data = JSON.parse(newRequest.responseText);
  const residentURL = data.residents[0];
  const residentRequest = new XMLHttpRequest();
  residentRequest.onload = function () {                                      //second onload event. Here function is declared with the function keyword for using this.
    const residentData = JSON.parse(this.responseText);
    console.log(residentData);
  };
  residentRequest.onerror = () => {                                          //Here arrow function is used, so, this cannot be used.
    console.log("ERROR!!");
  };
  residentRequest.open("GET", `${residentURL}`, "applicaton/JSON");
  residentRequest.send();
};
newRequest.addEventListener("error", () => {
  console, log("ERROR");
});

newRequest.open("GET", "https://swapi.dev/api/planets/1/", "application/JSON");
newRequest.send();
///This returns...
{
  "name": "Luke Skywalker",
  "height": "172",
  "mass": "77",
  "hair_color": "blond",
  "skin_color": "fair",
  "eye_color": "blue",
  "birth_year": "19BBY",
  "gender": "male",
  "homeworld": "https://swapi.dev/api/planets/1/",
  "films": [
    "https://swapi.dev/api/films/1/",
    "https://swapi.dev/api/films/2/",
    "https://swapi.dev/api/films/3/",
    "https://swapi.dev/api/films/6/"
  ],
  "species": [],
  "vehicles": [
    "https://swapi.dev/api/vehicles/14/",
    "https://swapi.dev/api/vehicles/30/"
  ],
  "starships": [
    "https://swapi.dev/api/starships/12/",
    "https://swapi.dev/api/starships/22/"
  ],
  "created": "2014-12-09T13:50:51.644000Z",
  "edited": "2014-12-20T21:17:56.891000Z",
  "url": "https://swapi.dev/api/people/1/"
}
