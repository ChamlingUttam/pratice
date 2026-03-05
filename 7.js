//anagram pratice

const checkAnagram = (str1,str2)=>{

    let sortedStr1= str1.split('').sort()
    let sortedStr2= str2.split('').sort()


    if(str1.length != str2.length){
        return false
    }

    if(sortedStr2.includes(sortedStr1)){
        return console.log("is anagram")
    }
    else{
        console.log("ios not anagram")
    }
}

checkAnagram("abcdef","fedcba")