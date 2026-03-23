import { useState, useRef } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import AddProductModal from '../../components/admin/AddProductModal';
import { useAdmin, AdminProduct } from '../../context/AdminContext';

function EditProductModal({ product, onClose }: { product: AdminProduct; onClose: () => void }) {
  const { updateProduct } = useAdmin();
  const [formData, setFormData] = useState({
    name: product.name,
    brand: product.brand,
    category: product.category,
    price: product.price.toString(),
    stock: product.stock.toString(),
    description: product.description || '',
  });
  const [productImages, setProductImages] = useState<string[]>(
    product.images && product.images.length > 0 ? product.images : [product.image]
  );
  const [shades, setShades] = useState<Array<{ id: string; name: string; color: string; stock: number }>>(
    (product.shades ?? []).map(s => ({ ...s, stock: s.stock ?? 0 }))
  );
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addShade = () =>
    setShades(prev => [...prev, { id: Date.now().toString(), name: '', color: '#ff6b9d', stock: 0 }]);

  const updateShade = (id: string, field: 'name' | 'color', value: string) =>
    setShades(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));

  const updateShadeStock = (id: string, stock: number) =>
    setShades(prev => prev.map(s => s.id === id ? { ...s, stock } : s));

  const removeShade = (id: string) =>
    setShades(prev => prev.filter(s => s.id !== id));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    files.slice(0, 10 - productImages.length).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setProductImages(prev => [...prev, ev.target?.result as string].slice(0, 10));
      };
      reader.readAsDataURL(file);
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const removeImage = (index: number) => {
    setProductImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const computedStock = shades.length > 0
      ? shades.reduce((sum, s) => sum + s.stock, 0)
      : parseInt(formData.stock);
    updateProduct(product.id, {
      name: formData.name,
      brand: formData.brand,
      category: formData.category,
      price: parseFloat(formData.price),
      stock: computedStock,
      description: formData.description,
      image: productImages[0] || product.image,
      images: productImages.length > 0 ? productImages : undefined,
      inStock: computedStock > 0,
      shades: shades.length > 0 ? shades : undefined,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[32px]">
      <div className="bg-white rounded-[24px] w-full max-w-[560px] max-h-[90vh] overflow-auto">
        <div className="p-[32px]">
          <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d] mb-[24px]">
            Edit Product
          </h2>
          <form onSubmit={handleSubmit} className="space-y-[20px]">
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Product Name *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors" />
            </div>
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Brand *</label>
              <input type="text" name="brand" value={formData.brand} onChange={handleChange} required className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Category *</label>
                <select name="category" value={formData.category} onChange={handleChange} required className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors">
                  <option value="Makeup">Makeup</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Fragrance">Fragrance</option>
                  <option value="Body Care">Body Care</option>
                </select>
              </div>
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Price *</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} required min="0" step="0.01" className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors" />
              </div>
            </div>
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Stock Quantity {shades.length > 0 ? '(auto-computed from shades)' : '*'}
              </label>
              <input
                type="number"
                name="stock"
                value={shades.length > 0 ? shades.reduce((sum, s) => sum + s.stock, 0) : formData.stock}
                onChange={handleChange}
                required={shades.length === 0}
                disabled={shades.length > 0}
                min="0"
                className={`w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors ${shades.length > 0 ? 'bg-gray-50 text-gray-500' : ''}`}
              />
            </div>
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} rows={3} className="w-full rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] p-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors resize-none" />
            </div>
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">Product Images (Max 10)</label>
              <input ref={fileInputRef} type="file" accept="image/png,image/jpeg,image/webp" multiple onChange={handleFileChange} className="hidden" />
              {productImages.length > 0 && (
                <div className="flex flex-wrap gap-[8px] mb-[12px]">
                  {productImages.map((img, i) => (
                    <div key={i} className="relative size-[72px] rounded-[8px] overflow-hidden border border-gray-200">
                      <img src={img} alt={`Image ${i + 1}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(i)}
                        className="absolute top-[2px] right-[2px] bg-red-500 text-white rounded-full size-[18px] flex items-center justify-center text-[11px] leading-none hover:bg-red-600"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {productImages.length < 10 && (
                <button type="button" onClick={() => fileInputRef.current?.click()} className="bg-gray-100 text-[#2d2d2d] px-[16px] py-[8px] rounded-[8px] hover:bg-gray-200 transition-colors font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[13px]">
                  {productImages.length > 0 ? 'Add More Images' : 'Upload Images'}
                </button>
              )}
            </div>
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Shades (optional)
              </label>
              {shades.map(shade => (
                <div key={shade.id} className="flex items-center gap-[8px] mb-[8px]">
                  <input
                    type="color"
                    value={shade.color}
                    onChange={e => updateShade(shade.id, 'color', e.target.value)}
                    className="size-[36px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.1)] cursor-pointer p-0"
                  />
                  <input
                    type="text"
                    value={shade.name}
                    onChange={e => updateShade(shade.id, 'name', e.target.value)}
                    placeholder="Shade name"
                    className="flex-1 h-[36px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.1)] px-[12px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                  />
                  <input
                    type="number"
                    value={shade.stock}
                    onChange={e => updateShadeStock(shade.id, parseInt(e.target.value) || 0)}
                    min="0"
                    placeholder="Stock"
                    className="w-[72px] h-[36px] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.1)] px-[8px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[13px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors text-center"
                    title="Stock for this shade"
                  />
                  <button
                    type="button"
                    onClick={() => removeShade(shade.id)}
                    className="text-red-500 hover:text-red-600 text-[18px] leading-none px-[4px]"
                    title="Remove shade"
                  >
                    &times;
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addShade}
                className="text-[#ff1a75] hover:text-[#e01666] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[13px] flex items-center gap-[4px] mt-[4px]"
              >
                <span className="text-[16px]">+</span> Add Shade
              </button>
              {shades.length > 0 && (
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[11px] text-[#4a5565] mt-[4px]">
                  Total shade stock: {shades.reduce((sum, s) => sum + s.stock, 0)}
                </p>
              )}
            </div>
            <div className="flex gap-[16px] pt-[8px]">
              <button type="submit" className="flex-1 bg-[#ff1a75] text-white h-[48px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]">
                Save Changes
              </button>
              <button type="button" onClick={onClose} className="flex-1 border-[1px] border-[rgba(0,0,0,0.1)] text-[#2d2d2d] h-[48px] rounded-[26843500px] hover:bg-gray-50 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function AdminProductsPage() {
  const { adminProducts, deleteProduct } = useAdmin();
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<AdminProduct | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = adminProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteProduct(id);
    }
  };

  const getStockStatus = (stock: number) => {
    if (stock > 50) return { label: 'In Stock', color: 'bg-green-100 text-green-800' };
    if (stock > 0) return { label: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    return { label: 'Out of Stock', color: 'bg-red-100 text-red-800' };
  };

  return (
    <AdminLayout>
      <div className="p-[32px]">
        <div className="flex items-center justify-between mb-[32px]">
          <div>
            <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-[#2d2d2d] mb-[4px]">
              Products
            </h1>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#4a5565]">
              Manage your product catalog
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="bg-[#ff1a75] text-white px-[24px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] flex items-center gap-[8px]"
          >
            <span className="text-[18px]">+</span>
            Add New Product
          </button>
        </div>

        <div className="bg-white rounded-[16px] border-[1px] border-[rgba(0,0,0,0.05)]">
          <div className="p-[24px] border-b border-gray-100">
            <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[20px] text-[#2d2d2d] mb-[16px]">
              Product Management
            </h2>
            <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565] mb-[24px]">
              Manage your product catalog
            </p>
            <div className="grid grid-cols-2 gap-[16px]">
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">Search Products</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by name..."
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                />
              </div>
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#4a5565] block mb-[8px]">Filter by Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                >
                  <option value="All">All Categories</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Fragrance">Fragrance</option>
                  <option value="Body Care">Body Care</option>
                </select>
              </div>
            </div>
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
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] text-green-600">{product.stock}</p>
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
                            onClick={() => setEditingProduct(product)}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                            title="Edit"
                          >
                            <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                              <path d="M14.166 2.5c.442-.442 1.028-.69 1.644-.69.615 0 1.201.248 1.643.69.442.442.69 1.028.69 1.644 0 .615-.248 1.201-.69 1.643l-9 9-4.5 1.5 1.5-4.5 9-9z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(product.id, product.name)}
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
        </div>
      </div>

      <AddProductModal isOpen={showAddModal} onClose={() => setShowAddModal(false)} />
      {editingProduct && <EditProductModal product={editingProduct} onClose={() => setEditingProduct(null)} />}
    </AdminLayout>
  );
}
