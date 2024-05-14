# Zhendong

Стек: Next.js (App Router). Для асинхронных запросов к API используем axios. Для работы со store RTK.
Делаем прозрачные actions и reducers, не используем синтаксический сахар который предлагает RTK Query.

Пока нет ссылки на api. Данных храним в mock файлах, предусматривая все свойства запроса. В дальнешем передадим эти файлы backend разработчику, он построит API по структуре данных в этих файлах.

ТЗ:
Макеты: https://www.figma.com/file/PvE9gmLQapSq5VbE9p1KkJ/Zhendong-(%D0%A7%D0%B6%D0%B5%D0%BD%D0%B4%D0%BE%D0%BD)?type=design&node-id=3666-6083&mode=design&t=aPvexOJdZLBqlEqE-0

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
