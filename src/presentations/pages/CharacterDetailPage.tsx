// presentation/pages/CharacterDetailPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CharacterService } from '../../core/services/CharacterService';
import { ApiCharacterRepository } from '../../core/repositories/CharacterRepository';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Character } from '../../core/entities/Character';
import '../../Character-detail.css'; 

const characterService = new CharacterService(new ApiCharacterRepository());

export const CharacterDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const char = await characterService.getCharacterDetails(Number(id));
        setCharacter(char);
      } catch (err) {
        setError('Error al cargar el personaje');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;
  if (!character) return <div>Personaje no encontrado</div>;

  return (
    <div className="character-detail-container">
      <div className="character-detail-card">
        
          <img 
            src={character.image} 
            alt={character.name}
            className="character-image"
          />
        
        
        <div className="character-info">
          <h1 className="character-name">{character.name}</h1>
          <span className="character-race">{character.race}</span>
          
          <div className="character-stats">
            <div className="stat-item">
              <span className="stat-label">KI Actual</span>
              <span className="stat-value">{character.ki}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">KI Máximo</span>
              <span className="stat-value">{character.maxKi}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Género</span>
              <span className="stat-value">{character.gender}</span>
            </div>
          </div>
          
          <div className="character-descriptionDetail">
            <h3>Descripción</h3>
            <p>{character.description}</p>
          </div>
          
          <div className="character-affiliation">
            <h3>Afiliación</h3>
            <p>{character.affiliation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};