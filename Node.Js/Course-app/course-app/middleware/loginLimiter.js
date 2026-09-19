const rateLimit=require("express-rate-limit");

const loginLimiter=rateLimit({
    windowMs:15*60*1000,//Matlab 15 minutes ka time window.
    max:5,//Matlab 15 minutes mein maximum 5 login attempts
    message:"Too many login attempts, try again later."
});

module.exports=loginLimiter;