export const ansiEscapeCodes = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[5m",
  cyan: "\x1b[36m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  blink: "\x1b[5m",
};

function str(length: number, fill: string) {
  return Array.from({ length }).fill(fill).join("");
}

export function printTestTitle(rawTitle: string, rawSubtitle: string = "") {
  const { reset, blue, green, bold, blink, cyan, magenta, red, yellow } =
    ansiEscapeCodes;

  const treatedTitle = `${cyan}${rawTitle.trim().toUpperCase()}${green}`;
  const treatedSubtitle =
    rawSubtitle && `${cyan}${rawSubtitle.trim().toUpperCase()}${green}`;

  const titleLength = rawTitle.trim().length;
  const subtitleLength = rawSubtitle.trim().length;

  const lineLength = process.stdout.columns;
  const logLength = 40;

  const margin = Math.ceil((lineLength - logLength) / 2);
  const paddingLeftTitle =
    (logLength - titleLength - 4) % 2 === 0
      ? (logLength - titleLength - 4) / 2
      : (logLength - titleLength - 5) / 2;
  const paddingRightTitle =
    (logLength - titleLength - 4) % 2 === 0
      ? (logLength - titleLength - 4) / 2
      : (logLength - titleLength - 3) / 2;
  const paddingLeftSub =
    rawSubtitle && (logLength - subtitleLength - 4) % 2 === 0
      ? (logLength - subtitleLength - 4) / 2
      : (logLength - subtitleLength - 5) / 2;
  const paddingRightSub =
    rawSubtitle && (logLength - subtitleLength - 4) % 2 === 0
      ? (logLength - subtitleLength - 4) / 2
      : (logLength - subtitleLength - 3) / 2;
  const symbol = ":";
  const borderTopSymbol = ".";
  const borderBotSymbol = "'";

  const top =
    str(margin, " ") +
    borderTopSymbol +
    str(logLength - 2, symbol) +
    borderTopSymbol;
  const vertical =
    str(margin, " ") +
    str(2, symbol) +
    str(logLength - 4, " ") +
    str(2, symbol);

  const bottom =
    str(margin, " ") +
    borderBotSymbol +
    str(logLength - 2, symbol) +
    borderBotSymbol;

  const title =
    str(margin, " ") +
    str(2, symbol) +
    str(paddingLeftTitle, " ") +
    treatedTitle +
    str(paddingRightTitle, " ") +
    str(2, symbol);

  const subtitle =
    rawSubtitle &&
    str(margin, " ") +
      str(2, symbol) +
      str(paddingLeftSub, " ") +
      treatedSubtitle +
      str(paddingRightSub, " ") +
      str(2, symbol);
  console.info(green, bold, "\n\r");

  console.info(top);
  console.info(vertical);
  console.info(title);
  if (subtitle) console.info(subtitle);
  console.info(vertical);
  console.info(bottom);
}

export function arraysMatch<T extends Array<number>>(a: T, b: T) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

export function runDataSet<T extends number | number[]>(
  context: string,
  dataSet: {
    result: T;
    assert: T;
    operands: { left: number | number[]; right: number | number[] };
    operation: string;
  }[],
) {
  let errorCount = 0;
  for (const { assert, result, operation, operands } of dataSet) {
    if (result instanceof Array && assert instanceof Array) {
      errorCount += evaluateTest(
        arraysMatch(result, assert),
        context,
        `-Error details:\n>Test: ${operation}\n>Left: ${operands.left}\n>Right: ${operands.right}\n>Result: ${JSON.stringify(result)}\n>Assert: ${JSON.stringify(assert)}`,
      );
    } else {
      errorCount += evaluateTest(
        result === assert,
        context,
        `-Error details:\n>Test: ${operation}\n>Left: ${operands.left}\n>Right: ${operands.right}\n>Result: ${JSON.stringify(result)}\n>Assert: ${JSON.stringify(assert)}`,
      );
    }
  }

  return errorCount;
}

export function evaluateTest(doLog: boolean, context: string, log: string) {
  const { reset, red } = ansiEscapeCodes;
  console.assert(
    doLog,
    reset,
    `\n================================================================================\n`,
    red,
    `\nContext: ${context}\n`,
    `Log:\n ${log}`,
    `\nCall Stack ${new Error().stack}\n`,
    reset,
    `\n================================================================================\n`,
  );

  return doLog ? 0 : 1;
}
