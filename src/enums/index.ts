// Named exports
export * from './plan.enum';
export * from './subscription.enum';

// Default export object
import * as planEnum from './plan.enum';
import * as subscriptionEnum from './subscription.enum';

const enums = {
  ...planEnum,
  ...subscriptionEnum,
};

export default enums;
