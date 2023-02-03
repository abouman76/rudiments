function capitalize(word) {
  // implement me
  return `${word[0].toUpperCase()}${word.substring(1)}`;
}

describe("capitalize", () => {
  test("should capitalize the first letter of a word", () => {
    const input = "hello";
    const output = capitalize(input);

    expect(output).toBe("Hello");
  });

  test.skip("BONUS: should capitalize all words in a sentence", () => {
    const input = "the quick brown fox jumps over the lazy dog";
    const output = capitalize(input);

    expect(output).toBe("The Quick Brown Fox Jumps Over The Lazy Dog");
  });
});
