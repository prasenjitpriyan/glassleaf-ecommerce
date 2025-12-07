glassleaf-ecommerce/
│
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ ├── (store)/
│ │ ├── products/
│ │ │ ├── page.tsx
│ │ │ └── [slug]/page.tsx
│ │ ├── cart/
│ │ │ └── page.tsx
│ │ └── checkout/
│ │ └── page.tsx
│ ├── api/
│ │ ├── razorpay/
│ │ │ ├── create-order/route.ts
│ │ │ └── verify/route.ts
│ │ ├── sanity/
│ │ │ └── revalidate/route.ts
│ │ └── webhooks/
│ │ └── razorpay/route.ts
│ └── (components)/
│ ├── ui/
│ ├── product-card.tsx
│ └── navbar.tsx
│
├── sanity/
│ ├── schemas/
│ │ ├── product.ts
│ │ └── variant.ts
│ └── sanity.config.ts
│
├── lib/
│ ├── sanity.client.ts
│ ├── image.ts
│ ├── razorpay.ts
│ ├── validators.ts (Zod)
│ └── utils.ts
│
├── public/
│ ├── logo.svg
│ └── favicon.ico
│
├── styles/
│ └── globals.css
│
├── ecosystem.config.js (PM2)
├── nginx.conf.example
├── .env.example
├── package.json
└── README.md
