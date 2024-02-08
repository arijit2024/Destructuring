// Destructuring

let arr = [1,2,3,4];
let [a,b] = arr;
// console.log(a,b);

let arr2 = [1,2,3,4,5,6]
let [a1,b1,...c1] = arr2;
// console.log(a1,b1,c1);

let {a3, b3} = {a3:2, b3:2};
// console.log(a3,b3)

// Spread Operator
let arr4 = [1,2,3];
let obj = {...arr4};
// console.log(obj)

function sum(v1,v2,v3){
    return v1+v2+v3;
}
// console.log(sum(...arr4))

const data = {
    name:"arr",
    class:"12",
    subject:"english"
}
console.log({...data, name:"sa",class:"99"})