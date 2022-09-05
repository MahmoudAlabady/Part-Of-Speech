const express = require('express');
const wordsAndRank = require('../services/wordsAndRank.service')
const router = new express.Router();




//get words
router.get('/wordsList',async(req,res)=>{
    let words = await wordsAndRank.loadTestData().wordList
    let selected = wordsAndRank.selectedWordsList(words)
    console.log(selected)
    try {
        res.send(selected)
    } catch (error) {
        
    }
    
})


module.exports = router;