//reverse string

// const reverse = (str)=>{
//     let result = " "

//     for(let i =str.length -1 ; i>=0; i--){
//         result +=str[i]
//     }
//     console.log(result)
// }

// reverse("hello")



//palindrome

// const palindrome = (str)=>{

//     let right = str.length-1
//     let left = 0

//     while(left < right){
//         if(str[left]!=str[right]){
//             console.log("is not palindrome")
//             return
//         }
//         else{
//             right --
//             left ++
//         }

//     }
//     console.log("is palindrome")
// }
// palindrome("eye")


// const palindrome = (str)=>{

//     let reveresedStr = str.split("").reverse().join("")

//     if(reveresedStr.length !== str.length){
//         return false
//     }

//         if(reveresedStr == str){
//             console.log("is palindrome")
//             return 
//         }
//         else{
//             console.log("not palindrome")
//         }
    
// }
// palindrome("hello")

//max in array

// const max = (arr)=>{
//     let maxs = arr[0]
//     for(let n of arr){
//         if(maxs<n){
//             maxs = n
//         }
         
//     }
//     console.log(maxs)
// }

// max([1,2,3,4,5])

// const max = (arr)=>{
//     let maxNum = arr[0]

//     for(let i=0;i<arr.length;i++){
//         if(maxNum < arr[i])
//         {
//             maxNum = arr[i]
//         }
//     }
//     console.log(maxNum)
// }
// max([-1,-2,-4,0])




//remove dupilcate

// const check = (arr)=>{
//     console.log( [... new Set(arr)])
    
// }
// check([1,2,2,3,3,4])

// const duplicate = (arr)=>{
    
//     let pure = [arr[0]]

//     for(let i= 1; i<arr.length;i++){
//         if(arr[i]!==arr[i-1])
//         {
//             pure.push(arr[i])
//         }
//     }
//     console.log(pure)

    
// }
// duplicate([1,2,2,2,2,2,23,3,3,3,3,3,4,45])

//sum of array

// const sum = (arr)=>{

//     let result = 0

//     for(let i=0; i<arr.length;i++){
//         result +=arr[i]
//     }
//     console.log(result)
// }
// sum([1,2,4,3,4])




//fibonaicc series

// const findFib = (n)=>{

//     let a = 0;
//     let b = 1;

//     if(n==0 || n==1){
//         console.log(n)
//         return
//     }

//     for(let i=2;i<n;i++){
//        let temp = a+b
//         a=b 
//         b=temp
//     }
//     console.log(b)
// }
// findFib(7)




//check anagram

// const checkAnagram = (check,str)=>{

//     let sortCheck = check.split('').sort().join('')
//     let sortStr = str.split('').sort().join('')

//     if(sortCheck.length != sortStr.length)
//     {
//         return console.log("not anagram")
//     }

//     if(sortCheck == sortStr){
//         console.log("is anagram")
//         return
//     }
//     console.log("not anagram")
// }
// checkAnagram("ram","mard")




//\COUNT THE VOWEL 

// const vowels = (str)=>{
//     let count = 0

//     let vowel = ['a','e','i','o','u']

//     for(let i=0; i<str.length;i++){
//         if(vowel.includes(str[i]))
//         {
//             count++
//         }
//     }
//     console.log(count)
// }
// vowels('hello')


// const vowels = (str)=>{
//     let count = 0

//     let vowel = ['a','e','i','o','u']

//     for (let i=0; i<str.length;i++){
//         if(vowel.includes(str[i]))
//         {
//             count++
//         }
//     }
//     return count

// }
// console.log(vowels("aeioueeee"))


// //two sum
//  const twoSum = (arr,target)=>{

//     let seen = []
//     let result = []

//     for(let i =0; i<arr.length;i++){
//         let toFind = target - arr[i]

//         if(seen.includes(toFind)){
//              result.push(toFind,arr[i])
//              break
//         }
//         else{
//             seen.push(arr[i])
//         }
//     }
//     return result

//  }

//  console.log(twoSum([1,2,3,4],6))




//generate random number 

// const generate = (n)=>{

//     let randomNumber =[];
    

//     for(let i=0;i<n;i++){
//            randomNumber.push(Math.floor(Math.random()*10))
//     }

//     console.log(randomNumber)
// }
// generate(4)


//remove dupilcate conscutive string

// const remove = (arr)=>{

    
//     let first = [arr[0]]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]!==arr[i-1]){
//             first.push(arr[i])
//         }
//     }
//     return first

// }
// console.log(remove([1,2,3,4,4,4,4,4,4,2]))





//remove duplicate array

// const remove = (arr)=>{
//     let result =[arr[0]]

//     for(let i=0; i<arr.length;i++){
//         if(!result.includes(arr[i]))
//         {
//             result.push(arr[i])
//         }

//     }
//     return result 
// }
// // remove([1,2,3,3,44,4,4,4,4,43,3,2,1])
// console.log(remove([1,1,12,3,2,3,4,5,6,5,3,2,1]))


// first latter captial

// const capital = (str)=>{

//     let splitWord = str.split(" ")

//     let result = []

//     for(let i=0; i<splitWord.length;i++){
//         let word = splitWord[i]
//         result.push(word[0].toUpperCase()+word.slice(1))
//     }
//     return result.join(" ")
// }
// console.log(capital("hello us are"))



//anagrams check

// const anagram = (str,check)=>{
// let sortStr = str.split('').sort().join()
// let sortCheck = check.split('').sort().join()

// if(!sortStr.includes(sortCheck)){
//     return false
// }
// return true


// }
// console.log(anagram("qwertasy","ytrewsq"))