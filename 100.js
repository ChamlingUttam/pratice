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








// 11 maximum in array

// const maxNum = (arr)=>{

//     let max = 0

//     for (let i =0;i<arr.length;i++){
//         if(max < arr[i]){
//             max = arr[i]
//         }
//     }

//     return max
// }

// console.log(maxNum([1,2,3,4,5,10]))
// console.log(maxNum([-1,-2,-3,-4,0]))



// 12 title CASE

// const title = (str)=>{

//     let arrStr = str.split(' ')
//     let result = []

//     for(let i=0; i<arrStr.length; i++){
//         let word = arrStr[i]

//         result.push(word[0].toUpperCase() + word.slice(1))
        
//     }

//     return result.join(' ')



// }

// console.log(title('the word of mine'))




//13 word count 

// const wordCount = (str)=>{

//     let count = 0

//     let splitStr = str.split(' ')

//     for(let i=0;i<splitStr.length;i++){
//         let line = splitStr[i]

//         count += line.length
//     }
//     return count

// }

// console.log(wordCount('hello how are you'))





//14 fibonacci series

// const fib = (n)=>{

//     let a = 0
//     let b =1

//     for(let i=2;i<n;i++){
//         let temp = a+b;
//         a=b
//         b=temp
//     }
//     return b
// }

// console.log(fib(7))





//15 power of a number

// const power = (a,n)=>{

//     if(n===0){
//         return 1
//     }

//     let isNeagtive = n<0
//     n = Math.abs(n)

//     let result = 1
//     for(let i=1;i<=n;i++){
//         result *= a
//     }
//     return isNeagtive ? 1/result : result



// }
// console.log(power(2,-1))
// console.log(power(2,3))
// console.log(power(2,-3))






//16 swap two number

// const swap = (a,b)=>{

//     let temp = a
//     a=b
//     b=temp

//     console.log(`a is ${a}`)
//     console.log(`b is ${b}`)

// }

// (swap(4,5))


//without third party

// let a = 5
// let b = 7

// a = a+b
// b = a - b
// a = a - b

// console.log(a,b)






//17 multiplication table

// const table = (n)=>{

//     for (let i=1;i<=10;i++){
//         console.log(`${n} * ${i} = ${n * i}`)
//     }
// }

// table(5)




//18 minimum in array

// const min = (arr)=>{

//     let result = arr[0]

//     for(let i=0;i<arr.length;i++){
//         if(result > arr[i]){
//              result = arr[i]
//         }
//     }
//     return result
// }

// console.log(min([11,25,6,7]))




//19 sum of array

// const sum = (arr)=>{

//     // let total = 0

//     // for (let i=0;i<arr.length;i++){
//     //     total += arr[i]
//     // }
//     // return total



//     return arr.reduce((a,b)=>a+b,0)
// }

// console.log(sum([1,2,3,4,5]))




// 20 count even and odd numbers







// 21 merge two array

// const merge = (arr1,arr2)=>{

// //    let arr3 = [...arr1 ,...arr2]
// //    return arr3




// let arr3 = []

// for(let i=0;i<arr1.length;i++){
//     arr3[arr3.length] = arr1[i]
// }

// for(let i=0;i<arr2.length;i++){
//     arr3[arr3.length] = arr2[i]
// }

// //for sorting the arr3 elements

// for(i=0;i<arr3.length;i++){
//     for(j=1;j<i;j++){

//     }
// }

// }

// console.log(merge([1,2,3],[1,2,4,5]))


//22 frequency count 

// const frequency = (arr)=>{

//     let freq = {}

//     for(let i=0;i<arr.length;i++)
//     {
//         let element = arr[i]

//         if(freq[element]){
//             freq[element]++
//         }
//         else{
//             freq[element] = 1
//         }
//     }
//     return freq

// }

// console.log(frequency([1,2,2,1,3,4,2,1]))



// 23 insert an element at specific position

// const positionAt =(arr,position,element)=>{

//     if(position < 0 || position > arr.length){
//         return false
//     }

//     for(let i=arr.length;i>position;i--){
//         arr[i] = arr[i-1]
//     }

//     arr[position] = element
//     return arr

// }

// console.log(positionAt([1,2,4,5],2,3))


// 24 remove element from array of specific position


// const remove = (arr,position)=>{

//     if(position < 0 || position > arr.length){
//         return false
//     }

//     for(let i=position;i<arr.length;i++){
//         arr[i] = arr[i+1]  // 12345
//     }

//     arr.length = arr.length - 1
//     return arr
// }

// console.log(remove([1,2,3,4,5],2))




// 25 remove duplicate from an array

// const remove = (arr)=>{

//     let seen = []

//     for(let i=0;i<arr.length;i++){
//         if(!seen.includes(arr[i])){
//             // seen.push(arr[i])
//             seen[seen.length] = arr[i]
//         }
//     }
//     return seen

// }

// console.log(remove([1,2,3,2,1,4,5,4]))





// 26 sorting an array

// const sort = (arr)=>{

//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length -i-1;j++){
//             if(arr[j] > arr[j+1]){
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(sort([2,13,3,1,5,4]))




// 27 check whetrer the arr is sorted

// const check = (arr)=>{

//     // let ascending = true
//     // let descinding = true

//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>arr[i+1]) return false
//     }
//     return true
// }

// console.log(check([1,2,2,3]))