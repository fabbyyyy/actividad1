# Actividad 1 - Mini Aplicación React (Aurum Restaurant)

## Descripción
Esta es una mini aplicación creada con Vite + React y Tailwind CSS para la Actividad 1. Implementa un layout completo con header, contenido principal, sidebar fija en pc y footer.

## Decisiones de Diseño
1. **Temática e Inspiración**:
   - He estado haciendo proyectos relacionados con restaurantes últimamente, por lo que decidí enfocar este proyecto como una especie de página para un restaurante fino ("Aurum").
   - Quería experimentar con el color blanco ya que muchos sitios de restaurantes de alto nivel usan tonos muy oscuros y pesados. Este enfoque minimalista (blanco y dorado) permite que la interfaz se sienta pura, ligera y elegante.

2. **Paleta de Colores**: 
   - Se descartaron por completo los degradados a favor de colores sólidos limpios.
   - Toda la paleta (blanco, dorado, grises) se configuró como variables CSS nativas en `index.css` y consumidas directamente mediante Tailwind CSS (`bg-brand-gold`, `bg-brand-light`).

3. **Layout  Responsive**:
   - Siguiendo los requerimientos, el `Header` y `Footer` funcionan como bloques completos (full width).
   - En PC el modo es lado a lado, y en celular se organizan verticalmente responsivamente.

4. **Componentes**:
   - `PrimaryButton` para la acción de reserva.
   - `InfoCard` para información de platos o servicios, con leve animación al hacer hover.
   - `SidebarMenu` contenido en una tarjeta redondeada a la derecha.
