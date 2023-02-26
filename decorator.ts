type Class = { new(...args: any[]): any }

function Component(options: { id: number } = { id: 2 }) { // refactor it with ClassDecorator return type
    console.log('component işleme alındı');
    return (target: Class & typeof TestClass) => {
        console.log('component çalıştı');
        target.elementId = options.id
    }
}

function MethodComp(): MethodDecorator {
    console.log('method işleme alındı');
    return function (target, key, desc) {
        console.log('method çalıştı');
        // console.log('target', target);
        // console.log('key', key);
        // console.log('desc', desc);
    }
}

function PrinterProp(): PropertyDecorator {
    console.log('prop işleme alındı')
    return (target, key) => {
        console.log('prop çalıştı')
        // console.log(target);
        // console.log(key);
        // console.log(index);
    }
}

function PrinterParam(): ParameterDecorator {
    console.log('parameter işleme alındı');
    return (target, key, index) => {
        console.log('parameter çalıştı');
    }
}

@Component({ id: 18 })
class TestClass {
    static elementId: number
    @PrinterProp()
    id: number

    @MethodComp()
    printId(@PrinterParam() prefix: number = 0) {
        return prefix + this.id
    }
}

console.log(TestClass.elementId);

function first(): MethodDecorator {
    console.log('first işleme alındı');
    return (target, key, desc) => console.log('first çalıştı')
}

function second(): MethodDecorator {
    console.log('second işleme alındı');
    return (target, key, desc) => console.log('second çalıştı')
}

class Printer {
    @first()
    @second()
    yazdir(str: string) {
        return str + 'r'
    }
}

const prt = new Printer();
// prt.yazdir()
