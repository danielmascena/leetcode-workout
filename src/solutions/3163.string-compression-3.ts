/*
Given a string word, compress it using the following algorithm:

Begin with an empty string comp. While word is not empty, use the following operation:
Remove a maximum length prefix of word made of a single character c repeating at most 9 times.
Append the length of the prefix followed by c to comp.
Return the string comp.
*/

function compressedString(word: string): string {
  var comp = "";
  var count = 0;
  var [curr] = word;

  for (let i = 0, len = word.length; i < len; i++) {
    const c = word.charAt(i);

    if (c !== curr) {
      if (count) comp += count + curr;
      count = 1;
      curr = c;
    } else {
      count++;

      if (count === 9) {
        comp += count + c;
        count = 0;
      }
    }
  }
  if (count) {
    comp += count + curr;
  }
  return comp;
}

export default compressedString;
