// Named exports
export * from './date.helper';

// Default export object
import * as dateHelper from './date.helper';

const helper = {
  ...dateHelper,
};

export default helper;
