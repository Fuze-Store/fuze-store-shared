/**
 * List of plan helpers
 *
 * @module PlanHelper
 * @category Helpers
 *
 */

import { PlanCode, PlanFeature } from '../enums/plan';
import { Plan, PlanFeatureValue } from '../types/plan';

/**
 * A mapping of feature keys to their corresponding human-readable labels.
 *
 * This record is used to display user-friendly names for various features
 * throughout the application, such as in plan selection, feature lists, or UI components.
 *
 * @remarks
 * Each key represents a unique feature identifier, and the value is the label shown to users.
 *
 * @example
 * ```typescript
 * const label = featureLabels['dashboard']; // "Dashboard"
 * ```
 */
export const featureLabels: Record<string, string> = {
  dashboard: 'Dashboard',
  pos: 'Point of Sales',
  event_basic: 'Basic Events',
  event_advanced: 'Advanced Events',
  area: 'Area Management',
  unit: 'Table/Room Management',
  transactions: 'Sale Transactions',
  refunds: 'Refunds',
  catalogs: 'Catalog Management',
  staffs: 'Staffs',
  customers: 'Customers',
  roles_and_permissions: 'Roles and Permissions',
  import_data: 'Import Data',
  export_data: 'Export Data',
  order_histories: 'Order Histories',
  waiting_list: 'Waiting List',
  taxes: 'Taxes',
  gift_cards: 'Gift Cards',
  reports_basic: 'Basic Reports',
  reports_advanced: 'Advanced Reports',
  discounts_basic: 'Basic Discounts',
  store_session: 'Store Session',
  email_notifications: 'Email Notifications',
  // sms_notifications: 'SMS Notifications',
  printer: 'Printer Integration',
  // ai_agent: 'AI Assistant',
  store_limit: 'Store Limit',
  realtime_sync: 'Real-time Sync',
};

/**
 * Returns the features that are unique to a specific plan compared to all lower-tier plans.
 *
 * The function compares the features of the target plan against all plans lower in the hierarchy.
 * A feature is considered unique if all lower-tier plans either lack the feature or have a strictly lesser value.
 * Supports boolean and numeric feature values.
 *
 * @param planCode - The code of the target plan to compare (case-insensitive).
 * @param plans - An array of all available plans, each with a code and features.
 * @returns An object mapping feature keys to their unique values for the target plan.
 * @throws If the plan code is invalid or the plan is not found in the provided plans array.
 */
export function getUniqueFeaturesByPlan(planCode: PlanCode, plans: Plan[]) {
  const hierarchy = [
    PlanCode.FREETRIAL,
    PlanCode.BASIC,
    PlanCode.STARTER,
    PlanCode.STANDARD,
    PlanCode.PREMIUM,
  ];
  const targetIndex = hierarchy.indexOf(planCode);
  if (targetIndex === -1) throw new Error('Invalid plan code');

  const targetPlan = plans.find((p) => p.code === planCode);
  if (!targetPlan) throw new Error('Plan not found');

  const lowerPlans = plans.filter(
    (p) => hierarchy.indexOf(p.code) < targetIndex,
  );

  const uniqueFeatures: Plan['features'] = {};

  // 1️⃣ Find features unique/improved vs lower plans
  for (const [featureKey, featureValue] of Object.entries(
    targetPlan.features,
  )) {
    const isUnique = lowerPlans.every((lp) => {
      const lowerValue = lp.features[featureKey];
      if (typeof featureValue === 'boolean') {
        return featureValue && !lowerValue;
      }
      if (typeof featureValue === 'number' && typeof lowerValue === 'number') {
        return featureValue > lowerValue;
      }
      return featureValue !== lowerValue;
    });

    if (isUnique) uniqueFeatures[featureKey] = featureValue;
  }

  return uniqueFeatures;
}

/**
 * Returns an array of unique feature names for a given subscription plan.
 *
 * @param planCode - The code representing the subscription plan to retrieve features for.
 * @param plans - An array of available plans to search for unique features.
 * @returns An array of strings representing the names of unique features for the specified plan.
 */
export function getUniqueKeyFeaturesByPlan(planCode: PlanCode, plans: Plan[]) {
  const uniqueFeatures = getUniqueFeaturesByPlan(planCode, plans);
  return Object.keys(uniqueFeatures);
}

/**
 * Returns a mapping of feature keys to the values of those features in plans
 * that differ from the PREMIUM plan.
 *
 * For each feature in the PREMIUM plan, if any other plan has a different value
 * for that feature, the result will include an entry for that feature. The entry
 * maps each plan code (excluding PREMIUM) to its differing feature value.
 *
 * @param plans - Array of Plan objects to compare, each containing a set of features.
 * @returns An object where each key is a feature that differs from the PREMIUM plan,
 *          and the value is an object mapping plan codes to their differing feature values.
 */
export function getDifferentFeaturesValues(
  plans: Plan[],
): Record<string, Record<string, PlanFeatureValue>> {
  const targetPlan = plans.find((p) => p.code === PlanCode.PREMIUM);
  if (!targetPlan) return {};

  const differentFeatures: Record<
    string,
    Record<string, PlanFeatureValue>
  > = {};

  // Find features that differ from any other plan (lower OR higher)
  for (const [featureKey, featureValue] of Object.entries(
    targetPlan.features,
  )) {
    const otherValues = plans.map((p) => p.features[featureKey]);
    const hasDifference = otherValues.some((v) => v !== featureValue);

    if (hasDifference) {
      differentFeatures[featureKey] = Object.fromEntries(
        plans
          .map((p) => [p.code, p.features[featureKey]])
          .filter(([_, v]) => v !== featureValue),
      );
    }
  }

  return differentFeatures;
}

/**
 * Returns a formatted string representation of a plan feature value based on the feature type.
 *
 * - For numeric values, formats the value and appends a descriptive label depending on the feature.
 * - For boolean values, returns "Unlimited" for certain features if `true`, otherwise "Included".
 * - For string values, returns the value as-is.
 * - Returns "--" if the value does not match any expected type.
 *
 * @param value - The value of the plan feature, which can be a number, boolean, or string.
 * @param feature - The feature key used to determine formatting and labeling.
 * @returns A formatted string representing the feature value for display purposes.
 */
export function getFeatureValue(value: PlanFeatureValue, feature: string) {
  if (typeof value === 'number') {
    const formattedValue = Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
    }).format(value);

    if (feature === PlanFeature.POS) {
      return `${formattedValue} orders per month`;
    }

    if (feature === PlanFeature.AREA) {
      return `${formattedValue} area(s)`;
    }

    if (
      feature === PlanFeature.TRANSACTIONS ||
      feature === PlanFeature.ORDER_HISTORIES
    ) {
      return `up to last ${formattedValue} month(s)`;
    }

    if (feature === PlanFeature.CATALOGS) {
      return `${formattedValue} products / services`;
    }

    if (feature === PlanFeature.STAFFS) {
      return `${formattedValue} staff(s)`;
    }

    if (feature === PlanFeature.CUSTOMERS) {
      return `${formattedValue} saved customer(s)`;
    }

    if (feature === PlanFeature.STORE_LIMIT) {
      return `up to ${formattedValue} store(s)`;
    }
  }

  if (
    (feature === PlanFeature.STORE_LIMIT ||
      feature === PlanFeature.EVENT_ADVANCED ||
      feature === PlanFeature.STAFFS ||
      feature === PlanFeature.UNIT ||
      feature === PlanFeature.POS ||
      feature === PlanFeature.TRANSACTIONS ||
      feature === PlanFeature.CATALOGS ||
      feature === PlanFeature.CUSTOMERS ||
      // feature === PlanFeature.SMS_NOTIFICATIONS ||
      // feature === PlanFeature.AI_AGENT ||
      feature === PlanFeature.AREA) &&
    value === true
  ) {
    return 'Unlimited';
  }

  if (value === true) {
    return 'Included';
  } else if (typeof value === 'number') {
    return Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(
      value,
    );
  } else if (typeof value === 'string') {
    return value;
  }

  return '--';
}
