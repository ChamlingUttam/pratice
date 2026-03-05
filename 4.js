//check string is palindrom

const checkPalindrom = (str)=>{

    let left = 0
    let right = str.length -1

    while(left < right){
        if(str[left] != str[right]){
            console.log("string is not palindrom")
            return
        }
        left++
        right--
    }
    console.log("string is palindrom")
}

checkPalindrom(123454321)