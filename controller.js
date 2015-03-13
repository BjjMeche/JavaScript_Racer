function Controller(view, game){
  this.view = view
  this.game = game
  this.playerCount = 0
  this.additionalTrackLength = 0
};

Controller.prototype = {
  listen: function(){
    window.addEventListener("keypress", this.game.listen.bind(this.game), false)
  },
  checkWinner: function(){
    window.addEventListener("keypress", this.game.checkWinner.bind(this.game), false)
  },
  setPlayers: function(){
    var playerCount =  parseInt(prompt("How many Racers are there?"))
    this.playerCount = playerCount
    this.view.setCarCount(playerCount)
  },
  setInitialView: function(){
    var additionalLength = parseInt(prompt("Add __(length)__ km to track"))
    this.additionalTrackLength += additionalLength
    this.view.renderInitial(additionalLength)
  },
  renderView: function(){
    window.addEventListener("keypress", this.view.renderCarMotion.bind(this.game), false)
  },
  restartGame: function(){
    this.game.restart()
  },
  addRacers: function(){
    for(var i=0; i<this.playerCount; i++){
      this.game.addRacer()
      this.game.cars[i].assignDriver()
      this.game.cars[i].assignControlKey()
    }
  },
  addTracks: function(){
    this.game.addTracks()
    this.game.extendTracks(this.additionalTrackLength)
  },
  setupGame: function(){
    this.setPlayers()
    this.setInitialView()
    this.addRacers()
    this.addTracks()
    this.listen()
    this.renderView()
    this.checkWinner()
  },
}

var CarFactory = Car
var TrackFactory = Track

var view = new View()
var game = new Game(CarFactory, TrackFactory)
var controller = new Controller(view, game)

