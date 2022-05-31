import { defineSidebarConfig } from "vuepress-theme-hope";

export const pt = defineSidebarConfig({
  "/": [
    // "",
    // "slide",
    {
      icon: "study",
      text: "O Guia",
      prefix: "guia/",
      link:"guia/",
      children: [
        {
          text: "Início",
          // link: "inicio/",
          prefix: "inicio/",
          icon: "style",
          collapsable: true,
          children: "structure"
        },
        {
          text: "Sair das Dívidas",
          // link: "sair-das-dividas/",
          prefix: "sair-das-dividas/",
          icon: "free",
          collapsable: true,
          children: [
            {
              text: "Negativados e Endividados: como limpar meu nome?",
              prefix: "negativado-e-endividado-como-limpar-meu-nome/",
              // link: "introducao/",
              icon: "free",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Empréstimos e Gestão das Dívidas",
              prefix: "emprestimos-e-gestao-das-dividas/",
              // link: "conceitos-fundamentais/",
              icon: "free",
              collapsable: true,
              children: "structure"
            }
          ]
        },
        {
          text: "Orçamento e Controle de Gastos",
          // link: "orcamento/",
          prefix: "orcamento/",
          icon: "table",
          collapsable: true,
          children: "structure"
        },
        {
          text: "Proteção",
          link: "inicio/2-emergencias-como-comprar-tranquilidade.html",
          // prefix: "protecao/",
          icon: "safe",
          // collapsable: true,
          // children: "structure"
        },
        {
          text: "Investimentos",
          // link: "investimentos/",
          prefix: "investimentos/",
          icon: "update",
          collapsable: true,
          children: [
            {
              text: "Introdução",
              prefix: "introducao/",
              // link: "introducao/",
              icon: "update",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Conceitos Fundamentais",
              prefix: "conceitos-fundamentais/",
              // link: "conceitos-fundamentais/",
              icon: "update",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Independência Financeira",
              prefix: "independencia-financeira/",
              // link: "independencia-financeira/",
              icon: "update",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Renda Variável - Ações",
              prefix: "renda-variavel-acoes/",
              // link: "renda-variavel-acoes/",
              icon: "update",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Renda Fixa e Tesouro Direto",
              prefix: "renda-fixa/",
              // link: "renda-fixa/",
              icon: "update",
              collapsable: true,
              children: "structure"
            },
            {
              text: "Criptomoedas",
              prefix: "cripto/",
              // link: "cripto/",
              icon: "update",
              collapsable: true,
              children: "structure"
            }
          ]
        },
        {
          text: "Ferramentas e Produtividade",
          prefix: "ferramentas-e-produtividade/",
          icon:"operate",
          collapsable: true,
          children: "structure"
        },
        {
          text: "Ganhar Dinheiro",
          prefix: "ganhar-dinheiro/",
          icon:"launch",
          collapsable: true,
          children: "structure"
        },
        {
          text: "Impulsionar um Negócio",
          prefix: "impulsionar-negocio/",
          icon:"resize",
          collapsable: true,
          children: "structure"
        },
        {
          text: "Finanças Comportamentais",
          link: "financas-comportamentais/",
          prefix: "financas-comportamentais/",
          icon:"creative",
          collapsable: true,
          children: "structure"
        }    
      ],
    },
    // {
    //   text: "Blog",
    //   link: "blog/"
    //   // icon: "note",
    // //   prefix: "blog/",
    // //   children: [
    // //     {
    // //       text: "Articles 1-4",
    // //       icon: "note",
    // //       collapsable: true,
    // //       prefix: "article/",
    // //       children: ["article1", "article2", "article3", "article4"],
    // //     },
    // //     {
    // //       text: "Articles 5-12",
    // //       icon: "note",
    // //       children: [
    // //         {
    // //           text: "Articles 5-8",
    // //           icon: "note",
    // //           collapsable: true,
    // //           prefix: "article/",
    // //           children: ["article5", "article6", "article7", "article8"],
    // //         },
    // //         {
    // //           text: "Articles 9-12",
    // //           icon: "note",
    // //           children: ["article9", "article10", "article11", "article12"],
    // //         },
    // //       ],
    // //     },
    // //   ],
    // },
  ],
});
