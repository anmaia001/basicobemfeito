import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, TrendingUp, Zap, BarChart3, Target } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  onBack: () => void;
}

export default function ArticleControladoria({ onBack }: ArticlePageProps) {
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
          <div className="mb-10">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">Gestão Financeira</Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              A evolução do setor financeiro nas PMEs: da operação à controladoria estratégica
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Como transformar o financeiro da sua empresa de simples executor para área estratégica — e o que isso significa para a produtividade e o crescimento do negócio.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 09 Abr 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 8 min de leitura</span>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-6 text-foreground/90 leading-relaxed">

            <p>
              Nas pequenas e médias empresas (PMEs), o setor financeiro tradicionalmente nasce com um papel
              essencialmente operacional: pagar contas, emitir cobranças e controlar o fluxo de caixa básico.
              Essa estrutura, embora suficiente em estágios iniciais, torna-se limitada à medida que o negócio
              cresce e enfrenta um ambiente mais competitivo e complexo.
            </p>
            <p>
              Nesse contexto, a evolução do financeiro para uma área de <strong>controladoria estratégica</strong> representa
              um passo fundamental para aumentar a produtividade e impulsionar melhores resultados.
            </p>

            {/* Financeiro operacional */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  O financeiro operacional: foco no curto prazo
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                O setor financeiro operacional é responsável pelas atividades do dia a dia: contas a pagar,
                contas a receber, conciliações bancárias e controle de caixa. Seu foco está na execução
                eficiente dessas tarefas, garantindo que obrigações sejam cumpridas e receitas corretamente registradas.
              </p>
              <p className="text-sm font-semibold text-foreground mb-2">Limitações desse modelo:</p>
              <ul className="space-y-1.5">
                {[
                  'Baixa capacidade analítica',
                  'Visão restrita ao curto prazo',
                  'Pouco suporte à tomada de decisão estratégica',
                  'Dependência de processos manuais, suscetíveis a erros',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-destructive mt-0.5 font-bold">—</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Controladoria */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Playfair Display', serif" }}>
                  A controladoria: visão estratégica e geração de valor
                </h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A controladoria amplia o escopo do financeiro, incorporando análise, planejamento e controle
                gerencial. Seu objetivo não é apenas registrar o passado, mas <strong>interpretar dados e orientar o futuro</strong> da empresa.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  'Planejamento financeiro e orçamentário',
                  'Análise de desempenho (real vs. planejado)',
                  'Gestão de indicadores (KPIs)',
                  'Apoio à tomada de decisão',
                  'Controle de custos e margem',
                  'Estruturação de relatórios gerenciais',
                ].map(item => (
                  <div key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-0.5 font-bold">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Tabela comparativa */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Principais diferenças
            </h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left px-4 py-3 font-semibold">Aspecto</th>
                    <th className="text-left px-4 py-3 font-semibold">Financeiro Operacional</th>
                    <th className="text-left px-4 py-3 font-semibold">Controladoria</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Foco', 'Execução', 'Estratégia'],
                    ['Horizonte', 'Curto prazo', 'Médio e longo prazo'],
                    ['Atuação', 'Reativa', 'Proativa'],
                    ['Entregas', 'Pagamentos, cobranças, conciliações', 'Relatórios, análises, planejamento'],
                    ['Perfil profissional', 'Técnico-operacional', 'Analítico-estratégico'],
                  ].map(([aspecto, fin, ctrl], i) => (
                    <tr key={aspecto} className={i % 2 === 0 ? 'bg-background' : 'bg-muted/30'}>
                      <td className="px-4 py-3 font-medium text-foreground">{aspecto}</td>
                      <td className="px-4 py-3 text-muted-foreground">{fin}</td>
                      <td className="px-4 py-3 text-primary font-medium">{ctrl}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Evolução dos profissionais */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Evolução dos profissionais
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A transformação do setor exige também uma mudança no perfil das pessoas envolvidas.
              Além de organização e atenção a detalhes, a controladoria requer competências adicionais:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {[
                { icon: BarChart3, title: 'Pensamento analítico', desc: 'Capacidade de interpretar dados e identificar padrões' },
                { icon: Target, title: 'Visão de negócio', desc: 'Entender o impacto financeiro nas decisões estratégicas' },
                { icon: TrendingUp, title: 'Comunicação estratégica', desc: 'Traduzir números em linguagem clara para gestores' },
                { icon: Zap, title: 'Ferramentas de BI', desc: 'Domínio de softwares de planejamento e análise' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-3 p-4 bg-muted/30 rounded-lg border border-border">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Ganhos */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ganhos de produtividade e resultados
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { titulo: 'Maior eficiência operacional', desc: 'Automação de processos e redução de erros' },
                { titulo: 'Melhor gestão financeira', desc: 'Visão clara de receitas, custos e margens' },
                { titulo: 'Decisões mais assertivas', desc: 'Baseadas em dados e indicadores concretos' },
                { titulo: 'Planejamento estruturado', desc: 'Maior previsibilidade e controle do negócio' },
                { titulo: 'Crescimento sustentável', desc: 'Alinhamento entre estratégia e execução' },
                { titulo: 'Maior competitividade', desc: 'Capacidade de adaptação às mudanças do mercado' },
              ].map(({ titulo, desc }) => (
                <div key={titulo} className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/10">
                  <span className="text-accent font-bold text-base mt-0.5">→</span>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{titulo}</p>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Conclusão */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Conclusão
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A evolução do setor financeiro de uma PME não é apenas uma questão de estrutura, mas de
              <strong className="text-foreground"> mentalidade</strong>. Migrar de um modelo operacional para uma controladoria estratégica
              significa transformar dados em informação e informação em decisão.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-3 my-6 bg-accent/5 rounded-r-xl">
              <p className="italic text-foreground/80 text-sm leading-relaxed">
                Empresas que compreendem essa transição e investem no desenvolvimento de seus processos e
                profissionais estão mais preparadas para enfrentar desafios e aproveitar oportunidades
                em um cenário cada vez mais dinâmico.
              </p>
            </blockquote>
          </div>
        </motion.article>

        <div className="mt-12 pt-8 border-t border-border">
          <Button variant="outline" className="gap-2" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" /> Voltar para o Blog
          </Button>
        </div>
      </div>
    </div>
  );
}
