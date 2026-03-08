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

const vowels = (str)=>{
    let count = 0

    let vowel = ['a','e','i','o','u']

    for(let i=0; i<str.length;i++){
        if(vowel.includes(str[i]))
        {
            count++
        }
    }
    console.log(count)
}
vowels('hello')