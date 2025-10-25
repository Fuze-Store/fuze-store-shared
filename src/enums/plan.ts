/**
 * List of plan enums
 *
 * @module PlanEnums
 * @category Enums
 *
 */

export enum PlanFeature {
  DASHBOARD = 'dashboard',
  POS = 'pos',
  EVENT_BASIC = 'event_basic', // List View
  EVENT_ADVANCED = 'event_advanced', // Calendar, Agenda, Day, List View
  AREA = 'area', // Area Management
  UNIT = 'unit', // Unit Management
  TRANSACTIONS = 'transactions', // Order Histories, Sales Transactions
  REFUNDS = 'refunds', // Sales Refunds
  CATALOGS = 'catalogs', // Categories, Products, Services, Modifiers
  STAFFS = 'staffs',
  CUSTOMERS = 'customers',
  ROLES_AND_PERMISSIONS = 'roles_and_permissions',
  REALTIME_SYNC = 'realtime_sync',
  IMPORT_DATA = 'import_data',
  EXPORT_DATA = 'export_data',
  TAXES = 'taxes',
  ORDER_HISTORIES = 'order_histories',
  GIFT_CARDS = 'gift_cards',
  REPORTS_BASICS = 'reports_basic', // View Basic Reports
  REPORTS_ADVANCED = 'reports_advanced', // View, Download Reports
  EXPENSES = 'expenses',
  DISCOUNTS_BASIC = 'discounts_basic', // Basic Discounts
  STORE_SESSION = 'store_session', // Store Session Management
  EMAIL_NOTIFICATIONS = 'email_notifications', // Email Notifications
  // SMS_NOTIFICATIONS = 'sms_notifications', // TODO=
  PRINTER = 'printer',
  STORE_LIMIT = 'store_limit',
  WAITING_LIST = 'waiting_list',
  // AI_AGENT = 'ai_agent', // TODO=
}

export enum PlanCode {
  FREETRIAL = 'FREETRIAL',
  STARTER = 'STARTER',
  BASIC = 'BASIC',
  STANDARD = 'STANDARD',
  PREMIUM = 'PREMIUM',
}
