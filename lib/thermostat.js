(function(exports){

  function Thermostat() {
    this.temperature = 20;
  };

  Thermostat.prototype.up = function(){
    this.temperature++;
  };

  exports.Thermostat = Thermostat;

})(this);	
