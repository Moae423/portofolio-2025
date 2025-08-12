"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

type FadeupProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  duration?: number;
};

const Fadeup = ({
  children,
  delay = 0,
  duration = 0.3,
  className = "",
}: FadeupProps) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: duration, delay: delay }
    );
  }, [delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default Fadeup;
