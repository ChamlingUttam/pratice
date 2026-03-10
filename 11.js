// square root of numbers
const sqr = (n) => {

    let right = n
    let left = 0

    if(n === 1 || n === 0){
        return n
    }

    while(left <= right){

        const mid = Math.floor((left + right) / 2)

        if(mid * mid === n){
            return mid
        }

        else if(mid * mid < n){
            left = mid + 1
        }

        else{
            right = mid - 1
        }
    }

    return right
}

console.log(sqr(9))