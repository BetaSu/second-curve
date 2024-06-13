import { defineConfig } from "vitepress";
// import path from "path";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "W.I.N第二曲线手册",
  description: "不内卷、高稳定、有前景的事业新出路",
  appearance: "dark",
  // base: path.resolve(__dirname, "../"),
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "🙋 交个朋友", link: "/docs/about.md" }],
    sidebar: [
      {
        text: "理论篇",
        items: [
          { text: "前言", link: "/index.md" },
          { text: "职场为什么难？", link: "/docs/1-1_why_hard.md" },
          { text: "什么是W.I.N第二曲线？", link: "/docs/1-2_what_is_win.md" },
        ],
      },
      {
        text: "架构篇",
        items: [
          { text: "什么是领域智慧？", link: "/docs/2-1_what_wisdom.md" },
          { text: "领域智慧从何而来？", link: "/docs/2-2_where_wisdom.md" },
          { text: "智慧涌现模型", link: "/docs/2-3_wisdom_framework.md" },
          { text: "落地智慧涌现模型", link: "/docs/2-4_build_wisdom.md" },
          { text: "影响力是什么？", link: "/docs/working.md" },
        ],
      },
      {
        text: "实践篇",
        items: [
          // { text: "影响力是什么？", link: "/docs/3-1_what_influence.md" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/BetaSu/second-curve" },
    ],
  },
  sitemap: {
    hostname: "https://win.iamkasong.com",
  },
  head: [
    ["link", { rel: "icon", href: "/imgs/symbol32.png" }],
    [
      "script",
      {
        async: "",
        src: "https://hm.baidu.com/hm.js?9ea46e81badec8a9a2803229a5543e84",
      },
    ],
    [
      "script",
      {},
      `var _hmt = _hmt || [];  
  `,
    ],
    [
      "script",
      {},
      `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "mrbng43voj");
  `,
    ],
  ],
});
