import { runDataSet } from "../test/test_utils.js";
import { Vector } from "./vector.js";

const vec2A = new Vector([41, 52]);
const vec3A = new Vector([6, 17, 3]);
const vec4A = new Vector([21, 9, 5, 13]);

const vec2B = new Vector([5, 15]);
const vec3B = new Vector([16, 8, 34]);
const vec4B = new Vector([8, 26, 2, 54]);

const scalarN = 3;
const scalarM = 5;

type TestVec2 = [number, number];
type TestVec3 = [number, number, number];
type TestVec4 = [number, number, number, number];

function sum(): number {
  const vec2AB_assert: TestVec2 = [46, 67];
  const vec3AB_assert: TestVec3 = [22, 25, 37];
  const vec4AB_assert: TestVec4 = [29, 35, 7, 67];

  const vec2BA_assert: TestVec2 = [46, 67];
  const vec3BA_assert: TestVec3 = [22, 25, 37];
  const vec4BA_assert: TestVec4 = [29, 35, 7, 67];

  return runDataSet<TestVec2 | TestVec3 | TestVec4>("Vector.sum", [
    {
      operation: "vec2AB",
      operands: {
        left: vec2A.toArr(),
        right: vec2B.toArr(),
      },
      result: vec2A.sum(vec2B).toArr(),
      assert: vec2AB_assert,
    },
    {
      operation: "vec3AB",
      operands: {
        left: vec3A.toArr(),
        right: vec3B.toArr(),
      },
      result: vec3A.sum(vec3B).toArr(),
      assert: vec3AB_assert,
    },
    {
      operation: "vec4AB",
      operands: {
        left: vec4A.toArr(),
        right: vec4B.toArr(),
      },
      result: vec4A.sum(vec4B).toArr(),
      assert: vec4AB_assert,
    },
    {
      operation: "vec2BA",
      operands: {
        left: vec2B.toArr(),
        right: vec2A.toArr(),
      },
      result: vec2B.sum(vec2A).toArr(),
      assert: vec2BA_assert,
    },
    {
      operation: "vec3BA",
      operands: {
        left: vec3B.toArr(),
        right: vec3A.toArr(),
      },
      result: vec3B.sum(vec3A).toArr(),
      assert: vec3BA_assert,
    },
    {
      operation: "vec4BA",
      operands: {
        left: vec4B.toArr(),
        right: vec4A.toArr(),
      },
      result: vec4B.sum(vec4A).toArr(),
      assert: vec4BA_assert,
    },
  ]);
}

function subtract(): number {
  const vec2AB_assert: TestVec2 = [36, 37];
  const vec3AB_assert: TestVec3 = [-10, 9, -31];
  const vec4AB_assert: TestVec4 = [13, -17, 3, -41];

  const vec2BA_assert: TestVec2 = [-36, -37];
  const vec3BA_assert: TestVec3 = [10, -9, 31];
  const vec4BA_assert: TestVec4 = [-13, 17, -3, 41];

  return runDataSet<TestVec2 | TestVec3 | TestVec4>("Vector.subtract", [
    {
      operation: "vec2AB",
      operands: {
        left: vec2A.toArr(),
        right: vec2B.toArr(),
      },
      result: vec2A.subtract(vec2B).toArr(),
      assert: vec2AB_assert,
    },
    {
      operation: "vec3AB",
      operands: {
        left: vec3A.toArr(),
        right: vec3B.toArr(),
      },
      result: vec3A.subtract(vec3B).toArr(),
      assert: vec3AB_assert,
    },
    {
      operation: "vec4AB",
      operands: {
        left: vec4A.toArr(),
        right: vec4B.toArr(),
      },
      result: vec4A.subtract(vec4B).toArr(),
      assert: vec4AB_assert,
    },
    {
      operation: "vec2BA",
      operands: {
        left: vec2B.toArr(),
        right: vec2A.toArr(),
      },
      result: vec2B.subtract(vec2A).toArr(),
      assert: vec2BA_assert,
    },
    {
      operation: "vec3BA",
      operands: {
        left: vec3B.toArr(),
        right: vec3A.toArr(),
      },
      result: vec3B.subtract(vec3A).toArr(),
      assert: vec3BA_assert,
    },
    {
      operation: "vec4BA",
      operands: {
        left: vec4B.toArr(),
        right: vec4A.toArr(),
      },
      result: vec4B.subtract(vec4A).toArr(),
      assert: vec4BA_assert,
    },
  ]);
}

function crossProduct(): number {
  const vec3AB_assert: TestVec3 = [554, -156, -224];
  const vec4AB_assert: TestVec4 = [-78624, -1404, 332748, 702];

  const vec3BA_assert: TestVec3 = [-554, 156, 224];
  const vec4BA_assert: TestVec4 = [78624, 1404, -332748, 702];

  return runDataSet<TestVec2 | TestVec3 | TestVec4>("Vector.crossProduct", [
    {
      operation: "vec3AB",
      operands: {
        left: vec3A.toArr(),
        right: vec3B.toArr(),
      },
      result: vec3A.crossProduct(vec3B).toArr(),
      assert: vec3AB_assert,
    },
    {
      operation: "vec4AB",
      operands: {
        left: vec4A.toArr(),
        right: vec4B.toArr(),
      },
      result: vec4A.crossProduct(vec4B).toArr(),
      assert: vec4AB_assert,
    },
    {
      operation: "vec3BA",
      operands: {
        left: vec3B.toArr(),
        right: vec3A.toArr(),
      },
      result: vec3B.crossProduct(vec3A).toArr(),
      assert: vec3BA_assert,
    },
    {
      operation: "vec4BA",
      operands: {
        left: vec4B.toArr(),
        right: vec4A.toArr(),
      },
      result: vec4B.crossProduct(vec4A).toArr(),
      assert: vec4BA_assert,
    },
  ]);
}

function multiply(): number {
  const vec2A_scalarN_assert: TestVec2 = [123, 156];
  const vec3A_scalarN_assert: TestVec3 = [18, 51, 9];
  const vec4A_scalarN_assert: TestVec4 = [63, 27, 15, 39];

  const vec2B_scalarN_assert: TestVec2 = [15, 45];
  const vec3B_scalarN_assert: TestVec3 = [48, 24, 102];
  const vec4B_scalarN_assert: TestVec4 = [24, 78, 6, 162];

  const vec2A_scalarM_assert: TestVec2 = [205, 260];
  const vec3A_scalarM_assert: TestVec3 = [30, 85, 15];
  const vec4A_scalarM_assert: TestVec4 = [105, 45, 25, 65];

  const vec2B_scalarM_assert: TestVec2 = [25, 75];
  const vec3B_scalarM_assert: TestVec3 = [80, 40, 170];
  const vec4B_scalarM_assert: TestVec4 = [40, 130, 10, 270];

  return runDataSet<TestVec2 | TestVec3 | TestVec4>("Vector.multiply", [
    {
      operation: "vec2A_scalarN",
      operands: {
        left: vec2A.toArr(),
        right: scalarN,
      },
      result: vec2A.multiply(scalarN).toArr(),
      assert: vec2A_scalarN_assert,
    },
    {
      operation: "vec3A_scalarN",
      operands: {
        left: vec3A.toArr(),
        right: scalarN,
      },
      result: vec3A.multiply(scalarN).toArr(),
      assert: vec3A_scalarN_assert,
    },
    {
      operation: "vec4A_scalarN",
      operands: {
        left: vec4A.toArr(),
        right: scalarN,
      },
      result: vec4A.multiply(scalarN).toArr(),
      assert: vec4A_scalarN_assert,
    },
    {
      operation: "vec2B_scalarN",
      operands: {
        left: vec2B.toArr(),
        right: scalarN,
      },
      result: vec2B.multiply(scalarN).toArr(),
      assert: vec2B_scalarN_assert,
    },
    {
      operation: "vec3B_scalarN",
      operands: {
        left: vec3B.toArr(),
        right: scalarN,
      },
      result: vec3B.multiply(scalarN).toArr(),
      assert: vec3B_scalarN_assert,
    },
    {
      operation: "vec4B_scalarN",
      operands: {
        left: vec4B.toArr(),
        right: scalarN,
      },
      result: vec4B.multiply(scalarN).toArr(),
      assert: vec4B_scalarN_assert,
    },
    {
      operation: "vec2A_scalarM",
      operands: {
        left: vec2A.toArr(),
        right: scalarM,
      },
      result: vec2A.multiply(scalarM).toArr(),
      assert: vec2A_scalarM_assert,
    },
    {
      operation: "vec3A_scalarM",
      operands: {
        left: vec3A.toArr(),
        right: scalarM,
      },
      result: vec3A.multiply(scalarM).toArr(),
      assert: vec3A_scalarM_assert,
    },
    {
      operation: "vec4A_scalarM",
      operands: {
        left: vec4A.toArr(),
        right: scalarM,
      },
      result: vec4A.multiply(scalarM).toArr(),
      assert: vec4A_scalarM_assert,
    },
    {
      operation: "vec2B_scalarM",
      operands: {
        left: vec2B.toArr(),
        right: scalarM,
      },
      result: vec2B.multiply(scalarM).toArr(),
      assert: vec2B_scalarM_assert,
    },
    {
      operation: "vec3B_scalarM",
      operands: {
        left: vec3B.toArr(),
        right: scalarM,
      },
      result: vec3B.multiply(scalarM).toArr(),
      assert: vec3B_scalarM_assert,
    },
    {
      operation: "vec4B_scalarM",
      operands: {
        left: vec4B.toArr(),
        right: scalarM,
      },
      result: vec4B.multiply(scalarM).toArr(),
      assert: vec4B_scalarM_assert,
    },
  ]);
}

function divide(): number {
  const vec2A_scalarN_assert: TestVec2 = [41 / 3, 52 / 3];
  const vec3A_scalarN_assert: TestVec3 = [6 / 3, 17 / 3, 3 / 3];
  const vec4A_scalarN_assert: TestVec4 = [21 / 3, 9 / 3, 5 / 3, 13 / 3];

  const vec2B_scalarN_assert: TestVec2 = [5 / 3, 15 / 3];
  const vec3B_scalarN_assert: TestVec3 = [16 / 3, 8 / 3, 34 / 3];
  const vec4B_scalarN_assert: TestVec4 = [8 / 3, 26 / 3, 2 / 3, 54 / 3];

  const vec3B = new Vector([16, 8, 34]);
  const scalarN = 3;

  const vec2A_scalarM_assert: TestVec2 = [41 / 5, 52 / 5];
  const vec3A_scalarM_assert: TestVec3 = [6 / 5, 17 / 5, 3 / 5];
  const vec4A_scalarM_assert: TestVec4 = [21 / 5, 9 / 5, 5 / 5, 13 / 5];

  const vec2B_scalarM_assert: TestVec2 = [5 / 5, 15 / 5];
  const vec3B_scalarM_assert: TestVec3 = [16 / 5, 8 / 5, 34 / 5];
  const vec4B_scalarM_assert: TestVec4 = [8 / 5, 26 / 5, 2 / 5, 54 / 5];

  return runDataSet<TestVec2 | TestVec3 | TestVec4>("Vector.divide", [
    {
      operation: "vec2A_scalarN",
      operands: {
        left: vec2A.toArr(),
        right: scalarN,
      },
      result: vec2A.divide(scalarN).toArr(),
      assert: vec2A_scalarN_assert,
    },
    {
      operation: "vec3A_scalarN",
      operands: {
        left: vec3A.toArr(),
        right: scalarN,
      },
      result: vec3A.divide(scalarN).toArr(),
      assert: vec3A_scalarN_assert,
    },
    {
      operation: "vec4A_scalarN",
      operands: {
        left: vec4A.toArr(),
        right: scalarN,
      },
      result: vec4A.divide(scalarN).toArr(),
      assert: vec4A_scalarN_assert,
    },
    {
      operation: "vec2B_scalarN",
      operands: {
        left: vec2B.toArr(),
        right: scalarN,
      },
      result: vec2B.divide(scalarN).toArr(),
      assert: vec2B_scalarN_assert,
    },
    {
      operation: "vec3B_scalarN",
      operands: {
        left: vec3B.toArr(),
        right: scalarN,
      },
      result: vec3B.divide(scalarN).toArr(),
      assert: vec3B_scalarN_assert,
    },
    {
      operation: "vec4B_scalarN",
      operands: {
        left: vec4B.toArr(),
        right: scalarN,
      },
      result: vec4B.divide(scalarN).toArr(),
      assert: vec4B_scalarN_assert,
    },
    {
      operation: "vec2A_scalarM",
      operands: {
        left: vec2A.toArr(),
        right: scalarM,
      },
      result: vec2A.divide(scalarM).toArr(),
      assert: vec2A_scalarM_assert,
    },
    {
      operation: "vec3A_scalarM",
      operands: {
        left: vec3A.toArr(),
        right: scalarM,
      },
      result: vec3A.divide(scalarM).toArr(),
      assert: vec3A_scalarM_assert,
    },
    {
      operation: "vec4A_scalarM",
      operands: {
        left: vec4A.toArr(),
        right: scalarM,
      },
      result: vec4A.divide(scalarM).toArr(),
      assert: vec4A_scalarM_assert,
    },
    {
      operation: "vec2B_scalarM",
      operands: {
        left: vec2B.toArr(),
        right: scalarM,
      },
      result: vec2B.divide(scalarM).toArr(),
      assert: vec2B_scalarM_assert,
    },
    {
      operation: "vec3B_scalarM",
      operands: {
        left: vec3B.toArr(),
        right: scalarM,
      },
      result: vec3B.divide(scalarM).toArr(),
      assert: vec3B_scalarM_assert,
    },
    {
      operation: "vec4B_scalarM",
      operands: {
        left: vec4B.toArr(),
        right: scalarM,
      },
      result: vec4B.divide(scalarM).toArr(),
      assert: vec4B_scalarM_assert,
    },
  ]);
}

function vec2PerpendicularDotProduct(): number {
  const vec2AB_assert: number = 41 * 15 - 52 * 5;
  const vec2BA_assert: number = 5 * 52 - 15 * 41;

  return runDataSet<number>("Vector.vec2PerpendicularDotProduct", [
    {
      operation: "vec2AB",
      operands: {
        left: vec2A.toArr(),
        right: vec2B.toArr(),
      },
      result: vec2A.vec2PerpendicularDotProcut(vec2B),
      assert: vec2AB_assert,
    },
    {
      operation: "vec2BA",
      operands: {
        left: vec2B.toArr(),
        right: vec2A.toArr(),
      },
      result: vec2B.vec2PerpendicularDotProcut(vec2A),
      assert: vec2BA_assert,
    },
  ]);
}

function dotProduct(): number {
  const vec2AB_assert = 41 * 5 + 52 * 15;
  const vec3AB_assert = 6 * 16 + 17 * 8 + 3 * 34;
  const vec4AB_assert = 21 * 8 + 9 * 26 + 5 * 2 + 13 * 54;

  const vec3A = new Vector([6, 17, 3]);
  const vec3B = new Vector([16, 8, 34]);

  return runDataSet<number>("Vector.dotProduct", [
    {
      operation: "vec2AB",
      operands: {
        left: vec2A.toArr(),
        right: vec2B.toArr(),
      },
      result: vec2A.dotProduct(vec2B),
      assert: vec2AB_assert,
    },
    {
      operation: "vec3AB",
      operands: {
        left: vec3A.toArr(),
        right: vec3B.toArr(),
      },
      result: vec3A.dotProduct(vec3B),
      assert: vec3AB_assert,
    },
    {
      operation: "vec4AB",
      operands: {
        left: vec4A.toArr(),
        right: vec4B.toArr(),
      },
      result: vec4A.dotProduct(vec4B),
      assert: vec4AB_assert,
    },
  ]);
}

const execArr = [
  sum,
  subtract,
  crossProduct,
  multiply,
  divide,
  vec2PerpendicularDotProduct,
  dotProduct,
];

export function vectorTester(): number {
  let totalErr = 0;
  for (const exec of execArr) {
    totalErr += exec();
  }

  return totalErr;
}
