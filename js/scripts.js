document.addEventListener('DOMContentLoaded', () => {
    console.log('自己紹介サイトへようこそ！');
});
// ページが完全に読み込まれたら実行
window.addEventListener('load', function() {
    // ローディング画面を非表示にする
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.display = 'none';
    // メインコンテンツを表示する
    const content = document.getElementById('content');
    content.style.display = 'block';
 });