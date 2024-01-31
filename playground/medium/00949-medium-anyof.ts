/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array

  ### Question

  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

  For example:

  ```ts
  type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.
  ```

  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

// type ValidUndefined<T> = T extends boolean
//   ? T
//   : T extends undefined
//     ? false
//     : T

// type ValidNull<T> = T extends boolean
//   ? T
//   : T extends null
//     ? false
//     : T

// type ValidNumber<T> = T extends boolean
//   ? T
//   : T extends number
//     ? T extends 1
//       ? true
//       : false
//     : T

// type ValidString<T> = T extends boolean
//   ? T
//   : T extends string
//     ? T extends ''
//       ? false
//       : true
//     : T

// type ValidRecord<T> = T extends boolean
//   ? T
//   : T extends Record<string, any>
//     ? T extends Record<string, never>
//       ? false
//       : true
//     : T

// type Check<T> = ValidRecord<ValidNull<ValidUndefined<ValidString<ValidNumber<T>>>>>

// type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
//   ? F extends any[]
//     ? AnyOf<F> extends true
//       ? true
//       : AnyOf<R>
//     : Check<F> extends true
//       ? true
//       : AnyOf<R>
//   : false

type AnyOf<T extends readonly any[]> = T[number] extends 0 | '' | false | [] | Record<string, never> | undefined | null ? false : true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
