/**
 * Centralized strings for the Mileage Recording Component
 * This file contains all UI text, validation messages, and empty states
 */

export const STRINGS = {
  // Headers
  HEADER: {
    RECORD_MILEAGE: 'RECORD MILEAGE',
  },

  // Units
  UNITS: {
    KILOMETERS: 'km',
    HOURS: 'hr',
  },

  // Input Placeholders
  PLACEHOLDERS: {
    EMPTY_VALUE: '---',
    SELECT_DATE: 'Select date',
    SELECT_TIME: 'Select time',
  },

  // Button Labels
  BUTTONS: {
    NOW: 'Now',
    SHOW_MORE: 'Show more',
    SHOW_LESS: 'Show less',
  },

  // Table Headers
  TABLE: {
    LAST_KNOWN: 'Last Known',
    MILEAGE: 'Mileage',
    HOURS: 'Hours',
    DATE_TAKEN: 'Date taken',
    CREATED_BY: 'Created by',
  },

  // Feedback Messages (error & success)
  FEEDBACK: {
    ERROR: {
      MILEAGE_TOO_LOW: (lastValue: number) =>
        `Entered mileage is lower than the last known record.`,
      HOURS_TOO_LOW: (lastValue: number) =>
        `Entered hours is lower than the last known record.`,
      GENERIC: 'Something went wrong. Please try again.',
    },
    SUCCESS: {
      MILEAGE_SAVED: 'Mileage recorded successfully.',
      HOURS_SAVED: 'Hours recorded successfully.',
      UPDATED: 'Record updated successfully.',
    },
  },

  // Empty States
  EMPTY_STATES: {
    NO_DATA: 'No data available.',
  },
};
