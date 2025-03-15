export {}

declare global {
  type MaybePromise<Value> = Value | Promise<Value>
  type MaybeVoid<Value> = Value | void
  type MaybeNull<Value> = Value | null
  type MaybeUndefined<Value> = Value | undefined
  type MaybeNone<Value> = Value | null | undefined | void
}
