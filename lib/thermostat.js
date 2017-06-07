(function(exports){

  function Thermostat() {
    this.temperature = 20;
  };

  Thermostat.prototype.up = function() {
    this.temperature++;
  };

  Thermostat.prototype.down = function() {
    this.temperature--;
  };

  exports.Thermostat = Thermostat;

})(this);	
