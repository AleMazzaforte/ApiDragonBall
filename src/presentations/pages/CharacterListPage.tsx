// presentation/pages/CharacterListPage.tsx
import React from 'react';
import { useCharacters } from '../hooks/UseCharacters';
import { CharacterCard } from '../components/CharacterCard';
import { LoadingSpinner } from '../components/LoadingSpinner';


export const CharacterListPage: React.FC = () => {
  const { characters, loading, error } = useCharacters();

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Personajes de Dragon Ball</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0,5rem', justifyContent: 'space-evenly' }}>
        {characters.map((character) => (
          <CharacterCard 
            key={character.id} 
            character={character} 
          />
        ))}
      </div>
    </div>
  );
};