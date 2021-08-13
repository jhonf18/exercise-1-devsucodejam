const valueOfSequence = (value: number): number => {
  if (value % 2 === 0) return 8 - value;
  else return 6 + (value + 1) / 2;
};

export const sumOfTerms = (x: number, y: number): number => {
  if (x <= 0 || y <= 0 || x > 255 || y > 255) return -1;
  const valueSequenceX = valueOfSequence(x);
  const valueSequenceY = valueOfSequence(y);

  return valueSequenceX + valueSequenceY;
};
