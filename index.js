var csvparse = require("@rumras/csvparse/csvparse")
let fs = require('fs')

getFile();

async function getFile() {
    // const path = "./sample_csv/airtravel_long.csv" // Another test file with more content
    const path = "./sample_csv/airtravel.csv"
    const text = await fs.readFileSync(path);
    const t0 = Date.now();
    const jsonObject = await csvparse.csvToJson(text, ',', 1)
    const t1 = Date.now();
    console.log(jsonObject)
    console.log('Time taken to execute csvparse: ', t1 - t0, ' milliseconds')
}
