
const addBtn = document.getElementById('btn');
const parentList = document.getElementById('text');


addBtn.addEventListener('click', () => {
    
  // li要素を新しく作成する
  const childList = document.createElement('text');
  childList.textContent = 'ボタンをクリックしました';

  // parentListの子要素全てを削除する
  while (parentList.firstChild) {
    parentList.removeChild(parentList.firstChild);
  }

  // childListを追加する
  parentList.appendChild(childList);
});