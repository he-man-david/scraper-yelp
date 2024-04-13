
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model YelpListPageTask
 * 
 */
export type YelpListPageTask = $Result.DefaultSelection<Prisma.$YelpListPageTaskPayload>
/**
 * Model YelpProfilePageTask
 * 
 */
export type YelpProfilePageTask = $Result.DefaultSelection<Prisma.$YelpProfilePageTaskPayload>
/**
 * Model GoogleLatLongTask
 * 
 */
export type GoogleLatLongTask = $Result.DefaultSelection<Prisma.$GoogleLatLongTaskPayload>
/**
 * Model BusinessSiteTask
 * 
 */
export type BusinessSiteTask = $Result.DefaultSelection<Prisma.$BusinessSiteTaskPayload>
/**
 * Model BusinessSiteDataTask
 * 
 */
export type BusinessSiteDataTask = $Result.DefaultSelection<Prisma.$BusinessSiteDataTaskPayload>
/**
 * Model ChatGptTask
 * 
 */
export type ChatGptTask = $Result.DefaultSelection<Prisma.$ChatGptTaskPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more YelpListPageTasks
 * const yelpListPageTasks = await prisma.yelpListPageTask.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more YelpListPageTasks
   * const yelpListPageTasks = await prisma.yelpListPageTask.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.yelpListPageTask`: Exposes CRUD operations for the **YelpListPageTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YelpListPageTasks
    * const yelpListPageTasks = await prisma.yelpListPageTask.findMany()
    * ```
    */
  get yelpListPageTask(): Prisma.YelpListPageTaskDelegate<ExtArgs>;

  /**
   * `prisma.yelpProfilePageTask`: Exposes CRUD operations for the **YelpProfilePageTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YelpProfilePageTasks
    * const yelpProfilePageTasks = await prisma.yelpProfilePageTask.findMany()
    * ```
    */
  get yelpProfilePageTask(): Prisma.YelpProfilePageTaskDelegate<ExtArgs>;

  /**
   * `prisma.googleLatLongTask`: Exposes CRUD operations for the **GoogleLatLongTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoogleLatLongTasks
    * const googleLatLongTasks = await prisma.googleLatLongTask.findMany()
    * ```
    */
  get googleLatLongTask(): Prisma.GoogleLatLongTaskDelegate<ExtArgs>;

  /**
   * `prisma.businessSiteTask`: Exposes CRUD operations for the **BusinessSiteTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessSiteTasks
    * const businessSiteTasks = await prisma.businessSiteTask.findMany()
    * ```
    */
  get businessSiteTask(): Prisma.BusinessSiteTaskDelegate<ExtArgs>;

  /**
   * `prisma.businessSiteDataTask`: Exposes CRUD operations for the **BusinessSiteDataTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BusinessSiteDataTasks
    * const businessSiteDataTasks = await prisma.businessSiteDataTask.findMany()
    * ```
    */
  get businessSiteDataTask(): Prisma.BusinessSiteDataTaskDelegate<ExtArgs>;

  /**
   * `prisma.chatGptTask`: Exposes CRUD operations for the **ChatGptTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatGptTasks
    * const chatGptTasks = await prisma.chatGptTask.findMany()
    * ```
    */
  get chatGptTask(): Prisma.ChatGptTaskDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    YelpListPageTask: 'YelpListPageTask',
    YelpProfilePageTask: 'YelpProfilePageTask',
    GoogleLatLongTask: 'GoogleLatLongTask',
    BusinessSiteTask: 'BusinessSiteTask',
    BusinessSiteDataTask: 'BusinessSiteDataTask',
    ChatGptTask: 'ChatGptTask'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'yelpListPageTask' | 'yelpProfilePageTask' | 'googleLatLongTask' | 'businessSiteTask' | 'businessSiteDataTask' | 'chatGptTask'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      YelpListPageTask: {
        payload: Prisma.$YelpListPageTaskPayload<ExtArgs>
        fields: Prisma.YelpListPageTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YelpListPageTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YelpListPageTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          findFirst: {
            args: Prisma.YelpListPageTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YelpListPageTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          findMany: {
            args: Prisma.YelpListPageTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>[]
          }
          create: {
            args: Prisma.YelpListPageTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          createMany: {
            args: Prisma.YelpListPageTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YelpListPageTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          update: {
            args: Prisma.YelpListPageTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          deleteMany: {
            args: Prisma.YelpListPageTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YelpListPageTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YelpListPageTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpListPageTaskPayload>
          }
          aggregate: {
            args: Prisma.YelpListPageTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYelpListPageTask>
          }
          groupBy: {
            args: Prisma.YelpListPageTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YelpListPageTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.YelpListPageTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<YelpListPageTaskCountAggregateOutputType> | number
          }
        }
      }
      YelpProfilePageTask: {
        payload: Prisma.$YelpProfilePageTaskPayload<ExtArgs>
        fields: Prisma.YelpProfilePageTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YelpProfilePageTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YelpProfilePageTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          findFirst: {
            args: Prisma.YelpProfilePageTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YelpProfilePageTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          findMany: {
            args: Prisma.YelpProfilePageTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>[]
          }
          create: {
            args: Prisma.YelpProfilePageTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          createMany: {
            args: Prisma.YelpProfilePageTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.YelpProfilePageTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          update: {
            args: Prisma.YelpProfilePageTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          deleteMany: {
            args: Prisma.YelpProfilePageTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.YelpProfilePageTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.YelpProfilePageTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$YelpProfilePageTaskPayload>
          }
          aggregate: {
            args: Prisma.YelpProfilePageTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateYelpProfilePageTask>
          }
          groupBy: {
            args: Prisma.YelpProfilePageTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<YelpProfilePageTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.YelpProfilePageTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<YelpProfilePageTaskCountAggregateOutputType> | number
          }
        }
      }
      GoogleLatLongTask: {
        payload: Prisma.$GoogleLatLongTaskPayload<ExtArgs>
        fields: Prisma.GoogleLatLongTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoogleLatLongTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoogleLatLongTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          findFirst: {
            args: Prisma.GoogleLatLongTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoogleLatLongTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          findMany: {
            args: Prisma.GoogleLatLongTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>[]
          }
          create: {
            args: Prisma.GoogleLatLongTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          createMany: {
            args: Prisma.GoogleLatLongTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GoogleLatLongTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          update: {
            args: Prisma.GoogleLatLongTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          deleteMany: {
            args: Prisma.GoogleLatLongTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GoogleLatLongTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GoogleLatLongTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GoogleLatLongTaskPayload>
          }
          aggregate: {
            args: Prisma.GoogleLatLongTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGoogleLatLongTask>
          }
          groupBy: {
            args: Prisma.GoogleLatLongTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GoogleLatLongTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoogleLatLongTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<GoogleLatLongTaskCountAggregateOutputType> | number
          }
        }
      }
      BusinessSiteTask: {
        payload: Prisma.$BusinessSiteTaskPayload<ExtArgs>
        fields: Prisma.BusinessSiteTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessSiteTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessSiteTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          findFirst: {
            args: Prisma.BusinessSiteTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessSiteTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          findMany: {
            args: Prisma.BusinessSiteTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>[]
          }
          create: {
            args: Prisma.BusinessSiteTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          createMany: {
            args: Prisma.BusinessSiteTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BusinessSiteTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          update: {
            args: Prisma.BusinessSiteTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          deleteMany: {
            args: Prisma.BusinessSiteTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessSiteTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BusinessSiteTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteTaskPayload>
          }
          aggregate: {
            args: Prisma.BusinessSiteTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBusinessSiteTask>
          }
          groupBy: {
            args: Prisma.BusinessSiteTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BusinessSiteTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessSiteTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<BusinessSiteTaskCountAggregateOutputType> | number
          }
        }
      }
      BusinessSiteDataTask: {
        payload: Prisma.$BusinessSiteDataTaskPayload<ExtArgs>
        fields: Prisma.BusinessSiteDataTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessSiteDataTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessSiteDataTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          findFirst: {
            args: Prisma.BusinessSiteDataTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessSiteDataTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          findMany: {
            args: Prisma.BusinessSiteDataTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>[]
          }
          create: {
            args: Prisma.BusinessSiteDataTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          createMany: {
            args: Prisma.BusinessSiteDataTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BusinessSiteDataTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          update: {
            args: Prisma.BusinessSiteDataTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          deleteMany: {
            args: Prisma.BusinessSiteDataTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessSiteDataTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BusinessSiteDataTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BusinessSiteDataTaskPayload>
          }
          aggregate: {
            args: Prisma.BusinessSiteDataTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBusinessSiteDataTask>
          }
          groupBy: {
            args: Prisma.BusinessSiteDataTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BusinessSiteDataTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessSiteDataTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<BusinessSiteDataTaskCountAggregateOutputType> | number
          }
        }
      }
      ChatGptTask: {
        payload: Prisma.$ChatGptTaskPayload<ExtArgs>
        fields: Prisma.ChatGptTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatGptTaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatGptTaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          findFirst: {
            args: Prisma.ChatGptTaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatGptTaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          findMany: {
            args: Prisma.ChatGptTaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>[]
          }
          create: {
            args: Prisma.ChatGptTaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          createMany: {
            args: Prisma.ChatGptTaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ChatGptTaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          update: {
            args: Prisma.ChatGptTaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          deleteMany: {
            args: Prisma.ChatGptTaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ChatGptTaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ChatGptTaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ChatGptTaskPayload>
          }
          aggregate: {
            args: Prisma.ChatGptTaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateChatGptTask>
          }
          groupBy: {
            args: Prisma.ChatGptTaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ChatGptTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatGptTaskCountArgs<ExtArgs>,
            result: $Utils.Optional<ChatGptTaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model YelpListPageTask
   */

  export type AggregateYelpListPageTask = {
    _count: YelpListPageTaskCountAggregateOutputType | null
    _avg: YelpListPageTaskAvgAggregateOutputType | null
    _sum: YelpListPageTaskSumAggregateOutputType | null
    _min: YelpListPageTaskMinAggregateOutputType | null
    _max: YelpListPageTaskMaxAggregateOutputType | null
  }

  export type YelpListPageTaskAvgAggregateOutputType = {
    id: number | null
    page: number | null
  }

  export type YelpListPageTaskSumAggregateOutputType = {
    id: number | null
    page: number | null
  }

  export type YelpListPageTaskMinAggregateOutputType = {
    id: number | null
    city: string | null
    url: string | null
    page: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YelpListPageTaskMaxAggregateOutputType = {
    id: number | null
    city: string | null
    url: string | null
    page: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YelpListPageTaskCountAggregateOutputType = {
    id: number
    city: number
    url: number
    page: number
    completed: number
    createdAt: number
    updatedAt: number
    links: number
    _all: number
  }


  export type YelpListPageTaskAvgAggregateInputType = {
    id?: true
    page?: true
  }

  export type YelpListPageTaskSumAggregateInputType = {
    id?: true
    page?: true
  }

  export type YelpListPageTaskMinAggregateInputType = {
    id?: true
    city?: true
    url?: true
    page?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YelpListPageTaskMaxAggregateInputType = {
    id?: true
    city?: true
    url?: true
    page?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YelpListPageTaskCountAggregateInputType = {
    id?: true
    city?: true
    url?: true
    page?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    links?: true
    _all?: true
  }

  export type YelpListPageTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which YelpListPageTask to aggregate.
     */
    where?: YelpListPageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpListPageTasks to fetch.
     */
    orderBy?: YelpListPageTaskOrderByWithRelationInput | YelpListPageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YelpListPageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpListPageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpListPageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YelpListPageTasks
    **/
    _count?: true | YelpListPageTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YelpListPageTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YelpListPageTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YelpListPageTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YelpListPageTaskMaxAggregateInputType
  }

  export type GetYelpListPageTaskAggregateType<T extends YelpListPageTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateYelpListPageTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYelpListPageTask[P]>
      : GetScalarType<T[P], AggregateYelpListPageTask[P]>
  }




  export type YelpListPageTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: YelpListPageTaskWhereInput
    orderBy?: YelpListPageTaskOrderByWithAggregationInput | YelpListPageTaskOrderByWithAggregationInput[]
    by: YelpListPageTaskScalarFieldEnum[] | YelpListPageTaskScalarFieldEnum
    having?: YelpListPageTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YelpListPageTaskCountAggregateInputType | true
    _avg?: YelpListPageTaskAvgAggregateInputType
    _sum?: YelpListPageTaskSumAggregateInputType
    _min?: YelpListPageTaskMinAggregateInputType
    _max?: YelpListPageTaskMaxAggregateInputType
  }

  export type YelpListPageTaskGroupByOutputType = {
    id: number
    city: string
    url: string
    page: number
    completed: boolean
    createdAt: Date
    updatedAt: Date
    links: string[]
    _count: YelpListPageTaskCountAggregateOutputType | null
    _avg: YelpListPageTaskAvgAggregateOutputType | null
    _sum: YelpListPageTaskSumAggregateOutputType | null
    _min: YelpListPageTaskMinAggregateOutputType | null
    _max: YelpListPageTaskMaxAggregateOutputType | null
  }

  type GetYelpListPageTaskGroupByPayload<T extends YelpListPageTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YelpListPageTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YelpListPageTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YelpListPageTaskGroupByOutputType[P]>
            : GetScalarType<T[P], YelpListPageTaskGroupByOutputType[P]>
        }
      >
    >


  export type YelpListPageTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    city?: boolean
    url?: boolean
    page?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    links?: boolean
  }, ExtArgs["result"]["yelpListPageTask"]>

  export type YelpListPageTaskSelectScalar = {
    id?: boolean
    city?: boolean
    url?: boolean
    page?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    links?: boolean
  }


  export type $YelpListPageTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "YelpListPageTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      city: string
      url: string
      page: number
      completed: boolean
      createdAt: Date
      updatedAt: Date
      links: string[]
    }, ExtArgs["result"]["yelpListPageTask"]>
    composites: {}
  }


  type YelpListPageTaskGetPayload<S extends boolean | null | undefined | YelpListPageTaskDefaultArgs> = $Result.GetResult<Prisma.$YelpListPageTaskPayload, S>

  type YelpListPageTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<YelpListPageTaskFindManyArgs, 'select' | 'include'> & {
      select?: YelpListPageTaskCountAggregateInputType | true
    }

  export interface YelpListPageTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YelpListPageTask'], meta: { name: 'YelpListPageTask' } }
    /**
     * Find zero or one YelpListPageTask that matches the filter.
     * @param {YelpListPageTaskFindUniqueArgs} args - Arguments to find a YelpListPageTask
     * @example
     * // Get one YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YelpListPageTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YelpListPageTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {YelpListPageTaskFindUniqueOrThrowArgs} args - Arguments to find a YelpListPageTask
     * @example
     * // Get one YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YelpListPageTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YelpListPageTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskFindFirstArgs} args - Arguments to find a YelpListPageTask
     * @example
     * // Get one YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YelpListPageTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskFindFirstArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YelpListPageTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskFindFirstOrThrowArgs} args - Arguments to find a YelpListPageTask
     * @example
     * // Get one YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YelpListPageTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YelpListPageTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YelpListPageTasks
     * const yelpListPageTasks = await prisma.yelpListPageTask.findMany()
     * 
     * // Get first 10 YelpListPageTasks
     * const yelpListPageTasks = await prisma.yelpListPageTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yelpListPageTaskWithIdOnly = await prisma.yelpListPageTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YelpListPageTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YelpListPageTask.
     * @param {YelpListPageTaskCreateArgs} args - Arguments to create a YelpListPageTask.
     * @example
     * // Create one YelpListPageTask
     * const YelpListPageTask = await prisma.yelpListPageTask.create({
     *   data: {
     *     // ... data to create a YelpListPageTask
     *   }
     * })
     * 
    **/
    create<T extends YelpListPageTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskCreateArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YelpListPageTasks.
     *     @param {YelpListPageTaskCreateManyArgs} args - Arguments to create many YelpListPageTasks.
     *     @example
     *     // Create many YelpListPageTasks
     *     const yelpListPageTask = await prisma.yelpListPageTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends YelpListPageTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YelpListPageTask.
     * @param {YelpListPageTaskDeleteArgs} args - Arguments to delete one YelpListPageTask.
     * @example
     * // Delete one YelpListPageTask
     * const YelpListPageTask = await prisma.yelpListPageTask.delete({
     *   where: {
     *     // ... filter to delete one YelpListPageTask
     *   }
     * })
     * 
    **/
    delete<T extends YelpListPageTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskDeleteArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YelpListPageTask.
     * @param {YelpListPageTaskUpdateArgs} args - Arguments to update one YelpListPageTask.
     * @example
     * // Update one YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YelpListPageTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskUpdateArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YelpListPageTasks.
     * @param {YelpListPageTaskDeleteManyArgs} args - Arguments to filter YelpListPageTasks to delete.
     * @example
     * // Delete a few YelpListPageTasks
     * const { count } = await prisma.yelpListPageTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YelpListPageTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpListPageTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YelpListPageTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YelpListPageTasks
     * const yelpListPageTask = await prisma.yelpListPageTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YelpListPageTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YelpListPageTask.
     * @param {YelpListPageTaskUpsertArgs} args - Arguments to update or create a YelpListPageTask.
     * @example
     * // Update or create a YelpListPageTask
     * const yelpListPageTask = await prisma.yelpListPageTask.upsert({
     *   create: {
     *     // ... data to create a YelpListPageTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YelpListPageTask we want to update
     *   }
     * })
    **/
    upsert<T extends YelpListPageTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YelpListPageTaskUpsertArgs<ExtArgs>>
    ): Prisma__YelpListPageTaskClient<$Result.GetResult<Prisma.$YelpListPageTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YelpListPageTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskCountArgs} args - Arguments to filter YelpListPageTasks to count.
     * @example
     * // Count the number of YelpListPageTasks
     * const count = await prisma.yelpListPageTask.count({
     *   where: {
     *     // ... the filter for the YelpListPageTasks we want to count
     *   }
     * })
    **/
    count<T extends YelpListPageTaskCountArgs>(
      args?: Subset<T, YelpListPageTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YelpListPageTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YelpListPageTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YelpListPageTaskAggregateArgs>(args: Subset<T, YelpListPageTaskAggregateArgs>): Prisma.PrismaPromise<GetYelpListPageTaskAggregateType<T>>

    /**
     * Group by YelpListPageTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpListPageTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YelpListPageTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YelpListPageTaskGroupByArgs['orderBy'] }
        : { orderBy?: YelpListPageTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YelpListPageTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYelpListPageTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YelpListPageTask model
   */
  readonly fields: YelpListPageTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YelpListPageTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YelpListPageTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the YelpListPageTask model
   */ 
  interface YelpListPageTaskFieldRefs {
    readonly id: FieldRef<"YelpListPageTask", 'Int'>
    readonly city: FieldRef<"YelpListPageTask", 'String'>
    readonly url: FieldRef<"YelpListPageTask", 'String'>
    readonly page: FieldRef<"YelpListPageTask", 'Int'>
    readonly completed: FieldRef<"YelpListPageTask", 'Boolean'>
    readonly createdAt: FieldRef<"YelpListPageTask", 'DateTime'>
    readonly updatedAt: FieldRef<"YelpListPageTask", 'DateTime'>
    readonly links: FieldRef<"YelpListPageTask", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * YelpListPageTask findUnique
   */
  export type YelpListPageTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpListPageTask to fetch.
     */
    where: YelpListPageTaskWhereUniqueInput
  }


  /**
   * YelpListPageTask findUniqueOrThrow
   */
  export type YelpListPageTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpListPageTask to fetch.
     */
    where: YelpListPageTaskWhereUniqueInput
  }


  /**
   * YelpListPageTask findFirst
   */
  export type YelpListPageTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpListPageTask to fetch.
     */
    where?: YelpListPageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpListPageTasks to fetch.
     */
    orderBy?: YelpListPageTaskOrderByWithRelationInput | YelpListPageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YelpListPageTasks.
     */
    cursor?: YelpListPageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpListPageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpListPageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YelpListPageTasks.
     */
    distinct?: YelpListPageTaskScalarFieldEnum | YelpListPageTaskScalarFieldEnum[]
  }


  /**
   * YelpListPageTask findFirstOrThrow
   */
  export type YelpListPageTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpListPageTask to fetch.
     */
    where?: YelpListPageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpListPageTasks to fetch.
     */
    orderBy?: YelpListPageTaskOrderByWithRelationInput | YelpListPageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YelpListPageTasks.
     */
    cursor?: YelpListPageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpListPageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpListPageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YelpListPageTasks.
     */
    distinct?: YelpListPageTaskScalarFieldEnum | YelpListPageTaskScalarFieldEnum[]
  }


  /**
   * YelpListPageTask findMany
   */
  export type YelpListPageTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpListPageTasks to fetch.
     */
    where?: YelpListPageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpListPageTasks to fetch.
     */
    orderBy?: YelpListPageTaskOrderByWithRelationInput | YelpListPageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YelpListPageTasks.
     */
    cursor?: YelpListPageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpListPageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpListPageTasks.
     */
    skip?: number
    distinct?: YelpListPageTaskScalarFieldEnum | YelpListPageTaskScalarFieldEnum[]
  }


  /**
   * YelpListPageTask create
   */
  export type YelpListPageTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a YelpListPageTask.
     */
    data: XOR<YelpListPageTaskCreateInput, YelpListPageTaskUncheckedCreateInput>
  }


  /**
   * YelpListPageTask createMany
   */
  export type YelpListPageTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YelpListPageTasks.
     */
    data: YelpListPageTaskCreateManyInput | YelpListPageTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * YelpListPageTask update
   */
  export type YelpListPageTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a YelpListPageTask.
     */
    data: XOR<YelpListPageTaskUpdateInput, YelpListPageTaskUncheckedUpdateInput>
    /**
     * Choose, which YelpListPageTask to update.
     */
    where: YelpListPageTaskWhereUniqueInput
  }


  /**
   * YelpListPageTask updateMany
   */
  export type YelpListPageTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YelpListPageTasks.
     */
    data: XOR<YelpListPageTaskUpdateManyMutationInput, YelpListPageTaskUncheckedUpdateManyInput>
    /**
     * Filter which YelpListPageTasks to update
     */
    where?: YelpListPageTaskWhereInput
  }


  /**
   * YelpListPageTask upsert
   */
  export type YelpListPageTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the YelpListPageTask to update in case it exists.
     */
    where: YelpListPageTaskWhereUniqueInput
    /**
     * In case the YelpListPageTask found by the `where` argument doesn't exist, create a new YelpListPageTask with this data.
     */
    create: XOR<YelpListPageTaskCreateInput, YelpListPageTaskUncheckedCreateInput>
    /**
     * In case the YelpListPageTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YelpListPageTaskUpdateInput, YelpListPageTaskUncheckedUpdateInput>
  }


  /**
   * YelpListPageTask delete
   */
  export type YelpListPageTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
    /**
     * Filter which YelpListPageTask to delete.
     */
    where: YelpListPageTaskWhereUniqueInput
  }


  /**
   * YelpListPageTask deleteMany
   */
  export type YelpListPageTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which YelpListPageTasks to delete
     */
    where?: YelpListPageTaskWhereInput
  }


  /**
   * YelpListPageTask without action
   */
  export type YelpListPageTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpListPageTask
     */
    select?: YelpListPageTaskSelect<ExtArgs> | null
  }



  /**
   * Model YelpProfilePageTask
   */

  export type AggregateYelpProfilePageTask = {
    _count: YelpProfilePageTaskCountAggregateOutputType | null
    _avg: YelpProfilePageTaskAvgAggregateOutputType | null
    _sum: YelpProfilePageTaskSumAggregateOutputType | null
    _min: YelpProfilePageTaskMinAggregateOutputType | null
    _max: YelpProfilePageTaskMaxAggregateOutputType | null
  }

  export type YelpProfilePageTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type YelpProfilePageTaskSumAggregateOutputType = {
    id: number | null
  }

  export type YelpProfilePageTaskMinAggregateOutputType = {
    id: number | null
    url: string | null
    name: string | null
    rating: string | null
    website: string | null
    phone: string | null
    address: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YelpProfilePageTaskMaxAggregateOutputType = {
    id: number | null
    url: string | null
    name: string | null
    rating: string | null
    website: string | null
    phone: string | null
    address: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YelpProfilePageTaskCountAggregateOutputType = {
    id: number
    url: number
    name: number
    rating: number
    website: number
    phone: number
    address: number
    hours: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YelpProfilePageTaskAvgAggregateInputType = {
    id?: true
  }

  export type YelpProfilePageTaskSumAggregateInputType = {
    id?: true
  }

  export type YelpProfilePageTaskMinAggregateInputType = {
    id?: true
    url?: true
    name?: true
    rating?: true
    website?: true
    phone?: true
    address?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YelpProfilePageTaskMaxAggregateInputType = {
    id?: true
    url?: true
    name?: true
    rating?: true
    website?: true
    phone?: true
    address?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YelpProfilePageTaskCountAggregateInputType = {
    id?: true
    url?: true
    name?: true
    rating?: true
    website?: true
    phone?: true
    address?: true
    hours?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YelpProfilePageTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which YelpProfilePageTask to aggregate.
     */
    where?: YelpProfilePageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpProfilePageTasks to fetch.
     */
    orderBy?: YelpProfilePageTaskOrderByWithRelationInput | YelpProfilePageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YelpProfilePageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpProfilePageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpProfilePageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YelpProfilePageTasks
    **/
    _count?: true | YelpProfilePageTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YelpProfilePageTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YelpProfilePageTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YelpProfilePageTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YelpProfilePageTaskMaxAggregateInputType
  }

  export type GetYelpProfilePageTaskAggregateType<T extends YelpProfilePageTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateYelpProfilePageTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYelpProfilePageTask[P]>
      : GetScalarType<T[P], AggregateYelpProfilePageTask[P]>
  }




  export type YelpProfilePageTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: YelpProfilePageTaskWhereInput
    orderBy?: YelpProfilePageTaskOrderByWithAggregationInput | YelpProfilePageTaskOrderByWithAggregationInput[]
    by: YelpProfilePageTaskScalarFieldEnum[] | YelpProfilePageTaskScalarFieldEnum
    having?: YelpProfilePageTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YelpProfilePageTaskCountAggregateInputType | true
    _avg?: YelpProfilePageTaskAvgAggregateInputType
    _sum?: YelpProfilePageTaskSumAggregateInputType
    _min?: YelpProfilePageTaskMinAggregateInputType
    _max?: YelpProfilePageTaskMaxAggregateInputType
  }

  export type YelpProfilePageTaskGroupByOutputType = {
    id: number
    url: string
    name: string
    rating: string
    website: string
    phone: string
    address: string
    hours: JsonValue
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: YelpProfilePageTaskCountAggregateOutputType | null
    _avg: YelpProfilePageTaskAvgAggregateOutputType | null
    _sum: YelpProfilePageTaskSumAggregateOutputType | null
    _min: YelpProfilePageTaskMinAggregateOutputType | null
    _max: YelpProfilePageTaskMaxAggregateOutputType | null
  }

  type GetYelpProfilePageTaskGroupByPayload<T extends YelpProfilePageTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YelpProfilePageTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YelpProfilePageTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YelpProfilePageTaskGroupByOutputType[P]>
            : GetScalarType<T[P], YelpProfilePageTaskGroupByOutputType[P]>
        }
      >
    >


  export type YelpProfilePageTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    name?: boolean
    rating?: boolean
    website?: boolean
    phone?: boolean
    address?: boolean
    hours?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["yelpProfilePageTask"]>

  export type YelpProfilePageTaskSelectScalar = {
    id?: boolean
    url?: boolean
    name?: boolean
    rating?: boolean
    website?: boolean
    phone?: boolean
    address?: boolean
    hours?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $YelpProfilePageTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "YelpProfilePageTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      url: string
      name: string
      rating: string
      website: string
      phone: string
      address: string
      hours: Prisma.JsonValue
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["yelpProfilePageTask"]>
    composites: {}
  }


  type YelpProfilePageTaskGetPayload<S extends boolean | null | undefined | YelpProfilePageTaskDefaultArgs> = $Result.GetResult<Prisma.$YelpProfilePageTaskPayload, S>

  type YelpProfilePageTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<YelpProfilePageTaskFindManyArgs, 'select' | 'include'> & {
      select?: YelpProfilePageTaskCountAggregateInputType | true
    }

  export interface YelpProfilePageTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YelpProfilePageTask'], meta: { name: 'YelpProfilePageTask' } }
    /**
     * Find zero or one YelpProfilePageTask that matches the filter.
     * @param {YelpProfilePageTaskFindUniqueArgs} args - Arguments to find a YelpProfilePageTask
     * @example
     * // Get one YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends YelpProfilePageTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one YelpProfilePageTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {YelpProfilePageTaskFindUniqueOrThrowArgs} args - Arguments to find a YelpProfilePageTask
     * @example
     * // Get one YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends YelpProfilePageTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first YelpProfilePageTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskFindFirstArgs} args - Arguments to find a YelpProfilePageTask
     * @example
     * // Get one YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends YelpProfilePageTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskFindFirstArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first YelpProfilePageTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskFindFirstOrThrowArgs} args - Arguments to find a YelpProfilePageTask
     * @example
     * // Get one YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends YelpProfilePageTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more YelpProfilePageTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YelpProfilePageTasks
     * const yelpProfilePageTasks = await prisma.yelpProfilePageTask.findMany()
     * 
     * // Get first 10 YelpProfilePageTasks
     * const yelpProfilePageTasks = await prisma.yelpProfilePageTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yelpProfilePageTaskWithIdOnly = await prisma.yelpProfilePageTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends YelpProfilePageTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a YelpProfilePageTask.
     * @param {YelpProfilePageTaskCreateArgs} args - Arguments to create a YelpProfilePageTask.
     * @example
     * // Create one YelpProfilePageTask
     * const YelpProfilePageTask = await prisma.yelpProfilePageTask.create({
     *   data: {
     *     // ... data to create a YelpProfilePageTask
     *   }
     * })
     * 
    **/
    create<T extends YelpProfilePageTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskCreateArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many YelpProfilePageTasks.
     *     @param {YelpProfilePageTaskCreateManyArgs} args - Arguments to create many YelpProfilePageTasks.
     *     @example
     *     // Create many YelpProfilePageTasks
     *     const yelpProfilePageTask = await prisma.yelpProfilePageTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends YelpProfilePageTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a YelpProfilePageTask.
     * @param {YelpProfilePageTaskDeleteArgs} args - Arguments to delete one YelpProfilePageTask.
     * @example
     * // Delete one YelpProfilePageTask
     * const YelpProfilePageTask = await prisma.yelpProfilePageTask.delete({
     *   where: {
     *     // ... filter to delete one YelpProfilePageTask
     *   }
     * })
     * 
    **/
    delete<T extends YelpProfilePageTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskDeleteArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one YelpProfilePageTask.
     * @param {YelpProfilePageTaskUpdateArgs} args - Arguments to update one YelpProfilePageTask.
     * @example
     * // Update one YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends YelpProfilePageTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskUpdateArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more YelpProfilePageTasks.
     * @param {YelpProfilePageTaskDeleteManyArgs} args - Arguments to filter YelpProfilePageTasks to delete.
     * @example
     * // Delete a few YelpProfilePageTasks
     * const { count } = await prisma.yelpProfilePageTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends YelpProfilePageTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, YelpProfilePageTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YelpProfilePageTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YelpProfilePageTasks
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends YelpProfilePageTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YelpProfilePageTask.
     * @param {YelpProfilePageTaskUpsertArgs} args - Arguments to update or create a YelpProfilePageTask.
     * @example
     * // Update or create a YelpProfilePageTask
     * const yelpProfilePageTask = await prisma.yelpProfilePageTask.upsert({
     *   create: {
     *     // ... data to create a YelpProfilePageTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YelpProfilePageTask we want to update
     *   }
     * })
    **/
    upsert<T extends YelpProfilePageTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, YelpProfilePageTaskUpsertArgs<ExtArgs>>
    ): Prisma__YelpProfilePageTaskClient<$Result.GetResult<Prisma.$YelpProfilePageTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of YelpProfilePageTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskCountArgs} args - Arguments to filter YelpProfilePageTasks to count.
     * @example
     * // Count the number of YelpProfilePageTasks
     * const count = await prisma.yelpProfilePageTask.count({
     *   where: {
     *     // ... the filter for the YelpProfilePageTasks we want to count
     *   }
     * })
    **/
    count<T extends YelpProfilePageTaskCountArgs>(
      args?: Subset<T, YelpProfilePageTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YelpProfilePageTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YelpProfilePageTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YelpProfilePageTaskAggregateArgs>(args: Subset<T, YelpProfilePageTaskAggregateArgs>): Prisma.PrismaPromise<GetYelpProfilePageTaskAggregateType<T>>

    /**
     * Group by YelpProfilePageTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YelpProfilePageTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YelpProfilePageTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YelpProfilePageTaskGroupByArgs['orderBy'] }
        : { orderBy?: YelpProfilePageTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YelpProfilePageTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYelpProfilePageTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YelpProfilePageTask model
   */
  readonly fields: YelpProfilePageTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YelpProfilePageTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YelpProfilePageTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the YelpProfilePageTask model
   */ 
  interface YelpProfilePageTaskFieldRefs {
    readonly id: FieldRef<"YelpProfilePageTask", 'Int'>
    readonly url: FieldRef<"YelpProfilePageTask", 'String'>
    readonly name: FieldRef<"YelpProfilePageTask", 'String'>
    readonly rating: FieldRef<"YelpProfilePageTask", 'String'>
    readonly website: FieldRef<"YelpProfilePageTask", 'String'>
    readonly phone: FieldRef<"YelpProfilePageTask", 'String'>
    readonly address: FieldRef<"YelpProfilePageTask", 'String'>
    readonly hours: FieldRef<"YelpProfilePageTask", 'Json'>
    readonly completed: FieldRef<"YelpProfilePageTask", 'Boolean'>
    readonly createdAt: FieldRef<"YelpProfilePageTask", 'DateTime'>
    readonly updatedAt: FieldRef<"YelpProfilePageTask", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * YelpProfilePageTask findUnique
   */
  export type YelpProfilePageTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpProfilePageTask to fetch.
     */
    where: YelpProfilePageTaskWhereUniqueInput
  }


  /**
   * YelpProfilePageTask findUniqueOrThrow
   */
  export type YelpProfilePageTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpProfilePageTask to fetch.
     */
    where: YelpProfilePageTaskWhereUniqueInput
  }


  /**
   * YelpProfilePageTask findFirst
   */
  export type YelpProfilePageTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpProfilePageTask to fetch.
     */
    where?: YelpProfilePageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpProfilePageTasks to fetch.
     */
    orderBy?: YelpProfilePageTaskOrderByWithRelationInput | YelpProfilePageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YelpProfilePageTasks.
     */
    cursor?: YelpProfilePageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpProfilePageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpProfilePageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YelpProfilePageTasks.
     */
    distinct?: YelpProfilePageTaskScalarFieldEnum | YelpProfilePageTaskScalarFieldEnum[]
  }


  /**
   * YelpProfilePageTask findFirstOrThrow
   */
  export type YelpProfilePageTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpProfilePageTask to fetch.
     */
    where?: YelpProfilePageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpProfilePageTasks to fetch.
     */
    orderBy?: YelpProfilePageTaskOrderByWithRelationInput | YelpProfilePageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YelpProfilePageTasks.
     */
    cursor?: YelpProfilePageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpProfilePageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpProfilePageTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YelpProfilePageTasks.
     */
    distinct?: YelpProfilePageTaskScalarFieldEnum | YelpProfilePageTaskScalarFieldEnum[]
  }


  /**
   * YelpProfilePageTask findMany
   */
  export type YelpProfilePageTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter, which YelpProfilePageTasks to fetch.
     */
    where?: YelpProfilePageTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YelpProfilePageTasks to fetch.
     */
    orderBy?: YelpProfilePageTaskOrderByWithRelationInput | YelpProfilePageTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YelpProfilePageTasks.
     */
    cursor?: YelpProfilePageTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YelpProfilePageTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YelpProfilePageTasks.
     */
    skip?: number
    distinct?: YelpProfilePageTaskScalarFieldEnum | YelpProfilePageTaskScalarFieldEnum[]
  }


  /**
   * YelpProfilePageTask create
   */
  export type YelpProfilePageTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a YelpProfilePageTask.
     */
    data: XOR<YelpProfilePageTaskCreateInput, YelpProfilePageTaskUncheckedCreateInput>
  }


  /**
   * YelpProfilePageTask createMany
   */
  export type YelpProfilePageTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YelpProfilePageTasks.
     */
    data: YelpProfilePageTaskCreateManyInput | YelpProfilePageTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * YelpProfilePageTask update
   */
  export type YelpProfilePageTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a YelpProfilePageTask.
     */
    data: XOR<YelpProfilePageTaskUpdateInput, YelpProfilePageTaskUncheckedUpdateInput>
    /**
     * Choose, which YelpProfilePageTask to update.
     */
    where: YelpProfilePageTaskWhereUniqueInput
  }


  /**
   * YelpProfilePageTask updateMany
   */
  export type YelpProfilePageTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YelpProfilePageTasks.
     */
    data: XOR<YelpProfilePageTaskUpdateManyMutationInput, YelpProfilePageTaskUncheckedUpdateManyInput>
    /**
     * Filter which YelpProfilePageTasks to update
     */
    where?: YelpProfilePageTaskWhereInput
  }


  /**
   * YelpProfilePageTask upsert
   */
  export type YelpProfilePageTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the YelpProfilePageTask to update in case it exists.
     */
    where: YelpProfilePageTaskWhereUniqueInput
    /**
     * In case the YelpProfilePageTask found by the `where` argument doesn't exist, create a new YelpProfilePageTask with this data.
     */
    create: XOR<YelpProfilePageTaskCreateInput, YelpProfilePageTaskUncheckedCreateInput>
    /**
     * In case the YelpProfilePageTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YelpProfilePageTaskUpdateInput, YelpProfilePageTaskUncheckedUpdateInput>
  }


  /**
   * YelpProfilePageTask delete
   */
  export type YelpProfilePageTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
    /**
     * Filter which YelpProfilePageTask to delete.
     */
    where: YelpProfilePageTaskWhereUniqueInput
  }


  /**
   * YelpProfilePageTask deleteMany
   */
  export type YelpProfilePageTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which YelpProfilePageTasks to delete
     */
    where?: YelpProfilePageTaskWhereInput
  }


  /**
   * YelpProfilePageTask without action
   */
  export type YelpProfilePageTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YelpProfilePageTask
     */
    select?: YelpProfilePageTaskSelect<ExtArgs> | null
  }



  /**
   * Model GoogleLatLongTask
   */

  export type AggregateGoogleLatLongTask = {
    _count: GoogleLatLongTaskCountAggregateOutputType | null
    _avg: GoogleLatLongTaskAvgAggregateOutputType | null
    _sum: GoogleLatLongTaskSumAggregateOutputType | null
    _min: GoogleLatLongTaskMinAggregateOutputType | null
    _max: GoogleLatLongTaskMaxAggregateOutputType | null
  }

  export type GoogleLatLongTaskAvgAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type GoogleLatLongTaskSumAggregateOutputType = {
    id: number | null
    lat: number | null
    long: number | null
  }

  export type GoogleLatLongTaskMinAggregateOutputType = {
    id: number | null
    businessName: string | null
    address: string | null
    lat: number | null
    long: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleLatLongTaskMaxAggregateOutputType = {
    id: number | null
    businessName: string | null
    address: string | null
    lat: number | null
    long: number | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GoogleLatLongTaskCountAggregateOutputType = {
    id: number
    businessName: number
    address: number
    lat: number
    long: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GoogleLatLongTaskAvgAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type GoogleLatLongTaskSumAggregateInputType = {
    id?: true
    lat?: true
    long?: true
  }

  export type GoogleLatLongTaskMinAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    lat?: true
    long?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleLatLongTaskMaxAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    lat?: true
    long?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GoogleLatLongTaskCountAggregateInputType = {
    id?: true
    businessName?: true
    address?: true
    lat?: true
    long?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GoogleLatLongTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleLatLongTask to aggregate.
     */
    where?: GoogleLatLongTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleLatLongTasks to fetch.
     */
    orderBy?: GoogleLatLongTaskOrderByWithRelationInput | GoogleLatLongTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoogleLatLongTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleLatLongTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleLatLongTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoogleLatLongTasks
    **/
    _count?: true | GoogleLatLongTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoogleLatLongTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoogleLatLongTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoogleLatLongTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoogleLatLongTaskMaxAggregateInputType
  }

  export type GetGoogleLatLongTaskAggregateType<T extends GoogleLatLongTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateGoogleLatLongTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoogleLatLongTask[P]>
      : GetScalarType<T[P], AggregateGoogleLatLongTask[P]>
  }




  export type GoogleLatLongTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GoogleLatLongTaskWhereInput
    orderBy?: GoogleLatLongTaskOrderByWithAggregationInput | GoogleLatLongTaskOrderByWithAggregationInput[]
    by: GoogleLatLongTaskScalarFieldEnum[] | GoogleLatLongTaskScalarFieldEnum
    having?: GoogleLatLongTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoogleLatLongTaskCountAggregateInputType | true
    _avg?: GoogleLatLongTaskAvgAggregateInputType
    _sum?: GoogleLatLongTaskSumAggregateInputType
    _min?: GoogleLatLongTaskMinAggregateInputType
    _max?: GoogleLatLongTaskMaxAggregateInputType
  }

  export type GoogleLatLongTaskGroupByOutputType = {
    id: number
    businessName: string
    address: string
    lat: number
    long: number
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: GoogleLatLongTaskCountAggregateOutputType | null
    _avg: GoogleLatLongTaskAvgAggregateOutputType | null
    _sum: GoogleLatLongTaskSumAggregateOutputType | null
    _min: GoogleLatLongTaskMinAggregateOutputType | null
    _max: GoogleLatLongTaskMaxAggregateOutputType | null
  }

  type GetGoogleLatLongTaskGroupByPayload<T extends GoogleLatLongTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoogleLatLongTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoogleLatLongTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoogleLatLongTaskGroupByOutputType[P]>
            : GetScalarType<T[P], GoogleLatLongTaskGroupByOutputType[P]>
        }
      >
    >


  export type GoogleLatLongTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    businessName?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["googleLatLongTask"]>

  export type GoogleLatLongTaskSelectScalar = {
    id?: boolean
    businessName?: boolean
    address?: boolean
    lat?: boolean
    long?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $GoogleLatLongTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "GoogleLatLongTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      businessName: string
      address: string
      lat: number
      long: number
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["googleLatLongTask"]>
    composites: {}
  }


  type GoogleLatLongTaskGetPayload<S extends boolean | null | undefined | GoogleLatLongTaskDefaultArgs> = $Result.GetResult<Prisma.$GoogleLatLongTaskPayload, S>

  type GoogleLatLongTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GoogleLatLongTaskFindManyArgs, 'select' | 'include'> & {
      select?: GoogleLatLongTaskCountAggregateInputType | true
    }

  export interface GoogleLatLongTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoogleLatLongTask'], meta: { name: 'GoogleLatLongTask' } }
    /**
     * Find zero or one GoogleLatLongTask that matches the filter.
     * @param {GoogleLatLongTaskFindUniqueArgs} args - Arguments to find a GoogleLatLongTask
     * @example
     * // Get one GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GoogleLatLongTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GoogleLatLongTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GoogleLatLongTaskFindUniqueOrThrowArgs} args - Arguments to find a GoogleLatLongTask
     * @example
     * // Get one GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GoogleLatLongTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GoogleLatLongTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskFindFirstArgs} args - Arguments to find a GoogleLatLongTask
     * @example
     * // Get one GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GoogleLatLongTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskFindFirstArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GoogleLatLongTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskFindFirstOrThrowArgs} args - Arguments to find a GoogleLatLongTask
     * @example
     * // Get one GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GoogleLatLongTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GoogleLatLongTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoogleLatLongTasks
     * const googleLatLongTasks = await prisma.googleLatLongTask.findMany()
     * 
     * // Get first 10 GoogleLatLongTasks
     * const googleLatLongTasks = await prisma.googleLatLongTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const googleLatLongTaskWithIdOnly = await prisma.googleLatLongTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GoogleLatLongTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GoogleLatLongTask.
     * @param {GoogleLatLongTaskCreateArgs} args - Arguments to create a GoogleLatLongTask.
     * @example
     * // Create one GoogleLatLongTask
     * const GoogleLatLongTask = await prisma.googleLatLongTask.create({
     *   data: {
     *     // ... data to create a GoogleLatLongTask
     *   }
     * })
     * 
    **/
    create<T extends GoogleLatLongTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskCreateArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GoogleLatLongTasks.
     *     @param {GoogleLatLongTaskCreateManyArgs} args - Arguments to create many GoogleLatLongTasks.
     *     @example
     *     // Create many GoogleLatLongTasks
     *     const googleLatLongTask = await prisma.googleLatLongTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GoogleLatLongTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GoogleLatLongTask.
     * @param {GoogleLatLongTaskDeleteArgs} args - Arguments to delete one GoogleLatLongTask.
     * @example
     * // Delete one GoogleLatLongTask
     * const GoogleLatLongTask = await prisma.googleLatLongTask.delete({
     *   where: {
     *     // ... filter to delete one GoogleLatLongTask
     *   }
     * })
     * 
    **/
    delete<T extends GoogleLatLongTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskDeleteArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GoogleLatLongTask.
     * @param {GoogleLatLongTaskUpdateArgs} args - Arguments to update one GoogleLatLongTask.
     * @example
     * // Update one GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GoogleLatLongTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskUpdateArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GoogleLatLongTasks.
     * @param {GoogleLatLongTaskDeleteManyArgs} args - Arguments to filter GoogleLatLongTasks to delete.
     * @example
     * // Delete a few GoogleLatLongTasks
     * const { count } = await prisma.googleLatLongTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GoogleLatLongTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GoogleLatLongTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoogleLatLongTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoogleLatLongTasks
     * const googleLatLongTask = await prisma.googleLatLongTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GoogleLatLongTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GoogleLatLongTask.
     * @param {GoogleLatLongTaskUpsertArgs} args - Arguments to update or create a GoogleLatLongTask.
     * @example
     * // Update or create a GoogleLatLongTask
     * const googleLatLongTask = await prisma.googleLatLongTask.upsert({
     *   create: {
     *     // ... data to create a GoogleLatLongTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoogleLatLongTask we want to update
     *   }
     * })
    **/
    upsert<T extends GoogleLatLongTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GoogleLatLongTaskUpsertArgs<ExtArgs>>
    ): Prisma__GoogleLatLongTaskClient<$Result.GetResult<Prisma.$GoogleLatLongTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GoogleLatLongTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskCountArgs} args - Arguments to filter GoogleLatLongTasks to count.
     * @example
     * // Count the number of GoogleLatLongTasks
     * const count = await prisma.googleLatLongTask.count({
     *   where: {
     *     // ... the filter for the GoogleLatLongTasks we want to count
     *   }
     * })
    **/
    count<T extends GoogleLatLongTaskCountArgs>(
      args?: Subset<T, GoogleLatLongTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoogleLatLongTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoogleLatLongTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GoogleLatLongTaskAggregateArgs>(args: Subset<T, GoogleLatLongTaskAggregateArgs>): Prisma.PrismaPromise<GetGoogleLatLongTaskAggregateType<T>>

    /**
     * Group by GoogleLatLongTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoogleLatLongTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GoogleLatLongTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoogleLatLongTaskGroupByArgs['orderBy'] }
        : { orderBy?: GoogleLatLongTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GoogleLatLongTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoogleLatLongTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoogleLatLongTask model
   */
  readonly fields: GoogleLatLongTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoogleLatLongTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoogleLatLongTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GoogleLatLongTask model
   */ 
  interface GoogleLatLongTaskFieldRefs {
    readonly id: FieldRef<"GoogleLatLongTask", 'Int'>
    readonly businessName: FieldRef<"GoogleLatLongTask", 'String'>
    readonly address: FieldRef<"GoogleLatLongTask", 'String'>
    readonly lat: FieldRef<"GoogleLatLongTask", 'Float'>
    readonly long: FieldRef<"GoogleLatLongTask", 'Float'>
    readonly completed: FieldRef<"GoogleLatLongTask", 'Boolean'>
    readonly createdAt: FieldRef<"GoogleLatLongTask", 'DateTime'>
    readonly updatedAt: FieldRef<"GoogleLatLongTask", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * GoogleLatLongTask findUnique
   */
  export type GoogleLatLongTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter, which GoogleLatLongTask to fetch.
     */
    where: GoogleLatLongTaskWhereUniqueInput
  }


  /**
   * GoogleLatLongTask findUniqueOrThrow
   */
  export type GoogleLatLongTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter, which GoogleLatLongTask to fetch.
     */
    where: GoogleLatLongTaskWhereUniqueInput
  }


  /**
   * GoogleLatLongTask findFirst
   */
  export type GoogleLatLongTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter, which GoogleLatLongTask to fetch.
     */
    where?: GoogleLatLongTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleLatLongTasks to fetch.
     */
    orderBy?: GoogleLatLongTaskOrderByWithRelationInput | GoogleLatLongTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleLatLongTasks.
     */
    cursor?: GoogleLatLongTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleLatLongTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleLatLongTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleLatLongTasks.
     */
    distinct?: GoogleLatLongTaskScalarFieldEnum | GoogleLatLongTaskScalarFieldEnum[]
  }


  /**
   * GoogleLatLongTask findFirstOrThrow
   */
  export type GoogleLatLongTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter, which GoogleLatLongTask to fetch.
     */
    where?: GoogleLatLongTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleLatLongTasks to fetch.
     */
    orderBy?: GoogleLatLongTaskOrderByWithRelationInput | GoogleLatLongTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoogleLatLongTasks.
     */
    cursor?: GoogleLatLongTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleLatLongTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleLatLongTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoogleLatLongTasks.
     */
    distinct?: GoogleLatLongTaskScalarFieldEnum | GoogleLatLongTaskScalarFieldEnum[]
  }


  /**
   * GoogleLatLongTask findMany
   */
  export type GoogleLatLongTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter, which GoogleLatLongTasks to fetch.
     */
    where?: GoogleLatLongTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoogleLatLongTasks to fetch.
     */
    orderBy?: GoogleLatLongTaskOrderByWithRelationInput | GoogleLatLongTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoogleLatLongTasks.
     */
    cursor?: GoogleLatLongTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoogleLatLongTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoogleLatLongTasks.
     */
    skip?: number
    distinct?: GoogleLatLongTaskScalarFieldEnum | GoogleLatLongTaskScalarFieldEnum[]
  }


  /**
   * GoogleLatLongTask create
   */
  export type GoogleLatLongTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a GoogleLatLongTask.
     */
    data: XOR<GoogleLatLongTaskCreateInput, GoogleLatLongTaskUncheckedCreateInput>
  }


  /**
   * GoogleLatLongTask createMany
   */
  export type GoogleLatLongTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoogleLatLongTasks.
     */
    data: GoogleLatLongTaskCreateManyInput | GoogleLatLongTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GoogleLatLongTask update
   */
  export type GoogleLatLongTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a GoogleLatLongTask.
     */
    data: XOR<GoogleLatLongTaskUpdateInput, GoogleLatLongTaskUncheckedUpdateInput>
    /**
     * Choose, which GoogleLatLongTask to update.
     */
    where: GoogleLatLongTaskWhereUniqueInput
  }


  /**
   * GoogleLatLongTask updateMany
   */
  export type GoogleLatLongTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoogleLatLongTasks.
     */
    data: XOR<GoogleLatLongTaskUpdateManyMutationInput, GoogleLatLongTaskUncheckedUpdateManyInput>
    /**
     * Filter which GoogleLatLongTasks to update
     */
    where?: GoogleLatLongTaskWhereInput
  }


  /**
   * GoogleLatLongTask upsert
   */
  export type GoogleLatLongTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the GoogleLatLongTask to update in case it exists.
     */
    where: GoogleLatLongTaskWhereUniqueInput
    /**
     * In case the GoogleLatLongTask found by the `where` argument doesn't exist, create a new GoogleLatLongTask with this data.
     */
    create: XOR<GoogleLatLongTaskCreateInput, GoogleLatLongTaskUncheckedCreateInput>
    /**
     * In case the GoogleLatLongTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoogleLatLongTaskUpdateInput, GoogleLatLongTaskUncheckedUpdateInput>
  }


  /**
   * GoogleLatLongTask delete
   */
  export type GoogleLatLongTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
    /**
     * Filter which GoogleLatLongTask to delete.
     */
    where: GoogleLatLongTaskWhereUniqueInput
  }


  /**
   * GoogleLatLongTask deleteMany
   */
  export type GoogleLatLongTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoogleLatLongTasks to delete
     */
    where?: GoogleLatLongTaskWhereInput
  }


  /**
   * GoogleLatLongTask without action
   */
  export type GoogleLatLongTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoogleLatLongTask
     */
    select?: GoogleLatLongTaskSelect<ExtArgs> | null
  }



  /**
   * Model BusinessSiteTask
   */

  export type AggregateBusinessSiteTask = {
    _count: BusinessSiteTaskCountAggregateOutputType | null
    _avg: BusinessSiteTaskAvgAggregateOutputType | null
    _sum: BusinessSiteTaskSumAggregateOutputType | null
    _min: BusinessSiteTaskMinAggregateOutputType | null
    _max: BusinessSiteTaskMaxAggregateOutputType | null
  }

  export type BusinessSiteTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessSiteTaskSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessSiteTaskMinAggregateOutputType = {
    id: number | null
    website: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessSiteTaskMaxAggregateOutputType = {
    id: number | null
    website: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessSiteTaskCountAggregateOutputType = {
    id: number
    website: number
    links: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessSiteTaskAvgAggregateInputType = {
    id?: true
  }

  export type BusinessSiteTaskSumAggregateInputType = {
    id?: true
  }

  export type BusinessSiteTaskMinAggregateInputType = {
    id?: true
    website?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessSiteTaskMaxAggregateInputType = {
    id?: true
    website?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessSiteTaskCountAggregateInputType = {
    id?: true
    website?: true
    links?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessSiteTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessSiteTask to aggregate.
     */
    where?: BusinessSiteTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteTasks to fetch.
     */
    orderBy?: BusinessSiteTaskOrderByWithRelationInput | BusinessSiteTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessSiteTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessSiteTasks
    **/
    _count?: true | BusinessSiteTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessSiteTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSiteTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessSiteTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessSiteTaskMaxAggregateInputType
  }

  export type GetBusinessSiteTaskAggregateType<T extends BusinessSiteTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessSiteTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessSiteTask[P]>
      : GetScalarType<T[P], AggregateBusinessSiteTask[P]>
  }




  export type BusinessSiteTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BusinessSiteTaskWhereInput
    orderBy?: BusinessSiteTaskOrderByWithAggregationInput | BusinessSiteTaskOrderByWithAggregationInput[]
    by: BusinessSiteTaskScalarFieldEnum[] | BusinessSiteTaskScalarFieldEnum
    having?: BusinessSiteTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessSiteTaskCountAggregateInputType | true
    _avg?: BusinessSiteTaskAvgAggregateInputType
    _sum?: BusinessSiteTaskSumAggregateInputType
    _min?: BusinessSiteTaskMinAggregateInputType
    _max?: BusinessSiteTaskMaxAggregateInputType
  }

  export type BusinessSiteTaskGroupByOutputType = {
    id: number
    website: string
    links: string[]
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: BusinessSiteTaskCountAggregateOutputType | null
    _avg: BusinessSiteTaskAvgAggregateOutputType | null
    _sum: BusinessSiteTaskSumAggregateOutputType | null
    _min: BusinessSiteTaskMinAggregateOutputType | null
    _max: BusinessSiteTaskMaxAggregateOutputType | null
  }

  type GetBusinessSiteTaskGroupByPayload<T extends BusinessSiteTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessSiteTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessSiteTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessSiteTaskGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessSiteTaskGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSiteTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website?: boolean
    links?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessSiteTask"]>

  export type BusinessSiteTaskSelectScalar = {
    id?: boolean
    website?: boolean
    links?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BusinessSiteTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BusinessSiteTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      website: string
      links: string[]
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessSiteTask"]>
    composites: {}
  }


  type BusinessSiteTaskGetPayload<S extends boolean | null | undefined | BusinessSiteTaskDefaultArgs> = $Result.GetResult<Prisma.$BusinessSiteTaskPayload, S>

  type BusinessSiteTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BusinessSiteTaskFindManyArgs, 'select' | 'include'> & {
      select?: BusinessSiteTaskCountAggregateInputType | true
    }

  export interface BusinessSiteTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessSiteTask'], meta: { name: 'BusinessSiteTask' } }
    /**
     * Find zero or one BusinessSiteTask that matches the filter.
     * @param {BusinessSiteTaskFindUniqueArgs} args - Arguments to find a BusinessSiteTask
     * @example
     * // Get one BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessSiteTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BusinessSiteTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessSiteTaskFindUniqueOrThrowArgs} args - Arguments to find a BusinessSiteTask
     * @example
     * // Get one BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessSiteTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BusinessSiteTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskFindFirstArgs} args - Arguments to find a BusinessSiteTask
     * @example
     * // Get one BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessSiteTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskFindFirstArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BusinessSiteTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskFindFirstOrThrowArgs} args - Arguments to find a BusinessSiteTask
     * @example
     * // Get one BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessSiteTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BusinessSiteTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessSiteTasks
     * const businessSiteTasks = await prisma.businessSiteTask.findMany()
     * 
     * // Get first 10 BusinessSiteTasks
     * const businessSiteTasks = await prisma.businessSiteTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessSiteTaskWithIdOnly = await prisma.businessSiteTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessSiteTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BusinessSiteTask.
     * @param {BusinessSiteTaskCreateArgs} args - Arguments to create a BusinessSiteTask.
     * @example
     * // Create one BusinessSiteTask
     * const BusinessSiteTask = await prisma.businessSiteTask.create({
     *   data: {
     *     // ... data to create a BusinessSiteTask
     *   }
     * })
     * 
    **/
    create<T extends BusinessSiteTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskCreateArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BusinessSiteTasks.
     *     @param {BusinessSiteTaskCreateManyArgs} args - Arguments to create many BusinessSiteTasks.
     *     @example
     *     // Create many BusinessSiteTasks
     *     const businessSiteTask = await prisma.businessSiteTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessSiteTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessSiteTask.
     * @param {BusinessSiteTaskDeleteArgs} args - Arguments to delete one BusinessSiteTask.
     * @example
     * // Delete one BusinessSiteTask
     * const BusinessSiteTask = await prisma.businessSiteTask.delete({
     *   where: {
     *     // ... filter to delete one BusinessSiteTask
     *   }
     * })
     * 
    **/
    delete<T extends BusinessSiteTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskDeleteArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BusinessSiteTask.
     * @param {BusinessSiteTaskUpdateArgs} args - Arguments to update one BusinessSiteTask.
     * @example
     * // Update one BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessSiteTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskUpdateArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BusinessSiteTasks.
     * @param {BusinessSiteTaskDeleteManyArgs} args - Arguments to filter BusinessSiteTasks to delete.
     * @example
     * // Delete a few BusinessSiteTasks
     * const { count } = await prisma.businessSiteTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessSiteTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessSiteTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessSiteTasks
     * const businessSiteTask = await prisma.businessSiteTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessSiteTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessSiteTask.
     * @param {BusinessSiteTaskUpsertArgs} args - Arguments to update or create a BusinessSiteTask.
     * @example
     * // Update or create a BusinessSiteTask
     * const businessSiteTask = await prisma.businessSiteTask.upsert({
     *   create: {
     *     // ... data to create a BusinessSiteTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessSiteTask we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessSiteTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteTaskUpsertArgs<ExtArgs>>
    ): Prisma__BusinessSiteTaskClient<$Result.GetResult<Prisma.$BusinessSiteTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BusinessSiteTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskCountArgs} args - Arguments to filter BusinessSiteTasks to count.
     * @example
     * // Count the number of BusinessSiteTasks
     * const count = await prisma.businessSiteTask.count({
     *   where: {
     *     // ... the filter for the BusinessSiteTasks we want to count
     *   }
     * })
    **/
    count<T extends BusinessSiteTaskCountArgs>(
      args?: Subset<T, BusinessSiteTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessSiteTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessSiteTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessSiteTaskAggregateArgs>(args: Subset<T, BusinessSiteTaskAggregateArgs>): Prisma.PrismaPromise<GetBusinessSiteTaskAggregateType<T>>

    /**
     * Group by BusinessSiteTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessSiteTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessSiteTaskGroupByArgs['orderBy'] }
        : { orderBy?: BusinessSiteTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessSiteTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessSiteTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessSiteTask model
   */
  readonly fields: BusinessSiteTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessSiteTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessSiteTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BusinessSiteTask model
   */ 
  interface BusinessSiteTaskFieldRefs {
    readonly id: FieldRef<"BusinessSiteTask", 'Int'>
    readonly website: FieldRef<"BusinessSiteTask", 'String'>
    readonly links: FieldRef<"BusinessSiteTask", 'String[]'>
    readonly completed: FieldRef<"BusinessSiteTask", 'Boolean'>
    readonly createdAt: FieldRef<"BusinessSiteTask", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessSiteTask", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BusinessSiteTask findUnique
   */
  export type BusinessSiteTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteTask to fetch.
     */
    where: BusinessSiteTaskWhereUniqueInput
  }


  /**
   * BusinessSiteTask findUniqueOrThrow
   */
  export type BusinessSiteTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteTask to fetch.
     */
    where: BusinessSiteTaskWhereUniqueInput
  }


  /**
   * BusinessSiteTask findFirst
   */
  export type BusinessSiteTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteTask to fetch.
     */
    where?: BusinessSiteTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteTasks to fetch.
     */
    orderBy?: BusinessSiteTaskOrderByWithRelationInput | BusinessSiteTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessSiteTasks.
     */
    cursor?: BusinessSiteTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessSiteTasks.
     */
    distinct?: BusinessSiteTaskScalarFieldEnum | BusinessSiteTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteTask findFirstOrThrow
   */
  export type BusinessSiteTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteTask to fetch.
     */
    where?: BusinessSiteTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteTasks to fetch.
     */
    orderBy?: BusinessSiteTaskOrderByWithRelationInput | BusinessSiteTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessSiteTasks.
     */
    cursor?: BusinessSiteTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessSiteTasks.
     */
    distinct?: BusinessSiteTaskScalarFieldEnum | BusinessSiteTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteTask findMany
   */
  export type BusinessSiteTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteTasks to fetch.
     */
    where?: BusinessSiteTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteTasks to fetch.
     */
    orderBy?: BusinessSiteTaskOrderByWithRelationInput | BusinessSiteTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessSiteTasks.
     */
    cursor?: BusinessSiteTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteTasks.
     */
    skip?: number
    distinct?: BusinessSiteTaskScalarFieldEnum | BusinessSiteTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteTask create
   */
  export type BusinessSiteTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a BusinessSiteTask.
     */
    data: XOR<BusinessSiteTaskCreateInput, BusinessSiteTaskUncheckedCreateInput>
  }


  /**
   * BusinessSiteTask createMany
   */
  export type BusinessSiteTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessSiteTasks.
     */
    data: BusinessSiteTaskCreateManyInput | BusinessSiteTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BusinessSiteTask update
   */
  export type BusinessSiteTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a BusinessSiteTask.
     */
    data: XOR<BusinessSiteTaskUpdateInput, BusinessSiteTaskUncheckedUpdateInput>
    /**
     * Choose, which BusinessSiteTask to update.
     */
    where: BusinessSiteTaskWhereUniqueInput
  }


  /**
   * BusinessSiteTask updateMany
   */
  export type BusinessSiteTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessSiteTasks.
     */
    data: XOR<BusinessSiteTaskUpdateManyMutationInput, BusinessSiteTaskUncheckedUpdateManyInput>
    /**
     * Filter which BusinessSiteTasks to update
     */
    where?: BusinessSiteTaskWhereInput
  }


  /**
   * BusinessSiteTask upsert
   */
  export type BusinessSiteTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the BusinessSiteTask to update in case it exists.
     */
    where: BusinessSiteTaskWhereUniqueInput
    /**
     * In case the BusinessSiteTask found by the `where` argument doesn't exist, create a new BusinessSiteTask with this data.
     */
    create: XOR<BusinessSiteTaskCreateInput, BusinessSiteTaskUncheckedCreateInput>
    /**
     * In case the BusinessSiteTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessSiteTaskUpdateInput, BusinessSiteTaskUncheckedUpdateInput>
  }


  /**
   * BusinessSiteTask delete
   */
  export type BusinessSiteTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
    /**
     * Filter which BusinessSiteTask to delete.
     */
    where: BusinessSiteTaskWhereUniqueInput
  }


  /**
   * BusinessSiteTask deleteMany
   */
  export type BusinessSiteTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessSiteTasks to delete
     */
    where?: BusinessSiteTaskWhereInput
  }


  /**
   * BusinessSiteTask without action
   */
  export type BusinessSiteTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteTask
     */
    select?: BusinessSiteTaskSelect<ExtArgs> | null
  }



  /**
   * Model BusinessSiteDataTask
   */

  export type AggregateBusinessSiteDataTask = {
    _count: BusinessSiteDataTaskCountAggregateOutputType | null
    _avg: BusinessSiteDataTaskAvgAggregateOutputType | null
    _sum: BusinessSiteDataTaskSumAggregateOutputType | null
    _min: BusinessSiteDataTaskMinAggregateOutputType | null
    _max: BusinessSiteDataTaskMaxAggregateOutputType | null
  }

  export type BusinessSiteDataTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessSiteDataTaskSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessSiteDataTaskMinAggregateOutputType = {
    id: number | null
    website: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessSiteDataTaskMaxAggregateOutputType = {
    id: number | null
    website: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusinessSiteDataTaskCountAggregateOutputType = {
    id: number
    website: number
    texts: number
    images: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusinessSiteDataTaskAvgAggregateInputType = {
    id?: true
  }

  export type BusinessSiteDataTaskSumAggregateInputType = {
    id?: true
  }

  export type BusinessSiteDataTaskMinAggregateInputType = {
    id?: true
    website?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessSiteDataTaskMaxAggregateInputType = {
    id?: true
    website?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusinessSiteDataTaskCountAggregateInputType = {
    id?: true
    website?: true
    texts?: true
    images?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusinessSiteDataTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessSiteDataTask to aggregate.
     */
    where?: BusinessSiteDataTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteDataTasks to fetch.
     */
    orderBy?: BusinessSiteDataTaskOrderByWithRelationInput | BusinessSiteDataTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessSiteDataTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteDataTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteDataTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BusinessSiteDataTasks
    **/
    _count?: true | BusinessSiteDataTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessSiteDataTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSiteDataTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessSiteDataTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessSiteDataTaskMaxAggregateInputType
  }

  export type GetBusinessSiteDataTaskAggregateType<T extends BusinessSiteDataTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateBusinessSiteDataTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusinessSiteDataTask[P]>
      : GetScalarType<T[P], AggregateBusinessSiteDataTask[P]>
  }




  export type BusinessSiteDataTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BusinessSiteDataTaskWhereInput
    orderBy?: BusinessSiteDataTaskOrderByWithAggregationInput | BusinessSiteDataTaskOrderByWithAggregationInput[]
    by: BusinessSiteDataTaskScalarFieldEnum[] | BusinessSiteDataTaskScalarFieldEnum
    having?: BusinessSiteDataTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessSiteDataTaskCountAggregateInputType | true
    _avg?: BusinessSiteDataTaskAvgAggregateInputType
    _sum?: BusinessSiteDataTaskSumAggregateInputType
    _min?: BusinessSiteDataTaskMinAggregateInputType
    _max?: BusinessSiteDataTaskMaxAggregateInputType
  }

  export type BusinessSiteDataTaskGroupByOutputType = {
    id: number
    website: string
    texts: string[]
    images: string[]
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: BusinessSiteDataTaskCountAggregateOutputType | null
    _avg: BusinessSiteDataTaskAvgAggregateOutputType | null
    _sum: BusinessSiteDataTaskSumAggregateOutputType | null
    _min: BusinessSiteDataTaskMinAggregateOutputType | null
    _max: BusinessSiteDataTaskMaxAggregateOutputType | null
  }

  type GetBusinessSiteDataTaskGroupByPayload<T extends BusinessSiteDataTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessSiteDataTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessSiteDataTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessSiteDataTaskGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessSiteDataTaskGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSiteDataTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website?: boolean
    texts?: boolean
    images?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["businessSiteDataTask"]>

  export type BusinessSiteDataTaskSelectScalar = {
    id?: boolean
    website?: boolean
    texts?: boolean
    images?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $BusinessSiteDataTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BusinessSiteDataTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      website: string
      texts: string[]
      images: string[]
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["businessSiteDataTask"]>
    composites: {}
  }


  type BusinessSiteDataTaskGetPayload<S extends boolean | null | undefined | BusinessSiteDataTaskDefaultArgs> = $Result.GetResult<Prisma.$BusinessSiteDataTaskPayload, S>

  type BusinessSiteDataTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BusinessSiteDataTaskFindManyArgs, 'select' | 'include'> & {
      select?: BusinessSiteDataTaskCountAggregateInputType | true
    }

  export interface BusinessSiteDataTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BusinessSiteDataTask'], meta: { name: 'BusinessSiteDataTask' } }
    /**
     * Find zero or one BusinessSiteDataTask that matches the filter.
     * @param {BusinessSiteDataTaskFindUniqueArgs} args - Arguments to find a BusinessSiteDataTask
     * @example
     * // Get one BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BusinessSiteDataTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BusinessSiteDataTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BusinessSiteDataTaskFindUniqueOrThrowArgs} args - Arguments to find a BusinessSiteDataTask
     * @example
     * // Get one BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BusinessSiteDataTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BusinessSiteDataTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskFindFirstArgs} args - Arguments to find a BusinessSiteDataTask
     * @example
     * // Get one BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BusinessSiteDataTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskFindFirstArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BusinessSiteDataTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskFindFirstOrThrowArgs} args - Arguments to find a BusinessSiteDataTask
     * @example
     * // Get one BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BusinessSiteDataTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BusinessSiteDataTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BusinessSiteDataTasks
     * const businessSiteDataTasks = await prisma.businessSiteDataTask.findMany()
     * 
     * // Get first 10 BusinessSiteDataTasks
     * const businessSiteDataTasks = await prisma.businessSiteDataTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessSiteDataTaskWithIdOnly = await prisma.businessSiteDataTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BusinessSiteDataTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BusinessSiteDataTask.
     * @param {BusinessSiteDataTaskCreateArgs} args - Arguments to create a BusinessSiteDataTask.
     * @example
     * // Create one BusinessSiteDataTask
     * const BusinessSiteDataTask = await prisma.businessSiteDataTask.create({
     *   data: {
     *     // ... data to create a BusinessSiteDataTask
     *   }
     * })
     * 
    **/
    create<T extends BusinessSiteDataTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskCreateArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BusinessSiteDataTasks.
     *     @param {BusinessSiteDataTaskCreateManyArgs} args - Arguments to create many BusinessSiteDataTasks.
     *     @example
     *     // Create many BusinessSiteDataTasks
     *     const businessSiteDataTask = await prisma.businessSiteDataTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BusinessSiteDataTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BusinessSiteDataTask.
     * @param {BusinessSiteDataTaskDeleteArgs} args - Arguments to delete one BusinessSiteDataTask.
     * @example
     * // Delete one BusinessSiteDataTask
     * const BusinessSiteDataTask = await prisma.businessSiteDataTask.delete({
     *   where: {
     *     // ... filter to delete one BusinessSiteDataTask
     *   }
     * })
     * 
    **/
    delete<T extends BusinessSiteDataTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskDeleteArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BusinessSiteDataTask.
     * @param {BusinessSiteDataTaskUpdateArgs} args - Arguments to update one BusinessSiteDataTask.
     * @example
     * // Update one BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BusinessSiteDataTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskUpdateArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BusinessSiteDataTasks.
     * @param {BusinessSiteDataTaskDeleteManyArgs} args - Arguments to filter BusinessSiteDataTasks to delete.
     * @example
     * // Delete a few BusinessSiteDataTasks
     * const { count } = await prisma.businessSiteDataTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BusinessSiteDataTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BusinessSiteDataTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BusinessSiteDataTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BusinessSiteDataTasks
     * const businessSiteDataTask = await prisma.businessSiteDataTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BusinessSiteDataTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BusinessSiteDataTask.
     * @param {BusinessSiteDataTaskUpsertArgs} args - Arguments to update or create a BusinessSiteDataTask.
     * @example
     * // Update or create a BusinessSiteDataTask
     * const businessSiteDataTask = await prisma.businessSiteDataTask.upsert({
     *   create: {
     *     // ... data to create a BusinessSiteDataTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BusinessSiteDataTask we want to update
     *   }
     * })
    **/
    upsert<T extends BusinessSiteDataTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BusinessSiteDataTaskUpsertArgs<ExtArgs>>
    ): Prisma__BusinessSiteDataTaskClient<$Result.GetResult<Prisma.$BusinessSiteDataTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BusinessSiteDataTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskCountArgs} args - Arguments to filter BusinessSiteDataTasks to count.
     * @example
     * // Count the number of BusinessSiteDataTasks
     * const count = await prisma.businessSiteDataTask.count({
     *   where: {
     *     // ... the filter for the BusinessSiteDataTasks we want to count
     *   }
     * })
    **/
    count<T extends BusinessSiteDataTaskCountArgs>(
      args?: Subset<T, BusinessSiteDataTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessSiteDataTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BusinessSiteDataTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusinessSiteDataTaskAggregateArgs>(args: Subset<T, BusinessSiteDataTaskAggregateArgs>): Prisma.PrismaPromise<GetBusinessSiteDataTaskAggregateType<T>>

    /**
     * Group by BusinessSiteDataTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessSiteDataTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusinessSiteDataTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessSiteDataTaskGroupByArgs['orderBy'] }
        : { orderBy?: BusinessSiteDataTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusinessSiteDataTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessSiteDataTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BusinessSiteDataTask model
   */
  readonly fields: BusinessSiteDataTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BusinessSiteDataTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessSiteDataTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BusinessSiteDataTask model
   */ 
  interface BusinessSiteDataTaskFieldRefs {
    readonly id: FieldRef<"BusinessSiteDataTask", 'Int'>
    readonly website: FieldRef<"BusinessSiteDataTask", 'String'>
    readonly texts: FieldRef<"BusinessSiteDataTask", 'String[]'>
    readonly images: FieldRef<"BusinessSiteDataTask", 'String[]'>
    readonly completed: FieldRef<"BusinessSiteDataTask", 'Boolean'>
    readonly createdAt: FieldRef<"BusinessSiteDataTask", 'DateTime'>
    readonly updatedAt: FieldRef<"BusinessSiteDataTask", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * BusinessSiteDataTask findUnique
   */
  export type BusinessSiteDataTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteDataTask to fetch.
     */
    where: BusinessSiteDataTaskWhereUniqueInput
  }


  /**
   * BusinessSiteDataTask findUniqueOrThrow
   */
  export type BusinessSiteDataTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteDataTask to fetch.
     */
    where: BusinessSiteDataTaskWhereUniqueInput
  }


  /**
   * BusinessSiteDataTask findFirst
   */
  export type BusinessSiteDataTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteDataTask to fetch.
     */
    where?: BusinessSiteDataTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteDataTasks to fetch.
     */
    orderBy?: BusinessSiteDataTaskOrderByWithRelationInput | BusinessSiteDataTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessSiteDataTasks.
     */
    cursor?: BusinessSiteDataTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteDataTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteDataTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessSiteDataTasks.
     */
    distinct?: BusinessSiteDataTaskScalarFieldEnum | BusinessSiteDataTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteDataTask findFirstOrThrow
   */
  export type BusinessSiteDataTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteDataTask to fetch.
     */
    where?: BusinessSiteDataTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteDataTasks to fetch.
     */
    orderBy?: BusinessSiteDataTaskOrderByWithRelationInput | BusinessSiteDataTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BusinessSiteDataTasks.
     */
    cursor?: BusinessSiteDataTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteDataTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteDataTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BusinessSiteDataTasks.
     */
    distinct?: BusinessSiteDataTaskScalarFieldEnum | BusinessSiteDataTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteDataTask findMany
   */
  export type BusinessSiteDataTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter, which BusinessSiteDataTasks to fetch.
     */
    where?: BusinessSiteDataTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BusinessSiteDataTasks to fetch.
     */
    orderBy?: BusinessSiteDataTaskOrderByWithRelationInput | BusinessSiteDataTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BusinessSiteDataTasks.
     */
    cursor?: BusinessSiteDataTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BusinessSiteDataTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BusinessSiteDataTasks.
     */
    skip?: number
    distinct?: BusinessSiteDataTaskScalarFieldEnum | BusinessSiteDataTaskScalarFieldEnum[]
  }


  /**
   * BusinessSiteDataTask create
   */
  export type BusinessSiteDataTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a BusinessSiteDataTask.
     */
    data: XOR<BusinessSiteDataTaskCreateInput, BusinessSiteDataTaskUncheckedCreateInput>
  }


  /**
   * BusinessSiteDataTask createMany
   */
  export type BusinessSiteDataTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BusinessSiteDataTasks.
     */
    data: BusinessSiteDataTaskCreateManyInput | BusinessSiteDataTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BusinessSiteDataTask update
   */
  export type BusinessSiteDataTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a BusinessSiteDataTask.
     */
    data: XOR<BusinessSiteDataTaskUpdateInput, BusinessSiteDataTaskUncheckedUpdateInput>
    /**
     * Choose, which BusinessSiteDataTask to update.
     */
    where: BusinessSiteDataTaskWhereUniqueInput
  }


  /**
   * BusinessSiteDataTask updateMany
   */
  export type BusinessSiteDataTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BusinessSiteDataTasks.
     */
    data: XOR<BusinessSiteDataTaskUpdateManyMutationInput, BusinessSiteDataTaskUncheckedUpdateManyInput>
    /**
     * Filter which BusinessSiteDataTasks to update
     */
    where?: BusinessSiteDataTaskWhereInput
  }


  /**
   * BusinessSiteDataTask upsert
   */
  export type BusinessSiteDataTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the BusinessSiteDataTask to update in case it exists.
     */
    where: BusinessSiteDataTaskWhereUniqueInput
    /**
     * In case the BusinessSiteDataTask found by the `where` argument doesn't exist, create a new BusinessSiteDataTask with this data.
     */
    create: XOR<BusinessSiteDataTaskCreateInput, BusinessSiteDataTaskUncheckedCreateInput>
    /**
     * In case the BusinessSiteDataTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessSiteDataTaskUpdateInput, BusinessSiteDataTaskUncheckedUpdateInput>
  }


  /**
   * BusinessSiteDataTask delete
   */
  export type BusinessSiteDataTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
    /**
     * Filter which BusinessSiteDataTask to delete.
     */
    where: BusinessSiteDataTaskWhereUniqueInput
  }


  /**
   * BusinessSiteDataTask deleteMany
   */
  export type BusinessSiteDataTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BusinessSiteDataTasks to delete
     */
    where?: BusinessSiteDataTaskWhereInput
  }


  /**
   * BusinessSiteDataTask without action
   */
  export type BusinessSiteDataTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessSiteDataTask
     */
    select?: BusinessSiteDataTaskSelect<ExtArgs> | null
  }



  /**
   * Model ChatGptTask
   */

  export type AggregateChatGptTask = {
    _count: ChatGptTaskCountAggregateOutputType | null
    _avg: ChatGptTaskAvgAggregateOutputType | null
    _sum: ChatGptTaskSumAggregateOutputType | null
    _min: ChatGptTaskMinAggregateOutputType | null
    _max: ChatGptTaskMaxAggregateOutputType | null
  }

  export type ChatGptTaskAvgAggregateOutputType = {
    id: number | null
  }

  export type ChatGptTaskSumAggregateOutputType = {
    id: number | null
  }

  export type ChatGptTaskMinAggregateOutputType = {
    id: number | null
    domain: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGptTaskMaxAggregateOutputType = {
    id: number | null
    domain: string | null
    completed: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatGptTaskCountAggregateOutputType = {
    id: number
    domain: number
    result: number
    completed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatGptTaskAvgAggregateInputType = {
    id?: true
  }

  export type ChatGptTaskSumAggregateInputType = {
    id?: true
  }

  export type ChatGptTaskMinAggregateInputType = {
    id?: true
    domain?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGptTaskMaxAggregateInputType = {
    id?: true
    domain?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatGptTaskCountAggregateInputType = {
    id?: true
    domain?: true
    result?: true
    completed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatGptTaskAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGptTask to aggregate.
     */
    where?: ChatGptTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGptTasks to fetch.
     */
    orderBy?: ChatGptTaskOrderByWithRelationInput | ChatGptTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatGptTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGptTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGptTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatGptTasks
    **/
    _count?: true | ChatGptTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChatGptTaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChatGptTaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatGptTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatGptTaskMaxAggregateInputType
  }

  export type GetChatGptTaskAggregateType<T extends ChatGptTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateChatGptTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatGptTask[P]>
      : GetScalarType<T[P], AggregateChatGptTask[P]>
  }




  export type ChatGptTaskGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ChatGptTaskWhereInput
    orderBy?: ChatGptTaskOrderByWithAggregationInput | ChatGptTaskOrderByWithAggregationInput[]
    by: ChatGptTaskScalarFieldEnum[] | ChatGptTaskScalarFieldEnum
    having?: ChatGptTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatGptTaskCountAggregateInputType | true
    _avg?: ChatGptTaskAvgAggregateInputType
    _sum?: ChatGptTaskSumAggregateInputType
    _min?: ChatGptTaskMinAggregateInputType
    _max?: ChatGptTaskMaxAggregateInputType
  }

  export type ChatGptTaskGroupByOutputType = {
    id: number
    domain: string
    result: JsonValue
    completed: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChatGptTaskCountAggregateOutputType | null
    _avg: ChatGptTaskAvgAggregateOutputType | null
    _sum: ChatGptTaskSumAggregateOutputType | null
    _min: ChatGptTaskMinAggregateOutputType | null
    _max: ChatGptTaskMaxAggregateOutputType | null
  }

  type GetChatGptTaskGroupByPayload<T extends ChatGptTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGptTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGptTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGptTaskGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGptTaskGroupByOutputType[P]>
        }
      >
    >


  export type ChatGptTaskSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    domain?: boolean
    result?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["chatGptTask"]>

  export type ChatGptTaskSelectScalar = {
    id?: boolean
    domain?: boolean
    result?: boolean
    completed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ChatGptTaskPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ChatGptTask"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      domain: string
      result: Prisma.JsonValue
      completed: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chatGptTask"]>
    composites: {}
  }


  type ChatGptTaskGetPayload<S extends boolean | null | undefined | ChatGptTaskDefaultArgs> = $Result.GetResult<Prisma.$ChatGptTaskPayload, S>

  type ChatGptTaskCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ChatGptTaskFindManyArgs, 'select' | 'include'> & {
      select?: ChatGptTaskCountAggregateInputType | true
    }

  export interface ChatGptTaskDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatGptTask'], meta: { name: 'ChatGptTask' } }
    /**
     * Find zero or one ChatGptTask that matches the filter.
     * @param {ChatGptTaskFindUniqueArgs} args - Arguments to find a ChatGptTask
     * @example
     * // Get one ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChatGptTaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskFindUniqueArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ChatGptTask that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChatGptTaskFindUniqueOrThrowArgs} args - Arguments to find a ChatGptTask
     * @example
     * // Get one ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChatGptTaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ChatGptTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskFindFirstArgs} args - Arguments to find a ChatGptTask
     * @example
     * // Get one ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChatGptTaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskFindFirstArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ChatGptTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskFindFirstOrThrowArgs} args - Arguments to find a ChatGptTask
     * @example
     * // Get one ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChatGptTaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ChatGptTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatGptTasks
     * const chatGptTasks = await prisma.chatGptTask.findMany()
     * 
     * // Get first 10 ChatGptTasks
     * const chatGptTasks = await prisma.chatGptTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatGptTaskWithIdOnly = await prisma.chatGptTask.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChatGptTaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ChatGptTask.
     * @param {ChatGptTaskCreateArgs} args - Arguments to create a ChatGptTask.
     * @example
     * // Create one ChatGptTask
     * const ChatGptTask = await prisma.chatGptTask.create({
     *   data: {
     *     // ... data to create a ChatGptTask
     *   }
     * })
     * 
    **/
    create<T extends ChatGptTaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskCreateArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ChatGptTasks.
     *     @param {ChatGptTaskCreateManyArgs} args - Arguments to create many ChatGptTasks.
     *     @example
     *     // Create many ChatGptTasks
     *     const chatGptTask = await prisma.chatGptTask.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChatGptTaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ChatGptTask.
     * @param {ChatGptTaskDeleteArgs} args - Arguments to delete one ChatGptTask.
     * @example
     * // Delete one ChatGptTask
     * const ChatGptTask = await prisma.chatGptTask.delete({
     *   where: {
     *     // ... filter to delete one ChatGptTask
     *   }
     * })
     * 
    **/
    delete<T extends ChatGptTaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskDeleteArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ChatGptTask.
     * @param {ChatGptTaskUpdateArgs} args - Arguments to update one ChatGptTask.
     * @example
     * // Update one ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChatGptTaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskUpdateArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ChatGptTasks.
     * @param {ChatGptTaskDeleteManyArgs} args - Arguments to filter ChatGptTasks to delete.
     * @example
     * // Delete a few ChatGptTasks
     * const { count } = await prisma.chatGptTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChatGptTaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ChatGptTaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatGptTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatGptTasks
     * const chatGptTask = await prisma.chatGptTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChatGptTaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatGptTask.
     * @param {ChatGptTaskUpsertArgs} args - Arguments to update or create a ChatGptTask.
     * @example
     * // Update or create a ChatGptTask
     * const chatGptTask = await prisma.chatGptTask.upsert({
     *   create: {
     *     // ... data to create a ChatGptTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatGptTask we want to update
     *   }
     * })
    **/
    upsert<T extends ChatGptTaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ChatGptTaskUpsertArgs<ExtArgs>>
    ): Prisma__ChatGptTaskClient<$Result.GetResult<Prisma.$ChatGptTaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ChatGptTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskCountArgs} args - Arguments to filter ChatGptTasks to count.
     * @example
     * // Count the number of ChatGptTasks
     * const count = await prisma.chatGptTask.count({
     *   where: {
     *     // ... the filter for the ChatGptTasks we want to count
     *   }
     * })
    **/
    count<T extends ChatGptTaskCountArgs>(
      args?: Subset<T, ChatGptTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatGptTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatGptTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatGptTaskAggregateArgs>(args: Subset<T, ChatGptTaskAggregateArgs>): Prisma.PrismaPromise<GetChatGptTaskAggregateType<T>>

    /**
     * Group by ChatGptTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGptTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGptTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGptTaskGroupByArgs['orderBy'] }
        : { orderBy?: ChatGptTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGptTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGptTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatGptTask model
   */
  readonly fields: ChatGptTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatGptTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatGptTaskClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ChatGptTask model
   */ 
  interface ChatGptTaskFieldRefs {
    readonly id: FieldRef<"ChatGptTask", 'Int'>
    readonly domain: FieldRef<"ChatGptTask", 'String'>
    readonly result: FieldRef<"ChatGptTask", 'Json'>
    readonly completed: FieldRef<"ChatGptTask", 'Boolean'>
    readonly createdAt: FieldRef<"ChatGptTask", 'DateTime'>
    readonly updatedAt: FieldRef<"ChatGptTask", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ChatGptTask findUnique
   */
  export type ChatGptTaskFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter, which ChatGptTask to fetch.
     */
    where: ChatGptTaskWhereUniqueInput
  }


  /**
   * ChatGptTask findUniqueOrThrow
   */
  export type ChatGptTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter, which ChatGptTask to fetch.
     */
    where: ChatGptTaskWhereUniqueInput
  }


  /**
   * ChatGptTask findFirst
   */
  export type ChatGptTaskFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter, which ChatGptTask to fetch.
     */
    where?: ChatGptTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGptTasks to fetch.
     */
    orderBy?: ChatGptTaskOrderByWithRelationInput | ChatGptTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGptTasks.
     */
    cursor?: ChatGptTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGptTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGptTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGptTasks.
     */
    distinct?: ChatGptTaskScalarFieldEnum | ChatGptTaskScalarFieldEnum[]
  }


  /**
   * ChatGptTask findFirstOrThrow
   */
  export type ChatGptTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter, which ChatGptTask to fetch.
     */
    where?: ChatGptTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGptTasks to fetch.
     */
    orderBy?: ChatGptTaskOrderByWithRelationInput | ChatGptTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatGptTasks.
     */
    cursor?: ChatGptTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGptTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGptTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatGptTasks.
     */
    distinct?: ChatGptTaskScalarFieldEnum | ChatGptTaskScalarFieldEnum[]
  }


  /**
   * ChatGptTask findMany
   */
  export type ChatGptTaskFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter, which ChatGptTasks to fetch.
     */
    where?: ChatGptTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatGptTasks to fetch.
     */
    orderBy?: ChatGptTaskOrderByWithRelationInput | ChatGptTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatGptTasks.
     */
    cursor?: ChatGptTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatGptTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatGptTasks.
     */
    skip?: number
    distinct?: ChatGptTaskScalarFieldEnum | ChatGptTaskScalarFieldEnum[]
  }


  /**
   * ChatGptTask create
   */
  export type ChatGptTaskCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * The data needed to create a ChatGptTask.
     */
    data: XOR<ChatGptTaskCreateInput, ChatGptTaskUncheckedCreateInput>
  }


  /**
   * ChatGptTask createMany
   */
  export type ChatGptTaskCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatGptTasks.
     */
    data: ChatGptTaskCreateManyInput | ChatGptTaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ChatGptTask update
   */
  export type ChatGptTaskUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * The data needed to update a ChatGptTask.
     */
    data: XOR<ChatGptTaskUpdateInput, ChatGptTaskUncheckedUpdateInput>
    /**
     * Choose, which ChatGptTask to update.
     */
    where: ChatGptTaskWhereUniqueInput
  }


  /**
   * ChatGptTask updateMany
   */
  export type ChatGptTaskUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatGptTasks.
     */
    data: XOR<ChatGptTaskUpdateManyMutationInput, ChatGptTaskUncheckedUpdateManyInput>
    /**
     * Filter which ChatGptTasks to update
     */
    where?: ChatGptTaskWhereInput
  }


  /**
   * ChatGptTask upsert
   */
  export type ChatGptTaskUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * The filter to search for the ChatGptTask to update in case it exists.
     */
    where: ChatGptTaskWhereUniqueInput
    /**
     * In case the ChatGptTask found by the `where` argument doesn't exist, create a new ChatGptTask with this data.
     */
    create: XOR<ChatGptTaskCreateInput, ChatGptTaskUncheckedCreateInput>
    /**
     * In case the ChatGptTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatGptTaskUpdateInput, ChatGptTaskUncheckedUpdateInput>
  }


  /**
   * ChatGptTask delete
   */
  export type ChatGptTaskDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
    /**
     * Filter which ChatGptTask to delete.
     */
    where: ChatGptTaskWhereUniqueInput
  }


  /**
   * ChatGptTask deleteMany
   */
  export type ChatGptTaskDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatGptTasks to delete
     */
    where?: ChatGptTaskWhereInput
  }


  /**
   * ChatGptTask without action
   */
  export type ChatGptTaskDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatGptTask
     */
    select?: ChatGptTaskSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const YelpListPageTaskScalarFieldEnum: {
    id: 'id',
    city: 'city',
    url: 'url',
    page: 'page',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    links: 'links'
  };

  export type YelpListPageTaskScalarFieldEnum = (typeof YelpListPageTaskScalarFieldEnum)[keyof typeof YelpListPageTaskScalarFieldEnum]


  export const YelpProfilePageTaskScalarFieldEnum: {
    id: 'id',
    url: 'url',
    name: 'name',
    rating: 'rating',
    website: 'website',
    phone: 'phone',
    address: 'address',
    hours: 'hours',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YelpProfilePageTaskScalarFieldEnum = (typeof YelpProfilePageTaskScalarFieldEnum)[keyof typeof YelpProfilePageTaskScalarFieldEnum]


  export const GoogleLatLongTaskScalarFieldEnum: {
    id: 'id',
    businessName: 'businessName',
    address: 'address',
    lat: 'lat',
    long: 'long',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GoogleLatLongTaskScalarFieldEnum = (typeof GoogleLatLongTaskScalarFieldEnum)[keyof typeof GoogleLatLongTaskScalarFieldEnum]


  export const BusinessSiteTaskScalarFieldEnum: {
    id: 'id',
    website: 'website',
    links: 'links',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessSiteTaskScalarFieldEnum = (typeof BusinessSiteTaskScalarFieldEnum)[keyof typeof BusinessSiteTaskScalarFieldEnum]


  export const BusinessSiteDataTaskScalarFieldEnum: {
    id: 'id',
    website: 'website',
    texts: 'texts',
    images: 'images',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusinessSiteDataTaskScalarFieldEnum = (typeof BusinessSiteDataTaskScalarFieldEnum)[keyof typeof BusinessSiteDataTaskScalarFieldEnum]


  export const ChatGptTaskScalarFieldEnum: {
    id: 'id',
    domain: 'domain',
    result: 'result',
    completed: 'completed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatGptTaskScalarFieldEnum = (typeof ChatGptTaskScalarFieldEnum)[keyof typeof ChatGptTaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type YelpListPageTaskWhereInput = {
    AND?: YelpListPageTaskWhereInput | YelpListPageTaskWhereInput[]
    OR?: YelpListPageTaskWhereInput[]
    NOT?: YelpListPageTaskWhereInput | YelpListPageTaskWhereInput[]
    id?: IntFilter<"YelpListPageTask"> | number
    city?: StringFilter<"YelpListPageTask"> | string
    url?: StringFilter<"YelpListPageTask"> | string
    page?: IntFilter<"YelpListPageTask"> | number
    completed?: BoolFilter<"YelpListPageTask"> | boolean
    createdAt?: DateTimeFilter<"YelpListPageTask"> | Date | string
    updatedAt?: DateTimeFilter<"YelpListPageTask"> | Date | string
    links?: StringNullableListFilter<"YelpListPageTask">
  }

  export type YelpListPageTaskOrderByWithRelationInput = {
    id?: SortOrder
    city?: SortOrder
    url?: SortOrder
    page?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    links?: SortOrder
  }

  export type YelpListPageTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: YelpListPageTaskWhereInput | YelpListPageTaskWhereInput[]
    OR?: YelpListPageTaskWhereInput[]
    NOT?: YelpListPageTaskWhereInput | YelpListPageTaskWhereInput[]
    city?: StringFilter<"YelpListPageTask"> | string
    page?: IntFilter<"YelpListPageTask"> | number
    completed?: BoolFilter<"YelpListPageTask"> | boolean
    createdAt?: DateTimeFilter<"YelpListPageTask"> | Date | string
    updatedAt?: DateTimeFilter<"YelpListPageTask"> | Date | string
    links?: StringNullableListFilter<"YelpListPageTask">
  }, "id" | "url">

  export type YelpListPageTaskOrderByWithAggregationInput = {
    id?: SortOrder
    city?: SortOrder
    url?: SortOrder
    page?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    links?: SortOrder
    _count?: YelpListPageTaskCountOrderByAggregateInput
    _avg?: YelpListPageTaskAvgOrderByAggregateInput
    _max?: YelpListPageTaskMaxOrderByAggregateInput
    _min?: YelpListPageTaskMinOrderByAggregateInput
    _sum?: YelpListPageTaskSumOrderByAggregateInput
  }

  export type YelpListPageTaskScalarWhereWithAggregatesInput = {
    AND?: YelpListPageTaskScalarWhereWithAggregatesInput | YelpListPageTaskScalarWhereWithAggregatesInput[]
    OR?: YelpListPageTaskScalarWhereWithAggregatesInput[]
    NOT?: YelpListPageTaskScalarWhereWithAggregatesInput | YelpListPageTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YelpListPageTask"> | number
    city?: StringWithAggregatesFilter<"YelpListPageTask"> | string
    url?: StringWithAggregatesFilter<"YelpListPageTask"> | string
    page?: IntWithAggregatesFilter<"YelpListPageTask"> | number
    completed?: BoolWithAggregatesFilter<"YelpListPageTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"YelpListPageTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YelpListPageTask"> | Date | string
    links?: StringNullableListFilter<"YelpListPageTask">
  }

  export type YelpProfilePageTaskWhereInput = {
    AND?: YelpProfilePageTaskWhereInput | YelpProfilePageTaskWhereInput[]
    OR?: YelpProfilePageTaskWhereInput[]
    NOT?: YelpProfilePageTaskWhereInput | YelpProfilePageTaskWhereInput[]
    id?: IntFilter<"YelpProfilePageTask"> | number
    url?: StringFilter<"YelpProfilePageTask"> | string
    name?: StringFilter<"YelpProfilePageTask"> | string
    rating?: StringFilter<"YelpProfilePageTask"> | string
    website?: StringFilter<"YelpProfilePageTask"> | string
    phone?: StringFilter<"YelpProfilePageTask"> | string
    address?: StringFilter<"YelpProfilePageTask"> | string
    hours?: JsonFilter<"YelpProfilePageTask">
    completed?: BoolFilter<"YelpProfilePageTask"> | boolean
    createdAt?: DateTimeFilter<"YelpProfilePageTask"> | Date | string
    updatedAt?: DateTimeFilter<"YelpProfilePageTask"> | Date | string
  }

  export type YelpProfilePageTaskOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpProfilePageTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: YelpProfilePageTaskWhereInput | YelpProfilePageTaskWhereInput[]
    OR?: YelpProfilePageTaskWhereInput[]
    NOT?: YelpProfilePageTaskWhereInput | YelpProfilePageTaskWhereInput[]
    name?: StringFilter<"YelpProfilePageTask"> | string
    rating?: StringFilter<"YelpProfilePageTask"> | string
    website?: StringFilter<"YelpProfilePageTask"> | string
    phone?: StringFilter<"YelpProfilePageTask"> | string
    address?: StringFilter<"YelpProfilePageTask"> | string
    hours?: JsonFilter<"YelpProfilePageTask">
    completed?: BoolFilter<"YelpProfilePageTask"> | boolean
    createdAt?: DateTimeFilter<"YelpProfilePageTask"> | Date | string
    updatedAt?: DateTimeFilter<"YelpProfilePageTask"> | Date | string
  }, "id" | "url">

  export type YelpProfilePageTaskOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YelpProfilePageTaskCountOrderByAggregateInput
    _avg?: YelpProfilePageTaskAvgOrderByAggregateInput
    _max?: YelpProfilePageTaskMaxOrderByAggregateInput
    _min?: YelpProfilePageTaskMinOrderByAggregateInput
    _sum?: YelpProfilePageTaskSumOrderByAggregateInput
  }

  export type YelpProfilePageTaskScalarWhereWithAggregatesInput = {
    AND?: YelpProfilePageTaskScalarWhereWithAggregatesInput | YelpProfilePageTaskScalarWhereWithAggregatesInput[]
    OR?: YelpProfilePageTaskScalarWhereWithAggregatesInput[]
    NOT?: YelpProfilePageTaskScalarWhereWithAggregatesInput | YelpProfilePageTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YelpProfilePageTask"> | number
    url?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    name?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    rating?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    website?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    phone?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    address?: StringWithAggregatesFilter<"YelpProfilePageTask"> | string
    hours?: JsonWithAggregatesFilter<"YelpProfilePageTask">
    completed?: BoolWithAggregatesFilter<"YelpProfilePageTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"YelpProfilePageTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YelpProfilePageTask"> | Date | string
  }

  export type GoogleLatLongTaskWhereInput = {
    AND?: GoogleLatLongTaskWhereInput | GoogleLatLongTaskWhereInput[]
    OR?: GoogleLatLongTaskWhereInput[]
    NOT?: GoogleLatLongTaskWhereInput | GoogleLatLongTaskWhereInput[]
    id?: IntFilter<"GoogleLatLongTask"> | number
    businessName?: StringFilter<"GoogleLatLongTask"> | string
    address?: StringFilter<"GoogleLatLongTask"> | string
    lat?: FloatFilter<"GoogleLatLongTask"> | number
    long?: FloatFilter<"GoogleLatLongTask"> | number
    completed?: BoolFilter<"GoogleLatLongTask"> | boolean
    createdAt?: DateTimeFilter<"GoogleLatLongTask"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleLatLongTask"> | Date | string
  }

  export type GoogleLatLongTaskOrderByWithRelationInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleLatLongTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    address?: string
    AND?: GoogleLatLongTaskWhereInput | GoogleLatLongTaskWhereInput[]
    OR?: GoogleLatLongTaskWhereInput[]
    NOT?: GoogleLatLongTaskWhereInput | GoogleLatLongTaskWhereInput[]
    businessName?: StringFilter<"GoogleLatLongTask"> | string
    lat?: FloatFilter<"GoogleLatLongTask"> | number
    long?: FloatFilter<"GoogleLatLongTask"> | number
    completed?: BoolFilter<"GoogleLatLongTask"> | boolean
    createdAt?: DateTimeFilter<"GoogleLatLongTask"> | Date | string
    updatedAt?: DateTimeFilter<"GoogleLatLongTask"> | Date | string
  }, "id" | "address">

  export type GoogleLatLongTaskOrderByWithAggregationInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GoogleLatLongTaskCountOrderByAggregateInput
    _avg?: GoogleLatLongTaskAvgOrderByAggregateInput
    _max?: GoogleLatLongTaskMaxOrderByAggregateInput
    _min?: GoogleLatLongTaskMinOrderByAggregateInput
    _sum?: GoogleLatLongTaskSumOrderByAggregateInput
  }

  export type GoogleLatLongTaskScalarWhereWithAggregatesInput = {
    AND?: GoogleLatLongTaskScalarWhereWithAggregatesInput | GoogleLatLongTaskScalarWhereWithAggregatesInput[]
    OR?: GoogleLatLongTaskScalarWhereWithAggregatesInput[]
    NOT?: GoogleLatLongTaskScalarWhereWithAggregatesInput | GoogleLatLongTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GoogleLatLongTask"> | number
    businessName?: StringWithAggregatesFilter<"GoogleLatLongTask"> | string
    address?: StringWithAggregatesFilter<"GoogleLatLongTask"> | string
    lat?: FloatWithAggregatesFilter<"GoogleLatLongTask"> | number
    long?: FloatWithAggregatesFilter<"GoogleLatLongTask"> | number
    completed?: BoolWithAggregatesFilter<"GoogleLatLongTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GoogleLatLongTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GoogleLatLongTask"> | Date | string
  }

  export type BusinessSiteTaskWhereInput = {
    AND?: BusinessSiteTaskWhereInput | BusinessSiteTaskWhereInput[]
    OR?: BusinessSiteTaskWhereInput[]
    NOT?: BusinessSiteTaskWhereInput | BusinessSiteTaskWhereInput[]
    id?: IntFilter<"BusinessSiteTask"> | number
    website?: StringFilter<"BusinessSiteTask"> | string
    links?: StringNullableListFilter<"BusinessSiteTask">
    completed?: BoolFilter<"BusinessSiteTask"> | boolean
    createdAt?: DateTimeFilter<"BusinessSiteTask"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessSiteTask"> | Date | string
  }

  export type BusinessSiteTaskOrderByWithRelationInput = {
    id?: SortOrder
    website?: SortOrder
    links?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    website?: string
    AND?: BusinessSiteTaskWhereInput | BusinessSiteTaskWhereInput[]
    OR?: BusinessSiteTaskWhereInput[]
    NOT?: BusinessSiteTaskWhereInput | BusinessSiteTaskWhereInput[]
    links?: StringNullableListFilter<"BusinessSiteTask">
    completed?: BoolFilter<"BusinessSiteTask"> | boolean
    createdAt?: DateTimeFilter<"BusinessSiteTask"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessSiteTask"> | Date | string
  }, "id" | "website">

  export type BusinessSiteTaskOrderByWithAggregationInput = {
    id?: SortOrder
    website?: SortOrder
    links?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessSiteTaskCountOrderByAggregateInput
    _avg?: BusinessSiteTaskAvgOrderByAggregateInput
    _max?: BusinessSiteTaskMaxOrderByAggregateInput
    _min?: BusinessSiteTaskMinOrderByAggregateInput
    _sum?: BusinessSiteTaskSumOrderByAggregateInput
  }

  export type BusinessSiteTaskScalarWhereWithAggregatesInput = {
    AND?: BusinessSiteTaskScalarWhereWithAggregatesInput | BusinessSiteTaskScalarWhereWithAggregatesInput[]
    OR?: BusinessSiteTaskScalarWhereWithAggregatesInput[]
    NOT?: BusinessSiteTaskScalarWhereWithAggregatesInput | BusinessSiteTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessSiteTask"> | number
    website?: StringWithAggregatesFilter<"BusinessSiteTask"> | string
    links?: StringNullableListFilter<"BusinessSiteTask">
    completed?: BoolWithAggregatesFilter<"BusinessSiteTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BusinessSiteTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessSiteTask"> | Date | string
  }

  export type BusinessSiteDataTaskWhereInput = {
    AND?: BusinessSiteDataTaskWhereInput | BusinessSiteDataTaskWhereInput[]
    OR?: BusinessSiteDataTaskWhereInput[]
    NOT?: BusinessSiteDataTaskWhereInput | BusinessSiteDataTaskWhereInput[]
    id?: IntFilter<"BusinessSiteDataTask"> | number
    website?: StringFilter<"BusinessSiteDataTask"> | string
    texts?: StringNullableListFilter<"BusinessSiteDataTask">
    images?: StringNullableListFilter<"BusinessSiteDataTask">
    completed?: BoolFilter<"BusinessSiteDataTask"> | boolean
    createdAt?: DateTimeFilter<"BusinessSiteDataTask"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessSiteDataTask"> | Date | string
  }

  export type BusinessSiteDataTaskOrderByWithRelationInput = {
    id?: SortOrder
    website?: SortOrder
    texts?: SortOrder
    images?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteDataTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    website?: string
    AND?: BusinessSiteDataTaskWhereInput | BusinessSiteDataTaskWhereInput[]
    OR?: BusinessSiteDataTaskWhereInput[]
    NOT?: BusinessSiteDataTaskWhereInput | BusinessSiteDataTaskWhereInput[]
    texts?: StringNullableListFilter<"BusinessSiteDataTask">
    images?: StringNullableListFilter<"BusinessSiteDataTask">
    completed?: BoolFilter<"BusinessSiteDataTask"> | boolean
    createdAt?: DateTimeFilter<"BusinessSiteDataTask"> | Date | string
    updatedAt?: DateTimeFilter<"BusinessSiteDataTask"> | Date | string
  }, "id" | "website">

  export type BusinessSiteDataTaskOrderByWithAggregationInput = {
    id?: SortOrder
    website?: SortOrder
    texts?: SortOrder
    images?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusinessSiteDataTaskCountOrderByAggregateInput
    _avg?: BusinessSiteDataTaskAvgOrderByAggregateInput
    _max?: BusinessSiteDataTaskMaxOrderByAggregateInput
    _min?: BusinessSiteDataTaskMinOrderByAggregateInput
    _sum?: BusinessSiteDataTaskSumOrderByAggregateInput
  }

  export type BusinessSiteDataTaskScalarWhereWithAggregatesInput = {
    AND?: BusinessSiteDataTaskScalarWhereWithAggregatesInput | BusinessSiteDataTaskScalarWhereWithAggregatesInput[]
    OR?: BusinessSiteDataTaskScalarWhereWithAggregatesInput[]
    NOT?: BusinessSiteDataTaskScalarWhereWithAggregatesInput | BusinessSiteDataTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BusinessSiteDataTask"> | number
    website?: StringWithAggregatesFilter<"BusinessSiteDataTask"> | string
    texts?: StringNullableListFilter<"BusinessSiteDataTask">
    images?: StringNullableListFilter<"BusinessSiteDataTask">
    completed?: BoolWithAggregatesFilter<"BusinessSiteDataTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"BusinessSiteDataTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BusinessSiteDataTask"> | Date | string
  }

  export type ChatGptTaskWhereInput = {
    AND?: ChatGptTaskWhereInput | ChatGptTaskWhereInput[]
    OR?: ChatGptTaskWhereInput[]
    NOT?: ChatGptTaskWhereInput | ChatGptTaskWhereInput[]
    id?: IntFilter<"ChatGptTask"> | number
    domain?: StringFilter<"ChatGptTask"> | string
    result?: JsonFilter<"ChatGptTask">
    completed?: BoolFilter<"ChatGptTask"> | boolean
    createdAt?: DateTimeFilter<"ChatGptTask"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGptTask"> | Date | string
  }

  export type ChatGptTaskOrderByWithRelationInput = {
    id?: SortOrder
    domain?: SortOrder
    result?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGptTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    domain?: string
    AND?: ChatGptTaskWhereInput | ChatGptTaskWhereInput[]
    OR?: ChatGptTaskWhereInput[]
    NOT?: ChatGptTaskWhereInput | ChatGptTaskWhereInput[]
    result?: JsonFilter<"ChatGptTask">
    completed?: BoolFilter<"ChatGptTask"> | boolean
    createdAt?: DateTimeFilter<"ChatGptTask"> | Date | string
    updatedAt?: DateTimeFilter<"ChatGptTask"> | Date | string
  }, "id" | "domain">

  export type ChatGptTaskOrderByWithAggregationInput = {
    id?: SortOrder
    domain?: SortOrder
    result?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatGptTaskCountOrderByAggregateInput
    _avg?: ChatGptTaskAvgOrderByAggregateInput
    _max?: ChatGptTaskMaxOrderByAggregateInput
    _min?: ChatGptTaskMinOrderByAggregateInput
    _sum?: ChatGptTaskSumOrderByAggregateInput
  }

  export type ChatGptTaskScalarWhereWithAggregatesInput = {
    AND?: ChatGptTaskScalarWhereWithAggregatesInput | ChatGptTaskScalarWhereWithAggregatesInput[]
    OR?: ChatGptTaskScalarWhereWithAggregatesInput[]
    NOT?: ChatGptTaskScalarWhereWithAggregatesInput | ChatGptTaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ChatGptTask"> | number
    domain?: StringWithAggregatesFilter<"ChatGptTask"> | string
    result?: JsonWithAggregatesFilter<"ChatGptTask">
    completed?: BoolWithAggregatesFilter<"ChatGptTask"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ChatGptTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChatGptTask"> | Date | string
  }

  export type YelpListPageTaskCreateInput = {
    city: string
    url: string
    page: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: YelpListPageTaskCreatelinksInput | string[]
  }

  export type YelpListPageTaskUncheckedCreateInput = {
    id?: number
    city: string
    url: string
    page: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: YelpListPageTaskCreatelinksInput | string[]
  }

  export type YelpListPageTaskUpdateInput = {
    city?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    page?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: YelpListPageTaskUpdatelinksInput | string[]
  }

  export type YelpListPageTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    page?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: YelpListPageTaskUpdatelinksInput | string[]
  }

  export type YelpListPageTaskCreateManyInput = {
    id?: number
    city: string
    url: string
    page: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    links?: YelpListPageTaskCreatelinksInput | string[]
  }

  export type YelpListPageTaskUpdateManyMutationInput = {
    city?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    page?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: YelpListPageTaskUpdatelinksInput | string[]
  }

  export type YelpListPageTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    city?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    page?: IntFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    links?: YelpListPageTaskUpdatelinksInput | string[]
  }

  export type YelpProfilePageTaskCreateInput = {
    url: string
    name: string
    rating: string
    website: string
    phone: string
    address: string
    hours: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YelpProfilePageTaskUncheckedCreateInput = {
    id?: number
    url: string
    name: string
    rating: string
    website: string
    phone: string
    address: string
    hours: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YelpProfilePageTaskUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YelpProfilePageTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YelpProfilePageTaskCreateManyInput = {
    id?: number
    url: string
    name: string
    rating: string
    website: string
    phone: string
    address: string
    hours: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YelpProfilePageTaskUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YelpProfilePageTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    hours?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleLatLongTaskCreateInput = {
    businessName: string
    address: string
    lat: number
    long: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleLatLongTaskUncheckedCreateInput = {
    id?: number
    businessName: string
    address: string
    lat: number
    long: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleLatLongTaskUpdateInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleLatLongTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleLatLongTaskCreateManyInput = {
    id?: number
    businessName: string
    address: string
    lat: number
    long: number
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GoogleLatLongTaskUpdateManyMutationInput = {
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoogleLatLongTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    businessName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    lat?: FloatFieldUpdateOperationsInput | number
    long?: FloatFieldUpdateOperationsInput | number
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteTaskCreateInput = {
    website: string
    links?: BusinessSiteTaskCreatelinksInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteTaskUncheckedCreateInput = {
    id?: number
    website: string
    links?: BusinessSiteTaskCreatelinksInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteTaskUpdateInput = {
    website?: StringFieldUpdateOperationsInput | string
    links?: BusinessSiteTaskUpdatelinksInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    links?: BusinessSiteTaskUpdatelinksInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteTaskCreateManyInput = {
    id?: number
    website: string
    links?: BusinessSiteTaskCreatelinksInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteTaskUpdateManyMutationInput = {
    website?: StringFieldUpdateOperationsInput | string
    links?: BusinessSiteTaskUpdatelinksInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    links?: BusinessSiteTaskUpdatelinksInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteDataTaskCreateInput = {
    website: string
    texts?: BusinessSiteDataTaskCreatetextsInput | string[]
    images?: BusinessSiteDataTaskCreateimagesInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteDataTaskUncheckedCreateInput = {
    id?: number
    website: string
    texts?: BusinessSiteDataTaskCreatetextsInput | string[]
    images?: BusinessSiteDataTaskCreateimagesInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteDataTaskUpdateInput = {
    website?: StringFieldUpdateOperationsInput | string
    texts?: BusinessSiteDataTaskUpdatetextsInput | string[]
    images?: BusinessSiteDataTaskUpdateimagesInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteDataTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    texts?: BusinessSiteDataTaskUpdatetextsInput | string[]
    images?: BusinessSiteDataTaskUpdateimagesInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteDataTaskCreateManyInput = {
    id?: number
    website: string
    texts?: BusinessSiteDataTaskCreatetextsInput | string[]
    images?: BusinessSiteDataTaskCreateimagesInput | string[]
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusinessSiteDataTaskUpdateManyMutationInput = {
    website?: StringFieldUpdateOperationsInput | string
    texts?: BusinessSiteDataTaskUpdatetextsInput | string[]
    images?: BusinessSiteDataTaskUpdateimagesInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessSiteDataTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    website?: StringFieldUpdateOperationsInput | string
    texts?: BusinessSiteDataTaskUpdatetextsInput | string[]
    images?: BusinessSiteDataTaskUpdateimagesInput | string[]
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGptTaskCreateInput = {
    domain: string
    result: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGptTaskUncheckedCreateInput = {
    id?: number
    domain: string
    result: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGptTaskUpdateInput = {
    domain?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGptTaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGptTaskCreateManyInput = {
    id?: number
    domain: string
    result: JsonNullValueInput | InputJsonValue
    completed?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatGptTaskUpdateManyMutationInput = {
    domain?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatGptTaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    domain?: StringFieldUpdateOperationsInput | string
    result?: JsonNullValueInput | InputJsonValue
    completed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type YelpListPageTaskCountOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    url?: SortOrder
    page?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    links?: SortOrder
  }

  export type YelpListPageTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
  }

  export type YelpListPageTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    url?: SortOrder
    page?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpListPageTaskMinOrderByAggregateInput = {
    id?: SortOrder
    city?: SortOrder
    url?: SortOrder
    page?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpListPageTaskSumOrderByAggregateInput = {
    id?: SortOrder
    page?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type YelpProfilePageTaskCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    hours?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpProfilePageTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YelpProfilePageTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpProfilePageTaskMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    name?: SortOrder
    rating?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YelpProfilePageTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GoogleLatLongTaskCountOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleLatLongTaskAvgOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type GoogleLatLongTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleLatLongTaskMinOrderByAggregateInput = {
    id?: SortOrder
    businessName?: SortOrder
    address?: SortOrder
    lat?: SortOrder
    long?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GoogleLatLongTaskSumOrderByAggregateInput = {
    id?: SortOrder
    lat?: SortOrder
    long?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BusinessSiteTaskCountOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    links?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessSiteTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteTaskMinOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessSiteDataTaskCountOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    texts?: SortOrder
    images?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteDataTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessSiteDataTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteDataTaskMinOrderByAggregateInput = {
    id?: SortOrder
    website?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusinessSiteDataTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatGptTaskCountOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    result?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGptTaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatGptTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGptTaskMinOrderByAggregateInput = {
    id?: SortOrder
    domain?: SortOrder
    completed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatGptTaskSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type YelpListPageTaskCreatelinksInput = {
    set: string[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type YelpListPageTaskUpdatelinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessSiteTaskCreatelinksInput = {
    set: string[]
  }

  export type BusinessSiteTaskUpdatelinksInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BusinessSiteDataTaskCreatetextsInput = {
    set: string[]
  }

  export type BusinessSiteDataTaskCreateimagesInput = {
    set: string[]
  }

  export type BusinessSiteDataTaskUpdatetextsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type BusinessSiteDataTaskUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use YelpListPageTaskDefaultArgs instead
     */
    export type YelpListPageTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = YelpListPageTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YelpProfilePageTaskDefaultArgs instead
     */
    export type YelpProfilePageTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = YelpProfilePageTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GoogleLatLongTaskDefaultArgs instead
     */
    export type GoogleLatLongTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GoogleLatLongTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessSiteTaskDefaultArgs instead
     */
    export type BusinessSiteTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BusinessSiteTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BusinessSiteDataTaskDefaultArgs instead
     */
    export type BusinessSiteDataTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BusinessSiteDataTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ChatGptTaskDefaultArgs instead
     */
    export type ChatGptTaskArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ChatGptTaskDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}