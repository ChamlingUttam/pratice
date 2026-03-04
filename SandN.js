//seprate the string adn number and store in 2 different array
const sep = (arr)=>{

    const string = []
    const number = []

   for(let i = 0; i<arr.length; i++){
    if(typeof arr[i] == "string"){
         string.push(arr[i]) 
    }
    else{
         number.push(arr[i])
    }
   }
    console.log(`number are ${number}`)
    console.log(`string are ${string}`)



}

 sep(['a','r',3,4])