const jwt = require('jsonwebtoken');
// const User = require('../models/user')

const auth = async (req, res, next)=>{
    try {
        
        const token = req.header('Authorization').replace('Bearer ','');
        //console.log(token)
        const decode = jwt.verify(token,process.env.JWT_SECRET);
       //console.log(decode)
        const user = await User.findOne({_id:decode._id,'tokens.token':token})
        
        //console.log(user)
         if(!user){
             throw new Error();
         }

        req.user =user;
        req.token = token;
        next();

    } catch (error) {
        res.status(401).send("e"+error);
    }
}

module.exports = auth;
