import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Mic, TrendingUp, Target, BarChart2, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  onBack: () => void;
}

export default function ArticlePodcast({ onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        {/* Back */}
        <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="mb-8">
          <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground -ml-2" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
          </Button>
        </motion.div>

        <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>

          {/* Header */}
          <div className="mb-8">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Podcast</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Análise de Investimento: Investir sem análise é apostar, não empreender
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Neste episódio do <strong>O Patrão Sou Eu Cast</strong>, André Maia explica como transformar
              expectativas em números concretos antes de tomar qualquer decisão de investimento — e por que
              ignorar essa etapa pode custar o futuro da empresa.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 26 Mai 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min de leitura</span>
              <span className="flex items-center gap-1.5"><Mic className="w-4 h-4" /> O Patrão Sou Eu Cast</span>
            </div>
          </div>

          {/* Audio Player */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-10 rounded-2xl overflow-hidden border border-border bg-primary/5"
          >
            <div className="flex items-center gap-4 px-6 pt-5 pb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">O Patrão Sou Eu Cast</p>
                <p className="text-xs text-muted-foreground">Análise de Investimento — com André Maia</p>
              </div>
            </div>
            <div className="px-6 pb-5">
              <audio
                controls
                className="w-full"
                style={{ accentColor: 'var(--accent)' }}
              >
                <source src="/audio/podcast-analise-investimento.mp3" type="audio/mpeg" />
                Seu navegador não suporta o player de áudio.
              </audio>
            </div>
          </motion.div>

          {/* Resumo */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">

            <p>
              Você está prestes a fazer um investimento importante na sua empresa — abrir uma nova unidade,
              implantar um ERP, expandir a operação. A empolgação é grande. Mas antes de assinar qualquer
              contrato, uma pergunta precisa ser respondida com números:
              <strong> esse investimento vai de fato me trazer retorno?</strong>
            </p>

            {/* Bloco de destaque */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground font-medium leading-relaxed">
                  "Empresas quebram por excesso de otimismo e falta de números.
                  <strong> Investir sem análise é apostar, não empreender.</strong>"
                  <span className="block text-sm text-muted-foreground mt-1">— André Maia</span>
                </p>
              </div>
            </div>

            {/* Seção 1 */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Por que as empresas erram nas decisões de investimento?
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-3">
                A maioria dos empresários toma decisões de investimento movida por <strong>otimismo</strong> —
                uma projeção mental positiva de que "vai dar certo". O problema é que otimismo não paga dívida.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Sem transformar expectativas em números concretos, o empresário não consegue avaliar se o
                investimento é viável, se o retorno compensa o risco, ou se o fluxo de caixa suportará
                o período de maturação.
              </p>
            </div>

            {/* Seção 2 */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  O que analisar antes de investir
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                André Maia apresenta no episódio uma estrutura clara para avaliar qualquer investimento:
              </p>
              <ul className="space-y-3">
                {[
                  { titulo: 'Custos e faturamentos incrementais', desc: 'Considere apenas o que muda com o investimento — não o total da empresa.' },
                  { titulo: 'Cenários pessimista e realista', desc: 'Nunca projete apenas o melhor caso. O cenário pessimista revela o risco real.' },
                  { titulo: 'TMA — Taxa Mínima de Atratividade', desc: 'O investimento precisa superar o custo do capital para valer a pena.' },
                  { titulo: 'Período de análise adequado', desc: 'Para investimentos estruturais, projete no mínimo 36 a 60 meses.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80">
                      <strong>{item.titulo}:</strong> {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Seção 3 — Indicadores */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Os 3 indicadores essenciais
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-2">
                {[
                  { sigla: 'VPL', nome: 'Valor Presente Líquido', desc: 'Mede se o investimento gera valor acima do custo do capital. VPL positivo = viável.' },
                  { sigla: 'TIR', nome: 'Taxa Interna de Retorno', desc: 'A rentabilidade real do investimento. Deve superar a TMA para ser atrativo.' },
                  { sigla: 'Payback', nome: 'Tempo de Retorno', desc: 'Em quanto tempo o investimento se paga. Quanto menor, menor o risco de exposição.' },
                ].map((ind) => (
                  <div key={ind.sigla} className="bg-background rounded-xl p-4 border border-border text-center">
                    <p className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>{ind.sigla}</p>
                    <p className="text-xs font-semibold text-foreground mb-2">{ind.nome}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Exemplo prático */}
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 mt-6">
              <h3 className="font-bold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Exemplo prático: segunda unidade do negócio
              </h3>
              <p className="text-foreground/80 leading-relaxed text-sm">
                No episódio, André Maia usa como exemplo a análise de abertura de uma segunda unidade.
                Antes de qualquer decisão, o empresário precisa projetar: qual será o faturamento incremental?
                Quais são os custos fixos adicionais? O fluxo de caixa gerado justifica o investimento inicial?
                Qual é o payback esperado? Só com essas respostas em mãos a decisão deixa de ser um palpite
                e passa a ser estratégia.
              </p>
            </div>

            {/* Conclusão */}
            <p className="mt-6">
              A mensagem central do episódio é direta: <strong>antes de decidir, sente com alguém e analise
              os números</strong>. A análise de investimento não é burocracia — é o que separa o empresário
              que cresce com solidez do que cresce e quebra.
            </p>

            {/* CTA */}
            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
              <p className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Precisa analisar um investimento na sua empresa?
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Agende uma consultoria e transforme suas expectativas em números concretos.
              </p>
              <a
                href={`https://wa.me/5524988480044?text=${encodeURIComponent('Ola! Ouvi o podcast sobre analise de investimento e gostaria de analisar um investimento na minha empresa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm"
              >
                Falar com o consultor
              </a>
            </div>

          </div>
        </motion.article>
      </div>
    </div>
  );
}
