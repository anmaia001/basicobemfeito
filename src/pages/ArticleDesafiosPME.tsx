import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, AlertTriangle, TrendingDown, HelpCircle, BarChart2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  onBack: () => void;
}

export default function ArticleDesafiosPME({ onBack }: ArticlePageProps) {
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
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Gestão de Negócios</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Os grandes desafios do pequeno e médio empresário: como liderar sem enxergar os números
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Ambiente instável, concorrência crescente, juros altos e exigências fiscais compõem um cenário desafiador.
              Mas o maior obstáculo pode estar dentro da própria empresa: a falta de dados estruturados para enxergar onde o negócio realmente está.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 25 Abr 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 5 min de leitura</span>
            </div>
          </div>

          {/* Cover Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-border"
          >
            <img
              src="/images/ilustracao-desafios-pme.png"
              alt="Empresário conduzindo o negócio sem visibilidade financeira"
              className="w-full h-auto object-cover"
            />
            <div className="px-4 py-2 bg-muted/30 text-xs text-muted-foreground text-center italic">
              O empresário na corrida de obstáculos — sem enxergar os dados, sem direção clara.
            </div>
          </motion.div>

          {/* Body */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">

            {/* Abertura */}
            <p>
              Qual o maior desafio enfrentado pelo pequeno e médio empresário? Ambiente de negócio descontínuo,
              mudanças tecnológicas, entrada de novos concorrentes, taxa de juros descabida, qualificação profissional
              incompatível, exigência fiscal inconcebível?
            </p>
            <p>
              <strong>Sim — um pouco de tudo.</strong> Esse conjunto de fatores torna o ato de empreender ao mesmo tempo
              assustador e estimulante, como uma corrida de obstáculos sem regras claras.
            </p>

            {/* Bloco de destaque */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-primary mt-1 shrink-0" />
                <p className="text-foreground font-medium leading-relaxed">
                  Um fato que chama atenção — e que aprofunda todos os outros desafios — é a <strong>visão sem enxergar</strong>
                  com que muitos empresários conduzem seu negócio diariamente.
                </p>
              </div>
            </div>

            {/* Seção: A pergunta mais reveladora */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A pergunta mais reveladora
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Considere esta simples indagação:
              </p>
              <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-amber-50/5 rounded-r">
                <p className="text-foreground font-semibold text-lg italic">
                  "Seu negócio está indo bem?"
                </p>
                <p className="text-muted-foreground mt-2 italic">
                  "Acho que sim, pois está sobrando dinheiro no banco."
                </p>
              </blockquote>
              <p className="text-foreground/80 leading-relaxed">
                A resposta pode ser verdadeira — mas <strong>carece de dados estruturados</strong> para confirmar a afirmativa.
                Pois ela pode vir acompanhada de outra pergunta ainda mais importante:
                <em> até quando vai sobrar dinheiro?</em>
              </p>
            </div>

            {/* Seção: O desequilíbrio de prazos */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingDown className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  O desequilíbrio de prazos que drena o caixa
                </h2>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-4">
                Quando o empresário vende parcelado em <strong>6 ou 12 vezes</strong> e paga seus fornecedores em <strong>28 dias</strong>,
                cria-se um desequilíbrio silencioso e crescente no fluxo de caixa. Esse descasamento de prazos força
                a empresa a buscar <strong>capital de giro</strong> — geralmente a um custo elevado, com taxas de juros que
                corroem a margem e comprometem diretamente o lucro.
              </p>

              {/* Mini tabela comparativa */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="bg-background rounded-lg p-4 border border-border text-center">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Prazo de Recebimento</p>
                  <p className="text-2xl font-bold text-primary" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>6–12x</p>
                  <p className="text-xs text-muted-foreground mt-1">meses para receber</p>
                </div>
                <div className="bg-background rounded-lg p-4 border border-border text-center">
                  <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Prazo de Pagamento</p>
                  <p className="text-2xl font-bold text-amber-500" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>28 dias</p>
                  <p className="text-xs text-muted-foreground mt-1">para pagar fornecedores</p>
                </div>
              </div>
            </div>

            {/* Seção: O que o empresário precisa monitorar */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart2 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  O que o empresário precisa monitorar
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-4">
                São respostas que o empresário deve acompanhar de perto e ter certeza de que:
              </p>
              <ul className="space-y-3">
                {[
                  'A lucratividade das margens suporta a necessidade crescente de capital de giro',
                  'O prazo médio de recebimento está sob controle e não se dilata progressivamente',
                  'A dependência de crédito caro não está consumindo o resultado operacional',
                  'Ações reparadoras são adotadas a tempo — antes que o caixa dê o sinal de alerta',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Conclusão */}
            <p className="mt-6">
              O ambiente externo é desafiador e, em grande parte, incontrolável. Mas a gestão dos números internos
              da empresa é responsabilidade do empresário — e é ali que reside a maior oportunidade de diferenciação.
            </p>
            <p>
              <strong>Empreender com dados é empreender com direção.</strong> A corrida de obstáculos continua,
              mas com visibilidade financeira estruturada o empresário ao menos sabe onde está pisando.
            </p>

            {/* CTA */}
            <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl text-center">
              <p className="text-lg font-semibold text-foreground mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Você sabe realmente como está o seu negócio?
              </p>
              <p className="text-muted-foreground text-sm mb-4">
                Agende uma conversa e descubra como organizar seus números para tomar decisões com confiança.
              </p>
              <a
                href={`https://wa.me/5524988480044?text=${encodeURIComponent('Ola! Li o artigo sobre desafios do empresario e gostaria de conversar sobre minha empresa.')}`}
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
