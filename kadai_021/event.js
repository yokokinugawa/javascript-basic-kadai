const btn = document.getElementById('btn');
const text = document.getElementById('text');

// 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
 setTimeout(() => {
    btn.addEventListener('click', () => {
        text.textContent = "ボタンをクリックしました";});
  }, 2000);

  
