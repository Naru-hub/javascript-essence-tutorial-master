const a = 0;
const b = 1;
const c = 3;
const d = 0;
console.log(a && b && c);
// && の場合はfalsyな値が見つかった時点でその値が返される、見つからなかった場合は最後の値が返される
console.log(a || b || c);
// or の場合はtruthyな値が見つかった時点でこの条件式の結果となる、見つからなかった場合は最後の値が返される
console.log((a || b) && c);
console.log((a || b) && (c || d));
// &&と||をつなげるときはグループ化する
