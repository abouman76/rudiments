function countWords() {
  // Implement me
}

describe.skip("countWords", () => {
  test("should count the words in a piece of text", () => {
    const input = "The quick brown fox jumps over the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test.skip("BONUS: should work with double spaces in a sentence", () => {
    const input = "The quick brown  fox jumps over  the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test.skip("BONUS: should work with spaces at the end of a sentence", () => {
    const input = "The quick brown fox jumps over the lazy dog  ";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });

  test.skip("BONUS: should work with spaces at the start of a sentence", () => {
    const input = "  The quick brown fox jumps over the lazy dog";
    const wordCount = countWords(input);

    expect(wordCount).toBe(9);
  });
});
