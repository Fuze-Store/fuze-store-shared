import { CouponDiscountType, CouponDurationType } from '../enums/coupon';

export interface Coupon {
  id: string;
  code: string;
  description: string | null;
  discountType: CouponDiscountType;
  discountValue: number;
  durationType: CouponDurationType;
  durationInMonths: number | null;
  createdAt: string;
  updatedAt: string;
}

export interface CouponRedemption {
  id: string;
  coupon?: Coupon;
  redeemedAt: string;
  validUntil: string | null;
}
