/*
  531 - String to Union
  -------
  by Andrey Krasovsky (@bre30kra69cs) #medium #union #string

  ### Question

  Implement the String to Union type. Type take string argument. The output should be a union of input letters

  For example

  ```ts
  type Test = "123"
  type Result = StringToUnion<Test> // expected to be "1" | "2" | "3"
  ```

  > View on GitHub: https://tsch.js.org/531
*/

/* _____________ Your Code Here _____________ */

type Push<T extends any[], U> = [...T, U]

type String2Array<T extends string, A extends any[] = []> = T extends `${infer F}${infer R}` ? String2Array<R, Push<A, F>> : A

type TupleToUnion<T extends any[]> = T[number]

type StringToUnion<T extends string> = T extends ''
  ? never
  : TupleToUnion<String2Array<T>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<StringToUnion<''>, never>>,
  Expect<Equal<StringToUnion<'t'>, 't'>>,
  Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
  Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/531/answer
  > View solutions: https://tsch.js.org/531/solutions
  > More Challenges: https://tsch.js.org
*/
