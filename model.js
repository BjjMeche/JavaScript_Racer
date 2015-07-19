function Car(){
  this.driverName = "Human"
  this.driverControlKey = null
  this.track = null
}
Car.prototype = {
  assignDriver: function(){
    this.driverName = prompt("Assign Driver's Name")
  },
  assignControlKey: function(){
    var driverControlChar = prompt("Assign Driver's " + this.driverName + "'s Gas Pedal")
    this.driverControlKey = driverControlChar.charCodeAt()
  },
  moveForward: function(){
    this.track.carLocation += 1
  },
  engineListen: function(e, trackLocation){
    if(e.charCode == this.driverControlKey){
      this.moveForward()
    }
  },
}

function Track(){
  var defaultLength = 4
  this.carLocation = 0
  this.trackLength = defaultLength
  this.id = null
}
Track.prototype = {
  getCarPosition: function(){
    return this.carLocation
  },
  extendTrack: function(length){
    return this.trackLength += length
  },
}

function Game(CarFactory, TrackFactory){
  this.CarFactory = CarFactory
  this.TrackFactory = TrackFactory
  this.cars = []
}
Game.prototype={
  listen: function(e){
    for(var i = 0; i<this.cars.length; i++){
      this.cars[i].engineListen(e)
    }
  },
  restart: function(){
    location.reload()
  },
  checkWinner: function(player){
    for(var i=0; i<this.cars.length; i++){
      if(this.cars[i].track.carLocation == this.cars[i].track.trackLength){
        alert(this.cars[i].driverName+" is the winner!")
        this.restart()
      }
    }
  },
  addRacer: function(){
    this.cars.push(new this.CarFactory())
  },
  addTracks: function(){
    for(var i=0; i<this.cars.length; i++){
      this.cars[i].track = new this.TrackFactory()
      this.cars[i].track.id = i
    }
  },
  extendTracks: function(length){
    for(var i=0; i<this.cars.length; i++){
      this.cars[i].track.extendTrack(length);
    }
  },
}

