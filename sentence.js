//define str variable i.e sentence to be read
const str = "i am writing an algorithm.";
//function for counting the length of sentence
let alphabet_count = (str) => str.length;
//function for counting the number of words in sentence
let word_count = (str) => str.split(" ").length;
//function for counting the amount of vowels present
let vowel_count = (str) => str.match(/[aeiou]/gi).length;

// variable declaration
let a = alphabet_count(str);
let b = word_count(str);
let c = vowel_count(str);
//function to return all the functions
const sentence_read = () => {
  return { a, b, c };
};

console.log(sentence_read());
