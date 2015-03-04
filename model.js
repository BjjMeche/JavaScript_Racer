function Model(){
  this.player1 = "Human 1"
  this.player2 = "Human 2"
  this.carLocatin = []
}

Model.prototype = {
  moveCar: function(racetrack, carLocation){
    racetrack.children()[carLocation].className=""
    racetrack.children()[carLocation+1].className="active"
  }
}