import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Shield, FileText, Lock, UserCheck, Share2, Mail } from "lucide-react";

const Privacidade = () => {
  const sections = [
    {
      icon: FileText,
      title: "1. Introdução",
      content: "A A & B, Engenharia e Soluções SA está comprometida em proteger a privacidade e os dados pessoais de seus clientes e usuários. Esta política descreve como coletamos e usamos suas informações ao interagir com nosso site."
    },
    {
      icon: UserCheck,
      title: "2. Coleta de Dados",
      content: "Coletamos informações fornecidas voluntariamente por você através do nosso formulário de \"Solicitar Orçamento\", incluindo: Nome, Empresa, Telefone e E-mail."
    },
    {
      icon: Shield,
      title: "3. Uso das Informações",
      content: "Os dados coletados são utilizados exclusivamente para:",
      list: [
        "Elaborar propostas técnicas personalizadas.",
        "Entrar em contacto para esclarecer dúvidas sobre os serviços solicitados.",
        "Enviar actualizações sobre os nossos serviços de engenharia e manutenção."
      ]
    },
    {
      icon: Lock,
      title: "4. Segurança dos Dados",
      content: "Implementamos medidas de segurança técnica para garantir que os seus dados estejam protegidos contra acessos não autorizados ou uso indevido."
    },
    {
      icon: Share2,
      title: "5. Partilha de Informações",
      content: "A A & B não vende ou partilha os seus dados pessoais com terceiros para fins comerciais."
    },
    {
      icon: Mail,
      title: "6. Direitos do Usuário",
      content: "O usuário pode, a qualquer momento, solicitar a exclusão ou actualização dos seus dados enviando um e-mail para: engenhariaesolucoesab@gmail.com."
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
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Proteção de Dados</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-6">
              Política de Privacidade
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
                      {section.list && (
                        <ul className="mt-4 space-y-2">
                          {section.list.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
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

export default Privacidade;
