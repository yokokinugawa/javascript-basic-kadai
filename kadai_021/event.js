// btnとtextというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

    setTimeout(() => {
// 作成したtext要素にテキストを変更する
text.textContent = 'ボタンをクリックしました';
}, 2000);
});