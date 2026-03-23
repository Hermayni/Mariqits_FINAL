import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, User as AppUser, Order as AppOrder } from './AppContext';

// Admin-specific types
export interface AdminProduct extends Product {
  stock: number;
  category: string;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface AdminOrder extends AppOrder {
  customer: string;
  customerEmail?: string;
  customerPhone?: string;
  items: number;
  payment: string;
  products: Array<{
    id: string;
    name: string;
    brand: string;
    quantity: number;
    price: number;
    image: string;
  }>;
}

export interface AdminUser extends AppUser {
  role: 'Customer' | 'Administrator';
  joined: string;
  avatar?: string;
}

interface AdminContextType {
  // Products - synced with main app
  adminProducts: AdminProduct[];
  addProduct: (product: Omit<AdminProduct, 'id'>) => void;
  updateProduct: (id: string, product: Partial<AdminProduct>) => void;
  deleteProduct: (id: string) => void;
  
  // Orders
  adminOrders: AdminOrder[];
  getOrderById: (id: string) => AdminOrder | undefined;
  updateOrderStatus: (id: string, status: AdminOrder['status']) => void;
  
  // Users
  adminUsers: AdminUser[];
  addUser: (user: Omit<AdminUser, 'id' | 'joined'>) => void;
  updateUser: (id: string, user: Partial<AdminUser>) => void;
  deleteUser: (id: string) => void;
  
  // Stats
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

// Shared products database - synced with AppContext
const productsDatabase: AdminProduct[] = [
  {
    id: '1',
    name: 'CloudBeauty Makeup Lip Gloss',
    brand: 'CloudBeauty',
    price: 199,
    stock: 78,
    rating: 4.9,
    reviews: 256,
    category: 'Makeup',
    status: 'In Stock',
    description: 'Long-lasting, ultra-glossy lip gloss with moisturizing formula',
    image: 'figma:asset/f2b98f90484bfeaf924e2e391f99994016e388dc.png',
    inStock: true
  },
  {
    id: '2',
    name: 'Popique All-Over Multiuse Cream Palette',
    brand: 'Popique',
    price: 499,
    stock: 34,
    rating: 4.9,
    reviews: 192,
    category: 'Makeup',
    status: 'Low Stock',
    description: 'Versatile cream palette for eyes, cheeks, and lips',
    image: 'figma:asset/7694c69aa680fc3a6d691bca021fe9bcf7ffe9dd.png',
    inStock: true
  },
  {
    id: '3',
    name: 'Issy Cowgirl Fat Gloss',
    brand: 'Issy',
    price: 599,
    stock: 92,
    rating: 4.8,
    reviews: 167,
    category: 'Makeup',
    status: 'In Stock',
    description: 'High-shine plumping gloss with vitamin E',
    image: 'figma:asset/9a3bc1f281162d50c29f1e19d78195c3b78013ec.png',
    inStock: true
  },
  {
    id: '4',
    name: 'Happy Skin Perfect Brows Grip',
    brand: 'Happy Skin',
    price: 299,
    stock: 103,
    rating: 4.6,
    reviews: 178,
    category: 'Makeup',
    status: 'In Stock',
    description: 'Precision brow pencil with long-lasting formula',
    image: 'figma:asset/6d46372246009385106974cc4a7da11092837729.png',
    inStock: true
  }
];

export function AdminProvider({ children }: { children: ReactNode }) {
  // Products state
  const [adminProducts, setAdminProducts] = useState<AdminProduct[]>(productsDatabase);
  
  // Mock admin orders
  const [adminOrders] = useState<AdminOrder[]>([
    {
      id: 'ORD-001',
      userId: '1',
      customer: 'Maria Santos',
      customerEmail: 'maria@example.com',
      customerPhone: '+63 912 345 6789',
      date: '3/1/2026',
      items: 3,
      total: 3347,
      subtotal: 3247,
      shippingCost: 100,
      payment: 'E-Wallet',
      paymentMethod: { id: 'ewallet', name: 'E-Wallet', description: 'GCash' },
      shippingMethod: { id: 'standard', name: 'Standard Delivery', description: '3-5 business days', cost: 100, estimatedDays: '3-5 business days' },
      status: 'Delivered',
      products: [
        {
          id: '3',
          name: 'Active Foundation',
          brand: 'Issy',
          quantity: 1,
          price: 699,
          image: 'figma:asset/9a3bc1f281162d50c29f1e19d78195c3b78013ec.png'
        }
      ],
      shippingAddress: {
        name: 'Maria Santos',
        phone: '+63 912 345 6789',
        address: '123 Real St., Brgy. San Antonio',
        city: 'Quezon City, Metro Manila',
        postalCode: '1105'
      },
      timeline: [
        { status: 'Order Placed', description: '', date: 'March 1, 2026', completed: true },
        { status: 'Processing', description: 'Your order is being prepared', date: '', completed: true },
        { status: 'Shipped', description: 'Your order is on the way', date: '', completed: true },
        { status: 'Delivered', description: 'Order has been delivered', date: '', completed: true }
      ]
    },
    {
      id: 'ORD-002',
      userId: '2',
      customer: 'Jessica Reyes',
      customerEmail: 'jessica@example.com',
      customerPhone: '+63 923 456 7890',
      date: '3/10/2026',
      items: 1,
      total: 2049,
      subtotal: 1799,
      shippingCost: 250,
      payment: 'COD',
      paymentMethod: { id: 'cod', name: 'Cash on Delivery', description: 'Pay when you receive' },
      shippingMethod: { id: 'express', name: 'Express Delivery', description: '1-2 business days', cost: 250, estimatedDays: '1-2 business days' },
      status: 'Shipped',
      products: [
        {
          id: '1',
          name: 'Staygloss',
          brand: 'Sunrise Face',
          quantity: 1,
          price: 595,
          image: 'figma:asset/f2b98f90484bfeaf924e2e391f99994016e388dc.png'
        }
      ],
      shippingAddress: {
        name: 'Jessica Reyes',
        phone: '+63 923 456 7890',
        address: '456 Main Ave., Poblacion',
        city: 'Makati City, Metro Manila',
        postalCode: '1210'
      },
      timeline: [
        { status: 'Order Placed', description: '', date: 'March 10, 2026', completed: true },
        { status: 'Processing', description: 'Your order is being prepared', date: '', completed: true },
        { status: 'Shipped', description: 'Your order is on the way', date: '', completed: true },
        { status: 'Delivered', description: 'Order has been delivered', date: '', completed: false }
      ]
    }
  ]);
  
  // Mock admin users
  const [adminUsers, setAdminUsers] = useState<AdminUser[]>([
    {
      id: '1',
      name: 'Maria Santos',
      email: 'maria@example.com',
      phone: '+63 912 345 6789',
      role: 'Customer',
      joined: 'Jan 15, 2026',
      memberSince: 'January 15, 2026'
    },
    {
      id: '2',
      name: 'Jessica Reyes',
      email: 'jessica@example.com',
      phone: '+63 923 456 7890',
      role: 'Customer',
      joined: 'Feb 1, 2026',
      memberSince: 'February 1, 2026'
    },
    {
      id: 'admin',
      name: 'Admin User',
      email: 'admin@mariqits.com',
      phone: '+63 900 000 0000',
      role: 'Administrator',
      joined: 'Dec 1, 2025',
      memberSince: 'December 1, 2025'
    }
  ]);
  
  // Calculate stats dynamically
  const totalRevenue = adminOrders.reduce((sum, order) => sum + order.total, 0);
  const totalProducts = adminProducts.length;
  const totalCustomers = adminUsers.filter(u => u.role === 'Customer').length;
  
  const stats = {
    totalRevenue,
    revenueChange: '+12.5%',
    totalOrders: adminOrders.length,
    ordersChange: '+8.2%',
    totalProducts,
    productsChange: '+3 new',
    totalCustomers,
    customersChange: '+5.1%'
  };
  
  // Product functions
  const addProduct = (product: Omit<AdminProduct, 'id'>) => {
    const newProduct: AdminProduct = {
      ...product,
      id: Date.now().toString(),
      inStock: product.stock > 0
    };
    
    // Update stock status based on quantity
    if (newProduct.stock > 50) {
      newProduct.status = 'In Stock';
    } else if (newProduct.stock > 0) {
      newProduct.status = 'Low Stock';
    } else {
      newProduct.status = 'Out of Stock';
    }
    
    setAdminProducts(prev => [...prev, newProduct]);
    productsDatabase.push(newProduct); // Sync with database
  };
  
  const updateProduct = (id: string, updates: Partial<AdminProduct>) => {
    setAdminProducts(prev => {
      const updated = prev.map(p => {
        if (p.id === id) {
          const updatedProduct = { ...p, ...updates };
          
          // Update stock status if stock is changed
          if (updates.stock !== undefined) {
            updatedProduct.inStock = updates.stock > 0;
            if (updates.stock > 50) {
              updatedProduct.status = 'In Stock';
            } else if (updates.stock > 0) {
              updatedProduct.status = 'Low Stock';
            } else {
              updatedProduct.status = 'Out of Stock';
            }
          }
          
          return updatedProduct;
        }
        return p;
      });
      
      // Sync with database
      const dbIndex = productsDatabase.findIndex(p => p.id === id);
      if (dbIndex !== -1) {
        productsDatabase[dbIndex] = updated.find(p => p.id === id)!;
      }
      
      return updated;
    });
  };
  
  const deleteProduct = (id: string) => {
    setAdminProducts(prev => prev.filter(p => p.id !== id));
    
    // Sync with database
    const dbIndex = productsDatabase.findIndex(p => p.id === id);
    if (dbIndex !== -1) {
      productsDatabase.splice(dbIndex, 1);
    }
  };
  
  // Order functions
  const getOrderById = (id: string) => {
    return adminOrders.find(o => o.id === id);
  };
  
  const updateOrderStatus = (id: string, status: AdminOrder['status']) => {
    // Placeholder for backend integration
    console.log(`Updating order ${id} to status: ${status}`);
  };
  
  // User functions
  const addUser = (userData: Omit<AdminUser, 'id' | 'joined'>) => {
    const newUser: AdminUser = {
      ...userData,
      id: Date.now().toString(),
      joined: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    setAdminUsers(prev => [...prev, newUser]);
  };
  
  const updateUser = (id: string, updates: Partial<AdminUser>) => {
    setAdminUsers(prev =>
      prev.map(u => (u.id === id ? { ...u, ...updates } : u))
    );
  };
  
  const deleteUser = (id: string) => {
    setAdminUsers(prev => prev.filter(u => u.id !== id));
  };
  
  const value: AdminContextType = {
    adminProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    adminOrders,
    getOrderById,
    updateOrderStatus,
    adminUsers,
    addUser,
    updateUser,
    deleteUser,
    stats
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

// Export the shared products database for synchronization
export { productsDatabase };
