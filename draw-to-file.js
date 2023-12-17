import fs from 'fs'

function drawSquareToFile() {
    const str = getSquare(getRandomIntInclusive(3, 20))
    drawToFile(str)
        .then(() => {
            setTimeout(drawSquareToFile, 200)
        })
}

function getSquare(size) {
    var str = '*'.repeat(size) + '\n'
    for (let i = 0; i < size; i++) {
        str += '*' + ' '.repeat(size - 2) + '*\n'
    }
    str += '*'.repeat(size) + '\n'
    return str
}


function drawToFile(str) {
    return new Promise((resolve, reject) => {
        fs.writeFile('draw-to-file.txt', str, 'utf8', () => {
            if (err) reject(new Error('Error'))
            resolve()
        })
    })
}

drawSquareToFile()



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}