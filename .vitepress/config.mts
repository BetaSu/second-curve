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
          { text: "什么是第二曲线？", link: "/docs/idea/introduce.md" },
          {
            text: "怎么理解“思想转变”？",
            link: "/docs/idea/thought-change.md",
          },
          { text: "第二曲线发展路径", link: "/docs/idea/path.md" },
          { text: "第二曲线适合谁？", link: "/docs/idea/target-audience.md" },
          { text: "手册的使用说明", link: "/docs/idea/structure.md" },
        ],
      },
      {
        text: "L1阶段 选择细分领域",
        items: [
          { text: "阶段概览", link: "/docs/l1/overview.md" },
          { text: "1-1 确定大体方向", link: "/docs/l1/l1-1.md" },
          { text: "1-2 确定方向下的细分领域", link: "/docs/l1/l1-2.md" },
        ],
      },
      {
        text: "L2阶段 验证可行性",
        items: [{ text: "阶段概览", link: "/docs/l2/overview.md" }],
      },
      {
        text: "Q & A",
        items: [
          { text: "答疑", link: "/docs/qa/qa1.md" },
          // { text: "如何理解“卖自己”？", link: "/docs/idea/course.md" },
          // { text: "如何理解付费？", link: "/docs/idea/pay.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BetaSu/second-curve" },
    ],
  },
});
