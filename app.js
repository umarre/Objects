var userDetailsFromDataBase = {
    firstName: "muhammad",
    lastName: "umar",
    phoneNumber: "03082184509",
    password: 1234567,
    dateOfBirth: 22,
    monthOfBirth: 11,
    yearOfBirth: 2001,
    gender: "male"
}



console.log(userDetailsFromDataBase);


var userPhoneNumber = prompt("enter your phone number");
var userPassword = prompt("enter your Password")


var userDetails = {
    phoneNumber: userPhoneNumber,
    password: userPassword,
}



// var userDetails = {
//     phoneNumber: "03082184509",
//     password: 1234567,
// }



if(userDetailsFromDataBase.phoneNumber==userDetails.phoneNumber){
    if(userDetailsFromDataBase.password==userDetails.password){
        alert("Login Successful")
    }else{
        alert("Your phone number or password is incorrect")
    }
}else{
    alert("no user found")
}








const person = {
    name: 'john',
    lastName: 'peters',
    age: 25,
    education: false,
    married: true,
    siblings: ['anna', 'susan', 'peter'],
    greeting(){
        console.log('hello my name is JOHN');
    },
};


// console.log(person)


const age = person.age;
console.log(age);
person.name = 'bob';
console.log(person.name);
console.log(person.siblings[2]);
person.greeting();







const jonas = {
    firstName: 'jonas',
    lastName: 'Schemdtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};


console.log(jonas);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const namekey = 'Name';
console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]);