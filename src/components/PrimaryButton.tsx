import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export function PrimaryButton({ children, className = '', ...props }: PrimaryButtonProps) {
    return (
        <button
            className={`px-6 py-2 bg-brand-gold text-white rounded-full font-light tracking-wide transition-colors hover:bg-brand-gold-hover focus-visible:outline-2 focus-visible:outline-brand-gold focus-visible:outline-offset-2 disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
