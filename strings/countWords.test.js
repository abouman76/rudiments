function countWords(words) {
  // Implement me
  // input: "  The quick brown fox jumps over the lazy dog"
  // take of white space at the start of the string "The quick brown fox jumps over the lazy dog"
  // create an array ['The', ]
  // count the words: 9
  // output = 9 words

  //.replace(/\s+/g, ' ')

  const word = words.trim().split(/\s+/g);
  // console.log('Spatie verwijdert?', word.length)
    return word.length

}

describe("countWords", () => {
  test("should count the words in a piece of text", () => {
    const input = "The quick brown fox jumps over the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test("BONUS: should work with double spaces in a sentence", () => {
    const input = "The quick brown  fox jumps over  the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test("BONUS: should work with spaces at the end of a sentence", () => {
    const input = "The quick brown fox jumps over the lazy dog  ";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test("BONUS: should work with spaces at the start of a sentence", () => {
    const input = "  The quick brown fox jumps over the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });
});
