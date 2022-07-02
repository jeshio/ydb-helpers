const SYNTAX_V1 = '--!syntax_v1'

/**
 * Get common Yandex Database constants
 * @returns {{SYNTAX_V1: string, DB_NAME: string, TIMEOUT_MS: string, ENTRY_POINT: string}}
 */
module.exports.default = () => {
  const { ENTRY_POINT, DB_NAME, TIMEOUT_MS } = process.env

  return {
    ENTRY_POINT,
    DB_NAME,
    TIMEOUT_MS,
    SYNTAX_V1,
  }
}
