import { Barber, Service } from './types';

export const BARBERS: Barber[] = [
  {
    id: 1,
    name: "Carlos Silva",
    specialty: "Corte Clássico & Barba",
    image: "https://picsum.photos/200/200?random=1",
    rating: 4.9,
    available: true,
  },
  {
    id: 2,
    name: "André Santos",
    specialty: "Fade & Design Moderno",
    image: "https://picsum.photos/200/200?random=2",
    rating: 4.8,
    available: true,
  },
  {
    id: 3,
    name: "Marcos Oliveira",
    specialty: "Especialista em Tesoura",
    image: "https://picsum.photos/200/200?random=3",
    rating: 5.0,
    available: false,
  },
];

export const SERVICES: Service[] = [
  {
    id: "s1",
    name: "Corte de Cabelo",
    price: 50,
    duration: 45,
    description: "Corte completo com lavagem e finalização.",
  },
  {
    id: "s2",
    name: "Barba Completa",
    price: 35,
    duration: 30,
    description: "Barba terapia com toalha quente.",
  },
  {
    id: "s3",
    name: "Corte + Barba",
    price: 75,
    duration: 75,
    description: "Combo completo para renovar o visual.",
  },
  {
    id: "s4",
    name: "Sobrancelha",
    price: 15,
    duration: 15,
    description: "Design e limpeza com navalha ou pinça.",
  },
  {
    id: "s5",
    name: "Acabamento (Pezinho)",
    price: 20,
    duration: 15,
    description: "Apenas limpeza dos contornos.",
  },
];

export const TIME_SLOTS = [
  "09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
];
