# TypeScript

## 変数の宣言

```ts
var box;

let box2;

// 初期値はnumber型で1
let n: number = 1
n = 2;

// 定数
const count: number = 201711;
// count = 11;

const PI = Math.PI; // 3.14....
```

## 型キャストとテンプレート文字列

```
function log(message: string) {
    return '渡された値は :' + message + 'です';
}

log('100');
// <any>は渡す値をキャストして、文字列にしている
log(<any>100);

// テンプレート文字列
let template1 = `This is Template string.`;
let template2 = `
    Hello, TypeScript tutorial.
    This is Template string.
    Thank you.
`;
// alert(template2);

let template3 = `
    Hello, TypeScript tutorial.
    ${template1}
    Thank you.
`;
alert(template3);
```

## 関数

返り値がない場合は、voidを指定する

```
function hello(name: string): void {
  console.log(`Hello, ${name}!`);
}
```

### アロー関数

example

```
let hello = (name: string): string => {
  retrun `Hello, ${name}!`;
}
```

```
// 引数に'?'をつけると省略可能になる
// 
function greet(name?: string = 'Taro'): string {
    return 'Hello, ' + name + '!!';
}
document.writeln(greet());

// ...(ドット3つ)を引数の前に並べると可変長引数となる
// valuesが配列になる
function sum(...values: number[]): number{
    let total: number = 0;
    for (let i: number = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}
document.writeln(sum(30, 200, 70, 1500));

// アロー関数

// 一文だけなら
let add = (x1: number, x2: number): number => x1 + x2;
// のように書くことも可能
// let add = (x1: number, x2: number): number => {
//     return x1 + x2;
// }
document.writeln(add(1, 3));

document.getElementById('button1').addEventListener('click', function () {
    console.log(this); // <button id="button1">Button1</button>
}, false);

// アロー関数を使用すると呼び出し元のthisがそのまま関数に固定される
// document.getElementByIdを呼んでいるのは、、Window 
document.getElementById('button1').addEventListener('click', () => {
    console.log(this); // Window
}, false);
```

アロー関数、慣れるまでが大変そう。thisは、アロー関数を使うと、メソッドで取得で取得したオブジェクトではなくて、呼び出して(Window)のオブジェクトを入れているのかー

# クラス

```
class Animal {
    age: number = 10

    constructor(private isCry: boolean, private legs: number) { }

        cry(): void {
            if(this.isCry) {
                alert('legs: ' + this.legs);
            }
        }
}

let dog = new Animal(true, 4);
dog.cry(); // legs: 4
```

ここでキモになるのが、constructorの代入。JavaScriptでは次のように解釈される。

```
    function Animal(isCry, legs) {
        this.isCry = isCry;
        this.legs = legs;
        this.age = 10;
    }
```

TSは、privateメソッドに対してもgetter,setterが提供されている。

```
class Animal {

    private _age: number = 10

    // getterメソッド
    get age(): number {
        console.log(this._age);
        return this._age;
    }

    // setterメソッド
    set age(value: number) {
        if (value < 0) {
            throw new Error('年齢は0以上でなければなりません');
        }
        this._age = value;
    }
}

let dog = new Animal();
console.log(dog.age); // dog.age = 10
dog.age = 12; // set
console.log(dog.age); // dog.age = 12
dog.age = -1; // Uncaught Error: 年齢は0以上でなければなりません
```

# クラスの継承を理解しよう

```
class Animal {
    age: number = 10

    constructor(private isCry: boolean, private legs: number) { }

        cry(): void {
            if(this.isCry) {
                alert('legs: ' + this.legs);
            }
        }
}

class Dog extends Animal {

    cry(): void {
        // 親のcry関数を呼び出す
        super.cry();
        // その後に処理を追加することも可能
        console.log('hello!');
    }
}
let dog = new Dog(true, 4);
dog.cry();
```

# ジェネリックについて理解しよう

クラスの管理を楽にする仕組み。

```
class NumberStore {
    data: number;
}

class StringStore {
    data: string;
}

// 型チェックが行われない
class AnyStore {
    data: any;
}

// ジェネリックを使用
// 不等号で囲むとジェネリックの印
class Store<T> {
    data: T;
    getStore(): T {
        return this.data;
    }
}

// データプロパティがstringになる
let stringData = new Store<string>();
stringData.data = 'X';
console.log(stringData.getStore());

// データプロパティがnumberになる
let numberStore = new Store<number>();
numberStore.data = 10000;
console.log(numberStore.getStore());

// 関数
function hello<T>(keyword: T) {
    console.log(`Log: ${keyword}`);
}
hello<string>('Hello, Yohei!');
hello<number>(10000);

// 2つもも
class Component<T, U> {
    name: T;
    created: U;
}
let component = new Component<string, number>();
component.name = 'app';
component.created = Date.now();

// numberが指定されているところにStringを入れてもエラーになる
// component.created = '2017/11/5';
```
