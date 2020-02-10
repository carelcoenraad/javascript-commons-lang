import { isBoolean } from '../object-utils/is-boolean';

/**
 * Converts a boolean to a String returning 'true' or 'false'
 *
 * <pre>
 *   toString(true)  = 'true'
 *   toString(false) = 'false'
 * </pre>
 *
 * @param boolean The boolean to convert
 * @returns {'true'}, {'false'}, or {null}
 */
export function toString(boolean) {
  if (!isBoolean(boolean)) {
    return null;
  }

  return boolean ? 'true' : 'false';
}
