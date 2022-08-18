// ######################### ASSIGNMENT 1 #######################

const isLeapYear = function (year) {
    return year % 4 === 0 ? true : false;
};
console.log(isLeapYear(2020));


// ######################### ASSIGNMENT 2 #######################
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


const toCelcius = (inFahrenheit)=>{
   return  (5*((inFahrenheit-32)/9))
}

const toFahrenheit = (inClecius)=>{
    return (9*(inClecius/5))+32;
}

console.log(toCelcius(32));
console.log(toFahrenheit(60));



// ######################### ASSIGNMENT 3 #######################


const factorial = (ofNumber) =>{
    if(ofNumber === 0){
        return 1;
    }else{
        return ofNumber * factorial(ofNumber-1);
    }
}

console.log(factorial(5));