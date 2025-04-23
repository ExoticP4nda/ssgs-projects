const math = require('../math');

// Test corretto
test('2 + 2 dovrebbe essere 4', () => {
    const result = math.addizione(2, 2);
    expect(result).toBe(4);
});

// Test sbagliato (fallirà)
test.skip('3 + 5 dovrebbe essere 7 (test sbagliato)', () => {
    const result = math.addizione(3, 5);
    expect(result).toBe(7);
});