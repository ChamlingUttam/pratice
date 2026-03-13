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

// const isValid = (par)=>{

//     let map = {
//         ')':'(',
//         '}':'{',
//         ']':'['
//     }

//     let stack = []

//     for(let i= 0; i<par.length;i++){
//         let ch = par[i]

//         if(ch === "(" || ch === "{" || ch==="["){
//             stack.push(ch)
//         }
//         else{
//             let last = stack.pop()
//         if(last !==map[ch])
//             return false
//         }

        
//     }
// return stack.length ===0

// }

// console.log(isValid('([]){}'))










//remove duplicate in array

// const remove = (arr)=>{

//     let result = [arr[0]]

//     for(let i=1 ; i<arr.length;i++){
//         if(!result.includes(arr[i])){
//            result.push(arr[i])
//         }
//     }
//     return result

// }

// console.log(remove([1,2,2,2,2,3,4,5,6,3,2,1]))






//valid parentheses

// const valid = (p)=>{

//     let stack = []

//     const map = {
//         ")":"(",
//         "}":"{",
//         "]":"[",
//     }

//     for(let i=0;i<p.length;i++){
//         let ch = p[i]

//         if(ch==="(" || ch==="{" || ch==="[")
//         {
//             stack.push(p[i])
//         }
//         else{
//             let last = stack.pop()

//             if(last !== map[ch]){
//                 return false
//             }
//         }
//     }
//     return stack.length === 0
// }

// console.log(valid('(){}[]('))




//remove duplicate from the array

// const remove = (arr)=>{

//     let seen = [arr[0]]

//     for (let i= 1; i<arr.length;i++){
//         if(!seen.includes(arr[i]))
//         {
//             seen.push(arr[i])
//         }
//     }
//     return seen


// }

// console.log(remove([1,2,3,4,3,3,2,1,7,6,7,6,1]).sort())
// console.log(remove([1,2,3,4,3,3,2,1,7,6,7,6,1]))




//common longest prefix

// const common = (arr)=>{

//     let prefix = ''
//     let first = arr[0]

//     for(let i=0;i<first.length;i++){
//         let ch=first[i]

//         for(let j=1;j<arr.length;j++){
//             if(arr[j][i] !== ch){
//                 return prefix
//             }
//         }
//         prefix += ch
//     }
//     return prefix
// }

// console.log(common(['flower','flood','flow']))
