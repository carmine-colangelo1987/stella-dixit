/** @format */

export const tailwindColorList = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'light-blue',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'warm-gray',
  'true-gray',
  'gray',
  'cool-gray',
  'blue-gray',
];

export const tailwindColorTones = [50, ...Array.from({ length: 9 }, (_, i) => 100 * (i + 1))];
console.log({ tailwindColorList, tailwindColorTones });
