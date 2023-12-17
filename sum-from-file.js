import fs from 'fs'


function sumFromFile(file) {
    let nums = 0
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, contents) => {
            if (err) return reject('error')
            return resolve(numbers)
        })
    })
}