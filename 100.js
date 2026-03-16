//1 create an array from 1 to 100

// const create = ()=>{

//     let arr = []

//     for(let i=1;i<=100;i++){
//         arr.push(i)
//     }

//     return arr
// }

// console.log(create())





// const create = ()=>{

//     let arr = []

//     for(let i=1;i<=100;i++){
//         arr[arr.length] = i
//     }

//     return arr
// }

// console.log(create())





//2 print even number from 1 to 50

// const even = ()=>{

//     let arr = []

//     for (let i=1;i<=50;i++){
//         if(i%2 === 0){
//             arr[arr.length] = i
//         }
//     }
//     return arr
// }

// console.log(even())





// for(let i=2;i<=50;i+=2){
//     console.log(i)
// }




//3 odd number print
// const odd = ()=>{
// let arr = []
// for(let i=1;i<=50;i++){
//     if(i%2 !== 0)
//     {
//         // arr.push(i)
//         arr[arr.length] = i
//     }
// }
// return arr
// }
// console.log(odd())



// for(let i=1;i<=50;i+=2){
// console.log(i)
// }

//4 factorial 

// const fact = (n)=>{
//     let result = 1

//     if(n===0 || n===1){
//         return 1
//     }

//     for(let i=2; i<=n;i++){
//         result *= i
//     }
//     return result
// }

// console.log(fact(5))




//5 fibonnaic series

// const fib = (n) => {
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     return fib(n-1) + fib(n-2);
// }

// // Print first 10 numbers
// for(let i = 0; i < 10; i++){
//     console.log(fib(i));
// }






// 6 largest among three number

// const max = (a,b,c)=>{

//     if(a>b && a>c){
//         return a
//     }
//    else if(b>a && b>c){
//         return b
//     }
//     else{
//         return c
//     }

// }

// let result = max(1,4,7)

// console.log(`MAX IS ${result}`)







// 7 reverse a number

// const reverse = (n)=>{

//     let stringfy = n.toString()
//     let result = ""

//     for(let i= stringfy.length -1; i>=0;i--)
//     {
//         result +=stringfy[i]
//     }
    
//     let realResult = parseInt(result)
//     console.log(typeof realResult)
//     return realResult
// }

// console.log(reverse(123))


// const reverse = (n)=>{
//     let stringfy =Math.abs(n).toString()
//     let isNegative = n < 0
//     let result = ""

//     for(let i=stringfy.length-1;i>=0;i--)
//     {
//         result +=stringfy[i]
//     }
//     return isNegative ? -result : result

// }

// console.log(reverse(-123))





//8 palindrome

// const palindrome = (str)=>{

//     let left = 0;
//     let right = str.length -1 

//     while(left <= right){
//         if(str[left] !== str[right])
//         {
//             return false
//         }
//         else{
//             right --
//             left ++
//         }
//     }
//     return true
// }

// console.log(palindrome('earae'))
// console.log(palindrome('eye'))



//valid palindrome number

// const isValid = (n)=>{

//     let stringfy = n.toString()

//     let left = 0
//     let right = stringfy.length -1

//     while(left <= right)

//     {
//         if(stringfy[left] !== stringfy[right])
//         {
//             return false
//         }
//         else{
//             left ++
//             right --
//         }

        
//     }
//     return true
// }

// console.log(isValid(12321))
// console.log(isValid(122223))





//9 is prime

// const isPrime = (n)=>{

//     if(n<=1){
//         return false
//     }

//     for(let i=2;i<n;i++){
//         if(n%i===0){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPrime(53))






// 10 digit count 

// const digit = (n)=>{

//     let num  = Math.abs(n)

//     let count = 0

//  while( num > 0 ){
//     num = Math.floor(num/10)
//     count ++
//  }
//     return count
// }

// console.log(digit(1234))








// 11 