/**
 * The expression operators.
 */
const EXPRESSION_OPERATORS = [
  {
    name: '$abs',
    value: '$abs',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$accumulator',
    value: '$accumulator',
    score: 1,
    meta: 'expr:arith',
    version: '4.4.0'
  },
  {
    name: '$add',
    value: '$add',
    score: 1,
    meta: 'expr:arith',
    version: '2.2.0'
  },
  {
    name: '$allElementsTrue',
    value: '$allElementsTrue',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$and',
    value: '$and',
    score: 1,
    meta: 'expr:bool',
    version: '2.2.0'
  },
  {
    name: '$anyElementTrue',
    value: '$anyElementTrue',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$arrayElemAt',
    value: '$arrayElemAt',
    score: 1,
    meta: 'expr:array',
    version: '3.2.0'
  },
  {
    name: '$arrayToObject',
    value: '$arrayToObject',
    score: 1,
    meta: 'expr:array',
    version: '3.4.4'
  },
  {
    name: '$binarySize',
    value: '$binarySize',
    score: 1,
    meta: 'expr:obj',
    version: '4.4.0'
  },
  {
    name: '$bsonSize',
    value: '$bsonSize',
    score: 1,
    meta: 'expr:obj',
    version: '4.4.0'
  },
  {
    name: '$ceil',
    value: '$ceil',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$cmp',
    value: '$cmp',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$concat',
    value: '$concat',
    score: 1,
    meta: 'expr:string',
    version: '2.4.0'
  },
  {
    name: '$concatArrays',
    value: '$concatArrays',
    score: 1,
    meta: 'expr:array',
    version: '3.2.0'
  },
  {
    name: '$cond',
    value: '$cond',
    score: 1,
    meta: 'expr:cond',
    version: '2.6.0'
  },
  {
    name: '$dateAdd',
    value: '$dateAdd',
    score: 1,
    meta: 'expr:date',
    version: '5.0.0'
  },
  {
    name: '$dateDiff',
    value: '$dateDiff',
    score: 1,
    meta: 'expr:date',
    version: '5.0.0'
  },
  {
    name: '$dateFromParts',
    value: '$dateFromParts',
    score: 1,
    meta: 'expr:date',
    version: '3.6.0'
  },
  {
    name: '$dateFromString',
    value: '$dateFromString',
    score: 1,
    meta: 'expr:date',
    version: '3.6.0'
  },
  {
    name: '$dateSubtract',
    value: '$dateSubtract',
    score: 1,
    meta: 'expr:date',
    version: '5.0.0'
  },
  {
    name: '$dateToParts',
    value: '$dateToParts',
    score: 1,
    meta: 'expr:date',
    version: '3.6.0'
  },
  {
    name: '$dateToString',
    value: '$dateToString',
    score: 1,
    meta: 'expr:date',
    version: '3.6.0'
  },
  {
    name: '$dateTrunc',
    value: '$dateTrunc',
    score: 1,
    meta: 'expr:date',
    version: '5.0.0'
  },
  {
    name: '$dayOfMonth',
    value: '$dayOfMonth',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$dayOfWeek',
    value: '$dayOfWeek',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$dayOfYear',
    value: '$dayOfYear',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$dateToString',
    value: '$dateToString',
    score: 1,
    meta: 'expr:date',
    version: '3.0.0'
  },
  {
    name: '$divide',
    value: '$divide',
    score: 1,
    meta: 'expr:arith',
    version: '2.2.0'
  },
  {
    name: '$eq',
    value: '$eq',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$exp',
    value: '$exp',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$filter',
    value: '$filter',
    score: 1,
    meta: 'expr:array',
    version: '3.2.0'
  },
  {
    name: '$first',
    value: '$first',
    score: 1,
    meta: 'expr:array',
    version: '4.4.0'
  },
  {
    name: '$floor',
    value: '$floor',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$function',
    value: '$function',
    score: 1,
    meta: 'expr:arith',
    version: '4.4.0'
  },
  {
    name: '$getField',
    value: '$getField',
    score: 1,
    meta: 'expr:get',
    version: '5.0.0'
  },
  {
    name: '$gt',
    value: '$gt',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$gte',
    value: '$gte',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$hour',
    value: '$hour',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$ifNull',
    value: '$ifNull',
    score: 1,
    meta: 'expr:cond',
    version: '2.2.0'
  },
  {
    name: '$in',
    value: '$in',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  },
  {
    name: '$indexOfArray',
    value: '$indexOfArray',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  },
  {
    name: '$indexOfBytes',
    value: '$indexOfBytes',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$indexOfCP',
    value: '$indexOfCP',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$isArray',
    value: '$isArray',
    score: 1,
    meta: 'expr:array',
    version: '3.2.0'
  },
  {
    name: '$isNumber',
    value: '$isNumber',
    score: 1,
    meta: 'expr:arith',
    version: '4.4.0'
  },
  {
    name: '$isoDayOfWeek',
    value: '$isoDayOfWeek',
    score: 1,
    meta: 'expr:date',
    version: '3.4.0'
  },
  {
    name: '$isoWeek',
    value: '$isoWeek',
    score: 1,
    meta: 'expr:date',
    version: '3.4.0'
  },
  {
    name: '$isoWeekYear',
    value: '$isoWeekYear',
    score: 1,
    meta: 'expr:date',
    version: '3.4.0'
  },
  {
    name: '$last',
    value: '$last',
    score: 1,
    meta: 'expr:array',
    version: '4.4.0'
  },
  {
    name: '$let',
    value: '$let',
    score: 1,
    meta: 'expr:var',
    version: '2.6.0'
  },
  {
    name: '$literal',
    value: '$literal',
    score: 1,
    meta: 'expr:literal',
    version: '2.6.0'
  },
  {
    name: '$lt',
    value: '$lt',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$lt',
    value: '$lte',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$ln',
    value: '$ln',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$log',
    value: '$log',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$log10',
    value: '$log10',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$map',
    value: '$map',
    score: 1,
    meta: 'expr:array',
    version: '2.6.0'
  },
  {
    name: '$mergeObjects',
    value: '$mergeObjects',
    score: 1,
    meta: 'expr:obj',
    version: '3.6.0'
  },
  {
    name: '$meta',
    value: '$meta',
    score: 1,
    meta: 'expr:text',
    version: '2.6.0'
  },
  {
    name: '$millisecond',
    value: '$millisecond',
    score: 1,
    meta: 'expr:date',
    version: '2.4.0'
  },
  {
    name: '$minute',
    value: '$minute',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$mod',
    value: '$mod',
    score: 1,
    meta: 'expr:arith',
    version: '2.2.0'
  },
  {
    name: '$month',
    value: '$month',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$multiply',
    value: '$multiply',
    score: 1,
    meta: 'expr:arith',
    version: '2.2.0'
  },
  {
    name: '$new',
    value: '$new',
    score: 1,
    meta: 'expr:comp',
    version: '2.2.0'
  },
  {
    name: '$not',
    value: '$not',
    score: 1,
    meta: 'expr:bool',
    version: '2.2.0'
  },
  {
    name: '$objectToArray',
    value: '$objectToArray',
    score: 1,
    meta: 'expr:array',
    version: '3.4.4'
  },
  {
    name: '$or',
    value: '$or',
    score: 1,
    meta: 'expr:bool',
    version: '2.2.0'
  },
  {
    name: '$pow',
    value: '$pow',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$range',
    value: '$range',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  },
  {
    name: '$reduce',
    value: '$reduce',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  },
  {
    name: '$regexFind',
    value: '$regexFind',
    score: 1,
    meta: 'expr:regex',
    version: '4.1.11'
  },
  {
    name: '$regexFindAll',
    value: '$regexFindAll',
    score: 1,
    meta: 'expr:regex',
    version: '4.1.11'
  },
  {
    name: '$regexMatch',
    value: '$regexMatch',
    score: 1,
    meta: 'expr:regex',
    version: '4.1.11'
  },
  {
    name: '$replaceAll',
    value: '$replaceAll',
    score: 1,
    meta: 'expr:string',
    version: '4.4.0'
  },
  {
    name: '$replaceOne',
    value: '$replaceOne',
    score: 1,
    meta: 'expr:string',
    version: '4.4.0'
  },
  {
    name: '$reverseArray',
    value: '$reverseArray',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  },
  {
    name: '$second',
    value: '$second',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$setDifference',
    value: '$setDifference',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$setEquals',
    value: '$setEquals',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$setIntersection',
    value: '$setIntersection',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$setIsSubset',
    value: '$setIsSubset',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$setUnion',
    value: '$setUnion',
    score: 1,
    meta: 'expr:set',
    version: '2.6.0'
  },
  {
    name: '$size',
    value: '$size',
    score: 1,
    meta: 'expr:array',
    version: '2.6.0'
  },
  {
    name: '$slice',
    value: '$slice',
    score: 1,
    meta: 'expr:array',
    version: '3.2.0'
  },
  {
    name: '$split',
    value: '$split',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$sqrt',
    value: '$sqrt',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$strcasecmp',
    value: '$strcasecmp',
    score: 1,
    meta: 'expr:string',
    version: '2.2.0'
  },
  {
    name: '$strLenBytes',
    value: '$strLenBytes',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$strLenCP',
    value: '$strLenCP',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$substr',
    value: '$substr',
    score: 1,
    meta: 'expr:string',
    version: '2.2.0',
    deprecated: '3.4.0',
    replacement: '$substrBytes'
  },
  {
    name: '$substrBytes',
    value: '$substrBytes',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$substrCP',
    value: '$substrCP',
    score: 1,
    meta: 'expr:string',
    version: '3.4.0'
  },
  {
    name: '$subtract',
    value: '$subtract',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$switch',
    value: '$switch',
    score: 1,
    meta: 'expr:cond',
    version: '3.4.0'
  },
  {
    name: '$toLower',
    value: '$toLower',
    score: 1,
    meta: 'expr:string',
    version: '2.2.0'
  },
  {
    name: '$toUpper',
    value: '$toUpper',
    score: 1,
    meta: 'expr:string',
    version: '2.2.0'
  },
  {
    name: '$tsSecond',
    value: '$tsSecond',
    score: 1,
    meta: 'expr:date',
    version: '5.1.0'
  },
  {
    name: '$tsIncrement',
    value: '$tsIncrement',
    score: 1,
    meta: 'expr:date',
    version: '5.1.0'
  },
  {
    name: '$trunc',
    value: '$trunc',
    score: 1,
    meta: 'expr:arith',
    version: '3.2.0'
  },
  {
    name: '$type',
    value: '$type',
    score: 1,
    meta: 'expr:type',
    version: '3.4.0'
  },
  {
    name: '$week',
    value: '$week',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$year',
    value: '$year',
    score: 1,
    meta: 'expr:date',
    version: '2.2.0'
  },
  {
    name: '$zip',
    value: '$zip',
    score: 1,
    meta: 'expr:array',
    version: '3.4.0'
  }
];

module.exports = EXPRESSION_OPERATORS;
