# Gas4WebApplication002

## プロジェクトについて
Google Apps Scriptを用いて、簡易ログインを具備したWebアプリケーションを構築する。  
[前回のアプリケーション](https://github.com/kotakahashi-4u/Gas4WebApplication001) ではピュアなHTMLのみで構成したため、そこにBootstrapとGoogleフォントを用いて美しくする。

## 事前準備
特になし

## 使い方
1. スタンドアロン型としてGASを開く。  
2. GASにmain.gs、login.htmlおよびlogin_boot.htmlの内容をコピーする。
   なお、main.gsはスクリプトとして、login.htmlおよびlogin_boot.htmlはHTMLとして追加すること。
3. プロジェクトのスクリプトプロパティとして、以下を追加する。  
   キー：URL_WEBAPP  
   値：デプロイしたURL  
   ※スクリプトプロパティ設定イメージ  
     <img src="http://drive.google.com/uc?export=view&id=1wYobz_Ya5iemO6WwitoQjzojAlPJZmlh" width="400">
4. プロジェクトをデプロイしてWebアプリケーションにアクセスする。
   * ピュアなHTMLの表示：デプロイURLをそのままクリック
   * 美しいHTMLの表示：デプロイURL + "?boot=1" を付加してアクセス
