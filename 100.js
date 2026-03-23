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




// 28 find the missing element in the array

// const missing = (arr)=>{

//     let min = arr[0]
//     let result = []
//     let n=(arr.at(-1) - min ) + 1
//     // console.log(arr[i].length  -1 )


//     for(let i=min;i<=n;i++){
//         if(!result.includes(i)){
//             // result.push(i)
//             result[result.length] = i
//         }
//     }
//     return result
// }

// console.log(missing([1,2,4,6]))
// console.log(missing([6,9,11,10,12,14,15]))






// 29 remove space without replace()

// const remove = (str)=>{

//     let result = ""

//     console.log(str.length)
//     for(let i=0;i<str.length;i++){
//         if(str[i] != " ")
//         {
//             result +=str[i]
//         }

//     }
//     return result

// }

// console.log(remove('hello world'))



// 30 find character frequency

// const frequency = (str)=>{

//     let result ={}

//     for(let i=0;i<str.length;i++){
//         let char = str[i]

//         if(result[char]){
//             result[char] ++
//         }
//         else{
//             result[char] = 1
//         }
//     }
//      return result

// }

// console.log(frequency('hello world hi'))





// 31 replace character in a string 

// let str = "banana"

// console.log(str.replace("a","o"))  // this replace first a with o



// const replace = (str,oldChar,newChar)=>{

//     let result = ""

//     for(let i=0;i<str.length;i++){
//         if(str[i] === oldChar )
//         {
//             result +=newChar
//         }
//         else{
//             result +=str[i]
//         }
//     }
//     return result

// }

// console.log(replace("banana","a","e"))




// 32 find non repeting character not completed

// const nonRepeating = (str)=>{

//     let seen ={}
//     let result = ""

//     for(let i=0;i<str.length;i++){
//         let char = str[i]
//         seen[char] = (seen[char] || 0) +1
//     }

//     for (let i=0;i<str.length;i++){
//         let char = str[i]
//         if(seen[char] ===1)
//         {
//         //    return result +=char ///if only first non repeating char want to be dosply
//          result +=char // if check all char which is not repeating
//         }
//     }

//     return result

// }

// console.log(nonRepeating("rraam"))
// console.log(nonRepeating("programming"))
// console.log(nonRepeating("member"))







// 33 repeating character

// const repeating = (str)=>{

//     let seen ={}
//     let result = ""
    
//      for(let i=0;i<str.length;i++){
//         let char = str[i]
//         seen[char] = (seen[char] || 0) +1
//      }
//      for(let i=0;i<str.length;i++){
//         let char = str[i]
//         if(seen[char] > 1)
//         {
//         //    return  result +=char if we want first repeating char
//         result +=char  //which char has repeated from the string
//          }
//      }
//      return result
// }

// console.log(repeating("programmer"))





// 34 check anagram

// const anagram = (str,check)=>{

//     if(str.length !== check.length){
//         return false
//     }

//     let sortStr = str.split('').sort().join('')
//     let sortCheck = check.split('').sort().join('')

// if(sortStr.includes(sortCheck)){
//     return true
// }
// return false

// }

// console.log(anagram("ram","mar"))
// console.log(anagram("rams","mara"))
// console.log(anagram("ramhe","mareh"))
// console.log(anagram("listen","silent"))


// const anagram  = (str1,str2)=>{

//     let freq ={}

//     for(let char of str1){
//         freq[char] = (freq[char] ||0) +1
//     }

//     for(let chars of str2){
//         if(!freq[chars]){
//             return false
//         }
//         freq[chars] --
//     }
//     return true

// }
// console.log(anagram("silent","listen"))
// console.log(anagram("rom","ram"))


//35 check the longest word in a string

// const check = (str)=>{

// let longest = ''

// let splitStr  = str.split(' ')

// for(let char of splitStr){
//     if(char.length > longest.length){
//         longest = char
//     }
// }
// return longest
// }
// console.log(check("hello how are you codegpt in your room"))

// const check = (str)=>{

//     let longest = ""

//     let splitStr = str.split(" ")

//     for(let i=0;i<splitStr.length;i++)
//     {
//         if(splitStr[i].length > longest.length)
//         {
//             console.log(splitStr[i].length)
//             longest = splitStr[i]
//         }
//     }
//     return longest
// }

// console.log(check("qwerty jekj dfkds"))


// 36 expensive product 

// const api = [
//     {
//         "product":"fan",
//         "price":250
//     },
//     {
//         "product":"ball",
//         "price":150
//     },
//     {
//         "product":"book",
//         "price":500
//     },
// ]

// let expensive = 0

// // console.log(api.length)
// for(let i=0;i<api.length;i++){

//     let price = api[i].price

//     if(price > expensive)
//     {
//         expensive = price
//     }
// }
// console.log(expensive)



// const api = [
//     {
//         "product":"fan",
//         "price":250
//     },
//     {
//         "product":"ball",
//         "price":150
//     },
//     {
//         "product":"book",
//         "price":500
//     },
// ]

// let expensive = api[0]

// for(let i=0;i<api.length;i++){

//     if(api[i].price > expensive.price)
//     {
//         expensive = api[i]
//     }
// }
// console.log(expensive)







// 37 intresection of two array

// const intersection = (arr1,arr2)=>{
//     let result = []
//     let removeDuplicate = [...new Set(arr2)]
//     // console.log(removeDuplicate)
//     for(let i=0;i<removeDuplicate.length;i++){
//         if(arr1.includes(removeDuplicate[i]))
//         {
//             result.push(removeDuplicate[i])
//         }
//     }
//     return result

// }

// console.log(intersection([1,2,3,4,5],[6,7,8,4,1,1,2]))





//38 find all pairs with given target sum


// const pairs = (arr,target)=>{

//     let have = []
//     let result = []
//     for(let num of arr){
//         let toFind = target - num 

//         if(have.includes(toFind)){
//             result.push(toFind,num)
//         }
//         else{
//             have.push(num)
//         }
//     }

//     return result
// }

// console.log(pairs([1,2,3,4,5,6],8))



//39 extract key from an objects
// let api ={a:1,b:2,c:3}
   
// for(let key in api){
//     console.log(key)
// }


//40 extract values from objects

// const api = {name:"ram",age:12,sex:"male"}

// for(let values in api)
// {
//     console.log(api[values])
// }

// let result = []
// for(let values in api)
// {
//     result.push(api[values])
// }
// console.log(result)





//41 get all enteries from object

// let obj = {a:1,b:2,c:5}

// let result = []
// for(let entries in obj){
//     result.push(entries,obj[entries])


// }
// console.log(result)


// 42 check if properties exist 

// let obj = {a:1,b:3,c:4}

// console.log(Object.hasOwn(obj,"a"))
// console.log(Object.hasOwn(obj,"d")) //checks key
// console.log(Object.values(obj).includes(4)) //checks values
// console.log(Object.values(obj).includes(2))
// console.log(Object.entries(obj).some(([key, value]) => key === "a" && value === 1)) //checks both but in pair 
// console.log(Object.entries(obj).some(([key, value]) => key === "a" && value === 4))



// 43 remove properties form obj

// let obj = {a:1,b:2,c:3}

// let {b,...rest} = obj  //this is useful in react too 

// console.log(rest)  


// 43 add property in object

// let obj ={b:2,c:3}

// let add = {...obj,a:1}
// console.log(add)


//44 update the  existing properties in object 

// const obj  = {a:1,b:3}

// let put = {...obj,b:2}
// console.log(put)



// let put = Object.assign({},obj,{b:5})
// console.log(put)





//45  swap keys and value

// let obj ={a:1,b:2,c:4,name:"ram"}

// let swap = {}
// for(let key in obj)
// {
//     swap[obj[key]] = key
//     // console.log(swap[obj[key]])
//     // console.log(key)
// }

// console.log(swap)

// 46 remove duplicate in object

// let obj = [
//     {
//         id:1,
//         name:"ram"
//     },
//     {
//         id:2,
//         name:"ram"
//     },
//     {
//         id:1,
//         name:"ramesh"
//     },
// ]














// 47 print pattern
let n = 5;
for(let i = 0; i < n; i++){
    let row = "";
    for(let j = 0; j < n; j++){
        row += "* ";
    }
    console.log(row);
}