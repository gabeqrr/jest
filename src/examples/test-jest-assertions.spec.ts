describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    // number.toString

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);
    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);
    expect(number).toHaveProperty('toString');
  });
});

describe('Primitive values', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Gabe', age: 17 };
    const anotherPerson = { ...person };

    // toBe -> fail
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 17);
    expect(person.name).toBe('Gabe');
  });
});
