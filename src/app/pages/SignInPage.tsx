import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useApp } from '../context/AppContext';
import svgPaths from '../../imports/svg-zuiu5uo26t';
import imgCd from "figma:asset/ee9502f27a3c8a5686d370ae7c2af25d658eca1b.png";
import img02 from "figma:asset/ba119a9e2e8b27c7be4b349e34201ae6f511ca0e.png";

export default function SignInPage() {
  const navigate = useNavigate();
  const { login } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      const success = await login(email, password);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="bg-white relative min-h-screen">
      <div className="relative h-screen">
        <img alt="Background" className="absolute inset-0 w-full h-full object-cover" src={imgCd} />
        <div className="absolute inset-0 bg-[rgba(26,26,26,0.15)]" />
        
        <div className="relative h-full flex items-center justify-center px-[32px]">
          <div className="w-[448px]">
            {/* Logo and Title */}
            <div className="text-center mb-[32px]">
              <div className="h-[145.536px] w-[389.33px] mx-auto mb-[24px]">
                <img alt="Mariqits Logo" className="w-full h-full object-contain" src={img02} />
              </div>
              <h2 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[24px] text-[#e6ebbd] mb-[8px]">
                Welcome Back
              </h2>
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-[#fefffa]">
                Sign in to continue shopping
              </p>
            </div>
            
            {/* Sign In Form */}
            <div className="bg-white rounded-[24px] border-[0.8px] border-[rgba(255,102,178,0.2)] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] p-[32px]">
              {/* Demo Credentials */}
              <div className="bg-[#fff0f8] rounded-[16px] p-[16px] mb-[20px]">
                <p className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] mb-[8px]">
                  Demo Credentials:
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#364153] mb-[4px]">
                  User: maria@example.com / password123
                </p>
                <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[14px] text-[#364153]">
                  Admin: admin@mariqits.com / admin123
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-[20px]">
                {/* Email */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                
                {/* Password */}
                <div>
                  <label className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#2d2d2d] block mb-[8px]">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
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
                        <path d={showPassword ? svgPaths.pcb0000 : svgPaths.p2314a170} stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-[8px] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-[16px] h-[16px] rounded border-[1px] border-[rgba(255,102,178,0.3)]"
                    />
                    <span className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[16px] text-[#364153]">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="font-['Plus_Jakarta_Sans:Medium',sans-serif] font-medium text-[14px] text-[#ff1a75] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
                
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
                  {loading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>
              
              {/* Sign Up Link */}
              <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[16px] text-center text-[#4a5565] mt-[24px]">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[#ff1a75] hover:underline"
                >
                  Create Account
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
