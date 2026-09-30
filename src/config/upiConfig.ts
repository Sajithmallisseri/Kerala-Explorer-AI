/**
 * UPI Payment Configuration and URI Generator
 *
 * Implements the standard UPI URI specification:
 * upi://pay?pa=UPI_ID&pn=Kerala%20Explorer&am=1.00&cu=INR&tn=Support%20Kerala%20Explorer
 */

export interface UpiPaymentConfig {
  upiId: string;
  payeeName: string;
  amount: string;
  currency: string;
  transactionNote: string;
}

export const DEFAULT_UPI_CONFIG: UpiPaymentConfig = {
  upiId: "",
  payeeName: "Kerala Explorer",
  amount: "1.00",
  currency: "INR",
  transactionNote: "Support Kerala Explorer",
};

/**
 * Builds the exact standard UPI payment URI:
 * upi://pay?pa=UPI_ID&pn=Kerala%20Explorer&am=1.00&cu=INR&tn=Support%20Kerala%20Explorer
 */
export function buildUpiUri(upiId: string): string {
  const cleanId = upiId.trim();
  const pn = "Kerala%20Explorer";
  const am = "1.00";
  const cu = "INR";
  const tn = "Support%20Kerala%20Explorer";

  return `upi://pay?pa=${cleanId}&pn=${pn}&am=${am}&cu=${cu}&tn=${tn}`;
}

/**
 * Validates that the UPI ID is not empty and conforms to a reasonable UPI VPA format.
 * Must contain an identifier and bank handle separated by '@' (e.g. name@okhdfcbank, mobile@ybl, name@upi)
 */
export function isValidUpiId(id: string): boolean {
  if (!id) return false;
  const trimmed = id.trim();
  if (trimmed === "" || trimmed === "YOUR_UPI_ID") return false;
  // Reasonable UPI VPA format: letters, numbers, dots, hyphens, underscores followed by @ and bank handle
  return /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z0-9.\-_]{2,}$/i.test(trimmed);
}
