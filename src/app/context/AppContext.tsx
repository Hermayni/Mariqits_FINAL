import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect, useMemo } from 'react';
import { products as initialProducts } from '../data/products';

// Types
export interface Shade {
  id: string;
  name: string;
  color: string;
  stock: number;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating?: number;
  reviews?: number;
  description?: string;
  inStock?: boolean;
  availableShades?: number;
  category?: string;
  stock?: number;
  shades?: Shade[];
  images?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedShade?: Shade;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  memberSince?: string;
  address?: string;
  city?: string;
  postalCode?: string;
  password?: string;
  privacySettings?: {
    shareData: boolean;
    emailNotifications: boolean;
    smsNotifications: boolean;
  };
}

export interface ShippingMethod {
  id: string;
  name: string;
  description: string;
  cost: number;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shippingCost: number;
  shippingMethod: ShippingMethod;
  paymentMethod: PaymentMethod;
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    postalCode: string;
  };
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  date: string;
  trackingNumber?: string;
  timeline?: Array<{
    status: string;
    description: string;
    date: string;
    completed: boolean;
  }>;
}

export interface ProductReview {
  id: string;
  productId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

interface AppContextType {
  // User state
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  signup: (userData: Partial<User> & { password: string }) => Promise<{ success: boolean; error?: string }>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<{ success: boolean; error?: string }>;
  updatePrivacySettings: (settings: User['privacySettings']) => Promise<boolean>;

  // All registered users (passwords stripped) — used by admin panel
  users: User[];
  deleteUser: (id: string) => void;

  // Products
  products: Product[];
  getProductById: (id: string) => Product | undefined;
  searchProducts: (query: string) => Product[];
  addProduct: (product: Omit<Product, 'id'>) => Product;
  updateProduct: (id: string, updates: Partial<Product>) => void;
  deleteProduct: (id: string) => void;

  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number, shade?: Shade) => void;
  removeFromCart: (productId: string, shadeId?: string) => void;
  updateCartQuantity: (productId: string, quantity: number, shadeId?: string) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;

  // Wishlist state
  wishlist: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Search state
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Shipping & Payment
  shippingMethods: ShippingMethod[];
  paymentMethods: PaymentMethod[];

  // Orders
  orders: Order[];
  createOrder: (orderData: Omit<Order, 'id' | 'userId' | 'date' | 'status' | 'timeline'>) => Order;
  getOrderById: (id: string) => Order | undefined;
  getUserOrders: () => Order[];
  updateOrderStatus: (id: string, status: Order['status']) => void;

  // Reviews
  reviews: ProductReview[];
  addReview: (review: Omit<ProductReview, 'id' | 'date'>) => void;
  getProductReviews: (productId: string) => ProductReview[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const defaultUsers: User[] = [
  {
    id: '1',
    name: 'Maria Santos',
    email: 'maria@example.com',
    phone: '+63 912 345 6789',
    memberSince: 'January 15, 2026',
    password: 'password123',
    address: '123 Real St., Brgy. San Antonio',
    city: 'Quezon City, Metro Manila',
    postalCode: '1105',
    privacySettings: {
      shareData: false,
      emailNotifications: true,
      smsNotifications: false
    }
  },
  {
    id: 'admin',
    name: 'Admin User',
    email: 'admin@mariqits.com',
    password: 'admin123',
    memberSince: 'January 1, 2026',
    privacySettings: {
      shareData: false,
      emailNotifications: true,
      smsNotifications: true
    }
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // All users — persisted in localStorage (replaces the old module-level usersDb)
  const [allUsers, setAllUsers] = useState<User[]>(() => {
    const saved = localStorage.getItem('mariqits_users');
    return saved ? JSON.parse(saved) : defaultUsers;
  });

  // Products — persisted in localStorage, seeded from products.ts on first load
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('mariqits_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Orders — persisted in localStorage
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('mariqits_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [reviews, setReviews] = useState<ProductReview[]>([]);

  const shippingMethods: ShippingMethod[] = [
    { id: 'standard', name: 'Standard Delivery', description: '3-5 business days', cost: 100, estimatedDays: '3-5 business days' },
    { id: 'express', name: 'Express Delivery', description: '1-2 business days', cost: 250, estimatedDays: '1-2 business days' },
    { id: 'pickup', name: 'Store Pickup', description: 'Pick up at nearest store', cost: 0, estimatedDays: 'Same day' }
  ];

  const paymentMethods: PaymentMethod[] = [
    { id: 'ewallet', name: 'E-Wallet', description: 'GCash, Maya, PayMaya' },
    { id: 'card', name: 'Credit/Debit Card', description: 'Visa, Mastercard, Amex' },
    { id: 'cod', name: 'Cash on Delivery', description: 'Pay when you receive' }
  ];

  // --- localStorage persistence ---
  useEffect(() => {
    localStorage.setItem('mariqits_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('mariqits_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('mariqits_users', JSON.stringify(allUsers));
  }, [allUsers]);

  // Expose users without passwords
  const users = useMemo(
    () => allUsers.map(({ password, ...rest }) => rest),
    [allUsers]
  );

  // Restore session from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('mariqits_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);

  // --- Auth ---
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    if (!email || !password) {
      return { success: false, error: 'Please enter both email and password' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    const foundUser = allUsers.find(u => u.email === email && u.password === password);
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      setIsAuthenticated(true);
      localStorage.setItem('mariqits_user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    return { success: false, error: 'Invalid email or password' };
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    setCart([]);
    setWishlist([]);
    localStorage.removeItem('mariqits_user');
  };

  const signup = async (userData: Partial<User> & { password: string }): Promise<{ success: boolean; error?: string }> => {
    if (!userData.email || !userData.password || !userData.name) {
      return { success: false, error: 'Please fill in all required fields' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    if (userData.password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }
    if (allUsers.find(u => u.email === userData.email)) {
      return { success: false, error: 'Email already registered' };
    }

    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      password: userData.password,
      memberSince: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      privacySettings: { shareData: false, emailNotifications: true, smsNotifications: false }
    };

    setAllUsers(prev => [...prev, newUser]);

    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    setIsAuthenticated(true);
    localStorage.setItem('mariqits_user', JSON.stringify(userWithoutPassword));
    return { success: true };
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    setAllUsers(prev => prev.map(u => u.id === user.id ? { ...u, ...userData } : u));
    localStorage.setItem('mariqits_user', JSON.stringify(updatedUser));
    return true;
  };

  const changePassword = async (currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    if (!user) return { success: false, error: 'Not authenticated' };
    if (!currentPassword || !newPassword) {
      return { success: false, error: 'Please fill in all fields' };
    }
    if (newPassword.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters' };
    }
    const dbUser = allUsers.find(u => u.id === user.id);
    if (!dbUser) return { success: false, error: 'User not found' };
    if (dbUser.password !== currentPassword) {
      return { success: false, error: 'Current password is incorrect' };
    }
    setAllUsers(prev => prev.map(u => u.id === user.id ? { ...u, password: newPassword } : u));
    return { success: true };
  };

  const updatePrivacySettings = async (settings: User['privacySettings']): Promise<boolean> => {
    if (!user) return false;
    const updatedUser = { ...user, privacySettings: settings };
    setUser(updatedUser);
    setAllUsers(prev => prev.map(u => u.id === user.id ? { ...u, privacySettings: settings } : u));
    localStorage.setItem('mariqits_user', JSON.stringify(updatedUser));
    return true;
  };

  // --- Users (admin) ---
  const deleteUser = (id: string) => {
    if (id === 'admin') return;
    setAllUsers(prev => prev.filter(u => u.id !== id));
  };

  // --- Products ---
  const getProductById = (id: string) => products.find(p => p.id === id);

  const searchProducts = useCallback((query: string) => {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.category?.toLowerCase().includes(lowerQuery)
    );
  }, [products]);

  const addProduct = (productData: Omit<Product, 'id'>): Product => {
    const newProduct: Product = { ...productData, id: Date.now().toString() };
    setProducts(prev => [...prev, newProduct]);
    return newProduct;
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => (p.id === id ? { ...p, ...updates } : p)));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  // --- Cart ---
  const addToCart = (product: Product, quantity: number = 1, shade?: Shade) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedShade?.id === shade?.id
      );
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedShade?.id === shade?.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity, selectedShade: shade }];
    });
  };

  const removeFromCart = (productId: string, shadeId?: string) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.id === productId && item.selectedShade?.id === shadeId)
    ));
  };

  const updateCartQuantity = (productId: string, quantity: number, shadeId?: string) => {
    if (quantity <= 0) { removeFromCart(productId, shadeId); return; }
    setCart(prevCart => prevCart.map(item =>
      item.id === productId && item.selectedShade?.id === shadeId
        ? { ...item, quantity }
        : item
    ));
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  // --- Wishlist ---
  const addToWishlist = (product: Product) => {
    setWishlist(prev => (prev.find(item => item.id === product.id) ? prev : [...prev, product]));
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(item => item.id !== productId));
  };

  const isInWishlist = (productId: string) => wishlist.some(item => item.id === productId);

  // --- Orders ---
  const createOrder = (orderData: Omit<Order, 'id' | 'userId' | 'date' | 'status' | 'timeline'>): Order => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Date.now()}`,
      userId: user?.id || '',
      date: new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' }),
      status: 'Pending',
      trackingNumber: `TRK${Date.now()}`,
      timeline: [
        { status: 'Order Placed', description: 'Your order has been received', date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }), completed: true },
        { status: 'Processing', description: 'Your order is being prepared', date: '', completed: false },
        { status: 'Shipped', description: 'Your order is on the way', date: '', completed: false },
        { status: 'Delivered', description: 'Order has been delivered', date: '', completed: false }
      ]
    };
    setOrders(prev => [...prev, newOrder]);
    clearCart();
    return newOrder;
  };

  const getOrderById = (id: string) => orders.find(o => o.id === id);

  const getUserOrders = () => {
    if (!user) return [];
    return orders.filter(o => o.userId === user.id);
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    const progressMap: Record<string, number> = { Pending: 0, Processing: 1, Shipped: 2, Delivered: 3, Cancelled: -1 };
    const targetLevel = progressMap[status] ?? 0;
    setOrders(prev =>
      prev.map(o => {
        if (o.id !== id) return o;
        const now = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        const timeline = (o.timeline || []).map((t, i) => ({
          ...t,
          completed: targetLevel >= 0 && i <= targetLevel,
          date: targetLevel >= 0 && i <= targetLevel ? t.date || now : t.date
        }));
        return { ...o, status, timeline };
      })
    );
  };

  // --- Reviews ---
  const addReview = (review: Omit<ProductReview, 'id' | 'date'>) => {
    const newReview: ProductReview = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setReviews(prev => [...prev, newReview]);
  };

  const getProductReviews = (productId: string) => reviews.filter(r => r.productId === productId);

  const value: AppContextType = {
    user, isAuthenticated, login, logout, signup, updateProfile, changePassword, updatePrivacySettings,
    users, deleteUser,
    products, getProductById, searchProducts, addProduct, updateProduct, deleteProduct,
    cart, addToCart, removeFromCart, updateCartQuantity, clearCart, cartTotal, cartCount,
    wishlist, addToWishlist, removeFromWishlist, isInWishlist,
    searchQuery, setSearchQuery,
    shippingMethods, paymentMethods,
    orders, createOrder, getOrderById, getUserOrders, updateOrderStatus,
    reviews, addReview, getProductReviews
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
