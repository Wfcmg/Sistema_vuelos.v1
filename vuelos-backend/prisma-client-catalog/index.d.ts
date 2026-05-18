
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Airport
 * 
 */
export type Airport = $Result.DefaultSelection<Prisma.$AirportPayload>
/**
 * Model Airline
 * 
 */
export type Airline = $Result.DefaultSelection<Prisma.$AirlinePayload>
/**
 * Model Aircraft
 * 
 */
export type Aircraft = $Result.DefaultSelection<Prisma.$AircraftPayload>
/**
 * Model AirlineAirport
 * 
 */
export type AirlineAirport = $Result.DefaultSelection<Prisma.$AirlineAirportPayload>
/**
 * Model Flight
 * 
 */
export type Flight = $Result.DefaultSelection<Prisma.$FlightPayload>
/**
 * Model Segment
 * 
 */
export type Segment = $Result.DefaultSelection<Prisma.$SegmentPayload>
/**
 * Model FlightClass
 * 
 */
export type FlightClass = $Result.DefaultSelection<Prisma.$FlightClassPayload>
/**
 * Model ServiceCatalog
 * 
 */
export type ServiceCatalog = $Result.DefaultSelection<Prisma.$ServiceCatalogPayload>
/**
 * Model AirlineServiceConfig
 * 
 */
export type AirlineServiceConfig = $Result.DefaultSelection<Prisma.$AirlineServiceConfigPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FlightStatus: {
  SCHEDULED: 'SCHEDULED',
  DELAYED: 'DELAYED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type FlightStatus = (typeof FlightStatus)[keyof typeof FlightStatus]


export const CabinClass: {
  ECONOMY: 'ECONOMY',
  PREMIUM_ECONOMY: 'PREMIUM_ECONOMY',
  BUSINESS: 'BUSINESS',
  FIRST: 'FIRST'
};

export type CabinClass = (typeof CabinClass)[keyof typeof CabinClass]

}

export type FlightStatus = $Enums.FlightStatus

export const FlightStatus: typeof $Enums.FlightStatus

export type CabinClass = $Enums.CabinClass

export const CabinClass: typeof $Enums.CabinClass

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.airport`: Exposes CRUD operations for the **Airport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airports
    * const airports = await prisma.airport.findMany()
    * ```
    */
  get airport(): Prisma.AirportDelegate<ExtArgs>;

  /**
   * `prisma.airline`: Exposes CRUD operations for the **Airline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Airlines
    * const airlines = await prisma.airline.findMany()
    * ```
    */
  get airline(): Prisma.AirlineDelegate<ExtArgs>;

  /**
   * `prisma.aircraft`: Exposes CRUD operations for the **Aircraft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Aircraft
    * const aircraft = await prisma.aircraft.findMany()
    * ```
    */
  get aircraft(): Prisma.AircraftDelegate<ExtArgs>;

  /**
   * `prisma.airlineAirport`: Exposes CRUD operations for the **AirlineAirport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AirlineAirports
    * const airlineAirports = await prisma.airlineAirport.findMany()
    * ```
    */
  get airlineAirport(): Prisma.AirlineAirportDelegate<ExtArgs>;

  /**
   * `prisma.flight`: Exposes CRUD operations for the **Flight** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flights
    * const flights = await prisma.flight.findMany()
    * ```
    */
  get flight(): Prisma.FlightDelegate<ExtArgs>;

  /**
   * `prisma.segment`: Exposes CRUD operations for the **Segment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Segments
    * const segments = await prisma.segment.findMany()
    * ```
    */
  get segment(): Prisma.SegmentDelegate<ExtArgs>;

  /**
   * `prisma.flightClass`: Exposes CRUD operations for the **FlightClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightClasses
    * const flightClasses = await prisma.flightClass.findMany()
    * ```
    */
  get flightClass(): Prisma.FlightClassDelegate<ExtArgs>;

  /**
   * `prisma.serviceCatalog`: Exposes CRUD operations for the **ServiceCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceCatalogs
    * const serviceCatalogs = await prisma.serviceCatalog.findMany()
    * ```
    */
  get serviceCatalog(): Prisma.ServiceCatalogDelegate<ExtArgs>;

  /**
   * `prisma.airlineServiceConfig`: Exposes CRUD operations for the **AirlineServiceConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AirlineServiceConfigs
    * const airlineServiceConfigs = await prisma.airlineServiceConfig.findMany()
    * ```
    */
  get airlineServiceConfig(): Prisma.AirlineServiceConfigDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    Country: 'Country',
    City: 'City',
    Airport: 'Airport',
    Airline: 'Airline',
    Aircraft: 'Aircraft',
    AirlineAirport: 'AirlineAirport',
    Flight: 'Flight',
    Segment: 'Segment',
    FlightClass: 'FlightClass',
    ServiceCatalog: 'ServiceCatalog',
    AirlineServiceConfig: 'AirlineServiceConfig'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "country" | "city" | "airport" | "airline" | "aircraft" | "airlineAirport" | "flight" | "segment" | "flightClass" | "serviceCatalog" | "airlineServiceConfig"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Airport: {
        payload: Prisma.$AirportPayload<ExtArgs>
        fields: Prisma.AirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findFirst: {
            args: Prisma.AirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          findMany: {
            args: Prisma.AirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          create: {
            args: Prisma.AirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          createMany: {
            args: Prisma.AirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>[]
          }
          delete: {
            args: Prisma.AirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          update: {
            args: Prisma.AirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          deleteMany: {
            args: Prisma.AirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirportPayload>
          }
          aggregate: {
            args: Prisma.AirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirport>
          }
          groupBy: {
            args: Prisma.AirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirportCountAggregateOutputType> | number
          }
        }
      }
      Airline: {
        payload: Prisma.$AirlinePayload<ExtArgs>
        fields: Prisma.AirlineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirlineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirlineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findFirst: {
            args: Prisma.AirlineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirlineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          findMany: {
            args: Prisma.AirlineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          create: {
            args: Prisma.AirlineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          createMany: {
            args: Prisma.AirlineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirlineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>[]
          }
          delete: {
            args: Prisma.AirlineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          update: {
            args: Prisma.AirlineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          deleteMany: {
            args: Prisma.AirlineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirlineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirlineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlinePayload>
          }
          aggregate: {
            args: Prisma.AirlineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirline>
          }
          groupBy: {
            args: Prisma.AirlineGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlineGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirlineCountArgs<ExtArgs>
            result: $Utils.Optional<AirlineCountAggregateOutputType> | number
          }
        }
      }
      Aircraft: {
        payload: Prisma.$AircraftPayload<ExtArgs>
        fields: Prisma.AircraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AircraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AircraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          findFirst: {
            args: Prisma.AircraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AircraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          findMany: {
            args: Prisma.AircraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>[]
          }
          create: {
            args: Prisma.AircraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          createMany: {
            args: Prisma.AircraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AircraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>[]
          }
          delete: {
            args: Prisma.AircraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          update: {
            args: Prisma.AircraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          deleteMany: {
            args: Prisma.AircraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AircraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AircraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AircraftPayload>
          }
          aggregate: {
            args: Prisma.AircraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAircraft>
          }
          groupBy: {
            args: Prisma.AircraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<AircraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.AircraftCountArgs<ExtArgs>
            result: $Utils.Optional<AircraftCountAggregateOutputType> | number
          }
        }
      }
      AirlineAirport: {
        payload: Prisma.$AirlineAirportPayload<ExtArgs>
        fields: Prisma.AirlineAirportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirlineAirportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirlineAirportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          findFirst: {
            args: Prisma.AirlineAirportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirlineAirportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          findMany: {
            args: Prisma.AirlineAirportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>[]
          }
          create: {
            args: Prisma.AirlineAirportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          createMany: {
            args: Prisma.AirlineAirportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirlineAirportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>[]
          }
          delete: {
            args: Prisma.AirlineAirportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          update: {
            args: Prisma.AirlineAirportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          deleteMany: {
            args: Prisma.AirlineAirportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirlineAirportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirlineAirportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineAirportPayload>
          }
          aggregate: {
            args: Prisma.AirlineAirportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirlineAirport>
          }
          groupBy: {
            args: Prisma.AirlineAirportGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlineAirportGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirlineAirportCountArgs<ExtArgs>
            result: $Utils.Optional<AirlineAirportCountAggregateOutputType> | number
          }
        }
      }
      Flight: {
        payload: Prisma.$FlightPayload<ExtArgs>
        fields: Prisma.FlightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findFirst: {
            args: Prisma.FlightFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          findMany: {
            args: Prisma.FlightFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          create: {
            args: Prisma.FlightCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          createMany: {
            args: Prisma.FlightCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>[]
          }
          delete: {
            args: Prisma.FlightDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          update: {
            args: Prisma.FlightUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          deleteMany: {
            args: Prisma.FlightDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightPayload>
          }
          aggregate: {
            args: Prisma.FlightAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlight>
          }
          groupBy: {
            args: Prisma.FlightGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightCountArgs<ExtArgs>
            result: $Utils.Optional<FlightCountAggregateOutputType> | number
          }
        }
      }
      Segment: {
        payload: Prisma.$SegmentPayload<ExtArgs>
        fields: Prisma.SegmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SegmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SegmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findFirst: {
            args: Prisma.SegmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SegmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          findMany: {
            args: Prisma.SegmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          create: {
            args: Prisma.SegmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          createMany: {
            args: Prisma.SegmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SegmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>[]
          }
          delete: {
            args: Prisma.SegmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          update: {
            args: Prisma.SegmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          deleteMany: {
            args: Prisma.SegmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SegmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SegmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentPayload>
          }
          aggregate: {
            args: Prisma.SegmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSegment>
          }
          groupBy: {
            args: Prisma.SegmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<SegmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.SegmentCountArgs<ExtArgs>
            result: $Utils.Optional<SegmentCountAggregateOutputType> | number
          }
        }
      }
      FlightClass: {
        payload: Prisma.$FlightClassPayload<ExtArgs>
        fields: Prisma.FlightClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          findFirst: {
            args: Prisma.FlightClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          findMany: {
            args: Prisma.FlightClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>[]
          }
          create: {
            args: Prisma.FlightClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          createMany: {
            args: Prisma.FlightClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlightClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>[]
          }
          delete: {
            args: Prisma.FlightClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          update: {
            args: Prisma.FlightClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          deleteMany: {
            args: Prisma.FlightClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightClassPayload>
          }
          aggregate: {
            args: Prisma.FlightClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightClass>
          }
          groupBy: {
            args: Prisma.FlightClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlightClassCountArgs<ExtArgs>
            result: $Utils.Optional<FlightClassCountAggregateOutputType> | number
          }
        }
      }
      ServiceCatalog: {
        payload: Prisma.$ServiceCatalogPayload<ExtArgs>
        fields: Prisma.ServiceCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceCatalogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceCatalogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          findFirst: {
            args: Prisma.ServiceCatalogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceCatalogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          findMany: {
            args: Prisma.ServiceCatalogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>[]
          }
          create: {
            args: Prisma.ServiceCatalogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          createMany: {
            args: Prisma.ServiceCatalogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCatalogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>[]
          }
          delete: {
            args: Prisma.ServiceCatalogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          update: {
            args: Prisma.ServiceCatalogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          deleteMany: {
            args: Prisma.ServiceCatalogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceCatalogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceCatalogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceCatalogPayload>
          }
          aggregate: {
            args: Prisma.ServiceCatalogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceCatalog>
          }
          groupBy: {
            args: Prisma.ServiceCatalogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCatalogCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCatalogCountAggregateOutputType> | number
          }
        }
      }
      AirlineServiceConfig: {
        payload: Prisma.$AirlineServiceConfigPayload<ExtArgs>
        fields: Prisma.AirlineServiceConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AirlineServiceConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AirlineServiceConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          findFirst: {
            args: Prisma.AirlineServiceConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AirlineServiceConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          findMany: {
            args: Prisma.AirlineServiceConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>[]
          }
          create: {
            args: Prisma.AirlineServiceConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          createMany: {
            args: Prisma.AirlineServiceConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AirlineServiceConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>[]
          }
          delete: {
            args: Prisma.AirlineServiceConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          update: {
            args: Prisma.AirlineServiceConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          deleteMany: {
            args: Prisma.AirlineServiceConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AirlineServiceConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AirlineServiceConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AirlineServiceConfigPayload>
          }
          aggregate: {
            args: Prisma.AirlineServiceConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAirlineServiceConfig>
          }
          groupBy: {
            args: Prisma.AirlineServiceConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<AirlineServiceConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.AirlineServiceConfigCountArgs<ExtArgs>
            result: $Utils.Optional<AirlineServiceConfigCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
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
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    cities: number
    airlines: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | CountryCountOutputTypeCountCitiesArgs
    airlines?: boolean | CountryCountOutputTypeCountAirlinesArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountAirlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    airports: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airports?: boolean | CityCountOutputTypeCountAirportsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
  }


  /**
   * Count Type AirportCountOutputType
   */

  export type AirportCountOutputType = {
    originSegments: number
    destinationSegments: number
    airlineAirports: number
  }

  export type AirportCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    originSegments?: boolean | AirportCountOutputTypeCountOriginSegmentsArgs
    destinationSegments?: boolean | AirportCountOutputTypeCountDestinationSegmentsArgs
    airlineAirports?: boolean | AirportCountOutputTypeCountAirlineAirportsArgs
  }

  // Custom InputTypes
  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirportCountOutputType
     */
    select?: AirportCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountOriginSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountDestinationSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * AirportCountOutputType without action
   */
  export type AirportCountOutputTypeCountAirlineAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineAirportWhereInput
  }


  /**
   * Count Type AirlineCountOutputType
   */

  export type AirlineCountOutputType = {
    segments: number
    aircrafts: number
    serviceConfigs: number
    airlineAirports: number
  }

  export type AirlineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | AirlineCountOutputTypeCountSegmentsArgs
    aircrafts?: boolean | AirlineCountOutputTypeCountAircraftsArgs
    serviceConfigs?: boolean | AirlineCountOutputTypeCountServiceConfigsArgs
    airlineAirports?: boolean | AirlineCountOutputTypeCountAirlineAirportsArgs
  }

  // Custom InputTypes
  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineCountOutputType
     */
    select?: AirlineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountAircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AircraftWhereInput
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountServiceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineServiceConfigWhereInput
  }

  /**
   * AirlineCountOutputType without action
   */
  export type AirlineCountOutputTypeCountAirlineAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineAirportWhereInput
  }


  /**
   * Count Type AircraftCountOutputType
   */

  export type AircraftCountOutputType = {
    segments: number
  }

  export type AircraftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | AircraftCountOutputTypeCountSegmentsArgs
  }

  // Custom InputTypes
  /**
   * AircraftCountOutputType without action
   */
  export type AircraftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AircraftCountOutputType
     */
    select?: AircraftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AircraftCountOutputType without action
   */
  export type AircraftCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }


  /**
   * Count Type FlightCountOutputType
   */

  export type FlightCountOutputType = {
    segments: number
    flightClasses: number
  }

  export type FlightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | FlightCountOutputTypeCountSegmentsArgs
    flightClasses?: boolean | FlightCountOutputTypeCountFlightClassesArgs
  }

  // Custom InputTypes
  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightCountOutputType
     */
    select?: FlightCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
  }

  /**
   * FlightCountOutputType without action
   */
  export type FlightCountOutputTypeCountFlightClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightClassWhereInput
  }


  /**
   * Count Type ServiceCatalogCountOutputType
   */

  export type ServiceCatalogCountOutputType = {
    airlineConfigs: number
  }

  export type ServiceCatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlineConfigs?: boolean | ServiceCatalogCountOutputTypeCountAirlineConfigsArgs
  }

  // Custom InputTypes
  /**
   * ServiceCatalogCountOutputType without action
   */
  export type ServiceCatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalogCountOutputType
     */
    select?: ServiceCatalogCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCatalogCountOutputType without action
   */
  export type ServiceCatalogCountOutputTypeCountAirlineConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineServiceConfigWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryMinAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
    phoneCode: string | null
    currencyCode: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    isoCode: string | null
    phoneCode: string | null
    currencyCode: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    name: number
    isoCode: number
    phoneCode: number
    currencyCode: number
    _all: number
  }


  export type CountryMinAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    phoneCode?: true
    currencyCode?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    phoneCode?: true
    currencyCode?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    name?: true
    isoCode?: true
    phoneCode?: true
    currencyCode?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: string
    name: string
    isoCode: string
    phoneCode: string | null
    currencyCode: string | null
    _count: CountryCountAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    phoneCode?: boolean
    currencyCode?: boolean
    cities?: boolean | Country$citiesArgs<ExtArgs>
    airlines?: boolean | Country$airlinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isoCode?: boolean
    phoneCode?: boolean
    currencyCode?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    name?: boolean
    isoCode?: boolean
    phoneCode?: boolean
    currencyCode?: boolean
  }

  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | Country$citiesArgs<ExtArgs>
    airlines?: boolean | Country$airlinesArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      cities: Prisma.$CityPayload<ExtArgs>[]
      airlines: Prisma.$AirlinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      isoCode: string
      phoneCode: string | null
      currencyCode: string | null
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
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
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends Country$citiesArgs<ExtArgs> = {}>(args?: Subset<T, Country$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany"> | Null>
    airlines<T extends Country$airlinesArgs<ExtArgs> = {}>(args?: Subset<T, Country$airlinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */ 
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'String'>
    readonly name: FieldRef<"Country", 'String'>
    readonly isoCode: FieldRef<"Country", 'String'>
    readonly phoneCode: FieldRef<"Country", 'String'>
    readonly currencyCode: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
  }

  /**
   * Country.cities
   */
  export type Country$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    cursor?: CityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * Country.airlines
   */
  export type Country$airlinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    where?: AirlineWhereInput
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    cursor?: AirlineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    iataCode: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    iataCode: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    iataCode: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    iataCode?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    iataCode?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    iataCode?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    countryId: string
    iataCode: string | null
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    iataCode?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    airports?: boolean | City$airportsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    countryId?: boolean
    iataCode?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    countryId?: boolean
    iataCode?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    airports?: boolean | City$airportsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      airports: Prisma.$AirportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      countryId: string
      iataCode: string | null
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    airports<T extends City$airportsArgs<ExtArgs> = {}>(args?: Subset<T, City$airportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly countryId: FieldRef<"City", 'String'>
    readonly iataCode: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }

  /**
   * City.airports
   */
  export type City$airportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    cursor?: AirportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Airport
   */

  export type AggregateAirport = {
    _count: AirportCountAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  export type AirportMinAggregateOutputType = {
    id: string | null
    iataCode: string | null
    name: string | null
    cityId: string | null
    timezone: string | null
  }

  export type AirportMaxAggregateOutputType = {
    id: string | null
    iataCode: string | null
    name: string | null
    cityId: string | null
    timezone: string | null
  }

  export type AirportCountAggregateOutputType = {
    id: number
    iataCode: number
    name: number
    cityId: number
    timezone: number
    _all: number
  }


  export type AirportMinAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    cityId?: true
    timezone?: true
  }

  export type AirportMaxAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    cityId?: true
    timezone?: true
  }

  export type AirportCountAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    cityId?: true
    timezone?: true
    _all?: true
  }

  export type AirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airport to aggregate.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airports
    **/
    _count?: true | AirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirportMaxAggregateInputType
  }

  export type GetAirportAggregateType<T extends AirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirport[P]>
      : GetScalarType<T[P], AggregateAirport[P]>
  }




  export type AirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirportWhereInput
    orderBy?: AirportOrderByWithAggregationInput | AirportOrderByWithAggregationInput[]
    by: AirportScalarFieldEnum[] | AirportScalarFieldEnum
    having?: AirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirportCountAggregateInputType | true
    _min?: AirportMinAggregateInputType
    _max?: AirportMaxAggregateInputType
  }

  export type AirportGroupByOutputType = {
    id: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
    _count: AirportCountAggregateOutputType | null
    _min: AirportMinAggregateOutputType | null
    _max: AirportMaxAggregateOutputType | null
  }

  type GetAirportGroupByPayload<T extends AirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirportGroupByOutputType[P]>
        }
      >
    >


  export type AirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iataCode?: boolean
    name?: boolean
    cityId?: boolean
    timezone?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    originSegments?: boolean | Airport$originSegmentsArgs<ExtArgs>
    destinationSegments?: boolean | Airport$destinationSegmentsArgs<ExtArgs>
    airlineAirports?: boolean | Airport$airlineAirportsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iataCode?: boolean
    name?: boolean
    cityId?: boolean
    timezone?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airport"]>

  export type AirportSelectScalar = {
    id?: boolean
    iataCode?: boolean
    name?: boolean
    cityId?: boolean
    timezone?: boolean
  }

  export type AirportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    originSegments?: boolean | Airport$originSegmentsArgs<ExtArgs>
    destinationSegments?: boolean | Airport$destinationSegmentsArgs<ExtArgs>
    airlineAirports?: boolean | Airport$airlineAirportsArgs<ExtArgs>
    _count?: boolean | AirportCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AirportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $AirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airport"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      originSegments: Prisma.$SegmentPayload<ExtArgs>[]
      destinationSegments: Prisma.$SegmentPayload<ExtArgs>[]
      airlineAirports: Prisma.$AirlineAirportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      iataCode: string
      name: string
      cityId: string
      timezone: string
    }, ExtArgs["result"]["airport"]>
    composites: {}
  }

  type AirportGetPayload<S extends boolean | null | undefined | AirportDefaultArgs> = $Result.GetResult<Prisma.$AirportPayload, S>

  type AirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AirportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AirportCountAggregateInputType | true
    }

  export interface AirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airport'], meta: { name: 'Airport' } }
    /**
     * Find zero or one Airport that matches the filter.
     * @param {AirportFindUniqueArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirportFindUniqueArgs>(args: SelectSubset<T, AirportFindUniqueArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Airport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AirportFindUniqueOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Airport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirportFindFirstArgs>(args?: SelectSubset<T, AirportFindFirstArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Airport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindFirstOrThrowArgs} args - Arguments to find a Airport
     * @example
     * // Get one Airport
     * const airport = await prisma.airport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Airports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airports
     * const airports = await prisma.airport.findMany()
     * 
     * // Get first 10 Airports
     * const airports = await prisma.airport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airportWithIdOnly = await prisma.airport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirportFindManyArgs>(args?: SelectSubset<T, AirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Airport.
     * @param {AirportCreateArgs} args - Arguments to create a Airport.
     * @example
     * // Create one Airport
     * const Airport = await prisma.airport.create({
     *   data: {
     *     // ... data to create a Airport
     *   }
     * })
     * 
     */
    create<T extends AirportCreateArgs>(args: SelectSubset<T, AirportCreateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Airports.
     * @param {AirportCreateManyArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirportCreateManyArgs>(args?: SelectSubset<T, AirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airports and returns the data saved in the database.
     * @param {AirportCreateManyAndReturnArgs} args - Arguments to create many Airports.
     * @example
     * // Create many Airports
     * const airport = await prisma.airport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airports and only return the `id`
     * const airportWithIdOnly = await prisma.airport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirportCreateManyAndReturnArgs>(args?: SelectSubset<T, AirportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Airport.
     * @param {AirportDeleteArgs} args - Arguments to delete one Airport.
     * @example
     * // Delete one Airport
     * const Airport = await prisma.airport.delete({
     *   where: {
     *     // ... filter to delete one Airport
     *   }
     * })
     * 
     */
    delete<T extends AirportDeleteArgs>(args: SelectSubset<T, AirportDeleteArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Airport.
     * @param {AirportUpdateArgs} args - Arguments to update one Airport.
     * @example
     * // Update one Airport
     * const airport = await prisma.airport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirportUpdateArgs>(args: SelectSubset<T, AirportUpdateArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Airports.
     * @param {AirportDeleteManyArgs} args - Arguments to filter Airports to delete.
     * @example
     * // Delete a few Airports
     * const { count } = await prisma.airport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirportDeleteManyArgs>(args?: SelectSubset<T, AirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airports
     * const airport = await prisma.airport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirportUpdateManyArgs>(args: SelectSubset<T, AirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airport.
     * @param {AirportUpsertArgs} args - Arguments to update or create a Airport.
     * @example
     * // Update or create a Airport
     * const airport = await prisma.airport.upsert({
     *   create: {
     *     // ... data to create a Airport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airport we want to update
     *   }
     * })
     */
    upsert<T extends AirportUpsertArgs>(args: SelectSubset<T, AirportUpsertArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Airports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportCountArgs} args - Arguments to filter Airports to count.
     * @example
     * // Count the number of Airports
     * const count = await prisma.airport.count({
     *   where: {
     *     // ... the filter for the Airports we want to count
     *   }
     * })
    **/
    count<T extends AirportCountArgs>(
      args?: Subset<T, AirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AirportAggregateArgs>(args: Subset<T, AirportAggregateArgs>): Prisma.PrismaPromise<GetAirportAggregateType<T>>

    /**
     * Group by Airport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirportGroupByArgs} args - Group by arguments.
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
      T extends AirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirportGroupByArgs['orderBy'] }
        : { orderBy?: AirportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airport model
   */
  readonly fields: AirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    originSegments<T extends Airport$originSegmentsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$originSegmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany"> | Null>
    destinationSegments<T extends Airport$destinationSegmentsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$destinationSegmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany"> | Null>
    airlineAirports<T extends Airport$airlineAirportsArgs<ExtArgs> = {}>(args?: Subset<T, Airport$airlineAirportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airport model
   */ 
  interface AirportFieldRefs {
    readonly id: FieldRef<"Airport", 'String'>
    readonly iataCode: FieldRef<"Airport", 'String'>
    readonly name: FieldRef<"Airport", 'String'>
    readonly cityId: FieldRef<"Airport", 'String'>
    readonly timezone: FieldRef<"Airport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Airport findUnique
   */
  export type AirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findUniqueOrThrow
   */
  export type AirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport findFirst
   */
  export type AirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findFirstOrThrow
   */
  export type AirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airport to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airports.
     */
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport findMany
   */
  export type AirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter, which Airports to fetch.
     */
    where?: AirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airports to fetch.
     */
    orderBy?: AirportOrderByWithRelationInput | AirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airports.
     */
    cursor?: AirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airports.
     */
    skip?: number
    distinct?: AirportScalarFieldEnum | AirportScalarFieldEnum[]
  }

  /**
   * Airport create
   */
  export type AirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to create a Airport.
     */
    data: XOR<AirportCreateInput, AirportUncheckedCreateInput>
  }

  /**
   * Airport createMany
   */
  export type AirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airport createManyAndReturn
   */
  export type AirportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Airports.
     */
    data: AirportCreateManyInput | AirportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Airport update
   */
  export type AirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The data needed to update a Airport.
     */
    data: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
    /**
     * Choose, which Airport to update.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport updateMany
   */
  export type AirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airports.
     */
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyInput>
    /**
     * Filter which Airports to update
     */
    where?: AirportWhereInput
  }

  /**
   * Airport upsert
   */
  export type AirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * The filter to search for the Airport to update in case it exists.
     */
    where: AirportWhereUniqueInput
    /**
     * In case the Airport found by the `where` argument doesn't exist, create a new Airport with this data.
     */
    create: XOR<AirportCreateInput, AirportUncheckedCreateInput>
    /**
     * In case the Airport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirportUpdateInput, AirportUncheckedUpdateInput>
  }

  /**
   * Airport delete
   */
  export type AirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
    /**
     * Filter which Airport to delete.
     */
    where: AirportWhereUniqueInput
  }

  /**
   * Airport deleteMany
   */
  export type AirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airports to delete
     */
    where?: AirportWhereInput
  }

  /**
   * Airport.originSegments
   */
  export type Airport$originSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Airport.destinationSegments
   */
  export type Airport$destinationSegmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Airport.airlineAirports
   */
  export type Airport$airlineAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    where?: AirlineAirportWhereInput
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    cursor?: AirlineAirportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineAirportScalarFieldEnum | AirlineAirportScalarFieldEnum[]
  }

  /**
   * Airport without action
   */
  export type AirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airport
     */
    select?: AirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirportInclude<ExtArgs> | null
  }


  /**
   * Model Airline
   */

  export type AggregateAirline = {
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  export type AirlineMinAggregateOutputType = {
    id: string | null
    iataCode: string | null
    name: string | null
    logoUrl: string | null
    countryId: string | null
  }

  export type AirlineMaxAggregateOutputType = {
    id: string | null
    iataCode: string | null
    name: string | null
    logoUrl: string | null
    countryId: string | null
  }

  export type AirlineCountAggregateOutputType = {
    id: number
    iataCode: number
    name: number
    logoUrl: number
    countryId: number
    _all: number
  }


  export type AirlineMinAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    logoUrl?: true
    countryId?: true
  }

  export type AirlineMaxAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    logoUrl?: true
    countryId?: true
  }

  export type AirlineCountAggregateInputType = {
    id?: true
    iataCode?: true
    name?: true
    logoUrl?: true
    countryId?: true
    _all?: true
  }

  export type AirlineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airline to aggregate.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Airlines
    **/
    _count?: true | AirlineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlineMaxAggregateInputType
  }

  export type GetAirlineAggregateType<T extends AirlineAggregateArgs> = {
        [P in keyof T & keyof AggregateAirline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirline[P]>
      : GetScalarType<T[P], AggregateAirline[P]>
  }




  export type AirlineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineWhereInput
    orderBy?: AirlineOrderByWithAggregationInput | AirlineOrderByWithAggregationInput[]
    by: AirlineScalarFieldEnum[] | AirlineScalarFieldEnum
    having?: AirlineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlineCountAggregateInputType | true
    _min?: AirlineMinAggregateInputType
    _max?: AirlineMaxAggregateInputType
  }

  export type AirlineGroupByOutputType = {
    id: string
    iataCode: string
    name: string
    logoUrl: string | null
    countryId: string
    _count: AirlineCountAggregateOutputType | null
    _min: AirlineMinAggregateOutputType | null
    _max: AirlineMaxAggregateOutputType | null
  }

  type GetAirlineGroupByPayload<T extends AirlineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlineGroupByOutputType[P]>
            : GetScalarType<T[P], AirlineGroupByOutputType[P]>
        }
      >
    >


  export type AirlineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iataCode?: boolean
    name?: boolean
    logoUrl?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    segments?: boolean | Airline$segmentsArgs<ExtArgs>
    aircrafts?: boolean | Airline$aircraftsArgs<ExtArgs>
    serviceConfigs?: boolean | Airline$serviceConfigsArgs<ExtArgs>
    airlineAirports?: boolean | Airline$airlineAirportsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airline"]>

  export type AirlineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iataCode?: boolean
    name?: boolean
    logoUrl?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airline"]>

  export type AirlineSelectScalar = {
    id?: boolean
    iataCode?: boolean
    name?: boolean
    logoUrl?: boolean
    countryId?: boolean
  }

  export type AirlineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    segments?: boolean | Airline$segmentsArgs<ExtArgs>
    aircrafts?: boolean | Airline$aircraftsArgs<ExtArgs>
    serviceConfigs?: boolean | Airline$serviceConfigsArgs<ExtArgs>
    airlineAirports?: boolean | Airline$airlineAirportsArgs<ExtArgs>
    _count?: boolean | AirlineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AirlineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $AirlinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Airline"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      segments: Prisma.$SegmentPayload<ExtArgs>[]
      aircrafts: Prisma.$AircraftPayload<ExtArgs>[]
      serviceConfigs: Prisma.$AirlineServiceConfigPayload<ExtArgs>[]
      airlineAirports: Prisma.$AirlineAirportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      iataCode: string
      name: string
      logoUrl: string | null
      countryId: string
    }, ExtArgs["result"]["airline"]>
    composites: {}
  }

  type AirlineGetPayload<S extends boolean | null | undefined | AirlineDefaultArgs> = $Result.GetResult<Prisma.$AirlinePayload, S>

  type AirlineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AirlineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AirlineCountAggregateInputType | true
    }

  export interface AirlineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Airline'], meta: { name: 'Airline' } }
    /**
     * Find zero or one Airline that matches the filter.
     * @param {AirlineFindUniqueArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirlineFindUniqueArgs>(args: SelectSubset<T, AirlineFindUniqueArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Airline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AirlineFindUniqueOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirlineFindUniqueOrThrowArgs>(args: SelectSubset<T, AirlineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Airline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirlineFindFirstArgs>(args?: SelectSubset<T, AirlineFindFirstArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Airline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindFirstOrThrowArgs} args - Arguments to find a Airline
     * @example
     * // Get one Airline
     * const airline = await prisma.airline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirlineFindFirstOrThrowArgs>(args?: SelectSubset<T, AirlineFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Airlines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Airlines
     * const airlines = await prisma.airline.findMany()
     * 
     * // Get first 10 Airlines
     * const airlines = await prisma.airline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airlineWithIdOnly = await prisma.airline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirlineFindManyArgs>(args?: SelectSubset<T, AirlineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Airline.
     * @param {AirlineCreateArgs} args - Arguments to create a Airline.
     * @example
     * // Create one Airline
     * const Airline = await prisma.airline.create({
     *   data: {
     *     // ... data to create a Airline
     *   }
     * })
     * 
     */
    create<T extends AirlineCreateArgs>(args: SelectSubset<T, AirlineCreateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Airlines.
     * @param {AirlineCreateManyArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airline = await prisma.airline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirlineCreateManyArgs>(args?: SelectSubset<T, AirlineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Airlines and returns the data saved in the database.
     * @param {AirlineCreateManyAndReturnArgs} args - Arguments to create many Airlines.
     * @example
     * // Create many Airlines
     * const airline = await prisma.airline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Airlines and only return the `id`
     * const airlineWithIdOnly = await prisma.airline.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirlineCreateManyAndReturnArgs>(args?: SelectSubset<T, AirlineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Airline.
     * @param {AirlineDeleteArgs} args - Arguments to delete one Airline.
     * @example
     * // Delete one Airline
     * const Airline = await prisma.airline.delete({
     *   where: {
     *     // ... filter to delete one Airline
     *   }
     * })
     * 
     */
    delete<T extends AirlineDeleteArgs>(args: SelectSubset<T, AirlineDeleteArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Airline.
     * @param {AirlineUpdateArgs} args - Arguments to update one Airline.
     * @example
     * // Update one Airline
     * const airline = await prisma.airline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirlineUpdateArgs>(args: SelectSubset<T, AirlineUpdateArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Airlines.
     * @param {AirlineDeleteManyArgs} args - Arguments to filter Airlines to delete.
     * @example
     * // Delete a few Airlines
     * const { count } = await prisma.airline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirlineDeleteManyArgs>(args?: SelectSubset<T, AirlineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Airlines
     * const airline = await prisma.airline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirlineUpdateManyArgs>(args: SelectSubset<T, AirlineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Airline.
     * @param {AirlineUpsertArgs} args - Arguments to update or create a Airline.
     * @example
     * // Update or create a Airline
     * const airline = await prisma.airline.upsert({
     *   create: {
     *     // ... data to create a Airline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Airline we want to update
     *   }
     * })
     */
    upsert<T extends AirlineUpsertArgs>(args: SelectSubset<T, AirlineUpsertArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Airlines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineCountArgs} args - Arguments to filter Airlines to count.
     * @example
     * // Count the number of Airlines
     * const count = await prisma.airline.count({
     *   where: {
     *     // ... the filter for the Airlines we want to count
     *   }
     * })
    **/
    count<T extends AirlineCountArgs>(
      args?: Subset<T, AirlineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AirlineAggregateArgs>(args: Subset<T, AirlineAggregateArgs>): Prisma.PrismaPromise<GetAirlineAggregateType<T>>

    /**
     * Group by Airline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineGroupByArgs} args - Group by arguments.
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
      T extends AirlineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirlineGroupByArgs['orderBy'] }
        : { orderBy?: AirlineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AirlineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Airline model
   */
  readonly fields: AirlineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Airline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirlineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    segments<T extends Airline$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany"> | Null>
    aircrafts<T extends Airline$aircraftsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$aircraftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findMany"> | Null>
    serviceConfigs<T extends Airline$serviceConfigsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$serviceConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findMany"> | Null>
    airlineAirports<T extends Airline$airlineAirportsArgs<ExtArgs> = {}>(args?: Subset<T, Airline$airlineAirportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Airline model
   */ 
  interface AirlineFieldRefs {
    readonly id: FieldRef<"Airline", 'String'>
    readonly iataCode: FieldRef<"Airline", 'String'>
    readonly name: FieldRef<"Airline", 'String'>
    readonly logoUrl: FieldRef<"Airline", 'String'>
    readonly countryId: FieldRef<"Airline", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Airline findUnique
   */
  export type AirlineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findUniqueOrThrow
   */
  export type AirlineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline findFirst
   */
  export type AirlineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findFirstOrThrow
   */
  export type AirlineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airline to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Airlines.
     */
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline findMany
   */
  export type AirlineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter, which Airlines to fetch.
     */
    where?: AirlineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Airlines to fetch.
     */
    orderBy?: AirlineOrderByWithRelationInput | AirlineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Airlines.
     */
    cursor?: AirlineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Airlines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Airlines.
     */
    skip?: number
    distinct?: AirlineScalarFieldEnum | AirlineScalarFieldEnum[]
  }

  /**
   * Airline create
   */
  export type AirlineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to create a Airline.
     */
    data: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
  }

  /**
   * Airline createMany
   */
  export type AirlineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Airlines.
     */
    data: AirlineCreateManyInput | AirlineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Airline createManyAndReturn
   */
  export type AirlineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Airlines.
     */
    data: AirlineCreateManyInput | AirlineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Airline update
   */
  export type AirlineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The data needed to update a Airline.
     */
    data: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
    /**
     * Choose, which Airline to update.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline updateMany
   */
  export type AirlineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Airlines.
     */
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyInput>
    /**
     * Filter which Airlines to update
     */
    where?: AirlineWhereInput
  }

  /**
   * Airline upsert
   */
  export type AirlineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * The filter to search for the Airline to update in case it exists.
     */
    where: AirlineWhereUniqueInput
    /**
     * In case the Airline found by the `where` argument doesn't exist, create a new Airline with this data.
     */
    create: XOR<AirlineCreateInput, AirlineUncheckedCreateInput>
    /**
     * In case the Airline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirlineUpdateInput, AirlineUncheckedUpdateInput>
  }

  /**
   * Airline delete
   */
  export type AirlineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
    /**
     * Filter which Airline to delete.
     */
    where: AirlineWhereUniqueInput
  }

  /**
   * Airline deleteMany
   */
  export type AirlineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Airlines to delete
     */
    where?: AirlineWhereInput
  }

  /**
   * Airline.segments
   */
  export type Airline$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Airline.aircrafts
   */
  export type Airline$aircraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    where?: AircraftWhereInput
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    cursor?: AircraftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Airline.serviceConfigs
   */
  export type Airline$serviceConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    where?: AirlineServiceConfigWhereInput
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    cursor?: AirlineServiceConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineServiceConfigScalarFieldEnum | AirlineServiceConfigScalarFieldEnum[]
  }

  /**
   * Airline.airlineAirports
   */
  export type Airline$airlineAirportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    where?: AirlineAirportWhereInput
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    cursor?: AirlineAirportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineAirportScalarFieldEnum | AirlineAirportScalarFieldEnum[]
  }

  /**
   * Airline without action
   */
  export type AirlineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Airline
     */
    select?: AirlineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineInclude<ExtArgs> | null
  }


  /**
   * Model Aircraft
   */

  export type AggregateAircraft = {
    _count: AircraftCountAggregateOutputType | null
    _min: AircraftMinAggregateOutputType | null
    _max: AircraftMaxAggregateOutputType | null
  }

  export type AircraftMinAggregateOutputType = {
    id: string | null
    airlineId: string | null
    modelName: string | null
    registration: string | null
    hasWifi: boolean | null
    hasUsb: boolean | null
  }

  export type AircraftMaxAggregateOutputType = {
    id: string | null
    airlineId: string | null
    modelName: string | null
    registration: string | null
    hasWifi: boolean | null
    hasUsb: boolean | null
  }

  export type AircraftCountAggregateOutputType = {
    id: number
    airlineId: number
    modelName: number
    registration: number
    hasWifi: number
    hasUsb: number
    _all: number
  }


  export type AircraftMinAggregateInputType = {
    id?: true
    airlineId?: true
    modelName?: true
    registration?: true
    hasWifi?: true
    hasUsb?: true
  }

  export type AircraftMaxAggregateInputType = {
    id?: true
    airlineId?: true
    modelName?: true
    registration?: true
    hasWifi?: true
    hasUsb?: true
  }

  export type AircraftCountAggregateInputType = {
    id?: true
    airlineId?: true
    modelName?: true
    registration?: true
    hasWifi?: true
    hasUsb?: true
    _all?: true
  }

  export type AircraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aircraft to aggregate.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Aircraft
    **/
    _count?: true | AircraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AircraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AircraftMaxAggregateInputType
  }

  export type GetAircraftAggregateType<T extends AircraftAggregateArgs> = {
        [P in keyof T & keyof AggregateAircraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAircraft[P]>
      : GetScalarType<T[P], AggregateAircraft[P]>
  }




  export type AircraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AircraftWhereInput
    orderBy?: AircraftOrderByWithAggregationInput | AircraftOrderByWithAggregationInput[]
    by: AircraftScalarFieldEnum[] | AircraftScalarFieldEnum
    having?: AircraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AircraftCountAggregateInputType | true
    _min?: AircraftMinAggregateInputType
    _max?: AircraftMaxAggregateInputType
  }

  export type AircraftGroupByOutputType = {
    id: string
    airlineId: string
    modelName: string
    registration: string
    hasWifi: boolean
    hasUsb: boolean
    _count: AircraftCountAggregateOutputType | null
    _min: AircraftMinAggregateOutputType | null
    _max: AircraftMaxAggregateOutputType | null
  }

  type GetAircraftGroupByPayload<T extends AircraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AircraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AircraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AircraftGroupByOutputType[P]>
            : GetScalarType<T[P], AircraftGroupByOutputType[P]>
        }
      >
    >


  export type AircraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airlineId?: boolean
    modelName?: boolean
    registration?: boolean
    hasWifi?: boolean
    hasUsb?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    segments?: boolean | Aircraft$segmentsArgs<ExtArgs>
    _count?: boolean | AircraftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircraft"]>

  export type AircraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    airlineId?: boolean
    modelName?: boolean
    registration?: boolean
    hasWifi?: boolean
    hasUsb?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aircraft"]>

  export type AircraftSelectScalar = {
    id?: boolean
    airlineId?: boolean
    modelName?: boolean
    registration?: boolean
    hasWifi?: boolean
    hasUsb?: boolean
  }

  export type AircraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    segments?: boolean | Aircraft$segmentsArgs<ExtArgs>
    _count?: boolean | AircraftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AircraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }

  export type $AircraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aircraft"
    objects: {
      airline: Prisma.$AirlinePayload<ExtArgs>
      segments: Prisma.$SegmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      airlineId: string
      modelName: string
      registration: string
      hasWifi: boolean
      hasUsb: boolean
    }, ExtArgs["result"]["aircraft"]>
    composites: {}
  }

  type AircraftGetPayload<S extends boolean | null | undefined | AircraftDefaultArgs> = $Result.GetResult<Prisma.$AircraftPayload, S>

  type AircraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AircraftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AircraftCountAggregateInputType | true
    }

  export interface AircraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aircraft'], meta: { name: 'Aircraft' } }
    /**
     * Find zero or one Aircraft that matches the filter.
     * @param {AircraftFindUniqueArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AircraftFindUniqueArgs>(args: SelectSubset<T, AircraftFindUniqueArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Aircraft that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AircraftFindUniqueOrThrowArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AircraftFindUniqueOrThrowArgs>(args: SelectSubset<T, AircraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Aircraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindFirstArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AircraftFindFirstArgs>(args?: SelectSubset<T, AircraftFindFirstArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Aircraft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindFirstOrThrowArgs} args - Arguments to find a Aircraft
     * @example
     * // Get one Aircraft
     * const aircraft = await prisma.aircraft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AircraftFindFirstOrThrowArgs>(args?: SelectSubset<T, AircraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Aircraft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Aircraft
     * const aircraft = await prisma.aircraft.findMany()
     * 
     * // Get first 10 Aircraft
     * const aircraft = await prisma.aircraft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aircraftWithIdOnly = await prisma.aircraft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AircraftFindManyArgs>(args?: SelectSubset<T, AircraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Aircraft.
     * @param {AircraftCreateArgs} args - Arguments to create a Aircraft.
     * @example
     * // Create one Aircraft
     * const Aircraft = await prisma.aircraft.create({
     *   data: {
     *     // ... data to create a Aircraft
     *   }
     * })
     * 
     */
    create<T extends AircraftCreateArgs>(args: SelectSubset<T, AircraftCreateArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Aircraft.
     * @param {AircraftCreateManyArgs} args - Arguments to create many Aircraft.
     * @example
     * // Create many Aircraft
     * const aircraft = await prisma.aircraft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AircraftCreateManyArgs>(args?: SelectSubset<T, AircraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Aircraft and returns the data saved in the database.
     * @param {AircraftCreateManyAndReturnArgs} args - Arguments to create many Aircraft.
     * @example
     * // Create many Aircraft
     * const aircraft = await prisma.aircraft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Aircraft and only return the `id`
     * const aircraftWithIdOnly = await prisma.aircraft.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AircraftCreateManyAndReturnArgs>(args?: SelectSubset<T, AircraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Aircraft.
     * @param {AircraftDeleteArgs} args - Arguments to delete one Aircraft.
     * @example
     * // Delete one Aircraft
     * const Aircraft = await prisma.aircraft.delete({
     *   where: {
     *     // ... filter to delete one Aircraft
     *   }
     * })
     * 
     */
    delete<T extends AircraftDeleteArgs>(args: SelectSubset<T, AircraftDeleteArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Aircraft.
     * @param {AircraftUpdateArgs} args - Arguments to update one Aircraft.
     * @example
     * // Update one Aircraft
     * const aircraft = await prisma.aircraft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AircraftUpdateArgs>(args: SelectSubset<T, AircraftUpdateArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Aircraft.
     * @param {AircraftDeleteManyArgs} args - Arguments to filter Aircraft to delete.
     * @example
     * // Delete a few Aircraft
     * const { count } = await prisma.aircraft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AircraftDeleteManyArgs>(args?: SelectSubset<T, AircraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Aircraft
     * const aircraft = await prisma.aircraft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AircraftUpdateManyArgs>(args: SelectSubset<T, AircraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aircraft.
     * @param {AircraftUpsertArgs} args - Arguments to update or create a Aircraft.
     * @example
     * // Update or create a Aircraft
     * const aircraft = await prisma.aircraft.upsert({
     *   create: {
     *     // ... data to create a Aircraft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aircraft we want to update
     *   }
     * })
     */
    upsert<T extends AircraftUpsertArgs>(args: SelectSubset<T, AircraftUpsertArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftCountArgs} args - Arguments to filter Aircraft to count.
     * @example
     * // Count the number of Aircraft
     * const count = await prisma.aircraft.count({
     *   where: {
     *     // ... the filter for the Aircraft we want to count
     *   }
     * })
    **/
    count<T extends AircraftCountArgs>(
      args?: Subset<T, AircraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AircraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AircraftAggregateArgs>(args: Subset<T, AircraftAggregateArgs>): Prisma.PrismaPromise<GetAircraftAggregateType<T>>

    /**
     * Group by Aircraft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AircraftGroupByArgs} args - Group by arguments.
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
      T extends AircraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AircraftGroupByArgs['orderBy'] }
        : { orderBy?: AircraftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AircraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAircraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aircraft model
   */
  readonly fields: AircraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aircraft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AircraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    segments<T extends Aircraft$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Aircraft$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aircraft model
   */ 
  interface AircraftFieldRefs {
    readonly id: FieldRef<"Aircraft", 'String'>
    readonly airlineId: FieldRef<"Aircraft", 'String'>
    readonly modelName: FieldRef<"Aircraft", 'String'>
    readonly registration: FieldRef<"Aircraft", 'String'>
    readonly hasWifi: FieldRef<"Aircraft", 'Boolean'>
    readonly hasUsb: FieldRef<"Aircraft", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Aircraft findUnique
   */
  export type AircraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft findUniqueOrThrow
   */
  export type AircraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft findFirst
   */
  export type AircraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aircraft.
     */
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft findFirstOrThrow
   */
  export type AircraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Aircraft.
     */
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft findMany
   */
  export type AircraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter, which Aircraft to fetch.
     */
    where?: AircraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Aircraft to fetch.
     */
    orderBy?: AircraftOrderByWithRelationInput | AircraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Aircraft.
     */
    cursor?: AircraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Aircraft from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Aircraft.
     */
    skip?: number
    distinct?: AircraftScalarFieldEnum | AircraftScalarFieldEnum[]
  }

  /**
   * Aircraft create
   */
  export type AircraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The data needed to create a Aircraft.
     */
    data: XOR<AircraftCreateInput, AircraftUncheckedCreateInput>
  }

  /**
   * Aircraft createMany
   */
  export type AircraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Aircraft.
     */
    data: AircraftCreateManyInput | AircraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aircraft createManyAndReturn
   */
  export type AircraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Aircraft.
     */
    data: AircraftCreateManyInput | AircraftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Aircraft update
   */
  export type AircraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The data needed to update a Aircraft.
     */
    data: XOR<AircraftUpdateInput, AircraftUncheckedUpdateInput>
    /**
     * Choose, which Aircraft to update.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft updateMany
   */
  export type AircraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Aircraft.
     */
    data: XOR<AircraftUpdateManyMutationInput, AircraftUncheckedUpdateManyInput>
    /**
     * Filter which Aircraft to update
     */
    where?: AircraftWhereInput
  }

  /**
   * Aircraft upsert
   */
  export type AircraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * The filter to search for the Aircraft to update in case it exists.
     */
    where: AircraftWhereUniqueInput
    /**
     * In case the Aircraft found by the `where` argument doesn't exist, create a new Aircraft with this data.
     */
    create: XOR<AircraftCreateInput, AircraftUncheckedCreateInput>
    /**
     * In case the Aircraft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AircraftUpdateInput, AircraftUncheckedUpdateInput>
  }

  /**
   * Aircraft delete
   */
  export type AircraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    /**
     * Filter which Aircraft to delete.
     */
    where: AircraftWhereUniqueInput
  }

  /**
   * Aircraft deleteMany
   */
  export type AircraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aircraft to delete
     */
    where?: AircraftWhereInput
  }

  /**
   * Aircraft.segments
   */
  export type Aircraft$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Aircraft without action
   */
  export type AircraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
  }


  /**
   * Model AirlineAirport
   */

  export type AggregateAirlineAirport = {
    _count: AirlineAirportCountAggregateOutputType | null
    _min: AirlineAirportMinAggregateOutputType | null
    _max: AirlineAirportMaxAggregateOutputType | null
  }

  export type AirlineAirportMinAggregateOutputType = {
    airlineId: string | null
    airportId: string | null
  }

  export type AirlineAirportMaxAggregateOutputType = {
    airlineId: string | null
    airportId: string | null
  }

  export type AirlineAirportCountAggregateOutputType = {
    airlineId: number
    airportId: number
    _all: number
  }


  export type AirlineAirportMinAggregateInputType = {
    airlineId?: true
    airportId?: true
  }

  export type AirlineAirportMaxAggregateInputType = {
    airlineId?: true
    airportId?: true
  }

  export type AirlineAirportCountAggregateInputType = {
    airlineId?: true
    airportId?: true
    _all?: true
  }

  export type AirlineAirportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirlineAirport to aggregate.
     */
    where?: AirlineAirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineAirports to fetch.
     */
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirlineAirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineAirports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineAirports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AirlineAirports
    **/
    _count?: true | AirlineAirportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlineAirportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlineAirportMaxAggregateInputType
  }

  export type GetAirlineAirportAggregateType<T extends AirlineAirportAggregateArgs> = {
        [P in keyof T & keyof AggregateAirlineAirport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirlineAirport[P]>
      : GetScalarType<T[P], AggregateAirlineAirport[P]>
  }




  export type AirlineAirportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineAirportWhereInput
    orderBy?: AirlineAirportOrderByWithAggregationInput | AirlineAirportOrderByWithAggregationInput[]
    by: AirlineAirportScalarFieldEnum[] | AirlineAirportScalarFieldEnum
    having?: AirlineAirportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlineAirportCountAggregateInputType | true
    _min?: AirlineAirportMinAggregateInputType
    _max?: AirlineAirportMaxAggregateInputType
  }

  export type AirlineAirportGroupByOutputType = {
    airlineId: string
    airportId: string
    _count: AirlineAirportCountAggregateOutputType | null
    _min: AirlineAirportMinAggregateOutputType | null
    _max: AirlineAirportMaxAggregateOutputType | null
  }

  type GetAirlineAirportGroupByPayload<T extends AirlineAirportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineAirportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlineAirportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlineAirportGroupByOutputType[P]>
            : GetScalarType<T[P], AirlineAirportGroupByOutputType[P]>
        }
      >
    >


  export type AirlineAirportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    airlineId?: boolean
    airportId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    airport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airlineAirport"]>

  export type AirlineAirportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    airlineId?: boolean
    airportId?: boolean
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    airport?: boolean | AirportDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airlineAirport"]>

  export type AirlineAirportSelectScalar = {
    airlineId?: boolean
    airportId?: boolean
  }

  export type AirlineAirportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    airport?: boolean | AirportDefaultArgs<ExtArgs>
  }
  export type AirlineAirportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    airport?: boolean | AirportDefaultArgs<ExtArgs>
  }

  export type $AirlineAirportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AirlineAirport"
    objects: {
      airline: Prisma.$AirlinePayload<ExtArgs>
      airport: Prisma.$AirportPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      airlineId: string
      airportId: string
    }, ExtArgs["result"]["airlineAirport"]>
    composites: {}
  }

  type AirlineAirportGetPayload<S extends boolean | null | undefined | AirlineAirportDefaultArgs> = $Result.GetResult<Prisma.$AirlineAirportPayload, S>

  type AirlineAirportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AirlineAirportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AirlineAirportCountAggregateInputType | true
    }

  export interface AirlineAirportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AirlineAirport'], meta: { name: 'AirlineAirport' } }
    /**
     * Find zero or one AirlineAirport that matches the filter.
     * @param {AirlineAirportFindUniqueArgs} args - Arguments to find a AirlineAirport
     * @example
     * // Get one AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirlineAirportFindUniqueArgs>(args: SelectSubset<T, AirlineAirportFindUniqueArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AirlineAirport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AirlineAirportFindUniqueOrThrowArgs} args - Arguments to find a AirlineAirport
     * @example
     * // Get one AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirlineAirportFindUniqueOrThrowArgs>(args: SelectSubset<T, AirlineAirportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AirlineAirport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportFindFirstArgs} args - Arguments to find a AirlineAirport
     * @example
     * // Get one AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirlineAirportFindFirstArgs>(args?: SelectSubset<T, AirlineAirportFindFirstArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AirlineAirport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportFindFirstOrThrowArgs} args - Arguments to find a AirlineAirport
     * @example
     * // Get one AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirlineAirportFindFirstOrThrowArgs>(args?: SelectSubset<T, AirlineAirportFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AirlineAirports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AirlineAirports
     * const airlineAirports = await prisma.airlineAirport.findMany()
     * 
     * // Get first 10 AirlineAirports
     * const airlineAirports = await prisma.airlineAirport.findMany({ take: 10 })
     * 
     * // Only select the `airlineId`
     * const airlineAirportWithAirlineIdOnly = await prisma.airlineAirport.findMany({ select: { airlineId: true } })
     * 
     */
    findMany<T extends AirlineAirportFindManyArgs>(args?: SelectSubset<T, AirlineAirportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AirlineAirport.
     * @param {AirlineAirportCreateArgs} args - Arguments to create a AirlineAirport.
     * @example
     * // Create one AirlineAirport
     * const AirlineAirport = await prisma.airlineAirport.create({
     *   data: {
     *     // ... data to create a AirlineAirport
     *   }
     * })
     * 
     */
    create<T extends AirlineAirportCreateArgs>(args: SelectSubset<T, AirlineAirportCreateArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AirlineAirports.
     * @param {AirlineAirportCreateManyArgs} args - Arguments to create many AirlineAirports.
     * @example
     * // Create many AirlineAirports
     * const airlineAirport = await prisma.airlineAirport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirlineAirportCreateManyArgs>(args?: SelectSubset<T, AirlineAirportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AirlineAirports and returns the data saved in the database.
     * @param {AirlineAirportCreateManyAndReturnArgs} args - Arguments to create many AirlineAirports.
     * @example
     * // Create many AirlineAirports
     * const airlineAirport = await prisma.airlineAirport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AirlineAirports and only return the `airlineId`
     * const airlineAirportWithAirlineIdOnly = await prisma.airlineAirport.createManyAndReturn({ 
     *   select: { airlineId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirlineAirportCreateManyAndReturnArgs>(args?: SelectSubset<T, AirlineAirportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AirlineAirport.
     * @param {AirlineAirportDeleteArgs} args - Arguments to delete one AirlineAirport.
     * @example
     * // Delete one AirlineAirport
     * const AirlineAirport = await prisma.airlineAirport.delete({
     *   where: {
     *     // ... filter to delete one AirlineAirport
     *   }
     * })
     * 
     */
    delete<T extends AirlineAirportDeleteArgs>(args: SelectSubset<T, AirlineAirportDeleteArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AirlineAirport.
     * @param {AirlineAirportUpdateArgs} args - Arguments to update one AirlineAirport.
     * @example
     * // Update one AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirlineAirportUpdateArgs>(args: SelectSubset<T, AirlineAirportUpdateArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AirlineAirports.
     * @param {AirlineAirportDeleteManyArgs} args - Arguments to filter AirlineAirports to delete.
     * @example
     * // Delete a few AirlineAirports
     * const { count } = await prisma.airlineAirport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirlineAirportDeleteManyArgs>(args?: SelectSubset<T, AirlineAirportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AirlineAirports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AirlineAirports
     * const airlineAirport = await prisma.airlineAirport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirlineAirportUpdateManyArgs>(args: SelectSubset<T, AirlineAirportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AirlineAirport.
     * @param {AirlineAirportUpsertArgs} args - Arguments to update or create a AirlineAirport.
     * @example
     * // Update or create a AirlineAirport
     * const airlineAirport = await prisma.airlineAirport.upsert({
     *   create: {
     *     // ... data to create a AirlineAirport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AirlineAirport we want to update
     *   }
     * })
     */
    upsert<T extends AirlineAirportUpsertArgs>(args: SelectSubset<T, AirlineAirportUpsertArgs<ExtArgs>>): Prisma__AirlineAirportClient<$Result.GetResult<Prisma.$AirlineAirportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AirlineAirports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportCountArgs} args - Arguments to filter AirlineAirports to count.
     * @example
     * // Count the number of AirlineAirports
     * const count = await prisma.airlineAirport.count({
     *   where: {
     *     // ... the filter for the AirlineAirports we want to count
     *   }
     * })
    **/
    count<T extends AirlineAirportCountArgs>(
      args?: Subset<T, AirlineAirportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineAirportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AirlineAirport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AirlineAirportAggregateArgs>(args: Subset<T, AirlineAirportAggregateArgs>): Prisma.PrismaPromise<GetAirlineAirportAggregateType<T>>

    /**
     * Group by AirlineAirport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineAirportGroupByArgs} args - Group by arguments.
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
      T extends AirlineAirportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirlineAirportGroupByArgs['orderBy'] }
        : { orderBy?: AirlineAirportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AirlineAirportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlineAirportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AirlineAirport model
   */
  readonly fields: AirlineAirportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AirlineAirport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirlineAirportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    airport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AirlineAirport model
   */ 
  interface AirlineAirportFieldRefs {
    readonly airlineId: FieldRef<"AirlineAirport", 'String'>
    readonly airportId: FieldRef<"AirlineAirport", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AirlineAirport findUnique
   */
  export type AirlineAirportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter, which AirlineAirport to fetch.
     */
    where: AirlineAirportWhereUniqueInput
  }

  /**
   * AirlineAirport findUniqueOrThrow
   */
  export type AirlineAirportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter, which AirlineAirport to fetch.
     */
    where: AirlineAirportWhereUniqueInput
  }

  /**
   * AirlineAirport findFirst
   */
  export type AirlineAirportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter, which AirlineAirport to fetch.
     */
    where?: AirlineAirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineAirports to fetch.
     */
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirlineAirports.
     */
    cursor?: AirlineAirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineAirports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineAirports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirlineAirports.
     */
    distinct?: AirlineAirportScalarFieldEnum | AirlineAirportScalarFieldEnum[]
  }

  /**
   * AirlineAirport findFirstOrThrow
   */
  export type AirlineAirportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter, which AirlineAirport to fetch.
     */
    where?: AirlineAirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineAirports to fetch.
     */
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirlineAirports.
     */
    cursor?: AirlineAirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineAirports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineAirports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirlineAirports.
     */
    distinct?: AirlineAirportScalarFieldEnum | AirlineAirportScalarFieldEnum[]
  }

  /**
   * AirlineAirport findMany
   */
  export type AirlineAirportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter, which AirlineAirports to fetch.
     */
    where?: AirlineAirportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineAirports to fetch.
     */
    orderBy?: AirlineAirportOrderByWithRelationInput | AirlineAirportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AirlineAirports.
     */
    cursor?: AirlineAirportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineAirports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineAirports.
     */
    skip?: number
    distinct?: AirlineAirportScalarFieldEnum | AirlineAirportScalarFieldEnum[]
  }

  /**
   * AirlineAirport create
   */
  export type AirlineAirportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * The data needed to create a AirlineAirport.
     */
    data: XOR<AirlineAirportCreateInput, AirlineAirportUncheckedCreateInput>
  }

  /**
   * AirlineAirport createMany
   */
  export type AirlineAirportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AirlineAirports.
     */
    data: AirlineAirportCreateManyInput | AirlineAirportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AirlineAirport createManyAndReturn
   */
  export type AirlineAirportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AirlineAirports.
     */
    data: AirlineAirportCreateManyInput | AirlineAirportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AirlineAirport update
   */
  export type AirlineAirportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * The data needed to update a AirlineAirport.
     */
    data: XOR<AirlineAirportUpdateInput, AirlineAirportUncheckedUpdateInput>
    /**
     * Choose, which AirlineAirport to update.
     */
    where: AirlineAirportWhereUniqueInput
  }

  /**
   * AirlineAirport updateMany
   */
  export type AirlineAirportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AirlineAirports.
     */
    data: XOR<AirlineAirportUpdateManyMutationInput, AirlineAirportUncheckedUpdateManyInput>
    /**
     * Filter which AirlineAirports to update
     */
    where?: AirlineAirportWhereInput
  }

  /**
   * AirlineAirport upsert
   */
  export type AirlineAirportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * The filter to search for the AirlineAirport to update in case it exists.
     */
    where: AirlineAirportWhereUniqueInput
    /**
     * In case the AirlineAirport found by the `where` argument doesn't exist, create a new AirlineAirport with this data.
     */
    create: XOR<AirlineAirportCreateInput, AirlineAirportUncheckedCreateInput>
    /**
     * In case the AirlineAirport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirlineAirportUpdateInput, AirlineAirportUncheckedUpdateInput>
  }

  /**
   * AirlineAirport delete
   */
  export type AirlineAirportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
    /**
     * Filter which AirlineAirport to delete.
     */
    where: AirlineAirportWhereUniqueInput
  }

  /**
   * AirlineAirport deleteMany
   */
  export type AirlineAirportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirlineAirports to delete
     */
    where?: AirlineAirportWhereInput
  }

  /**
   * AirlineAirport without action
   */
  export type AirlineAirportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineAirport
     */
    select?: AirlineAirportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineAirportInclude<ExtArgs> | null
  }


  /**
   * Model Flight
   */

  export type AggregateFlight = {
    _count: FlightCountAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  export type FlightMinAggregateOutputType = {
    id: string | null
    originAirportIata: string | null
    destinationAirportIata: string | null
    departureDate: Date | null
    status: $Enums.FlightStatus | null
  }

  export type FlightMaxAggregateOutputType = {
    id: string | null
    originAirportIata: string | null
    destinationAirportIata: string | null
    departureDate: Date | null
    status: $Enums.FlightStatus | null
  }

  export type FlightCountAggregateOutputType = {
    id: number
    originAirportIata: number
    destinationAirportIata: number
    departureDate: number
    status: number
    _all: number
  }


  export type FlightMinAggregateInputType = {
    id?: true
    originAirportIata?: true
    destinationAirportIata?: true
    departureDate?: true
    status?: true
  }

  export type FlightMaxAggregateInputType = {
    id?: true
    originAirportIata?: true
    destinationAirportIata?: true
    departureDate?: true
    status?: true
  }

  export type FlightCountAggregateInputType = {
    id?: true
    originAirportIata?: true
    destinationAirportIata?: true
    departureDate?: true
    status?: true
    _all?: true
  }

  export type FlightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flight to aggregate.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flights
    **/
    _count?: true | FlightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightMaxAggregateInputType
  }

  export type GetFlightAggregateType<T extends FlightAggregateArgs> = {
        [P in keyof T & keyof AggregateFlight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlight[P]>
      : GetScalarType<T[P], AggregateFlight[P]>
  }




  export type FlightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightWhereInput
    orderBy?: FlightOrderByWithAggregationInput | FlightOrderByWithAggregationInput[]
    by: FlightScalarFieldEnum[] | FlightScalarFieldEnum
    having?: FlightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightCountAggregateInputType | true
    _min?: FlightMinAggregateInputType
    _max?: FlightMaxAggregateInputType
  }

  export type FlightGroupByOutputType = {
    id: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date
    status: $Enums.FlightStatus
    _count: FlightCountAggregateOutputType | null
    _min: FlightMinAggregateOutputType | null
    _max: FlightMaxAggregateOutputType | null
  }

  type GetFlightGroupByPayload<T extends FlightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightGroupByOutputType[P]>
            : GetScalarType<T[P], FlightGroupByOutputType[P]>
        }
      >
    >


  export type FlightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originAirportIata?: boolean
    destinationAirportIata?: boolean
    departureDate?: boolean
    status?: boolean
    segments?: boolean | Flight$segmentsArgs<ExtArgs>
    flightClasses?: boolean | Flight$flightClassesArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    originAirportIata?: boolean
    destinationAirportIata?: boolean
    departureDate?: boolean
    status?: boolean
  }, ExtArgs["result"]["flight"]>

  export type FlightSelectScalar = {
    id?: boolean
    originAirportIata?: boolean
    destinationAirportIata?: boolean
    departureDate?: boolean
    status?: boolean
  }

  export type FlightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segments?: boolean | Flight$segmentsArgs<ExtArgs>
    flightClasses?: boolean | Flight$flightClassesArgs<ExtArgs>
    _count?: boolean | FlightCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FlightIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FlightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flight"
    objects: {
      segments: Prisma.$SegmentPayload<ExtArgs>[]
      flightClasses: Prisma.$FlightClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      originAirportIata: string
      destinationAirportIata: string
      departureDate: Date
      status: $Enums.FlightStatus
    }, ExtArgs["result"]["flight"]>
    composites: {}
  }

  type FlightGetPayload<S extends boolean | null | undefined | FlightDefaultArgs> = $Result.GetResult<Prisma.$FlightPayload, S>

  type FlightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FlightFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FlightCountAggregateInputType | true
    }

  export interface FlightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flight'], meta: { name: 'Flight' } }
    /**
     * Find zero or one Flight that matches the filter.
     * @param {FlightFindUniqueArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightFindUniqueArgs>(args: SelectSubset<T, FlightFindUniqueArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Flight that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FlightFindUniqueOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Flight that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightFindFirstArgs>(args?: SelectSubset<T, FlightFindFirstArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Flight that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindFirstOrThrowArgs} args - Arguments to find a Flight
     * @example
     * // Get one Flight
     * const flight = await prisma.flight.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Flights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flights
     * const flights = await prisma.flight.findMany()
     * 
     * // Get first 10 Flights
     * const flights = await prisma.flight.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightWithIdOnly = await prisma.flight.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightFindManyArgs>(args?: SelectSubset<T, FlightFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Flight.
     * @param {FlightCreateArgs} args - Arguments to create a Flight.
     * @example
     * // Create one Flight
     * const Flight = await prisma.flight.create({
     *   data: {
     *     // ... data to create a Flight
     *   }
     * })
     * 
     */
    create<T extends FlightCreateArgs>(args: SelectSubset<T, FlightCreateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Flights.
     * @param {FlightCreateManyArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightCreateManyArgs>(args?: SelectSubset<T, FlightCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flights and returns the data saved in the database.
     * @param {FlightCreateManyAndReturnArgs} args - Arguments to create many Flights.
     * @example
     * // Create many Flights
     * const flight = await prisma.flight.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flights and only return the `id`
     * const flightWithIdOnly = await prisma.flight.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Flight.
     * @param {FlightDeleteArgs} args - Arguments to delete one Flight.
     * @example
     * // Delete one Flight
     * const Flight = await prisma.flight.delete({
     *   where: {
     *     // ... filter to delete one Flight
     *   }
     * })
     * 
     */
    delete<T extends FlightDeleteArgs>(args: SelectSubset<T, FlightDeleteArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Flight.
     * @param {FlightUpdateArgs} args - Arguments to update one Flight.
     * @example
     * // Update one Flight
     * const flight = await prisma.flight.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightUpdateArgs>(args: SelectSubset<T, FlightUpdateArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Flights.
     * @param {FlightDeleteManyArgs} args - Arguments to filter Flights to delete.
     * @example
     * // Delete a few Flights
     * const { count } = await prisma.flight.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightDeleteManyArgs>(args?: SelectSubset<T, FlightDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flights
     * const flight = await prisma.flight.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightUpdateManyArgs>(args: SelectSubset<T, FlightUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flight.
     * @param {FlightUpsertArgs} args - Arguments to update or create a Flight.
     * @example
     * // Update or create a Flight
     * const flight = await prisma.flight.upsert({
     *   create: {
     *     // ... data to create a Flight
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flight we want to update
     *   }
     * })
     */
    upsert<T extends FlightUpsertArgs>(args: SelectSubset<T, FlightUpsertArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Flights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightCountArgs} args - Arguments to filter Flights to count.
     * @example
     * // Count the number of Flights
     * const count = await prisma.flight.count({
     *   where: {
     *     // ... the filter for the Flights we want to count
     *   }
     * })
    **/
    count<T extends FlightCountArgs>(
      args?: Subset<T, FlightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlightAggregateArgs>(args: Subset<T, FlightAggregateArgs>): Prisma.PrismaPromise<GetFlightAggregateType<T>>

    /**
     * Group by Flight.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightGroupByArgs} args - Group by arguments.
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
      T extends FlightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightGroupByArgs['orderBy'] }
        : { orderBy?: FlightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flight model
   */
  readonly fields: FlightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flight.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    segments<T extends Flight$segmentsArgs<ExtArgs> = {}>(args?: Subset<T, Flight$segmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany"> | Null>
    flightClasses<T extends Flight$flightClassesArgs<ExtArgs> = {}>(args?: Subset<T, Flight$flightClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flight model
   */ 
  interface FlightFieldRefs {
    readonly id: FieldRef<"Flight", 'String'>
    readonly originAirportIata: FieldRef<"Flight", 'String'>
    readonly destinationAirportIata: FieldRef<"Flight", 'String'>
    readonly departureDate: FieldRef<"Flight", 'DateTime'>
    readonly status: FieldRef<"Flight", 'FlightStatus'>
  }
    

  // Custom InputTypes
  /**
   * Flight findUnique
   */
  export type FlightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findUniqueOrThrow
   */
  export type FlightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight findFirst
   */
  export type FlightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findFirstOrThrow
   */
  export type FlightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flight to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flights.
     */
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight findMany
   */
  export type FlightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter, which Flights to fetch.
     */
    where?: FlightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flights to fetch.
     */
    orderBy?: FlightOrderByWithRelationInput | FlightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flights.
     */
    cursor?: FlightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flights.
     */
    skip?: number
    distinct?: FlightScalarFieldEnum | FlightScalarFieldEnum[]
  }

  /**
   * Flight create
   */
  export type FlightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to create a Flight.
     */
    data: XOR<FlightCreateInput, FlightUncheckedCreateInput>
  }

  /**
   * Flight createMany
   */
  export type FlightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flight createManyAndReturn
   */
  export type FlightCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Flights.
     */
    data: FlightCreateManyInput | FlightCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flight update
   */
  export type FlightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The data needed to update a Flight.
     */
    data: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
    /**
     * Choose, which Flight to update.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight updateMany
   */
  export type FlightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flights.
     */
    data: XOR<FlightUpdateManyMutationInput, FlightUncheckedUpdateManyInput>
    /**
     * Filter which Flights to update
     */
    where?: FlightWhereInput
  }

  /**
   * Flight upsert
   */
  export type FlightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * The filter to search for the Flight to update in case it exists.
     */
    where: FlightWhereUniqueInput
    /**
     * In case the Flight found by the `where` argument doesn't exist, create a new Flight with this data.
     */
    create: XOR<FlightCreateInput, FlightUncheckedCreateInput>
    /**
     * In case the Flight was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightUpdateInput, FlightUncheckedUpdateInput>
  }

  /**
   * Flight delete
   */
  export type FlightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    /**
     * Filter which Flight to delete.
     */
    where: FlightWhereUniqueInput
  }

  /**
   * Flight deleteMany
   */
  export type FlightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flights to delete
     */
    where?: FlightWhereInput
  }

  /**
   * Flight.segments
   */
  export type Flight$segmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    cursor?: SegmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Flight.flightClasses
   */
  export type Flight$flightClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    where?: FlightClassWhereInput
    orderBy?: FlightClassOrderByWithRelationInput | FlightClassOrderByWithRelationInput[]
    cursor?: FlightClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightClassScalarFieldEnum | FlightClassScalarFieldEnum[]
  }

  /**
   * Flight without action
   */
  export type FlightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
  }


  /**
   * Model Segment
   */

  export type AggregateSegment = {
    _count: SegmentCountAggregateOutputType | null
    _avg: SegmentAvgAggregateOutputType | null
    _sum: SegmentSumAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  export type SegmentAvgAggregateOutputType = {
    estimatedDuration: number | null
  }

  export type SegmentSumAggregateOutputType = {
    estimatedDuration: number | null
  }

  export type SegmentMinAggregateOutputType = {
    id: string | null
    segmentNumber: string | null
    originAirportId: string | null
    destinationAirportId: string | null
    departureDateTime: Date | null
    arrivalDateTime: Date | null
    airlineId: string | null
    aircraftId: string | null
    estimatedDuration: number | null
    flightId: string | null
  }

  export type SegmentMaxAggregateOutputType = {
    id: string | null
    segmentNumber: string | null
    originAirportId: string | null
    destinationAirportId: string | null
    departureDateTime: Date | null
    arrivalDateTime: Date | null
    airlineId: string | null
    aircraftId: string | null
    estimatedDuration: number | null
    flightId: string | null
  }

  export type SegmentCountAggregateOutputType = {
    id: number
    segmentNumber: number
    originAirportId: number
    destinationAirportId: number
    departureDateTime: number
    arrivalDateTime: number
    airlineId: number
    aircraftId: number
    estimatedDuration: number
    flightId: number
    _all: number
  }


  export type SegmentAvgAggregateInputType = {
    estimatedDuration?: true
  }

  export type SegmentSumAggregateInputType = {
    estimatedDuration?: true
  }

  export type SegmentMinAggregateInputType = {
    id?: true
    segmentNumber?: true
    originAirportId?: true
    destinationAirportId?: true
    departureDateTime?: true
    arrivalDateTime?: true
    airlineId?: true
    aircraftId?: true
    estimatedDuration?: true
    flightId?: true
  }

  export type SegmentMaxAggregateInputType = {
    id?: true
    segmentNumber?: true
    originAirportId?: true
    destinationAirportId?: true
    departureDateTime?: true
    arrivalDateTime?: true
    airlineId?: true
    aircraftId?: true
    estimatedDuration?: true
    flightId?: true
  }

  export type SegmentCountAggregateInputType = {
    id?: true
    segmentNumber?: true
    originAirportId?: true
    destinationAirportId?: true
    departureDateTime?: true
    arrivalDateTime?: true
    airlineId?: true
    aircraftId?: true
    estimatedDuration?: true
    flightId?: true
    _all?: true
  }

  export type SegmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segment to aggregate.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Segments
    **/
    _count?: true | SegmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SegmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SegmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentMaxAggregateInputType
  }

  export type GetSegmentAggregateType<T extends SegmentAggregateArgs> = {
        [P in keyof T & keyof AggregateSegment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegment[P]>
      : GetScalarType<T[P], AggregateSegment[P]>
  }




  export type SegmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentWhereInput
    orderBy?: SegmentOrderByWithAggregationInput | SegmentOrderByWithAggregationInput[]
    by: SegmentScalarFieldEnum[] | SegmentScalarFieldEnum
    having?: SegmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentCountAggregateInputType | true
    _avg?: SegmentAvgAggregateInputType
    _sum?: SegmentSumAggregateInputType
    _min?: SegmentMinAggregateInputType
    _max?: SegmentMaxAggregateInputType
  }

  export type SegmentGroupByOutputType = {
    id: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date
    arrivalDateTime: Date
    airlineId: string
    aircraftId: string | null
    estimatedDuration: number
    flightId: string | null
    _count: SegmentCountAggregateOutputType | null
    _avg: SegmentAvgAggregateOutputType | null
    _sum: SegmentSumAggregateOutputType | null
    _min: SegmentMinAggregateOutputType | null
    _max: SegmentMaxAggregateOutputType | null
  }

  type GetSegmentGroupByPayload<T extends SegmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentGroupByOutputType[P]>
        }
      >
    >


  export type SegmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    segmentNumber?: boolean
    originAirportId?: boolean
    destinationAirportId?: boolean
    departureDateTime?: boolean
    arrivalDateTime?: boolean
    airlineId?: boolean
    aircraftId?: boolean
    estimatedDuration?: boolean
    flightId?: boolean
    flight?: boolean | Segment$flightArgs<ExtArgs>
    originAirport?: boolean | AirportDefaultArgs<ExtArgs>
    destinationAirport?: boolean | AirportDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    aircraft?: boolean | Segment$aircraftArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    segmentNumber?: boolean
    originAirportId?: boolean
    destinationAirportId?: boolean
    departureDateTime?: boolean
    arrivalDateTime?: boolean
    airlineId?: boolean
    aircraftId?: boolean
    estimatedDuration?: boolean
    flightId?: boolean
    flight?: boolean | Segment$flightArgs<ExtArgs>
    originAirport?: boolean | AirportDefaultArgs<ExtArgs>
    destinationAirport?: boolean | AirportDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    aircraft?: boolean | Segment$aircraftArgs<ExtArgs>
  }, ExtArgs["result"]["segment"]>

  export type SegmentSelectScalar = {
    id?: boolean
    segmentNumber?: boolean
    originAirportId?: boolean
    destinationAirportId?: boolean
    departureDateTime?: boolean
    arrivalDateTime?: boolean
    airlineId?: boolean
    aircraftId?: boolean
    estimatedDuration?: boolean
    flightId?: boolean
  }

  export type SegmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | Segment$flightArgs<ExtArgs>
    originAirport?: boolean | AirportDefaultArgs<ExtArgs>
    destinationAirport?: boolean | AirportDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    aircraft?: boolean | Segment$aircraftArgs<ExtArgs>
  }
  export type SegmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | Segment$flightArgs<ExtArgs>
    originAirport?: boolean | AirportDefaultArgs<ExtArgs>
    destinationAirport?: boolean | AirportDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
    aircraft?: boolean | Segment$aircraftArgs<ExtArgs>
  }

  export type $SegmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Segment"
    objects: {
      flight: Prisma.$FlightPayload<ExtArgs> | null
      originAirport: Prisma.$AirportPayload<ExtArgs>
      destinationAirport: Prisma.$AirportPayload<ExtArgs>
      airline: Prisma.$AirlinePayload<ExtArgs>
      aircraft: Prisma.$AircraftPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      segmentNumber: string
      originAirportId: string
      destinationAirportId: string
      departureDateTime: Date
      arrivalDateTime: Date
      airlineId: string
      aircraftId: string | null
      estimatedDuration: number
      flightId: string | null
    }, ExtArgs["result"]["segment"]>
    composites: {}
  }

  type SegmentGetPayload<S extends boolean | null | undefined | SegmentDefaultArgs> = $Result.GetResult<Prisma.$SegmentPayload, S>

  type SegmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SegmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SegmentCountAggregateInputType | true
    }

  export interface SegmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Segment'], meta: { name: 'Segment' } }
    /**
     * Find zero or one Segment that matches the filter.
     * @param {SegmentFindUniqueArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SegmentFindUniqueArgs>(args: SelectSubset<T, SegmentFindUniqueArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Segment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SegmentFindUniqueOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SegmentFindUniqueOrThrowArgs>(args: SelectSubset<T, SegmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Segment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SegmentFindFirstArgs>(args?: SelectSubset<T, SegmentFindFirstArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Segment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindFirstOrThrowArgs} args - Arguments to find a Segment
     * @example
     * // Get one Segment
     * const segment = await prisma.segment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SegmentFindFirstOrThrowArgs>(args?: SelectSubset<T, SegmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Segments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Segments
     * const segments = await prisma.segment.findMany()
     * 
     * // Get first 10 Segments
     * const segments = await prisma.segment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentWithIdOnly = await prisma.segment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SegmentFindManyArgs>(args?: SelectSubset<T, SegmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Segment.
     * @param {SegmentCreateArgs} args - Arguments to create a Segment.
     * @example
     * // Create one Segment
     * const Segment = await prisma.segment.create({
     *   data: {
     *     // ... data to create a Segment
     *   }
     * })
     * 
     */
    create<T extends SegmentCreateArgs>(args: SelectSubset<T, SegmentCreateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Segments.
     * @param {SegmentCreateManyArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SegmentCreateManyArgs>(args?: SelectSubset<T, SegmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Segments and returns the data saved in the database.
     * @param {SegmentCreateManyAndReturnArgs} args - Arguments to create many Segments.
     * @example
     * // Create many Segments
     * const segment = await prisma.segment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Segments and only return the `id`
     * const segmentWithIdOnly = await prisma.segment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SegmentCreateManyAndReturnArgs>(args?: SelectSubset<T, SegmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Segment.
     * @param {SegmentDeleteArgs} args - Arguments to delete one Segment.
     * @example
     * // Delete one Segment
     * const Segment = await prisma.segment.delete({
     *   where: {
     *     // ... filter to delete one Segment
     *   }
     * })
     * 
     */
    delete<T extends SegmentDeleteArgs>(args: SelectSubset<T, SegmentDeleteArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Segment.
     * @param {SegmentUpdateArgs} args - Arguments to update one Segment.
     * @example
     * // Update one Segment
     * const segment = await prisma.segment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SegmentUpdateArgs>(args: SelectSubset<T, SegmentUpdateArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Segments.
     * @param {SegmentDeleteManyArgs} args - Arguments to filter Segments to delete.
     * @example
     * // Delete a few Segments
     * const { count } = await prisma.segment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SegmentDeleteManyArgs>(args?: SelectSubset<T, SegmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Segments
     * const segment = await prisma.segment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SegmentUpdateManyArgs>(args: SelectSubset<T, SegmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Segment.
     * @param {SegmentUpsertArgs} args - Arguments to update or create a Segment.
     * @example
     * // Update or create a Segment
     * const segment = await prisma.segment.upsert({
     *   create: {
     *     // ... data to create a Segment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Segment we want to update
     *   }
     * })
     */
    upsert<T extends SegmentUpsertArgs>(args: SelectSubset<T, SegmentUpsertArgs<ExtArgs>>): Prisma__SegmentClient<$Result.GetResult<Prisma.$SegmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Segments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentCountArgs} args - Arguments to filter Segments to count.
     * @example
     * // Count the number of Segments
     * const count = await prisma.segment.count({
     *   where: {
     *     // ... the filter for the Segments we want to count
     *   }
     * })
    **/
    count<T extends SegmentCountArgs>(
      args?: Subset<T, SegmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SegmentAggregateArgs>(args: Subset<T, SegmentAggregateArgs>): Prisma.PrismaPromise<GetSegmentAggregateType<T>>

    /**
     * Group by Segment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentGroupByArgs} args - Group by arguments.
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
      T extends SegmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SegmentGroupByArgs['orderBy'] }
        : { orderBy?: SegmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SegmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Segment model
   */
  readonly fields: SegmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Segment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SegmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flight<T extends Segment$flightArgs<ExtArgs> = {}>(args?: Subset<T, Segment$flightArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    originAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    destinationAirport<T extends AirportDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirportDefaultArgs<ExtArgs>>): Prisma__AirportClient<$Result.GetResult<Prisma.$AirportPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    aircraft<T extends Segment$aircraftArgs<ExtArgs> = {}>(args?: Subset<T, Segment$aircraftArgs<ExtArgs>>): Prisma__AircraftClient<$Result.GetResult<Prisma.$AircraftPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Segment model
   */ 
  interface SegmentFieldRefs {
    readonly id: FieldRef<"Segment", 'String'>
    readonly segmentNumber: FieldRef<"Segment", 'String'>
    readonly originAirportId: FieldRef<"Segment", 'String'>
    readonly destinationAirportId: FieldRef<"Segment", 'String'>
    readonly departureDateTime: FieldRef<"Segment", 'DateTime'>
    readonly arrivalDateTime: FieldRef<"Segment", 'DateTime'>
    readonly airlineId: FieldRef<"Segment", 'String'>
    readonly aircraftId: FieldRef<"Segment", 'String'>
    readonly estimatedDuration: FieldRef<"Segment", 'Int'>
    readonly flightId: FieldRef<"Segment", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Segment findUnique
   */
  export type SegmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findUniqueOrThrow
   */
  export type SegmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment findFirst
   */
  export type SegmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findFirstOrThrow
   */
  export type SegmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segment to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segments.
     */
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment findMany
   */
  export type SegmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter, which Segments to fetch.
     */
    where?: SegmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segments to fetch.
     */
    orderBy?: SegmentOrderByWithRelationInput | SegmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Segments.
     */
    cursor?: SegmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segments.
     */
    skip?: number
    distinct?: SegmentScalarFieldEnum | SegmentScalarFieldEnum[]
  }

  /**
   * Segment create
   */
  export type SegmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Segment.
     */
    data: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
  }

  /**
   * Segment createMany
   */
  export type SegmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Segment createManyAndReturn
   */
  export type SegmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Segments.
     */
    data: SegmentCreateManyInput | SegmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Segment update
   */
  export type SegmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Segment.
     */
    data: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
    /**
     * Choose, which Segment to update.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment updateMany
   */
  export type SegmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Segments.
     */
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyInput>
    /**
     * Filter which Segments to update
     */
    where?: SegmentWhereInput
  }

  /**
   * Segment upsert
   */
  export type SegmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Segment to update in case it exists.
     */
    where: SegmentWhereUniqueInput
    /**
     * In case the Segment found by the `where` argument doesn't exist, create a new Segment with this data.
     */
    create: XOR<SegmentCreateInput, SegmentUncheckedCreateInput>
    /**
     * In case the Segment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SegmentUpdateInput, SegmentUncheckedUpdateInput>
  }

  /**
   * Segment delete
   */
  export type SegmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
    /**
     * Filter which Segment to delete.
     */
    where: SegmentWhereUniqueInput
  }

  /**
   * Segment deleteMany
   */
  export type SegmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segments to delete
     */
    where?: SegmentWhereInput
  }

  /**
   * Segment.flight
   */
  export type Segment$flightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flight
     */
    select?: FlightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightInclude<ExtArgs> | null
    where?: FlightWhereInput
  }

  /**
   * Segment.aircraft
   */
  export type Segment$aircraftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aircraft
     */
    select?: AircraftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AircraftInclude<ExtArgs> | null
    where?: AircraftWhereInput
  }

  /**
   * Segment without action
   */
  export type SegmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segment
     */
    select?: SegmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentInclude<ExtArgs> | null
  }


  /**
   * Model FlightClass
   */

  export type AggregateFlightClass = {
    _count: FlightClassCountAggregateOutputType | null
    _avg: FlightClassAvgAggregateOutputType | null
    _sum: FlightClassSumAggregateOutputType | null
    _min: FlightClassMinAggregateOutputType | null
    _max: FlightClassMaxAggregateOutputType | null
  }

  export type FlightClassAvgAggregateOutputType = {
    availableSeats: number | null
    basePrice: Decimal | null
  }

  export type FlightClassSumAggregateOutputType = {
    availableSeats: number | null
    basePrice: Decimal | null
  }

  export type FlightClassMinAggregateOutputType = {
    id: string | null
    flightId: string | null
    cabinClass: $Enums.CabinClass | null
    availableSeats: number | null
    basePrice: Decimal | null
  }

  export type FlightClassMaxAggregateOutputType = {
    id: string | null
    flightId: string | null
    cabinClass: $Enums.CabinClass | null
    availableSeats: number | null
    basePrice: Decimal | null
  }

  export type FlightClassCountAggregateOutputType = {
    id: number
    flightId: number
    cabinClass: number
    availableSeats: number
    basePrice: number
    _all: number
  }


  export type FlightClassAvgAggregateInputType = {
    availableSeats?: true
    basePrice?: true
  }

  export type FlightClassSumAggregateInputType = {
    availableSeats?: true
    basePrice?: true
  }

  export type FlightClassMinAggregateInputType = {
    id?: true
    flightId?: true
    cabinClass?: true
    availableSeats?: true
    basePrice?: true
  }

  export type FlightClassMaxAggregateInputType = {
    id?: true
    flightId?: true
    cabinClass?: true
    availableSeats?: true
    basePrice?: true
  }

  export type FlightClassCountAggregateInputType = {
    id?: true
    flightId?: true
    cabinClass?: true
    availableSeats?: true
    basePrice?: true
    _all?: true
  }

  export type FlightClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightClass to aggregate.
     */
    where?: FlightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightClasses to fetch.
     */
    orderBy?: FlightClassOrderByWithRelationInput | FlightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightClasses
    **/
    _count?: true | FlightClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlightClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlightClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightClassMaxAggregateInputType
  }

  export type GetFlightClassAggregateType<T extends FlightClassAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightClass[P]>
      : GetScalarType<T[P], AggregateFlightClass[P]>
  }




  export type FlightClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightClassWhereInput
    orderBy?: FlightClassOrderByWithAggregationInput | FlightClassOrderByWithAggregationInput[]
    by: FlightClassScalarFieldEnum[] | FlightClassScalarFieldEnum
    having?: FlightClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightClassCountAggregateInputType | true
    _avg?: FlightClassAvgAggregateInputType
    _sum?: FlightClassSumAggregateInputType
    _min?: FlightClassMinAggregateInputType
    _max?: FlightClassMaxAggregateInputType
  }

  export type FlightClassGroupByOutputType = {
    id: string
    flightId: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal
    _count: FlightClassCountAggregateOutputType | null
    _avg: FlightClassAvgAggregateOutputType | null
    _sum: FlightClassSumAggregateOutputType | null
    _min: FlightClassMinAggregateOutputType | null
    _max: FlightClassMaxAggregateOutputType | null
  }

  type GetFlightClassGroupByPayload<T extends FlightClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightClassGroupByOutputType[P]>
            : GetScalarType<T[P], FlightClassGroupByOutputType[P]>
        }
      >
    >


  export type FlightClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightId?: boolean
    cabinClass?: boolean
    availableSeats?: boolean
    basePrice?: boolean
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightClass"]>

  export type FlightClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flightId?: boolean
    cabinClass?: boolean
    availableSeats?: boolean
    basePrice?: boolean
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightClass"]>

  export type FlightClassSelectScalar = {
    id?: boolean
    flightId?: boolean
    cabinClass?: boolean
    availableSeats?: boolean
    basePrice?: boolean
  }

  export type FlightClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }
  export type FlightClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight?: boolean | FlightDefaultArgs<ExtArgs>
  }

  export type $FlightClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightClass"
    objects: {
      flight: Prisma.$FlightPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flightId: string
      cabinClass: $Enums.CabinClass
      availableSeats: number
      basePrice: Prisma.Decimal
    }, ExtArgs["result"]["flightClass"]>
    composites: {}
  }

  type FlightClassGetPayload<S extends boolean | null | undefined | FlightClassDefaultArgs> = $Result.GetResult<Prisma.$FlightClassPayload, S>

  type FlightClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FlightClassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FlightClassCountAggregateInputType | true
    }

  export interface FlightClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightClass'], meta: { name: 'FlightClass' } }
    /**
     * Find zero or one FlightClass that matches the filter.
     * @param {FlightClassFindUniqueArgs} args - Arguments to find a FlightClass
     * @example
     * // Get one FlightClass
     * const flightClass = await prisma.flightClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightClassFindUniqueArgs>(args: SelectSubset<T, FlightClassFindUniqueArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FlightClass that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FlightClassFindUniqueOrThrowArgs} args - Arguments to find a FlightClass
     * @example
     * // Get one FlightClass
     * const flightClass = await prisma.flightClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightClassFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FlightClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassFindFirstArgs} args - Arguments to find a FlightClass
     * @example
     * // Get one FlightClass
     * const flightClass = await prisma.flightClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightClassFindFirstArgs>(args?: SelectSubset<T, FlightClassFindFirstArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FlightClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassFindFirstOrThrowArgs} args - Arguments to find a FlightClass
     * @example
     * // Get one FlightClass
     * const flightClass = await prisma.flightClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightClassFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FlightClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightClasses
     * const flightClasses = await prisma.flightClass.findMany()
     * 
     * // Get first 10 FlightClasses
     * const flightClasses = await prisma.flightClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightClassWithIdOnly = await prisma.flightClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightClassFindManyArgs>(args?: SelectSubset<T, FlightClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FlightClass.
     * @param {FlightClassCreateArgs} args - Arguments to create a FlightClass.
     * @example
     * // Create one FlightClass
     * const FlightClass = await prisma.flightClass.create({
     *   data: {
     *     // ... data to create a FlightClass
     *   }
     * })
     * 
     */
    create<T extends FlightClassCreateArgs>(args: SelectSubset<T, FlightClassCreateArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FlightClasses.
     * @param {FlightClassCreateManyArgs} args - Arguments to create many FlightClasses.
     * @example
     * // Create many FlightClasses
     * const flightClass = await prisma.flightClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightClassCreateManyArgs>(args?: SelectSubset<T, FlightClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FlightClasses and returns the data saved in the database.
     * @param {FlightClassCreateManyAndReturnArgs} args - Arguments to create many FlightClasses.
     * @example
     * // Create many FlightClasses
     * const flightClass = await prisma.flightClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FlightClasses and only return the `id`
     * const flightClassWithIdOnly = await prisma.flightClass.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlightClassCreateManyAndReturnArgs>(args?: SelectSubset<T, FlightClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FlightClass.
     * @param {FlightClassDeleteArgs} args - Arguments to delete one FlightClass.
     * @example
     * // Delete one FlightClass
     * const FlightClass = await prisma.flightClass.delete({
     *   where: {
     *     // ... filter to delete one FlightClass
     *   }
     * })
     * 
     */
    delete<T extends FlightClassDeleteArgs>(args: SelectSubset<T, FlightClassDeleteArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FlightClass.
     * @param {FlightClassUpdateArgs} args - Arguments to update one FlightClass.
     * @example
     * // Update one FlightClass
     * const flightClass = await prisma.flightClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightClassUpdateArgs>(args: SelectSubset<T, FlightClassUpdateArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FlightClasses.
     * @param {FlightClassDeleteManyArgs} args - Arguments to filter FlightClasses to delete.
     * @example
     * // Delete a few FlightClasses
     * const { count } = await prisma.flightClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightClassDeleteManyArgs>(args?: SelectSubset<T, FlightClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightClasses
     * const flightClass = await prisma.flightClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightClassUpdateManyArgs>(args: SelectSubset<T, FlightClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlightClass.
     * @param {FlightClassUpsertArgs} args - Arguments to update or create a FlightClass.
     * @example
     * // Update or create a FlightClass
     * const flightClass = await prisma.flightClass.upsert({
     *   create: {
     *     // ... data to create a FlightClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightClass we want to update
     *   }
     * })
     */
    upsert<T extends FlightClassUpsertArgs>(args: SelectSubset<T, FlightClassUpsertArgs<ExtArgs>>): Prisma__FlightClassClient<$Result.GetResult<Prisma.$FlightClassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FlightClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassCountArgs} args - Arguments to filter FlightClasses to count.
     * @example
     * // Count the number of FlightClasses
     * const count = await prisma.flightClass.count({
     *   where: {
     *     // ... the filter for the FlightClasses we want to count
     *   }
     * })
    **/
    count<T extends FlightClassCountArgs>(
      args?: Subset<T, FlightClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlightClassAggregateArgs>(args: Subset<T, FlightClassAggregateArgs>): Prisma.PrismaPromise<GetFlightClassAggregateType<T>>

    /**
     * Group by FlightClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightClassGroupByArgs} args - Group by arguments.
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
      T extends FlightClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightClassGroupByArgs['orderBy'] }
        : { orderBy?: FlightClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlightClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightClass model
   */
  readonly fields: FlightClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flight<T extends FlightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlightDefaultArgs<ExtArgs>>): Prisma__FlightClient<$Result.GetResult<Prisma.$FlightPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlightClass model
   */ 
  interface FlightClassFieldRefs {
    readonly id: FieldRef<"FlightClass", 'String'>
    readonly flightId: FieldRef<"FlightClass", 'String'>
    readonly cabinClass: FieldRef<"FlightClass", 'CabinClass'>
    readonly availableSeats: FieldRef<"FlightClass", 'Int'>
    readonly basePrice: FieldRef<"FlightClass", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * FlightClass findUnique
   */
  export type FlightClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter, which FlightClass to fetch.
     */
    where: FlightClassWhereUniqueInput
  }

  /**
   * FlightClass findUniqueOrThrow
   */
  export type FlightClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter, which FlightClass to fetch.
     */
    where: FlightClassWhereUniqueInput
  }

  /**
   * FlightClass findFirst
   */
  export type FlightClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter, which FlightClass to fetch.
     */
    where?: FlightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightClasses to fetch.
     */
    orderBy?: FlightClassOrderByWithRelationInput | FlightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightClasses.
     */
    cursor?: FlightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightClasses.
     */
    distinct?: FlightClassScalarFieldEnum | FlightClassScalarFieldEnum[]
  }

  /**
   * FlightClass findFirstOrThrow
   */
  export type FlightClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter, which FlightClass to fetch.
     */
    where?: FlightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightClasses to fetch.
     */
    orderBy?: FlightClassOrderByWithRelationInput | FlightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightClasses.
     */
    cursor?: FlightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightClasses.
     */
    distinct?: FlightClassScalarFieldEnum | FlightClassScalarFieldEnum[]
  }

  /**
   * FlightClass findMany
   */
  export type FlightClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter, which FlightClasses to fetch.
     */
    where?: FlightClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightClasses to fetch.
     */
    orderBy?: FlightClassOrderByWithRelationInput | FlightClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightClasses.
     */
    cursor?: FlightClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightClasses.
     */
    skip?: number
    distinct?: FlightClassScalarFieldEnum | FlightClassScalarFieldEnum[]
  }

  /**
   * FlightClass create
   */
  export type FlightClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * The data needed to create a FlightClass.
     */
    data: XOR<FlightClassCreateInput, FlightClassUncheckedCreateInput>
  }

  /**
   * FlightClass createMany
   */
  export type FlightClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightClasses.
     */
    data: FlightClassCreateManyInput | FlightClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlightClass createManyAndReturn
   */
  export type FlightClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many FlightClasses.
     */
    data: FlightClassCreateManyInput | FlightClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FlightClass update
   */
  export type FlightClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * The data needed to update a FlightClass.
     */
    data: XOR<FlightClassUpdateInput, FlightClassUncheckedUpdateInput>
    /**
     * Choose, which FlightClass to update.
     */
    where: FlightClassWhereUniqueInput
  }

  /**
   * FlightClass updateMany
   */
  export type FlightClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightClasses.
     */
    data: XOR<FlightClassUpdateManyMutationInput, FlightClassUncheckedUpdateManyInput>
    /**
     * Filter which FlightClasses to update
     */
    where?: FlightClassWhereInput
  }

  /**
   * FlightClass upsert
   */
  export type FlightClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * The filter to search for the FlightClass to update in case it exists.
     */
    where: FlightClassWhereUniqueInput
    /**
     * In case the FlightClass found by the `where` argument doesn't exist, create a new FlightClass with this data.
     */
    create: XOR<FlightClassCreateInput, FlightClassUncheckedCreateInput>
    /**
     * In case the FlightClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightClassUpdateInput, FlightClassUncheckedUpdateInput>
  }

  /**
   * FlightClass delete
   */
  export type FlightClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
    /**
     * Filter which FlightClass to delete.
     */
    where: FlightClassWhereUniqueInput
  }

  /**
   * FlightClass deleteMany
   */
  export type FlightClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightClasses to delete
     */
    where?: FlightClassWhereInput
  }

  /**
   * FlightClass without action
   */
  export type FlightClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightClass
     */
    select?: FlightClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightClassInclude<ExtArgs> | null
  }


  /**
   * Model ServiceCatalog
   */

  export type AggregateServiceCatalog = {
    _count: ServiceCatalogCountAggregateOutputType | null
    _min: ServiceCatalogMinAggregateOutputType | null
    _max: ServiceCatalogMaxAggregateOutputType | null
  }

  export type ServiceCatalogMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    category: string | null
    description: string | null
  }

  export type ServiceCatalogMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    category: string | null
    description: string | null
  }

  export type ServiceCatalogCountAggregateOutputType = {
    id: number
    name: number
    code: number
    category: number
    description: number
    _all: number
  }


  export type ServiceCatalogMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    category?: true
    description?: true
  }

  export type ServiceCatalogMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    category?: true
    description?: true
  }

  export type ServiceCatalogCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    category?: true
    description?: true
    _all?: true
  }

  export type ServiceCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCatalog to aggregate.
     */
    where?: ServiceCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCatalogs to fetch.
     */
    orderBy?: ServiceCatalogOrderByWithRelationInput | ServiceCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceCatalogs
    **/
    _count?: true | ServiceCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceCatalogMaxAggregateInputType
  }

  export type GetServiceCatalogAggregateType<T extends ServiceCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceCatalog[P]>
      : GetScalarType<T[P], AggregateServiceCatalog[P]>
  }




  export type ServiceCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceCatalogWhereInput
    orderBy?: ServiceCatalogOrderByWithAggregationInput | ServiceCatalogOrderByWithAggregationInput[]
    by: ServiceCatalogScalarFieldEnum[] | ServiceCatalogScalarFieldEnum
    having?: ServiceCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCatalogCountAggregateInputType | true
    _min?: ServiceCatalogMinAggregateInputType
    _max?: ServiceCatalogMaxAggregateInputType
  }

  export type ServiceCatalogGroupByOutputType = {
    id: string
    name: string
    code: string
    category: string
    description: string | null
    _count: ServiceCatalogCountAggregateOutputType | null
    _min: ServiceCatalogMinAggregateOutputType | null
    _max: ServiceCatalogMaxAggregateOutputType | null
  }

  type GetServiceCatalogGroupByPayload<T extends ServiceCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceCatalogGroupByOutputType[P]>
        }
      >
    >


  export type ServiceCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
    airlineConfigs?: boolean | ServiceCatalog$airlineConfigsArgs<ExtArgs>
    _count?: boolean | ServiceCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceCatalog"]>

  export type ServiceCatalogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
  }, ExtArgs["result"]["serviceCatalog"]>

  export type ServiceCatalogSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    category?: boolean
    description?: boolean
  }

  export type ServiceCatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    airlineConfigs?: boolean | ServiceCatalog$airlineConfigsArgs<ExtArgs>
    _count?: boolean | ServiceCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceCatalogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServiceCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceCatalog"
    objects: {
      airlineConfigs: Prisma.$AirlineServiceConfigPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      category: string
      description: string | null
    }, ExtArgs["result"]["serviceCatalog"]>
    composites: {}
  }

  type ServiceCatalogGetPayload<S extends boolean | null | undefined | ServiceCatalogDefaultArgs> = $Result.GetResult<Prisma.$ServiceCatalogPayload, S>

  type ServiceCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceCatalogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCatalogCountAggregateInputType | true
    }

  export interface ServiceCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceCatalog'], meta: { name: 'ServiceCatalog' } }
    /**
     * Find zero or one ServiceCatalog that matches the filter.
     * @param {ServiceCatalogFindUniqueArgs} args - Arguments to find a ServiceCatalog
     * @example
     * // Get one ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceCatalogFindUniqueArgs>(args: SelectSubset<T, ServiceCatalogFindUniqueArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceCatalog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceCatalogFindUniqueOrThrowArgs} args - Arguments to find a ServiceCatalog
     * @example
     * // Get one ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceCatalogFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceCatalogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogFindFirstArgs} args - Arguments to find a ServiceCatalog
     * @example
     * // Get one ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceCatalogFindFirstArgs>(args?: SelectSubset<T, ServiceCatalogFindFirstArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogFindFirstOrThrowArgs} args - Arguments to find a ServiceCatalog
     * @example
     * // Get one ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceCatalogFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceCatalogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceCatalogs
     * const serviceCatalogs = await prisma.serviceCatalog.findMany()
     * 
     * // Get first 10 ServiceCatalogs
     * const serviceCatalogs = await prisma.serviceCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceCatalogWithIdOnly = await prisma.serviceCatalog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceCatalogFindManyArgs>(args?: SelectSubset<T, ServiceCatalogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceCatalog.
     * @param {ServiceCatalogCreateArgs} args - Arguments to create a ServiceCatalog.
     * @example
     * // Create one ServiceCatalog
     * const ServiceCatalog = await prisma.serviceCatalog.create({
     *   data: {
     *     // ... data to create a ServiceCatalog
     *   }
     * })
     * 
     */
    create<T extends ServiceCatalogCreateArgs>(args: SelectSubset<T, ServiceCatalogCreateArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceCatalogs.
     * @param {ServiceCatalogCreateManyArgs} args - Arguments to create many ServiceCatalogs.
     * @example
     * // Create many ServiceCatalogs
     * const serviceCatalog = await prisma.serviceCatalog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCatalogCreateManyArgs>(args?: SelectSubset<T, ServiceCatalogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceCatalogs and returns the data saved in the database.
     * @param {ServiceCatalogCreateManyAndReturnArgs} args - Arguments to create many ServiceCatalogs.
     * @example
     * // Create many ServiceCatalogs
     * const serviceCatalog = await prisma.serviceCatalog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceCatalogs and only return the `id`
     * const serviceCatalogWithIdOnly = await prisma.serviceCatalog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCatalogCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCatalogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceCatalog.
     * @param {ServiceCatalogDeleteArgs} args - Arguments to delete one ServiceCatalog.
     * @example
     * // Delete one ServiceCatalog
     * const ServiceCatalog = await prisma.serviceCatalog.delete({
     *   where: {
     *     // ... filter to delete one ServiceCatalog
     *   }
     * })
     * 
     */
    delete<T extends ServiceCatalogDeleteArgs>(args: SelectSubset<T, ServiceCatalogDeleteArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceCatalog.
     * @param {ServiceCatalogUpdateArgs} args - Arguments to update one ServiceCatalog.
     * @example
     * // Update one ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceCatalogUpdateArgs>(args: SelectSubset<T, ServiceCatalogUpdateArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceCatalogs.
     * @param {ServiceCatalogDeleteManyArgs} args - Arguments to filter ServiceCatalogs to delete.
     * @example
     * // Delete a few ServiceCatalogs
     * const { count } = await prisma.serviceCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceCatalogDeleteManyArgs>(args?: SelectSubset<T, ServiceCatalogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceCatalogs
     * const serviceCatalog = await prisma.serviceCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceCatalogUpdateManyArgs>(args: SelectSubset<T, ServiceCatalogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceCatalog.
     * @param {ServiceCatalogUpsertArgs} args - Arguments to update or create a ServiceCatalog.
     * @example
     * // Update or create a ServiceCatalog
     * const serviceCatalog = await prisma.serviceCatalog.upsert({
     *   create: {
     *     // ... data to create a ServiceCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceCatalog we want to update
     *   }
     * })
     */
    upsert<T extends ServiceCatalogUpsertArgs>(args: SelectSubset<T, ServiceCatalogUpsertArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogCountArgs} args - Arguments to filter ServiceCatalogs to count.
     * @example
     * // Count the number of ServiceCatalogs
     * const count = await prisma.serviceCatalog.count({
     *   where: {
     *     // ... the filter for the ServiceCatalogs we want to count
     *   }
     * })
    **/
    count<T extends ServiceCatalogCountArgs>(
      args?: Subset<T, ServiceCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceCatalogAggregateArgs>(args: Subset<T, ServiceCatalogAggregateArgs>): Prisma.PrismaPromise<GetServiceCatalogAggregateType<T>>

    /**
     * Group by ServiceCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCatalogGroupByArgs} args - Group by arguments.
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
      T extends ServiceCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceCatalogGroupByArgs['orderBy'] }
        : { orderBy?: ServiceCatalogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceCatalog model
   */
  readonly fields: ServiceCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    airlineConfigs<T extends ServiceCatalog$airlineConfigsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCatalog$airlineConfigsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServiceCatalog model
   */ 
  interface ServiceCatalogFieldRefs {
    readonly id: FieldRef<"ServiceCatalog", 'String'>
    readonly name: FieldRef<"ServiceCatalog", 'String'>
    readonly code: FieldRef<"ServiceCatalog", 'String'>
    readonly category: FieldRef<"ServiceCatalog", 'String'>
    readonly description: FieldRef<"ServiceCatalog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceCatalog findUnique
   */
  export type ServiceCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCatalog to fetch.
     */
    where: ServiceCatalogWhereUniqueInput
  }

  /**
   * ServiceCatalog findUniqueOrThrow
   */
  export type ServiceCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCatalog to fetch.
     */
    where: ServiceCatalogWhereUniqueInput
  }

  /**
   * ServiceCatalog findFirst
   */
  export type ServiceCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCatalog to fetch.
     */
    where?: ServiceCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCatalogs to fetch.
     */
    orderBy?: ServiceCatalogOrderByWithRelationInput | ServiceCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCatalogs.
     */
    cursor?: ServiceCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCatalogs.
     */
    distinct?: ServiceCatalogScalarFieldEnum | ServiceCatalogScalarFieldEnum[]
  }

  /**
   * ServiceCatalog findFirstOrThrow
   */
  export type ServiceCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCatalog to fetch.
     */
    where?: ServiceCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCatalogs to fetch.
     */
    orderBy?: ServiceCatalogOrderByWithRelationInput | ServiceCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceCatalogs.
     */
    cursor?: ServiceCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceCatalogs.
     */
    distinct?: ServiceCatalogScalarFieldEnum | ServiceCatalogScalarFieldEnum[]
  }

  /**
   * ServiceCatalog findMany
   */
  export type ServiceCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter, which ServiceCatalogs to fetch.
     */
    where?: ServiceCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceCatalogs to fetch.
     */
    orderBy?: ServiceCatalogOrderByWithRelationInput | ServiceCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceCatalogs.
     */
    cursor?: ServiceCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceCatalogs.
     */
    skip?: number
    distinct?: ServiceCatalogScalarFieldEnum | ServiceCatalogScalarFieldEnum[]
  }

  /**
   * ServiceCatalog create
   */
  export type ServiceCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceCatalog.
     */
    data: XOR<ServiceCatalogCreateInput, ServiceCatalogUncheckedCreateInput>
  }

  /**
   * ServiceCatalog createMany
   */
  export type ServiceCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceCatalogs.
     */
    data: ServiceCatalogCreateManyInput | ServiceCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCatalog createManyAndReturn
   */
  export type ServiceCatalogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceCatalogs.
     */
    data: ServiceCatalogCreateManyInput | ServiceCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceCatalog update
   */
  export type ServiceCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceCatalog.
     */
    data: XOR<ServiceCatalogUpdateInput, ServiceCatalogUncheckedUpdateInput>
    /**
     * Choose, which ServiceCatalog to update.
     */
    where: ServiceCatalogWhereUniqueInput
  }

  /**
   * ServiceCatalog updateMany
   */
  export type ServiceCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceCatalogs.
     */
    data: XOR<ServiceCatalogUpdateManyMutationInput, ServiceCatalogUncheckedUpdateManyInput>
    /**
     * Filter which ServiceCatalogs to update
     */
    where?: ServiceCatalogWhereInput
  }

  /**
   * ServiceCatalog upsert
   */
  export type ServiceCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceCatalog to update in case it exists.
     */
    where: ServiceCatalogWhereUniqueInput
    /**
     * In case the ServiceCatalog found by the `where` argument doesn't exist, create a new ServiceCatalog with this data.
     */
    create: XOR<ServiceCatalogCreateInput, ServiceCatalogUncheckedCreateInput>
    /**
     * In case the ServiceCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceCatalogUpdateInput, ServiceCatalogUncheckedUpdateInput>
  }

  /**
   * ServiceCatalog delete
   */
  export type ServiceCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
    /**
     * Filter which ServiceCatalog to delete.
     */
    where: ServiceCatalogWhereUniqueInput
  }

  /**
   * ServiceCatalog deleteMany
   */
  export type ServiceCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceCatalogs to delete
     */
    where?: ServiceCatalogWhereInput
  }

  /**
   * ServiceCatalog.airlineConfigs
   */
  export type ServiceCatalog$airlineConfigsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    where?: AirlineServiceConfigWhereInput
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    cursor?: AirlineServiceConfigWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AirlineServiceConfigScalarFieldEnum | AirlineServiceConfigScalarFieldEnum[]
  }

  /**
   * ServiceCatalog without action
   */
  export type ServiceCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCatalog
     */
    select?: ServiceCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceCatalogInclude<ExtArgs> | null
  }


  /**
   * Model AirlineServiceConfig
   */

  export type AggregateAirlineServiceConfig = {
    _count: AirlineServiceConfigCountAggregateOutputType | null
    _avg: AirlineServiceConfigAvgAggregateOutputType | null
    _sum: AirlineServiceConfigSumAggregateOutputType | null
    _min: AirlineServiceConfigMinAggregateOutputType | null
    _max: AirlineServiceConfigMaxAggregateOutputType | null
  }

  export type AirlineServiceConfigAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type AirlineServiceConfigSumAggregateOutputType = {
    price: Decimal | null
  }

  export type AirlineServiceConfigMinAggregateOutputType = {
    id: string | null
    serviceId: string | null
    airlineId: string | null
    originAirportId: string | null
    destAirportId: string | null
    price: Decimal | null
    currency: string | null
  }

  export type AirlineServiceConfigMaxAggregateOutputType = {
    id: string | null
    serviceId: string | null
    airlineId: string | null
    originAirportId: string | null
    destAirportId: string | null
    price: Decimal | null
    currency: string | null
  }

  export type AirlineServiceConfigCountAggregateOutputType = {
    id: number
    serviceId: number
    airlineId: number
    originAirportId: number
    destAirportId: number
    price: number
    currency: number
    _all: number
  }


  export type AirlineServiceConfigAvgAggregateInputType = {
    price?: true
  }

  export type AirlineServiceConfigSumAggregateInputType = {
    price?: true
  }

  export type AirlineServiceConfigMinAggregateInputType = {
    id?: true
    serviceId?: true
    airlineId?: true
    originAirportId?: true
    destAirportId?: true
    price?: true
    currency?: true
  }

  export type AirlineServiceConfigMaxAggregateInputType = {
    id?: true
    serviceId?: true
    airlineId?: true
    originAirportId?: true
    destAirportId?: true
    price?: true
    currency?: true
  }

  export type AirlineServiceConfigCountAggregateInputType = {
    id?: true
    serviceId?: true
    airlineId?: true
    originAirportId?: true
    destAirportId?: true
    price?: true
    currency?: true
    _all?: true
  }

  export type AirlineServiceConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirlineServiceConfig to aggregate.
     */
    where?: AirlineServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineServiceConfigs to fetch.
     */
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AirlineServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AirlineServiceConfigs
    **/
    _count?: true | AirlineServiceConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AirlineServiceConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AirlineServiceConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AirlineServiceConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AirlineServiceConfigMaxAggregateInputType
  }

  export type GetAirlineServiceConfigAggregateType<T extends AirlineServiceConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateAirlineServiceConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAirlineServiceConfig[P]>
      : GetScalarType<T[P], AggregateAirlineServiceConfig[P]>
  }




  export type AirlineServiceConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AirlineServiceConfigWhereInput
    orderBy?: AirlineServiceConfigOrderByWithAggregationInput | AirlineServiceConfigOrderByWithAggregationInput[]
    by: AirlineServiceConfigScalarFieldEnum[] | AirlineServiceConfigScalarFieldEnum
    having?: AirlineServiceConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AirlineServiceConfigCountAggregateInputType | true
    _avg?: AirlineServiceConfigAvgAggregateInputType
    _sum?: AirlineServiceConfigSumAggregateInputType
    _min?: AirlineServiceConfigMinAggregateInputType
    _max?: AirlineServiceConfigMaxAggregateInputType
  }

  export type AirlineServiceConfigGroupByOutputType = {
    id: string
    serviceId: string
    airlineId: string
    originAirportId: string | null
    destAirportId: string | null
    price: Decimal
    currency: string
    _count: AirlineServiceConfigCountAggregateOutputType | null
    _avg: AirlineServiceConfigAvgAggregateOutputType | null
    _sum: AirlineServiceConfigSumAggregateOutputType | null
    _min: AirlineServiceConfigMinAggregateOutputType | null
    _max: AirlineServiceConfigMaxAggregateOutputType | null
  }

  type GetAirlineServiceConfigGroupByPayload<T extends AirlineServiceConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AirlineServiceConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AirlineServiceConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AirlineServiceConfigGroupByOutputType[P]>
            : GetScalarType<T[P], AirlineServiceConfigGroupByOutputType[P]>
        }
      >
    >


  export type AirlineServiceConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    airlineId?: boolean
    originAirportId?: boolean
    destAirportId?: boolean
    price?: boolean
    currency?: boolean
    service?: boolean | ServiceCatalogDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airlineServiceConfig"]>

  export type AirlineServiceConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    serviceId?: boolean
    airlineId?: boolean
    originAirportId?: boolean
    destAirportId?: boolean
    price?: boolean
    currency?: boolean
    service?: boolean | ServiceCatalogDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["airlineServiceConfig"]>

  export type AirlineServiceConfigSelectScalar = {
    id?: boolean
    serviceId?: boolean
    airlineId?: boolean
    originAirportId?: boolean
    destAirportId?: boolean
    price?: boolean
    currency?: boolean
  }

  export type AirlineServiceConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceCatalogDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }
  export type AirlineServiceConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceCatalogDefaultArgs<ExtArgs>
    airline?: boolean | AirlineDefaultArgs<ExtArgs>
  }

  export type $AirlineServiceConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AirlineServiceConfig"
    objects: {
      service: Prisma.$ServiceCatalogPayload<ExtArgs>
      airline: Prisma.$AirlinePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      serviceId: string
      airlineId: string
      originAirportId: string | null
      destAirportId: string | null
      price: Prisma.Decimal
      currency: string
    }, ExtArgs["result"]["airlineServiceConfig"]>
    composites: {}
  }

  type AirlineServiceConfigGetPayload<S extends boolean | null | undefined | AirlineServiceConfigDefaultArgs> = $Result.GetResult<Prisma.$AirlineServiceConfigPayload, S>

  type AirlineServiceConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AirlineServiceConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AirlineServiceConfigCountAggregateInputType | true
    }

  export interface AirlineServiceConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AirlineServiceConfig'], meta: { name: 'AirlineServiceConfig' } }
    /**
     * Find zero or one AirlineServiceConfig that matches the filter.
     * @param {AirlineServiceConfigFindUniqueArgs} args - Arguments to find a AirlineServiceConfig
     * @example
     * // Get one AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AirlineServiceConfigFindUniqueArgs>(args: SelectSubset<T, AirlineServiceConfigFindUniqueArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AirlineServiceConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AirlineServiceConfigFindUniqueOrThrowArgs} args - Arguments to find a AirlineServiceConfig
     * @example
     * // Get one AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AirlineServiceConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, AirlineServiceConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AirlineServiceConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigFindFirstArgs} args - Arguments to find a AirlineServiceConfig
     * @example
     * // Get one AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AirlineServiceConfigFindFirstArgs>(args?: SelectSubset<T, AirlineServiceConfigFindFirstArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AirlineServiceConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigFindFirstOrThrowArgs} args - Arguments to find a AirlineServiceConfig
     * @example
     * // Get one AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AirlineServiceConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, AirlineServiceConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AirlineServiceConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AirlineServiceConfigs
     * const airlineServiceConfigs = await prisma.airlineServiceConfig.findMany()
     * 
     * // Get first 10 AirlineServiceConfigs
     * const airlineServiceConfigs = await prisma.airlineServiceConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const airlineServiceConfigWithIdOnly = await prisma.airlineServiceConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AirlineServiceConfigFindManyArgs>(args?: SelectSubset<T, AirlineServiceConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AirlineServiceConfig.
     * @param {AirlineServiceConfigCreateArgs} args - Arguments to create a AirlineServiceConfig.
     * @example
     * // Create one AirlineServiceConfig
     * const AirlineServiceConfig = await prisma.airlineServiceConfig.create({
     *   data: {
     *     // ... data to create a AirlineServiceConfig
     *   }
     * })
     * 
     */
    create<T extends AirlineServiceConfigCreateArgs>(args: SelectSubset<T, AirlineServiceConfigCreateArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AirlineServiceConfigs.
     * @param {AirlineServiceConfigCreateManyArgs} args - Arguments to create many AirlineServiceConfigs.
     * @example
     * // Create many AirlineServiceConfigs
     * const airlineServiceConfig = await prisma.airlineServiceConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AirlineServiceConfigCreateManyArgs>(args?: SelectSubset<T, AirlineServiceConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AirlineServiceConfigs and returns the data saved in the database.
     * @param {AirlineServiceConfigCreateManyAndReturnArgs} args - Arguments to create many AirlineServiceConfigs.
     * @example
     * // Create many AirlineServiceConfigs
     * const airlineServiceConfig = await prisma.airlineServiceConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AirlineServiceConfigs and only return the `id`
     * const airlineServiceConfigWithIdOnly = await prisma.airlineServiceConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AirlineServiceConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, AirlineServiceConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AirlineServiceConfig.
     * @param {AirlineServiceConfigDeleteArgs} args - Arguments to delete one AirlineServiceConfig.
     * @example
     * // Delete one AirlineServiceConfig
     * const AirlineServiceConfig = await prisma.airlineServiceConfig.delete({
     *   where: {
     *     // ... filter to delete one AirlineServiceConfig
     *   }
     * })
     * 
     */
    delete<T extends AirlineServiceConfigDeleteArgs>(args: SelectSubset<T, AirlineServiceConfigDeleteArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AirlineServiceConfig.
     * @param {AirlineServiceConfigUpdateArgs} args - Arguments to update one AirlineServiceConfig.
     * @example
     * // Update one AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AirlineServiceConfigUpdateArgs>(args: SelectSubset<T, AirlineServiceConfigUpdateArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AirlineServiceConfigs.
     * @param {AirlineServiceConfigDeleteManyArgs} args - Arguments to filter AirlineServiceConfigs to delete.
     * @example
     * // Delete a few AirlineServiceConfigs
     * const { count } = await prisma.airlineServiceConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AirlineServiceConfigDeleteManyArgs>(args?: SelectSubset<T, AirlineServiceConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AirlineServiceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AirlineServiceConfigs
     * const airlineServiceConfig = await prisma.airlineServiceConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AirlineServiceConfigUpdateManyArgs>(args: SelectSubset<T, AirlineServiceConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AirlineServiceConfig.
     * @param {AirlineServiceConfigUpsertArgs} args - Arguments to update or create a AirlineServiceConfig.
     * @example
     * // Update or create a AirlineServiceConfig
     * const airlineServiceConfig = await prisma.airlineServiceConfig.upsert({
     *   create: {
     *     // ... data to create a AirlineServiceConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AirlineServiceConfig we want to update
     *   }
     * })
     */
    upsert<T extends AirlineServiceConfigUpsertArgs>(args: SelectSubset<T, AirlineServiceConfigUpsertArgs<ExtArgs>>): Prisma__AirlineServiceConfigClient<$Result.GetResult<Prisma.$AirlineServiceConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AirlineServiceConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigCountArgs} args - Arguments to filter AirlineServiceConfigs to count.
     * @example
     * // Count the number of AirlineServiceConfigs
     * const count = await prisma.airlineServiceConfig.count({
     *   where: {
     *     // ... the filter for the AirlineServiceConfigs we want to count
     *   }
     * })
    **/
    count<T extends AirlineServiceConfigCountArgs>(
      args?: Subset<T, AirlineServiceConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AirlineServiceConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AirlineServiceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AirlineServiceConfigAggregateArgs>(args: Subset<T, AirlineServiceConfigAggregateArgs>): Prisma.PrismaPromise<GetAirlineServiceConfigAggregateType<T>>

    /**
     * Group by AirlineServiceConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AirlineServiceConfigGroupByArgs} args - Group by arguments.
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
      T extends AirlineServiceConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AirlineServiceConfigGroupByArgs['orderBy'] }
        : { orderBy?: AirlineServiceConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AirlineServiceConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAirlineServiceConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AirlineServiceConfig model
   */
  readonly fields: AirlineServiceConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AirlineServiceConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AirlineServiceConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceCatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceCatalogDefaultArgs<ExtArgs>>): Prisma__ServiceCatalogClient<$Result.GetResult<Prisma.$ServiceCatalogPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    airline<T extends AirlineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AirlineDefaultArgs<ExtArgs>>): Prisma__AirlineClient<$Result.GetResult<Prisma.$AirlinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AirlineServiceConfig model
   */ 
  interface AirlineServiceConfigFieldRefs {
    readonly id: FieldRef<"AirlineServiceConfig", 'String'>
    readonly serviceId: FieldRef<"AirlineServiceConfig", 'String'>
    readonly airlineId: FieldRef<"AirlineServiceConfig", 'String'>
    readonly originAirportId: FieldRef<"AirlineServiceConfig", 'String'>
    readonly destAirportId: FieldRef<"AirlineServiceConfig", 'String'>
    readonly price: FieldRef<"AirlineServiceConfig", 'Decimal'>
    readonly currency: FieldRef<"AirlineServiceConfig", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AirlineServiceConfig findUnique
   */
  export type AirlineServiceConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which AirlineServiceConfig to fetch.
     */
    where: AirlineServiceConfigWhereUniqueInput
  }

  /**
   * AirlineServiceConfig findUniqueOrThrow
   */
  export type AirlineServiceConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which AirlineServiceConfig to fetch.
     */
    where: AirlineServiceConfigWhereUniqueInput
  }

  /**
   * AirlineServiceConfig findFirst
   */
  export type AirlineServiceConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which AirlineServiceConfig to fetch.
     */
    where?: AirlineServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineServiceConfigs to fetch.
     */
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirlineServiceConfigs.
     */
    cursor?: AirlineServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirlineServiceConfigs.
     */
    distinct?: AirlineServiceConfigScalarFieldEnum | AirlineServiceConfigScalarFieldEnum[]
  }

  /**
   * AirlineServiceConfig findFirstOrThrow
   */
  export type AirlineServiceConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which AirlineServiceConfig to fetch.
     */
    where?: AirlineServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineServiceConfigs to fetch.
     */
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AirlineServiceConfigs.
     */
    cursor?: AirlineServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineServiceConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AirlineServiceConfigs.
     */
    distinct?: AirlineServiceConfigScalarFieldEnum | AirlineServiceConfigScalarFieldEnum[]
  }

  /**
   * AirlineServiceConfig findMany
   */
  export type AirlineServiceConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter, which AirlineServiceConfigs to fetch.
     */
    where?: AirlineServiceConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AirlineServiceConfigs to fetch.
     */
    orderBy?: AirlineServiceConfigOrderByWithRelationInput | AirlineServiceConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AirlineServiceConfigs.
     */
    cursor?: AirlineServiceConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AirlineServiceConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AirlineServiceConfigs.
     */
    skip?: number
    distinct?: AirlineServiceConfigScalarFieldEnum | AirlineServiceConfigScalarFieldEnum[]
  }

  /**
   * AirlineServiceConfig create
   */
  export type AirlineServiceConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a AirlineServiceConfig.
     */
    data: XOR<AirlineServiceConfigCreateInput, AirlineServiceConfigUncheckedCreateInput>
  }

  /**
   * AirlineServiceConfig createMany
   */
  export type AirlineServiceConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AirlineServiceConfigs.
     */
    data: AirlineServiceConfigCreateManyInput | AirlineServiceConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AirlineServiceConfig createManyAndReturn
   */
  export type AirlineServiceConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AirlineServiceConfigs.
     */
    data: AirlineServiceConfigCreateManyInput | AirlineServiceConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AirlineServiceConfig update
   */
  export type AirlineServiceConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a AirlineServiceConfig.
     */
    data: XOR<AirlineServiceConfigUpdateInput, AirlineServiceConfigUncheckedUpdateInput>
    /**
     * Choose, which AirlineServiceConfig to update.
     */
    where: AirlineServiceConfigWhereUniqueInput
  }

  /**
   * AirlineServiceConfig updateMany
   */
  export type AirlineServiceConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AirlineServiceConfigs.
     */
    data: XOR<AirlineServiceConfigUpdateManyMutationInput, AirlineServiceConfigUncheckedUpdateManyInput>
    /**
     * Filter which AirlineServiceConfigs to update
     */
    where?: AirlineServiceConfigWhereInput
  }

  /**
   * AirlineServiceConfig upsert
   */
  export type AirlineServiceConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the AirlineServiceConfig to update in case it exists.
     */
    where: AirlineServiceConfigWhereUniqueInput
    /**
     * In case the AirlineServiceConfig found by the `where` argument doesn't exist, create a new AirlineServiceConfig with this data.
     */
    create: XOR<AirlineServiceConfigCreateInput, AirlineServiceConfigUncheckedCreateInput>
    /**
     * In case the AirlineServiceConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AirlineServiceConfigUpdateInput, AirlineServiceConfigUncheckedUpdateInput>
  }

  /**
   * AirlineServiceConfig delete
   */
  export type AirlineServiceConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
    /**
     * Filter which AirlineServiceConfig to delete.
     */
    where: AirlineServiceConfigWhereUniqueInput
  }

  /**
   * AirlineServiceConfig deleteMany
   */
  export type AirlineServiceConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AirlineServiceConfigs to delete
     */
    where?: AirlineServiceConfigWhereInput
  }

  /**
   * AirlineServiceConfig without action
   */
  export type AirlineServiceConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AirlineServiceConfig
     */
    select?: AirlineServiceConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AirlineServiceConfigInclude<ExtArgs> | null
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


  export const CountryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isoCode: 'isoCode',
    phoneCode: 'phoneCode',
    currencyCode: 'currencyCode'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId',
    iataCode: 'iataCode'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const AirportScalarFieldEnum: {
    id: 'id',
    iataCode: 'iataCode',
    name: 'name',
    cityId: 'cityId',
    timezone: 'timezone'
  };

  export type AirportScalarFieldEnum = (typeof AirportScalarFieldEnum)[keyof typeof AirportScalarFieldEnum]


  export const AirlineScalarFieldEnum: {
    id: 'id',
    iataCode: 'iataCode',
    name: 'name',
    logoUrl: 'logoUrl',
    countryId: 'countryId'
  };

  export type AirlineScalarFieldEnum = (typeof AirlineScalarFieldEnum)[keyof typeof AirlineScalarFieldEnum]


  export const AircraftScalarFieldEnum: {
    id: 'id',
    airlineId: 'airlineId',
    modelName: 'modelName',
    registration: 'registration',
    hasWifi: 'hasWifi',
    hasUsb: 'hasUsb'
  };

  export type AircraftScalarFieldEnum = (typeof AircraftScalarFieldEnum)[keyof typeof AircraftScalarFieldEnum]


  export const AirlineAirportScalarFieldEnum: {
    airlineId: 'airlineId',
    airportId: 'airportId'
  };

  export type AirlineAirportScalarFieldEnum = (typeof AirlineAirportScalarFieldEnum)[keyof typeof AirlineAirportScalarFieldEnum]


  export const FlightScalarFieldEnum: {
    id: 'id',
    originAirportIata: 'originAirportIata',
    destinationAirportIata: 'destinationAirportIata',
    departureDate: 'departureDate',
    status: 'status'
  };

  export type FlightScalarFieldEnum = (typeof FlightScalarFieldEnum)[keyof typeof FlightScalarFieldEnum]


  export const SegmentScalarFieldEnum: {
    id: 'id',
    segmentNumber: 'segmentNumber',
    originAirportId: 'originAirportId',
    destinationAirportId: 'destinationAirportId',
    departureDateTime: 'departureDateTime',
    arrivalDateTime: 'arrivalDateTime',
    airlineId: 'airlineId',
    aircraftId: 'aircraftId',
    estimatedDuration: 'estimatedDuration',
    flightId: 'flightId'
  };

  export type SegmentScalarFieldEnum = (typeof SegmentScalarFieldEnum)[keyof typeof SegmentScalarFieldEnum]


  export const FlightClassScalarFieldEnum: {
    id: 'id',
    flightId: 'flightId',
    cabinClass: 'cabinClass',
    availableSeats: 'availableSeats',
    basePrice: 'basePrice'
  };

  export type FlightClassScalarFieldEnum = (typeof FlightClassScalarFieldEnum)[keyof typeof FlightClassScalarFieldEnum]


  export const ServiceCatalogScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    category: 'category',
    description: 'description'
  };

  export type ServiceCatalogScalarFieldEnum = (typeof ServiceCatalogScalarFieldEnum)[keyof typeof ServiceCatalogScalarFieldEnum]


  export const AirlineServiceConfigScalarFieldEnum: {
    id: 'id',
    serviceId: 'serviceId',
    airlineId: 'airlineId',
    originAirportId: 'originAirportId',
    destAirportId: 'destAirportId',
    price: 'price',
    currency: 'currency'
  };

  export type AirlineServiceConfigScalarFieldEnum = (typeof AirlineServiceConfigScalarFieldEnum)[keyof typeof AirlineServiceConfigScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


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
   * Reference to a field of type 'FlightStatus'
   */
  export type EnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus'>
    


  /**
   * Reference to a field of type 'FlightStatus[]'
   */
  export type ListEnumFlightStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlightStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CabinClass'
   */
  export type EnumCabinClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CabinClass'>
    


  /**
   * Reference to a field of type 'CabinClass[]'
   */
  export type ListEnumCabinClassFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CabinClass[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: StringFilter<"Country"> | string
    name?: StringFilter<"Country"> | string
    isoCode?: StringFilter<"Country"> | string
    phoneCode?: StringNullableFilter<"Country"> | string | null
    currencyCode?: StringNullableFilter<"Country"> | string | null
    cities?: CityListRelationFilter
    airlines?: AirlineListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    phoneCode?: SortOrderInput | SortOrder
    currencyCode?: SortOrderInput | SortOrder
    cities?: CityOrderByRelationAggregateInput
    airlines?: AirlineOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    isoCode?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    phoneCode?: StringNullableFilter<"Country"> | string | null
    currencyCode?: StringNullableFilter<"Country"> | string | null
    cities?: CityListRelationFilter
    airlines?: AirlineListRelationFilter
  }, "id" | "name" | "isoCode">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    phoneCode?: SortOrderInput | SortOrder
    currencyCode?: SortOrderInput | SortOrder
    _count?: CountryCountOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Country"> | string
    name?: StringWithAggregatesFilter<"Country"> | string
    isoCode?: StringWithAggregatesFilter<"Country"> | string
    phoneCode?: StringNullableWithAggregatesFilter<"Country"> | string | null
    currencyCode?: StringNullableWithAggregatesFilter<"Country"> | string | null
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    countryId?: StringFilter<"City"> | string
    iataCode?: StringNullableFilter<"City"> | string | null
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    airports?: AirportListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    iataCode?: SortOrderInput | SortOrder
    country?: CountryOrderByWithRelationInput
    airports?: AirportOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    iataCode?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    countryId?: StringFilter<"City"> | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    airports?: AirportListRelationFilter
  }, "id" | "iataCode">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    iataCode?: SortOrderInput | SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    countryId?: StringWithAggregatesFilter<"City"> | string
    iataCode?: StringNullableWithAggregatesFilter<"City"> | string | null
  }

  export type AirportWhereInput = {
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    id?: StringFilter<"Airport"> | string
    iataCode?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    originSegments?: SegmentListRelationFilter
    destinationSegments?: SegmentListRelationFilter
    airlineAirports?: AirlineAirportListRelationFilter
  }

  export type AirportOrderByWithRelationInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    timezone?: SortOrder
    city?: CityOrderByWithRelationInput
    originSegments?: SegmentOrderByRelationAggregateInput
    destinationSegments?: SegmentOrderByRelationAggregateInput
    airlineAirports?: AirlineAirportOrderByRelationAggregateInput
  }

  export type AirportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    iataCode?: string
    AND?: AirportWhereInput | AirportWhereInput[]
    OR?: AirportWhereInput[]
    NOT?: AirportWhereInput | AirportWhereInput[]
    name?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
    city?: XOR<CityRelationFilter, CityWhereInput>
    originSegments?: SegmentListRelationFilter
    destinationSegments?: SegmentListRelationFilter
    airlineAirports?: AirlineAirportListRelationFilter
  }, "id" | "iataCode">

  export type AirportOrderByWithAggregationInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    timezone?: SortOrder
    _count?: AirportCountOrderByAggregateInput
    _max?: AirportMaxOrderByAggregateInput
    _min?: AirportMinOrderByAggregateInput
  }

  export type AirportScalarWhereWithAggregatesInput = {
    AND?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    OR?: AirportScalarWhereWithAggregatesInput[]
    NOT?: AirportScalarWhereWithAggregatesInput | AirportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airport"> | string
    iataCode?: StringWithAggregatesFilter<"Airport"> | string
    name?: StringWithAggregatesFilter<"Airport"> | string
    cityId?: StringWithAggregatesFilter<"Airport"> | string
    timezone?: StringWithAggregatesFilter<"Airport"> | string
  }

  export type AirlineWhereInput = {
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    id?: StringFilter<"Airline"> | string
    iataCode?: StringFilter<"Airline"> | string
    name?: StringFilter<"Airline"> | string
    logoUrl?: StringNullableFilter<"Airline"> | string | null
    countryId?: StringFilter<"Airline"> | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    segments?: SegmentListRelationFilter
    aircrafts?: AircraftListRelationFilter
    serviceConfigs?: AirlineServiceConfigListRelationFilter
    airlineAirports?: AirlineAirportListRelationFilter
  }

  export type AirlineOrderByWithRelationInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    segments?: SegmentOrderByRelationAggregateInput
    aircrafts?: AircraftOrderByRelationAggregateInput
    serviceConfigs?: AirlineServiceConfigOrderByRelationAggregateInput
    airlineAirports?: AirlineAirportOrderByRelationAggregateInput
  }

  export type AirlineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    iataCode?: string
    AND?: AirlineWhereInput | AirlineWhereInput[]
    OR?: AirlineWhereInput[]
    NOT?: AirlineWhereInput | AirlineWhereInput[]
    name?: StringFilter<"Airline"> | string
    logoUrl?: StringNullableFilter<"Airline"> | string | null
    countryId?: StringFilter<"Airline"> | string
    country?: XOR<CountryRelationFilter, CountryWhereInput>
    segments?: SegmentListRelationFilter
    aircrafts?: AircraftListRelationFilter
    serviceConfigs?: AirlineServiceConfigListRelationFilter
    airlineAirports?: AirlineAirportListRelationFilter
  }, "id" | "iataCode">

  export type AirlineOrderByWithAggregationInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrderInput | SortOrder
    countryId?: SortOrder
    _count?: AirlineCountOrderByAggregateInput
    _max?: AirlineMaxOrderByAggregateInput
    _min?: AirlineMinOrderByAggregateInput
  }

  export type AirlineScalarWhereWithAggregatesInput = {
    AND?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    OR?: AirlineScalarWhereWithAggregatesInput[]
    NOT?: AirlineScalarWhereWithAggregatesInput | AirlineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Airline"> | string
    iataCode?: StringWithAggregatesFilter<"Airline"> | string
    name?: StringWithAggregatesFilter<"Airline"> | string
    logoUrl?: StringNullableWithAggregatesFilter<"Airline"> | string | null
    countryId?: StringWithAggregatesFilter<"Airline"> | string
  }

  export type AircraftWhereInput = {
    AND?: AircraftWhereInput | AircraftWhereInput[]
    OR?: AircraftWhereInput[]
    NOT?: AircraftWhereInput | AircraftWhereInput[]
    id?: StringFilter<"Aircraft"> | string
    airlineId?: StringFilter<"Aircraft"> | string
    modelName?: StringFilter<"Aircraft"> | string
    registration?: StringFilter<"Aircraft"> | string
    hasWifi?: BoolFilter<"Aircraft"> | boolean
    hasUsb?: BoolFilter<"Aircraft"> | boolean
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    segments?: SegmentListRelationFilter
  }

  export type AircraftOrderByWithRelationInput = {
    id?: SortOrder
    airlineId?: SortOrder
    modelName?: SortOrder
    registration?: SortOrder
    hasWifi?: SortOrder
    hasUsb?: SortOrder
    airline?: AirlineOrderByWithRelationInput
    segments?: SegmentOrderByRelationAggregateInput
  }

  export type AircraftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    registration?: string
    AND?: AircraftWhereInput | AircraftWhereInput[]
    OR?: AircraftWhereInput[]
    NOT?: AircraftWhereInput | AircraftWhereInput[]
    airlineId?: StringFilter<"Aircraft"> | string
    modelName?: StringFilter<"Aircraft"> | string
    hasWifi?: BoolFilter<"Aircraft"> | boolean
    hasUsb?: BoolFilter<"Aircraft"> | boolean
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    segments?: SegmentListRelationFilter
  }, "id" | "registration">

  export type AircraftOrderByWithAggregationInput = {
    id?: SortOrder
    airlineId?: SortOrder
    modelName?: SortOrder
    registration?: SortOrder
    hasWifi?: SortOrder
    hasUsb?: SortOrder
    _count?: AircraftCountOrderByAggregateInput
    _max?: AircraftMaxOrderByAggregateInput
    _min?: AircraftMinOrderByAggregateInput
  }

  export type AircraftScalarWhereWithAggregatesInput = {
    AND?: AircraftScalarWhereWithAggregatesInput | AircraftScalarWhereWithAggregatesInput[]
    OR?: AircraftScalarWhereWithAggregatesInput[]
    NOT?: AircraftScalarWhereWithAggregatesInput | AircraftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Aircraft"> | string
    airlineId?: StringWithAggregatesFilter<"Aircraft"> | string
    modelName?: StringWithAggregatesFilter<"Aircraft"> | string
    registration?: StringWithAggregatesFilter<"Aircraft"> | string
    hasWifi?: BoolWithAggregatesFilter<"Aircraft"> | boolean
    hasUsb?: BoolWithAggregatesFilter<"Aircraft"> | boolean
  }

  export type AirlineAirportWhereInput = {
    AND?: AirlineAirportWhereInput | AirlineAirportWhereInput[]
    OR?: AirlineAirportWhereInput[]
    NOT?: AirlineAirportWhereInput | AirlineAirportWhereInput[]
    airlineId?: StringFilter<"AirlineAirport"> | string
    airportId?: StringFilter<"AirlineAirport"> | string
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    airport?: XOR<AirportRelationFilter, AirportWhereInput>
  }

  export type AirlineAirportOrderByWithRelationInput = {
    airlineId?: SortOrder
    airportId?: SortOrder
    airline?: AirlineOrderByWithRelationInput
    airport?: AirportOrderByWithRelationInput
  }

  export type AirlineAirportWhereUniqueInput = Prisma.AtLeast<{
    airlineId_airportId?: AirlineAirportAirlineIdAirportIdCompoundUniqueInput
    AND?: AirlineAirportWhereInput | AirlineAirportWhereInput[]
    OR?: AirlineAirportWhereInput[]
    NOT?: AirlineAirportWhereInput | AirlineAirportWhereInput[]
    airlineId?: StringFilter<"AirlineAirport"> | string
    airportId?: StringFilter<"AirlineAirport"> | string
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    airport?: XOR<AirportRelationFilter, AirportWhereInput>
  }, "airlineId_airportId">

  export type AirlineAirportOrderByWithAggregationInput = {
    airlineId?: SortOrder
    airportId?: SortOrder
    _count?: AirlineAirportCountOrderByAggregateInput
    _max?: AirlineAirportMaxOrderByAggregateInput
    _min?: AirlineAirportMinOrderByAggregateInput
  }

  export type AirlineAirportScalarWhereWithAggregatesInput = {
    AND?: AirlineAirportScalarWhereWithAggregatesInput | AirlineAirportScalarWhereWithAggregatesInput[]
    OR?: AirlineAirportScalarWhereWithAggregatesInput[]
    NOT?: AirlineAirportScalarWhereWithAggregatesInput | AirlineAirportScalarWhereWithAggregatesInput[]
    airlineId?: StringWithAggregatesFilter<"AirlineAirport"> | string
    airportId?: StringWithAggregatesFilter<"AirlineAirport"> | string
  }

  export type FlightWhereInput = {
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    id?: StringFilter<"Flight"> | string
    originAirportIata?: StringFilter<"Flight"> | string
    destinationAirportIata?: StringFilter<"Flight"> | string
    departureDate?: DateTimeFilter<"Flight"> | Date | string
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    segments?: SegmentListRelationFilter
    flightClasses?: FlightClassListRelationFilter
  }

  export type FlightOrderByWithRelationInput = {
    id?: SortOrder
    originAirportIata?: SortOrder
    destinationAirportIata?: SortOrder
    departureDate?: SortOrder
    status?: SortOrder
    segments?: SegmentOrderByRelationAggregateInput
    flightClasses?: FlightClassOrderByRelationAggregateInput
  }

  export type FlightWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlightWhereInput | FlightWhereInput[]
    OR?: FlightWhereInput[]
    NOT?: FlightWhereInput | FlightWhereInput[]
    originAirportIata?: StringFilter<"Flight"> | string
    destinationAirportIata?: StringFilter<"Flight"> | string
    departureDate?: DateTimeFilter<"Flight"> | Date | string
    status?: EnumFlightStatusFilter<"Flight"> | $Enums.FlightStatus
    segments?: SegmentListRelationFilter
    flightClasses?: FlightClassListRelationFilter
  }, "id">

  export type FlightOrderByWithAggregationInput = {
    id?: SortOrder
    originAirportIata?: SortOrder
    destinationAirportIata?: SortOrder
    departureDate?: SortOrder
    status?: SortOrder
    _count?: FlightCountOrderByAggregateInput
    _max?: FlightMaxOrderByAggregateInput
    _min?: FlightMinOrderByAggregateInput
  }

  export type FlightScalarWhereWithAggregatesInput = {
    AND?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    OR?: FlightScalarWhereWithAggregatesInput[]
    NOT?: FlightScalarWhereWithAggregatesInput | FlightScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flight"> | string
    originAirportIata?: StringWithAggregatesFilter<"Flight"> | string
    destinationAirportIata?: StringWithAggregatesFilter<"Flight"> | string
    departureDate?: DateTimeWithAggregatesFilter<"Flight"> | Date | string
    status?: EnumFlightStatusWithAggregatesFilter<"Flight"> | $Enums.FlightStatus
  }

  export type SegmentWhereInput = {
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    id?: StringFilter<"Segment"> | string
    segmentNumber?: StringFilter<"Segment"> | string
    originAirportId?: StringFilter<"Segment"> | string
    destinationAirportId?: StringFilter<"Segment"> | string
    departureDateTime?: DateTimeFilter<"Segment"> | Date | string
    arrivalDateTime?: DateTimeFilter<"Segment"> | Date | string
    airlineId?: StringFilter<"Segment"> | string
    aircraftId?: StringNullableFilter<"Segment"> | string | null
    estimatedDuration?: IntFilter<"Segment"> | number
    flightId?: StringNullableFilter<"Segment"> | string | null
    flight?: XOR<FlightNullableRelationFilter, FlightWhereInput> | null
    originAirport?: XOR<AirportRelationFilter, AirportWhereInput>
    destinationAirport?: XOR<AirportRelationFilter, AirportWhereInput>
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    aircraft?: XOR<AircraftNullableRelationFilter, AircraftWhereInput> | null
  }

  export type SegmentOrderByWithRelationInput = {
    id?: SortOrder
    segmentNumber?: SortOrder
    originAirportId?: SortOrder
    destinationAirportId?: SortOrder
    departureDateTime?: SortOrder
    arrivalDateTime?: SortOrder
    airlineId?: SortOrder
    aircraftId?: SortOrderInput | SortOrder
    estimatedDuration?: SortOrder
    flightId?: SortOrderInput | SortOrder
    flight?: FlightOrderByWithRelationInput
    originAirport?: AirportOrderByWithRelationInput
    destinationAirport?: AirportOrderByWithRelationInput
    airline?: AirlineOrderByWithRelationInput
    aircraft?: AircraftOrderByWithRelationInput
  }

  export type SegmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SegmentWhereInput | SegmentWhereInput[]
    OR?: SegmentWhereInput[]
    NOT?: SegmentWhereInput | SegmentWhereInput[]
    segmentNumber?: StringFilter<"Segment"> | string
    originAirportId?: StringFilter<"Segment"> | string
    destinationAirportId?: StringFilter<"Segment"> | string
    departureDateTime?: DateTimeFilter<"Segment"> | Date | string
    arrivalDateTime?: DateTimeFilter<"Segment"> | Date | string
    airlineId?: StringFilter<"Segment"> | string
    aircraftId?: StringNullableFilter<"Segment"> | string | null
    estimatedDuration?: IntFilter<"Segment"> | number
    flightId?: StringNullableFilter<"Segment"> | string | null
    flight?: XOR<FlightNullableRelationFilter, FlightWhereInput> | null
    originAirport?: XOR<AirportRelationFilter, AirportWhereInput>
    destinationAirport?: XOR<AirportRelationFilter, AirportWhereInput>
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
    aircraft?: XOR<AircraftNullableRelationFilter, AircraftWhereInput> | null
  }, "id">

  export type SegmentOrderByWithAggregationInput = {
    id?: SortOrder
    segmentNumber?: SortOrder
    originAirportId?: SortOrder
    destinationAirportId?: SortOrder
    departureDateTime?: SortOrder
    arrivalDateTime?: SortOrder
    airlineId?: SortOrder
    aircraftId?: SortOrderInput | SortOrder
    estimatedDuration?: SortOrder
    flightId?: SortOrderInput | SortOrder
    _count?: SegmentCountOrderByAggregateInput
    _avg?: SegmentAvgOrderByAggregateInput
    _max?: SegmentMaxOrderByAggregateInput
    _min?: SegmentMinOrderByAggregateInput
    _sum?: SegmentSumOrderByAggregateInput
  }

  export type SegmentScalarWhereWithAggregatesInput = {
    AND?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    OR?: SegmentScalarWhereWithAggregatesInput[]
    NOT?: SegmentScalarWhereWithAggregatesInput | SegmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Segment"> | string
    segmentNumber?: StringWithAggregatesFilter<"Segment"> | string
    originAirportId?: StringWithAggregatesFilter<"Segment"> | string
    destinationAirportId?: StringWithAggregatesFilter<"Segment"> | string
    departureDateTime?: DateTimeWithAggregatesFilter<"Segment"> | Date | string
    arrivalDateTime?: DateTimeWithAggregatesFilter<"Segment"> | Date | string
    airlineId?: StringWithAggregatesFilter<"Segment"> | string
    aircraftId?: StringNullableWithAggregatesFilter<"Segment"> | string | null
    estimatedDuration?: IntWithAggregatesFilter<"Segment"> | number
    flightId?: StringNullableWithAggregatesFilter<"Segment"> | string | null
  }

  export type FlightClassWhereInput = {
    AND?: FlightClassWhereInput | FlightClassWhereInput[]
    OR?: FlightClassWhereInput[]
    NOT?: FlightClassWhereInput | FlightClassWhereInput[]
    id?: StringFilter<"FlightClass"> | string
    flightId?: StringFilter<"FlightClass"> | string
    cabinClass?: EnumCabinClassFilter<"FlightClass"> | $Enums.CabinClass
    availableSeats?: IntFilter<"FlightClass"> | number
    basePrice?: DecimalFilter<"FlightClass"> | Decimal | DecimalJsLike | number | string
    flight?: XOR<FlightRelationFilter, FlightWhereInput>
  }

  export type FlightClassOrderByWithRelationInput = {
    id?: SortOrder
    flightId?: SortOrder
    cabinClass?: SortOrder
    availableSeats?: SortOrder
    basePrice?: SortOrder
    flight?: FlightOrderByWithRelationInput
  }

  export type FlightClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flightId_cabinClass?: FlightClassFlightIdCabinClassCompoundUniqueInput
    AND?: FlightClassWhereInput | FlightClassWhereInput[]
    OR?: FlightClassWhereInput[]
    NOT?: FlightClassWhereInput | FlightClassWhereInput[]
    flightId?: StringFilter<"FlightClass"> | string
    cabinClass?: EnumCabinClassFilter<"FlightClass"> | $Enums.CabinClass
    availableSeats?: IntFilter<"FlightClass"> | number
    basePrice?: DecimalFilter<"FlightClass"> | Decimal | DecimalJsLike | number | string
    flight?: XOR<FlightRelationFilter, FlightWhereInput>
  }, "id" | "flightId_cabinClass">

  export type FlightClassOrderByWithAggregationInput = {
    id?: SortOrder
    flightId?: SortOrder
    cabinClass?: SortOrder
    availableSeats?: SortOrder
    basePrice?: SortOrder
    _count?: FlightClassCountOrderByAggregateInput
    _avg?: FlightClassAvgOrderByAggregateInput
    _max?: FlightClassMaxOrderByAggregateInput
    _min?: FlightClassMinOrderByAggregateInput
    _sum?: FlightClassSumOrderByAggregateInput
  }

  export type FlightClassScalarWhereWithAggregatesInput = {
    AND?: FlightClassScalarWhereWithAggregatesInput | FlightClassScalarWhereWithAggregatesInput[]
    OR?: FlightClassScalarWhereWithAggregatesInput[]
    NOT?: FlightClassScalarWhereWithAggregatesInput | FlightClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlightClass"> | string
    flightId?: StringWithAggregatesFilter<"FlightClass"> | string
    cabinClass?: EnumCabinClassWithAggregatesFilter<"FlightClass"> | $Enums.CabinClass
    availableSeats?: IntWithAggregatesFilter<"FlightClass"> | number
    basePrice?: DecimalWithAggregatesFilter<"FlightClass"> | Decimal | DecimalJsLike | number | string
  }

  export type ServiceCatalogWhereInput = {
    AND?: ServiceCatalogWhereInput | ServiceCatalogWhereInput[]
    OR?: ServiceCatalogWhereInput[]
    NOT?: ServiceCatalogWhereInput | ServiceCatalogWhereInput[]
    id?: StringFilter<"ServiceCatalog"> | string
    name?: StringFilter<"ServiceCatalog"> | string
    code?: StringFilter<"ServiceCatalog"> | string
    category?: StringFilter<"ServiceCatalog"> | string
    description?: StringNullableFilter<"ServiceCatalog"> | string | null
    airlineConfigs?: AirlineServiceConfigListRelationFilter
  }

  export type ServiceCatalogOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    airlineConfigs?: AirlineServiceConfigOrderByRelationAggregateInput
  }

  export type ServiceCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ServiceCatalogWhereInput | ServiceCatalogWhereInput[]
    OR?: ServiceCatalogWhereInput[]
    NOT?: ServiceCatalogWhereInput | ServiceCatalogWhereInput[]
    name?: StringFilter<"ServiceCatalog"> | string
    category?: StringFilter<"ServiceCatalog"> | string
    description?: StringNullableFilter<"ServiceCatalog"> | string | null
    airlineConfigs?: AirlineServiceConfigListRelationFilter
  }, "id" | "code">

  export type ServiceCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: ServiceCatalogCountOrderByAggregateInput
    _max?: ServiceCatalogMaxOrderByAggregateInput
    _min?: ServiceCatalogMinOrderByAggregateInput
  }

  export type ServiceCatalogScalarWhereWithAggregatesInput = {
    AND?: ServiceCatalogScalarWhereWithAggregatesInput | ServiceCatalogScalarWhereWithAggregatesInput[]
    OR?: ServiceCatalogScalarWhereWithAggregatesInput[]
    NOT?: ServiceCatalogScalarWhereWithAggregatesInput | ServiceCatalogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ServiceCatalog"> | string
    name?: StringWithAggregatesFilter<"ServiceCatalog"> | string
    code?: StringWithAggregatesFilter<"ServiceCatalog"> | string
    category?: StringWithAggregatesFilter<"ServiceCatalog"> | string
    description?: StringNullableWithAggregatesFilter<"ServiceCatalog"> | string | null
  }

  export type AirlineServiceConfigWhereInput = {
    AND?: AirlineServiceConfigWhereInput | AirlineServiceConfigWhereInput[]
    OR?: AirlineServiceConfigWhereInput[]
    NOT?: AirlineServiceConfigWhereInput | AirlineServiceConfigWhereInput[]
    id?: StringFilter<"AirlineServiceConfig"> | string
    serviceId?: StringFilter<"AirlineServiceConfig"> | string
    airlineId?: StringFilter<"AirlineServiceConfig"> | string
    originAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    destAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    price?: DecimalFilter<"AirlineServiceConfig"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AirlineServiceConfig"> | string
    service?: XOR<ServiceCatalogRelationFilter, ServiceCatalogWhereInput>
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
  }

  export type AirlineServiceConfigOrderByWithRelationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    airlineId?: SortOrder
    originAirportId?: SortOrderInput | SortOrder
    destAirportId?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    service?: ServiceCatalogOrderByWithRelationInput
    airline?: AirlineOrderByWithRelationInput
  }

  export type AirlineServiceConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AirlineServiceConfigWhereInput | AirlineServiceConfigWhereInput[]
    OR?: AirlineServiceConfigWhereInput[]
    NOT?: AirlineServiceConfigWhereInput | AirlineServiceConfigWhereInput[]
    serviceId?: StringFilter<"AirlineServiceConfig"> | string
    airlineId?: StringFilter<"AirlineServiceConfig"> | string
    originAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    destAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    price?: DecimalFilter<"AirlineServiceConfig"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AirlineServiceConfig"> | string
    service?: XOR<ServiceCatalogRelationFilter, ServiceCatalogWhereInput>
    airline?: XOR<AirlineRelationFilter, AirlineWhereInput>
  }, "id">

  export type AirlineServiceConfigOrderByWithAggregationInput = {
    id?: SortOrder
    serviceId?: SortOrder
    airlineId?: SortOrder
    originAirportId?: SortOrderInput | SortOrder
    destAirportId?: SortOrderInput | SortOrder
    price?: SortOrder
    currency?: SortOrder
    _count?: AirlineServiceConfigCountOrderByAggregateInput
    _avg?: AirlineServiceConfigAvgOrderByAggregateInput
    _max?: AirlineServiceConfigMaxOrderByAggregateInput
    _min?: AirlineServiceConfigMinOrderByAggregateInput
    _sum?: AirlineServiceConfigSumOrderByAggregateInput
  }

  export type AirlineServiceConfigScalarWhereWithAggregatesInput = {
    AND?: AirlineServiceConfigScalarWhereWithAggregatesInput | AirlineServiceConfigScalarWhereWithAggregatesInput[]
    OR?: AirlineServiceConfigScalarWhereWithAggregatesInput[]
    NOT?: AirlineServiceConfigScalarWhereWithAggregatesInput | AirlineServiceConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AirlineServiceConfig"> | string
    serviceId?: StringWithAggregatesFilter<"AirlineServiceConfig"> | string
    airlineId?: StringWithAggregatesFilter<"AirlineServiceConfig"> | string
    originAirportId?: StringNullableWithAggregatesFilter<"AirlineServiceConfig"> | string | null
    destAirportId?: StringNullableWithAggregatesFilter<"AirlineServiceConfig"> | string | null
    price?: DecimalWithAggregatesFilter<"AirlineServiceConfig"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"AirlineServiceConfig"> | string
  }

  export type CountryCreateInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    cities?: CityCreateNestedManyWithoutCountryInput
    airlines?: AirlineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUpdateManyWithoutCountryNestedInput
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
  }

  export type CountryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityCreateInput = {
    id?: string
    name: string
    iataCode?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
    airports?: AirportCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    countryId: string
    iataCode?: string | null
    airports?: AirportUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
    airports?: AirportUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
    airports?: AirportUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    countryId: string
    iataCode?: string | null
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirportCreateInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    city: CityCreateNestedOneWithoutAirportsInput
    originSegments?: SegmentCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirportInput
  }

  export type AirportUncheckedCreateInput = {
    id?: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
    originSegments?: SegmentUncheckedCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentUncheckedCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirportInput
  }

  export type AirportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    originSegments?: SegmentUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirportNestedInput
  }

  export type AirportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    originSegments?: SegmentUncheckedUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUncheckedUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirportNestedInput
  }

  export type AirportCreateManyInput = {
    id?: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
  }

  export type AirportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AirportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineCreateInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    country: CountryCreateNestedOneWithoutAirlinesInput
    segments?: SegmentCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftUncheckedCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    segments?: SegmentUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUncheckedUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineCreateManyInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
  }

  export type AirlineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirlineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
  }

  export type AircraftCreateInput = {
    id?: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
    airline: AirlineCreateNestedOneWithoutAircraftsInput
    segments?: SegmentCreateNestedManyWithoutAircraftInput
  }

  export type AircraftUncheckedCreateInput = {
    id?: string
    airlineId: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
    segments?: SegmentUncheckedCreateNestedManyWithoutAircraftInput
  }

  export type AircraftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
    airline?: AirlineUpdateOneRequiredWithoutAircraftsNestedInput
    segments?: SegmentUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
    segments?: SegmentUncheckedUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftCreateManyInput = {
    id?: string
    airlineId: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
  }

  export type AircraftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AircraftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AirlineAirportCreateInput = {
    airline: AirlineCreateNestedOneWithoutAirlineAirportsInput
    airport: AirportCreateNestedOneWithoutAirlineAirportsInput
  }

  export type AirlineAirportUncheckedCreateInput = {
    airlineId: string
    airportId: string
  }

  export type AirlineAirportUpdateInput = {
    airline?: AirlineUpdateOneRequiredWithoutAirlineAirportsNestedInput
    airport?: AirportUpdateOneRequiredWithoutAirlineAirportsNestedInput
  }

  export type AirlineAirportUncheckedUpdateInput = {
    airlineId?: StringFieldUpdateOperationsInput | string
    airportId?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineAirportCreateManyInput = {
    airlineId: string
    airportId: string
  }

  export type AirlineAirportUpdateManyMutationInput = {

  }

  export type AirlineAirportUncheckedUpdateManyInput = {
    airlineId?: StringFieldUpdateOperationsInput | string
    airportId?: StringFieldUpdateOperationsInput | string
  }

  export type FlightCreateInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    segments?: SegmentCreateNestedManyWithoutFlightInput
    flightClasses?: FlightClassCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    segments?: SegmentUncheckedCreateNestedManyWithoutFlightInput
    flightClasses?: FlightClassUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    segments?: SegmentUpdateManyWithoutFlightNestedInput
    flightClasses?: FlightClassUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    segments?: SegmentUncheckedUpdateManyWithoutFlightNestedInput
    flightClasses?: FlightClassUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type FlightCreateManyInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
  }

  export type FlightUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type FlightUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
  }

  export type SegmentCreateInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    flight?: FlightCreateNestedOneWithoutSegmentsInput
    originAirport: AirportCreateNestedOneWithoutOriginSegmentsInput
    destinationAirport: AirportCreateNestedOneWithoutDestinationSegmentsInput
    airline: AirlineCreateNestedOneWithoutSegmentsInput
    aircraft?: AircraftCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flight?: FlightUpdateOneWithoutSegmentsNestedInput
    originAirport?: AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput
    destinationAirport?: AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutSegmentsNestedInput
    aircraft?: AircraftUpdateOneWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentCreateManyInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
  }

  export type SegmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlightClassCreateInput = {
    id?: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
    flight: FlightCreateNestedOneWithoutFlightClassesInput
  }

  export type FlightClassUncheckedCreateInput = {
    id?: string
    flightId: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    flight?: FlightUpdateOneRequiredWithoutFlightClassesNestedInput
  }

  export type FlightClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FlightClassCreateManyInput = {
    id?: string
    flightId: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ServiceCatalogCreateInput = {
    id?: string
    name: string
    code: string
    category: string
    description?: string | null
    airlineConfigs?: AirlineServiceConfigCreateNestedManyWithoutServiceInput
  }

  export type ServiceCatalogUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    category: string
    description?: string | null
    airlineConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCatalogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    airlineConfigs?: AirlineServiceConfigUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCatalogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    airlineConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCatalogCreateManyInput = {
    id?: string
    name: string
    code: string
    category: string
    description?: string | null
  }

  export type ServiceCatalogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCatalogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirlineServiceConfigCreateInput = {
    id?: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    service: ServiceCatalogCreateNestedOneWithoutAirlineConfigsInput
    airline: AirlineCreateNestedOneWithoutServiceConfigsInput
  }

  export type AirlineServiceConfigUncheckedCreateInput = {
    id?: string
    serviceId: string
    airlineId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineServiceConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    service?: ServiceCatalogUpdateOneRequiredWithoutAirlineConfigsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutServiceConfigsNestedInput
  }

  export type AirlineServiceConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineServiceConfigCreateManyInput = {
    id?: string
    serviceId: string
    airlineId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineServiceConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineServiceConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CityListRelationFilter = {
    every?: CityWhereInput
    some?: CityWhereInput
    none?: CityWhereInput
  }

  export type AirlineListRelationFilter = {
    every?: AirlineWhereInput
    some?: AirlineWhereInput
    none?: AirlineWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    phoneCode?: SortOrder
    currencyCode?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    phoneCode?: SortOrder
    currencyCode?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isoCode?: SortOrder
    phoneCode?: SortOrder
    currencyCode?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CountryRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type AirportListRelationFilter = {
    every?: AirportWhereInput
    some?: AirportWhereInput
    none?: AirportWhereInput
  }

  export type AirportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    iataCode?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    iataCode?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    iataCode?: SortOrder
  }

  export type CityRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type SegmentListRelationFilter = {
    every?: SegmentWhereInput
    some?: SegmentWhereInput
    none?: SegmentWhereInput
  }

  export type AirlineAirportListRelationFilter = {
    every?: AirlineAirportWhereInput
    some?: AirlineAirportWhereInput
    none?: AirlineAirportWhereInput
  }

  export type SegmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineAirportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirportCountOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    timezone?: SortOrder
  }

  export type AirportMaxOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    timezone?: SortOrder
  }

  export type AirportMinOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    timezone?: SortOrder
  }

  export type AircraftListRelationFilter = {
    every?: AircraftWhereInput
    some?: AircraftWhereInput
    none?: AircraftWhereInput
  }

  export type AirlineServiceConfigListRelationFilter = {
    every?: AirlineServiceConfigWhereInput
    some?: AirlineServiceConfigWhereInput
    none?: AirlineServiceConfigWhereInput
  }

  export type AircraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineServiceConfigOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AirlineCountOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    countryId?: SortOrder
  }

  export type AirlineMaxOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    countryId?: SortOrder
  }

  export type AirlineMinOrderByAggregateInput = {
    id?: SortOrder
    iataCode?: SortOrder
    name?: SortOrder
    logoUrl?: SortOrder
    countryId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AirlineRelationFilter = {
    is?: AirlineWhereInput
    isNot?: AirlineWhereInput
  }

  export type AircraftCountOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    modelName?: SortOrder
    registration?: SortOrder
    hasWifi?: SortOrder
    hasUsb?: SortOrder
  }

  export type AircraftMaxOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    modelName?: SortOrder
    registration?: SortOrder
    hasWifi?: SortOrder
    hasUsb?: SortOrder
  }

  export type AircraftMinOrderByAggregateInput = {
    id?: SortOrder
    airlineId?: SortOrder
    modelName?: SortOrder
    registration?: SortOrder
    hasWifi?: SortOrder
    hasUsb?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AirportRelationFilter = {
    is?: AirportWhereInput
    isNot?: AirportWhereInput
  }

  export type AirlineAirportAirlineIdAirportIdCompoundUniqueInput = {
    airlineId: string
    airportId: string
  }

  export type AirlineAirportCountOrderByAggregateInput = {
    airlineId?: SortOrder
    airportId?: SortOrder
  }

  export type AirlineAirportMaxOrderByAggregateInput = {
    airlineId?: SortOrder
    airportId?: SortOrder
  }

  export type AirlineAirportMinOrderByAggregateInput = {
    airlineId?: SortOrder
    airportId?: SortOrder
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

  export type EnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
  }

  export type FlightClassListRelationFilter = {
    every?: FlightClassWhereInput
    some?: FlightClassWhereInput
    none?: FlightClassWhereInput
  }

  export type FlightClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlightCountOrderByAggregateInput = {
    id?: SortOrder
    originAirportIata?: SortOrder
    destinationAirportIata?: SortOrder
    departureDate?: SortOrder
    status?: SortOrder
  }

  export type FlightMaxOrderByAggregateInput = {
    id?: SortOrder
    originAirportIata?: SortOrder
    destinationAirportIata?: SortOrder
    departureDate?: SortOrder
    status?: SortOrder
  }

  export type FlightMinOrderByAggregateInput = {
    id?: SortOrder
    originAirportIata?: SortOrder
    destinationAirportIata?: SortOrder
    departureDate?: SortOrder
    status?: SortOrder
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

  export type EnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
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

  export type FlightNullableRelationFilter = {
    is?: FlightWhereInput | null
    isNot?: FlightWhereInput | null
  }

  export type AircraftNullableRelationFilter = {
    is?: AircraftWhereInput | null
    isNot?: AircraftWhereInput | null
  }

  export type SegmentCountOrderByAggregateInput = {
    id?: SortOrder
    segmentNumber?: SortOrder
    originAirportId?: SortOrder
    destinationAirportId?: SortOrder
    departureDateTime?: SortOrder
    arrivalDateTime?: SortOrder
    airlineId?: SortOrder
    aircraftId?: SortOrder
    estimatedDuration?: SortOrder
    flightId?: SortOrder
  }

  export type SegmentAvgOrderByAggregateInput = {
    estimatedDuration?: SortOrder
  }

  export type SegmentMaxOrderByAggregateInput = {
    id?: SortOrder
    segmentNumber?: SortOrder
    originAirportId?: SortOrder
    destinationAirportId?: SortOrder
    departureDateTime?: SortOrder
    arrivalDateTime?: SortOrder
    airlineId?: SortOrder
    aircraftId?: SortOrder
    estimatedDuration?: SortOrder
    flightId?: SortOrder
  }

  export type SegmentMinOrderByAggregateInput = {
    id?: SortOrder
    segmentNumber?: SortOrder
    originAirportId?: SortOrder
    destinationAirportId?: SortOrder
    departureDateTime?: SortOrder
    arrivalDateTime?: SortOrder
    airlineId?: SortOrder
    aircraftId?: SortOrder
    estimatedDuration?: SortOrder
    flightId?: SortOrder
  }

  export type SegmentSumOrderByAggregateInput = {
    estimatedDuration?: SortOrder
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

  export type EnumCabinClassFilter<$PrismaModel = never> = {
    equals?: $Enums.CabinClass | EnumCabinClassFieldRefInput<$PrismaModel>
    in?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCabinClassFilter<$PrismaModel> | $Enums.CabinClass
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FlightRelationFilter = {
    is?: FlightWhereInput
    isNot?: FlightWhereInput
  }

  export type FlightClassFlightIdCabinClassCompoundUniqueInput = {
    flightId: string
    cabinClass: $Enums.CabinClass
  }

  export type FlightClassCountOrderByAggregateInput = {
    id?: SortOrder
    flightId?: SortOrder
    cabinClass?: SortOrder
    availableSeats?: SortOrder
    basePrice?: SortOrder
  }

  export type FlightClassAvgOrderByAggregateInput = {
    availableSeats?: SortOrder
    basePrice?: SortOrder
  }

  export type FlightClassMaxOrderByAggregateInput = {
    id?: SortOrder
    flightId?: SortOrder
    cabinClass?: SortOrder
    availableSeats?: SortOrder
    basePrice?: SortOrder
  }

  export type FlightClassMinOrderByAggregateInput = {
    id?: SortOrder
    flightId?: SortOrder
    cabinClass?: SortOrder
    availableSeats?: SortOrder
    basePrice?: SortOrder
  }

  export type FlightClassSumOrderByAggregateInput = {
    availableSeats?: SortOrder
    basePrice?: SortOrder
  }

  export type EnumCabinClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CabinClass | EnumCabinClassFieldRefInput<$PrismaModel>
    in?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCabinClassWithAggregatesFilter<$PrismaModel> | $Enums.CabinClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCabinClassFilter<$PrismaModel>
    _max?: NestedEnumCabinClassFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ServiceCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type ServiceCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type ServiceCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    category?: SortOrder
    description?: SortOrder
  }

  export type ServiceCatalogRelationFilter = {
    is?: ServiceCatalogWhereInput
    isNot?: ServiceCatalogWhereInput
  }

  export type AirlineServiceConfigCountOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    airlineId?: SortOrder
    originAirportId?: SortOrder
    destAirportId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
  }

  export type AirlineServiceConfigAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AirlineServiceConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    airlineId?: SortOrder
    originAirportId?: SortOrder
    destAirportId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
  }

  export type AirlineServiceConfigMinOrderByAggregateInput = {
    id?: SortOrder
    serviceId?: SortOrder
    airlineId?: SortOrder
    originAirportId?: SortOrder
    destAirportId?: SortOrder
    price?: SortOrder
    currency?: SortOrder
  }

  export type AirlineServiceConfigSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CityCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type AirlineCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
  }

  export type CityUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
  }

  export type AirlineUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CityUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type AirlineUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    upsert?: AirlineUpsertWithWhereUniqueWithoutCountryInput | AirlineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    set?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    disconnect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    delete?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    update?: AirlineUpdateWithWhereUniqueWithoutCountryInput | AirlineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirlineUpdateManyWithWhereWithoutCountryInput | AirlineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
  }

  export type CityUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput> | CityCreateWithoutCountryInput[] | CityUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: CityCreateOrConnectWithoutCountryInput | CityCreateOrConnectWithoutCountryInput[]
    upsert?: CityUpsertWithWhereUniqueWithoutCountryInput | CityUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: CityCreateManyCountryInputEnvelope
    set?: CityWhereUniqueInput | CityWhereUniqueInput[]
    disconnect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    delete?: CityWhereUniqueInput | CityWhereUniqueInput[]
    connect?: CityWhereUniqueInput | CityWhereUniqueInput[]
    update?: CityUpdateWithWhereUniqueWithoutCountryInput | CityUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: CityUpdateManyWithWhereWithoutCountryInput | CityUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: CityScalarWhereInput | CityScalarWhereInput[]
  }

  export type AirlineUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput> | AirlineCreateWithoutCountryInput[] | AirlineUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: AirlineCreateOrConnectWithoutCountryInput | AirlineCreateOrConnectWithoutCountryInput[]
    upsert?: AirlineUpsertWithWhereUniqueWithoutCountryInput | AirlineUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: AirlineCreateManyCountryInputEnvelope
    set?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    disconnect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    delete?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    connect?: AirlineWhereUniqueInput | AirlineWhereUniqueInput[]
    update?: AirlineUpdateWithWhereUniqueWithoutCountryInput | AirlineUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: AirlineUpdateManyWithWhereWithoutCountryInput | AirlineUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutCitiesInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    connect?: CountryWhereUniqueInput
  }

  export type AirportCreateNestedManyWithoutCityInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type AirportUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutCitiesInput
    upsert?: CountryUpsertWithoutCitiesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutCitiesInput, CountryUpdateWithoutCitiesInput>, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type AirportUpdateManyWithoutCityNestedInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCityInput | AirportUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCityInput | AirportUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCityInput | AirportUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type AirportUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput> | AirportCreateWithoutCityInput[] | AirportUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AirportCreateOrConnectWithoutCityInput | AirportCreateOrConnectWithoutCityInput[]
    upsert?: AirportUpsertWithWhereUniqueWithoutCityInput | AirportUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AirportCreateManyCityInputEnvelope
    set?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    disconnect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    delete?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    connect?: AirportWhereUniqueInput | AirportWhereUniqueInput[]
    update?: AirportUpdateWithWhereUniqueWithoutCityInput | AirportUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AirportUpdateManyWithWhereWithoutCityInput | AirportUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AirportScalarWhereInput | AirportScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutAirportsInput = {
    create?: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CityCreateOrConnectWithoutAirportsInput
    connect?: CityWhereUniqueInput
  }

  export type SegmentCreateNestedManyWithoutOriginAirportInput = {
    create?: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput> | SegmentCreateWithoutOriginAirportInput[] | SegmentUncheckedCreateWithoutOriginAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutOriginAirportInput | SegmentCreateOrConnectWithoutOriginAirportInput[]
    createMany?: SegmentCreateManyOriginAirportInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type SegmentCreateNestedManyWithoutDestinationAirportInput = {
    create?: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput> | SegmentCreateWithoutDestinationAirportInput[] | SegmentUncheckedCreateWithoutDestinationAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutDestinationAirportInput | SegmentCreateOrConnectWithoutDestinationAirportInput[]
    createMany?: SegmentCreateManyDestinationAirportInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type AirlineAirportCreateNestedManyWithoutAirportInput = {
    create?: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput> | AirlineAirportCreateWithoutAirportInput[] | AirlineAirportUncheckedCreateWithoutAirportInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirportInput | AirlineAirportCreateOrConnectWithoutAirportInput[]
    createMany?: AirlineAirportCreateManyAirportInputEnvelope
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutOriginAirportInput = {
    create?: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput> | SegmentCreateWithoutOriginAirportInput[] | SegmentUncheckedCreateWithoutOriginAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutOriginAirportInput | SegmentCreateOrConnectWithoutOriginAirportInput[]
    createMany?: SegmentCreateManyOriginAirportInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutDestinationAirportInput = {
    create?: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput> | SegmentCreateWithoutDestinationAirportInput[] | SegmentUncheckedCreateWithoutDestinationAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutDestinationAirportInput | SegmentCreateOrConnectWithoutDestinationAirportInput[]
    createMany?: SegmentCreateManyDestinationAirportInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type AirlineAirportUncheckedCreateNestedManyWithoutAirportInput = {
    create?: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput> | AirlineAirportCreateWithoutAirportInput[] | AirlineAirportUncheckedCreateWithoutAirportInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirportInput | AirlineAirportCreateOrConnectWithoutAirportInput[]
    createMany?: AirlineAirportCreateManyAirportInputEnvelope
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutAirportsNestedInput = {
    create?: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    connectOrCreate?: CityCreateOrConnectWithoutAirportsInput
    upsert?: CityUpsertWithoutAirportsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAirportsInput, CityUpdateWithoutAirportsInput>, CityUncheckedUpdateWithoutAirportsInput>
  }

  export type SegmentUpdateManyWithoutOriginAirportNestedInput = {
    create?: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput> | SegmentCreateWithoutOriginAirportInput[] | SegmentUncheckedCreateWithoutOriginAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutOriginAirportInput | SegmentCreateOrConnectWithoutOriginAirportInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutOriginAirportInput | SegmentUpsertWithWhereUniqueWithoutOriginAirportInput[]
    createMany?: SegmentCreateManyOriginAirportInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutOriginAirportInput | SegmentUpdateWithWhereUniqueWithoutOriginAirportInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutOriginAirportInput | SegmentUpdateManyWithWhereWithoutOriginAirportInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type SegmentUpdateManyWithoutDestinationAirportNestedInput = {
    create?: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput> | SegmentCreateWithoutDestinationAirportInput[] | SegmentUncheckedCreateWithoutDestinationAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutDestinationAirportInput | SegmentCreateOrConnectWithoutDestinationAirportInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutDestinationAirportInput | SegmentUpsertWithWhereUniqueWithoutDestinationAirportInput[]
    createMany?: SegmentCreateManyDestinationAirportInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutDestinationAirportInput | SegmentUpdateWithWhereUniqueWithoutDestinationAirportInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutDestinationAirportInput | SegmentUpdateManyWithWhereWithoutDestinationAirportInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type AirlineAirportUpdateManyWithoutAirportNestedInput = {
    create?: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput> | AirlineAirportCreateWithoutAirportInput[] | AirlineAirportUncheckedCreateWithoutAirportInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirportInput | AirlineAirportCreateOrConnectWithoutAirportInput[]
    upsert?: AirlineAirportUpsertWithWhereUniqueWithoutAirportInput | AirlineAirportUpsertWithWhereUniqueWithoutAirportInput[]
    createMany?: AirlineAirportCreateManyAirportInputEnvelope
    set?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    disconnect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    delete?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    update?: AirlineAirportUpdateWithWhereUniqueWithoutAirportInput | AirlineAirportUpdateWithWhereUniqueWithoutAirportInput[]
    updateMany?: AirlineAirportUpdateManyWithWhereWithoutAirportInput | AirlineAirportUpdateManyWithWhereWithoutAirportInput[]
    deleteMany?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutOriginAirportNestedInput = {
    create?: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput> | SegmentCreateWithoutOriginAirportInput[] | SegmentUncheckedCreateWithoutOriginAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutOriginAirportInput | SegmentCreateOrConnectWithoutOriginAirportInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutOriginAirportInput | SegmentUpsertWithWhereUniqueWithoutOriginAirportInput[]
    createMany?: SegmentCreateManyOriginAirportInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutOriginAirportInput | SegmentUpdateWithWhereUniqueWithoutOriginAirportInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutOriginAirportInput | SegmentUpdateManyWithWhereWithoutOriginAirportInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutDestinationAirportNestedInput = {
    create?: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput> | SegmentCreateWithoutDestinationAirportInput[] | SegmentUncheckedCreateWithoutDestinationAirportInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutDestinationAirportInput | SegmentCreateOrConnectWithoutDestinationAirportInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutDestinationAirportInput | SegmentUpsertWithWhereUniqueWithoutDestinationAirportInput[]
    createMany?: SegmentCreateManyDestinationAirportInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutDestinationAirportInput | SegmentUpdateWithWhereUniqueWithoutDestinationAirportInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutDestinationAirportInput | SegmentUpdateManyWithWhereWithoutDestinationAirportInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type AirlineAirportUncheckedUpdateManyWithoutAirportNestedInput = {
    create?: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput> | AirlineAirportCreateWithoutAirportInput[] | AirlineAirportUncheckedCreateWithoutAirportInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirportInput | AirlineAirportCreateOrConnectWithoutAirportInput[]
    upsert?: AirlineAirportUpsertWithWhereUniqueWithoutAirportInput | AirlineAirportUpsertWithWhereUniqueWithoutAirportInput[]
    createMany?: AirlineAirportCreateManyAirportInputEnvelope
    set?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    disconnect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    delete?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    update?: AirlineAirportUpdateWithWhereUniqueWithoutAirportInput | AirlineAirportUpdateWithWhereUniqueWithoutAirportInput[]
    updateMany?: AirlineAirportUpdateManyWithWhereWithoutAirportInput | AirlineAirportUpdateManyWithWhereWithoutAirportInput[]
    deleteMany?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutAirlinesInput = {
    create?: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirlinesInput
    connect?: CountryWhereUniqueInput
  }

  export type SegmentCreateNestedManyWithoutAirlineInput = {
    create?: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput> | SegmentCreateWithoutAirlineInput[] | SegmentUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAirlineInput | SegmentCreateOrConnectWithoutAirlineInput[]
    createMany?: SegmentCreateManyAirlineInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type AircraftCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput> | AircraftCreateWithoutAirlineInput[] | AircraftUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AircraftCreateOrConnectWithoutAirlineInput | AircraftCreateOrConnectWithoutAirlineInput[]
    createMany?: AircraftCreateManyAirlineInputEnvelope
    connect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
  }

  export type AirlineServiceConfigCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput> | AirlineServiceConfigCreateWithoutAirlineInput[] | AirlineServiceConfigUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutAirlineInput | AirlineServiceConfigCreateOrConnectWithoutAirlineInput[]
    createMany?: AirlineServiceConfigCreateManyAirlineInputEnvelope
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
  }

  export type AirlineAirportCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput> | AirlineAirportCreateWithoutAirlineInput[] | AirlineAirportUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirlineInput | AirlineAirportCreateOrConnectWithoutAirlineInput[]
    createMany?: AirlineAirportCreateManyAirlineInputEnvelope
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput> | SegmentCreateWithoutAirlineInput[] | SegmentUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAirlineInput | SegmentCreateOrConnectWithoutAirlineInput[]
    createMany?: SegmentCreateManyAirlineInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type AircraftUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput> | AircraftCreateWithoutAirlineInput[] | AircraftUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AircraftCreateOrConnectWithoutAirlineInput | AircraftCreateOrConnectWithoutAirlineInput[]
    createMany?: AircraftCreateManyAirlineInputEnvelope
    connect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
  }

  export type AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput> | AirlineServiceConfigCreateWithoutAirlineInput[] | AirlineServiceConfigUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutAirlineInput | AirlineServiceConfigCreateOrConnectWithoutAirlineInput[]
    createMany?: AirlineServiceConfigCreateManyAirlineInputEnvelope
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
  }

  export type AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput = {
    create?: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput> | AirlineAirportCreateWithoutAirlineInput[] | AirlineAirportUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirlineInput | AirlineAirportCreateOrConnectWithoutAirlineInput[]
    createMany?: AirlineAirportCreateManyAirlineInputEnvelope
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutAirlinesNestedInput = {
    create?: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    connectOrCreate?: CountryCreateOrConnectWithoutAirlinesInput
    upsert?: CountryUpsertWithoutAirlinesInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutAirlinesInput, CountryUpdateWithoutAirlinesInput>, CountryUncheckedUpdateWithoutAirlinesInput>
  }

  export type SegmentUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput> | SegmentCreateWithoutAirlineInput[] | SegmentUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAirlineInput | SegmentCreateOrConnectWithoutAirlineInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutAirlineInput | SegmentUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: SegmentCreateManyAirlineInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutAirlineInput | SegmentUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutAirlineInput | SegmentUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type AircraftUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput> | AircraftCreateWithoutAirlineInput[] | AircraftUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AircraftCreateOrConnectWithoutAirlineInput | AircraftCreateOrConnectWithoutAirlineInput[]
    upsert?: AircraftUpsertWithWhereUniqueWithoutAirlineInput | AircraftUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AircraftCreateManyAirlineInputEnvelope
    set?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    disconnect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    delete?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    connect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    update?: AircraftUpdateWithWhereUniqueWithoutAirlineInput | AircraftUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AircraftUpdateManyWithWhereWithoutAirlineInput | AircraftUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AircraftScalarWhereInput | AircraftScalarWhereInput[]
  }

  export type AirlineServiceConfigUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput> | AirlineServiceConfigCreateWithoutAirlineInput[] | AirlineServiceConfigUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutAirlineInput | AirlineServiceConfigCreateOrConnectWithoutAirlineInput[]
    upsert?: AirlineServiceConfigUpsertWithWhereUniqueWithoutAirlineInput | AirlineServiceConfigUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirlineServiceConfigCreateManyAirlineInputEnvelope
    set?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    disconnect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    delete?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    update?: AirlineServiceConfigUpdateWithWhereUniqueWithoutAirlineInput | AirlineServiceConfigUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirlineServiceConfigUpdateManyWithWhereWithoutAirlineInput | AirlineServiceConfigUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
  }

  export type AirlineAirportUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput> | AirlineAirportCreateWithoutAirlineInput[] | AirlineAirportUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirlineInput | AirlineAirportCreateOrConnectWithoutAirlineInput[]
    upsert?: AirlineAirportUpsertWithWhereUniqueWithoutAirlineInput | AirlineAirportUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirlineAirportCreateManyAirlineInputEnvelope
    set?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    disconnect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    delete?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    update?: AirlineAirportUpdateWithWhereUniqueWithoutAirlineInput | AirlineAirportUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirlineAirportUpdateManyWithWhereWithoutAirlineInput | AirlineAirportUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput> | SegmentCreateWithoutAirlineInput[] | SegmentUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAirlineInput | SegmentCreateOrConnectWithoutAirlineInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutAirlineInput | SegmentUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: SegmentCreateManyAirlineInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutAirlineInput | SegmentUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutAirlineInput | SegmentUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type AircraftUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput> | AircraftCreateWithoutAirlineInput[] | AircraftUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AircraftCreateOrConnectWithoutAirlineInput | AircraftCreateOrConnectWithoutAirlineInput[]
    upsert?: AircraftUpsertWithWhereUniqueWithoutAirlineInput | AircraftUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AircraftCreateManyAirlineInputEnvelope
    set?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    disconnect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    delete?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    connect?: AircraftWhereUniqueInput | AircraftWhereUniqueInput[]
    update?: AircraftUpdateWithWhereUniqueWithoutAirlineInput | AircraftUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AircraftUpdateManyWithWhereWithoutAirlineInput | AircraftUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AircraftScalarWhereInput | AircraftScalarWhereInput[]
  }

  export type AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput> | AirlineServiceConfigCreateWithoutAirlineInput[] | AirlineServiceConfigUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutAirlineInput | AirlineServiceConfigCreateOrConnectWithoutAirlineInput[]
    upsert?: AirlineServiceConfigUpsertWithWhereUniqueWithoutAirlineInput | AirlineServiceConfigUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirlineServiceConfigCreateManyAirlineInputEnvelope
    set?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    disconnect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    delete?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    update?: AirlineServiceConfigUpdateWithWhereUniqueWithoutAirlineInput | AirlineServiceConfigUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirlineServiceConfigUpdateManyWithWhereWithoutAirlineInput | AirlineServiceConfigUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
  }

  export type AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput = {
    create?: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput> | AirlineAirportCreateWithoutAirlineInput[] | AirlineAirportUncheckedCreateWithoutAirlineInput[]
    connectOrCreate?: AirlineAirportCreateOrConnectWithoutAirlineInput | AirlineAirportCreateOrConnectWithoutAirlineInput[]
    upsert?: AirlineAirportUpsertWithWhereUniqueWithoutAirlineInput | AirlineAirportUpsertWithWhereUniqueWithoutAirlineInput[]
    createMany?: AirlineAirportCreateManyAirlineInputEnvelope
    set?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    disconnect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    delete?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    connect?: AirlineAirportWhereUniqueInput | AirlineAirportWhereUniqueInput[]
    update?: AirlineAirportUpdateWithWhereUniqueWithoutAirlineInput | AirlineAirportUpdateWithWhereUniqueWithoutAirlineInput[]
    updateMany?: AirlineAirportUpdateManyWithWhereWithoutAirlineInput | AirlineAirportUpdateManyWithWhereWithoutAirlineInput[]
    deleteMany?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
  }

  export type AirlineCreateNestedOneWithoutAircraftsInput = {
    create?: XOR<AirlineCreateWithoutAircraftsInput, AirlineUncheckedCreateWithoutAircraftsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutAircraftsInput
    connect?: AirlineWhereUniqueInput
  }

  export type SegmentCreateNestedManyWithoutAircraftInput = {
    create?: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput> | SegmentCreateWithoutAircraftInput[] | SegmentUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAircraftInput | SegmentCreateOrConnectWithoutAircraftInput[]
    createMany?: SegmentCreateManyAircraftInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutAircraftInput = {
    create?: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput> | SegmentCreateWithoutAircraftInput[] | SegmentUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAircraftInput | SegmentCreateOrConnectWithoutAircraftInput[]
    createMany?: SegmentCreateManyAircraftInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AirlineUpdateOneRequiredWithoutAircraftsNestedInput = {
    create?: XOR<AirlineCreateWithoutAircraftsInput, AirlineUncheckedCreateWithoutAircraftsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutAircraftsInput
    upsert?: AirlineUpsertWithoutAircraftsInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutAircraftsInput, AirlineUpdateWithoutAircraftsInput>, AirlineUncheckedUpdateWithoutAircraftsInput>
  }

  export type SegmentUpdateManyWithoutAircraftNestedInput = {
    create?: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput> | SegmentCreateWithoutAircraftInput[] | SegmentUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAircraftInput | SegmentCreateOrConnectWithoutAircraftInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutAircraftInput | SegmentUpsertWithWhereUniqueWithoutAircraftInput[]
    createMany?: SegmentCreateManyAircraftInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutAircraftInput | SegmentUpdateWithWhereUniqueWithoutAircraftInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutAircraftInput | SegmentUpdateManyWithWhereWithoutAircraftInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutAircraftNestedInput = {
    create?: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput> | SegmentCreateWithoutAircraftInput[] | SegmentUncheckedCreateWithoutAircraftInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutAircraftInput | SegmentCreateOrConnectWithoutAircraftInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutAircraftInput | SegmentUpsertWithWhereUniqueWithoutAircraftInput[]
    createMany?: SegmentCreateManyAircraftInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutAircraftInput | SegmentUpdateWithWhereUniqueWithoutAircraftInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutAircraftInput | SegmentUpdateManyWithWhereWithoutAircraftInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type AirlineCreateNestedOneWithoutAirlineAirportsInput = {
    create?: XOR<AirlineCreateWithoutAirlineAirportsInput, AirlineUncheckedCreateWithoutAirlineAirportsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutAirlineAirportsInput
    connect?: AirlineWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutAirlineAirportsInput = {
    create?: XOR<AirportCreateWithoutAirlineAirportsInput, AirportUncheckedCreateWithoutAirlineAirportsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutAirlineAirportsInput
    connect?: AirportWhereUniqueInput
  }

  export type AirlineUpdateOneRequiredWithoutAirlineAirportsNestedInput = {
    create?: XOR<AirlineCreateWithoutAirlineAirportsInput, AirlineUncheckedCreateWithoutAirlineAirportsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutAirlineAirportsInput
    upsert?: AirlineUpsertWithoutAirlineAirportsInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutAirlineAirportsInput, AirlineUpdateWithoutAirlineAirportsInput>, AirlineUncheckedUpdateWithoutAirlineAirportsInput>
  }

  export type AirportUpdateOneRequiredWithoutAirlineAirportsNestedInput = {
    create?: XOR<AirportCreateWithoutAirlineAirportsInput, AirportUncheckedCreateWithoutAirlineAirportsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutAirlineAirportsInput
    upsert?: AirportUpsertWithoutAirlineAirportsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutAirlineAirportsInput, AirportUpdateWithoutAirlineAirportsInput>, AirportUncheckedUpdateWithoutAirlineAirportsInput>
  }

  export type SegmentCreateNestedManyWithoutFlightInput = {
    create?: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput> | SegmentCreateWithoutFlightInput[] | SegmentUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutFlightInput | SegmentCreateOrConnectWithoutFlightInput[]
    createMany?: SegmentCreateManyFlightInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type FlightClassCreateNestedManyWithoutFlightInput = {
    create?: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput> | FlightClassCreateWithoutFlightInput[] | FlightClassUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightClassCreateOrConnectWithoutFlightInput | FlightClassCreateOrConnectWithoutFlightInput[]
    createMany?: FlightClassCreateManyFlightInputEnvelope
    connect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
  }

  export type SegmentUncheckedCreateNestedManyWithoutFlightInput = {
    create?: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput> | SegmentCreateWithoutFlightInput[] | SegmentUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutFlightInput | SegmentCreateOrConnectWithoutFlightInput[]
    createMany?: SegmentCreateManyFlightInputEnvelope
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
  }

  export type FlightClassUncheckedCreateNestedManyWithoutFlightInput = {
    create?: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput> | FlightClassCreateWithoutFlightInput[] | FlightClassUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightClassCreateOrConnectWithoutFlightInput | FlightClassCreateOrConnectWithoutFlightInput[]
    createMany?: FlightClassCreateManyFlightInputEnvelope
    connect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumFlightStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlightStatus
  }

  export type SegmentUpdateManyWithoutFlightNestedInput = {
    create?: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput> | SegmentCreateWithoutFlightInput[] | SegmentUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutFlightInput | SegmentCreateOrConnectWithoutFlightInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutFlightInput | SegmentUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: SegmentCreateManyFlightInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutFlightInput | SegmentUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutFlightInput | SegmentUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type FlightClassUpdateManyWithoutFlightNestedInput = {
    create?: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput> | FlightClassCreateWithoutFlightInput[] | FlightClassUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightClassCreateOrConnectWithoutFlightInput | FlightClassCreateOrConnectWithoutFlightInput[]
    upsert?: FlightClassUpsertWithWhereUniqueWithoutFlightInput | FlightClassUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: FlightClassCreateManyFlightInputEnvelope
    set?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    disconnect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    delete?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    connect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    update?: FlightClassUpdateWithWhereUniqueWithoutFlightInput | FlightClassUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: FlightClassUpdateManyWithWhereWithoutFlightInput | FlightClassUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: FlightClassScalarWhereInput | FlightClassScalarWhereInput[]
  }

  export type SegmentUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput> | SegmentCreateWithoutFlightInput[] | SegmentUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: SegmentCreateOrConnectWithoutFlightInput | SegmentCreateOrConnectWithoutFlightInput[]
    upsert?: SegmentUpsertWithWhereUniqueWithoutFlightInput | SegmentUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: SegmentCreateManyFlightInputEnvelope
    set?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    disconnect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    delete?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    connect?: SegmentWhereUniqueInput | SegmentWhereUniqueInput[]
    update?: SegmentUpdateWithWhereUniqueWithoutFlightInput | SegmentUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: SegmentUpdateManyWithWhereWithoutFlightInput | SegmentUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
  }

  export type FlightClassUncheckedUpdateManyWithoutFlightNestedInput = {
    create?: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput> | FlightClassCreateWithoutFlightInput[] | FlightClassUncheckedCreateWithoutFlightInput[]
    connectOrCreate?: FlightClassCreateOrConnectWithoutFlightInput | FlightClassCreateOrConnectWithoutFlightInput[]
    upsert?: FlightClassUpsertWithWhereUniqueWithoutFlightInput | FlightClassUpsertWithWhereUniqueWithoutFlightInput[]
    createMany?: FlightClassCreateManyFlightInputEnvelope
    set?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    disconnect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    delete?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    connect?: FlightClassWhereUniqueInput | FlightClassWhereUniqueInput[]
    update?: FlightClassUpdateWithWhereUniqueWithoutFlightInput | FlightClassUpdateWithWhereUniqueWithoutFlightInput[]
    updateMany?: FlightClassUpdateManyWithWhereWithoutFlightInput | FlightClassUpdateManyWithWhereWithoutFlightInput[]
    deleteMany?: FlightClassScalarWhereInput | FlightClassScalarWhereInput[]
  }

  export type FlightCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<FlightCreateWithoutSegmentsInput, FlightUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutSegmentsInput
    connect?: FlightWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutOriginSegmentsInput = {
    create?: XOR<AirportCreateWithoutOriginSegmentsInput, AirportUncheckedCreateWithoutOriginSegmentsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutOriginSegmentsInput
    connect?: AirportWhereUniqueInput
  }

  export type AirportCreateNestedOneWithoutDestinationSegmentsInput = {
    create?: XOR<AirportCreateWithoutDestinationSegmentsInput, AirportUncheckedCreateWithoutDestinationSegmentsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDestinationSegmentsInput
    connect?: AirportWhereUniqueInput
  }

  export type AirlineCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<AirlineCreateWithoutSegmentsInput, AirlineUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutSegmentsInput
    connect?: AirlineWhereUniqueInput
  }

  export type AircraftCreateNestedOneWithoutSegmentsInput = {
    create?: XOR<AircraftCreateWithoutSegmentsInput, AircraftUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: AircraftCreateOrConnectWithoutSegmentsInput
    connect?: AircraftWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlightUpdateOneWithoutSegmentsNestedInput = {
    create?: XOR<FlightCreateWithoutSegmentsInput, FlightUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: FlightCreateOrConnectWithoutSegmentsInput
    upsert?: FlightUpsertWithoutSegmentsInput
    disconnect?: FlightWhereInput | boolean
    delete?: FlightWhereInput | boolean
    connect?: FlightWhereUniqueInput
    update?: XOR<XOR<FlightUpdateToOneWithWhereWithoutSegmentsInput, FlightUpdateWithoutSegmentsInput>, FlightUncheckedUpdateWithoutSegmentsInput>
  }

  export type AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput = {
    create?: XOR<AirportCreateWithoutOriginSegmentsInput, AirportUncheckedCreateWithoutOriginSegmentsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutOriginSegmentsInput
    upsert?: AirportUpsertWithoutOriginSegmentsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutOriginSegmentsInput, AirportUpdateWithoutOriginSegmentsInput>, AirportUncheckedUpdateWithoutOriginSegmentsInput>
  }

  export type AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput = {
    create?: XOR<AirportCreateWithoutDestinationSegmentsInput, AirportUncheckedCreateWithoutDestinationSegmentsInput>
    connectOrCreate?: AirportCreateOrConnectWithoutDestinationSegmentsInput
    upsert?: AirportUpsertWithoutDestinationSegmentsInput
    connect?: AirportWhereUniqueInput
    update?: XOR<XOR<AirportUpdateToOneWithWhereWithoutDestinationSegmentsInput, AirportUpdateWithoutDestinationSegmentsInput>, AirportUncheckedUpdateWithoutDestinationSegmentsInput>
  }

  export type AirlineUpdateOneRequiredWithoutSegmentsNestedInput = {
    create?: XOR<AirlineCreateWithoutSegmentsInput, AirlineUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutSegmentsInput
    upsert?: AirlineUpsertWithoutSegmentsInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutSegmentsInput, AirlineUpdateWithoutSegmentsInput>, AirlineUncheckedUpdateWithoutSegmentsInput>
  }

  export type AircraftUpdateOneWithoutSegmentsNestedInput = {
    create?: XOR<AircraftCreateWithoutSegmentsInput, AircraftUncheckedCreateWithoutSegmentsInput>
    connectOrCreate?: AircraftCreateOrConnectWithoutSegmentsInput
    upsert?: AircraftUpsertWithoutSegmentsInput
    disconnect?: AircraftWhereInput | boolean
    delete?: AircraftWhereInput | boolean
    connect?: AircraftWhereUniqueInput
    update?: XOR<XOR<AircraftUpdateToOneWithWhereWithoutSegmentsInput, AircraftUpdateWithoutSegmentsInput>, AircraftUncheckedUpdateWithoutSegmentsInput>
  }

  export type FlightCreateNestedOneWithoutFlightClassesInput = {
    create?: XOR<FlightCreateWithoutFlightClassesInput, FlightUncheckedCreateWithoutFlightClassesInput>
    connectOrCreate?: FlightCreateOrConnectWithoutFlightClassesInput
    connect?: FlightWhereUniqueInput
  }

  export type EnumCabinClassFieldUpdateOperationsInput = {
    set?: $Enums.CabinClass
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type FlightUpdateOneRequiredWithoutFlightClassesNestedInput = {
    create?: XOR<FlightCreateWithoutFlightClassesInput, FlightUncheckedCreateWithoutFlightClassesInput>
    connectOrCreate?: FlightCreateOrConnectWithoutFlightClassesInput
    upsert?: FlightUpsertWithoutFlightClassesInput
    connect?: FlightWhereUniqueInput
    update?: XOR<XOR<FlightUpdateToOneWithWhereWithoutFlightClassesInput, FlightUpdateWithoutFlightClassesInput>, FlightUncheckedUpdateWithoutFlightClassesInput>
  }

  export type AirlineServiceConfigCreateNestedManyWithoutServiceInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput> | AirlineServiceConfigCreateWithoutServiceInput[] | AirlineServiceConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutServiceInput | AirlineServiceConfigCreateOrConnectWithoutServiceInput[]
    createMany?: AirlineServiceConfigCreateManyServiceInputEnvelope
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
  }

  export type AirlineServiceConfigUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput> | AirlineServiceConfigCreateWithoutServiceInput[] | AirlineServiceConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutServiceInput | AirlineServiceConfigCreateOrConnectWithoutServiceInput[]
    createMany?: AirlineServiceConfigCreateManyServiceInputEnvelope
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
  }

  export type AirlineServiceConfigUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput> | AirlineServiceConfigCreateWithoutServiceInput[] | AirlineServiceConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutServiceInput | AirlineServiceConfigCreateOrConnectWithoutServiceInput[]
    upsert?: AirlineServiceConfigUpsertWithWhereUniqueWithoutServiceInput | AirlineServiceConfigUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AirlineServiceConfigCreateManyServiceInputEnvelope
    set?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    disconnect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    delete?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    update?: AirlineServiceConfigUpdateWithWhereUniqueWithoutServiceInput | AirlineServiceConfigUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AirlineServiceConfigUpdateManyWithWhereWithoutServiceInput | AirlineServiceConfigUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
  }

  export type AirlineServiceConfigUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput> | AirlineServiceConfigCreateWithoutServiceInput[] | AirlineServiceConfigUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: AirlineServiceConfigCreateOrConnectWithoutServiceInput | AirlineServiceConfigCreateOrConnectWithoutServiceInput[]
    upsert?: AirlineServiceConfigUpsertWithWhereUniqueWithoutServiceInput | AirlineServiceConfigUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: AirlineServiceConfigCreateManyServiceInputEnvelope
    set?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    disconnect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    delete?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    connect?: AirlineServiceConfigWhereUniqueInput | AirlineServiceConfigWhereUniqueInput[]
    update?: AirlineServiceConfigUpdateWithWhereUniqueWithoutServiceInput | AirlineServiceConfigUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: AirlineServiceConfigUpdateManyWithWhereWithoutServiceInput | AirlineServiceConfigUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
  }

  export type ServiceCatalogCreateNestedOneWithoutAirlineConfigsInput = {
    create?: XOR<ServiceCatalogCreateWithoutAirlineConfigsInput, ServiceCatalogUncheckedCreateWithoutAirlineConfigsInput>
    connectOrCreate?: ServiceCatalogCreateOrConnectWithoutAirlineConfigsInput
    connect?: ServiceCatalogWhereUniqueInput
  }

  export type AirlineCreateNestedOneWithoutServiceConfigsInput = {
    create?: XOR<AirlineCreateWithoutServiceConfigsInput, AirlineUncheckedCreateWithoutServiceConfigsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutServiceConfigsInput
    connect?: AirlineWhereUniqueInput
  }

  export type ServiceCatalogUpdateOneRequiredWithoutAirlineConfigsNestedInput = {
    create?: XOR<ServiceCatalogCreateWithoutAirlineConfigsInput, ServiceCatalogUncheckedCreateWithoutAirlineConfigsInput>
    connectOrCreate?: ServiceCatalogCreateOrConnectWithoutAirlineConfigsInput
    upsert?: ServiceCatalogUpsertWithoutAirlineConfigsInput
    connect?: ServiceCatalogWhereUniqueInput
    update?: XOR<XOR<ServiceCatalogUpdateToOneWithWhereWithoutAirlineConfigsInput, ServiceCatalogUpdateWithoutAirlineConfigsInput>, ServiceCatalogUncheckedUpdateWithoutAirlineConfigsInput>
  }

  export type AirlineUpdateOneRequiredWithoutServiceConfigsNestedInput = {
    create?: XOR<AirlineCreateWithoutServiceConfigsInput, AirlineUncheckedCreateWithoutServiceConfigsInput>
    connectOrCreate?: AirlineCreateOrConnectWithoutServiceConfigsInput
    upsert?: AirlineUpsertWithoutServiceConfigsInput
    connect?: AirlineWhereUniqueInput
    update?: XOR<XOR<AirlineUpdateToOneWithWhereWithoutServiceConfigsInput, AirlineUpdateWithoutServiceConfigsInput>, AirlineUncheckedUpdateWithoutServiceConfigsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumFlightStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusFilter<$PrismaModel> | $Enums.FlightStatus
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

  export type NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlightStatus | EnumFlightStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.FlightStatus[] | ListEnumFlightStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumFlightStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlightStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlightStatusFilter<$PrismaModel>
    _max?: NestedEnumFlightStatusFilter<$PrismaModel>
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

  export type NestedEnumCabinClassFilter<$PrismaModel = never> = {
    equals?: $Enums.CabinClass | EnumCabinClassFieldRefInput<$PrismaModel>
    in?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCabinClassFilter<$PrismaModel> | $Enums.CabinClass
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumCabinClassWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CabinClass | EnumCabinClassFieldRefInput<$PrismaModel>
    in?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    notIn?: $Enums.CabinClass[] | ListEnumCabinClassFieldRefInput<$PrismaModel>
    not?: NestedEnumCabinClassWithAggregatesFilter<$PrismaModel> | $Enums.CabinClass
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCabinClassFilter<$PrismaModel>
    _max?: NestedEnumCabinClassFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type CityCreateWithoutCountryInput = {
    id?: string
    name: string
    iataCode?: string | null
    airports?: AirportCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutCountryInput = {
    id?: string
    name: string
    iataCode?: string | null
    airports?: AirportUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutCountryInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityCreateManyCountryInputEnvelope = {
    data: CityCreateManyCountryInput | CityCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type AirlineCreateWithoutCountryInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    segments?: SegmentCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutCountryInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    segments?: SegmentUncheckedCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftUncheckedCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput>
  }

  export type AirlineCreateManyCountryInputEnvelope = {
    data: AirlineCreateManyCountryInput | AirlineCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    update: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
    create: XOR<CityCreateWithoutCountryInput, CityUncheckedCreateWithoutCountryInput>
  }

  export type CityUpdateWithWhereUniqueWithoutCountryInput = {
    where: CityWhereUniqueInput
    data: XOR<CityUpdateWithoutCountryInput, CityUncheckedUpdateWithoutCountryInput>
  }

  export type CityUpdateManyWithWhereWithoutCountryInput = {
    where: CityScalarWhereInput
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyWithoutCountryInput>
  }

  export type CityScalarWhereInput = {
    AND?: CityScalarWhereInput | CityScalarWhereInput[]
    OR?: CityScalarWhereInput[]
    NOT?: CityScalarWhereInput | CityScalarWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    countryId?: StringFilter<"City"> | string
    iataCode?: StringNullableFilter<"City"> | string | null
  }

  export type AirlineUpsertWithWhereUniqueWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    update: XOR<AirlineUpdateWithoutCountryInput, AirlineUncheckedUpdateWithoutCountryInput>
    create: XOR<AirlineCreateWithoutCountryInput, AirlineUncheckedCreateWithoutCountryInput>
  }

  export type AirlineUpdateWithWhereUniqueWithoutCountryInput = {
    where: AirlineWhereUniqueInput
    data: XOR<AirlineUpdateWithoutCountryInput, AirlineUncheckedUpdateWithoutCountryInput>
  }

  export type AirlineUpdateManyWithWhereWithoutCountryInput = {
    where: AirlineScalarWhereInput
    data: XOR<AirlineUpdateManyMutationInput, AirlineUncheckedUpdateManyWithoutCountryInput>
  }

  export type AirlineScalarWhereInput = {
    AND?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
    OR?: AirlineScalarWhereInput[]
    NOT?: AirlineScalarWhereInput | AirlineScalarWhereInput[]
    id?: StringFilter<"Airline"> | string
    iataCode?: StringFilter<"Airline"> | string
    name?: StringFilter<"Airline"> | string
    logoUrl?: StringNullableFilter<"Airline"> | string | null
    countryId?: StringFilter<"Airline"> | string
  }

  export type CountryCreateWithoutCitiesInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    airlines?: AirlineCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    airlines?: AirlineUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutCitiesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
  }

  export type AirportCreateWithoutCityInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    originSegments?: SegmentCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirportInput
  }

  export type AirportUncheckedCreateWithoutCityInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    originSegments?: SegmentUncheckedCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentUncheckedCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirportInput
  }

  export type AirportCreateOrConnectWithoutCityInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput>
  }

  export type AirportCreateManyCityInputEnvelope = {
    data: AirportCreateManyCityInput | AirportCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutCitiesInput = {
    update: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
    create: XOR<CountryCreateWithoutCitiesInput, CountryUncheckedCreateWithoutCitiesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutCitiesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutCitiesInput, CountryUncheckedUpdateWithoutCitiesInput>
  }

  export type CountryUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    airlines?: AirlineUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    airlines?: AirlineUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type AirportUpsertWithWhereUniqueWithoutCityInput = {
    where: AirportWhereUniqueInput
    update: XOR<AirportUpdateWithoutCityInput, AirportUncheckedUpdateWithoutCityInput>
    create: XOR<AirportCreateWithoutCityInput, AirportUncheckedCreateWithoutCityInput>
  }

  export type AirportUpdateWithWhereUniqueWithoutCityInput = {
    where: AirportWhereUniqueInput
    data: XOR<AirportUpdateWithoutCityInput, AirportUncheckedUpdateWithoutCityInput>
  }

  export type AirportUpdateManyWithWhereWithoutCityInput = {
    where: AirportScalarWhereInput
    data: XOR<AirportUpdateManyMutationInput, AirportUncheckedUpdateManyWithoutCityInput>
  }

  export type AirportScalarWhereInput = {
    AND?: AirportScalarWhereInput | AirportScalarWhereInput[]
    OR?: AirportScalarWhereInput[]
    NOT?: AirportScalarWhereInput | AirportScalarWhereInput[]
    id?: StringFilter<"Airport"> | string
    iataCode?: StringFilter<"Airport"> | string
    name?: StringFilter<"Airport"> | string
    cityId?: StringFilter<"Airport"> | string
    timezone?: StringFilter<"Airport"> | string
  }

  export type CityCreateWithoutAirportsInput = {
    id?: string
    name: string
    iataCode?: string | null
    country: CountryCreateNestedOneWithoutCitiesInput
  }

  export type CityUncheckedCreateWithoutAirportsInput = {
    id?: string
    name: string
    countryId: string
    iataCode?: string | null
  }

  export type CityCreateOrConnectWithoutAirportsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
  }

  export type SegmentCreateWithoutOriginAirportInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    flight?: FlightCreateNestedOneWithoutSegmentsInput
    destinationAirport: AirportCreateNestedOneWithoutDestinationSegmentsInput
    airline: AirlineCreateNestedOneWithoutSegmentsInput
    aircraft?: AircraftCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutOriginAirportInput = {
    id?: string
    segmentNumber: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentCreateOrConnectWithoutOriginAirportInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput>
  }

  export type SegmentCreateManyOriginAirportInputEnvelope = {
    data: SegmentCreateManyOriginAirportInput | SegmentCreateManyOriginAirportInput[]
    skipDuplicates?: boolean
  }

  export type SegmentCreateWithoutDestinationAirportInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    flight?: FlightCreateNestedOneWithoutSegmentsInput
    originAirport: AirportCreateNestedOneWithoutOriginSegmentsInput
    airline: AirlineCreateNestedOneWithoutSegmentsInput
    aircraft?: AircraftCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutDestinationAirportInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentCreateOrConnectWithoutDestinationAirportInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput>
  }

  export type SegmentCreateManyDestinationAirportInputEnvelope = {
    data: SegmentCreateManyDestinationAirportInput | SegmentCreateManyDestinationAirportInput[]
    skipDuplicates?: boolean
  }

  export type AirlineAirportCreateWithoutAirportInput = {
    airline: AirlineCreateNestedOneWithoutAirlineAirportsInput
  }

  export type AirlineAirportUncheckedCreateWithoutAirportInput = {
    airlineId: string
  }

  export type AirlineAirportCreateOrConnectWithoutAirportInput = {
    where: AirlineAirportWhereUniqueInput
    create: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput>
  }

  export type AirlineAirportCreateManyAirportInputEnvelope = {
    data: AirlineAirportCreateManyAirportInput | AirlineAirportCreateManyAirportInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutAirportsInput = {
    update: XOR<CityUpdateWithoutAirportsInput, CityUncheckedUpdateWithoutAirportsInput>
    create: XOR<CityCreateWithoutAirportsInput, CityUncheckedCreateWithoutAirportsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAirportsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAirportsInput, CityUncheckedUpdateWithoutAirportsInput>
  }

  export type CityUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type CityUncheckedUpdateWithoutAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUpsertWithWhereUniqueWithoutOriginAirportInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutOriginAirportInput, SegmentUncheckedUpdateWithoutOriginAirportInput>
    create: XOR<SegmentCreateWithoutOriginAirportInput, SegmentUncheckedCreateWithoutOriginAirportInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutOriginAirportInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutOriginAirportInput, SegmentUncheckedUpdateWithoutOriginAirportInput>
  }

  export type SegmentUpdateManyWithWhereWithoutOriginAirportInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutOriginAirportInput>
  }

  export type SegmentScalarWhereInput = {
    AND?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    OR?: SegmentScalarWhereInput[]
    NOT?: SegmentScalarWhereInput | SegmentScalarWhereInput[]
    id?: StringFilter<"Segment"> | string
    segmentNumber?: StringFilter<"Segment"> | string
    originAirportId?: StringFilter<"Segment"> | string
    destinationAirportId?: StringFilter<"Segment"> | string
    departureDateTime?: DateTimeFilter<"Segment"> | Date | string
    arrivalDateTime?: DateTimeFilter<"Segment"> | Date | string
    airlineId?: StringFilter<"Segment"> | string
    aircraftId?: StringNullableFilter<"Segment"> | string | null
    estimatedDuration?: IntFilter<"Segment"> | number
    flightId?: StringNullableFilter<"Segment"> | string | null
  }

  export type SegmentUpsertWithWhereUniqueWithoutDestinationAirportInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutDestinationAirportInput, SegmentUncheckedUpdateWithoutDestinationAirportInput>
    create: XOR<SegmentCreateWithoutDestinationAirportInput, SegmentUncheckedCreateWithoutDestinationAirportInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutDestinationAirportInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutDestinationAirportInput, SegmentUncheckedUpdateWithoutDestinationAirportInput>
  }

  export type SegmentUpdateManyWithWhereWithoutDestinationAirportInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutDestinationAirportInput>
  }

  export type AirlineAirportUpsertWithWhereUniqueWithoutAirportInput = {
    where: AirlineAirportWhereUniqueInput
    update: XOR<AirlineAirportUpdateWithoutAirportInput, AirlineAirportUncheckedUpdateWithoutAirportInput>
    create: XOR<AirlineAirportCreateWithoutAirportInput, AirlineAirportUncheckedCreateWithoutAirportInput>
  }

  export type AirlineAirportUpdateWithWhereUniqueWithoutAirportInput = {
    where: AirlineAirportWhereUniqueInput
    data: XOR<AirlineAirportUpdateWithoutAirportInput, AirlineAirportUncheckedUpdateWithoutAirportInput>
  }

  export type AirlineAirportUpdateManyWithWhereWithoutAirportInput = {
    where: AirlineAirportScalarWhereInput
    data: XOR<AirlineAirportUpdateManyMutationInput, AirlineAirportUncheckedUpdateManyWithoutAirportInput>
  }

  export type AirlineAirportScalarWhereInput = {
    AND?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
    OR?: AirlineAirportScalarWhereInput[]
    NOT?: AirlineAirportScalarWhereInput | AirlineAirportScalarWhereInput[]
    airlineId?: StringFilter<"AirlineAirport"> | string
    airportId?: StringFilter<"AirlineAirport"> | string
  }

  export type CountryCreateWithoutAirlinesInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    cities?: CityCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateWithoutAirlinesInput = {
    id?: string
    name: string
    isoCode: string
    phoneCode?: string | null
    currencyCode?: string | null
    cities?: CityUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryCreateOrConnectWithoutAirlinesInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
  }

  export type SegmentCreateWithoutAirlineInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    flight?: FlightCreateNestedOneWithoutSegmentsInput
    originAirport: AirportCreateNestedOneWithoutOriginSegmentsInput
    destinationAirport: AirportCreateNestedOneWithoutDestinationSegmentsInput
    aircraft?: AircraftCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutAirlineInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentCreateOrConnectWithoutAirlineInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput>
  }

  export type SegmentCreateManyAirlineInputEnvelope = {
    data: SegmentCreateManyAirlineInput | SegmentCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type AircraftCreateWithoutAirlineInput = {
    id?: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
    segments?: SegmentCreateNestedManyWithoutAircraftInput
  }

  export type AircraftUncheckedCreateWithoutAirlineInput = {
    id?: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
    segments?: SegmentUncheckedCreateNestedManyWithoutAircraftInput
  }

  export type AircraftCreateOrConnectWithoutAirlineInput = {
    where: AircraftWhereUniqueInput
    create: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput>
  }

  export type AircraftCreateManyAirlineInputEnvelope = {
    data: AircraftCreateManyAirlineInput | AircraftCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type AirlineServiceConfigCreateWithoutAirlineInput = {
    id?: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    service: ServiceCatalogCreateNestedOneWithoutAirlineConfigsInput
  }

  export type AirlineServiceConfigUncheckedCreateWithoutAirlineInput = {
    id?: string
    serviceId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineServiceConfigCreateOrConnectWithoutAirlineInput = {
    where: AirlineServiceConfigWhereUniqueInput
    create: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput>
  }

  export type AirlineServiceConfigCreateManyAirlineInputEnvelope = {
    data: AirlineServiceConfigCreateManyAirlineInput | AirlineServiceConfigCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type AirlineAirportCreateWithoutAirlineInput = {
    airport: AirportCreateNestedOneWithoutAirlineAirportsInput
  }

  export type AirlineAirportUncheckedCreateWithoutAirlineInput = {
    airportId: string
  }

  export type AirlineAirportCreateOrConnectWithoutAirlineInput = {
    where: AirlineAirportWhereUniqueInput
    create: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput>
  }

  export type AirlineAirportCreateManyAirlineInputEnvelope = {
    data: AirlineAirportCreateManyAirlineInput | AirlineAirportCreateManyAirlineInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutAirlinesInput = {
    update: XOR<CountryUpdateWithoutAirlinesInput, CountryUncheckedUpdateWithoutAirlinesInput>
    create: XOR<CountryCreateWithoutAirlinesInput, CountryUncheckedCreateWithoutAirlinesInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutAirlinesInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutAirlinesInput, CountryUncheckedUpdateWithoutAirlinesInput>
  }

  export type CountryUpdateWithoutAirlinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateWithoutAirlinesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isoCode?: StringFieldUpdateOperationsInput | string
    phoneCode?: NullableStringFieldUpdateOperationsInput | string | null
    currencyCode?: NullableStringFieldUpdateOperationsInput | string | null
    cities?: CityUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type SegmentUpsertWithWhereUniqueWithoutAirlineInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutAirlineInput, SegmentUncheckedUpdateWithoutAirlineInput>
    create: XOR<SegmentCreateWithoutAirlineInput, SegmentUncheckedCreateWithoutAirlineInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutAirlineInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutAirlineInput, SegmentUncheckedUpdateWithoutAirlineInput>
  }

  export type SegmentUpdateManyWithWhereWithoutAirlineInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutAirlineInput>
  }

  export type AircraftUpsertWithWhereUniqueWithoutAirlineInput = {
    where: AircraftWhereUniqueInput
    update: XOR<AircraftUpdateWithoutAirlineInput, AircraftUncheckedUpdateWithoutAirlineInput>
    create: XOR<AircraftCreateWithoutAirlineInput, AircraftUncheckedCreateWithoutAirlineInput>
  }

  export type AircraftUpdateWithWhereUniqueWithoutAirlineInput = {
    where: AircraftWhereUniqueInput
    data: XOR<AircraftUpdateWithoutAirlineInput, AircraftUncheckedUpdateWithoutAirlineInput>
  }

  export type AircraftUpdateManyWithWhereWithoutAirlineInput = {
    where: AircraftScalarWhereInput
    data: XOR<AircraftUpdateManyMutationInput, AircraftUncheckedUpdateManyWithoutAirlineInput>
  }

  export type AircraftScalarWhereInput = {
    AND?: AircraftScalarWhereInput | AircraftScalarWhereInput[]
    OR?: AircraftScalarWhereInput[]
    NOT?: AircraftScalarWhereInput | AircraftScalarWhereInput[]
    id?: StringFilter<"Aircraft"> | string
    airlineId?: StringFilter<"Aircraft"> | string
    modelName?: StringFilter<"Aircraft"> | string
    registration?: StringFilter<"Aircraft"> | string
    hasWifi?: BoolFilter<"Aircraft"> | boolean
    hasUsb?: BoolFilter<"Aircraft"> | boolean
  }

  export type AirlineServiceConfigUpsertWithWhereUniqueWithoutAirlineInput = {
    where: AirlineServiceConfigWhereUniqueInput
    update: XOR<AirlineServiceConfigUpdateWithoutAirlineInput, AirlineServiceConfigUncheckedUpdateWithoutAirlineInput>
    create: XOR<AirlineServiceConfigCreateWithoutAirlineInput, AirlineServiceConfigUncheckedCreateWithoutAirlineInput>
  }

  export type AirlineServiceConfigUpdateWithWhereUniqueWithoutAirlineInput = {
    where: AirlineServiceConfigWhereUniqueInput
    data: XOR<AirlineServiceConfigUpdateWithoutAirlineInput, AirlineServiceConfigUncheckedUpdateWithoutAirlineInput>
  }

  export type AirlineServiceConfigUpdateManyWithWhereWithoutAirlineInput = {
    where: AirlineServiceConfigScalarWhereInput
    data: XOR<AirlineServiceConfigUpdateManyMutationInput, AirlineServiceConfigUncheckedUpdateManyWithoutAirlineInput>
  }

  export type AirlineServiceConfigScalarWhereInput = {
    AND?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
    OR?: AirlineServiceConfigScalarWhereInput[]
    NOT?: AirlineServiceConfigScalarWhereInput | AirlineServiceConfigScalarWhereInput[]
    id?: StringFilter<"AirlineServiceConfig"> | string
    serviceId?: StringFilter<"AirlineServiceConfig"> | string
    airlineId?: StringFilter<"AirlineServiceConfig"> | string
    originAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    destAirportId?: StringNullableFilter<"AirlineServiceConfig"> | string | null
    price?: DecimalFilter<"AirlineServiceConfig"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AirlineServiceConfig"> | string
  }

  export type AirlineAirportUpsertWithWhereUniqueWithoutAirlineInput = {
    where: AirlineAirportWhereUniqueInput
    update: XOR<AirlineAirportUpdateWithoutAirlineInput, AirlineAirportUncheckedUpdateWithoutAirlineInput>
    create: XOR<AirlineAirportCreateWithoutAirlineInput, AirlineAirportUncheckedCreateWithoutAirlineInput>
  }

  export type AirlineAirportUpdateWithWhereUniqueWithoutAirlineInput = {
    where: AirlineAirportWhereUniqueInput
    data: XOR<AirlineAirportUpdateWithoutAirlineInput, AirlineAirportUncheckedUpdateWithoutAirlineInput>
  }

  export type AirlineAirportUpdateManyWithWhereWithoutAirlineInput = {
    where: AirlineAirportScalarWhereInput
    data: XOR<AirlineAirportUpdateManyMutationInput, AirlineAirportUncheckedUpdateManyWithoutAirlineInput>
  }

  export type AirlineCreateWithoutAircraftsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    country: CountryCreateNestedOneWithoutAirlinesInput
    segments?: SegmentCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutAircraftsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutAircraftsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutAircraftsInput, AirlineUncheckedCreateWithoutAircraftsInput>
  }

  export type SegmentCreateWithoutAircraftInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    flight?: FlightCreateNestedOneWithoutSegmentsInput
    originAirport: AirportCreateNestedOneWithoutOriginSegmentsInput
    destinationAirport: AirportCreateNestedOneWithoutDestinationSegmentsInput
    airline: AirlineCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutAircraftInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentCreateOrConnectWithoutAircraftInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput>
  }

  export type SegmentCreateManyAircraftInputEnvelope = {
    data: SegmentCreateManyAircraftInput | SegmentCreateManyAircraftInput[]
    skipDuplicates?: boolean
  }

  export type AirlineUpsertWithoutAircraftsInput = {
    update: XOR<AirlineUpdateWithoutAircraftsInput, AirlineUncheckedUpdateWithoutAircraftsInput>
    create: XOR<AirlineCreateWithoutAircraftsInput, AirlineUncheckedCreateWithoutAircraftsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutAircraftsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutAircraftsInput, AirlineUncheckedUpdateWithoutAircraftsInput>
  }

  export type AirlineUpdateWithoutAircraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    segments?: SegmentUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutAircraftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type SegmentUpsertWithWhereUniqueWithoutAircraftInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutAircraftInput, SegmentUncheckedUpdateWithoutAircraftInput>
    create: XOR<SegmentCreateWithoutAircraftInput, SegmentUncheckedCreateWithoutAircraftInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutAircraftInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutAircraftInput, SegmentUncheckedUpdateWithoutAircraftInput>
  }

  export type SegmentUpdateManyWithWhereWithoutAircraftInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutAircraftInput>
  }

  export type AirlineCreateWithoutAirlineAirportsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    country: CountryCreateNestedOneWithoutAirlinesInput
    segments?: SegmentCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutAirlineAirportsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftUncheckedCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutAirlineAirportsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutAirlineAirportsInput, AirlineUncheckedCreateWithoutAirlineAirportsInput>
  }

  export type AirportCreateWithoutAirlineAirportsInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    city: CityCreateNestedOneWithoutAirportsInput
    originSegments?: SegmentCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentCreateNestedManyWithoutDestinationAirportInput
  }

  export type AirportUncheckedCreateWithoutAirlineAirportsInput = {
    id?: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
    originSegments?: SegmentUncheckedCreateNestedManyWithoutOriginAirportInput
    destinationSegments?: SegmentUncheckedCreateNestedManyWithoutDestinationAirportInput
  }

  export type AirportCreateOrConnectWithoutAirlineAirportsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutAirlineAirportsInput, AirportUncheckedCreateWithoutAirlineAirportsInput>
  }

  export type AirlineUpsertWithoutAirlineAirportsInput = {
    update: XOR<AirlineUpdateWithoutAirlineAirportsInput, AirlineUncheckedUpdateWithoutAirlineAirportsInput>
    create: XOR<AirlineCreateWithoutAirlineAirportsInput, AirlineUncheckedCreateWithoutAirlineAirportsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutAirlineAirportsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutAirlineAirportsInput, AirlineUncheckedUpdateWithoutAirlineAirportsInput>
  }

  export type AirlineUpdateWithoutAirlineAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    segments?: SegmentUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutAirlineAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUncheckedUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirportUpsertWithoutAirlineAirportsInput = {
    update: XOR<AirportUpdateWithoutAirlineAirportsInput, AirportUncheckedUpdateWithoutAirlineAirportsInput>
    create: XOR<AirportCreateWithoutAirlineAirportsInput, AirportUncheckedCreateWithoutAirlineAirportsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutAirlineAirportsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutAirlineAirportsInput, AirportUncheckedUpdateWithoutAirlineAirportsInput>
  }

  export type AirportUpdateWithoutAirlineAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    originSegments?: SegmentUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUpdateManyWithoutDestinationAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutAirlineAirportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    originSegments?: SegmentUncheckedUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUncheckedUpdateManyWithoutDestinationAirportNestedInput
  }

  export type SegmentCreateWithoutFlightInput = {
    id?: string
    segmentNumber: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    estimatedDuration: number
    originAirport: AirportCreateNestedOneWithoutOriginSegmentsInput
    destinationAirport: AirportCreateNestedOneWithoutDestinationSegmentsInput
    airline: AirlineCreateNestedOneWithoutSegmentsInput
    aircraft?: AircraftCreateNestedOneWithoutSegmentsInput
  }

  export type SegmentUncheckedCreateWithoutFlightInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
  }

  export type SegmentCreateOrConnectWithoutFlightInput = {
    where: SegmentWhereUniqueInput
    create: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput>
  }

  export type SegmentCreateManyFlightInputEnvelope = {
    data: SegmentCreateManyFlightInput | SegmentCreateManyFlightInput[]
    skipDuplicates?: boolean
  }

  export type FlightClassCreateWithoutFlightInput = {
    id?: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUncheckedCreateWithoutFlightInput = {
    id?: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
  }

  export type FlightClassCreateOrConnectWithoutFlightInput = {
    where: FlightClassWhereUniqueInput
    create: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput>
  }

  export type FlightClassCreateManyFlightInputEnvelope = {
    data: FlightClassCreateManyFlightInput | FlightClassCreateManyFlightInput[]
    skipDuplicates?: boolean
  }

  export type SegmentUpsertWithWhereUniqueWithoutFlightInput = {
    where: SegmentWhereUniqueInput
    update: XOR<SegmentUpdateWithoutFlightInput, SegmentUncheckedUpdateWithoutFlightInput>
    create: XOR<SegmentCreateWithoutFlightInput, SegmentUncheckedCreateWithoutFlightInput>
  }

  export type SegmentUpdateWithWhereUniqueWithoutFlightInput = {
    where: SegmentWhereUniqueInput
    data: XOR<SegmentUpdateWithoutFlightInput, SegmentUncheckedUpdateWithoutFlightInput>
  }

  export type SegmentUpdateManyWithWhereWithoutFlightInput = {
    where: SegmentScalarWhereInput
    data: XOR<SegmentUpdateManyMutationInput, SegmentUncheckedUpdateManyWithoutFlightInput>
  }

  export type FlightClassUpsertWithWhereUniqueWithoutFlightInput = {
    where: FlightClassWhereUniqueInput
    update: XOR<FlightClassUpdateWithoutFlightInput, FlightClassUncheckedUpdateWithoutFlightInput>
    create: XOR<FlightClassCreateWithoutFlightInput, FlightClassUncheckedCreateWithoutFlightInput>
  }

  export type FlightClassUpdateWithWhereUniqueWithoutFlightInput = {
    where: FlightClassWhereUniqueInput
    data: XOR<FlightClassUpdateWithoutFlightInput, FlightClassUncheckedUpdateWithoutFlightInput>
  }

  export type FlightClassUpdateManyWithWhereWithoutFlightInput = {
    where: FlightClassScalarWhereInput
    data: XOR<FlightClassUpdateManyMutationInput, FlightClassUncheckedUpdateManyWithoutFlightInput>
  }

  export type FlightClassScalarWhereInput = {
    AND?: FlightClassScalarWhereInput | FlightClassScalarWhereInput[]
    OR?: FlightClassScalarWhereInput[]
    NOT?: FlightClassScalarWhereInput | FlightClassScalarWhereInput[]
    id?: StringFilter<"FlightClass"> | string
    flightId?: StringFilter<"FlightClass"> | string
    cabinClass?: EnumCabinClassFilter<"FlightClass"> | $Enums.CabinClass
    availableSeats?: IntFilter<"FlightClass"> | number
    basePrice?: DecimalFilter<"FlightClass"> | Decimal | DecimalJsLike | number | string
  }

  export type FlightCreateWithoutSegmentsInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    flightClasses?: FlightClassCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutSegmentsInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    flightClasses?: FlightClassUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutSegmentsInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutSegmentsInput, FlightUncheckedCreateWithoutSegmentsInput>
  }

  export type AirportCreateWithoutOriginSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    city: CityCreateNestedOneWithoutAirportsInput
    destinationSegments?: SegmentCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirportInput
  }

  export type AirportUncheckedCreateWithoutOriginSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
    destinationSegments?: SegmentUncheckedCreateNestedManyWithoutDestinationAirportInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirportInput
  }

  export type AirportCreateOrConnectWithoutOriginSegmentsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutOriginSegmentsInput, AirportUncheckedCreateWithoutOriginSegmentsInput>
  }

  export type AirportCreateWithoutDestinationSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
    city: CityCreateNestedOneWithoutAirportsInput
    originSegments?: SegmentCreateNestedManyWithoutOriginAirportInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirportInput
  }

  export type AirportUncheckedCreateWithoutDestinationSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    cityId: string
    timezone: string
    originSegments?: SegmentUncheckedCreateNestedManyWithoutOriginAirportInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirportInput
  }

  export type AirportCreateOrConnectWithoutDestinationSegmentsInput = {
    where: AirportWhereUniqueInput
    create: XOR<AirportCreateWithoutDestinationSegmentsInput, AirportUncheckedCreateWithoutDestinationSegmentsInput>
  }

  export type AirlineCreateWithoutSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    country: CountryCreateNestedOneWithoutAirlinesInput
    aircrafts?: AircraftCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutSegmentsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
    aircrafts?: AircraftUncheckedCreateNestedManyWithoutAirlineInput
    serviceConfigs?: AirlineServiceConfigUncheckedCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutSegmentsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutSegmentsInput, AirlineUncheckedCreateWithoutSegmentsInput>
  }

  export type AircraftCreateWithoutSegmentsInput = {
    id?: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
    airline: AirlineCreateNestedOneWithoutAircraftsInput
  }

  export type AircraftUncheckedCreateWithoutSegmentsInput = {
    id?: string
    airlineId: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
  }

  export type AircraftCreateOrConnectWithoutSegmentsInput = {
    where: AircraftWhereUniqueInput
    create: XOR<AircraftCreateWithoutSegmentsInput, AircraftUncheckedCreateWithoutSegmentsInput>
  }

  export type FlightUpsertWithoutSegmentsInput = {
    update: XOR<FlightUpdateWithoutSegmentsInput, FlightUncheckedUpdateWithoutSegmentsInput>
    create: XOR<FlightCreateWithoutSegmentsInput, FlightUncheckedCreateWithoutSegmentsInput>
    where?: FlightWhereInput
  }

  export type FlightUpdateToOneWithWhereWithoutSegmentsInput = {
    where?: FlightWhereInput
    data: XOR<FlightUpdateWithoutSegmentsInput, FlightUncheckedUpdateWithoutSegmentsInput>
  }

  export type FlightUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    flightClasses?: FlightClassUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    flightClasses?: FlightClassUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type AirportUpsertWithoutOriginSegmentsInput = {
    update: XOR<AirportUpdateWithoutOriginSegmentsInput, AirportUncheckedUpdateWithoutOriginSegmentsInput>
    create: XOR<AirportCreateWithoutOriginSegmentsInput, AirportUncheckedCreateWithoutOriginSegmentsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutOriginSegmentsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutOriginSegmentsInput, AirportUncheckedUpdateWithoutOriginSegmentsInput>
  }

  export type AirportUpdateWithoutOriginSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    destinationSegments?: SegmentUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutOriginSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    destinationSegments?: SegmentUncheckedUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirportNestedInput
  }

  export type AirportUpsertWithoutDestinationSegmentsInput = {
    update: XOR<AirportUpdateWithoutDestinationSegmentsInput, AirportUncheckedUpdateWithoutDestinationSegmentsInput>
    create: XOR<AirportCreateWithoutDestinationSegmentsInput, AirportUncheckedCreateWithoutDestinationSegmentsInput>
    where?: AirportWhereInput
  }

  export type AirportUpdateToOneWithWhereWithoutDestinationSegmentsInput = {
    where?: AirportWhereInput
    data: XOR<AirportUpdateWithoutDestinationSegmentsInput, AirportUncheckedUpdateWithoutDestinationSegmentsInput>
  }

  export type AirportUpdateWithoutDestinationSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAirportsNestedInput
    originSegments?: SegmentUpdateManyWithoutOriginAirportNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutDestinationSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    originSegments?: SegmentUncheckedUpdateManyWithoutOriginAirportNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirportNestedInput
  }

  export type AirlineUpsertWithoutSegmentsInput = {
    update: XOR<AirlineUpdateWithoutSegmentsInput, AirlineUncheckedUpdateWithoutSegmentsInput>
    create: XOR<AirlineCreateWithoutSegmentsInput, AirlineUncheckedCreateWithoutSegmentsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutSegmentsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutSegmentsInput, AirlineUncheckedUpdateWithoutSegmentsInput>
  }

  export type AirlineUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    aircrafts?: AircraftUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    aircrafts?: AircraftUncheckedUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AircraftUpsertWithoutSegmentsInput = {
    update: XOR<AircraftUpdateWithoutSegmentsInput, AircraftUncheckedUpdateWithoutSegmentsInput>
    create: XOR<AircraftCreateWithoutSegmentsInput, AircraftUncheckedCreateWithoutSegmentsInput>
    where?: AircraftWhereInput
  }

  export type AircraftUpdateToOneWithWhereWithoutSegmentsInput = {
    where?: AircraftWhereInput
    data: XOR<AircraftUpdateWithoutSegmentsInput, AircraftUncheckedUpdateWithoutSegmentsInput>
  }

  export type AircraftUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
    airline?: AirlineUpdateOneRequiredWithoutAircraftsNestedInput
  }

  export type AircraftUncheckedUpdateWithoutSegmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FlightCreateWithoutFlightClassesInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    segments?: SegmentCreateNestedManyWithoutFlightInput
  }

  export type FlightUncheckedCreateWithoutFlightClassesInput = {
    id?: string
    originAirportIata: string
    destinationAirportIata: string
    departureDate: Date | string
    status?: $Enums.FlightStatus
    segments?: SegmentUncheckedCreateNestedManyWithoutFlightInput
  }

  export type FlightCreateOrConnectWithoutFlightClassesInput = {
    where: FlightWhereUniqueInput
    create: XOR<FlightCreateWithoutFlightClassesInput, FlightUncheckedCreateWithoutFlightClassesInput>
  }

  export type FlightUpsertWithoutFlightClassesInput = {
    update: XOR<FlightUpdateWithoutFlightClassesInput, FlightUncheckedUpdateWithoutFlightClassesInput>
    create: XOR<FlightCreateWithoutFlightClassesInput, FlightUncheckedCreateWithoutFlightClassesInput>
    where?: FlightWhereInput
  }

  export type FlightUpdateToOneWithWhereWithoutFlightClassesInput = {
    where?: FlightWhereInput
    data: XOR<FlightUpdateWithoutFlightClassesInput, FlightUncheckedUpdateWithoutFlightClassesInput>
  }

  export type FlightUpdateWithoutFlightClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    segments?: SegmentUpdateManyWithoutFlightNestedInput
  }

  export type FlightUncheckedUpdateWithoutFlightClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportIata?: StringFieldUpdateOperationsInput | string
    destinationAirportIata?: StringFieldUpdateOperationsInput | string
    departureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumFlightStatusFieldUpdateOperationsInput | $Enums.FlightStatus
    segments?: SegmentUncheckedUpdateManyWithoutFlightNestedInput
  }

  export type AirlineServiceConfigCreateWithoutServiceInput = {
    id?: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
    airline: AirlineCreateNestedOneWithoutServiceConfigsInput
  }

  export type AirlineServiceConfigUncheckedCreateWithoutServiceInput = {
    id?: string
    airlineId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineServiceConfigCreateOrConnectWithoutServiceInput = {
    where: AirlineServiceConfigWhereUniqueInput
    create: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput>
  }

  export type AirlineServiceConfigCreateManyServiceInputEnvelope = {
    data: AirlineServiceConfigCreateManyServiceInput | AirlineServiceConfigCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AirlineServiceConfigUpsertWithWhereUniqueWithoutServiceInput = {
    where: AirlineServiceConfigWhereUniqueInput
    update: XOR<AirlineServiceConfigUpdateWithoutServiceInput, AirlineServiceConfigUncheckedUpdateWithoutServiceInput>
    create: XOR<AirlineServiceConfigCreateWithoutServiceInput, AirlineServiceConfigUncheckedCreateWithoutServiceInput>
  }

  export type AirlineServiceConfigUpdateWithWhereUniqueWithoutServiceInput = {
    where: AirlineServiceConfigWhereUniqueInput
    data: XOR<AirlineServiceConfigUpdateWithoutServiceInput, AirlineServiceConfigUncheckedUpdateWithoutServiceInput>
  }

  export type AirlineServiceConfigUpdateManyWithWhereWithoutServiceInput = {
    where: AirlineServiceConfigScalarWhereInput
    data: XOR<AirlineServiceConfigUpdateManyMutationInput, AirlineServiceConfigUncheckedUpdateManyWithoutServiceInput>
  }

  export type ServiceCatalogCreateWithoutAirlineConfigsInput = {
    id?: string
    name: string
    code: string
    category: string
    description?: string | null
  }

  export type ServiceCatalogUncheckedCreateWithoutAirlineConfigsInput = {
    id?: string
    name: string
    code: string
    category: string
    description?: string | null
  }

  export type ServiceCatalogCreateOrConnectWithoutAirlineConfigsInput = {
    where: ServiceCatalogWhereUniqueInput
    create: XOR<ServiceCatalogCreateWithoutAirlineConfigsInput, ServiceCatalogUncheckedCreateWithoutAirlineConfigsInput>
  }

  export type AirlineCreateWithoutServiceConfigsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    country: CountryCreateNestedOneWithoutAirlinesInput
    segments?: SegmentCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportCreateNestedManyWithoutAirlineInput
  }

  export type AirlineUncheckedCreateWithoutServiceConfigsInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
    countryId: string
    segments?: SegmentUncheckedCreateNestedManyWithoutAirlineInput
    aircrafts?: AircraftUncheckedCreateNestedManyWithoutAirlineInput
    airlineAirports?: AirlineAirportUncheckedCreateNestedManyWithoutAirlineInput
  }

  export type AirlineCreateOrConnectWithoutServiceConfigsInput = {
    where: AirlineWhereUniqueInput
    create: XOR<AirlineCreateWithoutServiceConfigsInput, AirlineUncheckedCreateWithoutServiceConfigsInput>
  }

  export type ServiceCatalogUpsertWithoutAirlineConfigsInput = {
    update: XOR<ServiceCatalogUpdateWithoutAirlineConfigsInput, ServiceCatalogUncheckedUpdateWithoutAirlineConfigsInput>
    create: XOR<ServiceCatalogCreateWithoutAirlineConfigsInput, ServiceCatalogUncheckedCreateWithoutAirlineConfigsInput>
    where?: ServiceCatalogWhereInput
  }

  export type ServiceCatalogUpdateToOneWithWhereWithoutAirlineConfigsInput = {
    where?: ServiceCatalogWhereInput
    data: XOR<ServiceCatalogUpdateWithoutAirlineConfigsInput, ServiceCatalogUncheckedUpdateWithoutAirlineConfigsInput>
  }

  export type ServiceCatalogUpdateWithoutAirlineConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCatalogUncheckedUpdateWithoutAirlineConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirlineUpsertWithoutServiceConfigsInput = {
    update: XOR<AirlineUpdateWithoutServiceConfigsInput, AirlineUncheckedUpdateWithoutServiceConfigsInput>
    create: XOR<AirlineCreateWithoutServiceConfigsInput, AirlineUncheckedCreateWithoutServiceConfigsInput>
    where?: AirlineWhereInput
  }

  export type AirlineUpdateToOneWithWhereWithoutServiceConfigsInput = {
    where?: AirlineWhereInput
    data: XOR<AirlineUpdateWithoutServiceConfigsInput, AirlineUncheckedUpdateWithoutServiceConfigsInput>
  }

  export type AirlineUpdateWithoutServiceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    country?: CountryUpdateOneRequiredWithoutAirlinesNestedInput
    segments?: SegmentUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutServiceConfigsInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    segments?: SegmentUncheckedUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUncheckedUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type CityCreateManyCountryInput = {
    id?: string
    name: string
    iataCode?: string | null
  }

  export type AirlineCreateManyCountryInput = {
    id?: string
    iataCode: string
    name: string
    logoUrl?: string | null
  }

  export type CityUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
    airports?: AirportUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
    airports?: AirportUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    iataCode?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirlineUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    segments?: SegmentUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    segments?: SegmentUncheckedUpdateManyWithoutAirlineNestedInput
    aircrafts?: AircraftUncheckedUpdateManyWithoutAirlineNestedInput
    serviceConfigs?: AirlineServiceConfigUncheckedUpdateManyWithoutAirlineNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirlineNestedInput
  }

  export type AirlineUncheckedUpdateManyWithoutCountryInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirportCreateManyCityInput = {
    id?: string
    iataCode: string
    name: string
    timezone: string
  }

  export type AirportUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    originSegments?: SegmentUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUpdateManyWithoutAirportNestedInput
  }

  export type AirportUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    originSegments?: SegmentUncheckedUpdateManyWithoutOriginAirportNestedInput
    destinationSegments?: SegmentUncheckedUpdateManyWithoutDestinationAirportNestedInput
    airlineAirports?: AirlineAirportUncheckedUpdateManyWithoutAirportNestedInput
  }

  export type AirportUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    iataCode?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentCreateManyOriginAirportInput = {
    id?: string
    segmentNumber: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentCreateManyDestinationAirportInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type AirlineAirportCreateManyAirportInput = {
    airlineId: string
  }

  export type SegmentUpdateWithoutOriginAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flight?: FlightUpdateOneWithoutSegmentsNestedInput
    destinationAirport?: AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutSegmentsNestedInput
    aircraft?: AircraftUpdateOneWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutOriginAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUncheckedUpdateManyWithoutOriginAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUpdateWithoutDestinationAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flight?: FlightUpdateOneWithoutSegmentsNestedInput
    originAirport?: AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutSegmentsNestedInput
    aircraft?: AircraftUpdateOneWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutDestinationAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUncheckedUpdateManyWithoutDestinationAirportInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AirlineAirportUpdateWithoutAirportInput = {
    airline?: AirlineUpdateOneRequiredWithoutAirlineAirportsNestedInput
  }

  export type AirlineAirportUncheckedUpdateWithoutAirportInput = {
    airlineId?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineAirportUncheckedUpdateManyWithoutAirportInput = {
    airlineId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentCreateManyAirlineInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    aircraftId?: string | null
    estimatedDuration: number
    flightId?: string | null
  }

  export type AircraftCreateManyAirlineInput = {
    id?: string
    modelName: string
    registration: string
    hasWifi?: boolean
    hasUsb?: boolean
  }

  export type AirlineServiceConfigCreateManyAirlineInput = {
    id?: string
    serviceId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineAirportCreateManyAirlineInput = {
    airportId: string
  }

  export type SegmentUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flight?: FlightUpdateOneWithoutSegmentsNestedInput
    originAirport?: AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput
    destinationAirport?: AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput
    aircraft?: AircraftUpdateOneWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AircraftUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
    segments?: SegmentUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
    segments?: SegmentUncheckedUpdateManyWithoutAircraftNestedInput
  }

  export type AircraftUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelName?: StringFieldUpdateOperationsInput | string
    registration?: StringFieldUpdateOperationsInput | string
    hasWifi?: BoolFieldUpdateOperationsInput | boolean
    hasUsb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AirlineServiceConfigUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    service?: ServiceCatalogUpdateOneRequiredWithoutAirlineConfigsNestedInput
  }

  export type AirlineServiceConfigUncheckedUpdateWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineServiceConfigUncheckedUpdateManyWithoutAirlineInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineAirportUpdateWithoutAirlineInput = {
    airport?: AirportUpdateOneRequiredWithoutAirlineAirportsNestedInput
  }

  export type AirlineAirportUncheckedUpdateWithoutAirlineInput = {
    airportId?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineAirportUncheckedUpdateManyWithoutAirlineInput = {
    airportId?: StringFieldUpdateOperationsInput | string
  }

  export type SegmentCreateManyAircraftInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    estimatedDuration: number
    flightId?: string | null
  }

  export type SegmentUpdateWithoutAircraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flight?: FlightUpdateOneWithoutSegmentsNestedInput
    originAirport?: AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput
    destinationAirport?: AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutAircraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentUncheckedUpdateManyWithoutAircraftInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    flightId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SegmentCreateManyFlightInput = {
    id?: string
    segmentNumber: string
    originAirportId: string
    destinationAirportId: string
    departureDateTime: Date | string
    arrivalDateTime: Date | string
    airlineId: string
    aircraftId?: string | null
    estimatedDuration: number
  }

  export type FlightClassCreateManyFlightInput = {
    id?: string
    cabinClass: $Enums.CabinClass
    availableSeats: number
    basePrice: Decimal | DecimalJsLike | number | string
  }

  export type SegmentUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDuration?: IntFieldUpdateOperationsInput | number
    originAirport?: AirportUpdateOneRequiredWithoutOriginSegmentsNestedInput
    destinationAirport?: AirportUpdateOneRequiredWithoutDestinationSegmentsNestedInput
    airline?: AirlineUpdateOneRequiredWithoutSegmentsNestedInput
    aircraft?: AircraftUpdateOneWithoutSegmentsNestedInput
  }

  export type SegmentUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
  }

  export type SegmentUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentNumber?: StringFieldUpdateOperationsInput | string
    originAirportId?: StringFieldUpdateOperationsInput | string
    destinationAirportId?: StringFieldUpdateOperationsInput | string
    departureDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalDateTime?: DateTimeFieldUpdateOperationsInput | Date | string
    airlineId?: StringFieldUpdateOperationsInput | string
    aircraftId?: NullableStringFieldUpdateOperationsInput | string | null
    estimatedDuration?: IntFieldUpdateOperationsInput | number
  }

  export type FlightClassUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUncheckedUpdateWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type FlightClassUncheckedUpdateManyWithoutFlightInput = {
    id?: StringFieldUpdateOperationsInput | string
    cabinClass?: EnumCabinClassFieldUpdateOperationsInput | $Enums.CabinClass
    availableSeats?: IntFieldUpdateOperationsInput | number
    basePrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type AirlineServiceConfigCreateManyServiceInput = {
    id?: string
    airlineId: string
    originAirportId?: string | null
    destAirportId?: string | null
    price: Decimal | DecimalJsLike | number | string
    currency?: string
  }

  export type AirlineServiceConfigUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    airline?: AirlineUpdateOneRequiredWithoutServiceConfigsNestedInput
  }

  export type AirlineServiceConfigUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }

  export type AirlineServiceConfigUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    airlineId?: StringFieldUpdateOperationsInput | string
    originAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    destAirportId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CountryCountOutputTypeDefaultArgs instead
     */
    export type CountryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityCountOutputTypeDefaultArgs instead
     */
    export type CityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirportCountOutputTypeDefaultArgs instead
     */
    export type AirportCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirportCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirlineCountOutputTypeDefaultArgs instead
     */
    export type AirlineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirlineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AircraftCountOutputTypeDefaultArgs instead
     */
    export type AircraftCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AircraftCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlightCountOutputTypeDefaultArgs instead
     */
    export type FlightCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlightCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCatalogCountOutputTypeDefaultArgs instead
     */
    export type ServiceCatalogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCatalogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CountryDefaultArgs instead
     */
    export type CountryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CountryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CityDefaultArgs instead
     */
    export type CityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirportDefaultArgs instead
     */
    export type AirportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirlineDefaultArgs instead
     */
    export type AirlineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirlineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AircraftDefaultArgs instead
     */
    export type AircraftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AircraftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirlineAirportDefaultArgs instead
     */
    export type AirlineAirportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirlineAirportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlightDefaultArgs instead
     */
    export type FlightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SegmentDefaultArgs instead
     */
    export type SegmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SegmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlightClassDefaultArgs instead
     */
    export type FlightClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlightClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCatalogDefaultArgs instead
     */
    export type ServiceCatalogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCatalogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AirlineServiceConfigDefaultArgs instead
     */
    export type AirlineServiceConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AirlineServiceConfigDefaultArgs<ExtArgs>

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