import { clamp } from '../internal';

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
// limitations under the License.


function multiply(a: number[][], b: number[][]): number[][] {
  let result = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        result[i][j] += b[i][k] * a[k][j];
      }
    }
  }
  return result;
}

function is2D(m: number[][]): boolean {
  return (
    m[0][2] === 0 &&
    m[0][3] === 0 &&
    m[1][2] === 0 &&
    m[1][3] === 0 &&
    m[2][0] === 0 &&
    m[2][1] === 0 &&
    m[2][2] === 1 &&
    m[2][3] === 0 &&
    m[3][2] === 0 &&
    m[3][3] === 1);
}

export function composeMatrix(translate: number[], scale: number[], skew: number[], quat: number[], perspective: number[]) {
  let matrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

  for (let i = 0; i < 4; i++) {
    matrix[i][3] = perspective[i];
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[3][i] += translate[j] * matrix[j][i];
    }
  }

  let x = quat[0], y = quat[1], z = quat[2], w = quat[3];

  let rotMatrix = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];

  rotMatrix[0][0] = 1 - 2 * (y * y + z * z);
  rotMatrix[0][1] = 2 * (x * y - z * w);
  rotMatrix[0][2] = 2 * (x * z + y * w);
  rotMatrix[1][0] = 2 * (x * y + z * w);
  rotMatrix[1][1] = 1 - 2 * (x * x + z * z);
  rotMatrix[1][2] = 2 * (y * z - x * w);
  rotMatrix[2][0] = 2 * (x * z - y * w);
  rotMatrix[2][1] = 2 * (y * z + x * w);
  rotMatrix[2][2] = 1 - 2 * (x * x + y * y);

  matrix = multiply(matrix, rotMatrix);

  let temp = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]];
  if (skew[2]) {
    temp[2][1] = skew[2];
    matrix = multiply(matrix, temp);
  }

  if (skew[1]) {
    temp[2][1] = 0;
    temp[2][0] = skew[0];
    matrix = multiply(matrix, temp);
  }

  if (skew[0]) {
    temp[2][0] = 0;
    temp[1][0] = skew[0];
    matrix = multiply(matrix, temp);
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      matrix[i][j] *= scale[i];
    }
  }

  if (is2D(matrix)) {
    return [matrix[0][0], matrix[0][1], matrix[1][0], matrix[1][1], matrix[3][0], matrix[3][1]];
  }
  return matrix[0].concat(matrix[1], matrix[2], matrix[3]);
}

function quat(fromQ: number[], toQ: number[], f: number): number[] {
  let product = dot(fromQ, toQ);
  product = clamp(product, -1.0, 1.0);

  let quat = [];
  if (product === 1.0) {
    quat = fromQ;
  } else {
    let theta = Math.acos(product);
    let w = Math.sin(f * theta) * 1 / Math.sqrt(1 - product * product);

    for (let i = 0; i < 4; i++) {
      quat.push(fromQ[i] * (Math.cos(f * theta) - product * w) +
        toQ[i] * w);
    }
  }
  return quat;
}

function determinant(m: number[][]): number {
  return m[0][0] * m[1][1] * m[2][2] +
    m[1][0] * m[2][1] * m[0][2] +
    m[2][0] * m[0][1] * m[1][2] -
    m[0][2] * m[1][1] * m[2][0] -
    m[1][2] * m[2][1] * m[0][0] -
    m[2][2] * m[0][1] * m[1][0];
}

function inverse(m: number[][]): number[][] {
  let iDet = 1 / determinant(m);
  let a = m[0][0], b = m[0][1], c = m[0][2];
  let d = m[1][0], e = m[1][1], f = m[1][2];
  let g = m[2][0], h = m[2][1], k = m[2][2];
  let inv = [
    [(e * k - f * h) * iDet, (c * h - b * k) * iDet,
    (b * f - c * e) * iDet, 0],
    [(f * g - d * k) * iDet, (a * k - c * g) * iDet,
    (c * d - a * f) * iDet, 0],
    [(d * h - e * g) * iDet, (g * b - a * h) * iDet,
    (a * e - b * d) * iDet, 0]
  ];
  let lastRow = [];
  for (let i = 0; i < 3; i++) {
    let val = 0;
    for (let j = 0; j < 3; j++) {
      val += m[3][j] * inv[j][i];
    }
    lastRow.push(val);
  }
  lastRow.push(1);
  inv.push(lastRow);
  return inv;
}

function transposeMatrix4(m: number[][]): number[][] {
  return [[m[0][0], m[1][0], m[2][0], m[3][0]],
  [m[0][1], m[1][1], m[2][1], m[3][1]],
  [m[0][2], m[1][2], m[2][2], m[3][2]],
  [m[0][3], m[1][3], m[2][3], m[3][3]]];
}

function multVecMatrix(v: number[], m: number[][]): number[] {
  let result = [];
  for (let i = 0; i < 4; i++) {
    let val = 0;
    for (let j = 0; j < 4; j++) {
      val += v[j] * m[j][i];
    }
    result.push(val);
  }
  return result;
}

function normalize(v: number[]): number[] {
  let len = length(v);
  return [v[0] / len, v[1] / len, v[2] / len];
}

function length(v: number[]): number {
  return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function combine(v1: number[], v2: number[], v1s: number, v2s: number): number[] {
  return [
    v1s * v1[0] + v2s * v2[0],
    v1s * v1[1] + v2s * v2[1],
    v1s * v1[2] + v2s * v2[2]
  ];
}

function cross(v1: number[], v2: number[]): number[] {
  return [
    v1[1] * v2[2] - v1[2] * v2[1],
    v1[2] * v2[0] - v1[0] * v2[2],
    v1[0] * v2[1] - v1[1] * v2[0]
  ];
}

function decomposeMatrix(matrix: number[]): number[][] {
  let m3d = [
    matrix.slice(0, 4),
    matrix.slice(4, 8),
    matrix.slice(8, 12),
    matrix.slice(12, 16)
  ];

  // skip normalization step as m3d[3][3] should always be 1
  // if (m3d[3][3] !== 1) {
  //   return undefined;
  // }

  let perspectiveMatrix = [];
  for (let i = 0; i < 4; i++) {
    perspectiveMatrix.push(m3d[i].slice());
  }

  for (let i = 0; i < 3; i++) {
    perspectiveMatrix[i][3] = 0;
  }

  // if (determinant(perspectiveMatrix) === 0) {
  //   return undefined;
  // }

  let rhs = [];

  let perspective;
  if (m3d[0][3] || m3d[1][3] || m3d[2][3]) {
    rhs.push(m3d[0][3]);
    rhs.push(m3d[1][3]);
    rhs.push(m3d[2][3]);
    rhs.push(m3d[3][3]);

    let inversePerspectiveMatrix = inverse(perspectiveMatrix);
    let transposedInversePerspectiveMatrix =
      transposeMatrix4(inversePerspectiveMatrix);
    perspective = multVecMatrix(rhs, transposedInversePerspectiveMatrix);
  } else {
    perspective = [0, 0, 0, 1];
  }

  let translate = m3d[3].slice(0, 3);

  let row = [];
  row.push(m3d[0].slice(0, 3));
  let scale = [];
  scale.push(length(row[0]));
  row[0] = normalize(row[0]);

  let skew = [];
  row.push(m3d[1].slice(0, 3));
  skew.push(dot(row[0], row[1]));
  row[1] = combine(row[1], row[0], 1.0, -skew[0]);

  scale.push(length(row[1]));
  row[1] = normalize(row[1]);
  skew[0] /= scale[1];

  row.push(m3d[2].slice(0, 3));
  skew.push(dot(row[0], row[2]));
  row[2] = combine(row[2], row[0], 1.0, -skew[1]);
  skew.push(dot(row[1], row[2]));
  row[2] = combine(row[2], row[1], 1.0, -skew[2]);

  scale.push(length(row[2]));
  row[2] = normalize(row[2]);
  skew[1] /= scale[2];
  skew[2] /= scale[2];

  let pdum3 = cross(row[1], row[2]);
  if (dot(row[0], pdum3) < 0) {
    for (let i = 0; i < 3; i++) {
      scale[i] *= -1;
      row[i][0] *= -1;
      row[i][1] *= -1;
      row[i][2] *= -1;
    }
  }

  let t = row[0][0] + row[1][1] + row[2][2] + 1;
  let s;
  let quaternion;

  if (t > 1e-4) {
    s = 0.5 / Math.sqrt(t);
    quaternion = [
      (row[2][1] - row[1][2]) * s,
      (row[0][2] - row[2][0]) * s,
      (row[1][0] - row[0][1]) * s,
      0.25 / s
    ];
  } else if (row[0][0] > row[1][1] && row[0][0] > row[2][2]) {
    s = Math.sqrt(1 + row[0][0] - row[1][1] - row[2][2]) * 2.0;
    quaternion = [
      0.25 * s,
      (row[0][1] + row[1][0]) / s,
      (row[0][2] + row[2][0]) / s,
      (row[2][1] - row[1][2]) / s
    ];
  } else if (row[1][1] > row[2][2]) {
    s = Math.sqrt(1.0 + row[1][1] - row[0][0] - row[2][2]) * 2.0;
    quaternion = [
      (row[0][1] + row[1][0]) / s,
      0.25 * s,
      (row[1][2] + row[2][1]) / s,
      (row[0][2] - row[2][0]) / s
    ];
  } else {
    s = Math.sqrt(1.0 + row[2][2] - row[0][0] - row[1][1]) * 2.0;
    quaternion = [
      (row[0][2] + row[2][0]) / s,
      (row[1][2] + row[2][1]) / s,
      0.25 * s,
      (row[1][0] - row[0][1]) / s
    ];
  }

  return [translate, scale, skew, quaternion, perspective];
}

function dot(v1: number[], v2: number[]): number {
  let result = 0;
  for (let i = 0; i < v1.length; i++) {
    result += v1[i] * v2[i];
  }
  return result;
}

function multiplyMatrices(a: number[], b: number[]): number[] {
  return [
    a[0] * b[0] + a[4] * b[1] + a[8] * b[2] + a[12] * b[3],
    a[1] * b[0] + a[5] * b[1] + a[9] * b[2] + a[13] * b[3],
    a[2] * b[0] + a[6] * b[1] + a[10] * b[2] + a[14] * b[3],
    a[3] * b[0] + a[7] * b[1] + a[11] * b[2] + a[15] * b[3],

    a[0] * b[4] + a[4] * b[5] + a[8] * b[6] + a[12] * b[7],
    a[1] * b[4] + a[5] * b[5] + a[9] * b[6] + a[13] * b[7],
    a[2] * b[4] + a[6] * b[5] + a[10] * b[6] + a[14] * b[7],
    a[3] * b[4] + a[7] * b[5] + a[11] * b[6] + a[15] * b[7],

    a[0] * b[8] + a[4] * b[9] + a[8] * b[10] + a[12] * b[11],
    a[1] * b[8] + a[5] * b[9] + a[9] * b[10] + a[13] * b[11],
    a[2] * b[8] + a[6] * b[9] + a[10] * b[10] + a[14] * b[11],
    a[3] * b[8] + a[7] * b[9] + a[11] * b[10] + a[15] * b[11],

    a[0] * b[12] + a[4] * b[13] + a[8] * b[14] + a[12] * b[15],
    a[1] * b[12] + a[5] * b[13] + a[9] * b[14] + a[13] * b[15],
    a[2] * b[12] + a[6] * b[13] + a[10] * b[14] + a[14] * b[15],
    a[3] * b[12] + a[7] * b[13] + a[11] * b[14] + a[15] * b[15]
  ];
}

function toRadians(arg) {
  let rads = arg.rad || 0;
  let degs = arg.deg || 0;
  let grads = arg.grad || 0;
  let turns = arg.turn || 0;
  let angle = (degs / 360 + grads / 400 + turns) * (2 * Math.PI) + rads;
  return angle;
}

const transformRotate = (item: TransformValue) => {
  const angle = toRadians(item.d[0]);
  return [Math.cos(angle), Math.sin(angle), 0, 0,
  -Math.sin(angle), Math.cos(angle), 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1];
};

const transformConverters = {
  rotatex(item: TransformValue) {
    const angle = toRadians(item.d[0]);
    return [1, 0, 0, 0,
      0, Math.cos(angle), Math.sin(angle), 0,
      0, -Math.sin(angle), Math.cos(angle), 0,
      0, 0, 0, 1];
  },
  rotatey(item: TransformValue) {
    const angle = toRadians(item.d[0]);
    return [Math.cos(angle), 0, -Math.sin(angle), 0,
      0, 1, 0, 0,
    Math.sin(angle), 0, Math.cos(angle), 0,
      0, 0, 0, 1];
  },
  rotate: transformRotate,
  rotatez: transformRotate,
  rotate3d(item: TransformValue) {
    let x = item.d[0] as number;
    let y = item.d[1] as number;
    let z = item.d[2] as number;
    const angle = toRadians(item.d[3]);

    let sqrLength = x * x + y * y + z * z;
    if (sqrLength === 0) {
      x = 1;
      y = 0;
      z = 0;
    } else if (sqrLength !== 1) {
      let length = Math.sqrt(sqrLength);
      x /= length;
      y /= length;
      z /= length;
    }

    let s = Math.sin(angle / 2);
    let sc = s * Math.cos(angle / 2);
    let sq = s * s;
    return [
      1 - 2 * (y * y + z * z) * sq,
      2 * (x * y * sq + z * sc),
      2 * (x * z * sq - y * sc),
      0,

      2 * (x * y * sq - z * sc),
      1 - 2 * (x * x + z * z) * sq,
      2 * (y * z * sq + x * sc),
      0,

      2 * (x * z * sq + y * sc),
      2 * (y * z * sq - x * sc),
      1 - 2 * (x * x + y * y) * sq,
      0,

      0, 0, 0, 1
    ];
  },
  scale(item: TransformValue) {
    return [item.d[0], 0, 0, 0,
      0, item.d[1], 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  scalex(item: TransformValue) {
    return [item.d[0], 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  scaley(item: TransformValue) {
    return [1, 0, 0, 0,
      0, item.d[0], 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  scalez(item: TransformValue) {
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, item.d[0], 0,
      0, 0, 0, 1];
  },
  scale3d(item: TransformValue) {
    return [item.d[0], 0, 0, 0,
      0, item.d[1], 0, 0,
      0, 0, item.d[2], 0,
      0, 0, 0, 1];
  },
  skew(item: TransformValue) {
    let xAngle = toRadians(item.d[0]);
    let yAngle = toRadians(item.d[1]);
    return [1, Math.tan(yAngle), 0, 0,
      Math.tan(xAngle), 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  skewx(item: TransformValue) {
    const angle = toRadians(item.d[0]);
    return [1, 0, 0, 0,
      Math.tan(angle), 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  skewy(item: TransformValue) {
    const angle = toRadians(item.d[0]);
    return [1, Math.tan(angle), 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  },
  translate(item: TransformValue) {
    let x = (item.d[0] as { px?: number; }).px || 0;
    let y = (item.d[1] as { px?: number; }).px || 0;
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, 0, 1];
  },
  translatex(item: TransformValue) {
    let x = (item.d[0] as { px?: number; }).px || 0;
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, 0, 0, 1];
  },
  translatey(item: TransformValue) {
    let y = (item.d[0] as { px?: number; }).px || 0;
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, y, 0, 1];
  },
  translatez(item: TransformValue) {
    let z = (item.d[0] as { px?: number; }).px || 0;
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, z, 1];
  },
  translate3d(item: TransformValue) {
    let x = (item.d[0] as { px?: number; }).px || 0;
    let y = (item.d[1] as { px?: number; }).px || 0;
    let z = (item.d[2] as { px?: number; }).px || 0;
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      x, y, z, 1];
  },
  perspective(item: TransformValue) {
    let px = (item.d[0] as { px?: number; }).px;
    let p = px ? (-1 / px) : 0;
    return [
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, p,
      0, 0, 0, 1];
  },
  matrix(item: TransformValue) {
    return [item.d[0], item.d[1], 0, 0,
    item.d[2], item.d[3], 0, 0,
      0, 0, 1, 0,
    item.d[4], item.d[5], 0, 1];
  },
  matrix3d(item: TransformValue) {
    return item.d;
  }
};

function convertItemToMatrix(item: TransformValue): number[] {
  return transformConverters[item.t](item);
}

function convertToMatrix(transformList: TransformValues): number[] {
  if (transformList.length === 0) {
    return [1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1];
  }
  return transformList.map(convertItemToMatrix).reduce(multiplyMatrices);
}

function makeMatrixDecomposition(transformList: TransformValues): number[][][] {
  return [
    decomposeMatrix(convertToMatrix(transformList))
  ];
}

// This returns a function for converting transform functions to equivalent
// primitive functions, which will take an array of values from the
// derivative type and fill in the blanks (underscores) with them.
let _ = null;
function cast(pattern) {
  return function (contents) {
    let i = 0;
    return pattern.map(function (x) { return x === _ ? contents[i++] : x; });
  }
}

function id(x) { return x; }

let Opx = { px: 0 };
let Odeg = { deg: 0 };

// type: [argTypes, convertTo3D, convertTo2D]
// In the argument types string, lowercase characters represent optional arguments
let transformFunctions = {
  matrix: ['NNNNNN', [_, _, 0, 0, _, _, 0, 0, 0, 0, 1, 0, _, _, 0, 1], id],
  matrix3d: ['NNNNNNNNNNNNNNNN', id],
  rotate: ['A'],
  rotatex: ['A'],
  rotatey: ['A'],
  rotatez: ['A'],
  rotate3d: ['NNNA'],
  perspective: ['L'],
  scale: ['Nn', cast([_, _, 1]), id],
  scalex: ['N', cast([_, 1, 1]), cast([_, 1])],
  scaley: ['N', cast([1, _, 1]), cast([1, _])],
  scalez: ['N', cast([1, 1, _])],
  scale3d: ['NNN', id],
  skew: ['Aa', undefined, id],
  skewx: ['A', undefined, cast([_, Odeg])],
  skewy: ['A', undefined, cast([Odeg, _])],
  translate: ['Tt', cast([_, _, Opx]), id],
  translatex: ['T', cast([_, Opx, Opx]), cast([_, Opx])],
  translatey: ['T', cast([Opx, _, Opx]), cast([Opx, _])],
  translatez: ['L', cast([Opx, Opx, _])],
  translate3d: ['TTL', id],
};

function parseTransform(str: string): TransformValues {
  str = str.toLowerCase().trim();
  if (str === 'none') {
    return [];
  }

  // fixme: Using a RegExp means calcs won't work here
  let transformRegExp = /\s*(\w+)\(([^)]*)\)/g;
  let result = [];
  let prevLastIndex = 0;

  for (let match = transformRegExp.exec(str); !!match; match = transformRegExp.exec(str)) {
    // if (match.index !== prevLastIndex) {
    //   return;
    // }

    prevLastIndex = match.index + match[0].length;
    let functionName = match[1];
    let functionData = transformFunctions[functionName];
    // if (!functionData) {
    //   return;
    // }

    let args = match[2].split(',');
    let argTypes = functionData[0];
    // if (argTypes.length < args.length) {
    //   return;
    // }

    let parsedArgs = [];
    for (let i = 0; i < argTypes.length; i++) {
      let arg = args[i];
      let type = argTypes[i];
      let parsedArg;

      if (!arg) {
        parsedArg = ({
          a: Odeg,
          n: parsedArgs[0],
          t: Opx
        })[type];
      } else {
        parsedArg = ({
          A(s: string) {
            return s.trim() === '0' ? Odeg : parseAngle(s);
          },
          N: parseNumber,
          T: parseLengthOrPercent,
          L: parseLength
        })[type.toUpperCase()](arg);
      }
      // if (parsedArg === undefined) {
      //   return;
      // }
      parsedArgs.push(parsedArg);
    }
    result.push({
      t: functionName,
      d: parsedArgs
    });

    // if (transformRegExp.lastIndex !== str.length) {
    //   return;
    // }

    return result;
  }
}

function parseNumber(str: string): number | undefined {
  if (!/^\s*[-+]?(\d*\.)?\d+\s*$/.test(str)) {
    return ;
  }
  return Number(str);
}


  function numberToString(x: number): string {
    return x.toFixed(3).replace('.000', '');
  }

  function mergeNumbers(left: number, right: number): [number, number, (n: number) => string] {
    return [left, right, numberToString];
  }

function numberToLongString(x: number): string {
  return x.toFixed(6).replace('.000000', '');
}

function mergeMatrices(left: TransformValues, right: TransformValues) {
  let leftArgs: TransformValues;
  let rightArgs: TransformValues;

  if (left.decompositionPair !== right) {
    left.decompositionPair = right;
    leftArgs = makeMatrixDecomposition(left);
  }
  if (right.decompositionPair !== left) {
    right.decompositionPair = left;
    rightArgs = makeMatrixDecomposition(right);
  }
  if (leftArgs[0] == null || rightArgs[0] == null) {
    return [[false], [true], (x) => x ? right[0].d : left[0].d];
  }

  leftArgs[0].push(0);
  rightArgs[0].push(1);

  return [
    leftArgs,
    rightArgs,
    function (list: number[][]) {
      let quat2 = quat(leftArgs[0][3], rightArgs[0][3], list[5]);
      let mat = composeMatrix(list[0], list[1], list[2], quat2, list[4]);
      let stringifiedArgs = mat.map(numberToLongString).join(',');
      return stringifiedArgs;
    }
  ];
}

function typeTo2D(type: string): string {
  return type.replace(/[xy]/, '');
}

function typeTo3D(type: string): string {
  return type.replace(/(x|y|z|3d)?$/, '3d');
}

function isMatrixOrPerspective(lt: string, rt: string): boolean {
  return ((lt === 'perspective') && (rt === 'perspective')) ||
    ((lt === 'matrix' || lt === 'matrix3d') && (rt === 'matrix' || rt === 'matrix3d'));
}




function mergeDimensions(left, right, nonNegative) {
  const units = [];
  for (let unit in left) {
    units.push(unit);
  }
  for (let unit in right) {
    if (units.indexOf(unit) < 0) {
      units.push(unit);
    }
  }

  left = units.map(function (unit) { return left[unit] || 0; });
  right = units.map(function (unit) { return right[unit] || 0; });

  function formatDimensions(values) {
    const result = values.map(function (value, i) {
      if (values.length === 1 && nonNegative) {
        value = Math.max(value, 0);
      }
      // Scientific notation (e.g. 1e2) is not yet widely supported by browser vendors.
      return numberToString(value) + units[i];
    }).join(' + ');
    return values.length > 1 ? 'calc(' + result + ')' : result;
  }

  return [left, right, formatDimensions];
}

type TransformValue = {
  t: string;
  d: (number | { px?: number; })[];
};

type TransformValues = TransformValue[] & {
  decompositionPair?: TransformValues;
};

function mergeTransforms(left: TransformValues, right: TransformValues): void {
  let matrixModulesLoaded = makeMatrixDecomposition && true;

  let flipResults = false;
  if (!left.length || !right.length) {
    if (!left.length) {
      flipResults = true;
      left = right;
      right = [];
    }
    for (let i = 0; i < left.length; i++) {
      let type = left[i].t;
      let args = left[i].d;
      let defaultValue = type.substr(0, 5) === 'scale' ? 1 : 0;
      right.push({
        t: type,
        d: args.map(function (arg: number | {}): number | {} {
          if (typeof arg === 'number') {
            return defaultValue;
          }
          let result = {};
          for (let unit in arg) {
            result[unit] = defaultValue;
          }
          return result;
        })
      });
    }
  }

  let leftResult = [];
  let rightResult = [];
  let types: [string, [(number | TransformValue)[]]] = [];

  if (left.length !== right.length) {
    if (!matrixModulesLoaded) {
      return;
    }
    let merged = mergeMatrices(left, right);
    leftResult = [merged[0]];
    rightResult = [merged[1]];
    types = [
      [
        'matrix',
        [ merged[2] ]
      ]
    ];
  } else {
    for (let i = 0; i < left.length; i++) {
      let leftType = left[i].t;
      let rightType = right[i].t;
      let leftArgs = left[i].d;
      let rightArgs = right[i].d;

      let leftFunctionData = transformFunctions[leftType];
      let rightFunctionData = transformFunctions[rightType];

      let type;
      if (isMatrixOrPerspective(leftType, rightType)) {
        if (!matrixModulesLoaded) {
          return;
        }
        let merged = mergeMatrices([left[i]], [right[i]]);
        leftResult.push(merged[0]);
        rightResult.push(merged[1]);
        types.push(['matrix', [merged[2]]]);
        continue;
      } else if (leftType === rightType) {
        type = leftType;
      } else if (leftFunctionData[2] && rightFunctionData[2] && typeTo2D(leftType) === typeTo2D(rightType)) {
        type = typeTo2D(leftType);
        leftArgs = leftFunctionData[2](leftArgs);
        rightArgs = rightFunctionData[2](rightArgs);
      } else if (leftFunctionData[1] && rightFunctionData[1] && typeTo3D(leftType) === typeTo3D(rightType)) {
        type = typeTo3D(leftType);
        leftArgs = leftFunctionData[1](leftArgs);
        rightArgs = rightFunctionData[1](rightArgs);
      } else {
        if (!matrixModulesLoaded) {
          return;
        }
        let merged = mergeMatrices(left, right);
        leftResult = [merged[0]];
        rightResult = [merged[1]];
        types = [['matrix', [merged[2]]]];
        break;
      }

      let leftArgsCopy = [];
      let rightArgsCopy = [];
      let stringConversions = [];
      for (let j = 0; j < leftArgs.length; j++) {
        let merge = typeof leftArgs[j] === 'number' ? mergeNumbers : mergeDimensions;
        let merged = merge(leftArgs[j], rightArgs[j]);
        leftArgsCopy[j] = merged[0];
        rightArgsCopy[j] = merged[1];
        stringConversions.push(merged[2]);
      }
      leftResult.push(leftArgsCopy);
      rightResult.push(rightArgsCopy);
      types.push([type, stringConversions]);
    }
  }

  if (flipResults) {
    let tmp = leftResult;
    leftResult = rightResult;
    rightResult = tmp;
  }

  return [
    leftResult,
    rightResult,
    function (list) {
      return list.map(function (args, i) {
        let stringifiedArgs = args.map(function (arg, j) {
          return types[i][1][j](arg);
        }).join(',');
        if (types[i][0] === 'matrix' && stringifiedArgs.split(',').length === 16) {
          types[i][0] = 'matrix3d';
        }
        return types[i][0] + '(' + stringifiedArgs + ')';

      }).join(' ');
    }
  ];
}

//scope.addPropertiesHandler(parseTransform, mergeTransforms, ['transform']);
