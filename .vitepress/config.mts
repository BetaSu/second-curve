import { defineConfig } from "vitepress";
// import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "W.I.N事业工作法",
  description: "反内卷、高稳定、有前景的职业发展路径",
  appearance: "dark",
  // base: path.resolve(__dirname, "../"),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "🏠 首页", link: "/" },
      { text: "🙋 加入我们", link: "/docs/about.md" },
    ],
    sidebar: [
      {
        text: "前言",
        items: [
          { text: "职场为什么难？", link: "/docs/1-1_why_hard.md" },
          { text: "如何另辟蹊径？", link: "/docs/1-2_how_new_way.md" },
          { text: "什么是W.I.N事业工作法？", link: "/docs/1-3_what_is_win.md" },
        ],
      },
      {
        text: "Wisdom 智慧",
        items: [
          { text: "什么是领域智慧？", link: "/docs/2-1_what_wisdom.md" },
          { text: "领域智慧从何而来？", link: "/docs/2-2_where_wisdom.md" },
          { text: "搭建智慧涌现模型", link: "/docs/2-3_build_wisdom.md" },
        ],
      },
      {
        text: "Influence 影响力",
        items: [
          { text: "影响力的本质", link: "/docs/working.md" },
          // { text: "常见的影响力工具", link: "/docs/working.md" },
        ],
      },
      {
        text: "Network 圈层",
        items: [
          // { text: "什么是圈层？", link: "/docs/working.md" },
          // { text: "常见的圈层建设", link: "/docs/working.md" },
        ],
      },
      {
        text: "WIN事业工作法",
        items: [
          // { text: "以赚取收益为目标", link: "/docs/working.md" },
          // { text: "以职场晋升为目标", link: "/docs/working.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BetaSu/second-curve" },
    ],
  },
  head: [
    ["link", { rel: "icon", href: "/imgs/symbol32.png" }],
    [
      "script",
      {
        async: "",
        src: "https://hm.baidu.com/hm.js?ab1409dcf9087d7086bb89d6cc5657af",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];  
  `,
    ],
  ],
});
