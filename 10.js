//find the missing number in array

// const findMissing = (arr)=>{
//     let min = Math.min(...arr)
//     let max = Math.max(...arr)

//     let result = []

//     let set = new Set(arr)

//     for(let i=min; i<max;i++){
//         if(!set.has(i)){
//             result.push(i)
//         }
//     }
//     console.log(result)
// }

// findMissing([1,2,3,5])

const findMissing = (arr)=>{

    let min = Math.min(...arr)
    let max = Math.max(...arr)

    let result = []

    for(let i =min; i<=max; i++){
        result.push(i)
    }
    console.log(result)
}
findMissing([1,2,6])