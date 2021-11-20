interface IBasicEndpoint {
  name: string;
  url: string;
}

interface INamedAPIResourceList {
  count: number;
  next: string;
  previous: boolean;
  results: INamedAPIResource[];
}

interface IBerry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: IBasicEndpoint;
  flavors: IBerryFlavorMap[];
  item: IBasicEndpoint;
  natural_gift_type: IBasicEndpoint;
}

interface IBerryFlavorMap {
  potency: number;
  flavor: IBasicEndpoint;
}

interface IBerryFirmness {
  id: number;
  name: string;
  berries: INamedAPIResource[];
  names: IName[];
}

interface IBerryFlavor {
  id: number;
  name: string;
  berries: IFlavorBerryMap[];
  contest_type: IBasicEndpoint;
  names: IName[];
}

interface IFlavorBerryMap {
  potency: number;
  berry: IBasicEndpoint;
}

interface IContestType {
  id: number;
  name: string;
  berry_flavor: IBasicEndpoint;
  names: IContestName[];
}

interface IContestName {
  name: string;
  color: string;
  language: IBasicEndpoint;
}

interface IContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entries: IEffect[];
  flavor_text_entries: IFlavorText[];
}

interface ISuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: IFlavorText[];
  moves: INamedAPIResource[];
}

interface IEncounterMethod {
  id: number;
  name: string;
  order: number;
  names: IName[];
}

interface IEncounterCondition {
  id: number;
  name: string;
  names: IName[];
  values: INamedAPIResource[];
}

interface IEncounterConditionValue {
  id: number;
  name: string;
  condition: IBasicEndpoint;
  names: IName[];
}

interface IEvolutionChain {
  id: number;
  baby_trigger_item: IBasicEndpoint;
  chain: undefined;
}

interface IChainLink {
  is_baby: boolean;
  species: IBasicEndpoint;
  evolution_details: IEvolutionDetail[];
  evolves_to: IChainLink[];
}

interface IEvolutionDetail {
  item: IBasicEndpoint;
  trigger: IBasicEndpoint;
  gender: number;
  held_item: IBasicEndpoint;
  known_move: IBasicEndpoint;
  known_move_type: IBasicEndpoint;
  location: IBasicEndpoint;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_rain: boolean;
  party_species: IBasicEndpoint;
  party_type: IBasicEndpoint;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: IBasicEndpoint;
  turn_upside_down: boolean;
}

interface IEvolutionTrigger {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

interface IGeneration {
  id: number;
  name: string;
  abilities: INamedAPIResource[];
  names: IName[];
  main_region: IBasicEndpoint;
  moves: INamedAPIResource[];
  pokemon_species: INamedAPIResource[];
  types: INamedAPIResource[];
  version_groups: INamedAPIResource[];
}

interface IPokedex {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: IDescription[];
  names: IName[];
  pokemon_entries: IPokemonEntry[];
  region: IBasicEndpoint;
  version_groups: INamedAPIResource[];
}

interface IPokemonEntry {
  entry_number: number;
  pokemon_species: IBasicEndpoint;
}

interface IVersion {
  id: number;
  name: string;
  names: IName[];
  version_group: IBasicEndpoint;
}

interface IVersionGroup {
  id: number;
  name: string;
  order: number;
  generation: IBasicEndpoint;
  move_learn_methods: INamedAPIResource[];
  pokedexes: INamedAPIResource[];
  regions: INamedAPIResource[];
  versions: INamedAPIResource[];
}

interface IItem {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: IBasicEndpoint;
  attributes: INamedAPIResource[];
  category: IBasicEndpoint;
  effect_entries: IVerboseEffect[];
  flavor_text_entries: IVersionGroupFlavorText[];
  game_indices: IGenerationGameIndex[];
  names: IName[];
  sprites: undefined;
  held_by_pokemon: IItemHolderPokemon[];
  baby_trigger_for: undefined;
  machines: IMachineVersionDetail[];
}

interface IItemSprites {
  default: string;
}

interface IItemHolderPokemon {
  pokemon: IBasicEndpoint;
  version_details: IItemHolderPokemonVersionDetail[];
}

interface IItemHolderPokemonVersionDetail {
  rarity: number;
  version: IBasicEndpoint;
}

interface IItemAttribute {
  id: number;
  name: string;
  items: INamedAPIResource[];
  names: IName[];
  descriptions: IDescription[];
}

interface IItemCategory {
  id: number;
  name: string;
  items: INamedAPIResource[];
  names: IName[];
  pocket: IBasicEndpoint;
}

interface IItemFlingEffect {
  id: number;
  name: string;
  effect_entries: IEffect[];
  items: INamedAPIResource[];
}

interface IItemPocket {
  id: number;
  name: string;
  categories: INamedAPIResource[];
  names: IName[];
}

interface ILocation {
  id: number;
  name: string;
  region: IBasicEndpoint;
  names: IName[];
  game_indices: IGenerationGameIndex[];
  areas: INamedAPIResource[];
}

interface ILocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: IEncounterMethodRate[];
  location: IBasicEndpoint;
  names: IName[];
  pokemon_encounters: IPokemonEncounter[];
}

interface IEncounterMethodRate {
  encounter_method: IBasicEndpoint;
  version_details: IEncounterVersionDetails[];
}

interface IEncounterVersionDetails {
  rate: number;
  version: IBasicEndpoint;
}

interface IPokemonEncounter {
  pokemon: IBasicEndpoint;
  version_details: IVersionEncounterDetail[];
}

interface IPalParkArea {
  id: number;
  name: string;
  names: IName[];
  pokemon_encounters: IPalParkEncounterSpecies[];
}

interface IPalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: IBasicEndpoint;
}

interface IRegion {
  id: number;
  locations: INamedAPIResource[];
  name: string;
  names: IName[];
  main_generation: IBasicEndpoint;
  pokedexes: INamedAPIResource[];
  version_groups: INamedAPIResource[];
}

interface IMachine {
  id: number;
  item: IBasicEndpoint;
  move: IBasicEndpoint;
  version_group: IBasicEndpoint;
}

interface IMove {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: undefined;
  contest_type: IBasicEndpoint;
  contest_effect: undefined;
  damage_class: IBasicEndpoint;
  effect_entries: IVerboseEffect[];
  effect_changes: IAbilityEffectChange[];
  learned_by_pokemon: IBasicEndpoint;
  flavor_text_entries: IMoveFlavorText[];
  generation: IBasicEndpoint;
  machines: IMachineVersionDetail[];
  meta: undefined;
  names: IName[];
  past_values: IPastMoveStatValues[];
  stat_changes: IMoveStatChange[];
  super_contest_effect: undefined;
  target: IBasicEndpoint;
  type: IBasicEndpoint;
}

interface IContestComboSets {
  normal: undefined;
  super: undefined;
}

interface IContestComboDetail {
  use_before: INamedAPIResource[];
  use_after: INamedAPIResource[];
}

interface IMoveFlavorText {
  flavor_text: string;
  language: IBasicEndpoint;
  version_group: IBasicEndpoint;
}

interface IMoveMetaData {
  ailment: IBasicEndpoint;
  category: IBasicEndpoint;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

interface IMoveStatChange {
  change: number;
  stat: IBasicEndpoint;
}

interface IPastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: IVerboseEffect[];
  type: IBasicEndpoint;
  version_group: IBasicEndpoint;
}

interface IMoveAilment {
  id: number;
  name: string;
  moves: INamedAPIResource[];
  names: IName[];
}

interface IMoveBattleStyle {
  id: number;
  name: string;
  names: IName[];
}

interface IMoveCategory {
  id: number;
  name: string;
  moves: INamedAPIResource[];
  descriptions: IDescription[];
}

interface IMoveDamageClass {
  id: number;
  name: string;
  descriptions: IDescription[];
  moves: INamedAPIResource[];
  names: IName[];
}

interface IMoveLearnMethod {
  id: number;
  name: string;
  descriptions: IDescription[];
  names: IName[];
  version_groups: INamedAPIResource[];
}

interface IMoveTarget {
  id: number;
  name: string;
  descriptions: IDescription[];
  moves: INamedAPIResource[];
  names: IName[];
}

interface IAbility {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: IBasicEndpoint;
  names: IName[];
  effect_entries: IVerboseEffect[];
  effect_changes: IAbilityEffectChange[];
  flavor_text_entries: IAbilityFlavorText[];
  pokemon: IAbilityPokemon[];
}

interface IAbilityEffectChange {
  effect_entries: IEffect[];
  version_group: IBasicEndpoint;
}

interface IAbilityFlavorText {
  flavor_text: string;
  language: IBasicEndpoint;
  version_group: IBasicEndpoint;
}

interface IAbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: IBasicEndpoint;
}

interface ICharacteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
}

interface IEggGroup {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

interface IGender {
  id: number;
  name: string;
  pokemon_species_details: IPokemonSpeciesGender[];
  required_for_evolution: INamedAPIResource[];
}

interface IPokemonSpeciesGender {
  rate: number;
  pokemon_species: IBasicEndpoint;
}

interface IGrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: IDescription[];
  levels: IGrowthRateExperienceLevel[];
  pokemon_species: INamedAPIResource[];
}

interface IGrowthRateExperienceLevel {
  level: number;
  experience: number;
}

interface INature {
  id: number;
  name: string;
  decreased_stat: IBasicEndpoint;
  increased_stat: IBasicEndpoint;
  hates_flavor: IBasicEndpoint;
  likes_flavor: IBasicEndpoint;
  pokeathlon_stat_changes: INatureStatChange[];
  move_battle_style_preferences: IMoveBattleStylePreference[];
  names: IName[];
}

interface INatureStatChange {
  max_change: number;
  pokeathlon_stat: IBasicEndpoint;
}

interface IMoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: IBasicEndpoint;
}

interface IPokeathlonStat {
  id: number;
  name: string;
  names: IName[];
  affecting_natures: undefined;
}

interface INaturePokeathlonStatAffectSets {
  increase: INaturePokeathlonStatAffect[];
  decrease: INaturePokeathlonStatAffect[];
}

interface INaturePokeathlonStatAffect {
  max_change: number;
  nature: IBasicEndpoint;
}

interface IPokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: IPokemonAbility[];
  forms: INamedAPIResource[];
  game_indices: IVersionGameIndex[];
  held_items: IPokemonHeldItem[];
  location_area_encounters: string;
  moves: IPokemonMove[];
  past_types: IPokemonTypePast[];
  sprites: IPokemonSprites;
  species: IBasicEndpoint;
  stats: IPokemonStat[];
  types: IPokemonType[];
}

interface IPokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: IBasicEndpoint;
}

interface IPokemonType {
  slot: number;
  type: IBasicEndpoint;
}

interface IPokemonFormType {
  slot: number;
  type: IBasicEndpoint;
}

interface IPokemonTypePast {
  generation: IBasicEndpoint;
  types: IPokemonType[];
}

interface IPokemonHeldItem {
  item: IBasicEndpoint;
  version_details: IPokemonHeldItemVersion[];
}

interface IPokemonHeldItemVersion {
  version: IBasicEndpoint;
  rarity: number;
}

interface IPokemonMove {
  move: IBasicEndpoint;
  version_group_details: IPokemonMoveVersion[];
}

interface IPokemonMoveVersion {
  move_learn_method: IBasicEndpoint;
  version_group: IBasicEndpoint;
  level_learned_at: number;
}

interface IPokemonStat {
  stat: IBasicEndpoint;
  effort: number;
  base_stat: number;
}

interface IPokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

interface ILocationAreaEncounter {
  location_area: IBasicEndpoint;
  version_details: IVersionEncounterDetail[];
}

interface IPokemonColor {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

interface IPokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: IBasicEndpoint;
  types: IBasicEndpoint;
  sprites: undefined;
  version_group: IBasicEndpoint;
  names: IName[];
  form_names: IName[];
}

interface IPokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}

interface IPokemonHabitat {
  id: number;
  name: string;
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

interface IPokemonShape {
  id: number;
  name: string;
  awesome_names: IAwesomeName[];
  names: IName[];
  pokemon_species: INamedAPIResource[];
}

interface IAwesomeName {
  awesome_name: string;
  language: IBasicEndpoint;
}

interface IPokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: IBasicEndpoint;
  pokedex_numbers: IPokemonSpeciesDexEntry[];
  egg_groups: INamedAPIResource[];
  color: IBasicEndpoint;
  shape: IBasicEndpoint;
  evolves_from_species: IBasicEndpoint;
  evolution_chain: undefined;
  habitat: IBasicEndpoint;
  generation: IBasicEndpoint;
  names: IName[];
  pal_park_encounters: IPalParkEncounterArea[];
  flavor_text_entries: IFlavorText[];
  form_descriptions: IDescription[];
  genera: IGenus[];
  varieties: IPokemonSpeciesVariety[];
}

interface IGenus {
  genus: string;
  language: IBasicEndpoint;
}

interface IPokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: IBasicEndpoint;
}

interface IPalParkEncounterArea {
  base_score: number;
  rate: number;
  area: IBasicEndpoint;
}

interface IPokemonSpeciesVariety {
  is_default: boolean;
  pokemon: IBasicEndpoint;
}

interface IStat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: undefined;
  affecting_natures: undefined;
  characteristics: IAPIResource[];
  move_damage_class: IBasicEndpoint;
  names: IName[];
}

interface IMoveStatAffectSets {
  increase: IMoveStatAffect[];
  decrease: IMoveStatAffect[];
}

interface IMoveStatAffect {
  change: number;
  move: IBasicEndpoint;
}

interface INatureStatAffectSets {
  increase: INamedAPIResource[];
  decrease: INamedAPIResource[];
}

interface IType {
  id: number;
  name: string;
  damage_relations: undefined;
  past_damage_relations: ITypeRelationsPast[];
  game_indices: IGenerationGameIndex[];
  generation: IBasicEndpoint;
  move_damage_class: IBasicEndpoint;
  names: IName[];
  pokemon: ITypePokemon[];
  moves: INamedAPIResource[];
}

interface ITypePokemon {
  slot: number;
  pokemon: IBasicEndpoint;
}

interface ITypeRelations {
  no_damage_to: INamedAPIResource[];
  half_damage_to: INamedAPIResource[];
  double_damage_to: INamedAPIResource[];
  no_damage_from: INamedAPIResource[];
  half_damage_from: INamedAPIResource[];
  double_damage_from: INamedAPIResource[];
}

interface ITypeRelationsPast {
  generation: IBasicEndpoint;
  damage_relations: ITypeRelations[];
}

interface ILanguage {
  id: number;
  name: string;
  official: boolean;
  iso639: string;
  iso3166: string;
  names: IName[];
}

interface IAPIResource {
  url: string;
}

interface IDescription {
  description: string;
  language: IBasicEndpoint;
}

interface IEffect {
  effect: string;
  language: IBasicEndpoint;
}

interface IEncounter {
  min_level: number;
  max_level: number;
  condition_values: INamedAPIResource[];
  chance: number;
  method: IBasicEndpoint;
}

interface IFlavorText {
  flavor_text: string;
  language: IBasicEndpoint;
  version: IBasicEndpoint;
}

interface IGenerationGameIndex {
  game_index: number;
  generation: IBasicEndpoint;
}

interface IMachineVersionDetail {
  machine: undefined;
  version_group: IBasicEndpoint;
}

interface IName {
  name: string;
  language: IBasicEndpoint;
}

interface INamedAPIResource {
  name: string;
  url: string;
}

interface IVerboseEffect {
  effect: string;
  short_effect: string;
  language: IBasicEndpoint;
}

interface IVersionEncounterDetail {
  version: IBasicEndpoint;
  max_chance: number;
  encounter_details: IEncounter[];
}

interface IVersionGameIndex {
  game_index: number;
  version: IBasicEndpoint;
}

interface IVersionGroupFlavorText {
  text: string;
  language: IBasicEndpoint;
  version_group: IBasicEndpoint;
}

export {
  INamedAPIResourceList,
  IBerry,
  IBerryFlavorMap,
  IBerryFirmness,
  IBerryFlavor,
  IFlavorBerryMap,
  IContestType,
  IContestName,
  IContestEffect,
  ISuperContestEffect,
  IEncounterMethod,
  IEncounterCondition,
  IEncounterConditionValue,
  IEvolutionChain,
  IChainLink,
  IEvolutionDetail,
  IEvolutionTrigger,
  IGeneration,
  IPokedex,
  IPokemonEntry,
  IVersion,
  IVersionGroup,
  IItem,
  IItemSprites,
  IItemHolderPokemon,
  IItemHolderPokemonVersionDetail,
  IItemAttribute,
  IItemCategory,
  IItemFlingEffect,
  IItemPocket,
  ILocation,
  ILocationArea,
  IEncounterMethodRate,
  IEncounterVersionDetails,
  IPokemonEncounter,
  IPalParkArea,
  IPalParkEncounterSpecies,
  IRegion,
  IMachine,
  IMove,
  IContestComboSets,
  IContestComboDetail,
  IMoveFlavorText,
  IMoveMetaData,
  IMoveStatChange,
  IPastMoveStatValues,
  IMoveAilment,
  IMoveBattleStyle,
  IMoveCategory,
  IMoveDamageClass,
  IMoveLearnMethod,
  IMoveTarget,
  IAbility,
  IAbilityEffectChange,
  IAbilityFlavorText,
  IAbilityPokemon,
  ICharacteristic,
  IEggGroup,
  IGender,
  IPokemonSpeciesGender,
  IGrowthRate,
  IGrowthRateExperienceLevel,
  INature,
  INatureStatChange,
  IMoveBattleStylePreference,
  IPokeathlonStat,
  INaturePokeathlonStatAffectSets,
  INaturePokeathlonStatAffect,
  IPokemon,
  IPokemonAbility,
  IPokemonType,
  IPokemonFormType,
  IPokemonTypePast,
  IPokemonHeldItem,
  IPokemonHeldItemVersion,
  IPokemonMove,
  IPokemonMoveVersion,
  IPokemonStat,
  IPokemonSprites,
  ILocationAreaEncounter,
  IPokemonColor,
  IPokemonForm,
  IPokemonFormSprites,
  IPokemonHabitat,
  IPokemonShape,
  IAwesomeName,
  IPokemonSpecies,
  IGenus,
  IPokemonSpeciesDexEntry,
  IPalParkEncounterArea,
  IPokemonSpeciesVariety,
  IStat,
  IMoveStatAffectSets,
  IMoveStatAffect,
  INatureStatAffectSets,
  IType,
  ITypePokemon,
  ITypeRelations,
  ITypeRelationsPast,
  ILanguage,
  IAPIResource,
  IDescription,
  IEffect,
  IEncounter,
  IFlavorText,
  IGenerationGameIndex,
  IMachineVersionDetail,
  IName,
  INamedAPIResource,
  IVerboseEffect,
  IVersionEncounterDetail,
  IVersionGameIndex,
  IVersionGroupFlavorText,
};
