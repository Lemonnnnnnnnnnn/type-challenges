/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #medium #object

  ### Question

  Get an `Object` that is the difference between `O` & `O1`

  > View on GitHub: https://tsch.js.org/645
*/

/* _____________ Your Code Here _____________ */

type Perfect<T extends Record<keyof any, any>> = {
  [P in keyof T]: T[P]
}

type MyPick<T extends Record<keyof any, any>, K extends keyof T> = {
  [P in K]: T[P]
}

type MyExclude<T, K> = T extends K ? never : T

type MyOmit<T extends Record<keyof any, any>, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>

type Diff<O extends Record<keyof any, any>, O1 extends Record<keyof any, any>> = Perfect<MyOmit<O, keyof O1> & MyOmit<O1, keyof O>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/645/answer
  > View solutions: https://tsch.js.org/645/solutions
  > More Challenges: https://tsch.js.org
*/
