import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Play, TrendingDown, DollarSign, Layers, BarChart2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ArticlePageProps {
  onBack: () => void;
}

export default function ArticleCustos({ onBack }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

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
              Conceitos Básicos de Custos: o que todo empresário precisa saber
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Baseado na aula do Prof. Quintino — uma introdução prática e objetiva aos conceitos de custos
              essenciais para a gestão financeira de qualquer empresa.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-6 border-b border-border">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 09 Abr 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min de leitura</span>
            </div>
          </div>

          {/* Vídeo embed */}
          <div className="mb-10 rounded-xl overflow-hidden border border-border shadow-md">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/Yxn_J6A_TGM"
                title="Conceitos Básicos de Custos - Prof. Quintino"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="space-y-6 text-foreground/90 leading-relaxed">

            {/* Intro */}
            <p>
              Saber o que são custos, como classificá-los e qual a diferença entre custo e despesa é
              fundamental para qualquer empresário que deseja ter controle real do seu negócio. Nesta
              aula, o Prof. Quintino apresenta os conceitos de forma simples, com exemplos práticos do dia a dia.
            </p>

            {/* Evolução do preço */}
            <div className="bg-primary text-primary-foreground rounded-xl p-6 my-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                <TrendingDown className="w-5 h-5 text-accent" /> A virada: quem define o preço?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Antes (Concepção Antiga)</p>
                  <p className="text-sm text-primary-foreground/80 mb-3">O empresário calculava seus custos, adicionava o lucro desejado e definia o preço.</p>
                  <div className="bg-white/10 rounded px-3 py-2 font-mono text-sm text-center">
                    Preço = Custos + Lucro
                  </div>
                </div>
                <div className="bg-accent/20 rounded-lg p-4 border border-accent/40">
                  <p className="text-xs font-bold text-accent uppercase tracking-widest mb-2">Hoje (Concepção Moderna)</p>
                  <p className="text-sm text-primary-foreground/80 mb-3">O <strong className="text-accent">mercado</strong> define o preço. O lucro é o que sobra — então reduza custos para lucrar mais.</p>
                  <div className="bg-white/10 rounded px-3 py-2 font-mono text-sm text-center">
                    Lucro = Preço − Custos
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-white/10 rounded-lg text-sm">
                <p className="text-primary-foreground/80">
                  <strong className="text-accent">Exemplo prático:</strong> Se o mercado pratica R$73,00 e seu custo é R$50,00,
                  seu lucro será R$23,00. Para lucrar R$30,00, você precisa reduzir custos para R$43,00.
                </p>
              </div>
            </div>

            {/* Custos vs Despesas */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Custos × Despesas: qual a diferença?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-primary/30 rounded-xl p-5">
                <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Custos</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gastos utilizados diretamente na <strong>produção de bens ou prestação de serviços</strong> na atividade principal da empresa.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {['Fábrica', 'Produção', 'Matéria-prima', 'Mão de obra'].map(t => (
                    <span key={t} className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
              <div className="border-2 border-muted rounded-xl p-5">
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Despesas</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Gastos consumidos nas funções <strong>administrativas, de vendas</strong> ou outras relacionadas ao funcionamento diário.
                </p>
                <div className="mt-3 flex flex-wrap gap-1">
                  {['Escritório', 'Administração', 'Marketing', 'Vendas'].map(t => (
                    <span key={t} className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Custo de fabricação */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Os três elementos do Custo de Fabricação
            </h2>
            <div className="space-y-3">
              {[
                { icon: Layers, label: 'Matéria-Prima (MP)', desc: 'Principais materiais que formam o produto acabado. Ex: tecido para confecção, aço para peças metálicas.' },
                { icon: DollarSign, label: 'Mão de Obra Direta (MOD)', desc: 'Custo dos trabalhadores que confeccionam o produto ou prestam o serviço diretamente.' },
                { icon: BarChart2, label: 'Custos Indiretos de Fabricação (CIF)', desc: 'Tudo mais: depreciação de máquinas, energia elétrica, aluguel da fábrica, água, telefone.' },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex gap-4 p-4 bg-muted/30 rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-3 text-sm font-mono text-center text-foreground">
              Custo Gerencial = MP + MOD + CIF + Despesas
            </div>

            {/* Classificação */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Classificação dos Custos
            </h2>

            {/* Diretos vs Indiretos */}
            <p className="font-semibold text-foreground">1. Pela facilidade de atribuição ao produto</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-xs font-bold text-green-700 uppercase tracking-widest mb-1">Custos Diretos</p>
                <p className="text-sm text-green-800">Facilmente relacionáveis ao produto. Ex: matéria-prima, componentes, MOD.</p>
                <p className="text-xs text-green-600 mt-2 font-mono">Custo → Produto ✓</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl">
                <p className="text-xs font-bold text-orange-700 uppercase tracking-widest mb-1">Custos Indiretos</p>
                <p className="text-sm text-orange-800">Precisam de rateio para ser distribuídos. Ex: aluguel, energia elétrica.</p>
                <p className="text-xs text-orange-600 mt-2 font-mono">Custo → Rateio → Produto</p>
              </div>
            </div>

            {/* Fixos vs Variáveis */}
            <p className="font-semibold text-foreground mt-6">2. Pela variação conforme o volume produzido</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-xl">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Custos Fixos</p>
                <p className="text-sm text-blue-800">Existem independentemente da produção. Ex: aluguel, salários, seguro.</p>
                <p className="text-xs text-blue-600 mt-2 italic">Produção = 0 → Custo ainda existe</p>
              </div>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-xl">
                <p className="text-xs font-bold text-purple-700 uppercase tracking-widest mb-1">Custos Variáveis</p>
                <p className="text-sm text-purple-800">Aumentam com a produção. Ex: matéria-prima, combustível, embalagens.</p>
                <p className="text-xs text-purple-600 mt-2 italic">Produção = 0 → Custo = R$ 0,00</p>
              </div>
            </div>

            {/* Exemplo numérico */}
            <h2 className="text-2xl font-bold text-foreground mt-10 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Custo Total e Custo Unitário — Exemplo prático
            </h2>
            <div className="bg-primary text-primary-foreground rounded-xl p-6">
              <p className="text-sm text-primary-foreground/70 mb-4">Dados do exemplo:</p>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: 'Custo variável', value: 'R$ 6,00/un' },
                  { label: 'Custos fixos', value: 'R$ 2.500,00' },
                  { label: 'Produção mensal', value: '1.000 un' },
                ].map(({ label, value }) => (
                  <div key={label} className="bg-white/10 rounded-lg p-3 text-center">
                    <p className="text-xs text-primary-foreground/60">{label}</p>
                    <p className="font-mono font-bold text-accent">{value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm font-mono border-t border-white/20 pt-4">
                <p>Custo Total = (1.000 × R$6,00) + R$2.500,00</p>
                <p className="text-accent font-bold">Custo Total = R$ 8.500,00</p>
                <p className="mt-3">Custo Unitário = R$8.500,00 ÷ 1.000</p>
                <p className="text-accent font-bold">Custo Unitário = R$ 8,50</p>
              </div>
            </div>

            {/* Resumo final */}
            <div className="bg-muted/40 border border-border rounded-xl p-6 mt-8">
              <h3 className="font-bold text-foreground mb-3">📌 Resumo dos conceitos</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  'O mercado define o preço — o lucro depende da gestão dos seus custos',
                  'Custos = gastos na produção | Despesas = gastos na administração',
                  'Custo de fabricação = Matéria-Prima + MOD + CIF',
                  'Custos diretos: fácil atribuição | Indiretos: precisam de rateio',
                  'Custos fixos: independem da produção | Variáveis: crescem com ela',
                  'Custo Total = (Qtd × Custo Variável) + Custos Fixos',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>

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
