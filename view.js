function View(){
  this.car = ".active" // kept as active for easier cross file comparison
  this.carCount = 0
  this.raceway = ".racer_table"
  this.racetrack = []
  this.player_strips = []
}

View.prototype = {
  getCars: function(){
    return $(this.car)
  },
  getCarsCount: function(){
    return $(this.car).length
  },
  getRaceway: function(){
    return $(this.raceway)
  },
  setCarCount: function(playerCount){
    this.carCount =  playerCount
  },
  addRacetracks: function(){
    for(var i=0; i<this.carCount; i++){
      this.player_strips.push("player_strip_"+(i+1))
      this.getRaceway().append('<tr id="player_strip_'+(i+1)+'"><td class="active">R</td><td>A</td><td>C</td><td>E</td></tr>')
    }
  },
  addTrackLength: function(additionalLength){
    $.each(this.player_strips, function(index, value){
      for(var i = 0 ; i< additionalLength; i++){
        $("#"+value).append("<td></td>")
      }
    })
  },
  renderInitial: function(additionalLength){
    this.addRacetracks()
    this.addTrackLength(additionalLength)
  },
  renderCarMotion: function(e){
    //"this" is set to controller.game
    for(var i=0; i<this.cars.length; i++){
      if(e.charCode == this.cars[i].driverControlKey){
        $("#player_strip_"+(this.cars[i].track.id+1)).find(".active").removeClass()
        $("#player_strip_"+(this.cars[i].track.id+1)).children().eq(this.cars[i].track.carLocation).addClass("active")
      }
    }
  },
}

