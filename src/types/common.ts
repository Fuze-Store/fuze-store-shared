export type ApiSuccessResponse = {
  success: boolean;
  message: string;
};

export type ApiErrorResponse = {
  success: boolean;
  message: string;
  status?: string | number;
  errorCode?: string;
  errors: Record<string, string[]> | null;
};
