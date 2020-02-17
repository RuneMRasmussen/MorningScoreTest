import { csvToJson } from "@rumras/csvparse/csvparse";
import { readFileSync } from 'fs';

getFile();

async function getFile() {
    const path = "./sample_csv/airtravel.csv" // File to test with
    // const path = "./sample_csv/airtravel_long.csv" // Another test file with more content
    const text = readFileSync(path);

    const t0 = Date.now();
    await csvToJson(text, ',', 1)
    const t1 = Date.now();

    console.log(jsonObject)
    console.log('Time taken to execute csvparse: ', t1 - t0, ' milliseconds')
}
