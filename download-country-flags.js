import fs from 'fs'
import https from 'https'

downloadCountryFlags()
function downloadCountryFlags() {
    const countries = getCountries()
    console.log('Countries: ', countries.map(c => c.name));
    downloadFlags(countries)
        .then(() => {
            console.log('Your flags are ready');
        })
}

function getCountries() {
    var countries = []
    countries = JSON.parse(fs.readFileSync('newCountries.json', 'utf-8'));
    countries.sort((a, b) => b.population - a.population)
    return countries.slice(0, 5)
}

function downloadFlags(countries) {
    const promises = countries.map(countrie => {
        return new Promise((resolve, reject) => {
            https.get(countrie.flags.png, (res) => {
                if (!res) reject(new Error())
                const writeStream = fs.createWriteStream(`flags/${countrie.name.common}.jpg`);
                writeStream.on('finish', () => {
                    resolve()
                });
                writeStream.on('error', (err) => {
                    reject(new Error())
                });
                res.pipe(writeStream);
            })
        })
    });
    return Promise.all(promises)
}