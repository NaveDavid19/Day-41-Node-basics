import fs from 'fs'
import https from 'https'

// downloadCountryFlags()
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
downloadFlags(getCountries())
function downloadFlags(countries) {
    countries.forEach(countrie => {
        const file = fs.createWriteStream(`flags/${countrie.name.common}.jpg`)
        const request = https.request(countrie.flags.png, function (response) {
            response.pipe(file)
        });

        // TODO: use the download() function to download a flag
        // the name of the file should be the country name
        //TODO: use the Array.map function to generate a promise for each download
        //TODO: use Promise.all()
    })
}