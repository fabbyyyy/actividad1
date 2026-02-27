interface MenuItem {
    id: string;
    label: string;
    href: string;
}

interface SidebarMenuProps {
    items: MenuItem[];
}

export function SidebarMenu({ items }: SidebarMenuProps) {
    return (
        <aside className="w-full h-full bg-brand-surface border border-brand-border rounded-[3rem] p-8 flex flex-col shadow-sm">
            <h2 className="text-xs font-semibold text-brand-gold mb-8 uppercase tracking-[0.15em]">
                menu navegacion
            </h2>
            <nav className="flex flex-col gap-2 flex-1">
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href}
                        className="px-5 py-3 rounded-2xl text-brand-text/80 font-light hover:bg-brand-light hover:text-brand-gold transition-colors focus-visible:outline-2 focus-visible:outline-brand-gold"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            <div className="mt-8 pt-8 border-t border-brand-border">
                <div className="text-center space-y-2">
                    <p className="text-xs text-brand-text/50 uppercase tracking-widest">
                        horario
                    </p>
                    <p className="text-sm font-light text-brand-text/70">
                        13:00 - 23:00
                    </p>
                </div>
            </div>
        </aside>
    );
}
