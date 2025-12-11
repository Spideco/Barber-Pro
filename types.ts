export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface Barber {
  id: number;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  available: boolean;
}

export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number; // in minutes
  description?: string;
}

export interface Appointment {
  id: string;
  barberId: number;
  serviceIds: string[];
  date: string; // ISO string
  time: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
}
