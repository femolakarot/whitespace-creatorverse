// components/Logo.js
export default function Logo({ className }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* This is a minimalist 'W' aesthetic for Whitespace */}
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="4" fill="white"/>
        <path d="M10 12L15 28L20 18L25 28L30 12" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-bold tracking-tighter uppercase">Whitespace</span>
    </div>
  );
}