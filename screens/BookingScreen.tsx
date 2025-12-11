import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BARBERS, SERVICES, TIME_SLOTS } from '../constants';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Check, Calendar as CalendarIcon, Clock } from 'lucide-react';

export const BookingScreen = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const barber = BARBERS.find(b => b.id === Number(id));

  const [selectedDate, setSelectedDate] = useState<number>(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  // Generate next 14 days
  const dates = useMemo(() => {
    const days = [];
    const today = new Date();
    for (let i = 0; i < 14; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      days.push({
        day: d.getDate(),
        weekday: d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', ''),
        fullDate: d.toISOString()
      });
    }
    return days;
  }, []);

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return SERVICES
      .filter(s => selectedServices.includes(s.id))
      .reduce((acc, curr) => acc + curr.price, 0);
  };

  const handleBooking = () => {
    if(!selectedTime || selectedServices.length === 0) return;
    alert(`Agendamento confirmado com ${barber?.name}!\nHorário: ${dates[selectedDate].weekday}, ${selectedTime}`);
    navigate('/');
  };

  if (!barber) return <div>Barbeiro não encontrado</div>;

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border px-4 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-accent hover:text-accent-foreground text-foreground">
          <ArrowLeft size={20} />
        </button>
        <div className="flex items-center gap-3">
            <img src={barber.image} className="w-8 h-8 rounded-full" alt="avatar" />
            <h1 className="font-bold text-lg text-foreground">Agendar com {barber.name.split(' ')[0]}</h1>
        </div>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-8">
        
        {/* Date Selection */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
            <CalendarIcon size={18} className="text-primary" />
            <h2>Selecione a Data</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 -mx-6 px-6">
            {dates.map((date, index) => (
              <button
                key={index}
                onClick={() => setSelectedDate(index)}
                className={`flex flex-col items-center justify-center min-w-[64px] h-20 rounded-xl border transition-all ${
                  selectedDate === index
                    ? 'bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20 scale-105'
                    : 'bg-card border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                <span className="text-xs font-medium uppercase">{date.weekday}</span>
                <span className="text-xl font-bold">{date.day}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Time Selection */}
        <section>
          <div className="flex items-center gap-2 mb-4 text-foreground font-semibold">
            <Clock size={18} className="text-primary" />
            <h2>Horário Disponível</h2>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {TIME_SLOTS.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedTime === time
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'bg-card text-foreground border border-border hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        {/* Services Selection */}
        <section>
          <h2 className="mb-4 font-semibold text-foreground">Serviços</h2>
          <div className="space-y-3">
            {SERVICES.map((service) => {
              const isSelected = selectedServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    isSelected
                      ? 'border-primary bg-primary/5 ring-1 ring-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="font-semibold text-foreground">{service.name}</h3>
                      <span className="font-medium text-foreground">R$ {service.price}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{service.duration} min</span>
                        {service.description && (
                            <>
                                <span>•</span>
                                <span className="truncate max-w-[150px]">{service.description}</span>
                            </>
                        )}
                    </div>
                  </div>
                  <div className={`ml-4 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-primary border-primary' : 'border-muted-foreground'
                  }`}>
                    {isSelected && <Check size={12} className="text-primary-foreground" />}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>

      {/* Floating Action Bar */}
      {selectedServices.length > 0 && selectedTime && (
        <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6 z-50 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Total estimado</p>
              <p className="text-2xl font-bold text-primary">R$ {calculateTotal()}</p>
            </div>
            <div className="text-right">
                <p className="text-sm font-medium text-foreground">{dates[selectedDate].day} {dates[selectedDate].weekday}, {selectedTime}</p>
                <p className="text-xs text-muted-foreground">{selectedServices.length} serviços selecionados</p>
            </div>
          </div>
          <Button onClick={handleBooking} fullWidth>
            Confirmar Agendamento
          </Button>
        </div>
      )}
    </div>
  );
};
