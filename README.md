# maki. Portfolio — 編集しやすい版

この版は、あとから作品や文章を自分で変えやすいように
**data.js に情報をまとめています。**

## 一番よく触るファイル
`data.js`

### 作品を追加
`works` の中に以下を追加:

{
  id: 10,
  title: "作品名",
  category: "banner",
  image: "images/画像名.jpg",
  type: "Banner",
  detail: "works/work-10.html"
}

### 作品を削除
該当の `{ ... }` を1つ削除するだけ。

### カテゴリ
- web
- lp
- banner
- other

### プロフィール文章
`profile` の中を変更。

### サービス
`services` の中を変更。

### メール・SNS
`contact` の中を変更。

## 画像
`images` フォルダに画像を追加して、
data.js の image 名を書き換えるだけです。

## 注意
profile.jpg は現在入っていないため、
自分の写真を入れる場合は `images/profile.jpg` として保存してください。


## v2：作品詳細ページも1か所で編集
作品詳細の文章は `work-data.js` にまとめました。

例：
- overview：作品概要
- target：ターゲット
- purpose：目的
- tools：使用ツール
- period：制作期間
- points：デザインで工夫した点

詳細ページ本体は `works/detail.html` 1枚だけです。
Worksカードをクリックすると `?id=1` のように作品IDを渡し、
`work-data.js` の該当データを自動表示します。

## コーディングのアイコン修正
`</>` がHTMLタグとして解釈されて消えていたため、
`&lt;/&gt;` として表示されるよう修正済みです。
