window.alert("JS scripts loading!");
console.log("JS console works!");
var cellIDList = ["cell1","cell2","cell3","cell4","cell5","cell6","cell7","cell8","cell9"]

// document.querySelectorAll('div.square')[0].innerText;
//above lets you get the content of the div. it's "" for an empty box
var turnNum = 0;
var turnValue="X";
var turnXO = function(turnNum) {

    if (turnNum%2 === 1) {
      turnValue='X';
      console.log("X");
    }
    else {
      turnValue='O';
      console.log("O");
    }
}
// var elm = document.getElementById("div1");
//
// if (elm.className === "fixed") {
//   // skip a particular class of element
//   goNextElement();
// } see if this can be used on a played element

//var cell1 = window.document.querySelectorAll('div.square')[0];

var cellsQueryAll = window.document.querySelectorAll('div.square');
// function getText(cellNumber) = window.document.querySelectorAll('div.square')[cellNumber].innerText;
//does the above even work?

for (var i=0; i<cellsQueryAll.length; i+=1) {
  cellsQueryAll[i].addEventListener('click', function() {
    this.innerText= turnValue;
    //why does turnXO(turnNum) not work above?
    this.className += " blue";
    //adding the class "blue" instead of changing the style like in the previous one.
    //this.style.background="blue";
    turnXO(turnNum);
    turnNum +=1;


    //you can't use cellsQueryAll[i] instead of 'this'
    //because the loop will keep on running and output the last value,
    // which is 9 here.
    //you also can't use a break here either.
  })
}
function winCondition() {
  //what parameters go here?
  if (turnNum==9) {
  if ((cell1===cell2===cell3)||
  (cell4===cell5===cell6) ||
  (cell7===cell8===cell9) ||
  (cell1===cell4===cell7) ||
  (cell2===cell5===cell8) ||
  (cell3===cell6===cell9) ||
  (cell1===cell5===cell9) ||
  (cell3===cell5===cell7)) {
    //you can't check for equality of 3 at a time, only 2 at a time
    // so check (a==b and b==c) or
    //        (d==e) and (d==f) or
    //
    console.log(cell1 +" won");
  }
  else {
    console.log("match ended in draw")
  }}
  else {
    //can you leave out the else part?
  }
}
