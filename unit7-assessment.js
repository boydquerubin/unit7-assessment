//Arrays are usually O(log n) or O(1)
function hasZeroSum(arr) {
  const seen = new Set();

  for (const num of arr) {
    if (seen.has(-num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

const arr = [1, 2, -3, 4, -1];
console.log(hasZeroSum(arr));

//O(1)
function hasUniqueChars(word) {
  const uniqueChars = new Set();

  for (const char of word) {
    if (uniqueChars.has(char)) {
      return false;
    }
    uniqueChars.add(char);
  }
  return true;
}

const word1 = "firstt";
console.log(hasUniqueChars(word1));

const word2 = "second";
console.log(hasUniqueChars(word2));

//O(1)
function isPangram(sentence) {
  const lowercaseSentence = sentence.toLowerCase();

  const letters = new Set();

  for (const char of lowercaseSentence) {
    if (/[a-z]/.test(char)) {
      letters.add(char);
    }
  }

  return letters.size === 26;
}

const sentence1 = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(sentence1));

const sentence2 = "This is not a pangram.";
console.log(isPangram(sentence2));

//O(log n)
function findLongestWord(words) {
  let maxLength = 0;

  for (const word of words) {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  }
  return maxLength;
}

console.log(findLongestWord(["hi", "hello"]));
