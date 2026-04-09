import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '@/lib/index';

const navItems = [
  { label: 'Início', href: 'hero' },
  { label: 'Sobre', href: 'sobre' },
  { label: 'Especialidades', href: 'especialidades' },
  { label: 'Serviços', href: 'servicos' },
  { label: 'Depoimentos', href: 'depoimentos' },
  { label: 'Blog', href: 'blog' },
  { label: 'Contato', href: 'agendamento' },
];

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary/95 backdrop-blur-sm shadow-lg shadow-primary/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <span className="text-accent-foreground font-bold text-lg font-mono">CF</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-primary-foreground font-semibold text-sm leading-tight">Consultoria</p>
              <p className="text-accent text-xs font-medium leading-tight">Financeira PME</p>
              <p className="text-primary-foreground/50 text-xs leading-tight">www.basicobemfeito.online</p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium px-3 py-2 rounded-md transition-colors hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white border-0 gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
            <Button
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
              onClick={() => scrollTo('agendamento')}
            >
              <Phone className="w-4 h-4" />
              Agendar
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-foreground p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-primary border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm font-medium px-4 py-3 rounded-lg text-left transition-colors hover:bg-white/10"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white border-0 gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Falar no WhatsApp
                  </Button>
                </a>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 gap-2"
                  onClick={() => scrollTo('agendamento')}
                >
                  <Phone className="w-4 h-4" />
                  Agendar Consultoria
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                <span className="text-accent-foreground font-bold text-lg font-mono">CF</span>
              </div>
              <div>
                <p className="font-semibold leading-tight">Consultoria Financeira PME</p>
                <p className="text-accent text-xs font-medium">Resultados sustentáveis</p>
                <p className="text-primary-foreground/50 text-xs">www.basicobemfeito.online</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Quem manda no negócio precisa dominar os números.
              Mais de 150 empresas atendidas com excelência.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white border-0">
                  WhatsApp
                </Button>
              </a>
              <Button
                size="sm"
                variant="outline"
                className="border-white/30 text-primary-foreground hover:bg-white/10"
                onClick={() => scrollTo('agendamento')}
              >
                Agendar
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent">Navegação</h4>
            <ul className="space-y-2">
              {[
                { label: 'Início', href: 'hero' },
                { label: 'Sobre', href: 'sobre' },
                { label: 'Especialidades', href: 'especialidades' },
                { label: 'Serviços e Preços', href: 'servicos' },
                { label: 'Depoimentos', href: 'depoimentos' },
                { label: 'Blog', href: 'blog' },
              ].map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-accent">Contato</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  WhatsApp Profissional
                </a>
              </li>
              <li>
                <a href="mailto:contato@consultoriapme.com.br" className="hover:text-primary-foreground transition-colors">
                  contato@consultoriapme.com.br
                </a>
              </li>
              <li className="text-primary-foreground/50 text-xs mt-4">
                Atendimento: Seg–Sex<br />
                08h às 18h (Horário de Brasília)
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © 2026 Consultoria Financeira PME. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Cel: (24) 98848-0044
          </p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
