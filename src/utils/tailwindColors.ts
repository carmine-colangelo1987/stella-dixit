/** @format */

export const tailwindColorList = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

export const shadesOfGray = ['slate', 'zinc', 'neutral', 'stone'];

export const stellaCoinsColors = ['gray', 'red', 'amber', 'green', 'cyan', 'pink'];

export const coinColorsList = [
  ...stellaCoinsColors,
  ...tailwindColorList.filter(c => !shadesOfGray.includes(c) && !stellaCoinsColors.includes(c)),
];

export const tailwindColorTones = [50, ...Array.from({ length: 9 }, (_, i) => 100 * (i + 1))];
console.log({ tailwindColorList, tailwindColorTones });
