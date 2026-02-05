// components/Logo.js
export default function Logo({ className }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="pop">
        <rect x="1.5" y="1.5" width="37" height="37" rx="6" fill="transparent" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <g>
          <path d="M11 14L16 28L20 20L24 28L29 14" stroke="rgb(212,175,55)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
      <span className="text-lg font-medium tracking-tight uppercase" style={{letterSpacing: '-0.02em'}}>Whitespace</span>
    </div>
  );
}