import React, { useState, useEffect, useRef } from "react";
import {
  Heart,
  QrCode,
  ExternalLink,
  ShieldCheck,
  Check,
  Copy,
  Info,
  Smartphone,
  Sparkles,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import QRCode from "qrcode";
import { buildUpiUri, isValidUpiId, DEFAULT_UPI_CONFIG } from "../config/upiConfig";

export const SupportSection: React.FC = () => {
  // Initialize UPI ID from localStorage or sensible default
  const [upiId, setUpiId] = useState<string>(() => {
    try {
      const saved = localStorage.getItem("kerala_explorer_upi_id");
      if (saved && saved.trim() !== "" && saved !== "YOUR_UPI_ID") {
        return saved.trim();
      }
    } catch {
      // ignore
    }
    // Default sensible starter ID so the QR code is immediately valid and testable out of the box
    return "sajithmallisseri@okhdfcbank";
  });

  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedId, setCopiedId] = useState(false);
  const [openedAppNotice, setOpenedAppNotice] = useState(false);
  const [validationError, setValidationError] = useState<string>("");

  // Hidden anchor ref for direct native intent triggering on mobile browsers
  const intentLinkRef = useRef<HTMLAnchorElement>(null);

  // Validate format
  const isUpiValid = isValidUpiId(upiId);

  // Build the exact UPI URI required:
  // upi://pay?pa=UPI_ID&pn=Kerala%20Explorer&am=1.00&cu=INR&tn=Support%20Kerala%20Explorer
  const upiUri = isUpiValid ? buildUpiUri(upiId) : "";

  // Update QR code whenever valid upiUri changes
  useEffect(() => {
    let isMounted = true;

    if (isUpiValid && upiUri) {
      QRCode.toDataURL(upiUri, {
        width: 320,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
        errorCorrectionLevel: "M",
      })
        .then((url) => {
          if (isMounted) {
            setQrDataUrl(url);
          }
        })
        .catch((err) => {
          console.error("QR Code generation error:", err);
        });
    } else {
      setQrDataUrl("");
    }

    return () => {
      isMounted = false;
    };
  }, [upiUri, isUpiValid]);

  // Handle UPI ID input change
  const handleUpiInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.trim();
    setUpiId(val);
    setOpenedAppNotice(false);

    if (!val) {
      setValidationError("Please enter your UPI ID.");
    } else if (!val.includes("@") || val.startsWith("@") || val.endsWith("@")) {
      setValidationError("UPI ID must include a bank handle (e.g. name@okhdfcbank or mobile@ybl).");
    } else {
      setValidationError("");
      try {
        localStorage.setItem("kerala_explorer_upi_id", val);
      } catch {
        // ignore
      }
    }
  };

  // Quick handle button click
  const handleAppendHandle = (handle: string) => {
    const base = upiId.includes("@") ? upiId.split("@")[0] : upiId || "sajithmallisseri";
    const combined = `${base}${handle}`;
    setUpiId(combined);
    setValidationError("");
    try {
      localStorage.setItem("kerala_explorer_upi_id", combined);
    } catch {
      // ignore
    }
  };

  // Handle "Pay ₹1 with UPI" button click on mobile
  const handlePayClick = (e: React.MouseEvent) => {
    e.stopPropagation();

    if (!isUpiValid) {
      setValidationError("Please enter a valid UPI ID (e.g. yourname@okhdfcbank) before paying.");
      return;
    }

    // Display review instruction banner (Requirement 8 & 13)
    setOpenedAppNotice(true);

    // Guaranteed mobile intent trigger
    if (intentLinkRef.current) {
      intentLinkRef.current.click();
    } else {
      window.location.href = upiUri;
    }
  };

  // Requirement 5: Copy Payment Link button
  const handleCopyPaymentLink = () => {
    if (!isUpiValid || !upiUri) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(upiUri);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  // Copy UPI ID helper
  const handleCopyUpiId = () => {
    if (!upiId) return;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(upiId);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2400);
    }
  };

  return (
    <section id="support" className="py-20 bg-[#F5F2EB]/80 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-md overflow-hidden relative">
          {/* Header Banner */}
          <div className="bg-[#0B4635] text-white p-6 sm:p-8 flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10 flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 text-amber-300 flex items-center justify-center shadow-xs shrink-0">
                <Heart className="w-6 h-6 fill-amber-300/30 text-amber-300" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-300 font-semibold block">
                  Community Supported Journalism
                </span>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                  Support Kerala Explorer
                </h2>
              </div>
            </div>

            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-emerald-100 text-xs font-medium border border-white/15">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Independent & Ad-Free</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Descriptive Intro & Amount */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-100">
              <div className="space-y-2 max-w-xl">
                <p className="text-base sm:text-lg text-stone-800 leading-relaxed font-medium">
                  If you found this article useful, you can support this website with a small contribution.
                </p>
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  Your token support helps keep our Kerala travel guides independent, accurate, and completely free of ads or sponsored listings.
                </p>
              </div>

              {/* Amount Display Badge */}
              <div className="flex items-center gap-3 p-4 bg-[#0B4635]/5 rounded-xl border border-[#0B4635]/15 shrink-0 self-start md:self-center">
                <div className="text-right">
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                    Display Amount
                  </span>
                  <div className="text-3xl sm:text-4xl font-editorial font-bold text-[#0B4635] tabular-nums">
                    ₹1
                  </div>
                </div>
                <div className="h-10 w-[1px] bg-stone-300/60 mx-1" />
                <span className="text-xs text-stone-600 max-w-[100px] leading-tight">
                  One-time UPI test payment
                </span>
              </div>
            </div>

            {/* UPI ID Configuration Input (Requirement 2 & 7) */}
            <div className="p-5 rounded-xl border border-stone-200/90 bg-[#FAF8F5] space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
                <label
                  htmlFor="upi-id-input"
                  className="text-xs font-bold uppercase tracking-wider text-stone-800 flex items-center gap-1.5"
                >
                  <span>Payee UPI ID (VPA)</span>
                  <span className="text-red-500">*</span>
                </label>
                <span className="text-[11px] text-stone-500">
                  Enter your real UPI ID to receive the ₹1 payment on your device
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <div className="relative flex-1">
                  <input
                    id="upi-id-input"
                    type="text"
                    value={upiId}
                    onChange={handleUpiInputChange}
                    placeholder="e.g. sajithmallisseri@okhdfcbank or mobile@ybl"
                    className={`w-full px-3.5 py-2.5 text-sm bg-white border rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#0B4635] font-mono text-stone-900 transition-colors ${
                      validationError
                        ? "border-red-300 focus:ring-red-400"
                        : "border-stone-300"
                    }`}
                  />
                  {isUpiValid && (
                    <span className="absolute right-3 top-3 text-emerald-600 flex items-center gap-1 text-xs font-sans font-medium">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="hidden sm:inline">Valid</span>
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={handleCopyUpiId}
                  disabled={!upiId}
                  className="px-3.5 py-2.5 bg-white hover:bg-stone-100 border border-stone-300 rounded-lg text-xs font-semibold text-stone-700 transition-colors cursor-pointer flex items-center justify-center gap-1.5 shrink-0 disabled:opacity-50"
                >
                  {copiedId ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Copy UPI ID</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick bank handle autocomplete helpers */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-600 pt-1">
                <span className="text-stone-500 text-[11px]">Quick bank handles:</span>
                {["@okhdfcbank", "@okaxis", "@oksbi", "@okicici", "@ybl", "@paytm", "@upi"].map((handle) => (
                  <button
                    key={handle}
                    type="button"
                    onClick={() => handleAppendHandle(handle)}
                    className="px-2 py-0.5 bg-white border border-stone-200 hover:border-[#0B4635] hover:text-[#0B4635] rounded text-[11px] font-mono text-stone-700 transition-colors cursor-pointer"
                  >
                    {handle}
                  </button>
                ))}
              </div>

              {validationError && (
                <div className="flex items-center gap-1.5 text-xs text-red-600 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}
            </div>

            {/* Action Buttons: Pay ₹1 with UPI & Copy Payment Link (Requirement 5 & 6) */}
            <div className="space-y-3">
              {/* Invisible native anchor for cross-browser mobile deep linking */}
              {isUpiValid && (
                <a
                  ref={intentLinkRef}
                  href={upiUri}
                  target="_top"
                  rel="noopener noreferrer"
                  className="sr-only"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  Launch UPI App
                </a>
              )}

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                {/* Requirement 6: "Pay ₹1 with UPI" button */}
                <button
                  type="button"
                  onClick={handlePayClick}
                  disabled={!isUpiValid}
                  className="flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-base font-bold text-white bg-[#0B4635] hover:bg-[#072E23] active:scale-[0.99] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#0B4635] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group"
                  aria-label="Pay ₹1 with UPI"
                >
                  <Smartphone className="w-5 h-5 text-amber-300 group-hover:scale-110 transition-transform" />
                  <span>Pay ₹1 with UPI</span>
                  <ExternalLink className="w-4 h-4 text-emerald-200/90 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Requirement 5: "Copy Payment Link" button */}
                <button
                  type="button"
                  onClick={handleCopyPaymentLink}
                  disabled={!isUpiValid}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl text-sm font-semibold transition-all duration-200 border border-stone-300 bg-white text-stone-700 hover:bg-stone-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-2xs"
                  aria-label="Copy exact UPI payment URI"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#C69214]" />
                      <span>Copy Payment Link</span>
                    </>
                  )}
                </button>
              </div>

              {/* Requirement 8 & 13 Instruction Notice */}
              {openedAppNotice && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-950 text-xs sm:text-sm space-y-1.5 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 font-bold text-[#0B4635]">
                    <Info className="w-4 h-4 text-[#0B4635] shrink-0" />
                    <span>Please review the payment in your UPI app.</span>
                  </div>
                  {/* Requirement 13 exact instruction */}
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                    Scan this QR code with your UPI app and verify the payee and ₹1 amount before paying.
                  </p>
                  <p className="text-[11px] text-emerald-800/80 italic pt-1">
                    Notice: Payment confirmation is handled securely inside your UPI banking app. Kerala Explorer does not confirm or report "Payment Successful" without bank-side verification.
                  </p>
                </div>
              )}
            </div>

            {/* QR Code Presentation Box & Payment Information Grid (Requirement 1, 4, 7, 8, 12, 13) */}
            <div className="p-6 sm:p-8 bg-[#FAF8F5] rounded-2xl border border-stone-200/90 space-y-6">
              {/* Requirement 13 Instruction */}
              <div className="text-center max-w-xl mx-auto space-y-1.5">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0B4635]">
                  <QrCode className="w-4 h-4 text-[#C69214]" />
                  <span>UPI Payment QR Code</span>
                </div>
                {/* Short instruction explicitly mandated in Requirement 13 */}
                <p className="text-sm sm:text-base font-semibold text-stone-800">
                  Scan this QR code with your UPI app and verify the payee and ₹1 amount before paying.
                </p>
                <p className="text-xs text-stone-500">
                  Works seamlessly with Google Pay, PhonePe, Paytm, BHIM, Navi, Cred, and all bank UPI apps.
                </p>
              </div>

              {/* Responsive Layout: QR Code on Left/Center + Payment Information on Right (Requirement 8 & 12) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-3xl mx-auto pt-2">
                {/* Large QR Code Display (Requirement 12: large enough for reliable scanning) */}
                <div className="md:col-span-6 flex flex-col items-center justify-center">
                  {isUpiValid && qrDataUrl ? (
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-stone-300 flex flex-col items-center">
                      <img
                        src={qrDataUrl}
                        alt="Kerala Explorer ₹1 UPI Payment QR Code"
                        className="w-64 h-64 sm:w-72 sm:h-72 object-contain rounded-lg"
                        style={{ imageRendering: "pixelated" }}
                        loading="eager"
                      />
                      <span className="text-[11px] font-mono text-stone-400 mt-2">
                        Scan with any UPI scanner
                      </span>
                    </div>
                  ) : (
                    /* Requirement 7: Validation placeholder before displaying QR code */
                    <div className="w-64 h-64 sm:w-72 sm:h-72 p-6 rounded-2xl border-2 border-dashed border-stone-300 bg-white flex flex-col items-center justify-center text-center space-y-2.5">
                      <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-xs font-bold text-stone-800 uppercase tracking-wider">
                        Valid UPI ID Required
                      </h4>
                      <p className="text-xs text-stone-500 leading-relaxed">
                        Please enter a valid UPI ID (e.g. <code>name@bank</code>) in the field above to generate the ₹1 QR code.
                      </p>
                    </div>
                  )}
                </div>

                {/* Requirement 8: Payment Information Display next to QR Code */}
                <div className="md:col-span-6 space-y-4">
                  <div className="bg-white p-5 rounded-xl border border-stone-200/90 shadow-2xs space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B4635] pb-2 border-b border-stone-100">
                      Verified Payment Information
                    </h4>

                    <div className="space-y-2.5 text-sm">
                      {/* Payee: Kerala Explorer */}
                      <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                        <span className="text-stone-500 font-medium text-xs">Payee:</span>
                        <strong className="text-stone-900 font-semibold">Kerala Explorer</strong>
                      </div>

                      {/* Amount: ₹1.00 */}
                      <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                        <span className="text-stone-500 font-medium text-xs">Amount:</span>
                        <strong className="text-[#0B4635] font-bold text-base tabular-nums">
                          ₹1.00
                        </strong>
                      </div>

                      {/* Purpose: Support Kerala Explorer */}
                      <div className="flex justify-between items-baseline border-b border-stone-100 pb-2">
                        <span className="text-stone-500 font-medium text-xs">Purpose:</span>
                        <span className="text-stone-800 font-medium">
                          Support Kerala Explorer
                        </span>
                      </div>

                      {/* Currency & Target VPA */}
                      <div className="flex justify-between items-baseline">
                        <span className="text-stone-500 font-medium text-xs">Target VPA:</span>
                        <code className="text-stone-800 font-mono text-xs truncate max-w-[160px]">
                          {upiId || "None specified"}
                        </code>
                      </div>
                    </div>
                  </div>

                  {/* Complete UPI URI Transparency Box (Requirement 4: complete UPI URI beginning with upi://pay) */}
                  {isUpiValid && (
                    <div className="bg-stone-100/70 p-3.5 rounded-xl border border-stone-200 text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wide text-stone-500">
                          Encoded UPI URI:
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyPaymentLink}
                          className="text-[11px] text-[#0B4635] hover:underline font-medium cursor-pointer"
                        >
                          {copiedLink ? "Copied" : "Copy"}
                        </button>
                      </div>
                      <code className="block font-mono text-[11px] text-stone-700 bg-white p-2 rounded-md border border-stone-200 break-all select-all">
                        {upiUri}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Requirement 11: Mandatory Security & Credentials Statement */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-3 text-stone-600">
              <ShieldCheck className="w-5 h-5 text-[#0B4635] shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs leading-relaxed">
                <p className="font-semibold text-stone-800">
                  Payment is processed by your UPI app. Kerala Explorer does not see or store your UPI PIN.
                </p>
                <p className="text-stone-500">
                  We do NOT collect or store UPI PIN, OTP, bank password, card information, or other banking credentials. All authentication is strictly handled within your official banking app.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
