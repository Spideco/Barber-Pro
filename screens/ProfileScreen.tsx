import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { LogOut, Calendar, Settings, ChevronRight, User as UserIcon } from 'lucide-react';

export const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const history = [
    { id: 1, date: '14 Out', barber: 'Carlos Silva', services: 'Corte + Barba', price: 75, status: 'completed' },
    { id: 2, date: '28 Set', barber: 'André Santos', services: 'Corte', price: 50, status: 'completed' },
  ];

  return (
    <div className="p-6 pb-32 max-w-md mx-auto">
      <div className="mb-8 pt-4 flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-secondary mb-4 overflow-hidden ring-4 ring-background shadow-lg">
          {user?.avatar ? (
            <img src={user.avatar} alt="Profile" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-primary-foreground">
                <UserIcon size={32} />
            </div>
          )}
        </div>
        <h1 className="text-2xl font-bold text-foreground">{user?.name}</h1>
        <p className="text-muted-foreground">{user?.email}</p>
      </div>

      <div className="space-y-6">
        <section>
          <div className="flex items-center justify-between mb-4">
             <h2 className="font-bold text-lg text-foreground">Histórico Recente</h2>
             <button className="text-sm text-primary hover:text-primary/80">Ver tudo</button>
          </div>
          
          <div className="space-y-3">
            {history.map((item) => (
              <div key={item.id} className="bg-card p-4 rounded-xl border border-border flex items-center justify-between shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/50 flex flex-col items-center justify-center text-secondary-foreground font-bold border border-secondary">
                    <span className="text-xs uppercase opacity-70">{item.date.split(' ')[1]}</span>
                    <span className="text-lg leading-none">{item.date.split(' ')[0]}</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.barber}</p>
                    <p className="text-xs text-muted-foreground">{item.services}</p>
                  </div>
                </div>
                <div className="text-right">
                    <span className="block font-medium text-foreground">R$ {item.price}</span>
                    <span className="text-[10px] bg-green-500/10 text-green-700 px-2 py-0.5 rounded-full font-bold uppercase tracking-wide">Finalizado</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-2 pt-4">
            <button 
              onClick={() => navigate('/settings')}
              className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition-colors group"
            >
                <div className="flex items-center gap-3">
                    <Settings size={20} className="text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="font-medium text-foreground group-hover:text-accent-foreground">Configurações</span>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
            </button>
            <button className="w-full flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:bg-accent hover:text-accent-foreground transition-colors group">
                <div className="flex items-center gap-3">
                    <Calendar size={20} className="text-muted-foreground group-hover:text-accent-foreground" />
                    <span className="font-medium text-foreground group-hover:text-accent-foreground">Meus Agendamentos</span>
                </div>
                <ChevronRight size={18} className="text-muted-foreground" />
            </button>
        </section>

        <div className="pt-4">
          <Button variant="outline" fullWidth onClick={logout} className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
            <LogOut size={18} className="mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  );
};
