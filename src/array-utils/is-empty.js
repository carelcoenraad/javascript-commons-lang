// Or isEmptyArray()
export function isEmpty(value) {
  return Array.isArray(value) && !value.length;
}
