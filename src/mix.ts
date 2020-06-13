const numberToHexString = (amount: number) => {
  const str = amount.toString(16);
  return str.length === 2 ? str : `0${str}`;
};

const fromHex = (hexColour: string): number[] =>
  [
    hexColour.slice(1, 3),
    hexColour.slice(3, 5),
    hexColour.slice(5, 7),
  ].map((c) => parseInt(c, 16));

const toHex = (colour: number[]): string =>
  colour.reduce((res, c) => res + numberToHexString(c), '#');

/**
 * Mixes 2 colours according to the provided ratio.
 *
 * @param colourA - The first colour to mix, in rgb format (e.g. `'#000000'`).
 * @param colourB - The second colour to mix, in rgb format (e.g. `'#000000'`).
 * @param ratio The ratio of colourB in the resulting mix. Should be between `0` and `1`, inclusive. Default value is `0.5`.
 * @returns The colour resulting from mixing colourA and colourB, in rgb format (e.g. `'#000000'`).
 */
export const mix = (colourA: string, colourB: string, ratio = 0.5): string => {
  const hexRegex = /^#(\d|[a-f]|[A-F]){6}$/;
  if (!hexRegex.test(colourA)) {
    throw new Error(
      `First argument of "mix" is invalid. Expected hex colour string (e.g. #123456), but received ${colourA}`,
    );
  }
  if (!hexRegex.test(colourB)) {
    throw new Error(
      `Second argument of "mix" is invalid. Expected hex colour string (e.g. #123456), but received ${colourA}`,
    );
  }
  if (ratio < 0 || ratio > 1) {
    throw new Error(
      `Third argument of "mix" is invalid. Expected number between 0 and 1 (inclusive), but received ${ratio}`,
    );
  }

  const first = fromHex(colourA);
  const second = fromHex(colourB);

  const mixed = [0, 1, 2].map((i) =>
    Math.round(first[i] * (1 - ratio) + second[i] * ratio),
  );

  return toHex(mixed);
};
