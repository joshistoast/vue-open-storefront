type ConstrainBetween = (min?: number, max?: number) => (val: number) => number

const constrainBetween: ConstrainBetween =
  (min = -Infinity, max = Infinity) =>
  (val) =>
    Math.max(min, Math.min(max, val))

export default constrainBetween
