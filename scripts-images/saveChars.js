const fs = require("fs");
const request = require("request-promise");

const getAllChars = (url) => 
    new Promise(async (resolve, reject) => {
        var allChars = [];
        var nextUrl = url;
        while(true) {
            try {
                var body = await request("https://www.starwars.com/_grill/filter/databank/" + nextUrl);
                var { data, next } = JSON.parse(body);
                allChars = [...allChars, ...data];
                nextUrl = next;

                console.log(next);

                if(!next) {
                    resolve(allChars);
                    //console.log(allChars);
                    break;
                }
            }catch(err) {
                reject(err);
                break;
            }
        }
        
    });

const getAllApiChars = (url) => 
    new Promise(async (resolve, reject) => {
        var allChars = [];
        var nextUrl = url;

        while(true) {
            try {
                var body = await request(nextUrl);
                var { results, next } = JSON.parse(body);
                allChars = [...allChars, ...results];
                nextUrl = next;

                console.log(next);

                if(!next) {
                    resolve(allChars);
                    break;
                }
            }catch(err) {
                reject(err);
                break;
            }
        }
    })

const getChars = async (url) => {
    try {
        var allCharacters = await getAllChars("?filter=Characters&mod=3");
        var allApiChars = await getAllApiChars("https://swapi.co/api/people/");
    
        fs.writeFileSync("allChars.json", JSON.stringify(allCharacters, null, 2));
        fs.writeFileSync("apiChars.json", JSON.stringify(allApiChars, null, 2));
    }catch(err) {
        console.log(err);
    }
}

getChars();