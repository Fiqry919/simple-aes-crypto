/**
 * this sample if want create type string with specific lenght but is not done
 */
type TruncateTo<
    T extends string,
    N extends number,
    L extends any[] = [],
    A extends string = ""
> = N extends L['length'] ? A : T extends `${infer F}${infer R}` ? (TruncateTo<R, N, [0, ...L], `${A}${F}`>) : A

const N = <T extends string, N extends number>(num: N, str: T extends TruncateTo<T, N> ? T : TruncateTo<T, N>) => str;

const Str = N(64, "CbvcrFAlzZQ3m0R6swH7upXi3FvZoIeroPu8JzomtW3W8rXmNeVKRfnPyfRaOPrP");

type SN = typeof Str

// const S = <M extends number>(input: string, max: M): input is typeof S => input.length <= max

type StringToTuple<S extends string> = S extends `${S[0]}${infer Rest}` ? [S, ...StringToTuple<Rest>] : []
type LengthOfString<S extends string> = StringToTuple<S>['length'];

function randomBytes(s: number): string {
    let r: string = ""
    let c: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (let i = 0; i < s; i++) {
        r += c.charAt(Math.floor(Math.random() * c.length));
    }
    return r
}

function salt(s: string): string {
    let l: number = s.length
    if (l > 16) {
        s = s.substring(0, 16)
    } else {
        s = s + randomBytes(16 - l)
    }
    return s
}

const sample: string = randomBytes(120)
const cut: string = salt(sample)
console.log({ sample, l: sample.length });
console.log({ cut, l: cut.length });

