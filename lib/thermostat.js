(function(exports){

  function Thermostat() {
    this.temperature = 20;
    this.MINIMUM_TEMP = 10;
    this.powerSaving = true;
    this.MAXIMUM_TEMP = 25;
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

  Thermostat.prototype.psmOff = function(){
    this.powerSaving = false;
  };

  exports.Thermostat = Thermostat;

})(this);
