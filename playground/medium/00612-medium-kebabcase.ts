/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #medium #template-literal

  ### Question

  Replace the `camelCase` or `PascalCase` string with `kebab-case`.

  `FooBarBaz` -> `foo-bar-baz`

  For example

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > View on GitHub: https://tsch.js.org/612
*/

/* _____________ Your Code Here _____________ */

// type TransformUpcase<S extends string, Ret extends string = ''> = S extends `${infer F}${infer R}`
//   ? F extends '-' | '_'
//     ? `${TransformUpcase<R, `${Ret}${F}`>}`
//     : F extends Uppercase<F>
//       ? `${TransformUpcase<R, `${Ret}-${Lowercase<F>}`>}`
//       : `${TransformUpcase<R, `${Ret}${F}`>}`
//   : Ret

// type Shift<S extends string> = S extends `${infer F}${infer R}`
//   ? R extends ''
//     ? S
//     : F extends '-'
//       ? R
//       : S
//   : S

// not pass last case
// type KebabCase<S extends string> = Shift<TransformUpcase<S>>

// ---------------------
/**
 * @description 文字描述
 * 判断第 2-n 字符：
 * - 如果是小写开头 ：将前一个字母小写【递归处理后续字段】
 * - 如果是大写开头： 前一个字母小写-【递归处理后续字段】
 */
type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<F>}${KebabCase<R>}`
    : `${Uncapitalize<F>}-${KebabCase<R>}`
  : S

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
  Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
  Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
  Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
  Expect<Equal<KebabCase<'-'>, '-'>>,
  Expect<Equal<KebabCase<''>, ''>>,
  Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/612/answer
  > View solutions: https://tsch.js.org/612/solutions
  > More Challenges: https://tsch.js.org
*/
