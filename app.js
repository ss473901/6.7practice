//ドルから円へ換算するアプリです

// prompt()を利用してドルを入力できるようにする
// 関数を利用した換算処理を作る
// 繰り返し何度も入力できる
// 「キャンセル」をクリックするとプログラムは終了
// 何も入力せずに「OK」ボタンをクリックしても終了すること
// 換算結果は「◯円です」のように出力する
// 1ドル108円で計算する


const Dollar = 108;
const getDollarToYen = (number) => {
  return number * Dollar;
}


while(true){
  const money = prompt('ドルから円に換算します');

  if(money){

    console.log(getDollarToYen(money) + '円です');

  } else break;
}




const Dollar = 108;
const getDollarToYen = (number) => {
  return number * Dollar;
}

while(true){
  const money = prompt('ドルから円に換算します');
  
}