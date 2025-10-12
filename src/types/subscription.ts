import { Invoice } from './invoice';
import { Plan } from './plan';

export type Subscription = {
  id: string;
  /**
   * The reference identifier that connects to payments service
   */
  reference: string | null;
  /**
   * The default payment id where you billed
   */
  paymentMethodId: string | null;
  /**
   * Start date of billing
   */
  startDate: string | null;
  /**
   * End date of billing
   */
  endDate: string | null;
  /**
   * Expiry date of subscription
   */
  expiresAt: string | null;
  /**
   * Status of subscription
   */
  status: 'ACTIVE' | 'PENDING' | 'CANCELED';
  /**
   * Creation timestamp
   */
  createdAt: string;
  /**
   * Last update timestamp
   */
  updatedAt: string | null;
  /**
   * Subscribed Plan
   */
  plan?: Plan;
  /**
   * The date for subscribing to new plan
   */
  scheduleChangeDate: string | null;
  /**
   * The new plan to be subscribed on next billing
   */
  newPlan?: Plan;
  /**
   * list of subscription invoices
   */
  invoices?: Invoice[];
//   /**
//    * list of active coupon redemptions
//    */
//   activeRedemptions?: CouponRedemption[];
};
