"use client";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Remove loader after window load event
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500); // optional smooth fade
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return (
    <div
      id="preloader"
      className="fixed inset-0 flex items-center justify-center bg-white z-[9999]"
    >
      <div className="loader border-4 border-blue-500 border-t-transparent rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
}
