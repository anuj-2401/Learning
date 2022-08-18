const isLeapYear= (year:number)=>{
    return  year%4===0 ? true : false
}

console.log(isLeapYear(2020));