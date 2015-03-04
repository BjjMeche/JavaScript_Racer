window.onload = function(){
  var view = new View()
  var game = new Model()
  var controller = new Controller(view, game)
  // controller.bindListeners()
}

function Controller(view, model){

}

Controller.prototype = {
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

}
