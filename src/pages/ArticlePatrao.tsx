import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  onBack: () => void;
}

export default function ArticlePatrao({ onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            className="gap-2 text-muted-foreground hover:text-foreground -ml-2"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Button>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="mb-10">
            <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
              Gestão Empresarial
            </Badge>
            <h1
              className="text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O Patrão Sou Eu: Guia Prático para o Empreendedor
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Baseado na obra de Giovana Simonaci (2021)
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 09 Abr 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 12 min de leitura</span>
              <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Análise de obra</span>
            </div>
          </div>

          {/* Article body */}
          <div className="prose prose-lg max-w-none space-y-6 text-foreground/90 leading-relaxed">

            <p>
              Este artigo apresenta uma síntese analítica do e-book <strong>"O Patrão Sou Eu"</strong>, de Giovana Simonaci,
              publicado em 2021. O conteúdo aqui discutido foi integralmente extraído da obra original, respeitando a
              autoria e a estrutura conceitual proposta pela consultora.
            </p>

            {/* Sobre a autora */}
            <div className="bg-muted/50 border border-border rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <User className="w-5 h-5 text-primary" /> Sobre a Autora
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Giovana Simonaci é diretora de negócios do Sicoob Sul-Litorâneo, com mais de vinte anos de atuação
                no mercado financeiro. Mestre em Administração e Desenvolvimento de Empresas, utilizou sua trajetória
                profissional como base para compartilhar conhecimento prático e acessível, estruturando a obra como
                um roteiro de perguntas e respostas para guiar o empreendedor desde a concepção até a consolidação do negócio.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Introdução e Propósito da Obra
            </h2>
            <p>
              Em <em>"O Patrão Sou Eu"</em>, Giovana Simonaci dirige-se a todo empreendedor que decidiu fazer algo novo:
              seja abandonar um emprego formal, mudar de ramo, ou lançar-se a um desafio ainda não experimentado.
              A obra não propõe fórmulas mágicas, mas sim uma checklist reflexiva de questões fundamentais que todo
              empresário deve considerar para aumentar as chances de sucesso e, principalmente, manter-se competitivo
              por longo tempo no mercado.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-2 my-6 bg-accent/5 rounded-r-xl">
              <p className="italic text-foreground/80 text-sm leading-relaxed">
                "Minha intenção é apresentar de forma simplificada uma checklist com questões que devem ser observadas
                e que todos os empreendedores devem se ater para aumentar a chance de sucesso, e principalmente,
                permanecer um longo tempo no mercado."
              </p>
              <cite className="text-xs text-muted-foreground mt-2 block not-italic">— Giovana Simonaci</cite>
            </blockquote>

            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              As Seis Perguntas Fundamentais
            </h2>

            {/* Pergunta 1 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta I</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Conheço algum aspecto do negócio que desejo montar?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Simonaci destaca que conhecer o ramo de atuação é um diferencial competitivo imediato. A autora diferencia
                três tipos de negócio quanto à complexidade: <strong>prestação de serviços</strong> (ex: salão de beleza),
                <strong> comércio varejista</strong> (compra e revenda) e <strong>negócio de transformação</strong> (ex: restaurante).
                Quanto maior a transformação, maior a complexidade e o risco.
              </p>
              <p className="text-sm text-primary mt-3 font-medium">
                💡 Dica: converse com pessoas do segmento. Pesquise casos de fracasso — os erros alheios são a melhor escola.
              </p>
            </div>

            {/* Pergunta 2 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta II</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Qual a forma de atuação da empresa?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                O negócio será <strong>físico</strong>, <strong>virtual</strong> ou <strong>híbrido</strong>? Cada modelo implica
                custos, dedicação e exigências distintas. Para o e-commerce, a autora alerta para avaliar cuidadosamente
                o custo do frete e a logística de entrega.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mt-3 text-xs italic text-muted-foreground">
                "Não tenha pressa na sua decisão — tenha senso de urgência, não pressa." — Giovana Simonaci
              </blockquote>
            </div>

            {/* Pergunta 3 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta III</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Quais são os aspectos legais e fiscais da empresa?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Consultar um contador experiente logo no início é essencial. As decisões incluem:
              </p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {['Verificar se o negócio pode ser aberto no endereço pretendido',
                  'Identificar os CNAEs aplicáveis',
                  'Escolher a constituição jurídica: MEI, Empresário Individual, EIRELI, Ltda. ou S.A.',
                  'Definir o regime fiscal: Simples Nacional, Lucro Presumido ou Lucro Real'].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pergunta 4 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta IV</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">O negócio possui viabilidade financeira?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Simonaci apresenta três indicadores-chave:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Prazo de retorno', formula: 'Investimento ÷ Lucro mensal' },
                  { label: 'Rentabilidade', formula: 'Lucro mensal ÷ Investimento total' },
                  { label: 'Lucratividade', formula: 'Lucro mensal ÷ Faturamento mensal' },
                ].map(({ label, formula }) => (
                  <div key={label} className="bg-primary/5 rounded-lg p-3 text-center">
                    <p className="text-xs font-bold text-primary">{label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{formula}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pergunta 5 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta V</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Qual a fonte de financiamento do investimento?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recursos próprios, empréstimos familiares ou financiamentos bancários — cada fonte tem implicações distintas.
                O uso de capital de terceiros deve ser calculado com cuidado.
              </p>
              <blockquote className="border-l-2 border-accent pl-4 mt-3 text-xs italic text-muted-foreground">
                "Utilizar capital de terceiros é como um remédio, podendo curar ou matar, dependendo da dose." — Giovana Simonaci
              </blockquote>
            </div>

            {/* Pergunta 6 */}
            <div className="border border-border rounded-xl p-6 mb-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pergunta VI</span>
              <h3 className="text-lg font-bold text-foreground mt-1 mb-3">Qual o plano de voo do negócio?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Com o negócio em funcionamento, a autora propõe um ciclo virtuoso: contratar, selecionar fornecedores,
                conquistar clientes, encantá-los, fidelizá-los e reinvestir os resultados. A informação gerencial é
                a bússola do empresário — dados desatualizados comprometem a tomada de decisão.
              </p>
            </div>

            {/* Temas complementares */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Temas Complementares
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Relacionamento com Clientes', desc: 'Diferença entre tratamento (hospitalidade) e atendimento (venda). Muitas empresas tratam bem mas falham no atendimento.' },
                { title: 'Acompanhamento da Concorrência', desc: 'Monitorar concorrentes ajuda a entender o mercado e impede a acomodação.' },
                { title: 'Gestão por Indicadores', desc: 'Definir KPIs com base em empresas de referência do mesmo segmento para provocar melhorias contínuas.' },
                { title: 'Precificação', desc: 'Quem define o preço é o mercado. Gerenciar custos e escolher fornecedores estrategicamente é o diferencial.' },
                { title: 'Fluxo de Caixa', desc: 'Alinhar prazo de pagamento a fornecedores com recebimento de vendas é prática fundamental.' },
                { title: 'Redes Sociais', desc: 'Não adianta investir em anúncios sem equipe treinada para aproveitar as oportunidades geradas.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-muted/40 rounded-lg p-4 border border-border">
                  <h4 className="font-semibold text-sm text-foreground mb-1">{title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            {/* Considerações finais */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Considerações Finais
            </h2>
            <p>
              Em <em>"O Patrão Sou Eu"</em>, Giovana Simonaci entrega ao empreendedor brasileiro um roteiro prático,
              direto e fundamentado em experiência real. A obra conduz o leitor a construir uma visão 360° do próprio
              negócio — da escolha do segmento à precificação, do financiamento à fidelização de clientes.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 py-3 my-6 bg-accent/5 rounded-r-xl">
              <p className="italic text-foreground/80 text-sm leading-relaxed">
                "Espero ter de alguma forma contribuído para elucidar dúvidas, criar trilhas de conhecimento e reflexões
                para montar um negócio ou tomar uma decisão para melhorar a gestão e encorajar outros investimentos."
              </p>
              <cite className="text-xs text-muted-foreground mt-2 block not-italic">— Giovana Simonaci</cite>
            </blockquote>

            {/* Referência */}
            <div className="bg-muted/30 border border-border rounded-lg p-4 mt-8">
              <p className="text-xs text-muted-foreground">
                <strong>Referência:</strong> SIMONACI, Giovana. <em>O Patrão Sou Eu</em>. E-book, 2021.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Back button bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <Button
            variant="outline"
            className="gap-2"
            onClick={onBack}
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Button>
        </div>
      </div>
    </div>
  );
}
