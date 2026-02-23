import { AstraLogo } from "@/components/icons/AstraLogo";
import { NAV_LINKS, REGISTER_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-astra-border/30 bg-astra-bg-deep">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12 pb-24 sm:pb-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <AstraLogo className="mb-4" />
            <p className="text-sm text-astra-text-secondary leading-relaxed">
              Carrera Comercial Gamificada. Vendé productos para mascotas,
              subí de nivel y ganá más.
            </p>
            <p className="text-xs text-astra-text-muted mt-2 italic">
              &quot;Ad Astra Per Aspera&quot;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-astra-text-primary mb-4 uppercase tracking-wider">
              Navegación
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-astra-text-secondary hover:text-astra-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={REGISTER_URL}
                  className="text-sm text-astra-accent hover:text-astra-accent-bright transition-colors font-medium"
                >
                  Registrarse
                </a>
              </li>
            </ul>
          </div>

          {/* Contact / Legal */}
          <div>
            <h3 className="text-sm font-semibold text-astra-text-primary mb-4 uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-2">
              <li>
                <p className="text-sm text-astra-text-secondary">
                  Soporte: Lunes a Viernes 9:00-18:00
                </p>
              </li>
              <li>
                <p className="text-sm text-astra-text-secondary">
                  Tucumán, Argentina
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-astra-border/20 text-center">
          <p className="text-xs text-astra-text-muted">
            &copy; {new Date().getFullYear()} ASTRA. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
