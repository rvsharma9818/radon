

const date= function printDate(){
    let  date_ob = new Date();

    let  day = ("" + date_ob.getDate()).slice(-1);
      console.log( day);    
}   




const month=function printMonth(){
    let  date_ob = new Date();

let month = ("" + (date_ob.getMonth() + 1)).slice(-2);

console.log( month);
}
const getbatchinfo = function getbatchinfo(){
    console.log('Radon, W3D3, the topic for today is Nodejs module system')
}

module.exports.date=date
module.exports.month=month
module.exports.batch=getbatchinfo