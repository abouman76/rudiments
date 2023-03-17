/*
  const input = {
      ideal: true,
      klarna: true,
      mastercard: false,
      paypal: true,
      afterpay: false,
    };
    1. object omzetten naar array
      [ideal, klarna, mastercard, paypal, afterpay]
    2. Array moet de output geven van ideal, klarna, paypayl
      [ideal, klarna, paypal]
    3. opdelen in 2 logical statements

        [ideal, klarna] paypal

        ideal, klarna and paypal

     4. Array output omzetten naar string

    output: You can pay with Ideal, klarna and paypal.
* */

function paymentOptions(paymentProviders) {

  let onlinePayment = Object.keys(paymentProviders);
    // console.log('variable OnlinePayment:', onlinePayment);
  let enabledOptions = onlinePayment.filter((enabledOption) => {
  console.log("IS dit propName?", enabledOption, paymentProviders, paymentProviders[enabledOption] === true);

      return paymentProviders[enabledOption] === true

  });
    // console.log('Options', enabledOptions)

      const lastElement = enabledOptions[enabledOptions.length -1]
    // console.log("lastEl:", lastElement);
      const otherElements = enabledOptions.slice(0, -1).join(', ');
    // console.log("Other", otherElements)

    return `You can pay with ${otherElements} and ${lastElement}`;
}


describe("paymentOptions", () => {
  test("should return a string with payments options", () => {
    const input = {
      ideal: true,
      mastercard: true,
      paypal: true
    };
    const output = paymentOptions(input);
    expect(output).toBe("You can pay with ideal, mastercard and paypal");
  });

  test("BONUS: should ignore payment options which are not supported", () => {
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

// Link to: https://flexiple.com/javascript/loop-through-object-javascript/
