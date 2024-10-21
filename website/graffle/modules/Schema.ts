import type { Schema as $ } from 'graffle/utilities-for-generated'
import type * as $$Utilities from 'graffle/utilities-for-generated'
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

  export type Query = $.ObjectQuery<{
    continent: $.Field<
      'continent',
      $.Nullable<Continent>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    continents: $.Field<
      'continents',
      $.List<Continent>,
      $.Args<{
        filter: $.InputField<$.Nullable<ContinentFilterInput>>
      }, true>
    >
    countries: $.Field<
      'countries',
      $.List<Country>,
      $.Args<{
        filter: $.InputField<$.Nullable<CountryFilterInput>>
      }, true>
    >
    country: $.Field<
      'country',
      $.Nullable<Country>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    language: $.Field<
      'language',
      $.Nullable<Language>,
      $.Args<{
        code: $.InputField<$Scalar.ID>
      }, false>
    >
    languages: $.Field<
      'languages',
      $.List<Language>,
      $.Args<{
        filter: $.InputField<$.Nullable<LanguageFilterInput>>
      }, true>
    >
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

  // -- no types --

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

  export type ContinentFilterInput = $.InputObject<'ContinentFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type CountryFilterInput = $.InputObject<'CountryFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
    continent: $.InputField<$.Nullable<StringQueryOperatorInput>>
    currency: $.InputField<$.Nullable<StringQueryOperatorInput>>
    name: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type LanguageFilterInput = $.InputObject<'LanguageFilterInput', {
    code: $.InputField<$.Nullable<StringQueryOperatorInput>>
  }, true>

  export type StringQueryOperatorInput = $.InputObject<'StringQueryOperatorInput', {
    eq: $.InputField<$.Nullable<$Scalar.String>>
    in: $.InputField<$.Nullable<$.List<$Scalar.String>>>
    ne: $.InputField<$.Nullable<$Scalar.String>>
    nin: $.InputField<$.Nullable<$.List<$Scalar.String>>>
    regex: $.InputField<$.Nullable<$Scalar.String>>
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

  // -- no types --

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

  export type Continent = $.OutputObject<'Continent', {
    code: $.Field<'code', $Scalar.ID, null>
    countries: $.Field<'countries', $.List<Country>, null>
    name: $.Field<'name', $Scalar.String, null>
  }>

  export type Country = $.OutputObject<'Country', {
    awsRegion: $.Field<'awsRegion', $Scalar.String, null>
    capital: $.Field<'capital', $.Nullable<$Scalar.String>, null>
    code: $.Field<'code', $Scalar.ID, null>
    continent: $.Field<'continent', Continent, null>
    currencies: $.Field<'currencies', $.List<$Scalar.String>, null>
    currency: $.Field<'currency', $.Nullable<$Scalar.String>, null>
    emoji: $.Field<'emoji', $Scalar.String, null>
    emojiU: $.Field<'emojiU', $Scalar.String, null>
    languages: $.Field<'languages', $.List<Language>, null>
    name: $.Field<
      'name',
      $Scalar.String,
      $.Args<{
        lang: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    native: $.Field<'native', $Scalar.String, null>
    phone: $.Field<'phone', $Scalar.String, null>
    phones: $.Field<'phones', $.List<$Scalar.String>, null>
    states: $.Field<'states', $.List<State>, null>
    subdivisions: $.Field<'subdivisions', $.List<Subdivision>, null>
  }>

  export type Language = $.OutputObject<'Language', {
    code: $.Field<'code', $Scalar.ID, null>
    name: $.Field<'name', $Scalar.String, null>
    native: $.Field<'native', $Scalar.String, null>
    rtl: $.Field<'rtl', $Scalar.Boolean, null>
  }>

  export type State = $.OutputObject<'State', {
    code: $.Field<'code', $.Nullable<$Scalar.String>, null>
    country: $.Field<'country', Country, null>
    name: $.Field<'name', $Scalar.String, null>
  }>

  export type Subdivision = $.OutputObject<'Subdivision', {
    code: $.Field<'code', $Scalar.ID, null>
    emoji: $.Field<'emoji', $.Nullable<$Scalar.String>, null>
    name: $.Field<'name', $Scalar.String, null>
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

  // -- no types --
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
  RootTypesPresent: ['Query']
  RootUnion: Schema.Query
  Root: {
    Query: Schema.Query
    Mutation: null
    Subscription: null
  }
  allTypes: {
    Query: Schema.Query
    Continent: Schema.Continent
    Country: Schema.Country
    Language: Schema.Language
    State: Schema.State
    Subdivision: Schema.Subdivision
  }
  objects: {
    Continent: Schema.Continent
    Country: Schema.Country
    Language: Schema.Language
    State: Schema.State
    Subdivision: Schema.Subdivision
  }
  unions: {}
  interfaces: {}
  scalars: $Scalars
  extensions: $$Utilities.GlobalRegistry.TypeExtensions
}
