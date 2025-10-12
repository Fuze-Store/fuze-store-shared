// Named exports
export * from './plan';
export * from './subscription';

// Default export object
import * as planEnum from './plan';
import * as subscriptionEnum from './subscription';

const enums = {
  ...planEnum,
  ...subscriptionEnum,
};

export default enums;
