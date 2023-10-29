 // HTML要素を取得
 const btn = document.getElementById('btn');
 const text = document.getElementById('text');
 
 // HTML要素がクリックされたときにイベント処理を実行する
 btn.addEventListener('click', () => {
    const text2 = document.createElement('h2');

  text.textContent = 'ボタンをクリックしました';

 
  });