var ip = require('ip');


exports.mid = async(req,res,next)=>{
    var fullPath = req.baseUrl + req.path;
    console.log(ip.address());
    console.log(fullPath);      // exact defined route
console.log(Date())
}