// components/Footer.js
export default function Footer({ socials, footerText }) {
  return (
    <footer className="w-full bg-black py-16 border-t border-white/5 px-6">
      <div className="site-container flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-left">
          <h2 className="text-lg font-medium uppercase tracking-tight">Whitespace</h2>
          <p className="footer-small mt-2">{footerText ?? 'Lagos • London • The Metaverse'} — © 2026</p>
        </div>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a key={social.platform} href={social.url} className="footer-small uppercase hover:text-white transition">{social.platform}</a>
          ))}
        </div>

      </div>
    </footer>
  );
}