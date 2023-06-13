
function multiplyByTwo() {
  var input = document.getElementById('note1').value;
  var result = input * 2;
  document.getElementById("result").innerHTML = result;
}

function calculate(){
  var attended = document.getElementById('attended').value;
  var conducted = document.getElementById('conducted').value;

  var x = Math.floor((4 * attended - 3 * conducted) / 3);
  if (attended>conducted){
    document.getElementById("result").innerHTML = "Enter correct data";
  }
  else if (x < 0) {
    var c = 3 * conducted - 4 * attended;
    document.getElementById("result").innerHTML = c+" more classes to reach 75%";
  }
  else {
    document.getElementById("result").innerHTML =  (x+" classes can be skipped");
  }


}


function clearTextboxes() {
  var textboxes = document.getElementsByTagName('input');
  for (var i = 0; i < textboxes.length; i++) {
    if (textboxes[i].type === 'text') {
      textboxes[i].value = '';
    }
  }
}
