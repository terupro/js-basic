// 従来の書き方
function func(num) {
  return num + 1;
}
console.log(func(1));

// アロー関数
const arrowFunc1 = (num) => {
  return num + 1;
};
console.log(arrowFunc1(1));

// 処理が１行の場合は以下のように省略できる
const arrowFunc2 = (num) => num + 1;
console.log(arrowFunc2(1));
