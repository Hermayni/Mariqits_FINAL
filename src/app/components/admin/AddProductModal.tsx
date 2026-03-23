import { useState, useRef } from 'react';
import { useAdmin, AdminProduct } from '../../context/AdminContext';

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddProductModal({ isOpen, onClose }: AddProductModalProps) {
  const { addProduct } = useAdmin();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    brand: '',
    rating: 4.5,
    reviews: 0
  });
  
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [shades, setShades] = useState<Array<{ id: string; name: string; color: string; stock: number }>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  if (!isOpen) return null;
  
  const addShade = () =>
    setShades(prev => [...prev, { id: Date.now().toString(), name: '', color: '#ff6b9d', stock: 0 }]);

  const updateShade = (id: string, field: 'name' | 'color', value: string) =>
    setShades(prev => prev.map(s => s.id === id ? { ...s, [field]: value } : s));

  const updateShadeStock = (id: string, stock: number) =>
    setShades(prev => prev.map(s => s.id === id ? { ...s, stock } : s));

  const removeShade = (id: string) =>
    setShades(prev => prev.filter(s => s.id !== id));
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    files.slice(0, 10 - uploadedImages.length).forEach(file => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        setUploadedImages(prev => [...prev, ev.target?.result as string].slice(0, 10));
      };
      reader.readAsDataURL(file);
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };
  
  const removeImage = (index: number) => {
    setUploadedImages(prev => prev.filter((_, i) => i !== index));
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 viewBox=%220 0 400 400%22%3E%3Crect width=%22400%22 height=%22400%22 fill=%22%23f8e8f0%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2216%22 fill=%22%23cc5590%22%3EImage%3C/text%3E%3C/svg%3E';
    const computedStock = shades.length > 0
      ? shades.reduce((sum, s) => sum + s.stock, 0)
      : parseInt(formData.stock);
    const newProduct: Omit<AdminProduct, 'id'> = {
      name: formData.name,
      brand: formData.brand,
      price: parseFloat(formData.price),
      stock: computedStock,
      category: formData.category,
      description: formData.description,
      rating: formData.rating,
      reviews: formData.reviews,
      status: computedStock > 50 ? 'In Stock' : computedStock > 0 ? 'Low Stock' : 'Out of Stock',
      image: uploadedImages[0] || placeholderImage,
      images: uploadedImages.length > 0 ? uploadedImages : undefined,
      inStock: computedStock > 0,
      shades: shades.length > 0 ? shades : undefined
    };
    
    addProduct(newProduct);
    onClose();
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      brand: '',
      rating: 4.5,
      reviews: 0
    });
    setUploadedImages([]);
    setShades([]);
  };
  
  const handleCancel = () => {
    onClose();
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      brand: '',
      rating: 4.5,
      reviews: 0
    });
    setUploadedImages([]);
    setShades([]);
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-[32px]">
      <div className="bg-white rounded-[24px] w-full max-w-[560px] max-h-[90vh] overflow-auto">
        <div className="p-[32px]">
          <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[28px] text-[#2d2d2d] mb-[24px]">
            Add New Product
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-[20px]">
            {/* Product Name */}
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Product Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                placeholder="Enter product name"
              />
            </div>
            
            {/* Brand */}
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Brand *
              </label>
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                required
                className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                placeholder="Enter brand name"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-[16px]">
              {/* Category */}
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                  Category *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                >
                  <option value="">Select category</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Fragrance">Fragrance</option>
                  <option value="Body Care">Body Care</option>
                </select>
              </div>
              
              {/* Price */}
              <div>
                <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                  Price *
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full h-[44px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            {/* Stock Quantity */}
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
                placeholder="0"
              />
            </div>
            
            {/* Description */}
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Description *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={3}
                className="w-full rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] p-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors resize-none"
                placeholder="Enter product description"
              />
            </div>
            
            {/* Product Images */}
            <div>
              <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                Product Images (Max 10 images)
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                multiple
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="border-[2px] border-dashed border-[rgba(0,0,0,0.1)] rounded-[12px] p-[32px] text-center">
                <div className="bg-[#ff1a75] rounded-full size-[56px] mx-auto mb-[16px] flex items-center justify-center">
                  <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                    <path d="M4 16L8.586 11.414C9.367 10.633 10.633 10.633 11.414 11.414L16 16M14 14L15.586 12.414C16.367 11.633 17.633 11.633 18.414 12.414L20 14M14 8H14.01M6 20H18C19.105 20 20 19.105 20 18V6C20 4.895 19.105 4 18 4H6C4.895 4 4 4.895 4 6V18C4 19.105 4.895 20 6 20Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-[#ff1a75] text-white px-[24px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px] mb-[8px]"
                >
                  Choose Files
                </button>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[12px] text-[#4a5565]">
                  or drag and drop images here
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[10px] text-[#99a1af] mt-[8px]">
                  PNG, JPG, or WEBP up to 10MB each
                </p>
                {uploadedImages.length > 0 && (
                  <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[12px] text-[#ff1a75] mt-[12px]">
                    {uploadedImages.length}/10 uploaded
                  </p>
                )}
              </div>
              {uploadedImages.length > 0 && (
                <div className="flex flex-wrap gap-[8px] mt-[12px]">
                  {uploadedImages.map((img, i) => (
                    <div key={i} className="relative size-[72px] rounded-[8px] overflow-hidden border border-gray-200">
                      <img src={img} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
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
            </div>
            
            {/* Shades (optional) */}
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

            {/* Action Buttons */}
            <div className="flex gap-[16px] pt-[8px]">
              <button
                type="submit"
                className="flex-1 bg-[#ff1a75] text-white h-[48px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
              >
                Add Product
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex-1 border-[1px] border-[rgba(0,0,0,0.1)] text-[#2d2d2d] h-[48px] rounded-[26843500px] hover:bg-gray-50 transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
