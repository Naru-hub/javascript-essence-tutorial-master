function hello(name = 'Tom') {
    // name = name || 'Tom';
  console.log('Hello ' + name);
}

hello()

let name;

// nameがfalsyの場合はhello()は実行されない
  name && hello(name);
