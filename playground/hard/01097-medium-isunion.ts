/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium #union

  ### Question

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > View on GitHub: https://tsch.js.org/1097
*/

/* _____________ Your Code Here _____________ */

type IsUnion<T, U = T> = [U] extends [never]
	? false
	: (T extends T ? (U extends T ? true : unknown) : never) extends true
	  ? false
	  : true;
// 分析
// step 1:
// type A = "1" | "2";
// type B = "1" | "2";
// type C = A extends A ? B extends A ? true : unknown : never;
// ("1" extends "1" | "2" ? "1" | "2" extends "1" ? true : unknown : never) | ("2" extends "1" | "2" ? "1" | "2" extends "1" ? true : unknown : never)
// ("1" | "2" extends "1" ? true : unknown) |  ("1" | "2" extends "2" ? true : unknown)
// ("1" extends "1" ? true : unknown) | ("2" extends "1" ? true : unknown) |  ("1" extends "2" ? true : unknown) | ("2" extends "2" ? true : unknown)
// (true) | (unknown) | (unknown) | (true)
//
// step 2 :
// (true | unknown) extends true ? false : true
// false | true
// true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
	Expect<Equal<IsUnion<string>, false>>,
	Expect<Equal<IsUnion<string | number>, true>>,
	Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
	Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
	Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
	Expect<Equal<IsUnion<{ a: string | number }>, false>>,
	Expect<Equal<IsUnion<[string | number]>, false>>,
	// Cases where T resolves to a non-union type.
	Expect<Equal<IsUnion<string | never>, false>>,
	Expect<Equal<IsUnion<string | unknown>, false>>,
	Expect<Equal<IsUnion<string | any>, false>>,
	Expect<Equal<IsUnion<string | "a">, false>>,
	Expect<Equal<IsUnion<never>, false>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
