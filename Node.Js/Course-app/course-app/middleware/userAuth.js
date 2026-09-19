const jwt= require("jsonwebtoken");

function userAuth(req,res,next){
    const token=req.cookies.token;//middleware JWT ko Authorization header se nahi, browser ki token cookie se lega.

    if(token==null){
        return res.send("token required");
    }
    const decoded=jwt.verify(token,process.env.JWT_SECRET);//jwt.verify--krta hai ki token fake toh nhi

    req.userId=decoded.userId;//req.userId--token se userid nikaal kr reqyuest mein save krleta hai
    next();//token correct hua toh aage vale rouet ko run krata hai
}

module.exports=userAuth;
