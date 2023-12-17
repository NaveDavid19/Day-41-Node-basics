import fs from 'fs';

function sumFromFile(file) {
    return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf8', (err, contents) => {
            if (err) return reject('error reading file');

            const numbers = contents.split('\n').map(Number);
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        });
    });
}

sumFromFile('sum-from-file.txt')
    .then(sum => console.log(sum))
    .catch(err => console.log(err));
