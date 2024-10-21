import type { Schema as $ } from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../src/entrypoints/utilities-for-generated.js'
import type * as Data from './Data.js'
import type * as MethodsRoot from './MethodsRoot.js'
import type * as $Scalar from './Scalar.js'
export namespace Schema {
  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Root
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Mutation = $.StandardTypes.Mutation<{
    addPokemon: $.Field<
      'addPokemon',
      $.Nullable<Pokemon>,
      $.Args<{
        attack: $.InputField<$.Nullable<$Scalar.Int>>
        defense: $.InputField<$.Nullable<$Scalar.Int>>
        hp: $.InputField<$.Nullable<$Scalar.Int>>
        name: $.InputField<$Scalar.String>
        type: $.InputField<PokemonType>
      }, false>
    >
  }>

  export type Query = $.StandardTypes.Query<{
    battles: $.Field<'battles', $.List<Battle>, null>
    beings: $.Field<'beings', $.List<Being>, null>
    pokemon: $.Field<'pokemon', $.Nullable<$.List<Pokemon>>, null>
    pokemonByName: $.Field<
      'pokemonByName',
      $.Nullable<$.List<Pokemon>>,
      $.Args<{
        name: $.InputField<$Scalar.String>
      }, false>
    >
    pokemons: $.Field<
      'pokemons',
      $.Nullable<$.List<Pokemon>>,
      $.Args<{
        filter: $.InputField<$.Nullable<PokemonFilter>>
      }, true>
    >
    trainerByName: $.Field<
      'trainerByName',
      $.Nullable<Trainer>,
      $.Args<{
        name: $.InputField<$Scalar.String>
      }, false>
    >
    trainers: $.Field<'trainers', $.Nullable<$.List<Trainer>>, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                                Enum
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type BattleWildResult = $.Enum<'BattleWildResult', ['pokemonsCaptured', 'pokemonsDefeated', 'trainerDefeated']>

  export type PokemonType = $.Enum<'PokemonType', ['bug', 'electric', 'fire', 'grass', 'water']>

  export type TrainerClass = $.Enum<
    'TrainerClass',
    [
      'bugCatcher',
      'camper',
      'picnicker',
      'psychic',
      'psychicMedium',
      'psychicYoungster',
      'sailor',
      'superNerd',
      'tamer',
      'teamRocketGrunt',
      'triathlete',
      'youngster',
      'youth',
    ]
  >

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                            InputObject
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type DateFilter = $.InputObject<'DateFilter', {
    gte: $.InputField<$.Nullable<$Scalar.Float>>
    lte: $.InputField<$.Nullable<$Scalar.Float>>
  }, true>

  export type PokemonFilter = $.InputObject<'PokemonFilter', {
    birthday: $.InputField<$.Nullable<DateFilter>>
    name: $.InputField<$.Nullable<StringFilter>>
  }, true>

  export type StringFilter = $.InputObject<'StringFilter', {
    contains: $.InputField<$.Nullable<$Scalar.String>>
    in: $.InputField<$.Nullable<$.List<$Scalar.String>>>
  }, true>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                             Interface
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Being = $.Interface<'Being', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Nullable<$Scalar.String>, null>
  }, [Patron, Pokemon, Trainer]>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Object
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type BattleRoyale = $.OutputObject<'BattleRoyale', {
    combatants: $.Field<'combatants', $.Nullable<$.List<CombatantMultiPokemon>>, null>
    date: $.Field<'date', $.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    winner: $.Field<'winner', $.Nullable<Trainer>, null>
  }>

  export type BattleTrainer = $.OutputObject<'BattleTrainer', {
    combatant1: $.Field<'combatant1', $.Nullable<CombatantSinglePokemon>, null>
    combatant2: $.Field<'combatant2', $.Nullable<CombatantSinglePokemon>, null>
    date: $.Field<'date', $.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    winner: $.Field<'winner', $.Nullable<Trainer>, null>
  }>

  export type BattleWild = $.OutputObject<'BattleWild', {
    date: $.Field<'date', $.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    pokemon: $.Field<'pokemon', $.Nullable<Pokemon>, null>
    result: $.Field<'result', $.Nullable<BattleWildResult>, null>
    trainer: $.Field<'trainer', $.Nullable<Trainer>, null>
    wildPokemons: $.Field<'wildPokemons', $.Nullable<$.List<Pokemon>>, null>
  }>

  export type CombatantMultiPokemon = $.OutputObject<'CombatantMultiPokemon', {
    pokemons: $.Field<'pokemons', $.Nullable<$.List<Pokemon>>, null>
    trainer: $.Field<'trainer', $.Nullable<Trainer>, null>
  }>

  export type CombatantSinglePokemon = $.OutputObject<'CombatantSinglePokemon', {
    pokemon: $.Field<'pokemon', $.Nullable<Pokemon>, null>
    trainer: $.Field<'trainer', $.Nullable<Trainer>, null>
  }>

  export type Patron = $.OutputObject<'Patron', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    money: $.Field<'money', $.Nullable<$Scalar.Int>, null>
    name: $.Field<'name', $.Nullable<$Scalar.String>, null>
  }>

  export type Pokemon = $.OutputObject<'Pokemon', {
    attack: $.Field<'attack', $.Nullable<$Scalar.Int>, null>
    birthday: $.Field<'birthday', $.Nullable<$Scalar.Int>, null>
    defense: $.Field<'defense', $.Nullable<$Scalar.Int>, null>
    hp: $.Field<'hp', $.Nullable<$Scalar.Int>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Nullable<$Scalar.String>, null>
    trainer: $.Field<'trainer', $.Nullable<Trainer>, null>
    type: $.Field<'type', $.Nullable<PokemonType>, null>
  }>

  export type Trainer = $.OutputObject<'Trainer', {
    class: $.Field<'class', $.Nullable<TrainerClass>, null>
    fans: $.Field<'fans', $.Nullable<$.List<Patron>>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    name: $.Field<'name', $.Nullable<$Scalar.String>, null>
    pokemon: $.Field<'pokemon', $.Nullable<$.List<Pokemon>>, null>
  }>

  //
  //
  //
  //
  //
  //
  // ==================================================================================================
  //                                               Union
  // ==================================================================================================
  //
  //
  //
  //
  //
  //

  export type Battle = $.Union<'Battle', [BattleRoyale, BattleTrainer, BattleWild]>
}

//
//
//
//
//
//
// ==================================================================================================
//                                               Schema
// ==================================================================================================
//
//
//
//
//
//
export interface Schema<$Scalars extends $$Utilities.Schema.Scalar.ScalarMap = {}> extends $$Utilities.Schema {
  name: Data.Name
  RootTypesPresent: ['Mutation', 'Query']
  RootUnion: Schema.Mutation | Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: Schema.Mutation
    Subscription: null
  }
  allTypes: {
    Mutation: Schema.Mutation
    Query: Schema.Query
    BattleWildResult: Schema.BattleWildResult
    PokemonType: Schema.PokemonType
    TrainerClass: Schema.TrainerClass
    BattleRoyale: Schema.BattleRoyale
    BattleTrainer: Schema.BattleTrainer
    BattleWild: Schema.BattleWild
    CombatantMultiPokemon: Schema.CombatantMultiPokemon
    CombatantSinglePokemon: Schema.CombatantSinglePokemon
    Patron: Schema.Patron
    Pokemon: Schema.Pokemon
    Trainer: Schema.Trainer
    Battle: Schema.Battle
    Being: Schema.Being
  }
  objects: {
    BattleRoyale: Schema.BattleRoyale
    BattleTrainer: Schema.BattleTrainer
    BattleWild: Schema.BattleWild
    CombatantMultiPokemon: Schema.CombatantMultiPokemon
    CombatantSinglePokemon: Schema.CombatantSinglePokemon
    Patron: Schema.Patron
    Pokemon: Schema.Pokemon
    Trainer: Schema.Trainer
  }
  unions: {
    Battle: Schema.Battle
  }
  interfaces: {
    Being: Schema.Being
  }
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
