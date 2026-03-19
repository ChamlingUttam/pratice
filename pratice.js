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

//     for(let i=1; i<arr.length;i++){
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


//swap two number
// const swap = (arr,p1,p2)=>{

//     let temp = arr[p1]
//     arr[p1] = arr[p2]
//     arr[p2] = temp

//     return arr
// }

// console.log(swap([1,2,3,4,5],2,4))


//swap two elements which are gretaer than 5

// const swap = (arr)=>{

//     let index = []
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>5)
//         {
//             index.push(i)
//         }
//     }

//     if(index.length >=2){
//         let temp = arr[index[0]]
//         arr[index[0]]=arr[index[1]]
//         arr[index[1]] = temp
//     }

//     return arr
// }
// console.log(swap([1,6,3,4,5,7]))




// reverse the string

// const reverse = (str)=>{

//     // let splitStr = str.split('')
//     let result = []

//     for(let i= str.length -1 ; i>=0;i--){
//         result.push(str[i])
//     }

//     return result

// }

// console.log(reverse([1,2,3]))



// remove elements 
// const remove = (nums,val)=>{

//     let k = 0

//     for (let i = 0; i<nums.length; i++){
//         if(nums[i] !== val){
//             nums[k] = nums[i]
//             k++
//         }
//     }
//     return k
// }

// let nums = [1,2,3,3,4,4,2,1,6,7,8,9,5,5,5]

// let k = remove(nums,2)

// console.log('K:', k)
// console.log("nums :", nums.slice(0,k))





//remove elements

// const remove = (arr,val)=>{


//     let k=0
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !== val)
//             {
//                 arr[k] = arr[i]
//                 k++
//             }
        
//     }
//     return k
// }

// let arr = [1,2,2,3,4,5,6,4,3,2,3,2]

// let val = remove(arr,2)

// console.log(val)
// console.log(arr)




//remove duplicate elements of desire one

// const remove = (arr,val)=>{
//     let k =0 

//     for (let i=0;i<arr.length;i++){
//         if(arr[i] !== val)
//         {
//             arr[k] = arr[i]
//             k++
//         }
//     }
//     return k
// }

// let arr = [1,2,3,4,5,6,2,1,2,2,2,2,2,2,2]

// let k = remove(arr,2)

// console.log(k)
// console.log(arr.slice(0,k))


//length of the last word

// const length = (str)=>{


//     let spiltStr = str.split(' ')

//     let lastWord = spiltStr[spiltStr.length -1]

//     let lastWordLength = lastWord.length


//     console.log(lastWord)
//     console.log(lastWordLength)
// }

// length('hello there you are')


/*
longest common perfix
*/

// const prefix = (arr)=>{

//     let empty = ""
//     let firstElement = arr[0]

//     for(let i = 0; i<firstElement.length ; i++)
//     {
//         let ch = firstElement[i]
//         for(let j=1;j<arr.length;j++)
//         {
//             if(arr[j][i] !== ch)
//             {
//                 return empty
//             }
//         }
//         empty += ch
//     }
//     return ch
// }

// console.log(prefix(['ram',"race",'rare']))



//remove duplicate from array


// const remove = (arr)=>{

//     let arrSorted = arr.sort()

//     let check = [arr[0]]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i] !== arr[i-1]){
//             check.push(arr[i])
//         }
//     }
//     return check
//     // console.log(arrSorted)
// }

// console.log(remove([1,2,3,4,5,1,2,3,4,5]))


//two sum problem


// const sum = (arr,target)=>{


//     let seen = []
//     let result = []
//     for(let i=0;i<arr.length;i++)
//     {
//         let toFind = target - arr[i]

//         if(!seen.includes(toFind))
//         {
//             seen.push(arr[i])
//         }
//         else{
//             result.push(toFind,arr[i])
//         }


//     }
//     return result
// }

// console.log(sum([1,2,3,4,5],9))



//didit count

// const digit = (n)=>{

//     let num = Math.abs(n)

//     let count  = 0

//     while( num > 0)
//     {
//         num = Math.floor(num/10)
//         count ++
//     }
//     return count



// }

// console.log(digit(1234))



//frequency count 

// const count = (arr)=>{

//     let result = {}

//     for(let i=0; i<arr.length;i++){
//         let element = arr[i]
//         if(result[element]){
//             result[element]++
//         }
//         else{
//             result[element] = 1
//         }
//     }
//     return result
// }

// console.log(count([1,2,3,4,2,1,3]))



//count a number of string

const count = (str)=>{

    let splitStr = str.split(' ')

    let result = 0
    for(let i=0; i<splitStr.length;i++){
        let line = splitStr[i]
        result += line.length
    }
    return result

}

console.log(count('hsdkm sdfksjf sdfkjs sdfhs'))