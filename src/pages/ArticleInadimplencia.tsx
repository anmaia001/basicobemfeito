import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, AlertTriangle, TrendingDown, Building2, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Props { onBack: () => void; }

export default function ArticleInadimplencia({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="mb-8">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground -ml-2" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
          </Button>
        </motion.div>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <div className="mb-10">
            <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">Endividamento</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              CNPJs no vermelho: 8,9 milhoes de empresas inadimplentes em 2025
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              O Brasil fechou 2025 com um patamar recorde de inadimplencia empresarial. Entenda os numeros, as causas e o que sua empresa pode fazer para nao entrar nessa estatistica.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 09 Abr 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min de leitura</span>
              <span className="flex items-center gap-1.5 text-red-600 font-medium"><AlertTriangle className="w-4 h-4" /> Dado recorde</span>
            </div>
          </div>

          {/* Video */}
          <div className="mb-10 rounded-xl overflow-hidden border border-border shadow-md">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/QPpSJVXa9_M"
                title="Empresas inadimplentes fecham 2025 em patamar recorde"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen />
            </div>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>Apesar do PIB brasileiro ter fechado 2025 em crescimento de <strong>2,3%</strong>, o cenario para as empresas, especialmente as micro e pequenas, foi de grande pressao. A combinacao de juros altos, credito restrito e gastos publicos elevados gerou um ambiente economico hostil para o setor privado.</p>

            {/* Numeros principais */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
              {[
                { valor: '8,9 mi', label: 'Empresas inadimplentes' },
                { valor: 'R$ 213 bi', label: 'Total de dividas' },
                { valor: 'R$ 23.818', label: 'Divida media por CNPJ' },
                { valor: '7', label: 'Contas neg. por empresa' },
              ].map(({ valor, label }) => (
                <div key={label} className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <p className="text-xl font-bold text-red-700 font-mono">{valor}</p>
                  <p className="text-xs text-red-600 mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Por que as empresas estao endividadas?</h2>
            <div className="space-y-3">
              {[
                { titulo: 'Selic a 15%', desc: 'A taxa de juros elevada desde meados de 2025 encareceu o credito e tornou insustentavel o financiamento das operacoes das PMEs.' },
                { titulo: 'Credito mais restrito', desc: 'Micro e pequenas empresas dependem do credito como pilar de sustentacao. Com o acesso dificultado, a inadimplencia se torna inevitavel.' },
                { titulo: 'Incerteza fiscal', desc: 'A falta de previsibilidade sobre os juros e os gastos publicos eleva o custo de manutencao dos negocios a niveis impraticaveis.' },
                { titulo: 'Falta de liquidez', desc: 'Quase 9 milhoes de empresas insolventes revelam uma crise estrutural de caixa no setor privado brasileiro.' },
              ].map(({ titulo, desc }) => (
                <div key={titulo} className="flex gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <TrendingDown className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground">{titulo}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Quem mais sofreu?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><Building2 className="w-5 h-5 text-primary" /><p className="font-semibold text-sm">Por setor</p></div>
                <div className="space-y-2">
                  {[['Servicos', '55,2%'], ['Comercio', 'expressivo'], ['Industria', 'presente']].map(([s, p]) => (
                    <div key={s} className="flex justify-between text-sm"><span className="text-muted-foreground">{s}</span><span className="font-semibold text-foreground">{p}</span></div>
                  ))}
                </div>
              </div>
              <div className="border border-border rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3"><MapPin className="w-5 h-5 text-primary" /><p className="font-semibold text-sm">Por regiao</p></div>
                <div className="space-y-2">
                  {[['Sudeste', '4,81 mi (53,8%)'], ['Sul', '1,45 mi'], ['Nordeste', '1,37 mi'], ['Centro-Oeste', '784 mil'], ['Norte', '353 mil']].map(([r, v]) => (
                    <div key={r} className="flex justify-between text-sm"><span className="text-muted-foreground">{r}</span><span className="font-semibold text-foreground">{v}</span></div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground rounded-xl p-6 my-8">
              <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>O que sua empresa pode fazer agora?</h3>
              <ul className="space-y-2">
                {['Mapeie todas as dividas e priorize as de maior custo financeiro','Negocie com credores antes de ser negativado','Implante controle rigoroso de fluxo de caixa','Reduza custos fixos e otimize o capital de giro','Busque assessoria financeira especializada para PMEs'].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-primary-foreground/90"><span className="text-accent font-bold mt-0.5">{i + 1}.</span>{item}</li>
                ))}
              </ul>
            </div>

            <blockquote className="border-l-4 border-accent pl-6 py-3 bg-accent/5 rounded-r-xl">
              <p className="italic text-foreground/80 text-sm leading-relaxed">"Micro e pequenas empresas encontram no credito algum pilar de sustentacao do seu negocio, e neste momento em que o credito esta mais restritivo, elas acabam sofrendo as consequencias."</p>
              <cite className="text-xs text-muted-foreground mt-2 block not-italic">— Camila Abdelmalack, economista-chefe da Serasa Experian</cite>
            </blockquote>

            <div className="bg-muted/40 border border-border rounded-lg p-4 mt-8">
              <p className="text-xs text-muted-foreground"><strong>Fonte:</strong> Serasa Experian — Dados de dezembro de 2025. Reportagem: Daniel Lian.</p>
            </div>
          </div>
        </motion.article>

        <div className="mt-12 pt-8 border-t border-border">
          <Button variant="outline" className="gap-2" onClick={onBack}><ArrowLeft className="w-4 h-4" /> Voltar para o Blog</Button>
        </div>
      </div>
    </div>
  );
}
