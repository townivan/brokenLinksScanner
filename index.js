const { parseXml } = require("xml2js"); // converts xml to JS object string
const fs = require("fs"); // allows JS file system access for creating html output report

let urls = [];

main = async function(cliInput) {
    console.log('hello there.')
    let jsonUrls = await getJsonUrls('urls.json'); 
    urls = [...jsonUrls];   
    console.log('urls:', urls)
}
main();

async function getJsonUrls(path) {
    try {
      var data = fs.readFileSync(path, "utf8");
      let localUrls = JSON.parse(data);
      return localUrls.urls;
    } catch (e) {
      console.log("Error reading url array from urls.json:", e.stack);
    }
}