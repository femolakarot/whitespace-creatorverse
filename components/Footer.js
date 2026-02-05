// components/Footer.js
export default function Footer({ socials }) {
  return (
    <footer className="w-full bg-black py-20 border-t border-white/10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold uppercase tracking-tighter">Whitespace.</h2>
          <p className="text-gray-500 text-xs mt-2 max-w-xs">
            Lagos • London • The Metaverse <br/>
            © 2026 Whitespace Creatorverse.
          </p>
        </div>

        {/* Dynamic Socials */}
        <div className="flex gap-8">
          {socials.map((social) => (
            <a 
              key={social.platform} 
              href={social.url} 
              className="text-sm text-gray-400 hover:text-white uppercase tracking-widest transition"
            >
              {social.platform}
            </a>
          ))}
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Join the Team</a>
        </div>

      </div>
    </footer>
  );
}