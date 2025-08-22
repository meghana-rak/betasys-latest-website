import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { store } from './store/store.js';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false} />
        <App />
        <Toaster />
      </Provider>
    </Router>
  </StrictMode>
);
