# Navalha Prime 💈

**Navalha Prime** é uma aplicação web mobile-first moderna desenvolvida para facilitar o agendamento de serviços em barbearias. Com uma interface elegante e intuitiva, conecta clientes aos melhores profissionais para uma experiência de agendamento sem complicações.

## ✨ Funcionalidades Principais

- **Autenticação de Usuário:** Sistema de login e cadastro (simulado) com validação de campos.
- **Home Interativa:** Visualização de promoções e lista de barbeiros disponíveis.
- **Agendamento Completo:** 
  - Seleção de profissional.
  - Calendário dinâmico (próximos 14 dias).
  - Seleção de horários (slots de tempo).
  - Multi-seleção de serviços (Cabelo, Barba, Sobrancelha, etc).
  - Cálculo automático de valor e tempo estimado.
- **Gestão de Perfil:** Histórico de agendamentos e visualização de dados do usuário.
- **Personalização Visual:** Suporte completo a **Modo Claro (Light)** e **Modo Escuro (Dark)**.
- **Design Responsivo:** Interface otimizada para dispositivos móveis, com navegação intuitiva via *Bottom Bar*.

## 🚀 Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias modernas do ecossistema React:

- **React 19:** Biblioteca core para construção da UI.
- **TypeScript:** Tipagem estática para maior segurança e manutenibilidade.
- **Tailwind CSS:** Estilização utilitária avançada, utilizando variáveis CSS nativas e espaço de cor OKLCH para temas dinâmicos.
- **Lucide React:** Biblioteca de ícones vetoriais leves e consistentes.
- **React Router v7:** Gerenciamento de rotas e navegação SPA (Single Page Application).
- **Context API:** Gerenciamento de estado global para Autenticação e Temas.

## 📂 Estrutura do Projeto

```bash
/
├── components/         # Componentes de UI reutilizáveis
│   ├── ui/             # Componentes base (Button, Input, Switch)
│   └── ...             # Componentes compostos (BarberCard, BottomNav)
├── context/            # Gerenciamento de estado global (Auth, Theme)
├── screens/            # Telas principais da aplicação
│   ├── AuthScreen      # Login/Registro
│   ├── HomeScreen      # Dashboard principal
│   ├── BookingScreen   # Fluxo de agendamento
│   ├── ProfileScreen   # Perfil e histórico
│   └── SettingsScreen  # Configurações do app
├── constants.ts        # Dados estáticos (Mock data de barbeiros/serviços)
├── types.ts            # Definições de interfaces TypeScript
└── index.html          # Ponto de entrada e configuração do Tailwind
```

## 🎨 Design System

A aplicação utiliza um sistema de design tokens definido no `index.html` e estendido via `tailwind.config`. As cores são semânticas (`primary`, `secondary`, `background`, `foreground`), facilitando a manutenção e a troca de temas.

## 🛠️ Como Executar

1. **Clone o repositório**
2. **Instale as dependências** (caso utilize um bundler local como Vite):
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

---

© 2024 **Navalha Prime**. Todos os direitos reservados.