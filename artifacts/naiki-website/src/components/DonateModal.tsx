import { motion, AnimatePresence } from "framer-motion";
import { X, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useDonate } from "@/contexts/DonateContext";

const ACCOUNT_NUMBER = "03078466695";
const ACCOUNT_NAME   = "Raheel Riaz";
const PROVIDER       = "JazzCash";

const steps = [
  "Open your JazzCash app",
  "Tap Send Money → Mobile Account",
  `Enter number: ${ACCOUNT_NUMBER}`,
  "Enter your donation amount",
  "Confirm & send — it's that simple",
];

export default function DonateModal() {
  const { open, closeDonate } = useDonate();
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(ACCOUNT_NUMBER);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[500] flex items-center justify-center p-4 sm:p-6"
          style={{ backgroundColor: "rgba(22,10,2,0.80)", backdropFilter: "blur(6px)" }}
          onClick={closeDonate}
        >
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md rounded-[28px] overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#FBF4EA" }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="relative flex items-center justify-between px-7 pt-7 pb-6"
              style={{ borderBottom: "1px solid rgba(58,26,8,0.1)" }}
            >
              <div>
                <span className="text-[10px] font-black tracking-[0.26em] uppercase" style={{ color: "#8B5040" }}>
                  {PROVIDER}
                </span>
                <h2 className="text-xl sm:text-2xl font-black mt-0.5" style={{ color: "#1C0E04" }}>
                  Donate to Naiki
                </h2>
              </div>
              <button
                onClick={closeDonate}
                className="w-9 h-9 rounded-full flex items-center justify-center border-0 cursor-pointer transition-colors"
                style={{ backgroundColor: "rgba(58,26,8,0.07)" }}
                data-testid="donate-modal-close"
              >
                <X size={16} style={{ color: "#3A1A08" }} />
              </button>
            </div>

            {/* Account card */}
            <div className="px-7 py-6">
              <div
                className="rounded-[20px] p-5 sm:p-6 mb-5"
                style={{ backgroundColor: "#3A1A08" }}
              >
                <p className="text-[10px] font-black tracking-[0.22em] uppercase mb-3" style={{ color: "rgba(200,149,108,0.55)" }}>
                  Account Details
                </p>

                {/* Number row */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[10px] font-semibold mb-1" style={{ color: "rgba(200,149,108,0.5)" }}>Mobile Number</p>
                    <p className="text-2xl sm:text-3xl font-black tracking-wide text-white">{ACCOUNT_NUMBER}</p>
                  </div>
                  <button
                    onClick={copy}
                    className="shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-2 font-bold text-xs border-0 cursor-pointer transition-all"
                    style={{ backgroundColor: copied ? "#C8956C" : "rgba(200,149,108,0.15)", color: copied ? "#fff" : "#C8956C" }}
                    data-testid="donate-copy-btn"
                  >
                    {copied ? <Check size={13} /> : <Copy size={13} />}
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>

                <div
                  className="flex items-center justify-between pt-3"
                  style={{ borderTop: "1px solid rgba(200,149,108,0.12)" }}
                >
                  <div>
                    <p className="text-[10px] font-semibold mb-0.5" style={{ color: "rgba(200,149,108,0.5)" }}>Account Name</p>
                    <p className="font-bold text-white">{ACCOUNT_NAME}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-semibold mb-0.5" style={{ color: "rgba(200,149,108,0.5)" }}>Provider</p>
                    <p className="font-bold" style={{ color: "#C8956C" }}>{PROVIDER}</p>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div>
                <p className="text-[10px] font-black tracking-[0.22em] uppercase mb-3" style={{ color: "#8B5040" }}>How to donate</p>
                <ol className="space-y-2.5">
                  {steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#5A3D30" }}>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white mt-0.5"
                        style={{ backgroundColor: "#C8956C" }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Footer */}
            <div
              className="px-7 pb-7 pt-2 text-center text-xs"
              style={{ color: "rgba(58,26,8,0.38)" }}
            >
              Every donation — large or small — directly funds youth programs.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
