const random = require('lodash/random');
const range = require('lodash/range');
const constant = require('lodash/constant');
const property = require('lodash/property');
const sum = require('lodash/sum');

const {
  sqrt,
  pow
} = Math;

const CLUSTERS_NUMBER = 3;
const FUZZINESS_COEFFICIENT = 2;
const e = 0.01;

const Point = (x, y) => ({ x, y });
const d = (c, x) => {
  // console.log('c', c);
  // console.log('x', x);
  return sqrt(pow(x.x - c.x, 2), pow(x.y - c.y, 2));
};

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

const emptyMatrix = (m, n) => {
  let matrix = [];

  range(m).forEach(() => {
    const row = range(n).map(constant(0));
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

const mmax = (matrix) => {
  const maxsWithinRows = matrix.map(row => Math.max.apply(null, row));
  return Math.max.apply(null, maxsWithinRows);
};

const divide = divisor => divident => divident / divisor;

const normalizeArrayBySum = array => {
  const _sum = sum(array);
  return array.map(divide(_sum));
}

const generatePlainU0 = (pointsNumber, clustersNumber) => {
  let matrix = [];

  range(pointsNumber).forEach(() => {
    const row = range(clustersNumber).map(() => random(0, 10));
    const normalizedRow = normalizeArrayBySum(row);
    matrix.push(normalizedRow);
  });

  return matrix;
}

const calculateCenterDimension = (matrixU, m, clusterIndex, dimensionValues) => {
  const numerator = dimensionValues.reduce((sum, value, i) => {
    return sum + value * pow(matrixU[i][clusterIndex], m);
  }, 0);

  const denumerator = dimensionValues.reduce((sum, value, i) => {
    return sum + pow(matrixU[i][clusterIndex], m);
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

const calculateUDatum = (centers, point, i) => {
  // console.log('calculateUDatum', centers, point, i);
  const denumerator = centers.reduce((_sum, center, k) => {
    return _sum + pow( 
      d(centers[i], point) / d(center, point), 
      2 / (FUZZINESS_COEFFICIENT - 1))
  }, 0);

  return 1 / denumerator;
}

const calculateUMatrix = (centers, points) => {
  let matrix = [];

  points.forEach((point) => {
    const newURow = range(centers.length).map((i) => calculateUDatum(centers, point, i));
    // console.log('new row', newURow);
    matrix.push(newURow);
  });

  return matrix;
}

// const calculate = (points) => {
//   const U0 = generatePlainU0(points.length, CLUSTERS_NUMBER);
// }

const matr = [[1, 2, 3],
              [4, 5, 2],
              [-1, -10, 2]];

console.log('matrix', matr);
console.log('max', mmax(matr));

// const m1 = generatePlainU0(points.length, CLUSTERS_NUMBER);
// console.log('m1', m1);

// const c1 = calculateCenters(m1, FUZZINESS_COEFFICIENT, points);
// console.log('c1', c1);

// const m2 = calculateUMatrix(c1, points);
// console.log('m2', m2);

// const c2 = calculateCenters(m2, FUZZINESS_COEFFICIENT, points);
// console.log('c2', c2);


