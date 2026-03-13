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






// length of the last word

// const length = (str)=>{

//     let splitStr = str.split(" ")

//     let lastWord = splitStr[splitStr.length -1]

//     let result = lastWord.length

//     console.log(`last word of the string is ${lastWord}`)
//     console.log(result)

// }

// length("hello there are you")







//remove element
// const removeElement = (nums, val) => {
//     let k = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[k] = nums[i];
//             k++;
//         }
//     }

//     return k;
// };

// let nums = [3,2,2,3,3,3,3,3,3,3,1,2,4,5,6,7];

// let k = removeElement(nums, 3);

// console.log("k:", k);
// console.log("nums:", nums);



//find the index of the first occurence in the string





//merge two sorted list
// Node class for linked list
// class ListNode {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

// // Convert array to linked list
// const arrayToList = (arr) => {
//     let dummy = new ListNode(0);
//     let current = dummy;

//     for (let num of arr) {
//         current.next = new ListNode(num);
//         current = current.next;
//     }

//     return dummy.next;
// }

// // Merge two sorted linked lists
// const merge = (list1, list2) => {

//     let dummy = new ListNode(0);
//     let current = dummy;

//     while (list1 && list2) {

//         if (list1.val <= list2.val) {
//             current.next = list1;
//             list1 = list1.next;
//         } 
//         else {
//             current.next = list2;
//             list2 = list2.next;
//         }

//         current = current.next;
//     }

//     // attach remaining nodes
//     if (list1 !== null) {
//         current.next = list1;
//     } else {
//         current.next = list2;
//     }

//     return dummy.next;
// }

// // Print linked list
// const printList = (head) => {
//     let result = [];
//     let current = head;

//     while (current) {
//         result.push(current.val);
//         current = current.next;
//     }

//     console.log(result.join(" -> "));
// }


// // Test data
// let list1 = arrayToList([1,2,3]);
// let list2 = arrayToList([1,2,4,5]);

// let mergedList = merge(list1, list2);

// printList(mergedList);


const mergeTwoLists = (list1, list2) => {

    let dummy = { val: -1, next: null };
    let current = dummy;

    while (list1 !== null && list2 !== null) {

        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
    }

    return dummy.next;
};

console.log(mergeTwoLists([1,2,3],[1,2,4,5]))