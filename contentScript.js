document.addEventListener("click", function(event){
  const target = event.target;
  const tagname = target.tagName;
  const href = target.href

  // aタグ かつ Jira以外のリンクの場合
  if (tagname === 'A' && href && !href.includes('comicfesta.atlassian.net')) {
    // 別タブで開く
    window.open(target.href);

    // デフォルトの遷移は止める
    event.preventDefault();
  }
}, false);
