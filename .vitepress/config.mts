import { defineConfig } from "vitepress";
// import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "程序员第二曲线手册",
  description: "",
  appearance: "dark",
  // base: path.resolve(__dirname, "../"),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏠 首页", link: "/" },
      { text: "👬 加入社区", link: "/docs/about.md" },
    ],
    sidebar: [
      {
        text: "前言",
        items: [
          { text: "什么是第二曲线？", link: "/docs/preface/introduce.md" },
          { text: "未来的发展趋势", link: "/docs/preface/future.md" },
          { text: "第二曲线的特点", link: "/docs/preface/feature.md" },
          { text: "手册的使用说明", link: "/docs/preface/structure.md" },
        ],
      },
      {
        text: "理念篇",
        items: [
          { text: "我该如何理解流量？", link: "/docs/idea/flow.md" },
          { text: "我该如何理解赚钱？", link: "/docs/idea/money.md" },
        ],
      },
      {
        text: "实践篇",
        items: [{ text: "L1 赛道选择", link: "/docs/practice/working.md" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BetaSu/second-curve" },
    ],
  },
});
