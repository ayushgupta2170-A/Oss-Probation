const jwt=require("jsonwebtoken");
function adminAuth(req,res,next){//admin routes par ye pehle chalega aur token check karega.
    const token=req.cookies.token;

    if(token==null){
        return res.send("token required");
    } 
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    req.adminId=decoded.adminId; //token se admin ki ID nikaal kar request mein save kar raha hai.      
    next();//token valid hai, isliye request ko aage wale admin route par bhejega.
}
module.exports=adminAuth;
//Admin Auth Middleware complete