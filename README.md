<div align="center">
  <img src="src/assets/8c6df8181bc3056efe2b6a0ae06f0995d03c6188.png" alt="Mariqits Logo" width="120" />

  # Mariqits

  **E-Commerce Beauty Store**

  A full-stack e-commerce web application for beauty and skincare products, built with React, TypeScript, and Vite. Features a customer-facing storefront with product browsing, cart management, wishlists, and online checkout via PayMongo, plus a complete admin dashboard for managing products, orders, users, and inventory.

  ![React](https://img.shields.io/badge/React-18.3-ff1a75?style=flat-square&logo=react&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5-ff66b2?style=flat-square&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6.3-ff1a75?style=flat-square&logo=vite&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-ff66b2?style=flat-square&logo=tailwindcss&logoColor=white)
  ![PayMongo](https://img.shields.io/badge/PayMongo-Payments-ff1a75?style=flat-square)
  ![Vercel](https://img.shields.io/badge/Vercel-Deployed-ff66b2?style=flat-square&logo=vercel&logoColor=white)
</div>

---

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| ![#ff1a75](https://img.shields.io/badge/-%23ff1a75-ff1a75?style=flat-square) | `#ff1a75` | Primary — buttons, links, accents |
| ![#e01666](https://img.shields.io/badge/-%23e01666-e01666?style=flat-square) | `#e01666` | Primary hover state |
| ![#ff66b2](https://img.shields.io/badge/-%23ff66b2-ff66b2?style=flat-square) | `#ff66b2` | Secondary — borders, highlights |
| ![#fffbf0](https://img.shields.io/badge/-%23fffbf0-fffbf0?style=flat-square) | `#fffbf0` | Background — warm cream |
| ![#2d2d2d](https://img.shields.io/badge/-%232d2d2d-2d2d2d?style=flat-square) | `#2d2d2d` | Text — primary dark |
| ![#4a5565](https://img.shields.io/badge/-%234a5565-4a5565?style=flat-square) | `#4a5565` | Text — secondary muted |

---

## Table of Contents

- [Brand Colors](#brand-colors)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Payment Integration (PayMongo)](#payment-integration-paymongo)
- [Routing](#routing)
- [State Management](#state-management)
- [Admin Dashboard](#admin-dashboard)
- [API Serverless Functions](#api-serverless-functions)
- [Deployment](#deployment)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | ![React](https://img.shields.io/badge/React_18-ff1a75?style=flat-square&logo=react&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-ff66b2?style=flat-square&logo=typescript&logoColor=white) |
| Build Tool | ![Vite](https://img.shields.io/badge/Vite_6-ff1a75?style=flat-square&logo=vite&logoColor=white) |
| Styling | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_4-ff66b2?style=flat-square&logo=tailwindcss&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-ff1a75?style=flat-square&logo=mui&logoColor=white) |
| UI Components | Radix UI, shadcn-style primitives, Lucide icons |
| Routing | React Router 7 |
| State | React Context API + localStorage persistence |
| Charts | Recharts |
| Animations | Motion (Framer Motion) |
| Forms | React Hook Form |
| Payment Gateway | ![PayMongo](https://img.shields.io/badge/PayMongo-ff1a75?style=flat-square) |
| Deployment | ![Vercel](https://img.shields.io/badge/Vercel-ff66b2?style=flat-square&logo=vercel&logoColor=white) |
| Analytics | Vercel Analytics |

## Project Structure

```
Mariqits_FINAL/
├── api/                          # Vercel serverless functions (production)
│   ├── create-checkout.ts        # POST — creates PayMongo checkout session
│   ├── get-session.ts            # GET  — retrieves payment session status
│   ├── refund.ts                 # POST — initiates a PayMongo refund
│   └── webhook.ts                # POST — receives PayMongo webhook events
├── src/
│   ├── main.tsx                  # React entry point
│   ├── app/
│   │   ├── App.tsx               # Provider stack + router + analytics
│   │   ├── routes.tsx            # Route table with auth guards
│   │   ├── context/
│   │   │   ├── AppContext.tsx     # Core app state (auth, products, cart, orders)
│   │   │   ├── AdminContext.tsx   # Admin-shaped views over app state
│   │   │   └── NotificationContext.tsx  # Toast notifications with audio
│   │   ├── pages/
│   │   │   ├── Home.tsx              # Landing page with hero + product grids
│   │   │   ├── ProductsPage.tsx      # Full product catalog
│   │   │   ├── ProductDetailsPage.tsx # Single product with gallery + shades
│   │   │   ├── CartPage.tsx          # Shopping cart
│   │   │   ├── CheckoutPage.tsx      # Shipping + PayMongo payment
│   │   │   ├── OrderConfirmationPage.tsx  # Post-payment verification
│   │   │   ├── WishlistPage.tsx      # Saved items
│   │   │   ├── OrdersPage.tsx        # Customer order history
│   │   │   ├── OrderDetailsPage.tsx  # Customer order detail + timeline
│   │   │   ├── ProfilePage.tsx       # Account settings + password + privacy
│   │   │   ├── SearchResultsPage.tsx # Search results
│   │   │   ├── SignInPage.tsx        # Login
│   │   │   ├── SignUpPage.tsx        # Registration
│   │   │   ├── NotFound.tsx          # 404 page
│   │   │   └── admin/
│   │   │       ├── AdminDashboard.tsx      # KPIs, recent orders, top products
│   │   │       ├── AdminProductsPage.tsx   # Product CRUD + modals
│   │   │       ├── AdminOrdersPage.tsx     # Order list with payment status
│   │   │       ├── AdminOrderDetailsPage.tsx # Order detail + refund
│   │   │       ├── AdminUsersPage.tsx      # User management
│   │   │       └── AdminInventoryPage.tsx  # Stock management
│   │   ├── components/
│   │   │   ├── Layout.tsx            # Page wrapper (header + footer)
│   │   │   ├── Header.tsx            # Nav, search, cart/wishlist badges
│   │   │   ├── Footer.tsx            # Site footer
│   │   │   ├── ProductCard.tsx       # Product grid card
│   │   │   ├── NotificationToast.tsx # Toast notification stack
│   │   │   ├── admin/               # AdminLayout, AdminSidebar, AddProductModal
│   │   │   ├── figma/               # ImageWithFallback helper
│   │   │   └── ui/                  # Shared primitives (button, dialog, table, etc.)
│   │   ├── data/
│   │   │   └── products.ts          # Seed catalog (30 beauty products)
│   │   └── utils/
│   │       └── paymongo.ts          # Currency + payment method helpers
│   ├── assets/                   # Product images (Figma exports)
│   ├── imports/                  # Figma-exported SVG/TSX modules
│   └── styles/                   # CSS: index, tailwind, theme, fonts
├── vite.config.ts                # Vite config + PayMongo dev middleware
├── vercel.json                   # SPA rewrites for Vercel deployment
├── package.json
├── .env.local                    # Environment variables (gitignored)
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app starts at **http://localhost:5173/**. The Vite dev server includes built-in middleware that handles `/api/*` routes locally, so PayMongo payment works without any additional setup beyond the environment variables.

### Production Build

```bash
npm run build
```

Output is written to `dist/`.

## Environment Variables

Create a `.env.local` file in the project root with the following variables:

| Variable | Used By | Description |
|----------|---------|-------------|
| `PAYMONGO_SECRET_KEY` | Server (Vite middleware + Vercel functions) | PayMongo secret API key |
| `VITE_PAYMONGO_PUBLIC_KEY` | Client (available via `import.meta.env`) | PayMongo public API key |

The secret key is loaded server-side by `vite.config.ts` via `loadEnv()` during development and by `process.env` in the Vercel serverless functions during production. It is never exposed to the browser.

## Payment Integration (PayMongo)

Mariqits uses PayMongo as its payment gateway. The checkout flow works as follows:

```
Customer clicks "Pay Now"
        |
        v
Frontend creates local order (status: pending)
        |
        v
POST /api/create-checkout
  -> Sends billing info + line items (in centavos) to PayMongo
  <- Returns checkout_url + session_id
        |
        v
Browser redirects to PayMongo hosted checkout page
  -> Customer selects payment method and completes payment
        |
        v
PayMongo redirects back to /order-confirmation?session_id=xxx
        |
        v
GET /api/get-session?session_id=xxx
  -> Fetches payment status from PayMongo
  <- Returns { paymentStatus, paymentMethod, referenceId, amount }
        |
        v
If paid: update order to "paid", clear cart, show success
If failed: update order to "failed", show retry option
```

### Supported Payment Methods

- QR Ph (production)
- GCash, Credit/Debit Card, PayMaya, Online Banking (development)

### Key Details

- All amounts sent to PayMongo are in **centavos** (PHP * 100)
- The `success_url` uses PayMongo's `{CHECKOUT_SESSION_ID}` placeholder, which PayMongo replaces with the actual session ID
- The cart is only cleared after payment is confirmed as "paid" on the OrderConfirmationPage
- Order payment status, method, transaction reference ID, and payment timestamp are stored on the order and visible in the admin dashboard

## Routing

### Public Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/products` | Product catalog |
| `/product/:id` | Product details |
| `/search` | Search results (reads `?q=` param) |
| `/signin` | Sign in |
| `/signup` | Sign up |
| `/order-confirmation` | Payment confirmation (reads `?session_id=` param) |
| `*` | 404 Not Found |

### Customer Routes (requires authentication)

| Path | Page |
|------|------|
| `/cart` | Shopping cart |
| `/checkout` | Checkout + payment |
| `/wishlist` | Wishlist |
| `/profile` | Account settings |
| `/orders` | Order history |
| `/order-details/:id` | Order detail + timeline |

### Admin Routes (requires admin email: `admin@mariqits.com`)

| Path | Page |
|------|------|
| `/admin` | Dashboard |
| `/admin/products` | Product management |
| `/admin/orders` | Order management |
| `/admin/orders/:id` | Order detail + refund |
| `/admin/users` | User management |
| `/admin/inventory` | Inventory / stock management |

## State Management

The app uses React Context API with localStorage persistence. Three context providers wrap the application:

### AppContext (core state)

- **Authentication**: Login, signup, logout, profile updates, password changes, privacy settings. User session persisted in `localStorage` under `mariqits_user`.
- **Products**: Seeded from `data/products.ts`, persisted in `mariqits_products`. Full CRUD + search.
- **Cart**: In-memory (cleared on logout). Add, remove, update quantity, clear.
- **Wishlist**: In-memory (cleared on logout). Add, remove, toggle.
- **Orders**: Persisted in `mariqits_orders`. Create, update, status changes with timeline tracking. Payment fields: `paymentStatus`, `paymongoPaymentMethod`, `transactionReferenceId`, `checkoutSessionId`, `paidAt`.
- **Reviews**: In-memory (not persisted).

### AdminContext (derived views)

Provides admin-shaped data derived from AppContext:

- `adminProducts` — products with computed stock status (In Stock / Low Stock / Out of Stock)
- `adminOrders` — orders with denormalized customer info and payment details
- `adminUsers` — users with role assignment (admin vs customer)
- `stats` — dashboard KPIs (revenue, order count, product count, customer count)

### NotificationContext

Toast notification system with types (`cart`, `wishlist`, `order`), auto-dismiss after 3 seconds, and Web Audio chimes.

## Admin Dashboard

The admin panel is accessible at `/admin` when logged in with the admin account (`admin@mariqits.com`). It provides:

- **Dashboard**: Revenue overview, recent orders, top products, quick action links
- **Products**: Add/edit/delete products with image uploads, shade management, and stock levels
- **Orders**: View all orders with payment status badges (Pending/Paid/Failed/Refunded), filter by status, view details, and issue refunds via PayMongo
- **Users**: View registered users, search, delete accounts
- **Inventory**: Stock-focused view with inline editing and low-stock alerts

### Refund Flow

From the Admin Order Details page, administrators can issue refunds for paid orders:

1. Click "Refund" on a paid order
2. Confirm in the modal dialog
3. The system calls `POST /api/refund` with the PayMongo payment ID and amount
4. On success, the order's payment status updates to "refunded"

## API Serverless Functions

Located in the `api/` directory, these run as Vercel Serverless Functions in production. During development, equivalent logic runs inside the Vite dev server middleware (configured in `vite.config.ts`).

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/create-checkout` | POST | Creates a PayMongo checkout session. Body: `{ billing, line_items, orderId }`. Returns `{ checkout_url, session_id }`. |
| `/api/get-session` | GET | Retrieves payment status. Query: `?session_id=xxx`. Returns `{ paymentStatus, paymentMethod, referenceId, amount }`. |
| `/api/refund` | POST | Initiates a refund. Body: `{ payment_id, amount, reason }`. Returns `{ success, refund }`. |
| `/api/webhook` | POST | Receives PayMongo webhook events (`payment.paid`, `payment.failed`, `payment.refunded`). Returns `{ received: true }`. |

All endpoints use HTTP Basic Auth with the PayMongo secret key. Amounts are in centavos.

## Deployment

The project is configured for deployment on Vercel:

1. Push to the connected GitHub repository
2. Vercel automatically builds with `npm run build`
3. The `api/` directory is deployed as serverless functions
4. `vercel.json` handles SPA routing (all non-API paths serve `index.html`)
5. Set `PAYMONGO_SECRET_KEY` and `VITE_PAYMONGO_PUBLIC_KEY` in Vercel project environment variables

### Default Accounts

| Role | Email | Password |
|------|-------|----------|
| Admin | `admin@mariqits.com` | `admin123` |
| Customer | `maria@example.com` | `password123` |
