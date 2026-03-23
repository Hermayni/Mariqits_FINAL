import { Product } from '../context/AppContext';

// Import product images
import imgImageGelEyelinerPencil from "figma:asset/c46acde492e0504e7240eda748d1e57c57379955.png";
import imgImageSettingSpray from "figma:asset/f1267c8577a448dfd3076abe6144ca7cd5e5fbf8.png";
import imgImageRoseGoldEyeshadowPalette from "figma:asset/b068434488d448a92e246374a691632fe7ccf444.png";
import imgContainer from "figma:asset/01c25020528a412612f067a4968b1018cc4c4a2c.png";
import imgImageVelvetMatteLipstick from "figma:asset/56ee02927070bb83a4d4b6d30e9faf0089bf090d.png";
import imgImageWithFallback from "figma:asset/f2b98f90484bfeaf924e2e391f99994016e388dc.png";
import imgImageWithFallback1 from "figma:asset/7694c69aa680fc3a6d691bca021fe9bcf7ffe9dd.png";
import imgImageWithFallback2 from "figma:asset/9a3bc1f281162d50c29f1e19d78195c3b78013ec.png";
import imgImageWithFallback3 from "figma:asset/6d46372246009385106974cc4a7da11092837729.png";
import imgImageWithFallback4 from "figma:asset/6d942f134fa03c515c4e27b72eb7692068130f19.png";
import imgImageWithFallback5 from "figma:asset/352d55e37493cd3d9bbfed8103f804cf22f86415.png";
import imgImageWithFallback6 from "figma:asset/a659c737197ee528953f60f31f643d693e4d9984.png";
import imgImageWithFallback7 from "figma:asset/089c8641af4bd7542dde866bd94bfcba7b52f59d.png";
import imgImageWithFallback8 from "figma:asset/cdc033fb64e02a729061efb6d04ed2f787f13a60.png";
import imgImageWithFallback9 from "figma:asset/002a8efb7dadc0fcb99e9996d6e8fd591a6fa29e.png";
import imgImageWithFallback10 from "figma:asset/4b0695257293cd76f4f03b184dca304321cd6cd8.png";
import imgImageWithFallback11 from "figma:asset/a724a65849296e981d327d90c933e0c58e372915.png";
import imgImageWithFallback12 from "figma:asset/9800b58b1f5d96c90331ee7a12d00941ef99681c.png";
import imgImageWithFallback13 from "figma:asset/7619574ef475c3a4c1eaaf74edca805d5c45e7b5.png";
import imgImageWithFallback14 from "figma:asset/e5ba792f14a138c0921959aaa21ac671e0ba9e65.png";
import imgImageWithFallback15 from "figma:asset/9180bdb670af44b119103554ff31c7f10d2f47a7.png";
import imgImageWithFallback16 from "figma:asset/061e13f8775dd92b46e687dfee272207073ac4b4.png";
import imgImageWithFallback17 from "figma:asset/af6db02978cedebb91d5fa0c5187718c24cbb031.png";
import imgImageWithFallback18 from "figma:asset/d5d9c207dd5b505193457c1d9977c12febc6d9b7.png";
import imgImageWithFallback19 from "figma:asset/022fd55aaa95127189bc8a94bd2f5964eea40d3d.png";
import imgImageWithFallback20 from "figma:asset/4905c51bf119578a6266d73104a970646aca9625.png";
import imgImageWithFallback21 from "figma:asset/05fedc33536599ded973e3fd50ff6ad867207fa8.png";
import imgImageWithFallback22 from "figma:asset/fc981e44d84c3c0a9abc00bdeb1d1f7f2106aa59.png";

export const products: Product[] = [
  {
    id: '1',
    name: 'Staygloss',
    brand: 'Sunrise Face',
    price: 595.00,
    image: imgImageWithFallback,
    rating: 4.5,
    reviews: 234,
    inStock: true,
    availableShades: 12,
    category: 'Makeup',
    description: 'Long-lasting glossy finish for beautiful lips.'
  },
  {
    id: '2',
    name: 'Crème Flush Stick',
    brand: 'Issy',
    price: 449.00,
    image: imgImageWithFallback1,
    rating: 4.8,
    reviews: 187,
    inStock: true,
    availableShades: 8,
    category: 'Makeup',
    description: 'Creamy blush stick for a natural, healthy glow.'
  },
  {
    id: '3',
    name: 'Active Foundation',
    brand: 'Issy',
    price: 699.00,
    image: imgImageWithFallback2,
    rating: 4.7,
    reviews: 324,
    inStock: true,
    availableShades: 47,
    category: 'Makeup',
    description: 'A perfect pitch of weightless, buildable matte pinks and peaches, all in one pan.'
  },
  {
    id: '4',
    name: 'Healthy Touch Eyeshadow Palette',
    brand: 'Sunrise Face',
    price: 995.00,
    image: imgImageWithFallback3,
    rating: 4.9,
    reviews: 456,
    inStock: true,
    category: 'Makeup',
    description: 'Versatile eyeshadow palette with gorgeous neutral shades.'
  },
  {
    id: '5',
    name: 'Everyday Lip Oil',
    brand: 'Issy',
    price: 395.00,
    image: imgImageWithFallback4,
    rating: 4.6,
    reviews: 298,
    inStock: true,
    category: 'Makeup',
    description: 'Nourishing lip oil for soft, hydrated lips.'
  },
  {
    id: '6',
    name: 'Gentle Cleanser',
    brand: 'Pure Glow',
    price: 549.00,
    image: imgImageWithFallback5,
    rating: 4.7,
    reviews: 412,
    inStock: true,
    category: 'Skincare',
    description: 'Gentle daily cleanser for all skin types.'
  },
  {
    id: '7',
    name: 'Hydrating Serum',
    brand: 'Radiance',
    price: 1250.00,
    image: imgImageWithFallback6,
    rating: 4.9,
    reviews: 521,
    inStock: true,
    category: 'Skincare',
    description: 'Intensive hydration for plump, glowing skin.'
  },
  {
    id: '8',
    name: 'Matte Lipstick Set',
    brand: 'Color Pop',
    price: 895.00,
    image: imgImageWithFallback7,
    rating: 4.8,
    reviews: 367,
    inStock: true,
    availableShades: 24,
    category: 'Makeup',
    description: 'Rich, velvety matte lipsticks in stunning shades.'
  },
  {
    id: '9',
    name: 'Rose Water Toner',
    brand: 'Natural Beauty',
    price: 425.00,
    image: imgImageWithFallback8,
    rating: 4.5,
    reviews: 289,
    inStock: true,
    category: 'Skincare',
    description: 'Refreshing rose water toner for balanced skin.'
  },
  {
    id: '10',
    name: 'Glow Highlighter',
    brand: 'Shimmer Co',
    price: 749.00,
    image: imgImageWithFallback9,
    rating: 4.7,
    reviews: 434,
    inStock: true,
    category: 'Makeup',
    description: 'Luminous highlighter for radiant skin.'
  },
  {
    id: '11',
    name: 'Mascara Volume Boost',
    brand: 'Lash Love',
    price: 595.00,
    image: imgImageWithFallback10,
    rating: 4.6,
    reviews: 356,
    inStock: true,
    category: 'Makeup',
    description: 'Volumizing mascara for dramatic lashes.'
  },
  {
    id: '12',
    name: 'Vitamin C Cream',
    brand: 'Glow Lab',
    price: 1150.00,
    image: imgImageWithFallback11,
    rating: 4.8,
    reviews: 478,
    inStock: true,
    category: 'Skincare',
    description: 'Brightening cream with Vitamin C for even skin tone.'
  },
  {
    id: '13',
    name: 'Eyebrow Pencil',
    brand: 'Arch Perfect',
    price: 345.00,
    image: imgImageWithFallback12,
    rating: 4.5,
    reviews: 267,
    inStock: true,
    category: 'Makeup',
    description: 'Precise eyebrow pencil for natural-looking brows.'
  },
  {
    id: '14',
    name: 'Night Repair Cream',
    brand: 'Restore Beauty',
    price: 1450.00,
    image: imgImageWithFallback13,
    rating: 4.9,
    reviews: 512,
    inStock: true,
    category: 'Skincare',
    description: 'Overnight repair cream for youthful skin.'
  },
  {
    id: '15',
    name: 'Gel Eyeliner Pencil',
    brand: 'Line Perfect',
    price: 425.00,
    image: imgImageGelEyelinerPencil,
    rating: 4.6,
    reviews: 301,
    inStock: true,
    category: 'Makeup',
    description: 'Smooth gel eyeliner for precise application.'
  },
  {
    id: '16',
    name: 'Setting Spray',
    brand: 'Lock It',
    price: 595.00,
    image: imgImageSettingSpray,
    rating: 4.7,
    reviews: 389,
    inStock: true,
    category: 'Makeup',
    description: 'Long-lasting setting spray to keep makeup fresh.'
  },
  {
    id: '17',
    name: 'Rose Gold Eyeshadow Palette',
    brand: 'Glam Glow',
    price: 1295.00,
    image: imgImageRoseGoldEyeshadowPalette,
    rating: 4.9,
    reviews: 567,
    inStock: true,
    category: 'Makeup',
    description: 'Stunning rose gold eyeshadow palette.'
  },
  {
    id: '18',
    name: 'Velvet Matte Lipstick',
    brand: 'Velvet Lips',
    price: 549.00,
    image: imgImageVelvetMatteLipstick,
    rating: 4.8,
    reviews: 423,
    inStock: true,
    availableShades: 18,
    category: 'Makeup',
    description: 'Ultra-smooth velvet matte lipstick.'
  },
  {
    id: '19',
    name: 'Face Primer',
    brand: 'Smooth Base',
    price: 695.00,
    image: imgImageWithFallback14,
    rating: 4.6,
    reviews: 334,
    inStock: true,
    category: 'Makeup',
    description: 'Smoothing primer for flawless makeup application.'
  },
  {
    id: '20',
    name: 'Sunscreen SPF 50',
    brand: 'Sun Guard',
    price: 795.00,
    image: imgImageWithFallback15,
    rating: 4.8,
    reviews: 445,
    inStock: true,
    category: 'Skincare',
    description: 'Broad spectrum sun protection.'
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.brand.toLowerCase().includes(lowerQuery) ||
    p.category?.toLowerCase().includes(lowerQuery) ||
    p.description?.toLowerCase().includes(lowerQuery)
  );
}
