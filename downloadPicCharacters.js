const request = require("request");
const webdriverio = require("webdriverio"); 
const cheerio = require("cheerio");
const fs = require("fs");
const jsonfile = require("jsonfile");

var domainPage = "";
var nameFile = "";
var withDriver = false;

var options = { 
    desiredCapabilities: { 
        browserName: 'chrome' 
    }
};

const htmlWebdriver = (url) => {
    return new Promise((resolve, reject) => {
        webdriverio
        .remote(options)
        .init()
        .url(url)
        .getSource()
        .then((html) => {
            resolve(html)
        }).catch((err) => {
            reject(err);
        })
        .end();
    })
}

const htmlRequest = (url) => {
    return new Promisse((resolve, reject) => {
        request(url, (error, response, body) => {
            if(error)
                reject(error);
            
            resolve(body);
        });
    });
}

const requestUrl = (url, select, type, domain) => {
    console.log("Fetching: ", url)
    return new Promise(async (resolve, reject) => {
            try {
                var html = await withDriver ? htmlWebdriver(url) : htmlRequest(url);
            }catch(err) {
                reject(err);
            }
            
            var $ = cheerio.load(html);
            var resultSelection = $(select);
            var result;
            
            switch(type) {
                case "link":
                    result = [];
                    resultSelection.each((i, link) => {
                        result.push($(link).attr("href"));
                    });
                    break;
                case "product":
                    result = {
                        name: "",
                        assets: []
                    };
                    result.name = $(select.name).text();
                    $(select.assets).each((i, asset) => {
                        var urlAsset = $(asset).attr("src");

                        if(urlAsset.indexOf("http") == -1) 
                            urlAsset = domainPage + urlAsset;
                        
                        result.assets.push(urlAsset);
                    });
                    break;
            }
            resolve(result);
    });
}

var output = {
    length: 0,
    products: []
};

const getProductsInfo = async (products, productInfo, pos) => {
    if(fs.existsSync("tempInfo.json")) {
        var temp = jsonfile.readFileSync("tempInfo.json");
        pos = temp.length;
        output.products = temp.products;
    }    

    for(var i = pos; i < products.length; i++) {

        try {
            var produtos = await requestUrl(products[i], productInfo, "product");
            
            console.clear();
            console.log(produtos.name);
            console.log(`Product ${i + 1} of ${products.length}`);
            
            await setTimeout(() => {}, 1000);
            output.products.push({ url: products[i], name: produtos.name, assets: produtos.assets });

            if(i == products.length - 1) {
                output.length = products.length;
                fs.writeFileSync(`${__dirname}/outputs/${nameFile}.json`, JSON.stringify(output, null, 2));
                console.log(`Products saved in outputs/${nameFile}.json`);
            }
        }catch(err) {
            fs.writeFileSync("tempInfo.json", JSON.stringify({ length: i, products: output.products }, null, 2));
            throw new Error(err);
        }

    }
}

var categories = [];
var allProducts = [];

const getProducts = async (links, productsLink, pos) => {
    if(fs.existsSync("tempProducts.json")) {
        var temp = jsonfile.readFileSync("tempProducts.json");
        pos = temp.pos;
        allProducts = temp.found;
        categories = temp.categories;
    }

    for(var i = pos; i < links.length; i++) {
        try {
            var secLinks = await requestUrl(links[i], productsLink, "link");
            console.clear();
            var nameCat = links[i].split("/");
            nameCat = nameCat[nameCat.length - 1];
            nameCat = nameCat.split("-").join(" ");
            nameCat = nameCat.charAt(0).toUpperCase() + nameCat.slice(1);
            console.log(nameCat);
            console.log(`Category ${i + 1} of ${links.length}`);
            console.log(`${secLinks.length} products found in this category`);
            categories.push({ name: nameCat, length: secLinks.length });
            allProducts = [...secLinks, ...allProducts];
            await setTimeout(() => {}, 1000);

            if(i == links.length - 1) {
                console.log(`${allProducts.length} products found`);
                //fs.writeFileSync("allProducsts.json", JSON.stringify({allProducts: allProducts, length: allProducts.length}, null, 2));
                return allProducts;
            }
        }catch(err) {
            fs.writeFileSync("tempProducts.json", JSON.stringify({ pos: i, categories: categories, found: allProducts }, null, 2));
            throw new Error(err);
        }
    }
}

const crawler = async ({ fileName, domain, webdriver, categoryPage, productsLink, productInfo }) => {
    domainPage = domain;
    nameFile = fileName;
    withDriver = webdriver ? webdriver : false;

    var links = await requestUrl(categoryPage.url, categoryPage.linkSelection, "link");

    var allProducsts = await getProducts(links, productsLink, 0);
    
    getProductsInfo(allProducsts, productInfo, 0);
}