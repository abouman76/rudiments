function paymentOptions(paymentProviders) {
  // implement me
}

describe.skip("paymentOptions", () => {
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
