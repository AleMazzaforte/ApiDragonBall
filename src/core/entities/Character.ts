// core/entities/Character.ts
export class Character {
  constructor(
    public id: number,
    public name: string,
    public race: string,
    public gender: string,
    public image: string,
    public ki: string,
    public maxKi: string,
    public description: string,
    public affiliation: string
  ) {}

  get isSaiyan(): boolean {
    return this.race.toLowerCase().includes('saiyan');
  }

  get powerLevel(): number {
    return parseInt(this.maxKi) || 0;
  }

  // Nuevos métodos para facilitar el sorting
  static sortByName(a: Character, b: Character): number {
    return a.name.localeCompare(b.name);
  }

  static sortByPowerLevel(a: Character, b: Character): number {
    return b.powerLevel - a.powerLevel;
  }

  static sortByRace(a: Character, b: Character): number {
    return a.race.localeCompare(b.race);
  }

  static sortByAffiliation(a: Character, b: Character): number {
    return a.affiliation.localeCompare(b.affiliation);
  }

  // Método general para sorting con múltiples criterios
  static sortBy(
    characters: Character[],
    criteria: {
      field: 'name' | 'powerLevel' | 'race' | 'affiliation';
      direction: 'asc' | 'desc';
    }[]
  ): Character[] {
    return [...characters].sort((a, b) => {
      for (const { field, direction } of criteria) {
        let comparison = 0;
        
        switch (field) {
          case 'name':
            comparison = Character.sortByName(a, b);
            break;
          case 'powerLevel':
            comparison = Character.sortByPowerLevel(a, b);
            break;
          case 'race':
            comparison = Character.sortByRace(a, b);
            break;
          case 'affiliation':
            comparison = Character.sortByAffiliation(a, b);
            break;
        }

        if (direction === 'desc') {
          comparison *= -1;
        }

        if (comparison !== 0) {
          return comparison;
        }
      }
      return 0;
    });
  }
}