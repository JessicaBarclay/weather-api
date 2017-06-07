describe('Thermostat', function(){
  
  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
    thermostat = new Thermostat();
  });

  afterEach(function(){
    fixture.cleanup();
  });

  it('has a default temperature on 20 degrees', function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it('can increase temperature by 1', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

  it('can decrease temperature by 1', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19);
  });

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i <= 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10);
  });

  it('has a maximum temperature of 25 degrees when power saving mode is on', function() {
    for (var i = 0; i <= 5; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(25);
  });

});
