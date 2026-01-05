import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { 
  Zap, 
  Settings, 
  Wrench, 
  ShieldCheck, 
  Users, 
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Building2,
  Cog,
  Battery,
  Calendar,
  MapPin,
  Target,
  Headphones,
  HardHat,
  Map,
  Leaf,
  Clock,
  Shield,
  Handshake
} from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const services = [
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Instalações elétricas domiciliares e industriais conforme normas angolanas.",
    tags: ["Domiciliar", "Industrial", "Normas"],
  },
  {
    icon: Cog,
    title: "Automação Industrial",
    description: "Programação de PLCs e integração de sensores para otimização de processos.",
    tags: ["PLCs", "Sensores", "Integração"],
  },
  {
    icon: Battery,
    title: "Geradores Industriais",
    description: "Manutenção preventiva e corretiva de geradores industriais.",
    tags: ["Manutenção", "Preventiva", "Corretiva"],
  },
  {
    icon: Wrench,
    title: "Motores e Painéis",
    description: "Rebobinagem de motores de indução e montagem de painéis elétricos.",
    tags: ["Rebobinagem", "Painéis", "Backup"],
  },
];

const differentials = [
  { icon: HardHat, text: "Equipa técnica qualificada e experiente" },
  { icon: Map, text: "Atendimento em todo território angolano" },
  { icon: Shield, text: "Conformidade com legislação nacional" },
  { icon: Leaf, text: "Foco em eficiência energética" },
  { icon: Handshake, text: "Compromisso com prazos e qualidade" },
  { icon: Clock, text: "Suporte técnico permanente" },
];

const stats = [
  { value: "2025", label: "Ano de Fundação", icon: Calendar },
  { value: "100%", label: "Compromisso", icon: Target },
  { value: "Angola", label: "Cobertura Nacional", icon: MapPin },
  { value: "24/7", label: "Suporte Técnico", icon: Headphones },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image with premium vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Equipamentos industriais"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="industrial-pattern w-full h-full"></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-20 py-20">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-1 text-primary-foreground mb-2"
            >
              Engenharia e Soluções
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="heading-1 text-accent mb-6"
            >
              Industriais <span className="text-primary-foreground font-medium">para Angola</span>
            </motion.h1>

            {/* Premium badge below title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="badge-premium">
                <ShieldCheck className="w-4 h-4" />
                Soluções Técnicas de Excelência
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl"
            >
              Especialistas em engenharia elétrica, automação industrial, geradores e 
              compressores. Garantimos segurança, eficiência e continuidade operacional 
              para o seu negócio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/contacto">
                  Solicitar Orçamento
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/servicos">
                  Conheça os Serviços
                </Link>
              </Button>
            </motion.div>

            {/* Impact stats bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="stats-bar flex-wrap"
            >
              <div className="stats-bar-item">
                <Award className="w-4 h-4 text-accent" />
                <span>Equipa Certificada</span>
              </div>
              <div className="stats-bar-divider hidden sm:block"></div>
              <div className="stats-bar-item">
                <Users className="w-4 h-4 text-accent" />
                <span>Cobertura Nacional</span>
              </div>
              <div className="stats-bar-divider hidden sm:block"></div>
              <div className="stats-bar-item">
                <Phone className="w-4 h-4 text-accent" />
                <span>Suporte 24/7</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-accent"
            />
          </div>
        </motion.div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Subtle Blueprint Background */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blueprint-grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <circle cx="0" cy="0" r="1" fill="hsl(var(--primary))" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Quem Somos
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
                A & B, Engenharia e Soluções SA
              </h2>
              <div className="w-16 h-0.5 bg-accent rounded-full mb-6"></div>
              <p className="text-body text-muted-foreground mb-5">
                A & B, Engenharia e Soluções SA é uma empresa angolana fundada em 2025, 
                especializada em <strong className="text-foreground font-medium">engenharia elétrica, automação e manutenção industrial</strong>, 
                com forte atuação na manutenção, reparação, venda e compra de <strong className="text-foreground font-medium">geradores 
                e compressores industriais</strong>.
              </p>
              <p className="text-body text-muted-foreground mb-8">
                Sediada em Luanda, Icolo e Bengo – Zango 2, oferecemos soluções técnicas 
                seguras, eficientes e inovadoras para clientes residenciais, comerciais 
                e industriais em <strong className="text-foreground font-medium">todo o território angolano</strong>.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/sobre">
                  Saiba Mais Sobre Nós
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Stats Grid - Dynamic Alignment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                const isColored = index === 0 || index === 3;
                const offsetClass = index === 1 ? "lg:translate-y-4" : index === 2 ? "lg:-translate-y-4" : "";
                
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${offsetClass} ${
                      isColored 
                        ? "bg-primary text-primary-foreground shadow-md" 
                        : "bg-card text-foreground border border-border/50 shadow-sm"
                    }`}
                    style={{
                      borderLeft: !isColored ? '3px solid hsl(var(--primary))' : undefined
                    }}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                      isColored 
                        ? "bg-primary-foreground/20" 
                        : "bg-primary/10"
                    }`}>
                      <IconComponent className={`w-5 h-5 ${isColored ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <div className="font-heading text-3xl md:text-4xl font-bold mb-1">
                      {stat.value}
                    </div>
                    <div className={`text-sm ${
                      isColored 
                        ? "text-primary-foreground/80" 
                        : "text-muted-foreground"
                    }`}>
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-card relative overflow-hidden">
        {/* Technical Blueprint Background */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="services-blueprint" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
                <path d="M 40 0 L 40 80 M 0 40 L 80 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3" strokeDasharray="4 4"/>
                <circle cx="0" cy="0" r="2" fill="hsl(var(--primary))" />
                <circle cx="80" cy="0" r="2" fill="hsl(var(--primary))" />
                <circle cx="0" cy="80" r="2" fill="hsl(var(--primary))" />
                <circle cx="80" cy="80" r="2" fill="hsl(var(--primary))" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-blueprint)" />
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              O Que Fazemos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mt-2 mb-4">
              Os Nossos <span className="font-extrabold text-primary">Serviços</span>
            </h2>
            <div className="accent-line mx-auto mb-6"></div>
            <p className="text-body text-muted-foreground">
              Oferecemos soluções técnicas completas em engenharia elétrica e manutenção 
              industrial, com foco na qualidade e segurança operacional.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl p-6 shadow-sm border border-border/50 hover:border-accent hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Stroke-style icon container */}
                <div className="w-14 h-14 rounded-lg border-2 border-primary/30 flex items-center justify-center mb-5 group-hover:border-accent group-hover:bg-accent/5 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary stroke-[1.5] group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                {/* Specialty Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-2 py-0.5 bg-muted rounded-full text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button variant="default" size="lg" asChild>
              <Link to="/servicos">
                Ver Todos os Serviços
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        {/* Circuit Pattern Background - Bottom Right Corner */}
        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.08]">
          <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 10 L50 10 L50 50 L90 50 L90 90 L130 90" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground"/>
            <path d="M30 30 L70 30 L70 70 L110 70 L110 110" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground"/>
            <path d="M50 50 L90 50 L90 90 L130 90 L130 130" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground"/>
            <circle cx="50" cy="10" r="3" fill="currentColor" className="text-accent"/>
            <circle cx="90" cy="50" r="3" fill="currentColor" className="text-accent"/>
            <circle cx="130" cy="90" r="3" fill="currentColor" className="text-accent"/>
            <circle cx="70" cy="30" r="2" fill="currentColor" className="text-primary-foreground"/>
            <circle cx="110" cy="70" r="2" fill="currentColor" className="text-primary-foreground"/>
            <rect x="120" y="120" width="30" height="20" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground"/>
            <rect x="160" y="140" width="25" height="15" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary-foreground"/>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Porquê Escolher-nos
              </span>
              <h2 className="heading-2 text-primary-foreground mt-2 mb-6">
                Diferenciais Competitivos
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full mb-8"></div>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Com uma equipa qualificada de engenheiros e técnicos, a A & B destaca-se 
                pelo compromisso com a qualidade, segurança operacional, eficiência 
                energética e sustentabilidade.
              </p>
              <Button 
                variant="accent" 
                size="lg" 
                asChild
                className="shadow-[0_0_20px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.6)] transition-shadow"
              >
                <Link to="/qualidade">
                  Ver Nossas Certificações
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-4"
            >
              {differentials.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-5 bg-white/10 backdrop-blur-xl rounded-xl border border-white/25 shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:bg-white/15 hover:border-accent/60 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/15 border border-white/30 flex items-center justify-center flex-shrink-0 group-hover:border-accent group-hover:bg-accent/20 transition-all duration-300">
                      <IconComponent className="w-5 h-5 text-white stroke-[1.5] group-hover:text-accent transition-colors duration-300" />
                    </div>
                    <span className="text-white text-sm font-medium leading-relaxed pt-2.5">
                      {item.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-8 md:p-12 lg:p-16 text-center overflow-hidden border border-primary/20 shadow-[0_0_60px_-15px_hsl(var(--primary)/0.3)]"
            style={{
              background: 'linear-gradient(135deg, hsl(210 40% 10%) 0%, hsl(210 50% 8%) 50%, hsl(191 40% 12%) 100%)'
            }}
          >
            {/* Industrial Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.04]">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-circuit" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 30 15 M 30 45 L 30 60 M 0 30 L 15 30 M 45 30 L 60 30" fill="none" stroke="white" strokeWidth="0.5"/>
                    <circle cx="30" cy="30" r="3" fill="none" stroke="white" strokeWidth="0.5"/>
                    <rect x="25" y="10" width="10" height="5" fill="none" stroke="white" strokeWidth="0.3"/>
                    <rect x="45" y="25" width="5" height="10" fill="none" stroke="white" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-circuit)" />
              </svg>
            </div>

            {/* Decorative Glow Elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/25 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>

            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent/20 text-accent border border-accent/30 mb-6"
              >
                <Zap className="w-3.5 h-3.5" />
                Atendimento Especializado
              </motion.span>
              
              <h2 className="heading-2 text-primary-foreground mb-4">
                Pronto para Otimizar a sua Operação?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Fale com os nossos especialistas e receba um orçamento personalizado para 
                aumentar a eficiência e garantir a continuidade do seu negócio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button 
                    variant="accent" 
                    size="xl" 
                    asChild
                    className="shadow-[0_0_30px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_hsl(var(--accent)/0.6)] transition-shadow"
                  >
                    <Link to="/contacto">
                      Entrar em Contacto
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
                <Button 
                  variant="hero-outline" 
                  size="xl" 
                  asChild
                  className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400"
                >
                  <a href="https://wa.me/244923100632" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    WhatsApp Direto
                  </a>
                </Button>
              </div>
              
              {/* Micro-copy */}
              <p className="text-sm text-primary-foreground/50 flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500/70" />
                Resposta rápida garantida • Atendimento técnico especializado em toda Angola
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
