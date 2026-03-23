import { createBrowserRouter, Navigate } from "react-router";
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
import { useApp } from "./context/AppContext";

function AdminGuard({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useApp();
  if (!isAuthenticated) return <Navigate to="/signin" replace />;
  if (user?.email !== "admin@mariqits.com") return <Navigate to="/" replace />;
  return <>{children}</>;
}

function CustomerGuard({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated } = useApp();
  if (isAuthenticated && user?.email === "admin@mariqits.com") {
    return <Navigate to="/admin" replace />;
  }
  return <>{children}</>;
}

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
    element: <CustomerGuard><CartPage /></CustomerGuard>,
  },
  {
    path: "/checkout",
    element: <CustomerGuard><CheckoutPage /></CustomerGuard>,
  },
  {
    path: "/order-confirmation/:id",
    element: <CustomerGuard><OrderConfirmationPage /></CustomerGuard>,
  },
  {
    path: "/wishlist",
    element: <CustomerGuard><WishlistPage /></CustomerGuard>,
  },
  {
    path: "/profile",
    element: <CustomerGuard><ProfilePage /></CustomerGuard>,
  },
  {
    path: "/orders",
    element: <CustomerGuard><OrdersPage /></CustomerGuard>,
  },
  {
    path: "/order-details/:id",
    element: <CustomerGuard><OrderDetailsPage /></CustomerGuard>,
  },
  {
    path: "/admin",
    element: <AdminGuard><AdminDashboard /></AdminGuard>,
  },
  {
    path: "/admin/products",
    element: <AdminGuard><AdminProductsPage /></AdminGuard>,
  },
  {
    path: "/admin/orders",
    element: <AdminGuard><AdminOrdersPage /></AdminGuard>,
  },
  {
    path: "/admin/users",
    element: <AdminGuard><AdminUsersPage /></AdminGuard>,
  },
  {
    path: "/admin/inventory",
    element: <AdminGuard><AdminInventoryPage /></AdminGuard>,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
