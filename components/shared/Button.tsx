'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-navy-900 text-white border border-navy-900 hover:bg-navy-800 dark:bg-slate-100 dark:text-navy-900 dark:border-slate-100 dark:hover:bg-white',
  secondary:
    'bg-cyan-500 text-white border border-cyan-500 hover:bg-cyan-600 dark:bg-cyan-500 dark:border-cyan-500 dark:hover:bg-cyan-600',
  outline:
    'bg-transparent text-navy-900 border border-navy-200 hover:border-navy-400 hover:bg-navy-50 dark:text-white dark:border-white/20 dark:hover:border-white/40 dark:hover:bg-white/5',
  ghost:
    'bg-transparent text-navy-700 border border-transparent hover:bg-navy-50 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/10',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-sm',
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      isLoading,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
      'transition-colors duration-150 cursor-pointer',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      const linkProps = external
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : {};
      return (
        <a href={href} {...linkProps} className={baseClasses}>
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
