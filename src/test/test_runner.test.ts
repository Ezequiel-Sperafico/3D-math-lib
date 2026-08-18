import { vectorTester } from "../vector/vector.test.js";
import { ansiEscapeCodes, printTestTitle } from "./test_utils.js";

const testArr = [{ label: "VECTOR-TESTS", test: vectorTester }];

export function testRunner() {
  const { red, green, reset } = ansiEscapeCodes;
  let totalErrors = 0;
  printTestTitle("3D_MATH_LIB", "TESTS");
  for (const { label, test } of testArr) {
    printTestTitle("VECTOR_MODULE");
    totalErrors += test();
  }
  if (totalErrors)
    console.error(
      red,
      `Total errors across the modules: ${totalErrors}`,
      reset,
    );
  else console.log(green, "All modules cheked.", reset);
}

testRunner();
