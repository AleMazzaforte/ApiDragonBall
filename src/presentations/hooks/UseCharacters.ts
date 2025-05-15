// presentation/hooks/useCharacters.ts
import { useState, useEffect } from 'react';
import { CharacterService } from '../../core/services/CharacterService';
import { ApiCharacterRepository } from '../../core/repositories/CharacterRepository';
import { Character } from '../../core/entities/Character';

const characterService = new CharacterService(new ApiCharacterRepository());

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await characterService.listCharacters();
        setCharacters(data.characters);
      } catch (err) {
        setError('Error al cargar los personajes');
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return { characters, loading, error };
}