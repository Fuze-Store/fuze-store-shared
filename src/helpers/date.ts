/**
 * List of date helpers
 *
 * @module DateHelper
 * @category Helpers
 *
 */

import { format } from 'date-fns';

/**
 * Formats a given date into a specified string pattern.
 *
 * @param date - The date to format, which can be a `Date` object or an ISO date string. If omitted, returns an empty string.
 * @param patterns - The format pattern to use (default: `'MMM dd, yyyy hh:mm aa'`).
 * @returns The formatted date string, or an empty string if no date is provided.
 *
 * @see https://date-fns.org/docs/format
 */
export function formatDate(
  date?: Date | string,
  patterns = 'MMM dd, yyyy hh:mm aa',
) {
  if (date) {
    return format(new Date(date), patterns);
  }

  return '';
}
