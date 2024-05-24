export type SimpleSpread<L, R> = R & Pick<L, Exclude<keyof L, keyof R>>;
