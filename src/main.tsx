// src/index.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RoutesComponent from './assets/Routes/Routes'; // Importando as rotas

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RoutesComponent /> {/* Usando o componente de rotas */}
  </StrictMode>
);
