import type { ReactNode } from 'react';

interface InfoCardProps {
    title: string;
    description: string;
    icon?: ReactNode;
}

export function InfoCard({ title, description, icon }: InfoCardProps) {
    return (
        <div className="bg-brand-light p-6 rounded-[2rem] border border-brand-border transition-all hover:-translate-y-1 hover:shadow-sm">
            <div className="flex items-center gap-3 mb-4">
                {icon && <div className="text-brand-gold text-2xl">{icon}</div>}
                <h3 className="text-xl font-medium tracking-wide text-brand-text">{title}</h3>
            </div>
            <p className="text-brand-text/70 leading-relaxed font-light">
                {description}
            </p>
        </div>
    );
}
