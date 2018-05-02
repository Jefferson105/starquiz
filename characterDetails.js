const request = require("request-promise");
const { writeFileSync } = require("fs");

let totalChars = 0;
let allChars = [];

const getDetails = (arr, field) => 
    new Promise(async (resolve, reject) => {
        let detail = "";
        try {
            for(var i = 0; i < arr.length; i++) {
                var res = await request(arr[i]);
                res = JSON.parse(res);

                switch(field) {
                    case "films": 
                        detail += res.title + ", ";
                        break;
                    case "species":
                        detail += res.name + ", ";
                        break;
                    case "vehicles":
                        detail += res.name + ", ";
                        break;
                    case "starships":
                        detail += res.name + ", ";
                        break;
                    case "homeworld":
                        detail += res.name + ", ";
                        break;
                }
            }
        
            resolve(detail.slice(0, -2));
        }catch(err) {
            reject(err);
        }
    });

const getPeople = async (url) => {
    var res = await request(url);
    var { count, next, results } = JSON.parse(res);

    if(count)
        totalChars = count;

    results.forEach(async ({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld, films, species, vehicles, starships}) => {
        try {
            let cHome = homeworld.length ? await getDetails([homeworld], "homeworld") : "";
            let cFilms = films.length ? await getDetails(films, "films") : "";
            let cSpecies = species.length ? await getDetails(species, "species") : "";
            let cVehicles = vehicles.length ? await getDetails(vehicles, "vehicles") : "";
            let cStarships = starships ? await getDetails(starships, "starships") : "";
            allChars.push({ name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, homeworld: cHome, films: cFilms, species: cSpecies, vehicles: cVehicles, starships: cStarships });

            console.log(`${allChars.length} of ${totalChars}`);

            if(allChars.length == totalChars) {
                writeFileSync("allChars.json", JSON.stringify(allChars, null, 2));
            }
        }catch(err) {
            console.error(err);
            throw new Error(err);
        }
    });

    if(next)
        getPeople(next);
};

getPeople("https://swapi.co/api/people/");