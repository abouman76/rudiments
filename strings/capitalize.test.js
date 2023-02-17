function capitalize(word) {
  // implement me
  // return word.charAt(0).toUpperCase() + word.slice(1);

  // What is the input "the quick brown"
  // cut the string into individual words and put them into an array
  // iterate over each word['the', 'quick', 'brown']
  // when iterating a word, capitalize the first letter['The', 'Quick', 'Brown']
  // concat array to a string with spaces in between `The Quick Brown`
  // return the string as output

//   const words = word.split(' ');
//   //console.log("what is words?", words);
//
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substring(1)
//   }
//   return words.join(' ');
// }

 return word.split(' ').map((word) => {
    return word[0].toUpperCase() + word.substring(1)
  })
     .join(' ')

}

describe.skip("capitalize", () => {
  test("should capitalize the first letter of a word", () => {
    const input = "hello";
    const output = capitalize(input);

    expect(output).toBe("Hello");
  });

  test("BONUS: should capitalize all words in a sentence", () => {
    const input = "the quick brown fox jumps over the lazy dog";
    const output = capitalize(input);

    expect(output).toBe("The Quick Brown Fox Jumps Over The Lazy Dog");
  });
});
