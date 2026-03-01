function revString(str){
let result = ""
for(let i = str.length - 1; i>=0; i--){
    result += str[i]
}
console.log(`reverse string of ${str} is ${result}`)
}

revString('hello')