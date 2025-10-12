import { PlanCode } from '../enums/plan';

export type PlanFeatureValue = string | number | boolean;

export type Plan = {
  id: string;
  name: string;
  baseFee: number;
  description: string;
  salesThreshold: number;
  commissionRate: number;
  currency: string;
  code: PlanCode;
  features: Record<string, PlanFeatureValue>;
};
