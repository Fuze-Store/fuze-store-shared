import { SocialProvider } from '../enums/user';
import { Address } from './address';
import { Subscription } from './subscription';

export interface User {
  /**
   * Unique identifier for the user
   */
  id: string;
  /**
   * User's email address
   */
  email: string;
  /**
   * Indicates if the user's email has been verified
   */
  isVerified: boolean;
  /**
   * Indicates if the user account is active
   */
  username: string;
  address?: Address;
  info?: UserInfo;
  providers?: UserSocialProvider[];
  subscription?: Subscription;
}

export type UserSocialProvider = {
  /**
   * Unique identifier for the user provider record
   */
  id: string;
  /**
   * URL to the user's avatar image from the social provider
   */
  avatar: string;
  /**
   * Timestamp when the user provider record was created
   */
  createdAt: string;
  /**
   * User's first name from the social provider
   */
  firstName: string;
  /**
   * User's last name from the social provider
   */
  lastName: string;
  /**
   * Type of social provider (e.g., FACEBOOK, GOOGLE)
   */
  provider: SocialProvider;
  /**
   * Unique identifier assigned by the social provider for the user
   */
  providerId: string;
  /**
   * Timestamp when the user provider record was last updated
   */
  updatedAt: string;
};

export type UserInfo = {
  /**
   * Unique identifier for the user info record
   */
  id: string;
  /**
   * User's avatar image URL
   */
  avatar: string | null;
  /**
   * User's first name
   */
  firstName: string;
  /**
   * User's full name
   */
  fullName: string;
  /**
   * User's initials
   */
  initials: string;
  /**
   * User's last name
   */
  lastName: string;
};
