const {getCredentialsFromEnv, Driver} = require("ydb-sdk");

module.exports.default = async () => {
    const {
        ENTRY_POINT,
        DB_NAME,
        TIMEOUT_MS,
    } = process.env

    const authService = getCredentialsFromEnv()
    const driver = new Driver({
        endpoint: ENTRY_POINT,
        database: DB_NAME,
        authService,
    })

    if (!await driver.ready(Number(TIMEOUT_MS))) {
        process.exit(1)
    }
    return driver;
}