/** @format */

const rows = 3;
const columns = 5;
export const plancia = Array.from({ length: rows }, (_, rowId) => {
  return Array.from({ length: columns }, (_, columnId) => `${rowId}-${columnId}`);
}).flat();
