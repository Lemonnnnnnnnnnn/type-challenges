/*
  43 - Exclude
  -------
  by Zheeeng (@zheeeng) #easy #built-in #union

  ### Question

  Implement the built-in `Exclude<T, U>`

  > Exclude from `T` those types that are assignable to `U`

  For example:

  ```ts
  type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
  ```

  > View on GitHub: https://tsch.js.org/43
*/

/* _____________ Your Code Here _____________ */

// 如果给条件类型传入一个联合类型 (union Type): 则条件类型会应用到每个联合类型中的元素  
//  https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types
type MyExclude<T, U> = T extends U ? never : T

// 示例
type A = MyExclude<'a' | 'b' | 'c', 'a'>
// MyExclude<'a' , 'a'> | MyExclude<'b' , 'a'> | MyExclude<'c' , 'a'>
// = never | 'b' | 'c'
// = 'b' | 'c'

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/43/answer
  > View solutions: https://tsch.js.org/43/solutions
  > More Challenges: https://tsch.js.org
*/
