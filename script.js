function ncdf(x, mean, std) {
  var x = (x - mean) / std;
  var t = 1 / (1 + .2315419 * Math.abs(x));
  var d =.3989423 * Math.exp( -x * x / 2);
  var prob = d * t * (.3193815 + t * ( -.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  if( x > 0 ) prob = 1 - prob;
  return 1 - prob
}
function calc(){
  var org = document.getElementById("o").valueAsNumber;
  var mean = document.getElementById("m").valueAsNumber;
  var std = document.getElementById("s").valueAsNumber;
  var people = document.getElementById("p").valueAsNumber;
  document.getElementById("percentage").innerText = `${ncdf(org,mean,std)*100}%`;
  document.getElementById("rank").innerText = `${Math.round(ncdf(org,mean,std)* people)}등`;
}
