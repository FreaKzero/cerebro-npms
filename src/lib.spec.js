const {getColor, termFilter} = require('./lib');

describe('getColor', () => {
  it('should give back red', () => {
    const c = getColor(29);
    expect(c).toBe('#d41243');
  });

  it('should give back orange', () => {
    const c = getColor(59);
    expect(c).toBe('#FFA500');
  });

  it('should give back green', () => {
    const c = getColor(61);
    expect(c).toBe('#77ab59');
  });
});

describe('termFilter', () => {
  it('should parse correctly, when package is given', () => {
    const c = termFilter('npms wat')
    expect(c.term).toBe('wat');
    expect(c.hasTerm).toBe(true);
    expect(c.match.concat()).toEqual(["npms wat", "wat"]);
  });

  it('should parse correctly, when package is not given', () => {
    const c = termFilter('npms')
    expect(c.term).toBe('');
    expect(c.hasTerm).toBe(false);
    expect(c.match.concat()).toEqual(["npms", ""]);
  });

});
