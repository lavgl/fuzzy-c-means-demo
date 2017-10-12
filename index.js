const random = require('lodash/random');
const range = require('lodash/range');
const constant = require('lodash/constant');

const {
  sqrt,
  pow
} = Math;

const M = 3;
const m = 2;
const e = 0.01;

const Point = (x, y) => ({ x, y });
const d = (c, x) => sqrt(pow(x.x - c.x, 2), pow(x.y - c.y, 2));

const points = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 1, y: 3 },
  { x: 1, y: -2 },
  { x: 1, y: -3 },
  { x: 2, y: -3 },
  { x: -3, y: -2 },
  { x: -3, y: -3 },
  { x: -4, y: -3 },
  { x: -4, y: -2 },
  { x: -4, y: -3 },
  { x: -2, y: -3 }
];

const generatePlainU0 = (rows, columns) => {
  let matrix = [];

  range(rows).forEach(() => {
    const u = 1 / columns;
    const row = range(columns).map(constant(u));
    matrix.push(row);
  });

  return matrix;
}

const mmap = (matrix, cb) => {
  let newMatrix = [];

  matrix.forEach((row, i) => {
    const newRow = row.map((elem, j) => cb(elem, i, j, matrix));
    
    newMatrix.push(newRow);
  });

  return newMatrix;
}

const m1 = generatePlainU0(3, 3);
const m2 = mmap(m1, x => x * 2);

console.log(m1);
console.log(m2);

