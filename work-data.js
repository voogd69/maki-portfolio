/* ==========================================================
   作品詳細ページの編集は基本ここだけ！
   id は data.js の works の id と揃えてください。
========================================================== */

const WORK_DETAILS = {
  1: {
    title: "SUMMER SALEバナー",
    type: "Banner",
    image: "../images/summer-sale.png",
    overview: "夏のファッションセールを想定したバナーデザインです。",
    target: "トレンド感のあるファッションを楽しむ20〜30代女性",
    purpose: "セール情報を一目で伝え、商品ページへの遷移を促すこと",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "大きなSALE文字で情報の優先順位を明確にしました。",
      "モノトーンにピンクを効かせ、都会的で女性らしい印象にしています。"
    ]
  },
  2: {
    title: "桃スイーツ カフェバナー",
    type: "Banner",
    image: "../images/peach-cafe.jpeg",
    overview: "季節限定の桃スイーツを告知するカフェバナーです。",
    target: "カフェ・韓国風スイーツが好きな女性",
    purpose: "季節感と商品の魅力を伝え、来店につなげること",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "淡いピンクと余白でやさしく上品な雰囲気にまとめました。",
      "商品写真を主役にし、期間・価格も読み取りやすく整理しています。"
    ]
  },
  3: {
    title: "美容液LPバナー",
    type: "LP / Banner",
    image: "../images/lumiere-serum.jpeg",
    overview: "透明感をテーマにしたブライトニング美容液のLPファーストビューです。",
    target: "スキンケアや透明感ケアに関心のある女性",
    purpose: "商品の特徴・価格・ベネフィットをファーストビューで伝えること",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "ブルーと白を基調に清潔感・みずみずしさを表現しました。",
      "訴求ポイントを円形で整理し、視線の流れを作っています。"
    ]
  },
  4: {
    title: "LUMIÈRE Hair Salon",
    type: "Web Site",
    image: "../images/lumiere-hair.jpeg",
    overview: "洗練された大人向けヘアサロンを想定したWebサイトデザインです。",
    target: "上質で落ち着いた美容体験を求める女性",
    purpose: "サロンの世界観と信頼感を伝え、予約につなげること",
    tools: "Figma",
    period: "自主制作",
    points: [
      "白とグレージュを中心に、写真が引き立つ余白設計にしました。",
      "予約導線をヘッダー右上に配置し、行動につながりやすくしています。"
    ]
  },
  5: {
    title: "ひより食堂 バナー",
    type: "Banner",
    image: "../images/hiyori-food.jpeg",
    overview: "定食屋のランチメニューを告知する縦型バナーです。",
    target: "家庭的な定食を求める幅広い年代",
    purpose: "料理のおいしさと親しみやすさを伝えること",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "生成りと深いグリーンで和の温かさを表現しました。",
      "料理写真を大きく使い、価格と営業時間も自然に目に入る構成です。"
    ]
  },
  6: {
    title: "lune. Nail Salon",
    type: "Web Site",
    image: "../images/lune-nail.jpeg",
    overview: "韓国・ワンホン系ネイルサロンを想定したWebサイトデザインです。",
    target: "淡色・ガーリーなネイルが好きな女性",
    purpose: "サロンの雰囲気とデザイン例を伝え、予約につなげること",
    tools: "Figma",
    period: "自主制作",
    points: [
      "ピンクベージュと繊細な装飾で統一感を出しました。",
      "Galleryを大きく設け、施術デザインを比較しやすくしています。"
    ]
  },
  7: {
    title: "ÉCLAT PARFUM",
    type: "Web Site",
    image: "../images/eclat-parfum.jpeg",
    overview: "透明感のある香水ブランドを想定したブランドサイトです。",
    target: "上品でミニマルな香水を好む20〜30代",
    purpose: "ブランドの世界観と商品ラインナップを印象的に伝えること",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "水面・ガラス・光を使い、香りの透明感を視覚化しました。",
      "商品一覧まで世界観を崩さないよう、余白と細い書体で統一しています。"
    ]
  },
  8: {
    title: "Silvia Hair Salon",
    type: "Web Site",
    image: "../images/silvia-hair.jpeg",
    overview: "やわらかく女性らしいヘアサロンを想定したWebサイトです。",
    target: "ナチュラルでフェミニンなヘアスタイルを好む女性",
    purpose: "親しみやすさとサロンの魅力を伝え、予約につなげること",
    tools: "Figma",
    period: "自主制作",
    points: [
      "淡いピンクと白で、やさしく清潔感のある印象にまとめました。",
      "メニュー・ニュース・アクセス・予約まで1ページで確認できる構成です。"
    ]
  },
  9: {
    title: "新築分譲マンション バナー",
    type: "Banner",
    image: "../images/mansion-banner.jpeg",
    overview: "新築分譲マンションの資料請求を目的とした広告バナーです。",
    target: "都市部で新築マンション購入を検討しているファミリー層",
    purpose: "物件の強みと価格を整理し、資料請求・来場予約を促すこと",
    tools: "Figma / Photoshop",
    period: "自主制作",
    points: [
      "ネイビーとゴールドで高級感と信頼感を演出しました。",
      "価格・アクセス・設備をブロック分けし、情報量が多くても読みやすくしています。"
    ]
  }
};
