
export type PlanCode = 'FREE' | 'BASIC' | 'STARTER' | 'STANDARD' |'PREMIUM';

export type Plan = {
  id: string;
  name: string;
  baseFee: number;
  description: string;
  salesThreshold: number;
  commissionRate: number;
  currency: string;
  code: PlanCode;
  features: Record<string, string|number|boolean>;
};
