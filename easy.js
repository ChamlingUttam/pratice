// two sum 

// const sum = (arr,target)=>{

//     let seen = []
//     let result = []

//     for(let i=0;i<arr.length;i++){
//         let toFind = target - arr[i]

//         if(seen.includes(toFind)){
//             result.push(toFind,arr[i])
//             break
//         }
//         else{
//             seen.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(sum([1,2,6,4,7],9))



// palindrome

// const palindrome = (str)=>{

//     let left = 0
//     let right = str.length-1

//     while(left <=right){
//         if(str[left] !== str[right]){
//             console.log("is not palindrome")
//             return
//         }
//         else{
//             left ++
//             right --
//         }

//     }
//     console.log("is  palindrome")

// }
// (palindrome("eyeeye"))



//longest common perfix

// const common = (arr)=>{
//     let first = arr[0]
//     let perfix = ''

//     for(let i=0; i<first.length;i++){
//         let ch = first[i]
//         for(let j=1;j<arr.length;j++){
//             if(arr[j][i] !=ch){
//                 return perfix
//             }
//         }
//         perfix +=ch

        
//     }
//     return perfix
// }

// console.log(common(["hello","hest","here"]))
// console.log(common(["flllo","flst","flre"]))




//valid parentheses

const isValid = (par)=>{

    let map = {
        ')':'(',
        '}':'{',
        ']':'['
    }

    let stack = []

    for(let i= 0; i<par.length;i++){
        let ch = par[i]

        if(ch === "(" || ch === "{" || ch==="["){
            stack.push(ch)
        }
        else{
            let last = stack.pop()
        if(last !==map[ch])
            return false
        }

        
    }
return stack.length ===0

}

console.log(isValid('([]){}'))
