import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-jb2io044fs';
import imgCd from "figma:asset/ee9502f27a3c8a5686d370ae7c2af25d658eca1b.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { signup } = useApp();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!acceptTerms) {
      setError('Please accept the Terms & Conditions');
      return;
    }
    
    setLoading(true);
    try {
      const success = await signup({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password
      });
      
      if (success) {
        navigate('/');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white relative min-h-screen">
      <div className="relative min-h-screen">
        <img alt="Background" className="absolute inset-0 w-full h-full object-cover" src={imgCd} />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.15)]" />
        
        <div className="relative min-h-screen flex items-center justify-center px-[32px] py-[48px]">
          <div className="w-[448px]">
            {/* Logo and Title */}
            <div className="text-center mb-[32px]">
              <div className="h-[145.536px] w-[389.33px] mx-auto mb-[24px]">
                <img alt="Mariqits Logo" className="w-full h-full object-contain" src={img02} />
              </div>
              <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#e6ebbd] mb-[8px]">
                Create Your Account
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#fefffa]">
                Join our beauty community today
              </p>
            </div>
            
            {/* Sign Up Form */}
            <div className="bg-white rounded-[24px] border-[0.8px] border-[rgba(255,102,178,0.2)] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-[32px]">
              <form onSubmit={handleSubmit} className="space-y-[20px]">
                {/* Full Name */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Full Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Maria Santos"
                      required
                      className="w-full h-[49.6px] rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.3)] pl-[48px] pr-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none focus:border-[#ff1a75] transition-colors"
                    />
                    <div className="absolute left-[16px] top-[14.8px] size-[20px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p2026e800} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p32ab0300} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Email */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full h-[49.6px] rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.3)] pl-[48px] pr-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none focus:border-[#ff1a75] transition-colors"
                    />
                    <div className="absolute left-[16px] top-[14.8px] size-[20px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.pd919a80} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p189c1170} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Phone */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+63 912 345 6789"
                      className="w-full h-[49.6px] rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.3)] pl-[48px] pr-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none focus:border-[#ff1a75] transition-colors"
                    />
                    <div className="absolute left-[16px] top-[14.8px] size-[20px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g clipPath="url(#clip0_phone)">
                          <path d={svgPaths.p1a7ce800} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                        <defs>
                          <clipPath id="clip0_phone">
                            <rect fill="white" height="20" width="20" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Password */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Create a strong password"
                      required
                      className="w-full h-[49.6px] rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.3)] pl-[48px] pr-[48px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none focus:border-[#ff1a75] transition-colors"
                    />
                    <div className="absolute left-[16px] top-[14.8px] size-[20px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p2566d000} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p1bf79e00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-[16px] top-[14.8px] size-[20px]"
                    >
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p338f2df0} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p3b27f100} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Confirm Password */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                      className="w-full h-[49.6px] rounded-[16px] border-[0.8px] border-[rgba(255,102,178,0.3)] pl-[48px] pr-[16px] font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#2d2d2d] placeholder:text-[rgba(45,45,45,0.5)] outline-none focus:border-[#ff1a75] transition-colors"
                    />
                    <div className="absolute left-[16px] top-[14.8px] size-[20px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                        <g>
                          <path d={svgPaths.p2566d000} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                          <path d={svgPaths.p1bf79e00} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Terms & Conditions */}
                <label className="flex items-start gap-[8px] cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-[16px] h-[16px] rounded border-[1px] border-[rgba(255,102,178,0.3)] mt-[4px]"
                  />
                  <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px] text-[#364153] leading-[24px]">
                    I agree to the{' '}
                    <span className="text-[#ff1a75]">Terms & Conditions</span>
                    {' '}and{' '}
                    <span className="text-[#ff1a75]">Privacy Policy</span>
                  </span>
                </label>
                
                {/* Error Message */}
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-[8px] p-[12px]">
                    <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-red-600">
                      {error}
                    </p>
                  </div>
                )}
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#ff1a75] h-[56px] rounded-[26843500px] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px] text-white hover:bg-[#e01666] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>
              
              {/* Sign In Link */}
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-center text-[#4a5565] mt-[24px]">
                Already have an account?{' '}
                <button
                  onClick={() => navigate('/signin')}
                  className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#ff1a75] hover:underline"
                >
                  Sign In
                </button>
              </p>
            </div>
            
            {/* Back to Shopping */}
            <button
              onClick={() => navigate('/')}
              className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[20px] text-white text-center w-full mt-[24px] hover:underline"
            >
              ← Back to Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
