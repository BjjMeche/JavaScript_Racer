function View(){
  this.car = ".active" // probably want to rename class to car
  this.racetrack1 = "#player1_strip"
  this.racetrack2 = "#player2_strip"
}

View.prototype = {
  getCars: function(){
    return $(this.car)
  },
  track1: function(){
    return $(this.racetrack1)
  },
  track2: function(){
    return $(this.racetrack2)
  },


}