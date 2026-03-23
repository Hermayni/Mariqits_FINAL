import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import WishlistPage from "./pages/WishlistPage";
import ProfilePage from "./pages/ProfilePage";
import OrdersPage from "./pages/OrdersPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminInventoryPage from "./pages/admin/AdminInventoryPage";
import SearchResultsPage from "./pages/SearchResultsPage";
import ProductsPage from "./pages/ProductsPage";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/search",
    Component: SearchResultsPage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/signin",
    Component: SignInPage,
  },
  {
    path: "/signup",
    Component: SignUpPage,
  },
  {
    path: "/product/:id",
    Component: ProductDetailsPage,
  },
  {
    path: "/cart",
    Component: CartPage,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
  {
    path: "/order-confirmation/:id",
    Component: OrderConfirmationPage,
  },
  {
    path: "/wishlist",
    Component: WishlistPage,
  },
  {
    path: "/profile",
    Component: ProfilePage,
  },
  {
    path: "/orders",
    Component: OrdersPage,
  },
  {
    path: "/order-details/:id",
    Component: OrderDetailsPage,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
  {
    path: "/admin/products",
    Component: AdminProductsPage,
  },
  {
    path: "/admin/orders",
    Component: AdminOrdersPage,
  },
  {
    path: "/admin/users",
    Component: AdminUsersPage,
  },
  {
    path: "/admin/inventory",
    Component: AdminInventoryPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);