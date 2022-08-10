// プリミティブ型では参照先の値がコピーされているので、値を変更しても参照している元の値は変わらない
let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

// オブジェクトではオブジェクトへの参照がコピーされるので、値を変更すると参照している元の値まで変わる
let c = {
  prop: 'hello'
}
let d = c;
// d.prop = 'bye';
d = {};
console.log(c, d);