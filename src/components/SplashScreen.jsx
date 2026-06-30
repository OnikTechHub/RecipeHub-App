"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <div className="animate-pulse">
          <Image
            src="/icon-512.png"
            alt="RecipeHub Logo"
            width={140}
            height={140}
            className="animate-bounce"
            priority
          />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}