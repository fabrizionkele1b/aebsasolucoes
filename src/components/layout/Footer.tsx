import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, ArrowUp, Linkedin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  empresa: [
    { name: "Sobre Nós", path: "/sobre" },
    { name: "Estrutura", path: "/estrutura" },
    { name: "Qualidade", path: "/qualidade" },
  ],
  servicos: [
    { name: "Engenharia Elétrica", path: "/servicos" },
    { name: "Automação Industrial", path: "/servicos" },
    { name: "Geradores", path: "/servicos" },
    { name: "Compressores", path: "/servicos" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/company/abengenharia" },
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=61585902028216" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/engenhariaesolucoesab/" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent-dark rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="font-heading font-bold text-xl text-accent-foreground">A&B</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg leading-tight">A & B</div>
                <div className="text-xs text-primary-foreground/70 font-medium tracking-wider uppercase">
                  Engenharia e Soluções SA
                </div>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 font-normal">
              Empresa angolana especializada em engenharia elétrica, automação e manutenção industrial, 
              com forte atuação em geradores e compressores industriais.
            </p>
            <div className="flex items-center gap-2 text-accent mb-6">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-medium">Seg - Sex: 08:00 - 18:00</span>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links - Empresa */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-2 relative pb-3">
              A Empresa
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3 mt-6">
              {footerLinks.empresa.map((link) => (
                <li key={link.path + link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent hover:translate-x-1 transition-all duration-200 text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Serviços */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-2 relative pb-3">
              Serviços
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-3 mt-6">
              {footerLinks.servicos.map((link, index) => (
                <li key={link.name + index}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/60 hover:text-accent hover:translate-x-1 transition-all duration-200 text-sm inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-2 relative pb-3">
              Contactos
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-accent"></span>
            </h4>
            <ul className="space-y-4 mt-6">
              <li>
                <a
                  href="tel:+244923456789"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-200">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">+244 923 456 789</div>
                    <div className="text-xs text-primary-foreground/50">Linha Principal</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:geral@abengenharia.co.ao"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-200">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">geral@abengenharia.co.ao</div>
                    <div className="text-xs text-primary-foreground/50">E-mail Geral</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Zango+2+Icolo+e+Bengo+Luanda+Angola"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/60 hover:text-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 group-hover:border-accent/50 transition-all duration-200">
                    <MapPin className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-primary-foreground group-hover:text-accent transition-colors">Luanda, Angola</div>
                    <div className="text-xs text-primary-foreground/50">Icolo e Bengo – Zango 2</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-primary-foreground/50 text-sm text-center md:text-left">
              <span>© {new Date().getFullYear()} A & B, Engenharia e Soluções SA.</span>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-4">
                <Link to="/privacidade" className="hover:text-accent transition-colors">
                  Política de Privacidade
                </Link>
                <Link to="/termos" className="hover:text-accent transition-colors">
                  Termos de Uso
                </Link>
              </div>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors text-sm group"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
