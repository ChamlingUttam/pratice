// self logic to find the max number in array

// const max = (arr)=>{
//     let maxNum = arr[0]

//     for(let n of arr){
//         if(maxNum < n)
//         {
//             maxNum =  n
//         }
//     }
//     return maxNum
// }

// let result = max([22,3,4,5,10])
// console.log(result)

const max = (arr)=>{
    let maxNum = 0
    for(let i=0; i<arr.length; i++){
        if(maxNum < arr[i]){
            maxNum = arr[i]
        }
    }
    return maxNum
}

let result = max([1,0,-2,-3])
console.log(result)