//sum of array

// const sum = (arr)=>{
//     return arr.reduce((a,b)=>a+b,0)
// }

// console.log(sum([1,2,3,4,5]))


//for loop

const sum = (arr)=>{
    let total = 0
    for(let i = 0; i<arr.length;i++){
        total+=arr[i];
        
    }
    return total
}
const result = sum([1,2,3,4,5])
console.log(result)