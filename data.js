/* ======================================================
   編集は基本ここだけ！
   文章・SNS・作品・サービスをまとめています。
====================================================== */

const SITE_DATA = {
  profile: {
    name: "maki.",
    heroTitle: "Design that connects and inspires.",
    heroSubtitle: "想いをカタチに、心を動かすデザインを。",
    profileImage: "images/profile.jpg",

    aboutLead: "伝えたい想いを、デザインでつなぐ",
    aboutText1:
      "はじめまして、Webデザイナーのmaki.です。ユーザーの目線に立ち、伝えたい想いがしっかりと届くデザインを大切に制作しています。",
    aboutText2:
      "シンプルで洗練されたデザインから、やさしく女性らしいトーンまで幅広く対応可能です。",

    facts: [
      { label: "Name", value: "maki." },
      { label: "From", value: "Nagano, Japan" },
      { label: "Birthday", value: "1998.05.24" },
      { label: "Skill", value: "Design / Coding" },
      { label: "Tool", value: "Figma / Canva / VSCode" }
    ]
  },

  services: [
    {
      icon: "▣",
      title: "Webサイト制作",
      text: "コーポレートサイトやLPなど、目的に合わせたWebサイトを制作します。"
    },
    {
      icon: "▤",
      title: "LP制作",
      text: "商品の魅力やサービスの強みが伝わるランディングページを制作します。"
    },
    {
      icon: "✎",
      title: "バナー・画像制作",
      text: "SNSや広告で使用するバナー画像やサムネイルなどを制作します。"
    },
    {
      icon: "&lt;/&gt;",
      title: "コーディング",
      text: "HTML / CSS を使用し、レスポンシブ対応のコーディングを行います。"
    }
  ],

  categories: [
    { id: "all", label: "All" },
    { id: "web", label: "Web Site" },
    { id: "lp", label: "LP" },
    { id: "banner", label: "Banner" },
    { id: "other", label: "Other" }
  ],

  works: [
    {
      id: 1,
      title: "SUMMER SALEバナー",
      category: "banner",
      image: "images/summer-sale.png",
      type: "Banner",
      detail: "works/detail.html?id=1"
    },
    {
      id: 2,
      title: "桃スイーツ カフェバナー",
      category: "banner",
      image: "images/peach-cafe.jpeg",
      type: "Banner",
      detail: "works/detail.html?id=2"
    },
    {
      id: 3,
      title: "美容液LPバナー",
      category: "lp",
      image: "images/lumiere-serum.jpeg",
      type: "LP / Banner",
      detail: "works/detail.html?id=3"
    },
    {
      id: 4,
      title: "LUMIÈRE Hair Salon",
      category: "web",
      image: "images/lumiere-hair.jpeg",
      type: "Web Site",
      detail: "works/detail.html?id=4"
    },
    {
      id: 5,
      title: "ひより食堂 バナー",
      category: "banner",
      image: "images/hiyori-food.jpeg",
      type: "Banner",
      detail: "works/detail.html?id=5"
    },
    {
      id: 6,
      title: "lune. Nail Salon",
      category: "web",
      image: "images/lune-nail.jpeg",
      type: "Web Site",
      detail: "works/detail.html?id=6"
    },
    {
      id: 7,
      title: "ÉCLAT PARFUM",
      category: "web",
      image: "images/eclat-parfum.jpeg",
      type: "Web Site",
      detail: "works/detail.html?id=7"
    },
    {
      id: 8,
      title: "Silvia Hair Salon",
      category: "web",
      image: "images/silvia-hair.jpeg",
      type: "Web Site",
      detail: "works/detail.html?id=8"
    },
    {
      id: 9,
      title: "新築分譲マンション バナー",
      category: "banner",
      image: "images/mansion-banner.jpeg",
      type: "Banner",
      detail: "works/detail.html?id=9"
    }
  ],

  contact: {
    text: "お仕事のご依頼・ご相談など、お気軽にお問い合わせください。",
    email: "voogd8@gmail.com",
    instagram: "https://www.instagram.com/madebymaki_/",
    x: "https://x.com/madebymaki_"
  }
};
