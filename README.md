**サービスのURL**  
https://app.alcohol-type.com  
  
**サービス概要**  
質問に答えていくだけで、回答者のイメージをお酒で表現してくれるサービスです。  
診断タイプは全部で16タイプとなっております。  

**画面**
  
**システム構成図**
  
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