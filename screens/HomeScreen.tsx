import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { BarberCard } from '../components/BarberCard';
import { BARBERS } from '../constants';
import { Bell } from 'lucide-react';

export const HomeScreen = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="p-6 pb-32 max-w-md mx-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 pt-4">
        <div>
          <p className="text-sm text-muted-foreground">Olá, bem-vindo de volta</p>
          <h1 className="text-2xl font-bold text-foreground">{user?.name}</h1>
        </div>
        <button className="relative p-2 rounded-full bg-card border border-border text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2.5 w-2 h-2 bg-primary rounded-full border border-card"></span>
        </button>
      </header>

      {/* Promo Banner */}
      <div className="mb-8 p-6 bg-primary rounded-2xl text-primary-foreground shadow-xl shadow-primary/20">
        <span className="inline-block px-3 py-1 bg-primary-foreground/20 rounded-full text-xs font-medium mb-3">Promoção</span>
        <h2 className="text-3xl font-bold mb-2">20% OFF</h2>
        <p className="text-primary-foreground/80 text-sm mb-4">No combo Corte + Barba todas as terças-feiras.</p>
        <button className="text-sm font-semibold bg-background text-primary px-4 py-2 rounded-lg hover:bg-background/90 transition-colors">Ver Detalhes</button>
      </div>

      {/* Barbers List */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="font-bold text-lg text-foreground">Escolha seu Profissional</h2>
      </div>
      
      <div className="space-y-4">
        {BARBERS.map(barber => (
          <BarberCard 
            key={barber.id} 
            barber={barber} 
            onClick={() => navigate(`/booking/${barber.id}`)} 
          />
        ))}
      </div>
    </div>
  );
};
