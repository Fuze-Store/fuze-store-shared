// Named exports
export * from './coupon';
export * from './plan';
export * from './subscription';
export * from './user';

// Default export object
import * as couponEnum from './coupon';
import * as planEnum from './plan';
import * as subscriptionEnum from './subscription';
import * as userEnum from './user';

const enums = {
  ...couponEnum,
  ...planEnum,
  ...subscriptionEnum,
  ...userEnum,
};

export default enums;
