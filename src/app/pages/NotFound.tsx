import { useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-[32px]">
      <div className="text-center max-w-[600px]">
        <div className="text-[120px] mb-[24px]">404</div>
        <h1 className="font-['Playfair_Display:Bold',sans-serif] font-bold text-[48px] text-[#2d2d2d] mb-[16px]">
          Page Not Found
        </h1>
        <p className="font-['Plus_Jakarta_Sans:Regular',sans-serif] text-[18px] text-[#4a5565] mb-[32px]">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <button
          onClick={() => navigate('/')}
          className="bg-[#ff1a75] text-white px-[32px] py-[16px] rounded-[26843500px] hover:bg-[#e01666] transition-colors font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold text-[16px]"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
