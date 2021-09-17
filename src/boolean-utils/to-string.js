import { isBoolean } from '../object-utils/is-boolean';

/**
 * Converts a boolean to a String returning 'true' or 'false'.
 *
 * <pre>
 *   toString(true)  = 'true'
 *   toString(false) = 'false'
 * </pre>
 *
 * @param {boolean} boolean The boolean to convert
 * @returns {string|null} true, false, or null
 */
export function toString(boolean) {
  if (!isBoolean(boolean)) {
    return null;
  }

  return boolean ? 'true' : 'false';
}
