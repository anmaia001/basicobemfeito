import type { Specialty, ServicePackage, Testimonial, BlogPost } from '@/lib/index';

export const specialties: Specialty[] = [
  {
    id: '1',
    icon: 'LayoutDashboard',
    title: 'Organização Financeira Empresarial',
    description: 'Estruturação completa das finanças da empresa, com controles claros e visibilidade total do desempenho financeiro.',
  },
  {
    id: '2',
    icon: 'RefreshCcw',
    title: 'Estruturação e Renegociação de Dívidas',
    description: 'Diagnóstico do passivo empresarial, estratégias de renegociação e plano de desendividamento sustentável.',
  },
  {
    id: '3',
    icon: 'Users',
    title: 'Formação de Gerentes Financeiros',
    description: 'Capacitação prática de líderes financeiros internos para gestão autônoma e eficiente do caixa e resultados.',
  },
  {
    id: '4',
    icon: 'TrendingUp',
    title: 'Implantação de Fluxo de Caixa Gerencial',
    description: 'Criação e implantação de fluxo de caixa real e projetado, com visibilidade diária para tomada de decisão.',
  },
  {
    id: '5',
    icon: 'Target',
    title: 'Planejamento Financeiro Estratégico',
    description: 'Elaboração de planos financeiros alinhados aos objetivos de crescimento e consolidação da empresa.',
  },
  {
    id: '6',
    icon: 'BarChart3',
    title: 'Indicadores de Desempenho Financeiro',
    description: 'Definição e monitoramento de KPIs financeiros essenciais para medir saúde e crescimento do negócio.',
  },
  {
    id: '7',
    icon: 'Scissors',
    title: 'Redução de Custos e Aumento de Margem',
    description: 'Análise profunda de custos fixos e variáveis, com estratégias práticas para otimização de margens e rentabilidade.',
  },
];

export const servicePackages: ServicePackage[] = [
  {
    id: 'hourly',
    name: 'Consultoria por Hora',
    price: 'R$ 300,00',
    period: '/hora',
    description: 'Ideal para dúvidas pontuais, análises específicas ou sessões de orientação estratégica.',
    features: [
      'Atendimento 100% online',
      'Sessões de 1 hora',
      'Gravação da sessão disponível',
      'Material de apoio incluso',
      'Pagamento via Pix',
      'Agendamento flexível',
    ],
  },
  {
    id: 'pack10',
    name: 'Pacote 10 Horas',
    price: 'R$ 2.500,00',
    period: '/pacote',
    description: 'Pacote de 10 horas para projetos específicos ou acompanhamento pontual do seu negócio.',
    features: [
      '10 horas de consultoria',
      'Atendimento 100% online',
      'Validade de 60 dias',
      'Material de apoio incluso',
      'Agendamento flexível',
      'Relatório ao final do pacote',
    ],
    badge: 'Novidade',
  },
  {
    id: 'monthly',
    name: 'Projeto Mensal',
    price: 'R$ 5.800,00',
    period: '/mês',
    description: 'Acompanhamento estratégico contínuo com 40 horas mensais de consultoria dedicada.',
    features: [
      '40 horas mensais dedicadas',
      'Acompanhamento estratégico contínuo',
      'Reuniões semanais programadas',
      'Relatórios gerenciais mensais',
      'Acesso direto via WhatsApp',
      'Implantação de processos e controles',
      'Dashboard financeiro personalizado',
    ],
    highlight: true,
    badge: 'Mais Contratado',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Eduardo Mendes',
    company: 'Distribuidora Mendes & Filhos',
    role: 'Sócio-proprietário',
    content: 'A consultoria nos ajudou a reduzir em 35% os custos operacionais e organizar um passivo que parecia impossível de resolver. Hoje temos visibilidade total do nosso caixa.',
    result: 'Redução de 35% nos custos operacionais',
  },
  {
    id: '2',
    name: 'Ana Paula Rodrigues',
    company: 'Clínica Saúde Plena',
    role: 'Diretora Executiva',
    content: 'Em 3 meses, nossa margem líquida aumentou de 8% para 18%. O acompanhamento próximo e os relatórios gerenciais mudaram completamente nossa tomada de decisão.',
    result: 'Margem líquida de 8% para 18%',
  },
  {
    id: '3',
    name: 'Roberto Almeida',
    company: 'Construtora Almeida e Cia',
    role: 'CEO',
    content: 'Renegociamos R$ 2,4 milhões em dívidas bancárias e criamos um fluxo de caixa que nos deu fôlego para crescer. Recomendo fortemente para qualquer PME.',
    result: 'R$ 2,4M em dívidas renegociadas',
  },
  {
    id: '4',
    name: 'Fernanda Lima',
    company: 'Rede de Franquias FoodBella',
    role: 'Diretora Financeira',
    content: 'A implantação dos indicadores financeiros foi transformadora. Nossa equipe agora tem autonomia para identificar problemas e oportunidades em tempo real.',
    result: 'Autonomia financeira da equipe interna',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Como organizar o fluxo de caixa da sua PME em 5 passos',
    excerpt: 'Descubra um método simples e eficaz para ter controle total sobre as entradas e saídas do seu negócio, evitando surpresas no final do mês.',
    category: 'Gestão Financeira',
    readTime: '5 min',
    date: '15 Mar 2026',
  },
  {
    id: '2',
    title: 'Endividamento empresarial: quando negociar e como sair',
    excerpt: 'Saiba identificar se as dívidas da sua empresa são saudáveis ou problemáticas, e conheça estratégias para renegociar e eliminar passivos.',
    category: 'Endividamento',
    readTime: '7 min',
    date: '28 Fev 2026',
  },
  {
    id: '3',
    title: 'Capital de giro: o que é e por que ele salva (ou mata) empresas',
    excerpt: 'Entenda a importância do capital de giro para a saúde financeira da sua empresa e aprenda a calcular quanto você realmente precisa.',
    category: 'Capital de Giro',
    readTime: '6 min',
    date: '10 Fev 2026',
  },
  {
    id: '4',
    title: 'Como formar um gerente financeiro dentro da sua própria empresa',
    excerpt: 'Descubra como identificar talentos internos e desenvolver uma liderança financeira competente, reduzindo dependência externa.',
    category: 'Formação de Gestores',
    readTime: '8 min',
    date: '25 Jan 2026',
  },
];

export const availableTimes = [
  '08:00', '09:00', '10:00', '11:00',
  '14:00', '15:00', '16:00', '17:00',
];

export const stats = [
  { value: '150+', label: 'Empresas Atendidas' },
  { value: 'R$ 12M+', label: 'em Passivos Renegociados' },
  { value: '94%', label: 'Taxa de Satisfação' },
  { value: '17 anos', label: 'de Experiência' },
];
