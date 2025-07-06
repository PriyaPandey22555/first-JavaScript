const myarr = [0,1,2,3,4,5]
// const  hero = ["Priya",34456,5.1]
// const myArr2 = new Array(1,2,4,5)
// console.log(hero);
// console.log(myarr[3]);
// // Array method
// hero.push("sakshi")
// console.log(hero)
// hero.pop("sakshi")

// hero.unshift("Rajnish")
// console.log(hero)
// hero.shift("Rajnish")
// console.log(hero.includes("Rajnish"))
// console.log(hero.indexOf("Rajnish"))
// const newArr = hero.join()

// console.log(newArr);
// console.log(hero);
// console.log(typeof newArr)
// ++++slice and splice+++++
// console.log("A", myarr);
// const myn1 = myarr.slice(1,3);
// console.log(myn1);
// console.log("B", myarr);
 
// const myn2 = myarr.splice(1,3);
// console.log("C",myarr);
// console.log(myn2);

//++++++++++++++++ second day +++++++++++++++++++++++++++
const marvel_heros = ["thor","Ironman","spiderman"];
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros.length);

// console.log(marvel_heros[3][1])
// const allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);
// console.log(allheros.length);
// +++++sparated
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
