// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, attribute){
        return drivers.filter(function (driver){return driver.toLowerCase() === attribute.toLowerCase()})
}               
    

/* Write fuzzyMatch - This function takes an array of drivers and a string as arguments for querying the array,
 and returns all drivers whose names begin with the provided letters.*/

 function fuzzyMatch( drivers, attribute){
    return drivers.filter (function (driver){ return driver.toLowerCase().substring(0, attribute.length) === attribute.toLowerCase()})
 }

 function matchName (drivers, value){ 
    return drivers.filter (function (driver){return driver.name === value})
 }