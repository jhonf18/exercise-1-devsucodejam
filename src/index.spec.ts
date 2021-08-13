import { sumOfTerms } from './index';

describe('test for first exercise', () => {
  test('exists', () => {
    expect(sumOfTerms).toBeDefined();
  });

  test('should be return -1 because a integer is negative', async () => {
    const result = sumOfTerms(-1, 10);
    expect(result).toBe(-1);
  });

  test('should be return -1 because a integer is 0', () => {
    const result = sumOfTerms(0, 2);
    expect(result).toBe(-1);
  });

  test('should be return -1 because a integer is more than of 255', () => {
    const result = sumOfTerms(10, 258);
    expect(result).toBe(-1);
  });

  test('should be return 15', () => {
    const result = sumOfTerms(1, 3);
    expect(result).toBe(15);
  });

  test('should be return 11', () => {
    const result = sumOfTerms(9, 8);
    expect(result).toBe(11);
  });

  test('should be return 4', () => {
    const result = sumOfTerms(2, 10);
    expect(result).toBe(4);
  });

  test('should be return 18', () => {
    const result = sumOfTerms(1, 9);
    expect(result).toBe(18);
  });

  test('should be return -2', () => {
    const result = sumOfTerms(8, 10);
    expect(result).toBe(-2);
  });
});
