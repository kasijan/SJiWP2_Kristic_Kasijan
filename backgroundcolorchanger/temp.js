function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFerenheit").innerHTML = (valNum*1.8) +32;
}