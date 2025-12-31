'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
}

export default function CTAButton({
  href,
  children,
  primary = true,
  className = '',
}: CTAButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center space-x-2 px-8 py-4 font-semibold rounded-lg transition-all duration-200 hover:scale-105 ${
        primary
          ? 'bg-primary hover:bg-blue-600 text-white shadow-lg shadow-blue-500/30'
          : 'bg-white hover:bg-gray-100 text-dark'
      } ${className}`}
    >
      <span>{children}</span>
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}
