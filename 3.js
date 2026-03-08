//anagram 
// its like rearrange the word
const checkAnagram = (str) => {

    let word = 'abcdefg';

    if (str.length !== word.length) {
        console.log("word is not anagram");
        return;
    }

    let sortWord = word.split('').sort().join('');
    let strWord = str.split('').sort().join('');

    for (let i = 0; i < sortWord.length; i++) {
        if (sortWord[i] !== strWord[i]) {
            console.log("word is not anagram");
            return;
        }
    }

    console.log("is anagram");
}

checkAnagram('abcdegf'); // ✅ is anagram