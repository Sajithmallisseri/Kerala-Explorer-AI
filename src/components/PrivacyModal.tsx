import React from "react";
import { X, ShieldCheck } from "lucide-react";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#0B4635] text-amber-300 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="font-editorial text-xl font-bold text-stone-900">
                Privacy Policy
              </h3>
              <p className="text-xs text-stone-500">Kerala Explorer · Effective March 2026</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-stone-700 text-sm leading-relaxed">
          <p>
            Welcome to <strong>Kerala Explorer</strong>. We are committed to safeguarding the privacy of our readers and travelers. This Privacy Policy details our data practices for visitors to our website.
          </p>

          <h4 className="font-editorial font-bold text-stone-900 text-base pt-2">
            1. Information Collection
          </h4>
          <p>
            We only collect personal information that you voluntarily submit through our contact form (such as your name, email address, subject, and message content). We do not collect cookies for tracking or sell personal identifiable data to third-party ad networks.
          </p>

          <h4 className="font-editorial font-bold text-stone-900 text-base pt-2">
            2. Use of Information
          </h4>
          <p>
            Information submitted via the contact form is used strictly to respond to your specific travel inquiries, provide itinerary suggestions, or address editorial correspondence regarding Kerala tourism.
          </p>

          <h4 className="font-editorial font-bold text-stone-900 text-base pt-2">
            3. Editorial Integrity & Independence
          </h4>
          <p>
            Kerala Explorer produces independent, non-commercial travel journalism. We do not accept sponsored reviews or unverified commercial listings. All recommendations for destinations, houseboats, and nature trails are curated by our editorial team.
          </p>

          <h4 className="font-editorial font-bold text-stone-900 text-base pt-2">
            4. Contact
          </h4>
          <p>
            If you have questions regarding this policy or our data practices, reach us directly at <span className="text-[#0B4635] font-semibold">editorial@keralaexplorer.org</span>.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-200 bg-stone-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0B4635] hover:bg-[#072E23] rounded-lg transition-colors cursor-pointer"
          >
            Close Policy
          </button>
        </div>
      </div>
    </div>
  );
};
