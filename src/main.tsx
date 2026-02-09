import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'; // ← ваш компонент
import "./index.css"

// Найти контейнер в index.html
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

// Создать корень React
const root = createRoot(rootElement);

// Отрендерить ваше приложение
root.render(<App />);