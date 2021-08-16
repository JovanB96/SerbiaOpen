var datumH4 = document.getElementById('datum');
var vremeH4 = document.getElementById('vreme');
var tBody = document.getElementsByTagName('tbody')[0];
var playersBtn = document.getElementById('playersBtn');
var addPlayerBtn = document.getElementById('addPlayerBtn');
var mainRow = document.getElementById('mainRow');
var red_B_i = document.getElementById('id_i');
var playerForEdit;
var ime_i = document.getElementById('ime_i');
var tk_i = document.getElementById('tk_i');
var leg_i = document.getElementById('leg_i');
var sub_i = document.getElementById('sub_i');
var editBtn = document.getElementById('editBtn');
var edit_i = document.getElementById('edit_i');
edit_i.addEventListener('click',editDb);
editBtn.addEventListener('click',newTable);
playersBtn.addEventListener('click',displayPlayers);
addPlayerBtn.addEventListener('click',showForm);
sub_i.addEventListener('click',addToDb);
var text = "";

var db = [
  {
    red_B : 001,
    ime : "Petar Petrovic",
    tk : "TK AS",
    leg : 888
  },
  {
    red_B : 002,
    ime : "Milos Milic",
    tk : "TK Spin",
    leg : 123
  }
];
displayPlayers();
prikaziDatumiVreme();

function prikaziDatumiVreme() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  var date = now.toDateString();
  if (h < 10) {
    h = "0"+h;
  }
  if (m < 10) {
    m = "0"+m;
  }
  if (s < 10) {
    s = "0"+s;
  }

  var time = h+":"+m+":"+s;
  vremeH4.innerHTML = time;
  datumH4.innerHTML = date;
  setTimeout(prikaziDatumiVreme,1000);
}

function displayPlayers() {
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i = 0; i < db.length;i++){
    text += '<tr><td>'+db[i].red_B+'</td><td>'+db[i].ime+'</td><td>'+db[i].tk+'</td><td>'+db[i].leg+'</td></tr>'
  }
  tBody.innerHTML = text;
}
function showForm() {
  red_B_i.value = "";
  ime_i.value = "";
  tk_i.value = "";
  leg_i.value = "";
  sub_i.style.display ="block";
  edit_i.style.display = "none";
  mainRow.style.display = "none";
  formRow.style.display = "block";
}

function addToDb() {
  var obj = {
    red_B : red_B_i.value,
    ime : ime_i.value,
    tk : tk_i.value,
    leg : leg_i.value
  }
  db.push(obj);
  red_B_i.value = "";
  ime_i.value = "";
  tk_i.value= "";
  leg_i.value = "";
  displayPlayers();
}
function newTable() {
  mainRow.style.display = "block";
  formRow.style.display = "none";
  text = "";
  for(var i = 0; i < db.length;i++){
    text += '<tr><td>'+db[i].red_B+'</td><td>'+db[i].ime+'</td><td>'+db[i].tk+'</td><td>'+db[i].leg+'</td><td><input type="button" value="edit" class="'+i+' tableBtns btn btn-sm btn-warning" /></td><td><input type="button" value="delete" class="'+i+' tableBtns btn btn-sm btn-danger" /></td></tr>'
  }
  tBody.innerHTML = text;
  var allBtns = document.getElementsByClassName('tableBtns');
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].addEventListener('click',editPlayer);
  }
}
function editPlayer() {
  if (this.value === "delete") {
    var playerForDelete = this.className[0];
    db.splice(playerForDelete,1);
    displayPlayers();

  }else{
    showForm();
    sub_i.style.display ="none";
    edit_i.style.display = "block";
    playerForEdit = this.className[0];
    red_B_i.value = db[playerForEdit].red_B;
    ime_i.value = db[playerForEdit].ime;
    tk_i.value= db[playerForEdit].tk;
    leg_i.value = db[playerEdit].leg;
  }
}
function editDb() {
  var obj = {
    red_B : red_B_i.value,
    ime : ime_i.value,
    tk : tk_i.value,
    leg : leg_i.value
  }
  db[playerForEdit] = obj;
  displayPlayers();
}
