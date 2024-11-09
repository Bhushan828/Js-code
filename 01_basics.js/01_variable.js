// let assume we want to make a registrion form for the registrion we use some variable
//there are three type for variable decalaration "const, let, var"



const accountId = 1234
let accountEmail = "bhb@gmail.com"
var accountPassword = "3456"
accountCity = "Nashik"

// accountId = 2    not allowed for changing const variable

/*
prefer not to use var 
because of issue in block and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])
