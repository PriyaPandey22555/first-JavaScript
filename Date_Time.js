let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log( typeof myDate);
let myCreatedDate = new Date(2023,0,22);
let mynewCreatedDate = new Date(2022,0,33,5,3);
let myCreatedDate1 = new Date("2023-3-22");
let myCreatedateOne = new Date("01-14-2022");
console.log(myCreatedDate.toLocaleString());
// +++++++++++++++++++Time++++++++++++++
let myTime = Date.now()
console.log(myTime);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
let newdate = new Date()
console.log(newdate.getDate());
console.log(newdate.getMonth());
console.log(newdate.getDay());


Date.toLocaleString('default',{
    weekday:"long"
})