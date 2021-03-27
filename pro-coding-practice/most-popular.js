function mostPopular(string) {
  let ltrObjCount = {};
  let max = 0;
  let ltr;
  for (let letter of string) {
    const count = ltrObjCount[letter] || 0;
    const newCount = count + 1;
    ltrObjCount[letter] = newCount;
    if (newCount > max) {
      max = newCount;
      ltr = letter;
    }
  }
  return ltr;
}
