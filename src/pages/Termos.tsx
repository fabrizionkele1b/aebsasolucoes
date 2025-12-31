import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileCheck, BookOpen, Copyright, AlertTriangle, RefreshCw, Scale } from "lucide-react";

const Termos = () => {
  const sections = [
    {
      icon: FileCheck,
      title: "1. Aceitação dos Termos",
      content: "Ao aceder ao site da A & B, o usuário concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis em Angola."
    },
    {
      icon: Copyright,
      title: "2. Propriedade Intelectual",
      content: "Todo o conteúdo deste site (textos, logótipos e imagens) é propriedade da A & B, Engenharia e Soluções SA. A reprodução não autorizada é proibida."
    },
    {
      icon: BookOpen,
      title: "3. Uso do Conteúdo",
      content: "As informações sobre serviços de engenharia elétrica, automação, geradores e compressores são meramente informativas e não substituem uma consulta técnica presencial."
    },
    {
      icon: AlertTriangle,
      title: "4. Limitação de Responsabilidade",
      content: "A A & B não se responsabiliza por danos resultantes do uso indevido das informações contidas neste site ou por falhas técnicas externas de conexão."
    },
    {
      icon: RefreshCw,
      title: "5. Modificações",
      content: "Reservamo-nos o direito de actualizar estes termos a qualquer momento para reflectir mudanças na legislação ou nos nossos serviços."
    },
    {
      icon: Scale,
      title: "6. Jurisdição",
      content: "Estes termos são regidos pelas leis da República de Angola. Para qualquer litígio, fica designado o foro da comarca de Luanda."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
              <Scale className="w-4 h-4" />
              <span className="text-sm font-medium">Termos Legais</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Termos de Uso
            </h1>
            <p className="text-lg text-primary-foreground/70">
              A & B, Engenharia e Soluções SA
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 md:p-8 border border-border shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-heading font-semibold text-foreground mb-3">
                        {section.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center text-sm text-muted-foreground"
          >
            <p>Última atualização: Dezembro de 2025</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Termos;
