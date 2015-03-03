players={
  player1:"Human 1",
  player2:"Human 2",

  assignPlayers: function(){
    players.player1 = prompt("Player 1 Name")
    players.player2 = prompt("Player 2 Name")
  },
},

racetrack={
  racetrackLength : 4,
  carLocation:[],
  playerOneTrack: $("#player1_strip"),
  playerTwoTrack: $("#player2_strip"),

  additionalTrackLength: function(){
    stringLength = $("#racetrackAddLength")[0].value
    addLength = parseInt(stringLength)
    if (stringLength === ""){
      addLength = 0
    }
    racetrack.racetrackLength += addLength
    racetrack.extendTrak(addLength)
  },

  extendTrak: function(additionalTrackLength){
    var addTrackLength = additionalTrackLength
    for(var i=0; i<addTrackLength; i++){
      racetrack.playerOneTrack.append("<td></td>")
      racetrack.playerTwoTrack.append("<td></td>")
    }
  },

  carCurrentLocation: function(carTrack){
    for(var i=0; i<racetrack.racetrackLength; i++){
      if(carTrack.children()[i].className === "active"){
        return i
      }
    }
  },
},

engine={
  moveCar: function(carTrack, carLocation){
    carTrack.children()[carLocation].className=""
    carTrack.children()[carLocation+1].className="active"
  },
  listen: function(e){
    if(e.charCode == 97){
      racetrack.carLocation = racetrack.carCurrentLocation(racetrack.playerOneTrack)
      engine.moveCar(racetrack.playerOneTrack,racetrack.carLocation)
      racetrack.carLocation = racetrack.carCurrentLocation(racetrack.playerOneTrack)
      game.checkWinner(players.player1)
    }else if(e.charCode == 108){
      racetrack.carLocation = racetrack.carCurrentLocation(racetrack.playerTwoTrack)
      engine.moveCar(racetrack.playerTwoTrack,racetrack.carLocation)
      racetrack.carLocation = racetrack.carCurrentLocation(racetrack.playerTwoTrack)
      game.checkWinner(players.player2)
    }
  },
},

game = {
  resetGame: function(){
    location.reload()
  },

  checkWinner: function(player){
    if(racetrack.carLocation + 1 === racetrack.racetrackLength){
      alert(player + " is the winner")
      window.removeEventListener("keypress", engine.listen)
      game.resetGame()
    }
  },
},

window.addEventListener("keypress", engine.listen)







