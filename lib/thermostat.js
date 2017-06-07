(function(exports){

  function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
  }

  Thermostat.prototype.up = function() {
    this.temperature++;
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > this.MINIMUM_TEMP) {
      this.temperature--;
    } else {
      return;
    }
  };

  exports.Thermostat = Thermostat;

})(this);
