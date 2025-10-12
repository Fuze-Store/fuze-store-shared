
export interface InvoiceStatus {
  id: string;
  code: "PAID" | "PENDING" ;
}

export interface Invoice {
  id: string;
  /**
   * The reference identifier that connects to payments service
   */
  reference: string | null;
  /**
   * The first day of your billing cycle
   */
  billingStartDate: string;
  /**
   * The last day of your billing cycle
   */
  billingEndDate: string;
  /**
   * Total amount of your billings (base fee, store sales fee, etc)
   */
  totalAmount: number;
  /**
   * Filename of the invoice document
   */
  filename: string;
  /**
   * Currency code (e.g., USD, EUR)
   */
  currency: string;
  /**
   * ISO 8601 formatted date-time string
   */
  createdAt: string;
  /**
   * ISO 8601 formatted date-time string
   */
  updatedAt: string;
  /**
   * Status of invoice
   */
  status?: InvoiceStatus;
  /**
   * List of payments associated with this invoice
   */
  payments?: InvoicePayment[];
}

export interface InvoicePayment {
  amount: number;
  createdAt: string;
  currency: string;
  id: string;
  paymentMethodId: string | null;
  pspReference: string | null;
  reference: string | null;
  updatedAt: string;
  status?: InvoicePaymentStatus;
}

export interface InvoicePaymentStatus {
  id: string;
  code: "PAID" | "PENDING" | "FAILED" | "UNKNOWN";
}

