function paymentOptions(paymentProviders) {
  // start with an empty array
  const arrayOfOptions = [];

  // iterate over al keys of the object of providers
  for (let paymentProvider in paymentProviders) {
    // add them to the array of options
    arrayOfOptions.push(paymentProvider);
  }

  // get al payment providers except the last one and seperate them with a ", "
  // for example ideal, mastercard
  const optionsSeperatedByComma = arrayOfOptions
    .slice(0, arrayOfOptions.length - 1)
    .join(", ");
  // get the last option for example paypal
  const lastOption = arrayOfOptions[arrayOfOptions.length - 1];
  return `You can pay with ${optionsSeperatedByComma} and ${lastOption}`;
}

describe("paymentOptions", () => {
  test("should return a string with payments options", () => {
    const input = { ideal: true, mastercard: true, paypal: true };
    const output = paymentOptions(input);
    expect(output).toBe("You can pay with ideal, mastercard and paypal");
  });

  test.skip("BONUS: should ignore payment options which are not supported", () => {
    const input = {
      ideal: true,
      klarna: true,
      mastercard: false,
      paypal: true,
      afterpay: false,
    };

    const output = paymentOptions(input);
    expect(output).toBe("You can pay with ideal, klarna and paypal");
  });
});
