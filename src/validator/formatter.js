var  text = "          funcTIonup         ";

const trim= function trim(){
    console.log("original text",text)
    let result = text.trim();
    console.log(result) ;
}

const lowercase=function lowercase(){
    let result = text.toLowerCase();
console.log(result) ;
}

const uppercase = function uppercase(){
    let result = text.toUpperCase();
    console.log(result) ;
}

module.exports ={
    trim,
    lowercase,
    uppercase
}