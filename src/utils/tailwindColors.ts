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

export const tailwindColorTones = [50, ...Array.from({ length: 9 }, (_, i) => 100 * (i + 1))];
console.log({ tailwindColorList, tailwindColorTones });
