// core/services/CharacterService.ts
import { ICharacterRepository } from "../repositories/CharacterRepository";
import { Character } from "../entities/Character";

export class CharacterService {
  constructor(private repository: ICharacterRepository) {}

  async listCharacters(page: number = 1, limit: number = 10): Promise<{ characters: Character[]; totalPages: number }> {
    return this.repository.getAll(page, limit);
  }

  async getCharacterDetails(id: number): Promise<Character | null> {
    return this.repository.getById(id);
  }

  async findStrongestCharacters(limit: number = 5): Promise<Character[]> {
    // Obtener TODOS los personajes (puedes implementar paginación si hay muchos)
    const { characters } = await this.repository.getAll(1, 1000); // Ajusta el límite según necesites
    
    // Ordenar por powerLevel descendente
    return characters
      .sort((a, b) => b.powerLevel - a.powerLevel)
      .slice(0, limit);
  }
}