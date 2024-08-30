export interface ResponseFindPokemonColorDTO {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: NamedAPIResource[];
}

interface Name {
  name: string;
  language: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}
