import { SidebarMenu } from './components/SidebarMenu';
import { PrimaryButton } from './components/PrimaryButton';
import { InfoCard } from './components/InfoCard';

export function App() {
  const menuItems = [
    { id: '1', label: 'el menu', href: '#' },
    { id: '2', label: 'cava de vinos', href: '#' },
    { id: '3', label: 'el chef', href: '#' },
    { id: '4', label: 'reservas', href: '#' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* header */}
      <header className="border-b border-brand-border py-5 px-6 md:px-10 flex items-center justify-between z-10 w-full">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-serif text-brand-gold tracking-widest font-medium">
            AURUM
          </h1>
        </div>
        <PrimaryButton onClick={() => alert('¡reserva iniciada!')}>
          reservar mesa
        </PrimaryButton>
      </header>

      <div className="flex flex-col md:flex-row flex-1 w-full max-w-[90rem] mx-auto p-4 md:p-8 gap-4 md:gap-8">
        <main className="flex-1 bg-brand-surface border border-brand-border rounded-[3rem] p-8 md:p-12 shadow-sm min-h-[500px]">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-brand-text leading-tight font-light">
              la esencia pura <br className="hidden md:block" />
              de la gastronomia
            </h2>
            <p className="text-lg text-brand-text/70 leading-relaxed font-light mb-12">
              bienvenido a aurum. un refugio culinario donde la tradicion
              se funde con sabores asombrosos. nuestra filosofia se enfoca en
              la pureza de los ingredientes de temporada y la hospitalidad excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <InfoCard
              title="platos insignia"
              description="creaciones estacionales de alta cocina que reflejan nuestra verdadera pasion culinaria blanca y dorada."
            />
            <InfoCard
              title="maridaje exclusivo"
              description="una meticulosa seleccion de vinos para lograr armonia asombrosa en cada bocado."
            />
          </div>
        </main>

        <div className="md:w-80 shrink-0">
          <div className="md:sticky md:top-8 h-full md:h-[calc(100vh-140px)] min-h-[400px]">
            <SidebarMenu items={menuItems} />
          </div>
        </div>
      </div>

      {/* footer */}
      <footer className="border-t border-brand-border p-6 mt-auto text-center w-full">
        <p className="text-brand-text/50 text-[11px] font-medium uppercase tracking-[0.2em]">
          aurum restaurant © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
