**サービスURL**  
https://app.alcohol-type.com  
※ロードに時間がかかる場合がございます。  
  
**サービス概要**  
質問に答えていくだけで、回答者のイメージをお酒で表現してくれるサービスです。  
診断タイプは全部で16タイプとなっております。  
どうせならば「人を楽しませられるポートフォリオを」と思い、コンテンツを考えました。  
  
**画面**  
メインの動線となる画面は以下4画面です。  
質問画面⇒診断結果画面⇒診断結果詳細画面⇒すべての診断結果画面へと遷移します。  
  
* 質問画面（トップ）
<kbd><img alt="質問画面" src="https://github.com/champaya/public-alcohol-type/assets/159685650/8079b847-6d83-483a-87a7-cacb9dd168c0"></kbd>
  
* 診断結果画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/14195476-c335-423d-9c55-ddbfb2505c20"></kbd>
  
* 診断結果詳細画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/e8979d30-feba-4c52-9634-82c729f6f2b0"></kbd>
  
* すべての診断結果画面  
<kbd><img src="https://github.com/champaya/public-alcohol-type/assets/159685650/0df8689c-4e31-4f2f-baf8-89effb52905e"></kbd>
  
  
**システム構成**  
コードについては以下の対応となっております。
* フロントエンドソース  
  ⇒ alcohol-type-app
* バックエンドソース  
  ⇒ alcohol-type-api  
  
当サービスはAWS上で動作しており、システム構成図は画像の通りです。  
さらに詳しい情報はサービス内フッター部ボタン「システムについて」をご覧ください。
<img alt="architecture" src="https://github.com/champaya/public-alcohol-type/assets/159685650/a7ca1148-b9d4-4881-9db9-bd87dbb48d44">

  
**使用技術**  
| カテゴリ  | 技術スタック |
| ------------- | ------------- |
| フロントエンド | React, Redux, TypeScript, Material UI, emotion|
| バックエンド  | Spring Boot, JPA, Java  |
| DB  | My SQL  |
| インフラ  | AWS  |
| etc.  | Git, VS Code, Intejij, DBeaver  |

  
**改善点**  
1. レスポンシブデザインの精緻化  
    * タブレット用のブレークポイント追加とレイアウトの調整  
2.  APIのクラスを適切に分割  
    * 別スキーマのAPIでDTOを共有しているなど、適切ではないクラスの使われ方をしているため構造を見直す  
3. サーバレスへの移行  
    * 学習用にEC2をあえて選定したが、lamdaへの移行を検討する  
4. DBの移行  
    * 現状RDBにこだわる必要がないデータ構造であり、コスト最適化のためにNoSQL系への移行を検討する
5. メタデータの整理
    * フロントのメタデータやアイコンの整理をする
