import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Target, 
  Eye, 
  Heart, 
  Building2, 
  Users, 
  Award,
  ArrowRight,
  Rocket,
  MapPin,
  Zap,
  Clock,
  MessageCircle
} from "lucide-react";
import { useState } from "react";
const values = [
  {
    icon: Building2,
    title: "Inovação",
    description: "Busca constante por soluções técnicas modernas e eficientes.",
  },
  {
    icon: Heart,
    title: "Integridade",
    description: "Ética e transparência em todas as relações comerciais e profissionais.",
  },
  {
    icon: Award,
    title: "Eficiência",
    description: "Otimização de recursos e processos para resultados superiores.",
  },
  {
    icon: Users,
    title: "Compromisso com o Cliente",
    description: "Parceria e dedicação para superar as expectativas dos nossos clientes.",
  },
];

const Sobre = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 industrial-pattern opacity-5"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Sobre a Empresa
            </span>
            <h1 className="heading-1 text-primary-foreground mt-2 mb-6">
              Conhecendo a A & B
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Uma empresa angolana de referência em engenharia elétrica, automação 
              e manutenção industrial, comprometida com a excelência técnica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-foreground mb-6">
                A Nossa História
              </h2>
              <div className="accent-line mb-8"></div>
              <div className="space-y-6 text-muted-foreground text-body">
                <p>
                  <strong className="text-foreground">A & B, Engenharia e Soluções SA</strong> nasce 
                  como uma <span className="text-accent font-semibold">empresa de nova geração</span>, 
                  especializada em engenharia elétrica, automação e manutenção industrial, com forte 
                  atuação na manutenção, reparação, venda e compra de geradores e compressores industriais.
                </p>
                <p>
                  Sediada em Luanda, Icolo e Bengo – Zango 2, a empresa oferece soluções técnicas 
                  seguras, eficientes e inovadoras para clientes residenciais, comerciais e industriais.
                </p>
                <p>
                  Com uma equipa qualificada de engenheiros e técnicos, a A & B destaca-se pelo 
                  compromisso com a qualidade, segurança operacional, eficiência energética e 
                  sustentabilidade, garantindo confiabilidade dos sistemas elétricos e continuidade 
                  das operações dos seus clientes em conformidade com a legislação angolana.
                </p>
              </div>

              {/* Highlight Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <Rocket className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-2xl font-heading font-bold text-foreground">2025</span>
                  <p className="text-xs text-muted-foreground mt-1">Tecnologia do Futuro</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-2xl font-heading font-bold text-foreground">Angola</span>
                  <p className="text-xs text-muted-foreground mt-1">Cobertura Nacional</p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-center p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className="w-10 h-10 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-2">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-2xl font-heading font-bold text-foreground">24/7</span>
                  <p className="text-xs text-muted-foreground mt-1">Suporte Técnico</p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Mission - Glassmorphism */}
              <div className="relative rounded-xl p-6 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md border border-primary/20 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-md">
                      <Target className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Missão
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Garantir confiabilidade dos equipamentos elétricos e industriais por meio de 
                    instalações, manutenções e consultorias com foco em segurança, qualidade e sustentabilidade.
                  </p>
                </div>
              </div>

              {/* Vision - Glassmorphism */}
              <div className="relative rounded-xl p-6 bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-md border border-accent/20 shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center shadow-md">
                      <Eye className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Visão
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Ser referência em Angola na manutenção de geradores e automação, 
                    expandindo para soluções integradas de energia.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Subtle Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-secondary/10"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              O Que Nos Define
            </span>
            <h2 className="heading-2 text-foreground mt-2 mb-4">
              Os Nossos Valores
            </h2>
            <div className="accent-line mx-auto"></div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-card rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/30"
              >
                {/* Duotone Icon Container */}
                <div className="w-16 h-16 mx-auto rounded-full relative mb-5 transition-all duration-300">
                  {/* Background Layer */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 group-hover:from-accent/20 group-hover:to-accent/5 transition-all duration-300"></div>
                  {/* Inner Shadow/Glow */}
                  <div className="absolute inset-1 rounded-full bg-gradient-to-br from-primary/10 to-transparent group-hover:from-accent/10 transition-all duration-300"></div>
                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark"></div>
        
        {/* Industrial Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="container-custom text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-primary-foreground mb-4">
              Pronto para Trabalhar Connosco?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Descubra como as nossas soluções técnicas podem beneficiar a sua empresa.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="accent" 
                  size="xl" 
                  asChild
                  className="shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-shadow"
                >
                  <Link to="/contacto">
                    Entrar em Contacto
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  variant="outline" 
                  size="xl" 
                  asChild
                  className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20 hover:text-primary-foreground"
                >
                  <a href="https://wa.me/244923456789" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp Direto
                  </a>
                </Button>
              </motion.div>
            </div>
            
            {/* Trust Micro-copy */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-center justify-center gap-6 text-primary-foreground/70 text-sm"
            >
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Resposta em menos de 24h
              </span>
              <span className="hidden sm:block w-px h-4 bg-primary-foreground/30"></span>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Consultoria técnica gratuita
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Sobre;
