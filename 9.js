//valid parenthess

// var isValid = function(s) {
//     const map = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };
//     const stack = [];

//     for (const char of s) {
//         if (Object.values(map).includes(char)) {
//             stack.push(char);
//         } else if (map[char]) {
//             if (stack.length === 0 || stack.pop() !== map[char]) {
//                 return false;
//             }
//         }
//     }
//     return stack.length === 0;
// };
// console.log(isValid('(}'))





const isValid = (s) => {

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let stack = []

    for(let i = 0; i < s.length; i++){

        let char = s[i]

        // push opening brackets
        if(char === '(' || char === '{' || char === '['){
            stack.push(char)
        }

        // handle closing brackets
        else{

            if(stack.length === 0){
                return false
            }

            let last = stack.pop()

            if(last !== map[char]){
                return false
            }

        }
    }

    return stack.length === 0
}

console.log(isValid("()"))
console.log(isValid("(}"))
console.log(isValid("({[]})"))
console.log(isValid("(){}[]"))
