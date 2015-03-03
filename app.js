
var racetrackAdditionalLength =  null
var playerOneTrack = $("#player1_strip")
var playerTwoTrack = $("#player2_strip")
var player1="Human 1"
var player2="Human 2"
var racetrackLength = 4
var carLocation=[]
var resetGame =  function(){
  location.reload()
}
function additionalTrackLength(){
  stringLength = $("#racetrackAddLength")[0].value
  addLength = parseInt(stringLength)
  if (stringLength === ""){
    addLength = 0
  }
  racetrackLength += addLength
  extendTrak(addLength)
}

function extendTrak(additionalTrackLength){
  var addTrackLength = additionalTrackLength
  for(var i=0; i<addTrackLength; i++){
    playerOneTrack.append("<td></td>")
    playerTwoTrack.append("<td></td>")
  }
}

function assignPlayers(){
  player1 = prompt("Player 1 Name")
  player2 = prompt("Player 2 Name")
}

function jsRacerGame(e){
  if(e.charCode == 97){
    carLocation = carCurrentLocation(playerOneTrack)
    moveCar(playerOneTrack,carLocation)
    carLocation = carCurrentLocation(playerOneTrack)
    checkWinner(carLocation, racetrackLength, player1)
  }else if(e.charCode == 108){
    carLocation = carCurrentLocation(playerTwoTrack)
    moveCar(playerTwoTrack,carLocation)
    carLocation = carCurrentLocation(playerTwoTrack)
    checkWinner(carLocation, racetrackLength, player2)
  }
}

function carCurrentLocation(carTrack){
  for(var i=0; i<racetrackLength; i++){
    if(carTrack.children()[i].className === "active"){
      return i
    }
  }
}

function moveCar(carTrack, carLocation){
  carTrack.children()[carLocation].className=""
  carTrack.children()[carLocation+1].className="active"
}

function checkWinner(carLocation, racetrackLength, player){
  if(carLocation + 1 === racetrackLength){
    console.log(player + " is the winner")
    window.removeEventListener("keypress", jsRacerGame)
    resetGame()
  }
}

window.addEventListener("keypress", jsRacerGame)
