import { error } from "../error.js";

type TInput<V extends TVecAll> = Vector<V> | V | number;

interface IOperand<V extends TVecAll> {
  leftOperand: V;
  rightOperand: V;
}

type TScalarOperations = "dot-product" | "vec2-perpendicular-dot-product";
type TVectorOperations =
  | "multiply-scalar"
  | "divide-scalar"
  | "sum"
  | "subtract"
  | "hadamard-product"
  | "cross-product";

export type TVec2 = [number, number];
export type TVec3 = [number, number, number];
export type TVec4 = [number, number, number, number];

type TVecAll = TVec2 | TVec3 | TVec4;

type TCrossOriginConstraint = TVec3 | TVec4;
type TCrossOriginInput<V extends TVecAll> = V extends TCrossOriginConstraint
  ? V | Vector<V>
  : never;

type T2DCrossProductInput<V extends TVecAll> = V extends TVec2
  ? V | Vector<V>
  : never;

export class Vector<V extends TVecAll> {
  private innerVector: V;
  private length: 2 | 3 | 4;

  static from<S extends TVecAll>(initiator: S): Vector<S> {
    return new Vector(initiator);
  }

  constructor(initiator: V) {
    this.innerVector = initiator;
    this.length = initiator.length;
  }

  sum(operand: TInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "sum");
  }

  sumAssign(operand: TInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "sum", true);
  }

  subtract(operand: TInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "subtract");
  }

  subtractAssign(operand: TInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "subtract", true);
  }

  crossProduct(operand: TCrossOriginInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "cross-product");
  }

  crossProductAssign(operand: TCrossOriginInput<V>): Vector<V> {
    return this.runVectorOperation(operand, "cross-product", true);
  }

  multiply(operand: number): Vector<V> {
    return this.runVectorOperation(operand, "multiply-scalar");
  }

  multiplyAssign(operand: number): Vector<V> {
    return this.runVectorOperation(operand, "multiply-scalar", true);
  }

  divide(operand: number): Vector<V> {
    return this.runVectorOperation(operand, "divide-scalar");
  }

  divideAssign(operand: number): Vector<V> {
    return this.runVectorOperation(operand, "divide-scalar", true);
  }

  vec2PerpendicularDotProcut(operand: T2DCrossProductInput<V>): number {
    return this.runScalarOperation(operand, "vec2-perpendicular-dot-product");
  }

  dotProduct(operand: TInput<V>): number {
    return this.runScalarOperation(operand, "dot-product");
  }

  toArr(): V {
    return [...this.innerVector];
  }

  private crossProductImplementation(
    leftOperand: V extends TCrossOriginConstraint ? V : never,
    rightOperand: TVec3 | TVec4,
  ): V | "error" {
    if (this.length === 3) {
      return [
        (leftOperand[1] as number) * (rightOperand[2] as number) -
          (leftOperand[2] as number) * (rightOperand[1] as number),
        (leftOperand[2] as number) * (rightOperand[0] as number) -
          (leftOperand[0] as number) * (rightOperand[2] as number),
        (leftOperand[0] as number) * (rightOperand[1] as number) -
          (leftOperand[1] as number) * (rightOperand[0] as number),
      ] as V;
    } else if (this.length === 4) {
      return [
        (rightOperand[3] as number) *
          (leftOperand[3] as number) *
          ((leftOperand[1] as number) * (rightOperand[2] as number) -
            (leftOperand[2] as number) * (rightOperand[1] as number)),
        (rightOperand[3] as number) *
          (leftOperand[3] as number) *
          ((leftOperand[2] as number) * (rightOperand[0] as number) -
            (leftOperand[0] as number) * (rightOperand[2] as number)),
        (rightOperand[3] as number) *
          (leftOperand[3] as number) *
          ((leftOperand[0] as number) * (rightOperand[1] as number) -
            (leftOperand[1] as number) * (rightOperand[0] as number)),
        (rightOperand[3] as number) * (leftOperand[3] as number),
      ] as V;
    } else {
      return error("Something went wrong");
    }
  }

  private runVectorOperation(
    operand: TInput<V>,
    operation: TVectorOperations,
    assign: boolean = false,
  ): Vector<V> {
    const operands = this.getOperands(operand);

    if (operands === "error") return this;

    const { leftOperand, rightOperand } = operands;
    let result: V | "error" = Array.from<number>({ length: this.length }).fill(
      0,
    ) as V;

    switch (operation) {
      case "sum":
        for (let i = 0; i < this.length; i++) {
          result[i] = (leftOperand[i] as number) + (rightOperand[i] as number);
        }
        break;
      case "subtract":
        for (let i = 0; i < this.length; i++) {
          result[i] = (leftOperand[i] as number) - (rightOperand[i] as number);
        }
        break;
      case "cross-product":
        result = this.crossProductImplementation(
          leftOperand as V extends TCrossOriginConstraint ? V : never,
          rightOperand as V extends TCrossOriginConstraint ? V : never,
        );
        break;
      case "hadamard-product":
        for (let i = 0; i < this.length; i++) {
          result[i] = (leftOperand[i] as number) * (rightOperand[i] as number);
        }
        break;
      case "multiply-scalar":
        for (let i = 0; i < this.length; i++) {
          result[i] = (leftOperand[i] as number) * (rightOperand[i] as number);
        }
        break;
      case "divide-scalar":
        for (let i = 0; i < this.length; i++) {
          result[i] = (leftOperand[i] as number) / (rightOperand[i] as number);
        }
        break;
      default:
        result = error("Operation out of range");
    }

    if (result === "error") {
      return this;
    }

    if (assign) {
      this.innerVector = result as V;
      return this;
    }

    return new Vector(result);
  }

  private runScalarOperation(
    operand: TInput<V>,
    operation: TScalarOperations,
  ): number {
    const operands = this.getOperands(operand);

    if (operands === "error") return NaN;

    const { leftOperand, rightOperand } = operands;

    let result: number = NaN;

    switch (operation) {
      case "dot-product":
        result = 0;
        for (let i = 0; i < this.length; i++) {
          result += (leftOperand[i] as number) * (rightOperand[i] as number);
        }
        break;
      case "vec2-perpendicular-dot-product":
        result =
          (leftOperand[0] as number) * (rightOperand[1] as number) -
          (leftOperand[1] as number) * (rightOperand[0] as number);
        break;
    }

    return result;
  }

  private getOperands(operand: TInput<V>): IOperand<V> | "error" {
    const leftOperand = this.innerVector;
    let rightOperand: V;

    if (typeof operand === "number") {
      rightOperand = Array.from<number>({ length: this.length }).fill(
        operand,
      ) as V;
    } else if (operand instanceof Array) {
      rightOperand = operand;
    } else if (operand instanceof Vector) {
      rightOperand = operand.innerVector;
    } else {
      return error("Operand type out of range.");
    }

    if (this.length !== (rightOperand as number[]).length) {
      return error("Size mismatch in vector operation");
    }

    return {
      leftOperand,
      rightOperand,
    };
  }
}
