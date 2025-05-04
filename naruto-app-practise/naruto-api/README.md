# NARUTO キャラクター API

このプロジェクトは、NARUTO のキャラクター情報を提供する RESTful API です。

## 必要要件

- Node.js (v18.8.0 以上推奨)
- npm (Node Package Manager)

## セットアップ方法

1. リポジトリをクローンまたはダウンロードした後、プロジェクトディレクトリに移動します：

   ```bash
   cd naruto-app-api
   ```

2. 必要なパッケージをインストールします：

   ```bash
   npm install
   ```

3. サーバーを起動します：
   ```bash
   npm run dev
   ```

サーバーが正常に起動すると、以下のメッセージが表示されます：

```
Server is running on port 80
```

## API の使用方法

### キャラクター一覧の取得

**エンドポイント**: `GET /character`

**クエリパラメータ**:

- `page`: ページ番号（デフォルト: 1）
- `limit`: 1 ページあたりの表示件数（デフォルト: 10）

**使用例**:

1. 基本的な使用方法（最初の 10 件を取得）：

   ```
   GET http://localhost:3000/character
   ```

2. ページネーションの指定：
   ```
   GET http://localhost:3000/character?page=2&limit=20
   ```

**レスポンス例**:

```json
{
  "characters": [
    {
      "id": 1,
      "name": "キャラクター名",
      ...
    },
    ...
  ]
}
```

## 注意事項

- サーバーはデフォルトでポート 80 で起動します
- 環境変数`PORT`を設定することで、ポート番号を変更できます
- CORS は有効化されているため、フロントエンドアプリケーションから直接アクセスできます
