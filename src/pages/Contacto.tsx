import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Zap,
  Settings,
  Cpu,
  Wrench,
  Gauge,
  HelpCircle,
  Paperclip,
  X,
  FileText,
  Image as ImageIcon
} from "lucide-react";
import { z } from "zod";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Nome é obrigatório").max(100, "Nome muito longo"),
  company: z.string().trim().max(100, "Nome da empresa muito longo").optional(),
  phone: z.string().trim().min(1, "Telefone é obrigatório").max(20, "Telefone inválido"),
  email: z.string().trim().min(1, "E-mail é obrigatório").email("E-mail inválido").max(255),
  service: z.string().min(1, "Selecione um serviço"),
  message: z.string().trim().min(1, "Mensagem é obrigatória").max(1000, "Mensagem muito longa"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  { value: "Engenharia Elétrica", icon: Zap },
  { value: "Automação Industrial", icon: Cpu },
  { value: "Geradores - Venda", icon: Zap },
  { value: "Geradores - Manutenção", icon: Wrench },
  { value: "Geradores - Reparação", icon: Settings },
  { value: "Compressores", icon: Gauge },
  { value: "Manutenção Industrial", icon: Wrench },
  { value: "Consultoria Técnica", icon: HelpCircle },
  { value: "Outro", icon: HelpCircle },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    value: "+244 923 100 632",
    link: "tel:+244923100632",
    description: "Linha Principal",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "engenhariaesolucoesab@gmail.com",
    link: "mailto:engenhariaesolucoesab@gmail.com",
    description: "Correio Eletrónico",
  },
  {
    icon: MapPin,
    title: "Endereço",
    value: "Icolo e Bengo – Zango 2",
    link: "https://maps.google.com/?q=Zango+2,+Luanda,+Angola",
    description: "Luanda, Angola",
  },
  {
    icon: Clock,
    title: "Horário",
    value: "Seg - Sex: 08:00 - 18:00",
    link: null,
    description: "Atendimento",
  },
];

const Contacto = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<Partial<ContactFormData>>({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors((prev) => ({ ...prev, service: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        toast({
          title: "Ficheiro muito grande",
          description: "O ficheiro deve ter no máximo 10MB.",
          variant: "destructive",
        });
        return;
      }
      // Validate file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (!allowedTypes.includes(file.type)) {
        toast({
          title: "Tipo de ficheiro inválido",
          description: "Apenas PDF e imagens são permitidos.",
          variant: "destructive",
        });
        return;
      }
      setAttachedFile(file);
    }
  };

  const removeFile = () => {
    setAttachedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return ImageIcon;
    return FileText;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = contactSchema.parse(formData);
      
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      
      toast({
        title: "Pedido enviado com sucesso!",
        description: "A nossa equipa técnica entrará em contacto em menos de 24 horas.",
      });

      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
        setAttachedFile(null);
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Erro no formulário",
          description: "Verifique os campos obrigatórios e tente novamente.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate form progress
  const filledFields = Object.entries(formData).filter(([key, value]) => {
    if (key === 'company') return false; // Optional field
    return value && value.length > 0;
  }).length;
  const totalRequiredFields = 5; // name, phone, email, service, message
  const progress = (filledFields / totalRequiredFields) * 100;

  return (
    <Layout>
      <FloatingWhatsApp />
      
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
              Fale Connosco
            </span>
            <h1 className="heading-1 text-primary-foreground mt-2 mb-6">
              Contacto
            </h1>
            <p className="text-lg text-primary-foreground/90 leading-relaxed">
              Entre em contacto connosco para solicitar um orçamento ou esclarecer 
              qualquer dúvida sobre os nossos serviços.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-card -mt-8 relative z-20">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : undefined}
                    rel={info.link.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="block bg-secondary rounded-xl p-5 text-center card-hover group cursor-pointer"
                  >
                    <info.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-accent transition-colors" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {info.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </a>
                ) : (
                  <div className="bg-secondary rounded-xl p-5 text-center">
                    <info.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-heading font-semibold text-foreground mb-1">
                      {info.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-8 bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31459.07897287675!2d13.3!3d-8.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f24ec2dc1c5f%3A0x2e5d0f3e5c0e0e0e!2sZango%202%2C%20Luanda%2C%20Angola!5e0!3m2!1spt-PT!2sao!4v1699900000000!5m2!1spt-PT!2sao"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização A & B Engenharia - Zango 2, Luanda"
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gradient-subtle industrial-pattern">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <div className="bg-card rounded-2xl p-6 md:p-10 shadow-lg">
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Progresso do formulário</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-primary to-accent"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                <h2 className="heading-3 text-foreground mb-2">
                  Solicitar Orçamento
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contacto.
                </p>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-accent/10 border border-accent/30 rounded-xl p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                    </motion.div>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                      Recebemos o seu pedido!
                    </h3>
                    <p className="text-muted-foreground">
                      A nossa equipa técnica entrará em contacto em menos de 24 horas.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Digite o seu nome completo"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={errors.name ? "border-destructive" : ""}
                        />
                        {errors.name && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Digite o nome da empresa"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Digite o seu telefone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.phone}
                          </p>
                        )}
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Digite o seu e-mail"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Service with Icons */}
                    <div className="space-y-2">
                      <Label>Serviço Pretendido *</Label>
                      <Select
                        value={formData.service}
                        onValueChange={handleServiceChange}
                      >
                        <SelectTrigger className={errors.service ? "border-destructive" : ""}>
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => {
                            const ServiceIcon = service.icon;
                            return (
                              <SelectItem key={service.value} value={service.value}>
                                <div className="flex items-center gap-2">
                                  <ServiceIcon className="w-4 h-4 text-primary" />
                                  <span>{service.value}</span>
                                </div>
                              </SelectItem>
                            );
                          })}
                        </SelectContent>
                      </Select>
                      {errors.service && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Descreva a sua necessidade"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={errors.message ? "border-destructive" : ""}
                      />
                      {errors.message && (
                        <p className="text-sm text-destructive flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* File Attachment */}
                    <div className="space-y-2">
                      <Label>Anexar Ficheiro (PDF/Imagem)</Label>
                      <div className="border-2 border-dashed border-muted rounded-lg p-4 transition-colors hover:border-primary/50">
                        {attachedFile ? (
                          <div className="flex items-center justify-between gap-3 bg-muted/50 rounded-lg p-3">
                            <div className="flex items-center gap-3">
                              {(() => {
                                const FileIcon = getFileIcon(attachedFile.type);
                                return <FileIcon className="w-8 h-8 text-primary" />;
                              })()}
                              <div>
                                <p className="font-medium text-sm text-foreground truncate max-w-[200px]">
                                  {attachedFile.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {(attachedFile.size / 1024).toFixed(1)} KB
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="p-1 hover:bg-destructive/10 rounded-full transition-colors"
                            >
                              <X className="w-5 h-5 text-destructive" />
                            </button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center gap-2 cursor-pointer">
                            <Paperclip className="w-8 h-8 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              Clique para anexar um projeto, foto ou planta
                            </span>
                            <span className="text-xs text-muted-foreground/70">
                              PDF, JPEG, PNG (máx. 10MB)
                            </span>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="xl"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                          A enviar...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Enviar Pedido
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Side Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="bg-primary rounded-2xl p-6 md:p-8 text-primary-foreground">
                <h3 className="font-heading font-bold text-xl mb-4">
                  Contacto Direto
                </h3>
                <p className="text-primary-foreground/80 mb-6">
                  Para assuntos urgentes, ligue diretamente para a nossa linha principal.
                </p>
                <a
                  href="tel:+244923100632"
                  className="inline-flex items-center gap-3 bg-accent text-accent-foreground rounded-lg px-6 py-4 font-semibold hover:bg-accent-light transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  +244 923 100 632
                </a>
              </div>

              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-md">
                <h3 className="font-heading font-bold text-xl text-foreground mb-4">
                  Por Que Escolher a A&B?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Foco em eficiência energética, segurança e redução de paragens operacionais",
                    "Atendimento personalizado e cumprimento rigoroso de prazos",
                    "Suporte pós-serviço",
                    "Orçamentos competitivos e transparentes, com emissão de fatura pro forma",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contacto;
