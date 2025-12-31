import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Wrench, 
  Battery, 
  Shield,
  ArrowRight,
  Check,
  Lightbulb,
  Gauge,
  CircuitBoard,
  MessageCircle,
  Clock
} from "lucide-react";

// Import service images
import serviceElectrical from "@/assets/service-electrical.jpg";
import serviceAutomation from "@/assets/service-automation.jpg";
import serviceGenerators from "@/assets/service-generators.jpg";
import serviceCompressors from "@/assets/service-compressors.jpg";
import serviceMaintenance from "@/assets/service-maintenance.jpg";
import serviceConsulting from "@/assets/service-consulting.jpg";
import heroServicosImg from "@/assets/hero-servicos.jpg";

const services = [
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Instalações elétricas domiciliares e industriais conforme normas angolanas.",
    features: [
      "Instalações domiciliares",
      "Instalações industriais",
      "Normas angolanas",
    ],
    image: serviceElectrical,
  },
  {
    icon: CircuitBoard,
    title: "Diagramas Elétricos",
    description: "Diagramas elétricos de comando e potência para projetos industriais.",
    features: [
      "Diagramas de comando",
      "Diagramas de potência",
      "Projetos técnicos",
    ],
    image: serviceAutomation,
  },
  {
    icon: Lightbulb,
    title: "Fiscalização e Consultoria",
    description: "Fiscalização e consultoria técnica, incluindo análise de ruídos – som de espiro.",
    features: [
      "Fiscalização técnica",
      "Análise de ruídos",
      "Consultoria especializada",
    ],
    image: serviceConsulting,
  },
  {
    icon: Gauge,
    title: "Otimização de Cargas",
    description: "Levantamento de potência instalada e otimização de cargas para eficiência energética.",
    features: [
      "Levantamento de potência",
      "Otimização de cargas",
      "Eficiência energética",
    ],
    image: serviceCompressors,
  },
  {
    icon: CircuitBoard,
    title: "Automação Industrial",
    description: "Programação de PLCs e integração de sensores para automação de processos.",
    features: [
      "Programação de PLCs",
      "Integração de sensores",
      "Automação de processos",
    ],
    image: serviceAutomation,
  },
  {
    icon: Shield,
    title: "Soft-starters e Variadores",
    description: "Soft-starters e variadores de frequência para motores industriais.",
    features: [
      "Soft-starters",
      "Variadores de frequência",
      "Controle de motores",
    ],
    image: serviceMaintenance,
  },
  {
    icon: Wrench,
    title: "Rebobinagem de Motores",
    description: "Rebobinagem de motores de indução com qualidade garantida.",
    features: [
      "Motores de indução",
      "Rebobinagem especializada",
      "Garantia de qualidade",
    ],
    image: serviceMaintenance,
  },
  {
    icon: Battery,
    title: "Geradores Industriais",
    description: "Manutenção preventiva e corretiva de geradores industriais.",
    features: [
      "Manutenção preventiva",
      "Manutenção corretiva",
      "Geradores industriais",
    ],
    image: serviceGenerators,
  },
  {
    icon: Zap,
    title: "Painéis e Treinamentos",
    description: "Montagem de painéis elétricos, sistemas de backup e treinamentos técnicos.",
    features: [
      "Painéis elétricos",
      "Sistemas de backup",
      "Treinamentos técnicos",
    ],
    image: serviceElectrical,
  },
];

const Servicos = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroServicosImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary-dark/85 to-primary/90"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Serviços Técnicos
            </span>
            <h1 className="heading-1 text-primary-foreground mt-2 mb-6">
              Os Nossos Serviços
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Soluções completas em engenharia elétrica, automação e manutenção industrial 
              para empresas de todos os sectores em Angola.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group border-t-4 border-accent cursor-pointer"
              >
                {/* Service Image */}
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute bottom-4 left-6 w-14 h-14 rounded-xl bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:animate-pulse-glow transition-all duration-300">
                    <service.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                </div>
                
                <div className="p-6 pt-4 bg-gradient-to-b from-card to-secondary/30 group-hover:from-secondary/20 group-hover:to-secondary/50 transition-colors duration-300">
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Two-column bullet points */}
                  <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-1.5 text-xs text-foreground">
                        <Check className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="section-padding bg-gradient-subtle industrial-pattern">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden"
          >
            {/* Gradient background from navy to cyan */}
            <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,50%,15%)] via-primary-dark to-primary"></div>
            
            {/* Technical grid pattern overlay */}
            <div className="absolute inset-0 grid-pattern opacity-40"></div>
            
            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 text-center">
              {/* Pulsing Shield Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px hsl(32 85% 45% / 0.4)",
                    "0 0 40px hsl(32 85% 45% / 0.6)",
                    "0 0 20px hsl(32 85% 45% / 0.4)"
                  ]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border-2 border-accent/40"
              >
                <Shield className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </motion.div>
              
              <h2 className="heading-2 text-primary-foreground mb-4">
                Precisa de um Serviço Específico?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Entre em contacto connosco para discutir as suas necessidades e receber 
                uma proposta personalizada para o seu projeto.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <Button variant="accent" size="xl" asChild className="shadow-accent-glow">
                  <Link to="/contacto">
                    Solicitar Orçamento
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                
                {/* WhatsApp indicator and response time */}
                <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70 text-sm">
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-accent" />
                    WhatsApp disponível
                  </span>
                  <span className="hidden sm:block w-px h-4 bg-primary-foreground/30"></span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    Resposta em 24h
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Servicos;
