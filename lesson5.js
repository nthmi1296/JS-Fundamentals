// Logical "AND"
console.log(true && false) // all values have to be TRUE for expression to be TRUE

// Logical "OR"
console.log(true || false) // any value should be TRUE for the expression to be TRUE

var ageIsMoreThanEightTeen = true
var isUSCitizen = true

var eligibilityForDriversLicense = ageIsMoreThanEightTeen && isUSCitizen
console.log('This customer is eligible for DL: ' + eligibilityForDriversLicense)

// Logical "NOT"
console.log(!true)
console.log(6 !== 10)
