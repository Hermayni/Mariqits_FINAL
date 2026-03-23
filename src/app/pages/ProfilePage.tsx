import { useState } from 'react';
import { useNavigate } from 'react-router';
import Layout from '../components/Layout';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-kg0knx8ha0';

export default function ProfilePage() {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, updateProfile, changePassword, updatePrivacySettings } = useApp();
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'security' | 'privacy'>('profile');
  
  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: user?.city || '',
    postalCode: user?.postalCode || ''
  });
  
  // Password form state
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  // Privacy settings state
  const [privacySettings, setPrivacySettings] = useState({
    shareData: user?.privacySettings?.shareData ?? false,
    emailNotifications: user?.privacySettings?.emailNotifications ?? true,
    smsNotifications: user?.privacySettings?.smsNotifications ?? false
  });
  
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  if (!isAuthenticated || !user) {
    navigate('/signin');
    return null;
  }
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    
    const success = await updateProfile(profileForm);
    if (success) {
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrorMessage('Failed to update profile');
    }
  };
  
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');
    
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      setErrorMessage('New passwords do not match');
      return;
    }
    
    const result = await changePassword(passwordForm.currentPassword, passwordForm.newPassword);
    if (result.success) {
      setSuccessMessage('Password changed successfully!');
      setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrorMessage(result.error || 'Failed to change password');
    }
  };
  
  const handlePrivacyUpdate = async () => {
    setErrorMessage('');
    setSuccessMessage('');
    
    const success = await updatePrivacySettings(privacySettings);
    if (success) {
      setSuccessMessage('Privacy settings updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } else {
      setErrorMessage('Failed to update privacy settings');
    }
  };
  
  return (
    <Layout>
      <div className="bg-white min-h-[600px]">
        {/* Hero Header */}
        <div 
          className="h-[200px] flex items-center justify-center"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(255, 161, 204) 0%, rgb(255, 173, 211) 10%, rgb(255, 185, 217) 20%, rgb(255, 196, 224) 30%, rgb(255, 207, 231) 40%, rgb(255, 217, 238) 50%, rgb(255, 226, 244) 60%, rgb(255, 235, 250) 70%, rgb(255, 242, 253) 80%, rgb(255, 249, 255) 90%, rgb(255, 255, 255) 100%)" }}
        >
          <div className="max-w-[1200px] w-full mx-auto px-[32px] flex items-center gap-[24px]">
            <div className="bg-white rounded-full size-[80px] flex items-center justify-center shadow-lg">
              <svg className="size-[48px]" fill="none" viewBox="0 0 20 20">
                <g>
                  <path d={svgPaths.p2026e800} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  <path d={svgPaths.p32ab0300} stroke="#FF1A75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                </g>
              </svg>
            </div>
            <div>
              <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[32px] text-white mb-[4px]">
                Welcome back, {user.name}!
              </h1>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-white opacity-90">
                {user.email}
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-[1200px] mx-auto px-[32px] py-[48px]">
          <div className="grid grid-cols-4 gap-[32px]">
            {/* Sidebar Navigation */}
            <div className="col-span-1">
              <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[24px]">
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`w-full text-left px-[16px] py-[12px] rounded-[8px] mb-[8px] transition-colors ${
                    activeTab === 'profile' ? 'bg-pink-50 text-[#ff1a75]' : 'text-[#4a5565] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]">
                    Profile Information
                  </p>
                </button>
                <button
                  onClick={() => navigate('/orders')}
                  className="w-full text-left px-[16px] py-[12px] rounded-[8px] mb-[8px] text-[#4a5565] hover:bg-gray-50 transition-colors"
                >
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]">
                    My Orders
                  </p>
                </button>
                <button
                  onClick={() => setActiveTab('security')}
                  className={`w-full text-left px-[16px] py-[12px] rounded-[8px] mb-[8px] transition-colors ${
                    activeTab === 'security' ? 'bg-pink-50 text-[#ff1a75]' : 'text-[#4a5565] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]">
                    Change Password
                  </p>
                </button>
                <button
                  onClick={() => setActiveTab('privacy')}
                  className={`w-full text-left px-[16px] py-[12px] rounded-[8px] mb-[8px] transition-colors ${
                    activeTab === 'privacy' ? 'bg-pink-50 text-[#ff1a75]' : 'text-[#4a5565] hover:bg-gray-50'
                  }`}
                >
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]">
                    Privacy Settings
                  </p>
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-[16px] py-[12px] rounded-[8px] text-red-600 hover:bg-red-50 transition-colors mt-[16px] border-t border-gray-200 pt-[24px]"
                >
                  <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[14px]">
                    Logout
                  </p>
                </button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-3">
              {/* Success/Error Messages */}
              {successMessage && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-[24px] py-[16px] rounded-[12px] mb-[24px]">
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-[24px] py-[16px] rounded-[12px] mb-[24px]">
                  {errorMessage}
                </div>
              )}
              
              {/* Profile Information Tab */}
              {activeTab === 'profile' && (
                <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[32px]">
                  <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                    Profile Information
                  </h2>
                  
                  <form onSubmit={handleProfileUpdate} className="space-y-[20px]">
                    <div className="grid grid-cols-2 gap-[20px]">
                      <div>
                        <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={profileForm.name}
                          onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                          className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                          Email
                        </label>
                        <input
                          type="email"
                          value={profileForm.email}
                          onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
                          className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={profileForm.phone}
                        onChange={(e) => setProfileForm({ ...profileForm, phone: e.target.value })}
                        className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        Address
                      </label>
                      <input
                        type="text"
                        value={profileForm.address}
                        onChange={(e) => setProfileForm({ ...profileForm, address: e.target.value })}
                        className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        placeholder="House no., Street name, Barangay"
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-[20px]">
                      <div>
                        <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                          City
                        </label>
                        <input
                          type="text"
                          value={profileForm.city}
                          onChange={(e) => setProfileForm({ ...profileForm, city: e.target.value })}
                          className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          value={profileForm.postalCode}
                          onChange={(e) => setProfileForm({ ...profileForm, postalCode: e.target.value })}
                          className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-[#ff1a75] text-white px-[32px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
                    >
                      Save Changes
                    </button>
                  </form>
                </div>
              )}
              
              {/* Change Password Tab */}
              {activeTab === 'security' && (
                <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[32px]">
                  <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                    Change Password
                  </h2>
                  
                  <form onSubmit={handlePasswordChange} className="space-y-[20px] max-w-[500px]">
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={passwordForm.currentPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                        className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                        className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                        className="w-full h-[48px] rounded-[12px] border-[1px] border-[rgba(0,0,0,0.1)] px-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#2d2d2d] outline-none focus:border-[#ff1a75] transition-colors"
                        required
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="bg-[#ff1a75] text-white px-[32px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
                    >
                      Change Password
                    </button>
                  </form>
                </div>
              )}
              
              {/* Privacy Settings Tab */}
              {activeTab === 'privacy' && (
                <div className="bg-white border-[0.8px] border-[rgba(255,102,178,0.2)] rounded-[16px] p-[32px]">
                  <h2 className="font-['Playfair_Display:SemiBold',sans-serif] font-semibold text-[24px] text-[#2d2d2d] mb-[24px]">
                    Privacy Settings
                  </h2>
                  
                  <div className="space-y-[24px] max-w-[600px]">
                    <div className="flex items-start gap-[16px]">
                      <input
                        type="checkbox"
                        checked={privacySettings.shareData}
                        onChange={(e) => setPrivacySettings({ ...privacySettings, shareData: e.target.checked })}
                        className="mt-[4px] size-[20px] rounded-[4px] border-[1px] border-gray-300 accent-[#ff1a75] cursor-pointer"
                      />
                      <div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                          Share my data for product recommendations
                        </p>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Allow us to use your shopping history to recommend products you might like
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-[16px]">
                      <input
                        type="checkbox"
                        checked={privacySettings.emailNotifications}
                        onChange={(e) => setPrivacySettings({ ...privacySettings, emailNotifications: e.target.checked })}
                        className="mt-[4px] size-[20px] rounded-[4px] border-[1px] border-gray-300 accent-[#ff1a75] cursor-pointer"
                      />
                      <div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                          Email Notifications
                        </p>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Receive updates about your orders, promotions, and new products
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-[16px]">
                      <input
                        type="checkbox"
                        checked={privacySettings.smsNotifications}
                        onChange={(e) => setPrivacySettings({ ...privacySettings, smsNotifications: e.target.checked })}
                        className="mt-[4px] size-[20px] rounded-[4px] border-[1px] border-gray-300 accent-[#ff1a75] cursor-pointer"
                      />
                      <div>
                        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-[#2d2d2d] mb-[4px]">
                          SMS Notifications
                        </p>
                        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#4a5565]">
                          Receive order updates and delivery notifications via SMS
                        </p>
                      </div>
                    </div>
                    
                    <button
                      onClick={handlePrivacyUpdate}
                      className="bg-[#ff1a75] text-white px-[32px] py-[12px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
                    >
                      Save Settings
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
