# 🐯 Tigre Promo — Landing Page do Grupo do Telegram

Landing page premium de aquisição de membros, focada em um único objetivo: levar o visitante para o grupo do Telegram (`t.me/TigreOfertas`). Todos os CTAs da página apontam para o mesmo link.

## Estrutura

```
tigre-promo/
├── index.html              # HTML principal
├── assets/
│   ├── css/
│   │   └── styles.css      # Design system, layout e animações
│   └── js/
│       └── main.js         # Menu mobile, FAQ, scroll-reveal, back-to-top
└── README.md
```

## Tecnologias

- HTML5 semântico
- CSS3 com variáveis, animações e responsividade (mobile-first)
- JavaScript ES2025 (vanilla, sem frameworks)
- Ícones SVG inline (sprite no `<body>`, sem CDN)
- Google Fonts — Manrope + Inter (CDN)

## Como usar

1. Clone ou faça download do repositório
2. Abra `index.html` no navegador — funciona sem servidor
3. Substitua o link do grupo pelo seu link real do Telegram: procure por
   `https://t.me/TigreOfertas` em `index.html` (aparece no header, hero,
   seções de CTA, footer e na barra fixa mobile) e troque em todas as
   ocorrências.

## Deploy no GitHub Pages

1. Suba os arquivos para um repositório público
2. Vá em **Settings → Pages**
3. Em **Branch**, selecione `main` e pasta `/root`
4. Salve — em poucos minutos o site estará no ar

## Personalização rápida

| O que mudar | Onde |
|---|---|
| Links dos grupos | `index.html` — atributos `href` nos botões |
| Cores | `assets/css/styles.css` — bloco `:root` no topo |
| Textos e copy | `index.html` — seções correspondentes |
| Quantidade de membros | `index.html` — atributos `data-count` nos stats |

## Licença

Uso pessoal — Tigre Promo © 2025
# tigre_prime_final
# tigre_prime_final
