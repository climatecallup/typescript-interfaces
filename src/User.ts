export interface User {
  admin?: boolean;
  impactPoints?: number;
  profile?: {
    country?: string;
    email: string;
    firstName?: string;
  };
}
