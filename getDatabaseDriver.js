const {getLogger, getCredentialsFromEnv, Driver} = require("ydb-sdk");

module.exports.default = async () => {
    const {
        ENTRY_POINT,
        DB_NAME,
        TIMEOUT_MS,
    } = process.env

    const logger = getLogger()
    const authService = getCredentialsFromEnv()
    const driver = new Driver({
        endpoint: ENTRY_POINT,
        database: DB_NAME,
        authService,
    })

    if (!await driver.ready(TIMEOUT_MS)) {
        process.exit(1)
    }
    return driver;
}