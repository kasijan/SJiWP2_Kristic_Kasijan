function currencyConverter(valNum) {
  valNum = parseFloat(valNum);

  if (isNaN(valNum)) {
    document.getElementById("outputBitcoin").innerHTML = "0.00";
    document.getElementById("outputBitcoin1").innerHTML = "0.00";
    return;
  }

  document.getElementById("outputBitcoin").innerHTML = (valNum * 76685.2).toFixed(2);
  document.getElementById("outputBitcoin1").innerHTML = (valNum * 64648.9).toFixed(2);
}
