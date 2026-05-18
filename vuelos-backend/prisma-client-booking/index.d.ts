
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
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model ReservationPassenger
 * 
 */
export type ReservationPassenger = $Result.DefaultSelection<Prisma.$ReservationPassengerPayload>
/**
 * Model PassengerService
 * 
 */
export type PassengerService = $Result.DefaultSelection<Prisma.$PassengerServicePayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model BoardingPass
 * 
 */
export type BoardingPass = $Result.DefaultSelection<Prisma.$BoardingPassPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ReservationStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus]


export const DiscountType: {
  PERCENTAGE: 'PERCENTAGE',
  FIXED_AMOUNT: 'FIXED_AMOUNT'
};

export type DiscountType = (typeof DiscountType)[keyof typeof DiscountType]


export const CheckInStatus: {
  NOT_CHECKED_IN: 'NOT_CHECKED_IN',
  CHECKED_IN: 'CHECKED_IN',
  BOARDED: 'BOARDED',
  NO_SHOW: 'NO_SHOW'
};

export type CheckInStatus = (typeof CheckInStatus)[keyof typeof CheckInStatus]

}

export type ReservationStatus = $Enums.ReservationStatus

export const ReservationStatus: typeof $Enums.ReservationStatus

export type DiscountType = $Enums.DiscountType

export const DiscountType: typeof $Enums.DiscountType

export type CheckInStatus = $Enums.CheckInStatus

export const CheckInStatus: typeof $Enums.CheckInStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Reservations
 * const reservations = await prisma.reservation.findMany()
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
   * // Fetch zero or more Reservations
   * const reservations = await prisma.reservation.findMany()
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
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs>;

  /**
   * `prisma.reservationPassenger`: Exposes CRUD operations for the **ReservationPassenger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReservationPassengers
    * const reservationPassengers = await prisma.reservationPassenger.findMany()
    * ```
    */
  get reservationPassenger(): Prisma.ReservationPassengerDelegate<ExtArgs>;

  /**
   * `prisma.passengerService`: Exposes CRUD operations for the **PassengerService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PassengerServices
    * const passengerServices = await prisma.passengerService.findMany()
    * ```
    */
  get passengerService(): Prisma.PassengerServiceDelegate<ExtArgs>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs>;

  /**
   * `prisma.boardingPass`: Exposes CRUD operations for the **BoardingPass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardingPasses
    * const boardingPasses = await prisma.boardingPass.findMany()
    * ```
    */
  get boardingPass(): Prisma.BoardingPassDelegate<ExtArgs>;
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
    Reservation: 'Reservation',
    ReservationPassenger: 'ReservationPassenger',
    PassengerService: 'PassengerService',
    Promotion: 'Promotion',
    BoardingPass: 'BoardingPass'
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
      modelProps: "reservation" | "reservationPassenger" | "passengerService" | "promotion" | "boardingPass"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      ReservationPassenger: {
        payload: Prisma.$ReservationPassengerPayload<ExtArgs>
        fields: Prisma.ReservationPassengerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationPassengerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationPassengerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          findFirst: {
            args: Prisma.ReservationPassengerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationPassengerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          findMany: {
            args: Prisma.ReservationPassengerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>[]
          }
          create: {
            args: Prisma.ReservationPassengerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          createMany: {
            args: Prisma.ReservationPassengerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationPassengerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>[]
          }
          delete: {
            args: Prisma.ReservationPassengerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          update: {
            args: Prisma.ReservationPassengerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          deleteMany: {
            args: Prisma.ReservationPassengerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationPassengerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReservationPassengerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPassengerPayload>
          }
          aggregate: {
            args: Prisma.ReservationPassengerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservationPassenger>
          }
          groupBy: {
            args: Prisma.ReservationPassengerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationPassengerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationPassengerCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationPassengerCountAggregateOutputType> | number
          }
        }
      }
      PassengerService: {
        payload: Prisma.$PassengerServicePayload<ExtArgs>
        fields: Prisma.PassengerServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PassengerServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PassengerServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          findFirst: {
            args: Prisma.PassengerServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PassengerServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          findMany: {
            args: Prisma.PassengerServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>[]
          }
          create: {
            args: Prisma.PassengerServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          createMany: {
            args: Prisma.PassengerServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PassengerServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>[]
          }
          delete: {
            args: Prisma.PassengerServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          update: {
            args: Prisma.PassengerServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          deleteMany: {
            args: Prisma.PassengerServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PassengerServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PassengerServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PassengerServicePayload>
          }
          aggregate: {
            args: Prisma.PassengerServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassengerService>
          }
          groupBy: {
            args: Prisma.PassengerServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PassengerServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PassengerServiceCountArgs<ExtArgs>
            result: $Utils.Optional<PassengerServiceCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      BoardingPass: {
        payload: Prisma.$BoardingPassPayload<ExtArgs>
        fields: Prisma.BoardingPassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardingPassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardingPassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          findFirst: {
            args: Prisma.BoardingPassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardingPassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          findMany: {
            args: Prisma.BoardingPassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>[]
          }
          create: {
            args: Prisma.BoardingPassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          createMany: {
            args: Prisma.BoardingPassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BoardingPassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>[]
          }
          delete: {
            args: Prisma.BoardingPassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          update: {
            args: Prisma.BoardingPassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          deleteMany: {
            args: Prisma.BoardingPassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardingPassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardingPassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardingPassPayload>
          }
          aggregate: {
            args: Prisma.BoardingPassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoardingPass>
          }
          groupBy: {
            args: Prisma.BoardingPassGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardingPassGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardingPassCountArgs<ExtArgs>
            result: $Utils.Optional<BoardingPassCountAggregateOutputType> | number
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
   * Count Type ReservationCountOutputType
   */

  export type ReservationCountOutputType = {
    passengers: number
  }

  export type ReservationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passengers?: boolean | ReservationCountOutputTypeCountPassengersArgs
  }

  // Custom InputTypes
  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationCountOutputType
     */
    select?: ReservationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationCountOutputType without action
   */
  export type ReservationCountOutputTypeCountPassengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationPassengerWhereInput
  }


  /**
   * Count Type ReservationPassengerCountOutputType
   */

  export type ReservationPassengerCountOutputType = {
    extraServices: number
    boardingPasses: number
  }

  export type ReservationPassengerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    extraServices?: boolean | ReservationPassengerCountOutputTypeCountExtraServicesArgs
    boardingPasses?: boolean | ReservationPassengerCountOutputTypeCountBoardingPassesArgs
  }

  // Custom InputTypes
  /**
   * ReservationPassengerCountOutputType without action
   */
  export type ReservationPassengerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassengerCountOutputType
     */
    select?: ReservationPassengerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservationPassengerCountOutputType without action
   */
  export type ReservationPassengerCountOutputTypeCountExtraServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerServiceWhereInput
  }

  /**
   * ReservationPassengerCountOutputType without action
   */
  export type ReservationPassengerCountOutputTypeCountBoardingPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardingPassWhereInput
  }


  /**
   * Count Type PromotionCountOutputType
   */

  export type PromotionCountOutputType = {
    reservations: number
  }

  export type PromotionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | PromotionCountOutputTypeCountReservationsArgs
  }

  // Custom InputTypes
  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromotionCountOutputType
     */
    select?: PromotionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromotionCountOutputType without action
   */
  export type PromotionCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type ReservationSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type ReservationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    flightId: string | null
    promotionId: string | null
    reservationCode: string | null
    totalAmount: Decimal | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    flightId: string | null
    promotionId: string | null
    reservationCode: string | null
    totalAmount: Decimal | null
    status: $Enums.ReservationStatus | null
    createdAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    userId: number
    flightId: number
    promotionId: number
    reservationCode: number
    totalAmount: number
    status: number
    createdAt: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    totalAmount?: true
  }

  export type ReservationSumAggregateInputType = {
    totalAmount?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    userId?: true
    flightId?: true
    promotionId?: true
    reservationCode?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    userId?: true
    flightId?: true
    promotionId?: true
    reservationCode?: true
    totalAmount?: true
    status?: true
    createdAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    userId?: true
    flightId?: true
    promotionId?: true
    reservationCode?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: string
    userId: string
    flightId: string
    promotionId: string | null
    reservationCode: string
    totalAmount: Decimal
    status: $Enums.ReservationStatus
    createdAt: Date
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flightId?: boolean
    promotionId?: boolean
    reservationCode?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    promotion?: boolean | Reservation$promotionArgs<ExtArgs>
    passengers?: boolean | Reservation$passengersArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    flightId?: boolean
    promotionId?: boolean
    reservationCode?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    promotion?: boolean | Reservation$promotionArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    userId?: boolean
    flightId?: boolean
    promotionId?: boolean
    reservationCode?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | Reservation$promotionArgs<ExtArgs>
    passengers?: boolean | Reservation$passengersArgs<ExtArgs>
    _count?: boolean | ReservationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    promotion?: boolean | Reservation$promotionArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      promotion: Prisma.$PromotionPayload<ExtArgs> | null
      passengers: Prisma.$ReservationPassengerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      flightId: string
      promotionId: string | null
      reservationCode: string
      totalAmount: Prisma.Decimal
      status: $Enums.ReservationStatus
      createdAt: Date
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    promotion<T extends Reservation$promotionArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$promotionArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    passengers<T extends Reservation$passengersArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$passengersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Reservation model
   */ 
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'String'>
    readonly userId: FieldRef<"Reservation", 'String'>
    readonly flightId: FieldRef<"Reservation", 'String'>
    readonly promotionId: FieldRef<"Reservation", 'String'>
    readonly reservationCode: FieldRef<"Reservation", 'String'>
    readonly totalAmount: FieldRef<"Reservation", 'Decimal'>
    readonly status: FieldRef<"Reservation", 'ReservationStatus'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
  }

  /**
   * Reservation.promotion
   */
  export type Reservation$promotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
  }

  /**
   * Reservation.passengers
   */
  export type Reservation$passengersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    where?: ReservationPassengerWhereInput
    orderBy?: ReservationPassengerOrderByWithRelationInput | ReservationPassengerOrderByWithRelationInput[]
    cursor?: ReservationPassengerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationPassengerScalarFieldEnum | ReservationPassengerScalarFieldEnum[]
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


  /**
   * Model ReservationPassenger
   */

  export type AggregateReservationPassenger = {
    _count: ReservationPassengerCountAggregateOutputType | null
    _min: ReservationPassengerMinAggregateOutputType | null
    _max: ReservationPassengerMaxAggregateOutputType | null
  }

  export type ReservationPassengerMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    flightClassId: string | null
    firstName: string | null
    lastName: string | null
    documentNumber: string | null
    seatNumber: string | null
  }

  export type ReservationPassengerMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    flightClassId: string | null
    firstName: string | null
    lastName: string | null
    documentNumber: string | null
    seatNumber: string | null
  }

  export type ReservationPassengerCountAggregateOutputType = {
    id: number
    reservationId: number
    flightClassId: number
    firstName: number
    lastName: number
    documentNumber: number
    seatNumber: number
    _all: number
  }


  export type ReservationPassengerMinAggregateInputType = {
    id?: true
    reservationId?: true
    flightClassId?: true
    firstName?: true
    lastName?: true
    documentNumber?: true
    seatNumber?: true
  }

  export type ReservationPassengerMaxAggregateInputType = {
    id?: true
    reservationId?: true
    flightClassId?: true
    firstName?: true
    lastName?: true
    documentNumber?: true
    seatNumber?: true
  }

  export type ReservationPassengerCountAggregateInputType = {
    id?: true
    reservationId?: true
    flightClassId?: true
    firstName?: true
    lastName?: true
    documentNumber?: true
    seatNumber?: true
    _all?: true
  }

  export type ReservationPassengerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationPassenger to aggregate.
     */
    where?: ReservationPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationPassengers to fetch.
     */
    orderBy?: ReservationPassengerOrderByWithRelationInput | ReservationPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReservationPassengers
    **/
    _count?: true | ReservationPassengerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationPassengerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationPassengerMaxAggregateInputType
  }

  export type GetReservationPassengerAggregateType<T extends ReservationPassengerAggregateArgs> = {
        [P in keyof T & keyof AggregateReservationPassenger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservationPassenger[P]>
      : GetScalarType<T[P], AggregateReservationPassenger[P]>
  }




  export type ReservationPassengerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationPassengerWhereInput
    orderBy?: ReservationPassengerOrderByWithAggregationInput | ReservationPassengerOrderByWithAggregationInput[]
    by: ReservationPassengerScalarFieldEnum[] | ReservationPassengerScalarFieldEnum
    having?: ReservationPassengerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationPassengerCountAggregateInputType | true
    _min?: ReservationPassengerMinAggregateInputType
    _max?: ReservationPassengerMaxAggregateInputType
  }

  export type ReservationPassengerGroupByOutputType = {
    id: string
    reservationId: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber: string | null
    _count: ReservationPassengerCountAggregateOutputType | null
    _min: ReservationPassengerMinAggregateOutputType | null
    _max: ReservationPassengerMaxAggregateOutputType | null
  }

  type GetReservationPassengerGroupByPayload<T extends ReservationPassengerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationPassengerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationPassengerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationPassengerGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationPassengerGroupByOutputType[P]>
        }
      >
    >


  export type ReservationPassengerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    flightClassId?: boolean
    firstName?: boolean
    lastName?: boolean
    documentNumber?: boolean
    seatNumber?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    extraServices?: boolean | ReservationPassenger$extraServicesArgs<ExtArgs>
    boardingPasses?: boolean | ReservationPassenger$boardingPassesArgs<ExtArgs>
    _count?: boolean | ReservationPassengerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationPassenger"]>

  export type ReservationPassengerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    flightClassId?: boolean
    firstName?: boolean
    lastName?: boolean
    documentNumber?: boolean
    seatNumber?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservationPassenger"]>

  export type ReservationPassengerSelectScalar = {
    id?: boolean
    reservationId?: boolean
    flightClassId?: boolean
    firstName?: boolean
    lastName?: boolean
    documentNumber?: boolean
    seatNumber?: boolean
  }

  export type ReservationPassengerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
    extraServices?: boolean | ReservationPassenger$extraServicesArgs<ExtArgs>
    boardingPasses?: boolean | ReservationPassenger$boardingPassesArgs<ExtArgs>
    _count?: boolean | ReservationPassengerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservationPassengerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $ReservationPassengerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReservationPassenger"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
      extraServices: Prisma.$PassengerServicePayload<ExtArgs>[]
      boardingPasses: Prisma.$BoardingPassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string
      flightClassId: string
      firstName: string
      lastName: string
      documentNumber: string
      seatNumber: string | null
    }, ExtArgs["result"]["reservationPassenger"]>
    composites: {}
  }

  type ReservationPassengerGetPayload<S extends boolean | null | undefined | ReservationPassengerDefaultArgs> = $Result.GetResult<Prisma.$ReservationPassengerPayload, S>

  type ReservationPassengerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReservationPassengerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReservationPassengerCountAggregateInputType | true
    }

  export interface ReservationPassengerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReservationPassenger'], meta: { name: 'ReservationPassenger' } }
    /**
     * Find zero or one ReservationPassenger that matches the filter.
     * @param {ReservationPassengerFindUniqueArgs} args - Arguments to find a ReservationPassenger
     * @example
     * // Get one ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationPassengerFindUniqueArgs>(args: SelectSubset<T, ReservationPassengerFindUniqueArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReservationPassenger that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReservationPassengerFindUniqueOrThrowArgs} args - Arguments to find a ReservationPassenger
     * @example
     * // Get one ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationPassengerFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationPassengerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReservationPassenger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerFindFirstArgs} args - Arguments to find a ReservationPassenger
     * @example
     * // Get one ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationPassengerFindFirstArgs>(args?: SelectSubset<T, ReservationPassengerFindFirstArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReservationPassenger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerFindFirstOrThrowArgs} args - Arguments to find a ReservationPassenger
     * @example
     * // Get one ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationPassengerFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationPassengerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReservationPassengers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReservationPassengers
     * const reservationPassengers = await prisma.reservationPassenger.findMany()
     * 
     * // Get first 10 ReservationPassengers
     * const reservationPassengers = await prisma.reservationPassenger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationPassengerWithIdOnly = await prisma.reservationPassenger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationPassengerFindManyArgs>(args?: SelectSubset<T, ReservationPassengerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReservationPassenger.
     * @param {ReservationPassengerCreateArgs} args - Arguments to create a ReservationPassenger.
     * @example
     * // Create one ReservationPassenger
     * const ReservationPassenger = await prisma.reservationPassenger.create({
     *   data: {
     *     // ... data to create a ReservationPassenger
     *   }
     * })
     * 
     */
    create<T extends ReservationPassengerCreateArgs>(args: SelectSubset<T, ReservationPassengerCreateArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReservationPassengers.
     * @param {ReservationPassengerCreateManyArgs} args - Arguments to create many ReservationPassengers.
     * @example
     * // Create many ReservationPassengers
     * const reservationPassenger = await prisma.reservationPassenger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationPassengerCreateManyArgs>(args?: SelectSubset<T, ReservationPassengerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReservationPassengers and returns the data saved in the database.
     * @param {ReservationPassengerCreateManyAndReturnArgs} args - Arguments to create many ReservationPassengers.
     * @example
     * // Create many ReservationPassengers
     * const reservationPassenger = await prisma.reservationPassenger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReservationPassengers and only return the `id`
     * const reservationPassengerWithIdOnly = await prisma.reservationPassenger.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationPassengerCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationPassengerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReservationPassenger.
     * @param {ReservationPassengerDeleteArgs} args - Arguments to delete one ReservationPassenger.
     * @example
     * // Delete one ReservationPassenger
     * const ReservationPassenger = await prisma.reservationPassenger.delete({
     *   where: {
     *     // ... filter to delete one ReservationPassenger
     *   }
     * })
     * 
     */
    delete<T extends ReservationPassengerDeleteArgs>(args: SelectSubset<T, ReservationPassengerDeleteArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReservationPassenger.
     * @param {ReservationPassengerUpdateArgs} args - Arguments to update one ReservationPassenger.
     * @example
     * // Update one ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationPassengerUpdateArgs>(args: SelectSubset<T, ReservationPassengerUpdateArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReservationPassengers.
     * @param {ReservationPassengerDeleteManyArgs} args - Arguments to filter ReservationPassengers to delete.
     * @example
     * // Delete a few ReservationPassengers
     * const { count } = await prisma.reservationPassenger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationPassengerDeleteManyArgs>(args?: SelectSubset<T, ReservationPassengerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReservationPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReservationPassengers
     * const reservationPassenger = await prisma.reservationPassenger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationPassengerUpdateManyArgs>(args: SelectSubset<T, ReservationPassengerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReservationPassenger.
     * @param {ReservationPassengerUpsertArgs} args - Arguments to update or create a ReservationPassenger.
     * @example
     * // Update or create a ReservationPassenger
     * const reservationPassenger = await prisma.reservationPassenger.upsert({
     *   create: {
     *     // ... data to create a ReservationPassenger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReservationPassenger we want to update
     *   }
     * })
     */
    upsert<T extends ReservationPassengerUpsertArgs>(args: SelectSubset<T, ReservationPassengerUpsertArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReservationPassengers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerCountArgs} args - Arguments to filter ReservationPassengers to count.
     * @example
     * // Count the number of ReservationPassengers
     * const count = await prisma.reservationPassenger.count({
     *   where: {
     *     // ... the filter for the ReservationPassengers we want to count
     *   }
     * })
    **/
    count<T extends ReservationPassengerCountArgs>(
      args?: Subset<T, ReservationPassengerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationPassengerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReservationPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationPassengerAggregateArgs>(args: Subset<T, ReservationPassengerAggregateArgs>): Prisma.PrismaPromise<GetReservationPassengerAggregateType<T>>

    /**
     * Group by ReservationPassenger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationPassengerGroupByArgs} args - Group by arguments.
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
      T extends ReservationPassengerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationPassengerGroupByArgs['orderBy'] }
        : { orderBy?: ReservationPassengerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationPassengerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationPassengerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReservationPassenger model
   */
  readonly fields: ReservationPassengerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReservationPassenger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationPassengerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    extraServices<T extends ReservationPassenger$extraServicesArgs<ExtArgs> = {}>(args?: Subset<T, ReservationPassenger$extraServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findMany"> | Null>
    boardingPasses<T extends ReservationPassenger$boardingPassesArgs<ExtArgs> = {}>(args?: Subset<T, ReservationPassenger$boardingPassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the ReservationPassenger model
   */ 
  interface ReservationPassengerFieldRefs {
    readonly id: FieldRef<"ReservationPassenger", 'String'>
    readonly reservationId: FieldRef<"ReservationPassenger", 'String'>
    readonly flightClassId: FieldRef<"ReservationPassenger", 'String'>
    readonly firstName: FieldRef<"ReservationPassenger", 'String'>
    readonly lastName: FieldRef<"ReservationPassenger", 'String'>
    readonly documentNumber: FieldRef<"ReservationPassenger", 'String'>
    readonly seatNumber: FieldRef<"ReservationPassenger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ReservationPassenger findUnique
   */
  export type ReservationPassengerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter, which ReservationPassenger to fetch.
     */
    where: ReservationPassengerWhereUniqueInput
  }

  /**
   * ReservationPassenger findUniqueOrThrow
   */
  export type ReservationPassengerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter, which ReservationPassenger to fetch.
     */
    where: ReservationPassengerWhereUniqueInput
  }

  /**
   * ReservationPassenger findFirst
   */
  export type ReservationPassengerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter, which ReservationPassenger to fetch.
     */
    where?: ReservationPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationPassengers to fetch.
     */
    orderBy?: ReservationPassengerOrderByWithRelationInput | ReservationPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationPassengers.
     */
    cursor?: ReservationPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationPassengers.
     */
    distinct?: ReservationPassengerScalarFieldEnum | ReservationPassengerScalarFieldEnum[]
  }

  /**
   * ReservationPassenger findFirstOrThrow
   */
  export type ReservationPassengerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter, which ReservationPassenger to fetch.
     */
    where?: ReservationPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationPassengers to fetch.
     */
    orderBy?: ReservationPassengerOrderByWithRelationInput | ReservationPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReservationPassengers.
     */
    cursor?: ReservationPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationPassengers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReservationPassengers.
     */
    distinct?: ReservationPassengerScalarFieldEnum | ReservationPassengerScalarFieldEnum[]
  }

  /**
   * ReservationPassenger findMany
   */
  export type ReservationPassengerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter, which ReservationPassengers to fetch.
     */
    where?: ReservationPassengerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReservationPassengers to fetch.
     */
    orderBy?: ReservationPassengerOrderByWithRelationInput | ReservationPassengerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReservationPassengers.
     */
    cursor?: ReservationPassengerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReservationPassengers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReservationPassengers.
     */
    skip?: number
    distinct?: ReservationPassengerScalarFieldEnum | ReservationPassengerScalarFieldEnum[]
  }

  /**
   * ReservationPassenger create
   */
  export type ReservationPassengerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * The data needed to create a ReservationPassenger.
     */
    data: XOR<ReservationPassengerCreateInput, ReservationPassengerUncheckedCreateInput>
  }

  /**
   * ReservationPassenger createMany
   */
  export type ReservationPassengerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReservationPassengers.
     */
    data: ReservationPassengerCreateManyInput | ReservationPassengerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReservationPassenger createManyAndReturn
   */
  export type ReservationPassengerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReservationPassengers.
     */
    data: ReservationPassengerCreateManyInput | ReservationPassengerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReservationPassenger update
   */
  export type ReservationPassengerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * The data needed to update a ReservationPassenger.
     */
    data: XOR<ReservationPassengerUpdateInput, ReservationPassengerUncheckedUpdateInput>
    /**
     * Choose, which ReservationPassenger to update.
     */
    where: ReservationPassengerWhereUniqueInput
  }

  /**
   * ReservationPassenger updateMany
   */
  export type ReservationPassengerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReservationPassengers.
     */
    data: XOR<ReservationPassengerUpdateManyMutationInput, ReservationPassengerUncheckedUpdateManyInput>
    /**
     * Filter which ReservationPassengers to update
     */
    where?: ReservationPassengerWhereInput
  }

  /**
   * ReservationPassenger upsert
   */
  export type ReservationPassengerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * The filter to search for the ReservationPassenger to update in case it exists.
     */
    where: ReservationPassengerWhereUniqueInput
    /**
     * In case the ReservationPassenger found by the `where` argument doesn't exist, create a new ReservationPassenger with this data.
     */
    create: XOR<ReservationPassengerCreateInput, ReservationPassengerUncheckedCreateInput>
    /**
     * In case the ReservationPassenger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationPassengerUpdateInput, ReservationPassengerUncheckedUpdateInput>
  }

  /**
   * ReservationPassenger delete
   */
  export type ReservationPassengerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
    /**
     * Filter which ReservationPassenger to delete.
     */
    where: ReservationPassengerWhereUniqueInput
  }

  /**
   * ReservationPassenger deleteMany
   */
  export type ReservationPassengerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReservationPassengers to delete
     */
    where?: ReservationPassengerWhereInput
  }

  /**
   * ReservationPassenger.extraServices
   */
  export type ReservationPassenger$extraServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    where?: PassengerServiceWhereInput
    orderBy?: PassengerServiceOrderByWithRelationInput | PassengerServiceOrderByWithRelationInput[]
    cursor?: PassengerServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PassengerServiceScalarFieldEnum | PassengerServiceScalarFieldEnum[]
  }

  /**
   * ReservationPassenger.boardingPasses
   */
  export type ReservationPassenger$boardingPassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    where?: BoardingPassWhereInput
    orderBy?: BoardingPassOrderByWithRelationInput | BoardingPassOrderByWithRelationInput[]
    cursor?: BoardingPassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BoardingPassScalarFieldEnum | BoardingPassScalarFieldEnum[]
  }

  /**
   * ReservationPassenger without action
   */
  export type ReservationPassengerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservationPassenger
     */
    select?: ReservationPassengerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationPassengerInclude<ExtArgs> | null
  }


  /**
   * Model PassengerService
   */

  export type AggregatePassengerService = {
    _count: PassengerServiceCountAggregateOutputType | null
    _avg: PassengerServiceAvgAggregateOutputType | null
    _sum: PassengerServiceSumAggregateOutputType | null
    _min: PassengerServiceMinAggregateOutputType | null
    _max: PassengerServiceMaxAggregateOutputType | null
  }

  export type PassengerServiceAvgAggregateOutputType = {
    quantity: number | null
    unitPriceAtBooking: Decimal | null
  }

  export type PassengerServiceSumAggregateOutputType = {
    quantity: number | null
    unitPriceAtBooking: Decimal | null
  }

  export type PassengerServiceMinAggregateOutputType = {
    id: string | null
    passengerId: string | null
    serviceConfigId: string | null
    quantity: number | null
    unitPriceAtBooking: Decimal | null
  }

  export type PassengerServiceMaxAggregateOutputType = {
    id: string | null
    passengerId: string | null
    serviceConfigId: string | null
    quantity: number | null
    unitPriceAtBooking: Decimal | null
  }

  export type PassengerServiceCountAggregateOutputType = {
    id: number
    passengerId: number
    serviceConfigId: number
    quantity: number
    unitPriceAtBooking: number
    _all: number
  }


  export type PassengerServiceAvgAggregateInputType = {
    quantity?: true
    unitPriceAtBooking?: true
  }

  export type PassengerServiceSumAggregateInputType = {
    quantity?: true
    unitPriceAtBooking?: true
  }

  export type PassengerServiceMinAggregateInputType = {
    id?: true
    passengerId?: true
    serviceConfigId?: true
    quantity?: true
    unitPriceAtBooking?: true
  }

  export type PassengerServiceMaxAggregateInputType = {
    id?: true
    passengerId?: true
    serviceConfigId?: true
    quantity?: true
    unitPriceAtBooking?: true
  }

  export type PassengerServiceCountAggregateInputType = {
    id?: true
    passengerId?: true
    serviceConfigId?: true
    quantity?: true
    unitPriceAtBooking?: true
    _all?: true
  }

  export type PassengerServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassengerService to aggregate.
     */
    where?: PassengerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassengerServices to fetch.
     */
    orderBy?: PassengerServiceOrderByWithRelationInput | PassengerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PassengerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassengerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassengerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PassengerServices
    **/
    _count?: true | PassengerServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PassengerServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PassengerServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PassengerServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PassengerServiceMaxAggregateInputType
  }

  export type GetPassengerServiceAggregateType<T extends PassengerServiceAggregateArgs> = {
        [P in keyof T & keyof AggregatePassengerService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassengerService[P]>
      : GetScalarType<T[P], AggregatePassengerService[P]>
  }




  export type PassengerServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PassengerServiceWhereInput
    orderBy?: PassengerServiceOrderByWithAggregationInput | PassengerServiceOrderByWithAggregationInput[]
    by: PassengerServiceScalarFieldEnum[] | PassengerServiceScalarFieldEnum
    having?: PassengerServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PassengerServiceCountAggregateInputType | true
    _avg?: PassengerServiceAvgAggregateInputType
    _sum?: PassengerServiceSumAggregateInputType
    _min?: PassengerServiceMinAggregateInputType
    _max?: PassengerServiceMaxAggregateInputType
  }

  export type PassengerServiceGroupByOutputType = {
    id: string
    passengerId: string
    serviceConfigId: string
    quantity: number
    unitPriceAtBooking: Decimal
    _count: PassengerServiceCountAggregateOutputType | null
    _avg: PassengerServiceAvgAggregateOutputType | null
    _sum: PassengerServiceSumAggregateOutputType | null
    _min: PassengerServiceMinAggregateOutputType | null
    _max: PassengerServiceMaxAggregateOutputType | null
  }

  type GetPassengerServiceGroupByPayload<T extends PassengerServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PassengerServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PassengerServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PassengerServiceGroupByOutputType[P]>
            : GetScalarType<T[P], PassengerServiceGroupByOutputType[P]>
        }
      >
    >


  export type PassengerServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    serviceConfigId?: boolean
    quantity?: boolean
    unitPriceAtBooking?: boolean
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passengerService"]>

  export type PassengerServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    serviceConfigId?: boolean
    quantity?: boolean
    unitPriceAtBooking?: boolean
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passengerService"]>

  export type PassengerServiceSelectScalar = {
    id?: boolean
    passengerId?: boolean
    serviceConfigId?: boolean
    quantity?: boolean
    unitPriceAtBooking?: boolean
  }

  export type PassengerServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }
  export type PassengerServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }

  export type $PassengerServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PassengerService"
    objects: {
      passenger: Prisma.$ReservationPassengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      passengerId: string
      serviceConfigId: string
      quantity: number
      unitPriceAtBooking: Prisma.Decimal
    }, ExtArgs["result"]["passengerService"]>
    composites: {}
  }

  type PassengerServiceGetPayload<S extends boolean | null | undefined | PassengerServiceDefaultArgs> = $Result.GetResult<Prisma.$PassengerServicePayload, S>

  type PassengerServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PassengerServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PassengerServiceCountAggregateInputType | true
    }

  export interface PassengerServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PassengerService'], meta: { name: 'PassengerService' } }
    /**
     * Find zero or one PassengerService that matches the filter.
     * @param {PassengerServiceFindUniqueArgs} args - Arguments to find a PassengerService
     * @example
     * // Get one PassengerService
     * const passengerService = await prisma.passengerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PassengerServiceFindUniqueArgs>(args: SelectSubset<T, PassengerServiceFindUniqueArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PassengerService that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PassengerServiceFindUniqueOrThrowArgs} args - Arguments to find a PassengerService
     * @example
     * // Get one PassengerService
     * const passengerService = await prisma.passengerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PassengerServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, PassengerServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PassengerService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceFindFirstArgs} args - Arguments to find a PassengerService
     * @example
     * // Get one PassengerService
     * const passengerService = await prisma.passengerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PassengerServiceFindFirstArgs>(args?: SelectSubset<T, PassengerServiceFindFirstArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PassengerService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceFindFirstOrThrowArgs} args - Arguments to find a PassengerService
     * @example
     * // Get one PassengerService
     * const passengerService = await prisma.passengerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PassengerServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, PassengerServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PassengerServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PassengerServices
     * const passengerServices = await prisma.passengerService.findMany()
     * 
     * // Get first 10 PassengerServices
     * const passengerServices = await prisma.passengerService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passengerServiceWithIdOnly = await prisma.passengerService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PassengerServiceFindManyArgs>(args?: SelectSubset<T, PassengerServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PassengerService.
     * @param {PassengerServiceCreateArgs} args - Arguments to create a PassengerService.
     * @example
     * // Create one PassengerService
     * const PassengerService = await prisma.passengerService.create({
     *   data: {
     *     // ... data to create a PassengerService
     *   }
     * })
     * 
     */
    create<T extends PassengerServiceCreateArgs>(args: SelectSubset<T, PassengerServiceCreateArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PassengerServices.
     * @param {PassengerServiceCreateManyArgs} args - Arguments to create many PassengerServices.
     * @example
     * // Create many PassengerServices
     * const passengerService = await prisma.passengerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PassengerServiceCreateManyArgs>(args?: SelectSubset<T, PassengerServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PassengerServices and returns the data saved in the database.
     * @param {PassengerServiceCreateManyAndReturnArgs} args - Arguments to create many PassengerServices.
     * @example
     * // Create many PassengerServices
     * const passengerService = await prisma.passengerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PassengerServices and only return the `id`
     * const passengerServiceWithIdOnly = await prisma.passengerService.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PassengerServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, PassengerServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PassengerService.
     * @param {PassengerServiceDeleteArgs} args - Arguments to delete one PassengerService.
     * @example
     * // Delete one PassengerService
     * const PassengerService = await prisma.passengerService.delete({
     *   where: {
     *     // ... filter to delete one PassengerService
     *   }
     * })
     * 
     */
    delete<T extends PassengerServiceDeleteArgs>(args: SelectSubset<T, PassengerServiceDeleteArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PassengerService.
     * @param {PassengerServiceUpdateArgs} args - Arguments to update one PassengerService.
     * @example
     * // Update one PassengerService
     * const passengerService = await prisma.passengerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PassengerServiceUpdateArgs>(args: SelectSubset<T, PassengerServiceUpdateArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PassengerServices.
     * @param {PassengerServiceDeleteManyArgs} args - Arguments to filter PassengerServices to delete.
     * @example
     * // Delete a few PassengerServices
     * const { count } = await prisma.passengerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PassengerServiceDeleteManyArgs>(args?: SelectSubset<T, PassengerServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PassengerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PassengerServices
     * const passengerService = await prisma.passengerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PassengerServiceUpdateManyArgs>(args: SelectSubset<T, PassengerServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PassengerService.
     * @param {PassengerServiceUpsertArgs} args - Arguments to update or create a PassengerService.
     * @example
     * // Update or create a PassengerService
     * const passengerService = await prisma.passengerService.upsert({
     *   create: {
     *     // ... data to create a PassengerService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PassengerService we want to update
     *   }
     * })
     */
    upsert<T extends PassengerServiceUpsertArgs>(args: SelectSubset<T, PassengerServiceUpsertArgs<ExtArgs>>): Prisma__PassengerServiceClient<$Result.GetResult<Prisma.$PassengerServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PassengerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceCountArgs} args - Arguments to filter PassengerServices to count.
     * @example
     * // Count the number of PassengerServices
     * const count = await prisma.passengerService.count({
     *   where: {
     *     // ... the filter for the PassengerServices we want to count
     *   }
     * })
    **/
    count<T extends PassengerServiceCountArgs>(
      args?: Subset<T, PassengerServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PassengerServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PassengerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PassengerServiceAggregateArgs>(args: Subset<T, PassengerServiceAggregateArgs>): Prisma.PrismaPromise<GetPassengerServiceAggregateType<T>>

    /**
     * Group by PassengerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PassengerServiceGroupByArgs} args - Group by arguments.
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
      T extends PassengerServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PassengerServiceGroupByArgs['orderBy'] }
        : { orderBy?: PassengerServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PassengerServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassengerServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PassengerService model
   */
  readonly fields: PassengerServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PassengerService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PassengerServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passenger<T extends ReservationPassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationPassengerDefaultArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the PassengerService model
   */ 
  interface PassengerServiceFieldRefs {
    readonly id: FieldRef<"PassengerService", 'String'>
    readonly passengerId: FieldRef<"PassengerService", 'String'>
    readonly serviceConfigId: FieldRef<"PassengerService", 'String'>
    readonly quantity: FieldRef<"PassengerService", 'Int'>
    readonly unitPriceAtBooking: FieldRef<"PassengerService", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * PassengerService findUnique
   */
  export type PassengerServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter, which PassengerService to fetch.
     */
    where: PassengerServiceWhereUniqueInput
  }

  /**
   * PassengerService findUniqueOrThrow
   */
  export type PassengerServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter, which PassengerService to fetch.
     */
    where: PassengerServiceWhereUniqueInput
  }

  /**
   * PassengerService findFirst
   */
  export type PassengerServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter, which PassengerService to fetch.
     */
    where?: PassengerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassengerServices to fetch.
     */
    orderBy?: PassengerServiceOrderByWithRelationInput | PassengerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassengerServices.
     */
    cursor?: PassengerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassengerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassengerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassengerServices.
     */
    distinct?: PassengerServiceScalarFieldEnum | PassengerServiceScalarFieldEnum[]
  }

  /**
   * PassengerService findFirstOrThrow
   */
  export type PassengerServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter, which PassengerService to fetch.
     */
    where?: PassengerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassengerServices to fetch.
     */
    orderBy?: PassengerServiceOrderByWithRelationInput | PassengerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PassengerServices.
     */
    cursor?: PassengerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassengerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassengerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PassengerServices.
     */
    distinct?: PassengerServiceScalarFieldEnum | PassengerServiceScalarFieldEnum[]
  }

  /**
   * PassengerService findMany
   */
  export type PassengerServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter, which PassengerServices to fetch.
     */
    where?: PassengerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PassengerServices to fetch.
     */
    orderBy?: PassengerServiceOrderByWithRelationInput | PassengerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PassengerServices.
     */
    cursor?: PassengerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PassengerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PassengerServices.
     */
    skip?: number
    distinct?: PassengerServiceScalarFieldEnum | PassengerServiceScalarFieldEnum[]
  }

  /**
   * PassengerService create
   */
  export type PassengerServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a PassengerService.
     */
    data: XOR<PassengerServiceCreateInput, PassengerServiceUncheckedCreateInput>
  }

  /**
   * PassengerService createMany
   */
  export type PassengerServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PassengerServices.
     */
    data: PassengerServiceCreateManyInput | PassengerServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PassengerService createManyAndReturn
   */
  export type PassengerServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PassengerServices.
     */
    data: PassengerServiceCreateManyInput | PassengerServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PassengerService update
   */
  export type PassengerServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a PassengerService.
     */
    data: XOR<PassengerServiceUpdateInput, PassengerServiceUncheckedUpdateInput>
    /**
     * Choose, which PassengerService to update.
     */
    where: PassengerServiceWhereUniqueInput
  }

  /**
   * PassengerService updateMany
   */
  export type PassengerServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PassengerServices.
     */
    data: XOR<PassengerServiceUpdateManyMutationInput, PassengerServiceUncheckedUpdateManyInput>
    /**
     * Filter which PassengerServices to update
     */
    where?: PassengerServiceWhereInput
  }

  /**
   * PassengerService upsert
   */
  export type PassengerServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the PassengerService to update in case it exists.
     */
    where: PassengerServiceWhereUniqueInput
    /**
     * In case the PassengerService found by the `where` argument doesn't exist, create a new PassengerService with this data.
     */
    create: XOR<PassengerServiceCreateInput, PassengerServiceUncheckedCreateInput>
    /**
     * In case the PassengerService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PassengerServiceUpdateInput, PassengerServiceUncheckedUpdateInput>
  }

  /**
   * PassengerService delete
   */
  export type PassengerServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
    /**
     * Filter which PassengerService to delete.
     */
    where: PassengerServiceWhereUniqueInput
  }

  /**
   * PassengerService deleteMany
   */
  export type PassengerServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PassengerServices to delete
     */
    where?: PassengerServiceWhereInput
  }

  /**
   * PassengerService without action
   */
  export type PassengerServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PassengerService
     */
    select?: PassengerServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PassengerServiceInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discountValue: Decimal | null
    maxUsages: number | null
    currentUsages: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discountValue: Decimal | null
    maxUsages: number | null
    currentUsages: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    code: string | null
    discountType: $Enums.DiscountType | null
    discountValue: Decimal | null
    maxUsages: number | null
    currentUsages: number | null
    isActive: boolean | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    discountType: $Enums.DiscountType | null
    discountValue: Decimal | null
    maxUsages: number | null
    currentUsages: number | null
    isActive: boolean | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    code: number
    discountType: number
    discountValue: number
    maxUsages: number
    currentUsages: number
    isActive: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discountValue?: true
    maxUsages?: true
    currentUsages?: true
  }

  export type PromotionSumAggregateInputType = {
    discountValue?: true
    maxUsages?: true
    currentUsages?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    code?: true
    discountType?: true
    discountValue?: true
    maxUsages?: true
    currentUsages?: true
    isActive?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    code?: true
    discountType?: true
    discountValue?: true
    maxUsages?: true
    currentUsages?: true
    isActive?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    code?: true
    discountType?: true
    discountValue?: true
    maxUsages?: true
    currentUsages?: true
    isActive?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal
    maxUsages: number | null
    currentUsages: number
    isActive: boolean
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountType?: boolean
    discountValue?: boolean
    maxUsages?: boolean
    currentUsages?: boolean
    isActive?: boolean
    reservations?: boolean | Promotion$reservationsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    discountType?: boolean
    discountValue?: boolean
    maxUsages?: boolean
    currentUsages?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    code?: boolean
    discountType?: boolean
    discountValue?: boolean
    maxUsages?: boolean
    currentUsages?: boolean
    isActive?: boolean
  }

  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | Promotion$reservationsArgs<ExtArgs>
    _count?: boolean | PromotionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      discountType: $Enums.DiscountType
      discountValue: Prisma.Decimal
      maxUsages: number | null
      currentUsages: number
      isActive: boolean
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservations<T extends Promotion$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Promotion$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Promotion model
   */ 
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly discountType: FieldRef<"Promotion", 'DiscountType'>
    readonly discountValue: FieldRef<"Promotion", 'Decimal'>
    readonly maxUsages: FieldRef<"Promotion", 'Int'>
    readonly currentUsages: FieldRef<"Promotion", 'Int'>
    readonly isActive: FieldRef<"Promotion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
  }

  /**
   * Promotion.reservations
   */
  export type Promotion$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model BoardingPass
   */

  export type AggregateBoardingPass = {
    _count: BoardingPassCountAggregateOutputType | null
    _min: BoardingPassMinAggregateOutputType | null
    _max: BoardingPassMaxAggregateOutputType | null
  }

  export type BoardingPassMinAggregateOutputType = {
    id: string | null
    passengerId: string | null
    segmentId: string | null
    boardingCode: string | null
    gate: string | null
    boardingGroup: string | null
    checkInAt: Date | null
    status: $Enums.CheckInStatus | null
  }

  export type BoardingPassMaxAggregateOutputType = {
    id: string | null
    passengerId: string | null
    segmentId: string | null
    boardingCode: string | null
    gate: string | null
    boardingGroup: string | null
    checkInAt: Date | null
    status: $Enums.CheckInStatus | null
  }

  export type BoardingPassCountAggregateOutputType = {
    id: number
    passengerId: number
    segmentId: number
    boardingCode: number
    gate: number
    boardingGroup: number
    checkInAt: number
    status: number
    _all: number
  }


  export type BoardingPassMinAggregateInputType = {
    id?: true
    passengerId?: true
    segmentId?: true
    boardingCode?: true
    gate?: true
    boardingGroup?: true
    checkInAt?: true
    status?: true
  }

  export type BoardingPassMaxAggregateInputType = {
    id?: true
    passengerId?: true
    segmentId?: true
    boardingCode?: true
    gate?: true
    boardingGroup?: true
    checkInAt?: true
    status?: true
  }

  export type BoardingPassCountAggregateInputType = {
    id?: true
    passengerId?: true
    segmentId?: true
    boardingCode?: true
    gate?: true
    boardingGroup?: true
    checkInAt?: true
    status?: true
    _all?: true
  }

  export type BoardingPassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardingPass to aggregate.
     */
    where?: BoardingPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardingPasses to fetch.
     */
    orderBy?: BoardingPassOrderByWithRelationInput | BoardingPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardingPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardingPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardingPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardingPasses
    **/
    _count?: true | BoardingPassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardingPassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardingPassMaxAggregateInputType
  }

  export type GetBoardingPassAggregateType<T extends BoardingPassAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardingPass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardingPass[P]>
      : GetScalarType<T[P], AggregateBoardingPass[P]>
  }




  export type BoardingPassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardingPassWhereInput
    orderBy?: BoardingPassOrderByWithAggregationInput | BoardingPassOrderByWithAggregationInput[]
    by: BoardingPassScalarFieldEnum[] | BoardingPassScalarFieldEnum
    having?: BoardingPassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardingPassCountAggregateInputType | true
    _min?: BoardingPassMinAggregateInputType
    _max?: BoardingPassMaxAggregateInputType
  }

  export type BoardingPassGroupByOutputType = {
    id: string
    passengerId: string
    segmentId: string
    boardingCode: string
    gate: string | null
    boardingGroup: string | null
    checkInAt: Date | null
    status: $Enums.CheckInStatus
    _count: BoardingPassCountAggregateOutputType | null
    _min: BoardingPassMinAggregateOutputType | null
    _max: BoardingPassMaxAggregateOutputType | null
  }

  type GetBoardingPassGroupByPayload<T extends BoardingPassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardingPassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardingPassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardingPassGroupByOutputType[P]>
            : GetScalarType<T[P], BoardingPassGroupByOutputType[P]>
        }
      >
    >


  export type BoardingPassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    segmentId?: boolean
    boardingCode?: boolean
    gate?: boolean
    boardingGroup?: boolean
    checkInAt?: boolean
    status?: boolean
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardingPass"]>

  export type BoardingPassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    passengerId?: boolean
    segmentId?: boolean
    boardingCode?: boolean
    gate?: boolean
    boardingGroup?: boolean
    checkInAt?: boolean
    status?: boolean
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["boardingPass"]>

  export type BoardingPassSelectScalar = {
    id?: boolean
    passengerId?: boolean
    segmentId?: boolean
    boardingCode?: boolean
    gate?: boolean
    boardingGroup?: boolean
    checkInAt?: boolean
    status?: boolean
  }

  export type BoardingPassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }
  export type BoardingPassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    passenger?: boolean | ReservationPassengerDefaultArgs<ExtArgs>
  }

  export type $BoardingPassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardingPass"
    objects: {
      passenger: Prisma.$ReservationPassengerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      passengerId: string
      segmentId: string
      boardingCode: string
      gate: string | null
      boardingGroup: string | null
      checkInAt: Date | null
      status: $Enums.CheckInStatus
    }, ExtArgs["result"]["boardingPass"]>
    composites: {}
  }

  type BoardingPassGetPayload<S extends boolean | null | undefined | BoardingPassDefaultArgs> = $Result.GetResult<Prisma.$BoardingPassPayload, S>

  type BoardingPassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BoardingPassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BoardingPassCountAggregateInputType | true
    }

  export interface BoardingPassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardingPass'], meta: { name: 'BoardingPass' } }
    /**
     * Find zero or one BoardingPass that matches the filter.
     * @param {BoardingPassFindUniqueArgs} args - Arguments to find a BoardingPass
     * @example
     * // Get one BoardingPass
     * const boardingPass = await prisma.boardingPass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardingPassFindUniqueArgs>(args: SelectSubset<T, BoardingPassFindUniqueArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BoardingPass that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BoardingPassFindUniqueOrThrowArgs} args - Arguments to find a BoardingPass
     * @example
     * // Get one BoardingPass
     * const boardingPass = await prisma.boardingPass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardingPassFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardingPassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BoardingPass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassFindFirstArgs} args - Arguments to find a BoardingPass
     * @example
     * // Get one BoardingPass
     * const boardingPass = await prisma.boardingPass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardingPassFindFirstArgs>(args?: SelectSubset<T, BoardingPassFindFirstArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BoardingPass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassFindFirstOrThrowArgs} args - Arguments to find a BoardingPass
     * @example
     * // Get one BoardingPass
     * const boardingPass = await prisma.boardingPass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardingPassFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardingPassFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BoardingPasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardingPasses
     * const boardingPasses = await prisma.boardingPass.findMany()
     * 
     * // Get first 10 BoardingPasses
     * const boardingPasses = await prisma.boardingPass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardingPassWithIdOnly = await prisma.boardingPass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardingPassFindManyArgs>(args?: SelectSubset<T, BoardingPassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BoardingPass.
     * @param {BoardingPassCreateArgs} args - Arguments to create a BoardingPass.
     * @example
     * // Create one BoardingPass
     * const BoardingPass = await prisma.boardingPass.create({
     *   data: {
     *     // ... data to create a BoardingPass
     *   }
     * })
     * 
     */
    create<T extends BoardingPassCreateArgs>(args: SelectSubset<T, BoardingPassCreateArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BoardingPasses.
     * @param {BoardingPassCreateManyArgs} args - Arguments to create many BoardingPasses.
     * @example
     * // Create many BoardingPasses
     * const boardingPass = await prisma.boardingPass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardingPassCreateManyArgs>(args?: SelectSubset<T, BoardingPassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BoardingPasses and returns the data saved in the database.
     * @param {BoardingPassCreateManyAndReturnArgs} args - Arguments to create many BoardingPasses.
     * @example
     * // Create many BoardingPasses
     * const boardingPass = await prisma.boardingPass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BoardingPasses and only return the `id`
     * const boardingPassWithIdOnly = await prisma.boardingPass.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BoardingPassCreateManyAndReturnArgs>(args?: SelectSubset<T, BoardingPassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BoardingPass.
     * @param {BoardingPassDeleteArgs} args - Arguments to delete one BoardingPass.
     * @example
     * // Delete one BoardingPass
     * const BoardingPass = await prisma.boardingPass.delete({
     *   where: {
     *     // ... filter to delete one BoardingPass
     *   }
     * })
     * 
     */
    delete<T extends BoardingPassDeleteArgs>(args: SelectSubset<T, BoardingPassDeleteArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BoardingPass.
     * @param {BoardingPassUpdateArgs} args - Arguments to update one BoardingPass.
     * @example
     * // Update one BoardingPass
     * const boardingPass = await prisma.boardingPass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardingPassUpdateArgs>(args: SelectSubset<T, BoardingPassUpdateArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BoardingPasses.
     * @param {BoardingPassDeleteManyArgs} args - Arguments to filter BoardingPasses to delete.
     * @example
     * // Delete a few BoardingPasses
     * const { count } = await prisma.boardingPass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardingPassDeleteManyArgs>(args?: SelectSubset<T, BoardingPassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardingPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardingPasses
     * const boardingPass = await prisma.boardingPass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardingPassUpdateManyArgs>(args: SelectSubset<T, BoardingPassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardingPass.
     * @param {BoardingPassUpsertArgs} args - Arguments to update or create a BoardingPass.
     * @example
     * // Update or create a BoardingPass
     * const boardingPass = await prisma.boardingPass.upsert({
     *   create: {
     *     // ... data to create a BoardingPass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardingPass we want to update
     *   }
     * })
     */
    upsert<T extends BoardingPassUpsertArgs>(args: SelectSubset<T, BoardingPassUpsertArgs<ExtArgs>>): Prisma__BoardingPassClient<$Result.GetResult<Prisma.$BoardingPassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BoardingPasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassCountArgs} args - Arguments to filter BoardingPasses to count.
     * @example
     * // Count the number of BoardingPasses
     * const count = await prisma.boardingPass.count({
     *   where: {
     *     // ... the filter for the BoardingPasses we want to count
     *   }
     * })
    **/
    count<T extends BoardingPassCountArgs>(
      args?: Subset<T, BoardingPassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardingPassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardingPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardingPassAggregateArgs>(args: Subset<T, BoardingPassAggregateArgs>): Prisma.PrismaPromise<GetBoardingPassAggregateType<T>>

    /**
     * Group by BoardingPass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardingPassGroupByArgs} args - Group by arguments.
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
      T extends BoardingPassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardingPassGroupByArgs['orderBy'] }
        : { orderBy?: BoardingPassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardingPassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardingPassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardingPass model
   */
  readonly fields: BoardingPassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardingPass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardingPassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    passenger<T extends ReservationPassengerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationPassengerDefaultArgs<ExtArgs>>): Prisma__ReservationPassengerClient<$Result.GetResult<Prisma.$ReservationPassengerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BoardingPass model
   */ 
  interface BoardingPassFieldRefs {
    readonly id: FieldRef<"BoardingPass", 'String'>
    readonly passengerId: FieldRef<"BoardingPass", 'String'>
    readonly segmentId: FieldRef<"BoardingPass", 'String'>
    readonly boardingCode: FieldRef<"BoardingPass", 'String'>
    readonly gate: FieldRef<"BoardingPass", 'String'>
    readonly boardingGroup: FieldRef<"BoardingPass", 'String'>
    readonly checkInAt: FieldRef<"BoardingPass", 'DateTime'>
    readonly status: FieldRef<"BoardingPass", 'CheckInStatus'>
  }
    

  // Custom InputTypes
  /**
   * BoardingPass findUnique
   */
  export type BoardingPassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter, which BoardingPass to fetch.
     */
    where: BoardingPassWhereUniqueInput
  }

  /**
   * BoardingPass findUniqueOrThrow
   */
  export type BoardingPassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter, which BoardingPass to fetch.
     */
    where: BoardingPassWhereUniqueInput
  }

  /**
   * BoardingPass findFirst
   */
  export type BoardingPassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter, which BoardingPass to fetch.
     */
    where?: BoardingPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardingPasses to fetch.
     */
    orderBy?: BoardingPassOrderByWithRelationInput | BoardingPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardingPasses.
     */
    cursor?: BoardingPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardingPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardingPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardingPasses.
     */
    distinct?: BoardingPassScalarFieldEnum | BoardingPassScalarFieldEnum[]
  }

  /**
   * BoardingPass findFirstOrThrow
   */
  export type BoardingPassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter, which BoardingPass to fetch.
     */
    where?: BoardingPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardingPasses to fetch.
     */
    orderBy?: BoardingPassOrderByWithRelationInput | BoardingPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardingPasses.
     */
    cursor?: BoardingPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardingPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardingPasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardingPasses.
     */
    distinct?: BoardingPassScalarFieldEnum | BoardingPassScalarFieldEnum[]
  }

  /**
   * BoardingPass findMany
   */
  export type BoardingPassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter, which BoardingPasses to fetch.
     */
    where?: BoardingPassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardingPasses to fetch.
     */
    orderBy?: BoardingPassOrderByWithRelationInput | BoardingPassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardingPasses.
     */
    cursor?: BoardingPassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardingPasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardingPasses.
     */
    skip?: number
    distinct?: BoardingPassScalarFieldEnum | BoardingPassScalarFieldEnum[]
  }

  /**
   * BoardingPass create
   */
  export type BoardingPassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * The data needed to create a BoardingPass.
     */
    data: XOR<BoardingPassCreateInput, BoardingPassUncheckedCreateInput>
  }

  /**
   * BoardingPass createMany
   */
  export type BoardingPassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardingPasses.
     */
    data: BoardingPassCreateManyInput | BoardingPassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoardingPass createManyAndReturn
   */
  export type BoardingPassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BoardingPasses.
     */
    data: BoardingPassCreateManyInput | BoardingPassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BoardingPass update
   */
  export type BoardingPassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * The data needed to update a BoardingPass.
     */
    data: XOR<BoardingPassUpdateInput, BoardingPassUncheckedUpdateInput>
    /**
     * Choose, which BoardingPass to update.
     */
    where: BoardingPassWhereUniqueInput
  }

  /**
   * BoardingPass updateMany
   */
  export type BoardingPassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardingPasses.
     */
    data: XOR<BoardingPassUpdateManyMutationInput, BoardingPassUncheckedUpdateManyInput>
    /**
     * Filter which BoardingPasses to update
     */
    where?: BoardingPassWhereInput
  }

  /**
   * BoardingPass upsert
   */
  export type BoardingPassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * The filter to search for the BoardingPass to update in case it exists.
     */
    where: BoardingPassWhereUniqueInput
    /**
     * In case the BoardingPass found by the `where` argument doesn't exist, create a new BoardingPass with this data.
     */
    create: XOR<BoardingPassCreateInput, BoardingPassUncheckedCreateInput>
    /**
     * In case the BoardingPass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardingPassUpdateInput, BoardingPassUncheckedUpdateInput>
  }

  /**
   * BoardingPass delete
   */
  export type BoardingPassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
    /**
     * Filter which BoardingPass to delete.
     */
    where: BoardingPassWhereUniqueInput
  }

  /**
   * BoardingPass deleteMany
   */
  export type BoardingPassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardingPasses to delete
     */
    where?: BoardingPassWhereInput
  }

  /**
   * BoardingPass without action
   */
  export type BoardingPassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardingPass
     */
    select?: BoardingPassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BoardingPassInclude<ExtArgs> | null
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


  export const ReservationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    flightId: 'flightId',
    promotionId: 'promotionId',
    reservationCode: 'reservationCode',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const ReservationPassengerScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    flightClassId: 'flightClassId',
    firstName: 'firstName',
    lastName: 'lastName',
    documentNumber: 'documentNumber',
    seatNumber: 'seatNumber'
  };

  export type ReservationPassengerScalarFieldEnum = (typeof ReservationPassengerScalarFieldEnum)[keyof typeof ReservationPassengerScalarFieldEnum]


  export const PassengerServiceScalarFieldEnum: {
    id: 'id',
    passengerId: 'passengerId',
    serviceConfigId: 'serviceConfigId',
    quantity: 'quantity',
    unitPriceAtBooking: 'unitPriceAtBooking'
  };

  export type PassengerServiceScalarFieldEnum = (typeof PassengerServiceScalarFieldEnum)[keyof typeof PassengerServiceScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    discountType: 'discountType',
    discountValue: 'discountValue',
    maxUsages: 'maxUsages',
    currentUsages: 'currentUsages',
    isActive: 'isActive'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const BoardingPassScalarFieldEnum: {
    id: 'id',
    passengerId: 'passengerId',
    segmentId: 'segmentId',
    boardingCode: 'boardingCode',
    gate: 'gate',
    boardingGroup: 'boardingGroup',
    checkInAt: 'checkInAt',
    status: 'status'
  };

  export type BoardingPassScalarFieldEnum = (typeof BoardingPassScalarFieldEnum)[keyof typeof BoardingPassScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ReservationStatus'
   */
  export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>
    


  /**
   * Reference to a field of type 'ReservationStatus[]'
   */
  export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DiscountType'
   */
  export type EnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType'>
    


  /**
   * Reference to a field of type 'DiscountType[]'
   */
  export type ListEnumDiscountTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DiscountType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CheckInStatus'
   */
  export type EnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus'>
    


  /**
   * Reference to a field of type 'CheckInStatus[]'
   */
  export type ListEnumCheckInStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CheckInStatus[]'>
    


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


  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    flightId?: StringFilter<"Reservation"> | string
    promotionId?: StringNullableFilter<"Reservation"> | string | null
    reservationCode?: StringFilter<"Reservation"> | string
    totalAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    promotion?: XOR<PromotionNullableRelationFilter, PromotionWhereInput> | null
    passengers?: ReservationPassengerListRelationFilter
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    promotionId?: SortOrderInput | SortOrder
    reservationCode?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    promotion?: PromotionOrderByWithRelationInput
    passengers?: ReservationPassengerOrderByRelationAggregateInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    reservationCode?: string
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    userId?: StringFilter<"Reservation"> | string
    flightId?: StringFilter<"Reservation"> | string
    promotionId?: StringNullableFilter<"Reservation"> | string | null
    totalAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    promotion?: XOR<PromotionNullableRelationFilter, PromotionWhereInput> | null
    passengers?: ReservationPassengerListRelationFilter
  }, "id" | "reservationCode">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    promotionId?: SortOrderInput | SortOrder
    reservationCode?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reservation"> | string
    userId?: StringWithAggregatesFilter<"Reservation"> | string
    flightId?: StringWithAggregatesFilter<"Reservation"> | string
    promotionId?: StringNullableWithAggregatesFilter<"Reservation"> | string | null
    reservationCode?: StringWithAggregatesFilter<"Reservation"> | string
    totalAmount?: DecimalWithAggregatesFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
  }

  export type ReservationPassengerWhereInput = {
    AND?: ReservationPassengerWhereInput | ReservationPassengerWhereInput[]
    OR?: ReservationPassengerWhereInput[]
    NOT?: ReservationPassengerWhereInput | ReservationPassengerWhereInput[]
    id?: StringFilter<"ReservationPassenger"> | string
    reservationId?: StringFilter<"ReservationPassenger"> | string
    flightClassId?: StringFilter<"ReservationPassenger"> | string
    firstName?: StringFilter<"ReservationPassenger"> | string
    lastName?: StringFilter<"ReservationPassenger"> | string
    documentNumber?: StringFilter<"ReservationPassenger"> | string
    seatNumber?: StringNullableFilter<"ReservationPassenger"> | string | null
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
    extraServices?: PassengerServiceListRelationFilter
    boardingPasses?: BoardingPassListRelationFilter
  }

  export type ReservationPassengerOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    flightClassId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentNumber?: SortOrder
    seatNumber?: SortOrderInput | SortOrder
    reservation?: ReservationOrderByWithRelationInput
    extraServices?: PassengerServiceOrderByRelationAggregateInput
    boardingPasses?: BoardingPassOrderByRelationAggregateInput
  }

  export type ReservationPassengerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flightClassId_seatNumber?: ReservationPassengerFlightClassIdSeatNumberCompoundUniqueInput
    AND?: ReservationPassengerWhereInput | ReservationPassengerWhereInput[]
    OR?: ReservationPassengerWhereInput[]
    NOT?: ReservationPassengerWhereInput | ReservationPassengerWhereInput[]
    reservationId?: StringFilter<"ReservationPassenger"> | string
    flightClassId?: StringFilter<"ReservationPassenger"> | string
    firstName?: StringFilter<"ReservationPassenger"> | string
    lastName?: StringFilter<"ReservationPassenger"> | string
    documentNumber?: StringFilter<"ReservationPassenger"> | string
    seatNumber?: StringNullableFilter<"ReservationPassenger"> | string | null
    reservation?: XOR<ReservationRelationFilter, ReservationWhereInput>
    extraServices?: PassengerServiceListRelationFilter
    boardingPasses?: BoardingPassListRelationFilter
  }, "id" | "flightClassId_seatNumber">

  export type ReservationPassengerOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrder
    flightClassId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentNumber?: SortOrder
    seatNumber?: SortOrderInput | SortOrder
    _count?: ReservationPassengerCountOrderByAggregateInput
    _max?: ReservationPassengerMaxOrderByAggregateInput
    _min?: ReservationPassengerMinOrderByAggregateInput
  }

  export type ReservationPassengerScalarWhereWithAggregatesInput = {
    AND?: ReservationPassengerScalarWhereWithAggregatesInput | ReservationPassengerScalarWhereWithAggregatesInput[]
    OR?: ReservationPassengerScalarWhereWithAggregatesInput[]
    NOT?: ReservationPassengerScalarWhereWithAggregatesInput | ReservationPassengerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    reservationId?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    flightClassId?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    firstName?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    lastName?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    documentNumber?: StringWithAggregatesFilter<"ReservationPassenger"> | string
    seatNumber?: StringNullableWithAggregatesFilter<"ReservationPassenger"> | string | null
  }

  export type PassengerServiceWhereInput = {
    AND?: PassengerServiceWhereInput | PassengerServiceWhereInput[]
    OR?: PassengerServiceWhereInput[]
    NOT?: PassengerServiceWhereInput | PassengerServiceWhereInput[]
    id?: StringFilter<"PassengerService"> | string
    passengerId?: StringFilter<"PassengerService"> | string
    serviceConfigId?: StringFilter<"PassengerService"> | string
    quantity?: IntFilter<"PassengerService"> | number
    unitPriceAtBooking?: DecimalFilter<"PassengerService"> | Decimal | DecimalJsLike | number | string
    passenger?: XOR<ReservationPassengerRelationFilter, ReservationPassengerWhereInput>
  }

  export type PassengerServiceOrderByWithRelationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    serviceConfigId?: SortOrder
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
    passenger?: ReservationPassengerOrderByWithRelationInput
  }

  export type PassengerServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PassengerServiceWhereInput | PassengerServiceWhereInput[]
    OR?: PassengerServiceWhereInput[]
    NOT?: PassengerServiceWhereInput | PassengerServiceWhereInput[]
    passengerId?: StringFilter<"PassengerService"> | string
    serviceConfigId?: StringFilter<"PassengerService"> | string
    quantity?: IntFilter<"PassengerService"> | number
    unitPriceAtBooking?: DecimalFilter<"PassengerService"> | Decimal | DecimalJsLike | number | string
    passenger?: XOR<ReservationPassengerRelationFilter, ReservationPassengerWhereInput>
  }, "id">

  export type PassengerServiceOrderByWithAggregationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    serviceConfigId?: SortOrder
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
    _count?: PassengerServiceCountOrderByAggregateInput
    _avg?: PassengerServiceAvgOrderByAggregateInput
    _max?: PassengerServiceMaxOrderByAggregateInput
    _min?: PassengerServiceMinOrderByAggregateInput
    _sum?: PassengerServiceSumOrderByAggregateInput
  }

  export type PassengerServiceScalarWhereWithAggregatesInput = {
    AND?: PassengerServiceScalarWhereWithAggregatesInput | PassengerServiceScalarWhereWithAggregatesInput[]
    OR?: PassengerServiceScalarWhereWithAggregatesInput[]
    NOT?: PassengerServiceScalarWhereWithAggregatesInput | PassengerServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PassengerService"> | string
    passengerId?: StringWithAggregatesFilter<"PassengerService"> | string
    serviceConfigId?: StringWithAggregatesFilter<"PassengerService"> | string
    quantity?: IntWithAggregatesFilter<"PassengerService"> | number
    unitPriceAtBooking?: DecimalWithAggregatesFilter<"PassengerService"> | Decimal | DecimalJsLike | number | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    code?: StringFilter<"Promotion"> | string
    discountType?: EnumDiscountTypeFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUsages?: IntNullableFilter<"Promotion"> | number | null
    currentUsages?: IntFilter<"Promotion"> | number
    isActive?: BoolFilter<"Promotion"> | boolean
    reservations?: ReservationListRelationFilter
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    maxUsages?: SortOrderInput | SortOrder
    currentUsages?: SortOrder
    isActive?: SortOrder
    reservations?: ReservationOrderByRelationAggregateInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    discountType?: EnumDiscountTypeFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUsages?: IntNullableFilter<"Promotion"> | number | null
    currentUsages?: IntFilter<"Promotion"> | number
    isActive?: BoolFilter<"Promotion"> | boolean
    reservations?: ReservationListRelationFilter
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    maxUsages?: SortOrderInput | SortOrder
    currentUsages?: SortOrder
    isActive?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    code?: StringWithAggregatesFilter<"Promotion"> | string
    discountType?: EnumDiscountTypeWithAggregatesFilter<"Promotion"> | $Enums.DiscountType
    discountValue?: DecimalWithAggregatesFilter<"Promotion"> | Decimal | DecimalJsLike | number | string
    maxUsages?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    currentUsages?: IntWithAggregatesFilter<"Promotion"> | number
    isActive?: BoolWithAggregatesFilter<"Promotion"> | boolean
  }

  export type BoardingPassWhereInput = {
    AND?: BoardingPassWhereInput | BoardingPassWhereInput[]
    OR?: BoardingPassWhereInput[]
    NOT?: BoardingPassWhereInput | BoardingPassWhereInput[]
    id?: StringFilter<"BoardingPass"> | string
    passengerId?: StringFilter<"BoardingPass"> | string
    segmentId?: StringFilter<"BoardingPass"> | string
    boardingCode?: StringFilter<"BoardingPass"> | string
    gate?: StringNullableFilter<"BoardingPass"> | string | null
    boardingGroup?: StringNullableFilter<"BoardingPass"> | string | null
    checkInAt?: DateTimeNullableFilter<"BoardingPass"> | Date | string | null
    status?: EnumCheckInStatusFilter<"BoardingPass"> | $Enums.CheckInStatus
    passenger?: XOR<ReservationPassengerRelationFilter, ReservationPassengerWhereInput>
  }

  export type BoardingPassOrderByWithRelationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    segmentId?: SortOrder
    boardingCode?: SortOrder
    gate?: SortOrderInput | SortOrder
    boardingGroup?: SortOrderInput | SortOrder
    checkInAt?: SortOrderInput | SortOrder
    status?: SortOrder
    passenger?: ReservationPassengerOrderByWithRelationInput
  }

  export type BoardingPassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    passengerId?: string
    boardingCode?: string
    AND?: BoardingPassWhereInput | BoardingPassWhereInput[]
    OR?: BoardingPassWhereInput[]
    NOT?: BoardingPassWhereInput | BoardingPassWhereInput[]
    segmentId?: StringFilter<"BoardingPass"> | string
    gate?: StringNullableFilter<"BoardingPass"> | string | null
    boardingGroup?: StringNullableFilter<"BoardingPass"> | string | null
    checkInAt?: DateTimeNullableFilter<"BoardingPass"> | Date | string | null
    status?: EnumCheckInStatusFilter<"BoardingPass"> | $Enums.CheckInStatus
    passenger?: XOR<ReservationPassengerRelationFilter, ReservationPassengerWhereInput>
  }, "id" | "passengerId" | "boardingCode">

  export type BoardingPassOrderByWithAggregationInput = {
    id?: SortOrder
    passengerId?: SortOrder
    segmentId?: SortOrder
    boardingCode?: SortOrder
    gate?: SortOrderInput | SortOrder
    boardingGroup?: SortOrderInput | SortOrder
    checkInAt?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: BoardingPassCountOrderByAggregateInput
    _max?: BoardingPassMaxOrderByAggregateInput
    _min?: BoardingPassMinOrderByAggregateInput
  }

  export type BoardingPassScalarWhereWithAggregatesInput = {
    AND?: BoardingPassScalarWhereWithAggregatesInput | BoardingPassScalarWhereWithAggregatesInput[]
    OR?: BoardingPassScalarWhereWithAggregatesInput[]
    NOT?: BoardingPassScalarWhereWithAggregatesInput | BoardingPassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BoardingPass"> | string
    passengerId?: StringWithAggregatesFilter<"BoardingPass"> | string
    segmentId?: StringWithAggregatesFilter<"BoardingPass"> | string
    boardingCode?: StringWithAggregatesFilter<"BoardingPass"> | string
    gate?: StringNullableWithAggregatesFilter<"BoardingPass"> | string | null
    boardingGroup?: StringNullableWithAggregatesFilter<"BoardingPass"> | string | null
    checkInAt?: DateTimeNullableWithAggregatesFilter<"BoardingPass"> | Date | string | null
    status?: EnumCheckInStatusWithAggregatesFilter<"BoardingPass"> | $Enums.CheckInStatus
  }

  export type ReservationCreateInput = {
    id?: string
    userId: string
    flightId: string
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    promotion?: PromotionCreateNestedOneWithoutReservationsInput
    passengers?: ReservationPassengerCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: string
    userId: string
    flightId: string
    promotionId?: string | null
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    passengers?: ReservationPassengerUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: PromotionUpdateOneWithoutReservationsNestedInput
    passengers?: ReservationPassengerUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    promotionId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: ReservationPassengerUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: string
    userId: string
    flightId: string
    promotionId?: string | null
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
  }

  export type ReservationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    promotionId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservationPassengerCreateInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    reservation: ReservationCreateNestedOneWithoutPassengersInput
    extraServices?: PassengerServiceCreateNestedManyWithoutPassengerInput
    boardingPasses?: BoardingPassCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerUncheckedCreateInput = {
    id?: string
    reservationId: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    extraServices?: PassengerServiceUncheckedCreateNestedManyWithoutPassengerInput
    boardingPasses?: BoardingPassUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneRequiredWithoutPassengersNestedInput
    extraServices?: PassengerServiceUpdateManyWithoutPassengerNestedInput
    boardingPasses?: BoardingPassUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    extraServices?: PassengerServiceUncheckedUpdateManyWithoutPassengerNestedInput
    boardingPasses?: BoardingPassUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerCreateManyInput = {
    id?: string
    reservationId: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
  }

  export type ReservationPassengerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservationPassengerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PassengerServiceCreateInput = {
    id?: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
    passenger: ReservationPassengerCreateNestedOneWithoutExtraServicesInput
  }

  export type PassengerServiceUncheckedCreateInput = {
    id?: string
    passengerId: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    passenger?: ReservationPassengerUpdateOneRequiredWithoutExtraServicesNestedInput
  }

  export type PassengerServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceCreateManyInput = {
    id?: string
    passengerId: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PromotionCreateInput = {
    id?: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal | DecimalJsLike | number | string
    maxUsages?: number | null
    currentUsages?: number
    isActive?: boolean
    reservations?: ReservationCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal | DecimalJsLike | number | string
    maxUsages?: number | null
    currentUsages?: number
    isActive?: boolean
    reservations?: ReservationUncheckedCreateNestedManyWithoutPromotionInput
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reservations?: ReservationUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    reservations?: ReservationUncheckedUpdateManyWithoutPromotionNestedInput
  }

  export type PromotionCreateManyInput = {
    id?: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal | DecimalJsLike | number | string
    maxUsages?: number | null
    currentUsages?: number
    isActive?: boolean
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardingPassCreateInput = {
    id?: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
    passenger: ReservationPassengerCreateNestedOneWithoutBoardingPassesInput
  }

  export type BoardingPassUncheckedCreateInput = {
    id?: string
    passengerId: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
  }

  export type BoardingPassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
    passenger?: ReservationPassengerUpdateOneRequiredWithoutBoardingPassesNestedInput
  }

  export type BoardingPassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
  }

  export type BoardingPassCreateManyInput = {
    id?: string
    passengerId: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
  }

  export type BoardingPassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
  }

  export type BoardingPassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    passengerId?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
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

  export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
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

  export type PromotionNullableRelationFilter = {
    is?: PromotionWhereInput | null
    isNot?: PromotionWhereInput | null
  }

  export type ReservationPassengerListRelationFilter = {
    every?: ReservationPassengerWhereInput
    some?: ReservationPassengerWhereInput
    none?: ReservationPassengerWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReservationPassengerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    promotionId?: SortOrder
    reservationCode?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    promotionId?: SortOrder
    reservationCode?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    flightId?: SortOrder
    promotionId?: SortOrder
    reservationCode?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    totalAmount?: SortOrder
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

  export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
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

  export type ReservationRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type PassengerServiceListRelationFilter = {
    every?: PassengerServiceWhereInput
    some?: PassengerServiceWhereInput
    none?: PassengerServiceWhereInput
  }

  export type BoardingPassListRelationFilter = {
    every?: BoardingPassWhereInput
    some?: BoardingPassWhereInput
    none?: BoardingPassWhereInput
  }

  export type PassengerServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardingPassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationPassengerFlightClassIdSeatNumberCompoundUniqueInput = {
    flightClassId: string
    seatNumber: string
  }

  export type ReservationPassengerCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    flightClassId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentNumber?: SortOrder
    seatNumber?: SortOrder
  }

  export type ReservationPassengerMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    flightClassId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentNumber?: SortOrder
    seatNumber?: SortOrder
  }

  export type ReservationPassengerMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    flightClassId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    documentNumber?: SortOrder
    seatNumber?: SortOrder
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

  export type ReservationPassengerRelationFilter = {
    is?: ReservationPassengerWhereInput
    isNot?: ReservationPassengerWhereInput
  }

  export type PassengerServiceCountOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    serviceConfigId?: SortOrder
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
  }

  export type PassengerServiceAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
  }

  export type PassengerServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    serviceConfigId?: SortOrder
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
  }

  export type PassengerServiceMinOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    serviceConfigId?: SortOrder
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
  }

  export type PassengerServiceSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPriceAtBooking?: SortOrder
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

  export type EnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    maxUsages?: SortOrder
    currentUsages?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discountValue?: SortOrder
    maxUsages?: SortOrder
    currentUsages?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    maxUsages?: SortOrder
    currentUsages?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    discountType?: SortOrder
    discountValue?: SortOrder
    maxUsages?: SortOrder
    currentUsages?: SortOrder
    isActive?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discountValue?: SortOrder
    maxUsages?: SortOrder
    currentUsages?: SortOrder
  }

  export type EnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumCheckInStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusFilter<$PrismaModel> | $Enums.CheckInStatus
  }

  export type BoardingPassCountOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    segmentId?: SortOrder
    boardingCode?: SortOrder
    gate?: SortOrder
    boardingGroup?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
  }

  export type BoardingPassMaxOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    segmentId?: SortOrder
    boardingCode?: SortOrder
    gate?: SortOrder
    boardingGroup?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
  }

  export type BoardingPassMinOrderByAggregateInput = {
    id?: SortOrder
    passengerId?: SortOrder
    segmentId?: SortOrder
    boardingCode?: SortOrder
    gate?: SortOrder
    boardingGroup?: SortOrder
    checkInAt?: SortOrder
    status?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumCheckInStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckInStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckInStatusFilter<$PrismaModel>
  }

  export type PromotionCreateNestedOneWithoutReservationsInput = {
    create?: XOR<PromotionCreateWithoutReservationsInput, PromotionUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutReservationsInput
    connect?: PromotionWhereUniqueInput
  }

  export type ReservationPassengerCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput> | ReservationPassengerCreateWithoutReservationInput[] | ReservationPassengerUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutReservationInput | ReservationPassengerCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationPassengerCreateManyReservationInputEnvelope
    connect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
  }

  export type ReservationPassengerUncheckedCreateNestedManyWithoutReservationInput = {
    create?: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput> | ReservationPassengerCreateWithoutReservationInput[] | ReservationPassengerUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutReservationInput | ReservationPassengerCreateOrConnectWithoutReservationInput[]
    createMany?: ReservationPassengerCreateManyReservationInputEnvelope
    connect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PromotionUpdateOneWithoutReservationsNestedInput = {
    create?: XOR<PromotionCreateWithoutReservationsInput, PromotionUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: PromotionCreateOrConnectWithoutReservationsInput
    upsert?: PromotionUpsertWithoutReservationsInput
    disconnect?: PromotionWhereInput | boolean
    delete?: PromotionWhereInput | boolean
    connect?: PromotionWhereUniqueInput
    update?: XOR<XOR<PromotionUpdateToOneWithWhereWithoutReservationsInput, PromotionUpdateWithoutReservationsInput>, PromotionUncheckedUpdateWithoutReservationsInput>
  }

  export type ReservationPassengerUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput> | ReservationPassengerCreateWithoutReservationInput[] | ReservationPassengerUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutReservationInput | ReservationPassengerCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationPassengerUpsertWithWhereUniqueWithoutReservationInput | ReservationPassengerUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationPassengerCreateManyReservationInputEnvelope
    set?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    disconnect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    delete?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    connect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    update?: ReservationPassengerUpdateWithWhereUniqueWithoutReservationInput | ReservationPassengerUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationPassengerUpdateManyWithWhereWithoutReservationInput | ReservationPassengerUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationPassengerScalarWhereInput | ReservationPassengerScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReservationPassengerUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput> | ReservationPassengerCreateWithoutReservationInput[] | ReservationPassengerUncheckedCreateWithoutReservationInput[]
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutReservationInput | ReservationPassengerCreateOrConnectWithoutReservationInput[]
    upsert?: ReservationPassengerUpsertWithWhereUniqueWithoutReservationInput | ReservationPassengerUpsertWithWhereUniqueWithoutReservationInput[]
    createMany?: ReservationPassengerCreateManyReservationInputEnvelope
    set?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    disconnect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    delete?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    connect?: ReservationPassengerWhereUniqueInput | ReservationPassengerWhereUniqueInput[]
    update?: ReservationPassengerUpdateWithWhereUniqueWithoutReservationInput | ReservationPassengerUpdateWithWhereUniqueWithoutReservationInput[]
    updateMany?: ReservationPassengerUpdateManyWithWhereWithoutReservationInput | ReservationPassengerUpdateManyWithWhereWithoutReservationInput[]
    deleteMany?: ReservationPassengerScalarWhereInput | ReservationPassengerScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutPassengersInput = {
    create?: XOR<ReservationCreateWithoutPassengersInput, ReservationUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPassengersInput
    connect?: ReservationWhereUniqueInput
  }

  export type PassengerServiceCreateNestedManyWithoutPassengerInput = {
    create?: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput> | PassengerServiceCreateWithoutPassengerInput[] | PassengerServiceUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: PassengerServiceCreateOrConnectWithoutPassengerInput | PassengerServiceCreateOrConnectWithoutPassengerInput[]
    createMany?: PassengerServiceCreateManyPassengerInputEnvelope
    connect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
  }

  export type BoardingPassCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput> | BoardingPassCreateWithoutPassengerInput[] | BoardingPassUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BoardingPassCreateOrConnectWithoutPassengerInput | BoardingPassCreateOrConnectWithoutPassengerInput[]
    createMany?: BoardingPassCreateManyPassengerInputEnvelope
    connect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
  }

  export type PassengerServiceUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput> | PassengerServiceCreateWithoutPassengerInput[] | PassengerServiceUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: PassengerServiceCreateOrConnectWithoutPassengerInput | PassengerServiceCreateOrConnectWithoutPassengerInput[]
    createMany?: PassengerServiceCreateManyPassengerInputEnvelope
    connect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
  }

  export type BoardingPassUncheckedCreateNestedManyWithoutPassengerInput = {
    create?: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput> | BoardingPassCreateWithoutPassengerInput[] | BoardingPassUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BoardingPassCreateOrConnectWithoutPassengerInput | BoardingPassCreateOrConnectWithoutPassengerInput[]
    createMany?: BoardingPassCreateManyPassengerInputEnvelope
    connect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
  }

  export type ReservationUpdateOneRequiredWithoutPassengersNestedInput = {
    create?: XOR<ReservationCreateWithoutPassengersInput, ReservationUncheckedCreateWithoutPassengersInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutPassengersInput
    upsert?: ReservationUpsertWithoutPassengersInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutPassengersInput, ReservationUpdateWithoutPassengersInput>, ReservationUncheckedUpdateWithoutPassengersInput>
  }

  export type PassengerServiceUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput> | PassengerServiceCreateWithoutPassengerInput[] | PassengerServiceUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: PassengerServiceCreateOrConnectWithoutPassengerInput | PassengerServiceCreateOrConnectWithoutPassengerInput[]
    upsert?: PassengerServiceUpsertWithWhereUniqueWithoutPassengerInput | PassengerServiceUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: PassengerServiceCreateManyPassengerInputEnvelope
    set?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    disconnect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    delete?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    connect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    update?: PassengerServiceUpdateWithWhereUniqueWithoutPassengerInput | PassengerServiceUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: PassengerServiceUpdateManyWithWhereWithoutPassengerInput | PassengerServiceUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: PassengerServiceScalarWhereInput | PassengerServiceScalarWhereInput[]
  }

  export type BoardingPassUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput> | BoardingPassCreateWithoutPassengerInput[] | BoardingPassUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BoardingPassCreateOrConnectWithoutPassengerInput | BoardingPassCreateOrConnectWithoutPassengerInput[]
    upsert?: BoardingPassUpsertWithWhereUniqueWithoutPassengerInput | BoardingPassUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BoardingPassCreateManyPassengerInputEnvelope
    set?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    disconnect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    delete?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    connect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    update?: BoardingPassUpdateWithWhereUniqueWithoutPassengerInput | BoardingPassUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BoardingPassUpdateManyWithWhereWithoutPassengerInput | BoardingPassUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BoardingPassScalarWhereInput | BoardingPassScalarWhereInput[]
  }

  export type PassengerServiceUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput> | PassengerServiceCreateWithoutPassengerInput[] | PassengerServiceUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: PassengerServiceCreateOrConnectWithoutPassengerInput | PassengerServiceCreateOrConnectWithoutPassengerInput[]
    upsert?: PassengerServiceUpsertWithWhereUniqueWithoutPassengerInput | PassengerServiceUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: PassengerServiceCreateManyPassengerInputEnvelope
    set?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    disconnect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    delete?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    connect?: PassengerServiceWhereUniqueInput | PassengerServiceWhereUniqueInput[]
    update?: PassengerServiceUpdateWithWhereUniqueWithoutPassengerInput | PassengerServiceUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: PassengerServiceUpdateManyWithWhereWithoutPassengerInput | PassengerServiceUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: PassengerServiceScalarWhereInput | PassengerServiceScalarWhereInput[]
  }

  export type BoardingPassUncheckedUpdateManyWithoutPassengerNestedInput = {
    create?: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput> | BoardingPassCreateWithoutPassengerInput[] | BoardingPassUncheckedCreateWithoutPassengerInput[]
    connectOrCreate?: BoardingPassCreateOrConnectWithoutPassengerInput | BoardingPassCreateOrConnectWithoutPassengerInput[]
    upsert?: BoardingPassUpsertWithWhereUniqueWithoutPassengerInput | BoardingPassUpsertWithWhereUniqueWithoutPassengerInput[]
    createMany?: BoardingPassCreateManyPassengerInputEnvelope
    set?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    disconnect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    delete?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    connect?: BoardingPassWhereUniqueInput | BoardingPassWhereUniqueInput[]
    update?: BoardingPassUpdateWithWhereUniqueWithoutPassengerInput | BoardingPassUpdateWithWhereUniqueWithoutPassengerInput[]
    updateMany?: BoardingPassUpdateManyWithWhereWithoutPassengerInput | BoardingPassUpdateManyWithWhereWithoutPassengerInput[]
    deleteMany?: BoardingPassScalarWhereInput | BoardingPassScalarWhereInput[]
  }

  export type ReservationPassengerCreateNestedOneWithoutExtraServicesInput = {
    create?: XOR<ReservationPassengerCreateWithoutExtraServicesInput, ReservationPassengerUncheckedCreateWithoutExtraServicesInput>
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutExtraServicesInput
    connect?: ReservationPassengerWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservationPassengerUpdateOneRequiredWithoutExtraServicesNestedInput = {
    create?: XOR<ReservationPassengerCreateWithoutExtraServicesInput, ReservationPassengerUncheckedCreateWithoutExtraServicesInput>
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutExtraServicesInput
    upsert?: ReservationPassengerUpsertWithoutExtraServicesInput
    connect?: ReservationPassengerWhereUniqueInput
    update?: XOR<XOR<ReservationPassengerUpdateToOneWithWhereWithoutExtraServicesInput, ReservationPassengerUpdateWithoutExtraServicesInput>, ReservationPassengerUncheckedUpdateWithoutExtraServicesInput>
  }

  export type ReservationCreateNestedManyWithoutPromotionInput = {
    create?: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput> | ReservationCreateWithoutPromotionInput[] | ReservationUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPromotionInput | ReservationCreateOrConnectWithoutPromotionInput[]
    createMany?: ReservationCreateManyPromotionInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutPromotionInput = {
    create?: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput> | ReservationCreateWithoutPromotionInput[] | ReservationUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPromotionInput | ReservationCreateOrConnectWithoutPromotionInput[]
    createMany?: ReservationCreateManyPromotionInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type EnumDiscountTypeFieldUpdateOperationsInput = {
    set?: $Enums.DiscountType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ReservationUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput> | ReservationCreateWithoutPromotionInput[] | ReservationUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPromotionInput | ReservationCreateOrConnectWithoutPromotionInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPromotionInput | ReservationUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: ReservationCreateManyPromotionInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPromotionInput | ReservationUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPromotionInput | ReservationUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutPromotionNestedInput = {
    create?: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput> | ReservationCreateWithoutPromotionInput[] | ReservationUncheckedCreateWithoutPromotionInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutPromotionInput | ReservationCreateOrConnectWithoutPromotionInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutPromotionInput | ReservationUpsertWithWhereUniqueWithoutPromotionInput[]
    createMany?: ReservationCreateManyPromotionInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutPromotionInput | ReservationUpdateWithWhereUniqueWithoutPromotionInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutPromotionInput | ReservationUpdateManyWithWhereWithoutPromotionInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type ReservationPassengerCreateNestedOneWithoutBoardingPassesInput = {
    create?: XOR<ReservationPassengerCreateWithoutBoardingPassesInput, ReservationPassengerUncheckedCreateWithoutBoardingPassesInput>
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutBoardingPassesInput
    connect?: ReservationPassengerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumCheckInStatusFieldUpdateOperationsInput = {
    set?: $Enums.CheckInStatus
  }

  export type ReservationPassengerUpdateOneRequiredWithoutBoardingPassesNestedInput = {
    create?: XOR<ReservationPassengerCreateWithoutBoardingPassesInput, ReservationPassengerUncheckedCreateWithoutBoardingPassesInput>
    connectOrCreate?: ReservationPassengerCreateOrConnectWithoutBoardingPassesInput
    upsert?: ReservationPassengerUpsertWithoutBoardingPassesInput
    connect?: ReservationPassengerWhereUniqueInput
    update?: XOR<XOR<ReservationPassengerUpdateToOneWithWhereWithoutBoardingPassesInput, ReservationPassengerUpdateWithoutBoardingPassesInput>, ReservationPassengerUncheckedUpdateWithoutBoardingPassesInput>
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

  export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus
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

  export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | EnumReservationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReservationStatus[] | ListEnumReservationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReservationStatusFilter<$PrismaModel>
    _max?: NestedEnumReservationStatusFilter<$PrismaModel>
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

  export type NestedEnumDiscountTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeFilter<$PrismaModel> | $Enums.DiscountType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DiscountType | EnumDiscountTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.DiscountType[] | ListEnumDiscountTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumDiscountTypeWithAggregatesFilter<$PrismaModel> | $Enums.DiscountType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDiscountTypeFilter<$PrismaModel>
    _max?: NestedEnumDiscountTypeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumCheckInStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusFilter<$PrismaModel> | $Enums.CheckInStatus
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CheckInStatus | EnumCheckInStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CheckInStatus[] | ListEnumCheckInStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCheckInStatusWithAggregatesFilter<$PrismaModel> | $Enums.CheckInStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCheckInStatusFilter<$PrismaModel>
    _max?: NestedEnumCheckInStatusFilter<$PrismaModel>
  }

  export type PromotionCreateWithoutReservationsInput = {
    id?: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal | DecimalJsLike | number | string
    maxUsages?: number | null
    currentUsages?: number
    isActive?: boolean
  }

  export type PromotionUncheckedCreateWithoutReservationsInput = {
    id?: string
    code: string
    discountType: $Enums.DiscountType
    discountValue: Decimal | DecimalJsLike | number | string
    maxUsages?: number | null
    currentUsages?: number
    isActive?: boolean
  }

  export type PromotionCreateOrConnectWithoutReservationsInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutReservationsInput, PromotionUncheckedCreateWithoutReservationsInput>
  }

  export type ReservationPassengerCreateWithoutReservationInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    extraServices?: PassengerServiceCreateNestedManyWithoutPassengerInput
    boardingPasses?: BoardingPassCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerUncheckedCreateWithoutReservationInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    extraServices?: PassengerServiceUncheckedCreateNestedManyWithoutPassengerInput
    boardingPasses?: BoardingPassUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerCreateOrConnectWithoutReservationInput = {
    where: ReservationPassengerWhereUniqueInput
    create: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput>
  }

  export type ReservationPassengerCreateManyReservationInputEnvelope = {
    data: ReservationPassengerCreateManyReservationInput | ReservationPassengerCreateManyReservationInput[]
    skipDuplicates?: boolean
  }

  export type PromotionUpsertWithoutReservationsInput = {
    update: XOR<PromotionUpdateWithoutReservationsInput, PromotionUncheckedUpdateWithoutReservationsInput>
    create: XOR<PromotionCreateWithoutReservationsInput, PromotionUncheckedCreateWithoutReservationsInput>
    where?: PromotionWhereInput
  }

  export type PromotionUpdateToOneWithWhereWithoutReservationsInput = {
    where?: PromotionWhereInput
    data: XOR<PromotionUpdateWithoutReservationsInput, PromotionUncheckedUpdateWithoutReservationsInput>
  }

  export type PromotionUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PromotionUncheckedUpdateWithoutReservationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountType?: EnumDiscountTypeFieldUpdateOperationsInput | $Enums.DiscountType
    discountValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    maxUsages?: NullableIntFieldUpdateOperationsInput | number | null
    currentUsages?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationPassengerUpsertWithWhereUniqueWithoutReservationInput = {
    where: ReservationPassengerWhereUniqueInput
    update: XOR<ReservationPassengerUpdateWithoutReservationInput, ReservationPassengerUncheckedUpdateWithoutReservationInput>
    create: XOR<ReservationPassengerCreateWithoutReservationInput, ReservationPassengerUncheckedCreateWithoutReservationInput>
  }

  export type ReservationPassengerUpdateWithWhereUniqueWithoutReservationInput = {
    where: ReservationPassengerWhereUniqueInput
    data: XOR<ReservationPassengerUpdateWithoutReservationInput, ReservationPassengerUncheckedUpdateWithoutReservationInput>
  }

  export type ReservationPassengerUpdateManyWithWhereWithoutReservationInput = {
    where: ReservationPassengerScalarWhereInput
    data: XOR<ReservationPassengerUpdateManyMutationInput, ReservationPassengerUncheckedUpdateManyWithoutReservationInput>
  }

  export type ReservationPassengerScalarWhereInput = {
    AND?: ReservationPassengerScalarWhereInput | ReservationPassengerScalarWhereInput[]
    OR?: ReservationPassengerScalarWhereInput[]
    NOT?: ReservationPassengerScalarWhereInput | ReservationPassengerScalarWhereInput[]
    id?: StringFilter<"ReservationPassenger"> | string
    reservationId?: StringFilter<"ReservationPassenger"> | string
    flightClassId?: StringFilter<"ReservationPassenger"> | string
    firstName?: StringFilter<"ReservationPassenger"> | string
    lastName?: StringFilter<"ReservationPassenger"> | string
    documentNumber?: StringFilter<"ReservationPassenger"> | string
    seatNumber?: StringNullableFilter<"ReservationPassenger"> | string | null
  }

  export type ReservationCreateWithoutPassengersInput = {
    id?: string
    userId: string
    flightId: string
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    promotion?: PromotionCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutPassengersInput = {
    id?: string
    userId: string
    flightId: string
    promotionId?: string | null
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
  }

  export type ReservationCreateOrConnectWithoutPassengersInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPassengersInput, ReservationUncheckedCreateWithoutPassengersInput>
  }

  export type PassengerServiceCreateWithoutPassengerInput = {
    id?: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUncheckedCreateWithoutPassengerInput = {
    id?: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceCreateOrConnectWithoutPassengerInput = {
    where: PassengerServiceWhereUniqueInput
    create: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput>
  }

  export type PassengerServiceCreateManyPassengerInputEnvelope = {
    data: PassengerServiceCreateManyPassengerInput | PassengerServiceCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type BoardingPassCreateWithoutPassengerInput = {
    id?: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
  }

  export type BoardingPassUncheckedCreateWithoutPassengerInput = {
    id?: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
  }

  export type BoardingPassCreateOrConnectWithoutPassengerInput = {
    where: BoardingPassWhereUniqueInput
    create: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput>
  }

  export type BoardingPassCreateManyPassengerInputEnvelope = {
    data: BoardingPassCreateManyPassengerInput | BoardingPassCreateManyPassengerInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithoutPassengersInput = {
    update: XOR<ReservationUpdateWithoutPassengersInput, ReservationUncheckedUpdateWithoutPassengersInput>
    create: XOR<ReservationCreateWithoutPassengersInput, ReservationUncheckedCreateWithoutPassengersInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutPassengersInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutPassengersInput, ReservationUncheckedUpdateWithoutPassengersInput>
  }

  export type ReservationUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    promotion?: PromotionUpdateOneWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPassengersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    promotionId?: NullableStringFieldUpdateOperationsInput | string | null
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PassengerServiceUpsertWithWhereUniqueWithoutPassengerInput = {
    where: PassengerServiceWhereUniqueInput
    update: XOR<PassengerServiceUpdateWithoutPassengerInput, PassengerServiceUncheckedUpdateWithoutPassengerInput>
    create: XOR<PassengerServiceCreateWithoutPassengerInput, PassengerServiceUncheckedCreateWithoutPassengerInput>
  }

  export type PassengerServiceUpdateWithWhereUniqueWithoutPassengerInput = {
    where: PassengerServiceWhereUniqueInput
    data: XOR<PassengerServiceUpdateWithoutPassengerInput, PassengerServiceUncheckedUpdateWithoutPassengerInput>
  }

  export type PassengerServiceUpdateManyWithWhereWithoutPassengerInput = {
    where: PassengerServiceScalarWhereInput
    data: XOR<PassengerServiceUpdateManyMutationInput, PassengerServiceUncheckedUpdateManyWithoutPassengerInput>
  }

  export type PassengerServiceScalarWhereInput = {
    AND?: PassengerServiceScalarWhereInput | PassengerServiceScalarWhereInput[]
    OR?: PassengerServiceScalarWhereInput[]
    NOT?: PassengerServiceScalarWhereInput | PassengerServiceScalarWhereInput[]
    id?: StringFilter<"PassengerService"> | string
    passengerId?: StringFilter<"PassengerService"> | string
    serviceConfigId?: StringFilter<"PassengerService"> | string
    quantity?: IntFilter<"PassengerService"> | number
    unitPriceAtBooking?: DecimalFilter<"PassengerService"> | Decimal | DecimalJsLike | number | string
  }

  export type BoardingPassUpsertWithWhereUniqueWithoutPassengerInput = {
    where: BoardingPassWhereUniqueInput
    update: XOR<BoardingPassUpdateWithoutPassengerInput, BoardingPassUncheckedUpdateWithoutPassengerInput>
    create: XOR<BoardingPassCreateWithoutPassengerInput, BoardingPassUncheckedCreateWithoutPassengerInput>
  }

  export type BoardingPassUpdateWithWhereUniqueWithoutPassengerInput = {
    where: BoardingPassWhereUniqueInput
    data: XOR<BoardingPassUpdateWithoutPassengerInput, BoardingPassUncheckedUpdateWithoutPassengerInput>
  }

  export type BoardingPassUpdateManyWithWhereWithoutPassengerInput = {
    where: BoardingPassScalarWhereInput
    data: XOR<BoardingPassUpdateManyMutationInput, BoardingPassUncheckedUpdateManyWithoutPassengerInput>
  }

  export type BoardingPassScalarWhereInput = {
    AND?: BoardingPassScalarWhereInput | BoardingPassScalarWhereInput[]
    OR?: BoardingPassScalarWhereInput[]
    NOT?: BoardingPassScalarWhereInput | BoardingPassScalarWhereInput[]
    id?: StringFilter<"BoardingPass"> | string
    passengerId?: StringFilter<"BoardingPass"> | string
    segmentId?: StringFilter<"BoardingPass"> | string
    boardingCode?: StringFilter<"BoardingPass"> | string
    gate?: StringNullableFilter<"BoardingPass"> | string | null
    boardingGroup?: StringNullableFilter<"BoardingPass"> | string | null
    checkInAt?: DateTimeNullableFilter<"BoardingPass"> | Date | string | null
    status?: EnumCheckInStatusFilter<"BoardingPass"> | $Enums.CheckInStatus
  }

  export type ReservationPassengerCreateWithoutExtraServicesInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    reservation: ReservationCreateNestedOneWithoutPassengersInput
    boardingPasses?: BoardingPassCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerUncheckedCreateWithoutExtraServicesInput = {
    id?: string
    reservationId: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    boardingPasses?: BoardingPassUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerCreateOrConnectWithoutExtraServicesInput = {
    where: ReservationPassengerWhereUniqueInput
    create: XOR<ReservationPassengerCreateWithoutExtraServicesInput, ReservationPassengerUncheckedCreateWithoutExtraServicesInput>
  }

  export type ReservationPassengerUpsertWithoutExtraServicesInput = {
    update: XOR<ReservationPassengerUpdateWithoutExtraServicesInput, ReservationPassengerUncheckedUpdateWithoutExtraServicesInput>
    create: XOR<ReservationPassengerCreateWithoutExtraServicesInput, ReservationPassengerUncheckedCreateWithoutExtraServicesInput>
    where?: ReservationPassengerWhereInput
  }

  export type ReservationPassengerUpdateToOneWithWhereWithoutExtraServicesInput = {
    where?: ReservationPassengerWhereInput
    data: XOR<ReservationPassengerUpdateWithoutExtraServicesInput, ReservationPassengerUncheckedUpdateWithoutExtraServicesInput>
  }

  export type ReservationPassengerUpdateWithoutExtraServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneRequiredWithoutPassengersNestedInput
    boardingPasses?: BoardingPassUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerUncheckedUpdateWithoutExtraServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    boardingPasses?: BoardingPassUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationCreateWithoutPromotionInput = {
    id?: string
    userId: string
    flightId: string
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    passengers?: ReservationPassengerCreateNestedManyWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutPromotionInput = {
    id?: string
    userId: string
    flightId: string
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
    passengers?: ReservationPassengerUncheckedCreateNestedManyWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutPromotionInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput>
  }

  export type ReservationCreateManyPromotionInputEnvelope = {
    data: ReservationCreateManyPromotionInput | ReservationCreateManyPromotionInput[]
    skipDuplicates?: boolean
  }

  export type ReservationUpsertWithWhereUniqueWithoutPromotionInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutPromotionInput, ReservationUncheckedUpdateWithoutPromotionInput>
    create: XOR<ReservationCreateWithoutPromotionInput, ReservationUncheckedCreateWithoutPromotionInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutPromotionInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutPromotionInput, ReservationUncheckedUpdateWithoutPromotionInput>
  }

  export type ReservationUpdateManyWithWhereWithoutPromotionInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutPromotionInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: StringFilter<"Reservation"> | string
    userId?: StringFilter<"Reservation"> | string
    flightId?: StringFilter<"Reservation"> | string
    promotionId?: StringNullableFilter<"Reservation"> | string | null
    reservationCode?: StringFilter<"Reservation"> | string
    totalAmount?: DecimalFilter<"Reservation"> | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
  }

  export type ReservationPassengerCreateWithoutBoardingPassesInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    reservation: ReservationCreateNestedOneWithoutPassengersInput
    extraServices?: PassengerServiceCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerUncheckedCreateWithoutBoardingPassesInput = {
    id?: string
    reservationId: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
    extraServices?: PassengerServiceUncheckedCreateNestedManyWithoutPassengerInput
  }

  export type ReservationPassengerCreateOrConnectWithoutBoardingPassesInput = {
    where: ReservationPassengerWhereUniqueInput
    create: XOR<ReservationPassengerCreateWithoutBoardingPassesInput, ReservationPassengerUncheckedCreateWithoutBoardingPassesInput>
  }

  export type ReservationPassengerUpsertWithoutBoardingPassesInput = {
    update: XOR<ReservationPassengerUpdateWithoutBoardingPassesInput, ReservationPassengerUncheckedUpdateWithoutBoardingPassesInput>
    create: XOR<ReservationPassengerCreateWithoutBoardingPassesInput, ReservationPassengerUncheckedCreateWithoutBoardingPassesInput>
    where?: ReservationPassengerWhereInput
  }

  export type ReservationPassengerUpdateToOneWithWhereWithoutBoardingPassesInput = {
    where?: ReservationPassengerWhereInput
    data: XOR<ReservationPassengerUpdateWithoutBoardingPassesInput, ReservationPassengerUncheckedUpdateWithoutBoardingPassesInput>
  }

  export type ReservationPassengerUpdateWithoutBoardingPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reservation?: ReservationUpdateOneRequiredWithoutPassengersNestedInput
    extraServices?: PassengerServiceUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerUncheckedUpdateWithoutBoardingPassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    extraServices?: PassengerServiceUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerCreateManyReservationInput = {
    id?: string
    flightClassId: string
    firstName: string
    lastName: string
    documentNumber: string
    seatNumber?: string | null
  }

  export type ReservationPassengerUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    extraServices?: PassengerServiceUpdateManyWithoutPassengerNestedInput
    boardingPasses?: BoardingPassUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerUncheckedUpdateWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
    extraServices?: PassengerServiceUncheckedUpdateManyWithoutPassengerNestedInput
    boardingPasses?: BoardingPassUncheckedUpdateManyWithoutPassengerNestedInput
  }

  export type ReservationPassengerUncheckedUpdateManyWithoutReservationInput = {
    id?: StringFieldUpdateOperationsInput | string
    flightClassId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    documentNumber?: StringFieldUpdateOperationsInput | string
    seatNumber?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PassengerServiceCreateManyPassengerInput = {
    id?: string
    serviceConfigId: string
    quantity?: number
    unitPriceAtBooking: Decimal | DecimalJsLike | number | string
  }

  export type BoardingPassCreateManyPassengerInput = {
    id?: string
    segmentId: string
    boardingCode: string
    gate?: string | null
    boardingGroup?: string | null
    checkInAt?: Date | string | null
    status?: $Enums.CheckInStatus
  }

  export type PassengerServiceUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PassengerServiceUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    serviceConfigId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unitPriceAtBooking?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type BoardingPassUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
  }

  export type BoardingPassUncheckedUpdateWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
  }

  export type BoardingPassUncheckedUpdateManyWithoutPassengerInput = {
    id?: StringFieldUpdateOperationsInput | string
    segmentId?: StringFieldUpdateOperationsInput | string
    boardingCode?: StringFieldUpdateOperationsInput | string
    gate?: NullableStringFieldUpdateOperationsInput | string | null
    boardingGroup?: NullableStringFieldUpdateOperationsInput | string | null
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumCheckInStatusFieldUpdateOperationsInput | $Enums.CheckInStatus
  }

  export type ReservationCreateManyPromotionInput = {
    id?: string
    userId: string
    flightId: string
    reservationCode: string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.ReservationStatus
    createdAt?: Date | string
  }

  export type ReservationUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: ReservationPassengerUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    passengers?: ReservationPassengerUncheckedUpdateManyWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutPromotionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    flightId?: StringFieldUpdateOperationsInput | string
    reservationCode?: StringFieldUpdateOperationsInput | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ReservationCountOutputTypeDefaultArgs instead
     */
    export type ReservationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationPassengerCountOutputTypeDefaultArgs instead
     */
    export type ReservationPassengerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationPassengerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionCountOutputTypeDefaultArgs instead
     */
    export type PromotionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationDefaultArgs instead
     */
    export type ReservationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReservationPassengerDefaultArgs instead
     */
    export type ReservationPassengerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReservationPassengerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PassengerServiceDefaultArgs instead
     */
    export type PassengerServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PassengerServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PromotionDefaultArgs instead
     */
    export type PromotionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PromotionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BoardingPassDefaultArgs instead
     */
    export type BoardingPassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BoardingPassDefaultArgs<ExtArgs>

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