const {getCredentialsFromEnv, Driver, TypedData} = require("ydb-sdk");

module.exports.default = async (session, tableName, primaryKeyCollumnName = 'id') => {
    const query = `SELECT MAX(${primaryKeyCollumnName}) FROM ${tableName};`;
    const lastId = await session.executeQuery(query);

    return TypedData.createNativeObjects(lastId.resultSets[0])?.[0]?.column0
}