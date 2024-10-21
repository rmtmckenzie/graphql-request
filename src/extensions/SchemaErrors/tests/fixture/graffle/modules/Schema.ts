import type { Schema as $ } from '../../../../../../entrypoints/utilities-for-generated.js'
import type * as $$Utilities from '../../../../../../entrypoints/utilities-for-generated.js'
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
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    idNonNull: $.Field<'idNonNull', $Scalar.ID, null>
  }>

  export type Query = $.StandardTypes.Query<{
    InputObjectNested: $.Field<
      'InputObjectNested',
      $.Nullable<$Scalar.ID>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObjectNested>>
      }, true>
    >
    InputObjectNestedNonNull: $.Field<
      'InputObjectNestedNonNull',
      $.Nullable<$Scalar.ID>,
      $.Args<{
        input: $.InputField<InputObjectNestedNonNull>
      }, false>
    >
    /**
     * Query enum field documentation.
     */
    abcEnum: $.Field<'abcEnum', $.Nullable<ABCEnum>, null>
    argInputObjectCircular: $.Field<
      'argInputObjectCircular',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObjectCircular>>
      }, true>
    >
    date: $.Field<'date', $.Nullable<$Scalar.Date>, null>
    dateArg: $.Field<
      'dateArg',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.Nullable<$Scalar.Date>>
      }, true>
    >
    dateArgInputObject: $.Field<
      'dateArgInputObject',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObject>>
      }, true>
    >
    dateArgList: $.Field<
      'dateArgList',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.Nullable<$.List<$Scalar.Date>>>
      }, true>
    >
    dateArgNonNull: $.Field<
      'dateArgNonNull',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$Scalar.Date>
      }, false>
    >
    dateArgNonNullList: $.Field<
      'dateArgNonNullList',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.List<$.Nullable<$Scalar.Date>>>
      }, false>
    >
    dateArgNonNullListNonNull: $.Field<
      'dateArgNonNullListNonNull',
      $.Nullable<$Scalar.Date>,
      $.Args<{
        date: $.InputField<$.List<$Scalar.Date>>
      }, false>
    >
    dateInterface1: $.Field<'dateInterface1', $.Nullable<DateInterface1>, null>
    dateList: $.Field<'dateList', $.Nullable<$.List<$Scalar.Date>>, null>
    dateListList: $.Field<'dateListList', $.Nullable<$.List<$.List<$Scalar.Date>>>, null>
    dateListNonNull: $.Field<'dateListNonNull', $.List<$Scalar.Date>, null>
    dateNonNull: $.Field<'dateNonNull', $Scalar.Date, null>
    dateObject1: $.Field<'dateObject1', $.Nullable<DateObject1>, null>
    dateUnion: $.Field<'dateUnion', $.Nullable<DateUnion>, null>
    error: $.Field<
      'error',
      $.Nullable<$Scalar.String>,
      $.Args<{
        case: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    idNonNull: $.Field<'idNonNull', $Scalar.ID, null>
    interface: $.Field<'interface', $.Nullable<Interface>, null>
    interfaceNonNull: $.Field<'interfaceNonNull', Interface, null>
    interfaceWithArgs: $.Field<
      'interfaceWithArgs',
      $.Nullable<Interface>,
      $.Args<{
        id: $.InputField<$Scalar.ID>
      }, false>
    >
    listInt: $.Field<'listInt', $.Nullable<$.List<$.Nullable<$Scalar.Int>>>, null>
    listIntNonNull: $.Field<'listIntNonNull', $.List<$Scalar.Int>, null>
    listListInt: $.Field<'listListInt', $.Nullable<$.List<$.Nullable<$.List<$.Nullable<$Scalar.Int>>>>>, null>
    listListIntNonNull: $.Field<'listListIntNonNull', $.List<$.List<$Scalar.Int>>, null>
    lowerCaseUnion: $.Field<'lowerCaseUnion', $.Nullable<lowerCaseUnion>, null>
    object: $.Field<'object', $.Nullable<Object1>, null>
    objectList: $.Field<'objectList', $.Nullable<$.List<Object1>>, null>
    objectListNonNull: $.Field<'objectListNonNull', $.List<Object1>, null>
    objectNested: $.Field<'objectNested', $.Nullable<ObjectNested>, null>
    objectNonNull: $.Field<'objectNonNull', Object1, null>
    objectWithArgs: $.Field<
      'objectWithArgs',
      $.Nullable<Object1>,
      $.Args<{
        boolean: $.InputField<$.Nullable<$Scalar.Boolean>>
        float: $.InputField<$.Nullable<$Scalar.Float>>
        id: $.InputField<$.Nullable<$Scalar.ID>>
        int: $.InputField<$.Nullable<$Scalar.Int>>
        string: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    result: $.Field<
      'result',
      $.Nullable<Result>,
      $.Args<{
        case: $.InputField<Case>
      }, false>
    >
    resultNonNull: $.Field<
      'resultNonNull',
      Result,
      $.Args<{
        case: $.InputField<$.Nullable<Case>>
      }, true>
    >
    string: $.Field<'string', $.Nullable<$Scalar.String>, null>
    stringWithArgEnum: $.Field<
      'stringWithArgEnum',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ABCEnum: $.InputField<$.Nullable<ABCEnum>>
      }, true>
    >
    stringWithArgInputObject: $.Field<
      'stringWithArgInputObject',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<$.Nullable<InputObject>>
      }, true>
    >
    stringWithArgInputObjectRequired: $.Field<
      'stringWithArgInputObjectRequired',
      $.Nullable<$Scalar.String>,
      $.Args<{
        input: $.InputField<InputObject>
      }, false>
    >
    /**
     * The given arguments are reflected back as a JSON string.
     */
    stringWithArgs: $.Field<
      'stringWithArgs',
      $.Nullable<$Scalar.String>,
      $.Args<{
        boolean: $.InputField<$.Nullable<$Scalar.Boolean>>
        float: $.InputField<$.Nullable<$Scalar.Float>>
        id: $.InputField<$.Nullable<$Scalar.ID>>
        int: $.InputField<$.Nullable<$Scalar.Int>>
        string: $.InputField<$.Nullable<$Scalar.String>>
      }, true>
    >
    stringWithListArg: $.Field<
      'stringWithListArg',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ints: $.InputField<$.Nullable<$.List<$.Nullable<$Scalar.Int>>>>
      }, true>
    >
    stringWithListArgRequired: $.Field<
      'stringWithListArgRequired',
      $.Nullable<$Scalar.String>,
      $.Args<{
        ints: $.InputField<$.List<$Scalar.Int>>
      }, false>
    >
    stringWithRequiredArg: $.Field<
      'stringWithRequiredArg',
      $.Nullable<$Scalar.String>,
      $.Args<{
        string: $.InputField<$Scalar.String>
      }, false>
    >
    unionFooBar: $.Field<'unionFooBar', $.Nullable<FooBarUnion>, null>
    unionFooBarNonNull: $.Field<'unionFooBarNonNull', FooBarUnion, null>
    unionFooBarWithArgs: $.Field<
      'unionFooBarWithArgs',
      $.Nullable<FooBarUnion>,
      $.Args<{
        id: $.InputField<$.Nullable<$Scalar.ID>>
      }, true>
    >
    unionObject: $.Field<'unionObject', $.Nullable<ObjectUnion>, null>
    unionObjectNonNull: $.Field<'unionObjectNonNull', ObjectUnion, null>
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

  /**
   * Enum documentation.
   *
   * Members
   * "A" - (DEPRECATED: Enum value A is deprecated.)
   * "B" - Enum B member documentation.
   * "C" - (DEPRECATED: Enum value C is deprecated.)
   */
  export type ABCEnum = $.Enum<'ABCEnum', ['A', 'B', 'C']>

  export type Case = $.Enum<'Case', ['ErrorOne', 'ErrorTwo', 'Object1']>

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

  export type InputObject = $.InputObject<'InputObject', {
    date: $.InputField<$.Nullable<$Scalar.Date>>
    dateRequired: $.InputField<$Scalar.Date>
    id: $.InputField<$.Nullable<$Scalar.ID>>
    idRequired: $.InputField<$Scalar.ID>
  }, true>

  export type InputObjectCircular = $.InputObject<'InputObjectCircular', {
    circular: $.InputField<$.Nullable<InputObjectCircular>>
    date: $.InputField<$.Nullable<$Scalar.Date>>
  }, true>

  export type InputObjectNested = $.InputObject<'InputObjectNested', {
    InputObject: $.InputField<$.Nullable<InputObject>>
  }, true>

  export type InputObjectNestedNonNull = $.InputObject<'InputObjectNestedNonNull', {
    InputObject: $.InputField<InputObject>
  }, false>

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

  export type DateInterface1 = $.Interface<'DateInterface1', {
    date1: $.Field<'date1', $.Nullable<$Scalar.Date>, null>
  }, [DateObject1]>

  export type Error = $.Interface<'Error', {
    message: $.Field<'message', $Scalar.String, null>
  }, [ErrorOne, ErrorTwo]>

  export type Interface = $.Interface<'Interface', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
  }, [Object1ImplementingInterface, Object2ImplementingInterface]>

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

  export type Bar = $.OutputObject<'Bar', {
    int: $.Field<'int', $.Nullable<$Scalar.Int>, null>
  }>

  export type DateObject1 = $.OutputObject<'DateObject1', {
    date1: $.Field<'date1', $.Nullable<$Scalar.Date>, null>
  }>

  export type DateObject2 = $.OutputObject<'DateObject2', {
    date2: $.Field<'date2', $.Nullable<$Scalar.Date>, null>
  }>

  export type ErrorOne = $.OutputObject<'ErrorOne', {
    infoId: $.Field<'infoId', $.Nullable<$Scalar.ID>, null>
    message: $.Field<'message', $Scalar.String, null>
  }>

  export type ErrorTwo = $.OutputObject<'ErrorTwo', {
    infoInt: $.Field<'infoInt', $.Nullable<$Scalar.Int>, null>
    message: $.Field<'message', $Scalar.String, null>
  }>

  /**
   * Object documentation.
   */
  export type Foo = $.OutputObject<'Foo', {
    /**
     * Field documentation.
     *
     * @deprecated Field a is deprecated.
     */
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type Object1 = $.OutputObject<'Object1', {
    ABCEnum: $.Field<'ABCEnum', $.Nullable<ABCEnum>, null>
    boolean: $.Field<'boolean', $.Nullable<$Scalar.Boolean>, null>
    float: $.Field<'float', $.Nullable<$Scalar.Float>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    int: $.Field<'int', $.Nullable<$Scalar.Int>, null>
    string: $.Field<'string', $.Nullable<$Scalar.String>, null>
  }>

  export type Object1ImplementingInterface = $.OutputObject<'Object1ImplementingInterface', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    int: $.Field<'int', $.Nullable<$Scalar.Int>, null>
  }>

  export type Object2ImplementingInterface = $.OutputObject<'Object2ImplementingInterface', {
    boolean: $.Field<'boolean', $.Nullable<$Scalar.Boolean>, null>
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type ObjectNested = $.OutputObject<'ObjectNested', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
    object: $.Field<'object', $.Nullable<Object1>, null>
  }>

  export type ObjectUnion = $.OutputObject<'ObjectUnion', {
    fooBarUnion: $.Field<'fooBarUnion', $.Nullable<FooBarUnion>, null>
  }>

  export type lowerCaseObject = $.OutputObject<'lowerCaseObject', {
    id: $.Field<'id', $.Nullable<$Scalar.ID>, null>
  }>

  export type lowerCaseObject2 = $.OutputObject<'lowerCaseObject2', {
    int: $.Field<'int', $.Nullable<$Scalar.Int>, null>
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

  export type DateUnion = $.Union<'DateUnion', [DateObject1, DateObject2]>

  /**
   * Union documentation.
   */
  export type FooBarUnion = $.Union<'FooBarUnion', [Bar, Foo]>

  export type Result = $.Union<'Result', [ErrorOne, ErrorTwo, Object1]>

  export type lowerCaseUnion = $.Union<'lowerCaseUnion', [lowerCaseObject, lowerCaseObject2]>
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
    ABCEnum: Schema.ABCEnum
    Case: Schema.Case
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectNested: Schema.ObjectNested
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
  }
  objects: {
    Bar: Schema.Bar
    DateObject1: Schema.DateObject1
    DateObject2: Schema.DateObject2
    ErrorOne: Schema.ErrorOne
    ErrorTwo: Schema.ErrorTwo
    Foo: Schema.Foo
    Object1: Schema.Object1
    Object1ImplementingInterface: Schema.Object1ImplementingInterface
    Object2ImplementingInterface: Schema.Object2ImplementingInterface
    ObjectNested: Schema.ObjectNested
    ObjectUnion: Schema.ObjectUnion
    lowerCaseObject: Schema.lowerCaseObject
    lowerCaseObject2: Schema.lowerCaseObject2
  }
  unions: {
    DateUnion: Schema.DateUnion
    FooBarUnion: Schema.FooBarUnion
    Result: Schema.Result
    lowerCaseUnion: Schema.lowerCaseUnion
  }
  interfaces: {
    DateInterface1: Schema.DateInterface1
    Error: Schema.Error
    Interface: Schema.Interface
  }
  scalars: $Scalars
  extensions: {
    SchemaErrors: {
      objectNames: 'ErrorOne' | 'ErrorTwo'
    }
  }
}
