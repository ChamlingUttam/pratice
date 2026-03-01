const palindrome = (str)=>{
    let left = 0
    let right = str.length - 1

    while(right > left){
        if(str[left] !== str[right]){
            console.log("number is not palindrome")
        return
        }
        left++
        right --
            
    }
    console.log("number is palindrome")
}

palindrome("dvdeyedvd")
