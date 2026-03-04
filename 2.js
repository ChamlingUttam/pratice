//seprate number and character only not sting 
//input ['a','b',3,4,"ram"]
//output num = [3,4] and char = [A AND B]

// const sep = (arr)=>{
//     const num = []
//     const ch = []

//     for(let i=0; i<arr.length; i++){
//         if(typeof arr[i] == "number"){
//             num.push(arr[i])}
//     if(typeof arr[i] == "string" && arr[i].length===1){
//         ch.push(arr[i])
//     }
// }
// console.log(`num are ${num} and char are ${ch}`)

    
// }

//  sep([1,2,3,"a","b","ram"])


let arr = [1,2,3,4,5]
let arr1 = arr.map((x)=>x<5)
console.log(arr1)