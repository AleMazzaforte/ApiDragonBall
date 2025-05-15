// core/repositories/CharacterRepository.ts
import { Character } from "../entities/Character";

export interface ICharacterRepository {
  getAll(page?: number, limit?: number): Promise<{ characters: Character[]; totalPages: number }>;
  getById(id: number): Promise<Character | null>;
  searchByName(name: string): Promise<Character[]>;
}

// Implementación concreta
export class ApiCharacterRepository implements ICharacterRepository {
  private readonly baseUrl: string;

  constructor(baseUrl: string = 'https://dragonball-api.com/api') {
    this.baseUrl = baseUrl;
  }
  async searchByName(name: string): Promise<Character[]> {
    const response = await fetch(`${this.baseUrl}/characters?name=${encodeURIComponent(name)}`);
    const data = await response.json();
    
    
    return data.items.map((char: any) => this.mapToCharacter(char));
  }

  async getAll(page: number = 1, limit: number = 10): Promise<{ characters: Character[]; totalPages: number }> {
    const response = await fetch(`${this.baseUrl}/characters?page=${page}&limit=${limit}`);
    const data = await response.json();
    
    
    return {
      characters: data.items.map((char: any) => this.mapToCharacter(char)),
      totalPages: Math.ceil(data.total / limit)
    };
  }

  async getById(id: number): Promise<Character | null> {
    try {
      const response = await fetch(`${this.baseUrl}/characters/${id}`);
      const data = await response.json();
      return this.mapToCharacter(data);
    } catch (error) {
      return null;
    }
  }

  private mapToCharacter(data: any): Character {
    return new Character(
      data.id,
      data.name,
      data.race,
      data.gender,
      data.image,
      data.ki,
      data.maxKi,
      data.description,
      data.affiliation
    );
  }
}