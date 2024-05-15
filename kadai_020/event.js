// btnというidを持つHTML要素を取得し、定数btnに代入する
const btn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数changeに代入する
const change = document.getElementById('text');

//btnをクリックしたら、定数changeに指定したテキストを出力する
btn.addEventListener('click', () => {
  change.textContent = 'ボタンをクリックしました';
  console.log(change.textContent); //確認用
});

