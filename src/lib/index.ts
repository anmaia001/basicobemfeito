export const ROUTE_PATHS = {
  HOME: '/',
} as const;

export interface Specialty {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  role: string;
  content: string;
  result?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

export interface TimeSlot {
  time: string;
  available: boolean;
}

export const WHATSAPP_NUMBER = '5511999999999';
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de agendar uma consultoria financeira.';
export const PIX_KEY = '24988480044';
export const PIX_NAME = 'André Benedito Pereira Maia';
