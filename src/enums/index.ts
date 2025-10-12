// Named exports
export * from './coupon';
export * from './plan';
export * from './subscription';

// Default export object
import * as couponEnum from './coupon';
import * as planEnum from './plan';
import * as subscriptionEnum from './subscription';

const enums = {
  ...planEnum,
  ...subscriptionEnum,
  ...couponEnum,
};

export default enums;
