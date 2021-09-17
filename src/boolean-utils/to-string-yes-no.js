import { isBoolean } from '../object-utils/is-boolean';

/**
 * Converts a boolean to a String returning 'yes' or 'no'.
 *
 * <pre>
 *   toStringYesNo(true)  = 'yes'
 *   toStringYesNo(false) = 'no'
 * </pre>
 *
 * @param {boolean} boolean The boolean to convert
 * @returns {string|null} yes, no, or null
 */
export function toStringYesNo(boolean) {
  if (!isBoolean(boolean)) {
    return null;
  }

  return boolean ? 'yes' : 'no';
}
