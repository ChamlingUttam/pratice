//print a number but if it is multiply bt 3 print buss instead

const check = (n)=>{

    let result = []
    

    for(let i=1;i<n;i++){

         if(i%2==0 && i%3==0){
            result.push("fizzbuzz")
        }
        else if(i%3 == 0){
            result.push("fizz")
        }
        
        else{
            result.push(i)
        }
    }
    return result
}

console.log(check(18))