// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CharacterListPage } from './presentations/pages/CharacterListPage';
import { CharacterDetailPage } from './presentations/pages/CharacterDetailPage';
//import { FavoritesPage } from './presentation/pages/FavoritesPage';
//import { NotFoundPage } from './presentation/pages/NotFoundPage';
//import { MainLayout } from './presentation/layouts/MainLayout';
//import { FavoritesProvider } from './presentation/contexts/FavoritesContext';
//import { ThemeProvider } from './presentation/contexts/ThemeContext';

const App: React.FC = () => {
  return (
    
        <Router>
          
            <Routes>
              <Route path="/" element={<CharacterListPage />} />
              <Route path="/character/:id" element={<CharacterDetailPage />} />
              {/*
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />*/}
            </Routes>
          
        </Router>
      
  );
};

export default App;
