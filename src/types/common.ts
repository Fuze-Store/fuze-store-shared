export type ApiSuccessResponse = {
  /**
   * Indicates if the API request was successful or not
   */
  success: boolean;
  /**
   * Success message describing the result
   */
  message: string;
};

export type ApiErrorResponse = {
  /**
   * Indicates if the API request was successful or not
   */
  success: boolean;
  /**
   * Error message describing the issue
   */
  message: string;
  /**
   * HTTP status code of the error (if applicable)
   */
  status?: string | number;
  /**
   * Optional error code for more specific error identification
   */
  errorCode?: string;
  /**
   * Detailed validation errors (if applicable)
   */
  errors: Record<string, string[]> | null;
};

export type ListResponse<T> = {
  /**
   * List of items in the current page
   */
  items: T;
  /**
   * Total number of items available (not just in the current page)
   */
  total: number;
  /**
   * Current page number
   */
  page: number;
  /**
   * Number of items per page
   */
  perPage: number;
  /**
   * Last available page number
   */
  lastPage: number;
};
