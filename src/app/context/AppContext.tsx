import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Types
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
}

export interface CartItem extends Product {
  quantity: number;
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
  password?: string; // Stored securely (in real app, hashed)
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
  
  // Products
  products: Product[];
  getProductById: (id: string) => Product | undefined;
  searchProducts: (query: string) => Product[];
  
  // Cart state
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
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
  
  // Reviews
  reviews: ProductReview[];
  addReview: (review: Omit<ProductReview, 'id' | 'date'>) => void;
  getProductReviews: (productId: string) => ProductReview[];
}

const AppContext = createContext<AppContextType | undefined>(undefined);

// Mock users database (simulates backend)
const usersDb: User[] = [
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

// Mock products database
const productsDb: Product[] = [
  {
    id: '1',
    name: 'CloudBeauty Makeup Lip Gloss',
    brand: 'CloudBeauty',
    price: 199,
    stock: 78,
    rating: 4.9,
    reviews: 256,
    category: 'Makeup',
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
    description: 'Precision brow pencil with long-lasting formula',
    image: 'figma:asset/6d46372246009385106974cc4a7da11092837729.png',
    inStock: true
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  // User state
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Products state
  const [products, setProducts] = useState<Product[]>(productsDb);
  
  // Cart state
  const [cart, setCart] = useState<CartItem[]>([]);
  
  // Wishlist state
  const [wishlist, setWishlist] = useState<Product[]>([]);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  
  // Orders state
  const [orders, setOrders] = useState<Order[]>([]);
  
  // Reviews state
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  
  // Shipping methods
  const shippingMethods: ShippingMethod[] = [
    {
      id: 'standard',
      name: 'Standard Delivery',
      description: '3-5 business days',
      cost: 100,
      estimatedDays: '3-5 business days'
    },
    {
      id: 'express',
      name: 'Express Delivery',
      description: '1-2 business days',
      cost: 250,
      estimatedDays: '1-2 business days'
    },
    {
      id: 'pickup',
      name: 'Store Pickup',
      description: 'Pick up at nearest store',
      cost: 0,
      estimatedDays: 'Same day'
    }
  ];
  
  // Payment methods
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'ewallet',
      name: 'E-Wallet',
      description: 'GCash, Maya, PayMaya'
    },
    {
      id: 'card',
      name: 'Credit/Debit Card',
      description: 'Visa, Mastercard, Amex'
    },
    {
      id: 'cod',
      name: 'Cash on Delivery',
      description: 'Pay when you receive'
    }
  ];
  
  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('mariqits_user');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      setIsAuthenticated(true);
    }
  }, []);
  
  // User actions
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Validate inputs
    if (!email || !password) {
      return { success: false, error: 'Please enter both email and password' };
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    
    // Find user
    const foundUser = usersDb.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      const userToSet = { ...foundUser };
      delete userToSet.password; // Remove password from state
      setUser(userToSet);
      setIsAuthenticated(true);
      localStorage.setItem('mariqits_user', JSON.stringify(userToSet));
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
    // Validate inputs
    if (!userData.email || !userData.password || !userData.name) {
      return { success: false, error: 'Please fill in all required fields' };
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      return { success: false, error: 'Please enter a valid email address' };
    }
    
    // Password strength validation
    if (userData.password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }
    
    // Check if email already exists
    if (usersDb.find(u => u.email === userData.email)) {
      return { success: false, error: 'Email already registered' };
    }
    
    const newUser: User = {
      id: Date.now().toString(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      memberSince: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      privacySettings: {
        shareData: false,
        emailNotifications: true,
        smsNotifications: false
      }
    };
    
    // Add to database
    usersDb.push({ ...newUser, password: userData.password });
    
    // Set user (without password)
    setUser(newUser);
    setIsAuthenticated(true);
    localStorage.setItem('mariqits_user', JSON.stringify(newUser));
    
    return { success: true };
  };
  
  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    const updatedUser = { ...user, ...userData };
    setUser(updatedUser);
    
    // Update in database
    const userIndex = usersDb.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      usersDb[userIndex] = { ...usersDb[userIndex], ...userData };
    }
    
    localStorage.setItem('mariqits_user', JSON.stringify(updatedUser));
    return true;
  };
  
  const changePassword = async (currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> => {
    if (!user) return { success: false, error: 'Not authenticated' };
    
    // Validate inputs
    if (!currentPassword || !newPassword) {
      return { success: false, error: 'Please fill in all fields' };
    }
    
    if (newPassword.length < 6) {
      return { success: false, error: 'New password must be at least 6 characters' };
    }
    
    // Find user in database
    const userIndex = usersDb.findIndex(u => u.id === user.id);
    if (userIndex === -1) {
      return { success: false, error: 'User not found' };
    }
    
    // Verify current password
    if (usersDb[userIndex].password !== currentPassword) {
      return { success: false, error: 'Current password is incorrect' };
    }
    
    // Update password
    usersDb[userIndex].password = newPassword;
    
    return { success: true };
  };
  
  const updatePrivacySettings = async (settings: User['privacySettings']): Promise<boolean> => {
    if (!user) return false;
    
    const updatedUser = { ...user, privacySettings: settings };
    setUser(updatedUser);
    
    // Update in database
    const userIndex = usersDb.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      usersDb[userIndex].privacySettings = settings;
    }
    
    localStorage.setItem('mariqits_user', JSON.stringify(updatedUser));
    return true;
  };
  
  // Product actions
  const getProductById = (id: string) => {
    return products.find(p => p.id === id);
  };
  
  const searchProducts = (query: string) => {
    if (!query) return products;
    const lowerQuery = query.toLowerCase();
    return products.filter(p => 
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.category?.toLowerCase().includes(lowerQuery)
    );
  };
  
  // Cart actions
  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };
  
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };
  
  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };
  
  const clearCart = () => {
    setCart([]);
  };
  
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);
  
  // Wishlist actions
  const addToWishlist = (product: Product) => {
    setWishlist(prevWishlist => {
      if (!prevWishlist.find(item => item.id === product.id)) {
        return [...prevWishlist, product];
      }
      return prevWishlist;
    });
  };
  
  const removeFromWishlist = (productId: string) => {
    setWishlist(prevWishlist => prevWishlist.filter(item => item.id !== productId));
  };
  
  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };
  
  // Order actions
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
  
  const getOrderById = (id: string) => {
    return orders.find(o => o.id === id);
  };
  
  const getUserOrders = () => {
    if (!user) return [];
    return orders.filter(o => o.userId === user.id);
  };
  
  // Review actions
  const addReview = (review: Omit<ProductReview, 'id' | 'date'>) => {
    const newReview: ProductReview = {
      ...review,
      id: Date.now().toString(),
      date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
    };
    setReviews(prev => [...prev, newReview]);
  };
  
  const getProductReviews = (productId: string) => {
    return reviews.filter(r => r.productId === productId);
  };
  
  const value: AppContextType = {
    user,
    isAuthenticated,
    login,
    logout,
    signup,
    updateProfile,
    changePassword,
    updatePrivacySettings,
    products,
    getProductById,
    searchProducts,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    searchQuery,
    setSearchQuery,
    shippingMethods,
    paymentMethods,
    orders,
    createOrder,
    getOrderById,
    getUserOrders,
    reviews,
    addReview,
    getProductReviews
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
