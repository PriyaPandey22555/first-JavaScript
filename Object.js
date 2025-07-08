// singleton
// object literals 
const mySym = Symbol("key1")
const userone  = {
  name:"Priya",
  "full name":"Priya",
  [mySym]:"mykey1",
  age: 22,
  email: "coolpriya.com",
  location:"Bihar",
  islogin:false,
  lastlogin:["Monday","sunday"]
}
// console.log(userone.email)
// console.log(userone["email"])
// console.log(userone ["full name"])
// console.log(userone[mySym]);
// console.log( typeof userone[mySym]);
// Object.freeze(userone)
// userone.email ="Sakshi.com"
// console.log(userone)
// function
userone.greeting = function(){
    console.log("Goodmorning")
}
userone.greeting1 = function(){
    console.log(`Goodmorning,${this.name}`)
}
console.log(userone.greeting());
console.log(userone.greeting1());
