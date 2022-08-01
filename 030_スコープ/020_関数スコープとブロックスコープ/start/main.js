function a() {
  let b = 0;
  console.log(b);
}

a();

// varで宣言するとブロックスコープ外でも呼び出せてしまい、意図しない挙動になるので非推奨
// letかconstを使う
if (true) {
  var c = 1;

  var d = function() {
    console.log('d is called');
  }

}

d();
console.log(c);