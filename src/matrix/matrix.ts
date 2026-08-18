type TMat2 = [number, number, number, number];
type TMat3 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];
type TMat4 = [
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
];

type TMatAll = TMat2 | TMat3 | TMat4;

export class Matrix<M extends TMatAll>{
  private innerMatrix: M extends TMatAll;

  constructor(initiator: M) {
    this.innerMatrix = initiator
  }

  sum() {}

  subtract() {}

  multiplyScalar() {}

  divideScalar() {}
}
