
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  warnEnvConflicts,
  getPrismaClient,
  debugLib,
  sqltag,
  empty,
  join,
  raw,
  Decimal
} = require('./runtime')

const path = require('path')
const debug = debugLib('prisma-client')

const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 2.12.0-dev.40
 * Query Engine version: a4ef806349a7b17c41f45735ce4a36322e01c250
 */
Prisma.prismaVersion = {
  client: "2.12.0-dev.40",
  engine: "a4ef806349a7b17c41f45735ce4a36322e01c250"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw

const dirnamePolyfill = path.join(process.cwd(), "prisma/generated/client")

const dirname = __dirname.length === 1 ? dirnamePolyfill : __dirname

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.UserDistinctFieldEnum = makeEnum({
  id: 'id',
  name: 'name'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});


exports.Prisma.ModelName = makeEnum({
  User: 'User'
});


/**
 * DMMF
 */
const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"User\",\"isEmbedded\":false,\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"type\":\"Int\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"type\":\"String\",\"hasDefaultValue\":false,\"isGenerated\":false,\"isUpdatedAt\":false}],\"isGenerated\":false,\"idFields\":[],\"uniqueFields\":[],\"uniqueIndexes\":[]}]},\"schema\":{\"inputObjectTypes\":{\"prisma\":[{\"name\":\"UserWhereInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"AND\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"OR\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"NOT\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true}]},{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"IntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"StringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false},{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"UserOrderByInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":0},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"SortOrder\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]}]},{\"name\":\"UserWhereUniqueInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"UserCreateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"UserUpdateInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"IntFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"UserUpdateManyMutationInput\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"id\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"IntFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"name\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"StringFieldUpdateOperationsInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"IntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"StringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"mode\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"QueryMode\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"IntFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"increment\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"decrement\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"multiply\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"divide\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"StringFieldUpdateOperationsInput\",\"constraints\":{\"maxNumFields\":1,\"minNumFields\":1},\"fields\":[{\"name\":\"set\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]}]},{\"name\":\"NestedIntFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedIntFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]},{\"name\":\"NestedStringFilter\",\"constraints\":{\"maxNumFields\":null,\"minNumFields\":null},\"fields\":[{\"name\":\"equals\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"in\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"notIn\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":true}]},{\"name\":\"lt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"lte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gt\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"gte\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"contains\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"startsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"endsWith\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"not\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false},{\"type\":\"NestedStringFilter\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}]}]},\"outputObjectTypes\":{\"prisma\":[{\"name\":\"Query\",\"fields\":[{\"name\":\"findFirstUser\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserDistinctFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findManyUser\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserDistinctFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":true}},{\"name\":\"aggregateUser\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"orderBy\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":true},{\"type\":\"UserOrderByInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"cursor\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"take\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"skip\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"distinct\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserDistinctFieldEnum\",\"namespace\":\"prisma\",\"location\":\"enumTypes\",\"isList\":true}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"AggregateUser\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"findOneUser\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"Mutation\",\"fields\":[{\"name\":\"createOneUser\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteOneUser\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateOneUser\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"upsertOneUser\",\"args\":[{\"name\":\"where\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereUniqueInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"create\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserCreateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"update\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserUpdateInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"User\",\"namespace\":\"model\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"updateManyUser\",\"args\":[{\"name\":\"data\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserUpdateManyMutationInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]},{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"deleteManyUser\",\"args\":[{\"name\":\"where\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"UserWhereInput\",\"namespace\":\"prisma\",\"location\":\"inputObjectTypes\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"BatchPayload\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"executeRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"queryRaw\",\"args\":[{\"name\":\"query\",\"isRequired\":true,\"isNullable\":false,\"inputTypes\":[{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}]},{\"name\":\"parameters\",\"isRequired\":false,\"isNullable\":false,\"inputTypes\":[{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}]}],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Json\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"AggregateUser\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"avg\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"UserAvgAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"sum\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"UserSumAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"min\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"UserMinAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}},{\"name\":\"max\",\"args\":[],\"isRequired\":false,\"isNullable\":true,\"outputType\":{\"type\":\"UserMaxAggregateOutputType\",\"namespace\":\"prisma\",\"location\":\"outputObjectTypes\",\"isList\":false}}]},{\"name\":\"BatchPayload\",\"fields\":[{\"name\":\"count\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"UserAvgAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Float\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"UserSumAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"UserMinAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]},{\"name\":\"UserMaxAggregateOutputType\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}}]}],\"model\":[{\"name\":\"User\",\"fields\":[{\"name\":\"id\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"Int\",\"location\":\"scalar\",\"isList\":false}},{\"name\":\"name\",\"args\":[],\"isRequired\":true,\"isNullable\":false,\"outputType\":{\"type\":\"String\",\"location\":\"scalar\",\"isList\":false}}]}]},\"enumTypes\":{\"prisma\":[{\"name\":\"UserDistinctFieldEnum\",\"values\":[\"id\",\"name\"]},{\"name\":\"SortOrder\",\"values\":[\"asc\",\"desc\"]},{\"name\":\"QueryMode\",\"values\":[\"default\",\"insensitive\"]}]}},\"mappings\":{\"modelOperations\":[{\"model\":\"User\",\"plural\":\"users\",\"findUnique\":\"findOneUser\",\"findFirst\":\"findFirstUser\",\"findMany\":\"findManyUser\",\"create\":\"createOneUser\",\"delete\":\"deleteOneUser\",\"update\":\"updateOneUser\",\"deleteMany\":\"deleteManyUser\",\"updateMany\":\"updateManyUser\",\"upsert\":\"upsertOneUser\",\"aggregate\":\"aggregateUser\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"

// We are parsing 2 times, as we want independent objects, because
// DMMFClass introduces circular references in the dmmf object
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */

const config = {
  "generator": {
    "name": "client",
    "provider": "prisma-client-js",
    "output": "/root/code/repros/nextjs-blog/prisma/generated/client",
    "binaryTargets": [],
    "previewFeatures": [],
    "config": {},
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "sqliteDatasourceOverrides": [],
  "relativePath": "../..",
  "clientVersion": "2.12.0-dev.40",
  "engineVersion": "a4ef806349a7b17c41f45735ce4a36322e01c250",
  "datasourceNames": [
    "db"
  ]
}
config.document = dmmf
config.dirname = dirname

/**
 * Only for env conflict warning
 * loading of env variable occurs in getPrismaClient
 */
const envPaths = {
  rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
}
warnEnvConflicts(envPaths)

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)



/**
 * Build tool annotations
 * In order to make `ncc` and `@vercel/nft` happy.
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/

path.join(__dirname, 'query-engine-debian-openssl-1.1.x');
path.join(process.cwd(), './prisma/generated/client/query-engine-debian-openssl-1.1.x');


/**
 * Annotation for `@vercel/nft`
 * The process.cwd() annotation is only needed for https://github.com/vercel/vercel/tree/master/packages/now-next
**/
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), './prisma/generated/client/schema.prisma');
