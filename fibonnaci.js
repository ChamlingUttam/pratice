//find fibonacci series of n

const fibonacci = (n)=>{
    let a= 0
    let b = 1
    
    for(let i = 2; i<n;i++){
        let temp = a+b
        a=b
        b=temp
    }
    return b
}
const result = fibonacci(5)
console.log(result)