var elementVal = document.getElementById("element");
function abc() {
  var br = "";
  for (var i = 5; i > 0 ; i--) {
    for (var j = 0; j < i ;j++) {
      br += "*";
    }
    br += "<br/>";
  }
  elementVal.innerHTML = br;
}
