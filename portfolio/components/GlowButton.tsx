'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface GlowButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  color?: 'blue' | 'purple' | 'green';
  download?: boolean;
  target?: string;
}

export default function GlowButton({ 
  href, 
  className = '', 
  children,
  color = 'blue',
  download,
  target
}: GlowButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Colors based on the color prop
  const colors = {
    blue: {
      glow: 'rgba(52, 152, 219, 0.5)', // accent color with opacity
      rim: 'from-blue-400 via-cyan-400 to-blue-500',
      fill: 'from-blue-500/80 to-blue-600/80'
    },
    purple: {
      glow: 'rgba(155, 89, 182, 0.5)', // purple with opacity
      rim: 'from-purple-400 via-pink-400 to-purple-500',
      fill: 'from-purple-500/80 to-purple-600/80'
    },
    green: {
      glow: 'rgba(46, 204, 113, 0.5)', // green with opacity
      rim: 'from-green-400 via-emerald-400 to-green-500',
      fill: 'from-green-500/80 to-green-600/80'
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isMounted) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  // Respect prefers-reduced-motion
  const prefersReducedMotion = isMounted ? 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center px-6 py-2 rounded-full overflow-hidden glow-button-hover-lift ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={!prefersReducedMotion ? handleMouseMove : undefined}
      style={
        !prefersReducedMotion && isHovered 
          ? { '--x': `${position.x}px`, '--y': `${position.y}px` } as React.CSSProperties 
          : undefined
      }
      download={download}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {/* Outer glow halo */}
      <span 
        className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 ${isHovered ? 'opacity-70 scale-110' : 'opacity-40 scale-100'}`}
        style={{ 
          background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), ${colors[color].glow}, transparent 70%)`,
          transform: prefersReducedMotion ? 'none' : undefined
        }}
      />
      
      {/* Colored rim/stroke */}
      <span 
        className={`absolute inset-0 rounded-full border border-transparent bg-gradient-to-r ${colors[color].rim} opacity-80 mix-blend-screen transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-70'}`}
      />
      
      {/* Warm inner fill */}
      <span 
        className={`absolute inset-0.5 rounded-full bg-gradient-to-r ${colors[color].fill} transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Box shadow for depth */}
      <span 
        className={`absolute inset-px rounded-full shadow-sm transition-all duration-300 ${isHovered ? 'shadow-lg' : ''}`}
      />
      
      {/* Button content */}
      <span className="relative z-10 font-medium text-white">
        {children}
      </span>
    </Link>
  );
}