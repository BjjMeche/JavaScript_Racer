game = {
  racetrackAdditionalLength :  null,
  playerOneTrack : $("#player1_strip"),
  playerTwoTrack : $("#player2_strip"),
  player1:"Human 1",
  player2:"Human 2",
  racetrackLength : 4,
  carLocation:[],
  resetGame: function(){
    location.reload()
  },
  additionalTrackLength: function(){
    stringLength = $("#racetrackAddLength")[0].value
    addLength = parseInt(stringLength)
    if (stringLength === ""){
      addLength = 0
    }
    game.racetrackLength += addLength
    game.extendTrak(addLength)
  },

  extendTrak: function(additionalTrackLength){
    var addTrackLength = additionalTrackLength
    for(var i=0; i<addTrackLength; i++){
      game.playerOneTrack.append("<td></td>")
      game.playerTwoTrack.append("<td></td>")
    }
  },

  assignPlayers: function(){
    player1 = prompt("Player 1 Name")
    player2 = prompt("Player 2 Name")
  },

  jsRacerGame: function(e){
    if(e.charCode == 97){
      carLocation = game.carCurrentLocation(game.playerOneTrack)
      game.moveCar(game.playerOneTrack,carLocation)
      carLocation = game.carCurrentLocation(game.playerOneTrack)
      game.checkWinner(carLocation, game.racetrackLength, game.player1)
    }else if(e.charCode == 108){
      carLocation = game.carCurrentLocation(game.playerTwoTrack)
      game.moveCar(game.playerTwoTrack,carLocation)
      carLocation = game.carCurrentLocation(game.playerTwoTrack)
      game.checkWinner(carLocation, game.racetrackLength, game.player2)
    }
  },

  carCurrentLocation: function(carTrack){
    for(var i=0; i<game.racetrackLength; i++){
      if(carTrack.children()[i].className === "active"){
        return i
      }
    }
  },

  moveCar: function(carTrack, carLocation){
    carTrack.children()[carLocation].className=""
    carTrack.children()[carLocation+1].className="active"
  },

  checkWinner: function(carLocation, racetrackLength, player){
    if(carLocation + 1 === racetrackLength){
      console.log(player + " is the winner")
      window.removeEventListener("keypress", game.jsRacerGame)
      game.resetGame()
    }
  },


}

window.addEventListener("keypress", game.jsRacerGame)







