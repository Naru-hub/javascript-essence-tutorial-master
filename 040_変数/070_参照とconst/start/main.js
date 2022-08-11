// const a = 'hello';
// a = 'bye';

// constをオブジェクトで使った場合、再代入はできないが、オブジェクト内のプロパティは変更できる
const b = {
  prop: 'hello'
}
// b = {}
b.prop = 'bye';
console.log(b);