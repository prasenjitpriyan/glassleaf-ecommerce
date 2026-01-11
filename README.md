# GlassLeaf Tea - Premium eCommerce Platform

GlassLeaf Tea is a modern, full-stack eCommerce application designed for selling premium organic tea. Built with Next.js, Sanity CMS, and Tailwind CSS, it features a fluid user interface with engaging animations and a robust backend for managing products, orders, and payments.

## 🚀 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Payments**: [Razorpay](https://razorpay.com/)
- **Form Validation**: [Zod](https://zod.dev/)

## ✨ Features

- **Premium UI/UX**: Responsive design with liquid animations and smooth page transitions.
- **Dynamic Product Catalog**: Manage products, variants, and categories via Sanity.
- **Shopping Cart**: Client-side cart management with persistent storage.
- **Secure Checkout**: Integration with Razorpay for seamless payment processing.
- **Admin Dashboard**: Built-in Sanity Studio to manage:
  - Products & Inventory
  - Orders (Status tracking)
  - Payments (Transaction details)
- **Order Processing**: Automated backend verification and order creation in CMS upon payment success.

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1.  **Clone the repository**:

    ```bash
    git clone https://github.com/prasenjitpriyan/glassleaf-ecommerce.git
    cd glassleaf-ecommerce
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file in the root directory and add the following keys:

    ```env
    # Sanity Configuration
    NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id"
    NEXT_PUBLIC_SANITY_DATASET="production"
    SANITY_API_TOKEN="your_write_token" # Required for Admin & Order creation

    # Razorpay Configuration
    NEXT_PUBLIC_RAZORPAY_KEY_ID="your_razorpay_key_id"
    RAZORPAY_KEY_SECRET="your_razorpay_secret"

    # Authentication (NextAuth)
    AUTH_SECRET="your_auth_secret"
    ```

4.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Project Structure

```
glassleaf-ecommerce/
├── app/
│   ├── (website)/      # Public facing pages (Home, Shop, Cart)
│   ├── api/            # Backend API routes (Razorpay, Webhooks)
│   └── studio/         # Sanity Studio Admin route
├── components/         # Reusable UI components
├── lib/                # Utilities, clients (Sanity, Razorpay), stores
├── public/             # Static assets
├── sanity/             # Sanity configuration and schemas
│   └── schemas/        # Data models (Product, Order, Payment)
└── styles/             # Global styles
```

## 👑 Admin Access (Sanity Studio)

Access the CMS dashboard to manage content and orders at:
[http://localhost:3000/studio](http://localhost:3000/studio)

### Managing Orders

1.  Navigate to the **Orders** section in the Studio sidebar.
2.  View customer details, items purchased, and shipping information.
3.  Update status (e.g., from "Pending" to "Shipped").

## 📄 License

This project is licensed under the MIT License.
