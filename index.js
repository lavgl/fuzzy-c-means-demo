const random = require('lodash/random');
const range = require('lodash/range');
const constant = require('lodash/constant');
const property = require('lodash/property');

const {
  sqrt,
  pow
} = Math;

const CLUSTERS_NUMBER = 3;
const FUZZINESS_COEFFICIENT = 2;
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

const generatePlainU0 = (pointsNumber, clustersNumber) => {
  let matrix = [];
  const u = 1 / clustersNumber;

  range(pointsNumber).forEach(() => {
    const row = range(clustersNumber).map(constant(u));
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

const calculateCenterDimension = (matrixU, m, clusterIndex, dimensionValues) => {
  const numerator = dimensionValues.reduce((sum, value, i) => {
    return sum + value * pow(matrixU[clusterIndex][i], m);
  }, 0);

  const denumerator = dimensionValues.reduce((sum, value, i) => {
    return sum + pow(matrixU[clusterIndex][i], m);
  }, 0);

  return numerator / denumerator;
}

const calculateCenters = (matrixU, m, points) => {
  return range(CLUSTERS_NUMBER).map(i => {
    const [ x, y ] = ['x', 'y'].map(dimension => 
      calculateCenterDimension(matrixU, m, i, points.map(property(dimension)))
    );
    
    return { x, y };
  });
};

const m1 = generatePlainU0(CLUSTERS_NUMBER, points.length);
const centers = calculateCenters(m1, FUZZINESS_COEFFICIENT, points);

console.log(m1);
console.log(centers)

