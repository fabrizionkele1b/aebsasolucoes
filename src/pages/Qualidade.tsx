import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Leaf, 
  FileCheck, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Award,
  Recycle,
  Scale
} from "lucide-react";
import qualityHeroImage from "@/assets/quality-hero.jpg";

const certifications = [
  {
    icon: FileCheck,
    title: "Conformidade Legal",
    description: "Operamos em total conformidade com a legislação angolana, incluindo normas de segurança elétrica e regulamentos industriais.",
    badge: "INAE",
    badgeLabel: "Regulamentação Angolana",
  },
  {
    icon: ShieldCheck,
    title: "Segurança Operacional",
    description: "Implementamos rigorosos protocolos de segurança em todas as nossas operações para proteger pessoas e equipamentos.",
    badge: "NIS",
    badgeLabel: "Normas de Segurança",
  },
  {
    icon: Award,
    title: "Qualidade Garantida",
    description: "Compromisso com padrões elevados de qualidade em todos os serviços, desde o diagnóstico até a entrega final.",
    badge: "ISO",
    badgeLabel: "Padrões Internacionais",
  },
  {
    icon: Scale,
    title: "Ética Profissional",
    description: "Atuamos com transparência, honestidade e integridade em todas as relações comerciais e profissionais.",
    badge: "EPE",
    badgeLabel: "Código de Ética",
  },
];

const sustainabilityPractices = [
  "Gestão eficiente de resíduos industriais",
  "Otimização do consumo energético nas operações",
  "Utilização de equipamentos de alta eficiência",
  "Promoção de soluções de energia limpa",
  "Manutenção preventiva para prolongar vida útil dos equipamentos",
  "Formação contínua em práticas ambientais",
];

const partnerLogos = [
  { name: "Caterpillar", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c5/Caterpillar_logo.svg/200px-Caterpillar_logo.svg.png" },
  { name: "Siemens", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/200px-Siemens-logo.svg.png" },
  { name: "ABB", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/200px-ABB_logo.svg.png" },
  { name: "Schneider Electric", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Schneider_Electric_2007.svg/200px-Schneider_Electric_2007.svg.png" },
];

// Circular progress component
const CircularProgress = ({ 
  value, 
  label, 
  color 
}: { 
  value: number; 
  label: string; 
  color: "primary" | "accent" 
}) => {
  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (value / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-muted/30"
          />
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            className={color === "primary" ? "text-primary" : "text-accent"}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{ strokeDasharray: circumference }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`font-heading font-bold text-xl ${color === "primary" ? "text-primary" : "text-accent"}`}>
            {value}%
          </span>
        </div>
      </div>
      <span className="text-sm text-muted-foreground mt-2 text-center">{label}</span>
    </div>
  );
};

const Qualidade = () => {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${qualityHeroImage})` }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary-dark/80 to-primary/75" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Compromisso com a Excelência
            </span>
            <h1 className="heading-1 text-primary-foreground mt-2 mb-6">
              <span className="font-bold">Qualidade</span> e{" "}
              <span className="font-light">Sustentabilidade</span>
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              O nosso compromisso com a qualidade, conformidade legal e práticas 
              sustentáveis define a forma como servimos os nossos clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications - Enhanced Cards */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Certificação e Conformidade
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Padrões de Qualidade
            </h2>
            <div className="accent-line mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-secondary rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-b-0 hover:border-b-[3px] hover:border-accent"
              >
                {/* Duotone Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-5 relative">
                  <div className="absolute inset-0 rounded-full bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <cert.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-3">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.description}
                </p>
                {/* Certification Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <span className="text-xs font-bold text-primary">{cert.badge}</span>
                  <span className="text-xs text-muted-foreground">{cert.badgeLabel}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability - Enhanced */}
      <section className="section-padding bg-gradient-subtle industrial-pattern">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                <Leaf className="w-5 h-5 text-accent" />
                <span className="text-accent font-semibold text-sm">Sustentabilidade</span>
              </div>
              <h2 className="heading-2 text-foreground mb-6">
                Práticas Sustentáveis
              </h2>
              <p className="text-body text-muted-foreground mb-8">
                Estamos comprometidos com práticas empresariais que minimizam o impacto 
                ambiental e promovem a eficiência energética. A sustentabilidade é um 
                pilar fundamental da nossa operação.
              </p>

              <ul className="space-y-3">
                {sustainabilityPractices.map((practice) => (
                  <li key={practice} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-foreground">{practice}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-lg"
            >
              <Recycle className="w-16 h-16 text-primary mb-6" />
              <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                Eficiência Energética
              </h3>
              <p className="text-muted-foreground mb-8">
                Promovemos soluções que reduzem o consumo energético e otimizam o 
                desempenho dos sistemas elétricos dos nossos clientes, contribuindo 
                para um futuro mais sustentável em Angola.
              </p>
              {/* Circular Progress Charts */}
              <div className="flex justify-around">
                <CircularProgress value={30} label="Redução de consumo" color="primary" />
                <CircularProgress value={100} label="Conformidade legal" color="accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships - Enhanced with Icons */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <Handshake className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="heading-2 text-foreground mb-4">
              Parcerias Estratégicas
            </h2>
            <div className="accent-line mx-auto mb-6"></div>
            <p className="text-body text-muted-foreground">
              Mantemos parcerias com fornecedores e fabricantes de referência para 
              garantir a qualidade dos equipamentos e materiais utilizados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex items-center justify-center bg-background/80 rounded-lg p-6 h-32 transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-h-[70px] w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA - Enhanced with darker background */}
      <section className="section-padding bg-primary-dark relative overflow-hidden">
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Pulsing Award Icon */}
            <div className="relative inline-block mb-6">
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.2, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-accent/30 rounded-full blur-xl"
              />
              <Award className="w-16 h-16 text-accent relative z-10" />
            </div>
            
            <h2 className="heading-2 text-primary-foreground mb-4">
              Qualidade que Faz a Diferença
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Experimente a diferença de trabalhar com uma empresa comprometida 
              com a excelência em cada projeto.
            </p>
            <Button variant="accent" size="xl" asChild>
              <Link to="/contacto">
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            {/* Trust Micro-copy */}
            <p className="text-primary-foreground/60 text-sm mt-4">
              Garantia de conformidade com as normas técnicas de Angola
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Qualidade;
