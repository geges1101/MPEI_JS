var standard = document.getElementById('standard');
var sortedLex = document.getElementById('sortedLex');
var reversed = document.getElementById('reversed');
var sortedLength = document.getElementById('sortedLength');

function showDefault(){
  var cars = ["BMW", "Porsche", "Toyota", "Mercedez", "Audi"];
  for(curr = 0; curr < cars.length; curr++){
    standard.innerHTML += cars[curr] + "<br />";
  };
}

function showSortedLex(){
  var cars = ["BMW", "Porsche", "Toyota", "Mercedez", "Audi"];
  cars.sort();
  for(curr = 0; curr < cars.length; curr++){
    sortedLex.innerHTML += cars[curr] + "<br />";
  };
}

function showReversed(){
  var cars = ["BMW", "Porsche", "Toyota", "Mercedez", "Audi"];
  cars.reverse();
  for(curr = 0; curr < cars.length; curr++){
    reversed.innerHTML += cars[curr] + "<br />";
  };
}

function compare(a, b){
  return b.length - a.length;
}

function showSortedLength(){
  var cars = ["BMW", "Porsche", "Toyota", "Mercedez", "Audi"];
  cars.sort(compare);
  for(curr = 0; curr < cars.length; curr++){
    sortedLength.innerHTML += cars[curr] + "<br />";
  };
}