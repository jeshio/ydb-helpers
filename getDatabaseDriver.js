const {getCredentialsFromEnv, Driver} = require("ydb-sdk");
const {getConstants} = require("./index");

/**
 * Try to get connected database driver
 * @returns {Promise<Driver>}
 */
module.exports.default = async () => {
    const {
        ENTRY_POINT,
        DB_NAME,
        TIMEOUT_MS,
    } = getConstants()

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