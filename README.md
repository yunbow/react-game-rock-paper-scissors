# じゃんけんゲーム (TypeScript + React + Storybook)

React 18とTypeScript、機能別アーキテクチャ（Feature-based Architecture）で構築されたじゃんけんゲームアプリケーションです。

## デモプレイ
https://yunbow.github.io/react-game-rock-paper-scissors/demo/

## 主要機能
### 操作方法
- **手選択ボタン**: グー、チョキ、パーから選択
- **リセットボタン**: スコアをリセット
- **レスポンシブ対応**: モバイル・デスクトップ両対応

### ゲーム機能
- プレイヤーの手選択（グー、チョキ、パー）
- コンピュータとの対戦
- 勝敗判定と結果表示
- スコア管理（勝ち/負け/引き分け）
- ゲームアニメーション（じゃんけん...ぽん！）
- ゲームリセット機能

## 技術スタック
- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                    # 機能別モジュール
│   └── rock-paper-scissors/     # じゃんけんゲーム機能
│       ├── components/          # 機能固有のコンポーネント
│       │   ├── RockPaperScissorsGame/  # ゲーム全体
│       │   ├── ChoiceButtons/          # 選択ボタン群
│       │   ├── HandDisplay/            # 手の表示
│       │   ├── HandsComparison/        # 対戦表示
│       │   └── ScoreBoard/             # スコアボード
│       ├── useRockPaperScissors.ts     # ゲームロジックフック
│       ├── types.ts                     # 型定義
│       ├── config.ts                    # 設定値
│       └── index.ts                     # 公開API
├── components/                  # 共通UIコンポーネント
│   ├── Button/                  # 汎用ボタン
│   ├── Text/                    # テキスト表示
│   └── HandIcon/                # アイコン表示
├── stories/                     # Storybook用ストーリー
├── App.tsx                      # メインアプリ
└── main.tsx                     # エントリーポイント
```

## アーキテクチャ構成

### 機能別モジュール（Features）
アプリケーションの主要機能を独立したモジュールとして管理します。

**rock-paper-scissors/**
- ゲームコンポーネント、カスタムフック、型定義、設定を一箇所に集約
- 機能の追加・変更・削除が容易
- テストやメンテナンスが簡単

### 共通UIコンポーネント（Components）
複数の機能で再利用される汎用的なUI要素です。
- `Button` - 汎用ボタンコンポーネント
- `Text` - テキスト表示コンポーネント
- `HandIcon` - アイコン表示コンポーネント

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License