import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle, Phone, ChevronDown, TrendingUp,
  Shield, Award, Zap, Calendar, QrCode, Copy,
  CheckCircle, ArrowRight, Clock, Users, Banknote,
  FileText, Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  SpecialtyCard, ServiceCard, TestimonialCard, BlogCard, StatCard
} from '@/components/Cards';
import {
  specialties, servicePackages, testimonials, blogPosts, stats, availableTimes
} from '@/data/index';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE, PIX_KEY, PIX_NAME } from '@/lib/index';

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { type: 'spring', stiffness: 200, damping: 35 },
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
};

// ============================================================
// HERO SECTION
// ============================================================
function HeroSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1758518731706-be5d5230e5a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Consultoria empresarial"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/85" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 rounded-full bg-accent/8 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div variants={staggerItem}>
            <Badge className="bg-accent/20 text-accent border-accent/30 mb-6 font-medium">
              Consultoria Financeira para PME
            </Badge>
          </motion.div>

          <motion.h1
            variants={staggerItem}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Transformamos gestão financeira em{' '}
            <span className="text-accent">resultado sustentável</span>{' '}
            para pequenas e médias empresas.
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-primary-foreground/70 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Soluções práticas em reestruturação financeira, controle de caixa, renegociação de dívidas
            e desenvolvimento de lideranças para PMEs crescerem com solidez.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-3 text-base h-14 px-8 font-semibold shadow-lg shadow-accent/30"
              onClick={() => scrollTo('agendamento')}
            >
              <Calendar className="w-5 h-5" />
              Agendar Consultoria
            </Button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white border-0 gap-3 text-base h-14 px-8 font-semibold w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-primary-foreground hover:bg-white/10 gap-3 text-base h-14 px-8"
              onClick={() => scrollTo('servicos')}
            >
              Contratar Serviço
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-white/10"
          >
            {[
              { icon: Shield, text: 'Sigilo garantido' },
              { icon: Award, text: '8+ anos de experiência' },
              { icon: Zap, text: 'Resultados em 30 dias' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Icon className="w-4 h-4 text-accent" />
                {text}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <button onClick={() => scrollTo('stats')} className="text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// STATS SECTION
// ============================================================
function StatsSection() {
  return (
    <section id="stats" className="bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// ABOUT / PROFILE SECTION
// ============================================================
function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 35 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Consultor Financeiro"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-4 -right-4 lg:right-4 bg-accent text-accent-foreground rounded-2xl px-5 py-4 shadow-xl">
              <p className="text-2xl font-bold font-mono">8+</p>
              <p className="text-xs font-medium leading-tight">anos de<br />experiência</p>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, damping: 35, delay: 0.1 }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Perfil Profissional
            </Badge>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Especialista em Gestão Financeira para PMEs
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Consultor especializado em gestão financeira empresarial, com experiência em reestruturação
              financeira, renegociação de passivos, organização de fluxo de caixa, implantação de controles
              gerenciais e formação de lideranças financeiras.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Atua no desenvolvimento de soluções práticas para aumento de rentabilidade e sustentabilidade
              empresarial, com foco exclusivo em pequenas e médias empresas brasileiras.
            </p>

            {/* Experience items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: TrendingUp, title: 'Finanças Corporativas', desc: 'Planejamento, controle e análise financeira avançada' },
                { icon: Users, title: 'Consultoria para PME', desc: 'Metodologias adaptadas às realidades das PMEs' },
                { icon: FileText, title: 'Reestruturação', desc: 'Recuperação financeira e reorganização de passivos' },
                { icon: Award, title: 'Resultados Comprovados', desc: 'Mais de 150 empresas transformadas' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-primary text-primary-foreground gap-2"
                onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Calendar className="w-4 h-4" />
                Agendar Conversa
              </Button>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Direto
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SPECIALTIES SECTION
// ============================================================
function SpecialtiesSection() {
  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Especialidades</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Soluções financeiras completas
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada especialidade foi desenvolvida para resolver os principais desafios financeiros das PMEs brasileiras.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {specialties.map((specialty) => (
            <motion.div key={specialty.id} variants={staggerItem}>
              <SpecialtyCard specialty={specialty} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// SERVICES / PRICING SECTION
// ============================================================
function ServicesSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const scrollToSchedule = () => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="servicos" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Modelos de Atendimento</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Escolha o formato ideal para sua empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Duas modalidades flexíveis, adaptadas ao momento e necessidade do seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {servicePackages.map((pkg) => (
            <ServiceCard
              key={pkg.id}
              pkg={pkg}
              onSchedule={scrollToSchedule}
              onWhatsApp={() => window.open(whatsappUrl, '_blank')}
            />
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-4">Formas de pagamento aceitas</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Pix (Pagamento instantâneo)', 'Transferência bancária', 'Boleto bancário'].map((method) => (
              <span key={method} className="flex items-center gap-2 text-sm text-foreground bg-muted px-4 py-2 rounded-full">
                <CheckCircle className="w-3.5 h-3.5 text-primary" />
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// SCHEDULING SECTION
// ============================================================
function SchedulingSection() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    challenge: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !formData.name) return;
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  if (submitted) {
    return (
      <section id="agendamento" className="py-20 lg:py-28 bg-muted/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card border border-border rounded-2xl p-10 text-center shadow-sm"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Agendamento Confirmado!</h3>
            <p className="text-muted-foreground mb-4">
              Sua consulta foi agendada para <strong className="text-foreground">{selectedDate}</strong> às <strong className="text-foreground">{selectedTime}</strong>.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Em breve você receberá a confirmação por e-mail com o link para a videoconferência.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Acabei de agendar uma consultoria para ${selectedDate} às ${selectedTime}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-green-500 hover:bg-green-600 text-white gap-2">
                <MessageCircle className="w-4 h-4" />
                Confirmar via WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="agendamento" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Agendamento</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Agende sua consultoria online
          </h2>
          <p className="text-muted-foreground text-lg">
            Preencha o formulário e escolha o melhor horário. Atendimento 100% online.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Como funciona</h3>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Preencha o formulário', desc: 'Informe seu desafio financeiro atual' },
                    { step: '2', title: 'Escolha data e hora', desc: 'Horários disponíveis de seg–sex' },
                    { step: '3', title: 'Confirmação automática', desc: 'Receba o link da videochamada' },
                    { step: '4', title: 'Consultoria online', desc: 'Atendimento profissional e sigiloso' },
                  ].map(({ step, title, desc }) => (
                    <div key={step} className="flex gap-3">
                      <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {step}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{title}</p>
                        <p className="text-xs text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <Clock className="w-6 h-6 text-accent mb-3" />
                <h4 className="font-semibold mb-1">Horários de atendimento</h4>
                <p className="text-primary-foreground/70 text-sm">Segunda a Sexta</p>
                <p className="text-accent font-mono font-bold text-lg mt-1">08h – 18h</p>
                <p className="text-primary-foreground/50 text-xs mt-2">Horário de Brasília</p>
              </CardContent>
            </Card>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="border border-border shadow-sm">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-1.5 block">Nome completo *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome"
                        value={formData.name}
                        onChange={(e) => setFormData(f => ({ ...f, name: e.target.value }))}
                        required
                        className="h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium mb-1.5 block">Empresa</Label>
                      <Input
                        id="company"
                        placeholder="Nome da empresa"
                        value={formData.company}
                        onChange={(e) => setFormData(f => ({ ...f, company: e.target.value }))}
                        className="h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-1.5 block">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData(f => ({ ...f, email: e.target.value }))}
                        required
                        className="h-11"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-1.5 block">WhatsApp *</Label>
                      <Input
                        id="phone"
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData(f => ({ ...f, phone: e.target.value }))}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="date" className="text-sm font-medium mb-1.5 block">Data preferida *</Label>
                    <Input
                      id="date"
                      type="date"
                      min={today}
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-2 block">Horário preferido *</Label>
                    <div className="grid grid-cols-4 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${
                            selectedTime === time
                              ? 'bg-primary text-primary-foreground border-primary'
                              : 'bg-background text-foreground border-border hover:border-primary/40 hover:bg-muted'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="challenge" className="text-sm font-medium mb-1.5 block">
                      Descreva o principal desafio financeiro da sua empresa *
                    </Label>
                    <Textarea
                      id="challenge"
                      placeholder="Ex: Dificuldades com fluxo de caixa, dívidas elevadas, falta de controle financeiro..."
                      value={formData.challenge}
                      onChange={(e) => setFormData(f => ({ ...f, challenge: e.target.value }))}
                      required
                      className="min-h-[100px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 gap-2 font-semibold text-base"
                  >
                    <Send className="w-5 h-5" />
                    Confirmar Agendamento
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Seus dados são tratados com total sigilo e segurança.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PAYMENT / PIX SECTION
// ============================================================
function PaymentSection() {
  const [copied, setCopied] = useState(false);

  const copyPix = () => {
    navigator.clipboard.writeText(PIX_KEY);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="pagamento" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">Pagamento</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pagamento via Pix
          </h2>
          <p className="text-muted-foreground text-lg">
            Rápido, seguro e confirmação imediata. Pague em segundos.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          {/* QR Code Card */}
          <Card className="border-2 border-accent/30 bg-card shadow-md">
            <CardContent className="p-8 flex flex-col items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <QrCode className="w-6 h-6 text-accent" />
              </div>
              {/* Fake QR Code visual */}
              <div className="w-48 h-48 bg-foreground rounded-xl p-4 flex items-center justify-center">
                <div className="w-full h-full bg-background rounded-lg relative overflow-hidden">
                  <div className="grid grid-cols-8 gap-0.5 p-2 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-sm ${
                          [0,1,2,3,4,5,6,8,14,16,22,24,30,32,38,40,41,42,43,44,45,46,48,54,56,57,58,59,60,61,62,
                            10,12,18,20,26,28,34,36,50,52,9,11,17,19,25,27,33,35,49,51,15,23,31,39,47,55,63].includes(i)
                            ? 'bg-foreground'
                            : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-background p-1 rounded">
                      <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                        <span className="text-primary-foreground font-bold text-xs">CF</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Escaneie o QR Code com o app do seu banco
              </p>
            </CardContent>
          </Card>

          {/* Pix Key Card */}
          <Card className="border border-border bg-card shadow-sm">
            <CardContent className="p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-1">Chave Pix</h3>
                <p className="text-sm text-muted-foreground">Copie a chave abaixo e cole no seu aplicativo bancário</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-border">
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">CNPJ</p>
                <p className="font-mono font-semibold text-foreground text-lg">{PIX_KEY}</p>
              </div>

              <div className="bg-muted rounded-xl p-4 border border-border">
                <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">Nome</p>
                <p className="font-semibold text-foreground">{PIX_NAME}</p>
              </div>

              <Button
                className={`w-full gap-2 h-12 font-semibold ${
                  copied ? 'bg-green-500 hover:bg-green-600 text-white' : 'bg-accent text-accent-foreground hover:bg-accent/90'
                }`}
                onClick={copyPix}
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Chave copiada!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copiar chave Pix
                  </>
                )}
              </Button>

              <div className="space-y-2">
                {[
                  'Confirmação instantânea',
                  'Disponível 24h/7 dias',
                  'Sem taxas para você',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TESTIMONIALS SECTION
// ============================================================
function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Prova Social</Badge>
          <h2
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Resultados que falam por si
          </h2>
          <p className="text-muted-foreground text-lg">
            Veja o que nossos clientes dizem sobre a transformação financeira de suas empresas.
          </p>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={staggerItem}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats summary */}
        <div className="mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '4.9/5', label: 'Avaliação média' },
            { value: '150+', label: 'Clientes satisfeitos' },
            { value: '100%', label: 'Indicariam a consultoria' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-2xl font-bold text-primary font-mono">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// BLOG SECTION
// ============================================================
function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4"
        >
          <div>
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Conteúdo</Badge>
            <h2
              className="text-3xl lg:text-4xl font-bold text-foreground mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Artigos e insights financeiros
            </h2>
            <p className="text-muted-foreground">
              Conteúdo prático para gestores de PMEs tomarem melhores decisões.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={staggerItem}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// CTA SECTION
// ============================================================
function CtaSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pronto para transformar a saúde financeira da sua empresa?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Entre em contato agora mesmo e descubra como podemos ajudar seu negócio a crescer com solidez e rentabilidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-3 text-base h-14 px-8 font-semibold"
              onClick={() => document.getElementById('agendamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Calendar className="w-5 h-5" />
              Agendar Consultoria Gratuita
            </Button>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white border-0 gap-3 text-base h-14 px-8 font-semibold w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================
// HOME PAGE (main)
// ============================================================
export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <SpecialtiesSection />
      <ServicesSection />
      <SchedulingSection />
      <PaymentSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </>
  );
}
