//anagram 
// its like rearrange the word
const checkAnagram = (str) => {

    let word = 'abcdefg';

    if (str.length !== word.length) {
        console.log("word is not anagram");
        return;
    }

    let sortWord = word.split('').sort();
    let strWord = str.split('').sort();

    for (let i = 0; i < sortWord.length; i++) {
        if (sortWord[i] !== strWord[i]) {
            console.log("word is not anagram");
            return;
        }
    }

    console.log("is anagram");
}

checkAnagram('abcdfge'); // ✅ is anagram