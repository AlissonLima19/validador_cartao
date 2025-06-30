function getCardBrand(cardNumber) {
  const cleaned = cardNumber.replace(/\D/g, ''); // Remove não-dígitos

  const patterns = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    elo: /^(((636368)|(438935)|(504175)|(451416)|(636297))\d{10})$/,
    hipercard: /^(606282\d{10}|\d{16})$/
  };

  for (const [brand, regex] of Object.entries(patterns)) {
    if (regex.test(cleaned)) {
      return brand.toUpperCase();
    }
  }

  return "Bandeira não identificada";
}

function checkCardBrand() {
  const number = document.getElementById("cardNumber").value;
  const result = getCardBrand(number);
  document.getElementById("result").innerText = `Bandeira: ${result}`;
}
