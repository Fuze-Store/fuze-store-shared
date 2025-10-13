export type Address = {
  id: string;
  address1: string;
  address2?: string;
  barangay: string;
  city: string;
  province: string;
  postalCode: string | null;
  country: string;
};
