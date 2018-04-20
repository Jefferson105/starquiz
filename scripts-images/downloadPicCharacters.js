const { exec } = require('child_process');
const fs = require("fs");
const ApiChars = require("./apiChars.json");
const AllChars = require("./allChars.json");

String.prototype.replaceSpecialChars = function() {
    var str = this.toString();
    str = str.replace(/[ÀÁÃÄÂ]/g,"A");
    str = str.replace(/[àáãâä]/g,"a");
    str = str.replace(/[ÈÉÊË]/g,"E");
    str = str.replace(/[èéêë]/g,"e");
    str = str.replace(/[ÌÍÎÏ]/g,"I");
    str = str.replace(/[ìíîï]/g,"i");
    str = str.replace(/[ÒÓÔÕÖ]/g,"O");
    str = str.replace(/[òóôõö]/g,"o");
    str = str.replace(/[ÙÚÛŨÜ]/g,"U");
    str = str.replace(/[ùúûũü]/g,"u");
    str = str.replace(/[Ç]/g,"C");
    str = str.replace(/[ç]/g,"c");

    return str;
};

String.prototype.charCodePlus = function() {
    var str = this.toString().split("");
    return str.map((l) => String.fromCharCode(l.charCodeAt(0) + 1)).join("");
}

const downloadCurl = (assetUrl, dirFile) => {
    return new Promise((resolve, reject) => {
        exec(`curl ${assetUrl} > ${dirFile}`, (err, stdout, stderr) => {
            if(err) 
                reject(err);
            
            resolve(stdout);
        });
    });
}

var founds = [];

const checkPossibilities = (arr1, arr2) => {
    var hasMatch = false;
    var name1 = "";
    var name2 = "";

    for(var i = 0; i < arr1.length; i++) {
        name1 = arr1[i]; 
        for(var j = 0; j < arr2.length; j++) {
            name2 = arr2[j];

            if(name1 == name2) {
                hasMatch = true;
                break;
            }
        }
    }

    return hasMatch;
}

const downloadImages = async (arrChars) => {
    for(var i = 0; i < founds.length; i++) {
        var { name, photo } = founds[i];
    
        try {
            console.log(`Downloading: ${photo}`)
            await downloadCurl(photo, `./img/${name.split(" ")[0].charCodePlus()}.jpeg`);
        }catch(err) {
            console.error(`Erro: ${name}`);
        }
    }
}

ApiChars.forEach((char) => {  
    var found = AllChars.filter(({ title }) => char.name.replaceSpecialChars() == title.replaceSpecialChars());

    if(!found.length)
        found = AllChars.filter(({ title }) => checkPossibilities(title.replaceSpecialChars().split(" "), char.name.replaceSpecialChars().split(" ")));

    if(!found.length || found.length > 1)
        console.log(char.name.split(" ")[0].replaceSpecialChars().charCodePlus());

    if(found.length == 1)
        founds = [...founds, { ...char, photo: found[0].poster_image }];
});

downloadImages(founds);