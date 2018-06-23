
presskey = document.getElementById('lastname');
presskey.addEventListener('keypress',keypress);

function keypress(){
  var nom = document.getElementById('lastname').value;
  alert(nom);
}
