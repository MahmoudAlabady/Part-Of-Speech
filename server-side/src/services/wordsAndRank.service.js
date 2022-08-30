const fs = require('fs')


const loadTestData = () =>{
  

    try{
        const dataBuffer = fs.readFileSync('TestData.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch(error){
        return []
    }
}
const selectedWordsList = (words)=>{
    
    try {
        let randomList =[]
        for (let i=0; i < words.length;i++){
            
             if(randomList.length <10){
               let idex = Math.floor(Math.random() * 15)
               console.log(randomList.length)
               randomList.push(words[`${idex}`])
               
             }
            
        }
        return randomList
    } catch (error) {
        
    }
}
const getRank=(Scores,_studentScore)=>{
let allScoresLength = Scores.length
let scoresBelowStudenScore=[]
for(let score of Scores){
if(_studentScore>score){
    scoresBelowStudenScore.push(score)
}
}
let scoresBelowStudenScoreLength =scoresBelowStudenScore.length;
let rank =scoresBelowStudenScoreLength/allScoresLength
    return rank
}

module.exports = {loadTestData,selectedWordsList,getRank}