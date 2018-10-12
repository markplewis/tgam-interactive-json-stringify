const fs = require("fs");

if (process.argv.length > 2) {
  const arcUUID = process.argv.slice(2)[0];

  jsonStringifyHTML(`files/${arcUUID}.html`, `files/${arcUUID}.json`)
  .then(json => {
    console.log(`Success! "${arcUUID}.json" saved.`);
  })
  .catch(error => {
    console.error(error);
  });
} else {
  console.log("Please provide an Ellipsis UUID");
}

function jsonStringifyHTML(inputFile, outputFile) {
  return new Promise((resolve, reject) => {
    fs.readFile(inputFile, "utf8", (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      const stringified = JSON.stringify(data);
      const json = '{"content": ' + stringified + '}';
      fs.writeFile(outputFile, json, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(json);
      });
    });
  });
}
