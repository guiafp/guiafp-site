import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "pt-BR",
      title: "Guia de Finanças Pessoais",
      description: "Um guia simples e aberto para aprender a cuidar do dinheiro.",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "主题演示",
    //   description: "vuepress-theme-hope 的演示",
    // },
  },

  themeConfig,
});
