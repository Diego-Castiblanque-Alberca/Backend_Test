export interface responseFindPokemonDTO {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Ability[];
  forms: Form[];
  game_indices: GameIndex[];
  held_items: HeldItem[];
  location_area_encounters: string;
  moves: Move[];
  species: Species;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  past_types: PastType[];
  cries: Cries;
}

interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface Form {
  name: string;
  url: string;
}

interface GameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity: number;
  version: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: NamedAPIResource;
  move_learn_method: NamedAPIResource;
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
  other?: OtherSprites;
  versions?: Versions;
}

interface OtherSprites {
  dream_world: SpriteResource;
  home: SpriteResource;
  'official-artwork': SpriteResource;
  showdown: SpriteResource;
}

interface SpriteResource {
  front_default: string;
  front_female: string | null;
  front_shiny?: string;
  front_shiny_female?: string | null;
  back_default?: string;
  back_female?: string | null;
  back_shiny?: string;
  back_shiny_female?: string | null;
}

interface Versions {
  'generation-i': GenerationSprites;
  'generation-ii': GenerationSprites;
  'generation-iii': GenerationSprites;
  'generation-iv': GenerationSprites;
  'generation-v': GenerationSprites;
  'generation-vi': GenerationSprites;
  'generation-vii': GenerationSprites;
  'generation-viii': GenerationSprites;
}

interface GenerationSprites {
  [key: string]: SpriteResource | undefined;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}

interface Type {
  slot: number;
  type: NamedAPIResource;
}

interface PastType {
  generation: NamedAPIResource;
  types: Type[];
}
interface Cries {
  latest: string;
  legacy: string;
}
