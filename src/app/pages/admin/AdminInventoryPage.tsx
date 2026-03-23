import { useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useAdmin } from '../../context/AdminContext';

export default function AdminInventoryPage() {
  const { adminProducts } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredProducts = adminProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const totalProducts = adminProducts.length;
  const lowStock = adminProducts.filter(p => p.stock > 0 && p.stock <= 50).length;
  const outOfStock = adminProducts.filter(p => p.stock === 0).length;
  
  const getStockStatus = (stock: number) => {
    if (stock > 50) return { label: 'In Stock', color: 'bg-green-100 text-green-800' };
    if (stock > 0) return { label: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Out of Stock', color: 'bg-red-100 text-red-800' };
  };
  
  return (
    <AdminLayout>
      <div className="p-[32px]">
        <div className="mb-[32px]">
          <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">Inventory</h1>
          <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">Monitor stock levels and inventory</p>
        </div>
        
        <div className="grid grid-cols-3 gap-[24px] mb-[32px]">
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="bg-blue-100 rounded-[12px] size-[48px] flex items-center justify-center mb-[16px]">
              <span className="text-[24px]">📦</span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">Total Products</p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{totalProducts}</p>
          </div>
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="bg-yellow-100 rounded-[12px] size-[48px] flex items-center justify-center mb-[16px]">
              <span className="text-[24px]">⚠️</span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">Low Stock</p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{lowStock}</p>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-yellow-600 mt-[4px]">Needs to be restocked</p>
          </div>
          <div className="bg-white rounded-[16px] p-[24px] border-[1px] border-[rgba(0,0,0,0.05)]">
            <div className="bg-red-100 rounded-[12px] size-[48px] flex items-center justify-center mb-[16px]">
              <span className="text-[24px]">🚨</span>
            </div>
            <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#4a5565] mb-[4px]">Out of Stock</p>
            <p className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d]">{outOfStock}</p>
          </div>
        </div>
        
        <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)]">
          <div className="p-[24px] border-b border-gray-100">
            <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">Search Products</label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by product name..."
              className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
            />
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[24px] uppercase">Product</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-left py-[12px] px-[16px] uppercase">Category</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-right py-[12px] px-[16px] uppercase">Price</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Stock</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Rating</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[16px] uppercase">Status</th>
                  <th className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] text-[#4a5565] text-center py-[12px] px-[24px] uppercase">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map(product => {
                  const stockStatus = getStockStatus(product.stock);
                  return (
                    <tr key={product.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-[16px] px-[24px]">
                        <div className="flex items-center gap-[12px]">
                          <div className="size-[48px] bg-[#fffbf0] rounded-[8px] overflow-hidden flex-shrink-0">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d] mb-[2px]">{product.name}</p>
                            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#ff1a75]">{product.brand}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">{product.category}</p>
                      </td>
                      <td className="py-[16px] px-[16px] text-right">
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">₱{product.price}</p>
                      </td>
                      <td className="py-[16px] px-[16px] text-center">
                        <p className={`font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] ${product.stock > 50 ? 'text-green-600' : product.stock > 0 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {product.stock}
                        </p>
                      </td>
                      <td className="py-[16px] px-[16px] text-center">
                        <div className="flex items-center justify-center gap-[4px]">
                          <span className="text-yellow-500">★</span>
                          <span className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-[#2d2d2d]">{product.rating}</span>
                          <span className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">({product.reviews})</span>
                        </div>
                      </td>
                      <td className="py-[16px] px-[16px]">
                        <div className="flex justify-center">
                          <span className={`inline-block px-[12px] py-[6px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[12px] ${stockStatus.color}`}>
                            {stockStatus.label}
                          </span>
                        </div>
                      </td>
                      <td className="py-[16px] px-[24px]">
                        <div className="flex items-center justify-center gap-[8px]">
                          <button
                            onClick={() => alert(`Edit stock for ${product.name} (Demo)`)}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                            title="Edit Stock"
                          >
                            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                              <path d="M14.166 2.5c.442-.442 1.028-.69 1.644-.69.615 0 1.201.248 1.643.69.442.442.69 1.028.69 1.644 0 .615-.248 1.201-.69 1.643l-9 9-4.5 1.5 1.5-4.5 9-9z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button
                            onClick={() => alert(`Delete ${product.name} (Demo)`)}
                            className="text-red-600 hover:text-red-700 transition-colors"
                            title="Delete"
                          >
                            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                              <path d="M2.5 5h15M6.667 5V3.333C6.667 2.597 7.264 2 8 2h4c.736 0 1.333.597 1.333 1.333V5m2 0v11.667c0 .736-.597 1.333-1.333 1.333H6c-.736 0-1.333-.597-1.333-1.333V5h10z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          
          <div className="p-[24px] border-t border-gray-100">
            <div className="bg-gray-50 rounded-[12px] p-[32px] text-center">
              <div className="text-[48px] mb-[16px]">📦</div>
              <h3 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[18px] text-[#2d2d2d] mb-[8px]">Stock Movement History</h3>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[16px]">Stock movement tracking coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
