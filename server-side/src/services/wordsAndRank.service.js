const fs = require('fs')

//load data from TestData
const loadTestData = () => {


    try {
        const dataBuffer = fs.readFileSync('TestData.json').toString()
        return JSON.parse(dataBuffer)
    } catch (error) {
        return []
    }
}

// service to select words list randomly
const selectedWordsList = (words) => {

    try {
        let randomList = []
        for (let i = 0; i < words.length; i++) {

            if (randomList.length < 10) {
                let idex = Math.floor(Math.random() * 15)
                console.log(randomList.length)
                randomList.push(words[`${idex}`])

            }

        }
        return randomList
    } catch (error) {

    }
}
//service to handle getting the rank
const getRank = (Scores, _studentScore) => {
    let allScoresLength = Scores.length
    let scoresBelowStudenScore = []
    for (let score of Scores) {
        if (_studentScore > score) {
            scoresBelowStudenScore.push(score)
        }
    }
    let scoresBelowStudenScoreLength = scoresBelowStudenScore.length;
    let rank = ((scoresBelowStudenScoreLength / allScoresLength) * 100).toFixed(2)
    return rank
}

module.exports = {
    loadTestData,
    selectedWordsList,
    getRank
}