function findMostFrequentChar(text) {
  let counts = {};
  let maxCount = 0;
  let mostFrequent = "";

  for (let char of text.toLowerCase()) {
    if (char.match(/[a-z]/)) {
      counts[char] = (counts[char] || 0) + 1;
      if (counts[char] > maxCount) {
        maxCount = counts[char];
        mostFrequent = char;
      }
    }
  }

  return mostFrequent;
}

console.log(findMostFrequentChar("JavaScript"));
