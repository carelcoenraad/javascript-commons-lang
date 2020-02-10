import { isString } from './object-utils/is-string';

export function hasLength(value) {
  return (Array.isArray(value) || isString(value)) && !!value.length;
}
