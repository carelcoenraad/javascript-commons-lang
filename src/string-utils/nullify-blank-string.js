/**
 * Nullify empty string.
 *
 * @param {any} value Value
 * @returns {null|*} Null or original value when not empty string
 */
// Also nullifyBlankString?
export function nullifyEmptyString(value) {
  return value === '' ? null : value;
}
