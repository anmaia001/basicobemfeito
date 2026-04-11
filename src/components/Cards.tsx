import { motion } from 'framer-motion';
import {
  LayoutDashboard, RefreshCcw, Users, TrendingUp, Target,
  BarChart3, Scissors, CheckCircle, Star, Quote, Clock,
  Calendar, ChevronRight, Award, ArrowRight, MessageCircle,
  Phone, Banknote, QrCode, Shield
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { specialties, servicePackages, testimonials, blogPosts, stats } from '@/data/index';
import type { Specialty, ServicePackage, Testimonial, BlogPost } from '@/lib/index';

const iconMap: Record<string, React.ElementType> = {
  LayoutDashboard, RefreshCcw, Users, TrendingUp, Target, BarChart3, Scissors,
};

const categoryColors: Record<string, string> = {
  'Gestão Financeira': 'bg-blue-100 text-blue-700',
  'Endividamento': 'bg-red-100 text-red-700',
  'Capital de Giro': 'bg-green-100 text-green-700',
  'Formação de Gestores': 'bg-purple-100 text-purple-700',
};

// ============================================================
// SPECIALTY CARD
// ============================================================
export function SpecialtyCard({ specialty }: { specialty: Specialty }) {
  const IconComp = iconMap[specialty.icon] || LayoutDashboard;
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <Card className="h-full border border-border hover:border-accent/40 transition-all duration-300 hover:shadow-md group">
        <CardContent className="p-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <IconComp className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
          </div>
          <h3 className="font-semibold text-foreground mb-2 text-sm leading-snug">{specialty.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{specialty.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// SERVICE PACKAGE CARD
// ============================================================
export function ServiceCard({ pkg, onSchedule, onWhatsApp }: {
  pkg: ServicePackage;
  onSchedule: () => void;
  onWhatsApp: () => void;
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      className={`relative rounded-2xl border-2 p-8 flex flex-col gap-6 ${
        pkg.highlight
          ? 'border-accent bg-primary text-primary-foreground shadow-2xl shadow-primary/30'
          : 'border-border bg-card hover:border-primary/30 hover:shadow-lg'
      }`}
    >
      {pkg.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
            {pkg.badge}
          </span>
        </div>
      )}

      <div>
        <h3 className={`text-xl font-bold mb-1 ${pkg.highlight ? 'text-primary-foreground' : 'text-foreground'}`}>
          {pkg.name}
        </h3>
        <p className={`text-sm ${pkg.highlight ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
          {pkg.description}
        </p>
      </div>

      <div className="flex items-baseline gap-1">
        <span className={`text-3xl font-bold font-mono whitespace-nowrap ${pkg.highlight ? 'text-accent' : 'text-primary'}`}>
          {pkg.price}
        </span>
        <span className={`text-sm whitespace-nowrap ${pkg.highlight ? 'text-primary-foreground/60' : 'text-muted-foreground'}`}>
          {pkg.period}
        </span>
      </div>

      <ul className="flex flex-col gap-3">
        {pkg.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-accent' : 'text-primary'}`} />
            <span className={pkg.highlight ? 'text-primary-foreground/90' : 'text-foreground/80'}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col gap-3 mt-auto pt-2">
        <Button
          className={`w-full gap-2 ${
            pkg.highlight
              ? 'bg-accent text-accent-foreground hover:bg-accent/90'
              : 'bg-primary text-primary-foreground hover:bg-primary/90'
          }`}
          onClick={onSchedule}
        >
          <Calendar className="w-4 h-4" />
          Agendar Consultoria
        </Button>
        <Button
          variant="outline"
          className={`w-full gap-2 ${
            pkg.highlight
              ? 'border-white/30 text-primary-foreground hover:bg-white/10'
              : 'border-border hover:bg-muted'
          }`}
          onClick={onWhatsApp}
        >
          <MessageCircle className="w-4 h-4" />
          Falar no WhatsApp
        </Button>
      </div>
    </motion.div>
  );
}

// ============================================================
// TESTIMONIAL CARD
// ============================================================
export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md">
      <CardContent className="p-6 flex flex-col gap-4">
        <Quote className="w-8 h-8 text-accent/50 flex-shrink-0" />
        <p className="text-foreground/80 text-sm leading-relaxed italic flex-1">"{testimonial.content}"</p>
        {testimonial.result && (
          <div className="bg-primary/5 border border-primary/10 rounded-lg px-3 py-2">
            <p className="text-primary text-xs font-semibold flex items-center gap-2">
              <Award className="w-3 h-3" />
              {testimonial.result}
            </p>
          </div>
        )}
        <div className="flex items-center gap-3 pt-2 border-t border-border">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
            <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.company}</p>
          </div>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// ============================================================
// BLOG CARD
// ============================================================
export function BlogCard({ post }: { post: BlogPost }) {
  const colorClass = categoryColors[post.category] || 'bg-muted text-muted-foreground';
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
    >
      <Card className="h-full border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group cursor-pointer">
        <CardContent className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colorClass}`}>
              {post.category}
            </span>
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-semibold text-foreground text-sm leading-snug group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed flex-1">{post.excerpt}</p>
          <div className="flex items-center justify-between pt-2 border-t border-border">
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
              Ler artigo <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

// ============================================================
// STAT CARD
// ============================================================
export function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-6">
      <p className="text-3xl lg:text-4xl font-bold text-accent font-mono mb-1">{value}</p>
      <p className="text-primary-foreground/70 text-sm font-medium">{label}</p>
    </div>
  );
}
