/**
 * {@link https://docs.adyen.com/api-explorer/Checkout/70/post/payments#request-amount API Explorer /payments amount}
 */
export interface AdyenPaymentAmount {
  value: number;
  currency: string;
}

/**
 * @see https://docs.adyen.com/api-explorer/Checkout/{version}/post/sessions#responses
 */
export type AdyenSessionResponse = {
  /**
   * The amount of the payment.
   */
  amount: AdyenPaymentAmount;
  /**
   * Min length: 3 Max length: 256
   *
   * Your reference to uniquely identify this shopper, for example user ID or account ID. Minimum length: 3 characters.
   */
  shopperReference: string;
  /**
   * The shopper country.
   *
   * Format: ISO 3166-1 alpha-2 Example: NL or DE
   */
  countryCode: string;
  /**
   * The date the session expires in ISO8601 format. When not specified, the expiry date is set to 1 hour after session creation. You cannot set the session expiry to more than 24 hours after session creation.
   */
  expiresAt: string;
  /**
   * A unique identifier of the session.
   */
  id: string;
  /**
   * The merchant account identifier, with which you want to process the transaction.
   */
  merchantAccount: string;
  /**
   * Defines a recurring payment type. Required when creating a token to store payment details. Allowed values:
   *
   * - Subscription – A transaction for a fixed or variable amount, which follows a fixed schedule.
   * - CardOnFile – With a card-on-file (CoF) transaction, card details are stored to enable one-click or omnichannel journeys, or simply to streamline the checkout process. Any subscription not following a fixed schedule is also considered a card-on-file transaction.
   * - UnscheduledCardOnFile – An unscheduled card-on-file (UCoF) transaction is a transaction that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel: string;
  /**
   * The reference to uniquely identify a payment.
   */
  reference: string;
  /**
   * The URL to return to when a redirect payment is completed.
   */
  returnUrl: string;
  /**
   * Specifies the sales channel, through which the shopper gives their card details, and whether the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper interaction by default.
   *
   * This field has the following possible values:
   *
   * - Ecommerce - Online transactions where the cardholder is present (online). For better authorisation rates, we recommend sending the card security code (CSC) along with the request.
   * - ContAuth - Card on file and/or subscription transactions, where the cardholder is known to the merchant (returning customer). If the shopper is present (online), you can supply also the CSC to improve authorisation (one-click payment).
   * - Moto - Mail-order and telephone-order transactions where the shopper is in contact with the merchant via email or telephone.
   * - POS - Point-of-sale transactions where the shopper is physically present to make a payment using a secure payment terminal.
   */
  shopperInteraction: string;
  /**
   * When this is set to true and the shopperReference is provided, the payment details will be stored.
   */
  storePaymentMethod: boolean;
  /**
   * The payment session data you need to pass to your front end.
   */
  sessionData: string;
  /**
   * The URL for the Hosted Checkout page. Redirect the shopper to this URL so they can make the payment.
   */
  url: string;
};
