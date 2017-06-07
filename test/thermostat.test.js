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

  it('can increase temperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

});
