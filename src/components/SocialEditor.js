"use client";
import { useState } from 'react';

export default function SocialEditor({ socials, setSocials, footerText, setFooterText, onClose }) {
  const [local, setLocal] = useState(socials.map(s => ({ ...s })));
  const [localFooter, setLocalFooter] = useState(footerText ?? 'Lagos • London • The Metaverse');

  const update = (index, key, value) => {
    const next = [...local];
    next[index][key] = value;
    setLocal(next);
  };

  const handleSave = () => {
    setSocials(local);
    if (setFooterText) setFooterText(localFooter);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div className="relative z-70 w-full max-w-2xl bg-[#0b0b0b] border border-white/10 rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Edit Social Handles</h3>

        <div className="space-y-3">
          {local.map((s, i) => (
            <div key={i} className="grid grid-cols-12 gap-2 items-center">
              <input
                className="col-span-3 bg-transparent border border-white/10 px-3 py-2 rounded"
                value={s.platform}
                onChange={(e) => update(i, 'platform', e.target.value)}
              />
              <input
                className="col-span-4 bg-transparent border border-white/10 px-3 py-2 rounded"
                value={s.label}
                onChange={(e) => update(i, 'label', e.target.value)}
              />
              <input
                className="col-span-5 bg-transparent border border-white/10 px-3 py-2 rounded"
                value={s.url}
                onChange={(e) => update(i, 'url', e.target.value)}
              />
            </div>
          ))}
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-400">Footer text</label>
          <input value={localFooter} onChange={(e) => setLocalFooter(e.target.value)} className="w-full mt-2 bg-transparent border border-white/10 px-3 py-2 rounded" />
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 bg-white/5 rounded">Cancel</button>
          <button onClick={handleSave} className="px-4 py-2 bg-[#d4af37] rounded">Save</button>
        </div>
      </div>
    </div>
  );
}
