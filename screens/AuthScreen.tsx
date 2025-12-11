import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Scissors, UserCheck } from 'lucide-react';

export const AuthScreen = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Redireciona para a home se o usuário já estiver autenticado
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth logic
    if (email && password) {
       login(email, isLogin ? 'Cliente Navalha Prime' : name);
    }
  };

  const handleTestLogin = () => {
    login('teste@navalhaprime.com', 'Usuário de Teste');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-8 bg-background">
      <div className="mb-12 text-center">
        <div className="mx-auto bg-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
          <Scissors className="text-primary-foreground" size={32} />
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-2 tracking-tight">Navalha Prime</h1>
        <p className="text-muted-foreground">Agende seu estilo em segundos.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {!isLogin && (
          <Input 
            label="Nome Completo" 
            placeholder="Seu nome" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}
        <Input 
          label="Email" 
          type="email" 
          placeholder="seu@email.com" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input 
          label="Senha" 
          type="password" 
          placeholder="••••••••" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="space-y-3">
          <Button type="submit" fullWidth>
            {isLogin ? 'Entrar' : 'Criar Conta'}
          </Button>
          
          <Button 
            type="button" 
            variant="outline" 
            fullWidth 
            onClick={handleTestLogin}
            className="border-dashed"
          >
            <UserCheck size={18} className="mr-2" />
            Entrar com Conta Teste
          </Button>
        </div>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          {isLogin ? 'Ainda não tem conta?' : 'Já possui uma conta?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-semibold text-primary hover:underline focus:outline-none"
          >
            {isLogin ? 'Cadastre-se' : 'Faça Login'}
          </button>
        </p>
      </div>
    </div>
  );
};