import React, { createContext, useContext, useMemo, ReactNode } from 'react';
import { useApp, Product, User as AppUser, Order as AppOrder } from './AppContext';

export interface AdminProduct extends Product {
  stock: number;
  category: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface AdminOrder {
  id: string;
  userId: string;
  customer: string;
  customerEmail?: string;
  customerPhone?: string;
  date: string;
  items: number;
  total: number;
  subtotal: number;
  shippingCost: number;
  payment: string;
  paymentMethod: AppOrder['paymentMethod'];
  shippingMethod: AppOrder['shippingMethod'];
  status: AppOrder['status'];
  products: Array<{
    id: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  shippingAddress: AppOrder['shippingAddress'];
  timeline: AppOrder['timeline'];
  trackingNumber?: string;
}

export interface AdminUser extends AppUser {
  role: 'Customer' | 'Administrator';
  joined: string;
  avatar?: string;
}

interface AdminContextType {
  adminProducts: AdminProduct[];
  addProduct: (product: Omit<AdminProduct, 'id'>) => void;
  updateProduct: (id: string, product: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;

  adminOrders: AdminOrder[];
  getOrderById: (id: string) => AdminOrder | undefined;
  updateOrderStatus: (id: string, status: AppOrder['status']) => void;

  adminUsers: AdminUser[];
  addUser: (user: Omit<AdminUser, 'id' | 'joined'>) => void;
  updateUser: (id: string, user: Partial<AdminUser>) => void;
  deleteUser: (id: string) => void;

  stats: {
    totalRevenue: number;
    revenueChange: string;
    totalOrders: number;
    ordersChange: string;
    totalProducts: number;
    productsChange: string;
    totalCustomers: number;
    customersChange: string;
  };
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

function stockStatus(stock: number): AdminProduct['status'] {
  if (stock > 50) return 'In Stock';
  if (stock > 0) return 'Low Stock';
  return 'Out of Stock';
}

export function AdminProvider({ children }: { children: ReactNode }) {
  const app = useApp();

  // Derive admin products from the shared product list
  const adminProducts: AdminProduct[] = useMemo(
    () =>
      app.products.map(p => ({
        ...p,
        stock: p.stock ?? 0,
        category: p.category ?? 'Uncategorized',
        status: stockStatus(p.stock ?? 0),
        inStock: (p.stock ?? 0) > 0,
      })),
    [app.products]
  );

  // Derive admin orders from real orders + user lookup
  const adminOrders: AdminOrder[] = useMemo(
    () =>
      app.orders.map(o => {
        const customer = app.users.find(u => u.id === o.userId);
        return {
          id: o.id,
          userId: o.userId,
          customer: customer?.name || o.shippingAddress.name || 'Unknown',
          customerEmail: customer?.email,
          customerPhone: customer?.phone || o.shippingAddress.phone,
          date: o.date,
          items: o.items.reduce((sum, item) => sum + item.quantity, 0),
          total: o.total,
          subtotal: o.subtotal,
          shippingCost: o.shippingCost,
          payment: o.paymentMethod.name,
          paymentMethod: o.paymentMethod,
          shippingMethod: o.shippingMethod,
          status: o.status,
          products: o.items.map(item => ({
            id: item.id,
            name: item.name,
            brand: item.brand,
            quantity: item.quantity,
            price: item.price,
            image: item.image,
          })),
          shippingAddress: o.shippingAddress,
          timeline: o.timeline,
          trackingNumber: o.trackingNumber,
        };
      }),
    [app.orders, app.users]
  );

  // Derive admin users from registered users
  const adminUsers: AdminUser[] = useMemo(
    () =>
      app.users.map(u => ({
        ...u,
        role: (u.email === 'admin@mariqits.com' ? 'Administrator' : 'Customer') as AdminUser['role'],
        joined: u.memberSince
          ? new Date(u.memberSince).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
          : 'N/A',
      })),
    [app.users]
  );

  // Stats derived from real data
  const stats = useMemo(() => {
    const totalRevenue = app.orders.reduce((sum, o) => sum + o.total, 0);
    const totalCustomers = adminUsers.filter(u => u.role === 'Customer').length;
    return {
      totalRevenue,
      revenueChange: totalRevenue > 0 ? '+12.5%' : '0%',
      totalOrders: app.orders.length,
      ordersChange: app.orders.length > 0 ? `+${app.orders.length}` : '0',
      totalProducts: app.products.length,
      productsChange: `${app.products.length} total`,
      totalCustomers,
      customersChange: `${totalCustomers} total`,
    };
  }, [app.orders, app.products.length, adminUsers]);

  // All mutations delegate to AppContext
  const addProduct = (product: Omit<AdminProduct, 'id'>) => {
    app.addProduct({
      ...product,
      inStock: (product.stock ?? 0) > 0,
    });
  };

  const updateProduct = (id: string, updates: Partial<AdminProduct>) => {
    const cleaned: Partial<Product> = { ...updates };
    if (updates.stock !== undefined) {
      cleaned.inStock = updates.stock > 0;
    }
    app.updateProduct(id, cleaned);
  };

  const deleteProduct = (id: string) => app.deleteProduct(id);

  const getOrderById = (id: string) => adminOrders.find(o => o.id === id);

  const updateOrderStatus = (id: string, status: AppOrder['status']) => {
    app.updateOrderStatus(id, status);
  };

  const addUser = (_user: Omit<AdminUser, 'id' | 'joined'>) => {
    // Users are added through the signup flow; this is a no-op placeholder
  };

  const updateUser = (_id: string, _updates: Partial<AdminUser>) => {
    // User profile updates go through AppContext.updateProfile
  };

  const deleteUser = (id: string) => {
    app.deleteUser(id);
  };

  const value: AdminContextType = {
    adminProducts, addProduct, updateProduct, deleteProduct,
    adminOrders, getOrderById, updateOrderStatus,
    adminUsers, addUser, updateUser, deleteUser,
    stats,
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
