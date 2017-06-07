(function(exports){

  function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSaving = true;
    this.MAXIMUM_TEMP = 25;
    this.defaultTemperature = 20;
  }

  Thermostat.prototype.up = function() {
    if(this.powerSaving === true && this.temperature <= 24)
      this.temperature++;
    else if(this.powerSaving === false && this.temperature <= 31)
      this.temperature++;
    else
      return;
  };

  Thermostat.prototype.down = function() {
    if(this.temperature > this.MINIMUM_TEMP)
      this.temperature--;
    else
      return;
  };

  Thermostat.prototype.psmOff = function() {
    this.powerSaving = false;
  };

  Thermostat.prototype.resetTemperature = function() {
    this.temperature = this.defaultTemperature;
  };

  Thermostat.prototype.usage = function() {
    if(this.temperature < 25)
      return 'Medium usage';
  };

  exports.Thermostat = Thermostat;

})(this);
