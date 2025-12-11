import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { Barber } from '../types';

interface BarberCardProps {
  barber: Barber;
  onClick: () => void;
}

export const BarberCard: React.FC<BarberCardProps> = ({ barber, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-xl bg-card text-card-foreground p-4 shadow-sm border border-border transition-all hover:shadow-md active:scale-95 cursor-pointer ${!barber.available ? 'opacity-70 grayscale' : ''}`}
    >
      <div className="flex items-center gap-4">
        <img 
          src={barber.image} 
          alt={barber.name} 
          className="h-16 w-16 rounded-full object-cover ring-2 ring-border"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-card-foreground">{barber.name}</h3>
            {barber.available && <ChevronRight size={18} className="text-muted-foreground" />}
          </div>
          <p className="text-xs text-muted-foreground mb-2">{barber.specialty}</p>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-primary text-primary" />
            <span className="text-xs font-bold text-foreground">{barber.rating}</span>
          </div>
        </div>
      </div>
      {!barber.available && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 font-bold text-foreground backdrop-blur-[1px]">
          Indisponível hoje
        </div>
      )}
    </div>
  );
};
