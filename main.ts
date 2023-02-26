function overloaded(): string;
function overloaded(str: string): string;
function overloaded(str: string, num: number): number;
function overloaded(str?: string, num?: number) {
    if (typeof str === 'undefined')
        return 'boş deger girildi';
    if (typeof num === 'undefined')
        return str + ' girildi';

    return num * str.length
}

console.log(overloaded())
console.log(overloaded('string'))
console.log(overloaded('dört', 4))


// object types
interface ICihaz {
    readonly ozellik: string;
}

class Cihaz implements ICihaz {
    ozellik: string;
    constructor(ozellik: string) {
        this.ozellik = ozellik
    }

    degistir(value: string) {
        this.ozellik = value
    }
}

const dene = new Cihaz('ışık');
console.log(dene.ozellik);

dene.degistir('kızılötesi ışık');
console.log(dene.ozellik);


/* interface IBox {
    contents: unknown
}

interface NumberBox extends IBox {
    contents: number
}

interface StringBox extends IBox {
    contents: string
}

interface BooleanBox extends IBox {
    contents: true
}

function setContents(obj: NumberBox, newContent: number): void;
function setContents(obj: StringBox, newContent: string): void;
function setContents(obj: BooleanBox, newContent: boolean): void;
function setContents(obj: { contents: any }, newContent: any) {
    obj.contents = newContent
} */

interface Box<T> {
    contents: T
}

const boxA: Box<string> = { contents: 'kutu' }

function setContents<T>(obj: Box<T>, newContent: T) {
    obj.contents = newContent
}

type OrNull<T> = T | null;
type OneOrMany<T> = T | T[];
type OneOrManyOrNull<T> = OrNull<OneOrMany<T>>;
type OneOrManyOrNullOrString = OneOrManyOrNull<string>;

new Array<string | number>(3, 'wef', 'haaaa');
let r: Array<string>;

interface LikeArray {
    [index: number]: any
    length: number
}

const arr: LikeArray = ['deneme 2', 'array like '];
const obj: LikeArray = { 0: 'item 1', 1: 2, 2: { content: 'item 3' }, '3': 'fe', length: 4 }

// tuple
type StringOrNumberTuple = [string, number];
const tapıl: StringOrNumberTuple = ['ahlat', 2]

type OptionalTuple = [string, string?]
const optional: OptionalTuple = ['can we ? ', 'may be']
optional.length // 2 | 1

type StringNumberBooleans = [string, number, ...boolean[]]
const resttuple: StringNumberBooleans = ['son kez', 4, true, false, true, true]
resttuple.length // number

type Point = [number, number]
// const point = [3, 4] as const
const point = [3, 4] as Point

function distance([x, y]: [number, number]) {
    return Math.sqrt(x ** 2 + y ** 2)
}

distance(point)