/**
 * Is empty.
 *
 * @param {Array} value Value
 * @returns {boolean} True or false
 */
// Or isEmptyArray()
export function isEmpty(value) {
  return Array.isArray(value) && !value.length;
}
