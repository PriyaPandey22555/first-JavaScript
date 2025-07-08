// const tinderuser =new Object()
const tinderuser = {}
tinderuser.id = 23455
tinderuser.name = "Priya"
tinderuser.choose = true
// console.log(tinderuser);
const regularuser = {
    email:"somegmail.com",
    fullname:{
        username:{
            name:"sakshi"
        }
    }
}
// console.log(regularuser.fullname.username.name);
const obj1 ={
    1:"a",2:"r"
}
const obj2 ={
    3:"a",4:"r"
}
const obj5 ={
    5:"a",6:"r"
}
const obj3 = {obj1,obj2}
// console.log(obj3)
// const obj4 = Object.assign({},obj1,obj2,obj5)
const obj4 ={
    ...obj1,...obj2,...obj5
}
// console.log(obj4)
const user = [
    {
 email:"p"

    },
    {
2:"p"
    },
    {
3:"p"
    }
]
user[0].email
console.log(tinderuser);
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))
console.log(tinderuser.hasOwnProperty('choose'))