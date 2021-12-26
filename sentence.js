//define str variable i.e sentence to be read
const str = "i am writing an algorithm.";

let alphabet_count = (str) => str.length;
// console.log(alphabet_count(str));

let word_count = (str) => str.split(" ").length;
// console.log(word_count(str));

let vowel_count = (str) => str.match(/[aeiou]/gi).length;
// console.log(vowel_count(str));

let a = alphabet_count(str);
let b = word_count(str);
let c = vowel_count(str);

const sentence_read = () => {
  return { a, b, c };
};

console.log(sentence_read());
