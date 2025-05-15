// presentation/components/CharacterCard.tsx
import React from 'react';
import { Character } from '../../core/entities/Character';
import { useNavigate } from 'react-router-dom';
import '../../Character-cards.css';

interface CharacterCardProps {
  character: Character;
  onClick?: () => void;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/character/${character.id}`);
  };
  
  const description1 = character.description;
  return (
    <div 
      onClick={ handleClick}
      className={`character-card ${character.isSaiyan ? 'saiyan-card' : ''}`}
  
    >
      <div className="character-image-container1">
        <img 
          src={character.image} 
          alt={character.name}
          className="character-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/path-to-fallback-image.jpg';
          }}
        />
        <span className="race-badge">{character.race}</span>
      </div>
      
      {/* Resto del contenido de la card permanece igual */}
      <div className="character-content">
        <h3 className="character-name">{character.name}</h3>
        <p className="character-description">
          {description1}
        </p>
        
        <div className="character-stats1">
          <div className="stat-item1">
            <div className="stat-value">{character.ki}</div>
            <div className="stat-label">KI</div>
          </div>
          <div className="stat-item1">
            <div className="stat-value">{character.maxKi}</div>
            <div className="stat-label">MAX KI</div>
          </div>
        </div>
      </div>
      
      <button className="favorite-button">♥</button>
    </div>
  );
};