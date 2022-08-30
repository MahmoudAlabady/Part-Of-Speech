const express = require('express');
const router = new express.Router(); 
const wordsAndRank = require('../services/wordsAndRank.service')

// const auth = require('../middelware/auth')
// const multer = require('multer')




router.get('/rank/:studentScore',async(req,res)=>{
    const _studentScore = req.params.studentScore;
    let scores = await wordsAndRank.loadTestData().scoresList
    let rank = wordsAndRank.getRank(scores,_studentScore)
    console.log(scores)
    try {
        
        res.status(200).send({rank})
    } catch (error) {
        
    }
    
})

module.exports = router;