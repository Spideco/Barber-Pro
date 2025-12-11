import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Switch } from '../components/ui/Switch';
import { ArrowLeft, Moon, Sun, Smartphone, Bell, Shield, HelpCircle } from 'lucide-react';

export const SettingsScreen = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="pb-32 bg-background min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-md border-b border-border px-4 py-4 flex items-center gap-4">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-accent hover:text-accent-foreground text-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-lg text-foreground">Configurações</h1>
      </div>

      <div className="p-6 max-w-md mx-auto space-y-8">
        
        {/* Appearance Section */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Aparência</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                {theme === 'dark' ? (
                  <Moon size={20} className="text-primary" />
                ) : (
                  <Sun size={20} className="text-primary" />
                )}
                <div>
                  <p className="font-medium text-foreground">Modo Escuro</p>
                  <p className="text-xs text-muted-foreground">Ajustar aparência do aplicativo</p>
                </div>
              </div>
              <Switch checked={theme === 'dark'} onCheckedChange={toggleTheme} />
            </div>
          </div>
        </section>

        {/* Notifications Section */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Geral</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden divide-y divide-border">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-muted-foreground" />
                <span className="font-medium text-foreground">Notificações</span>
              </div>
              <Switch checked={true} onCheckedChange={() => {}} />
            </div>
            
            <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <Shield size={20} className="text-muted-foreground" />
                <span className="font-medium text-foreground">Privacidade e Segurança</span>
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <Smartphone size={20} className="text-muted-foreground" />
                <span className="font-medium text-foreground">Versão do App</span>
              </div>
              <span className="text-xs text-muted-foreground">v1.0.0</span>
            </button>
          </div>
        </section>

        {/* Support Section */}
        <section>
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Suporte</h2>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 hover:bg-accent transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle size={20} className="text-muted-foreground" />
                <span className="font-medium text-foreground">Ajuda e Suporte</span>
              </div>
            </button>
          </div>
        </section>

      </div>
    </div>
  );
};
