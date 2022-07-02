const { TypedData } = require('ydb-sdk')
const getConstants = require('./getConstants').default

/**
 * Get last primary key value from table
 * for INSERT queries
 * @param session
 * @param tableName
 * @param primaryKeyCollumnName
 * @returns {Promise<any>}
 */
module.exports.default = async (
  session,
  tableName,
  primaryKeyCollumnName = 'id'
) => {
  const { SYNTAX_V1 } = getConstants()
  const query = `
        ${SYNTAX_V1}
        SELECT MAX(${primaryKeyCollumnName}) FROM ${tableName};
    `
  const lastId = await session.executeQuery(query)

  return TypedData.createNativeObjects(lastId.resultSets[0])?.[0]?.column0
}
