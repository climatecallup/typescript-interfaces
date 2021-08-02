export interface User {
    admin?: boolean;
    consent?: {
        email?: boolean;
    };
    impactPoints?: number;
    profile?: {
        country?: string;
        email: string;
        firstName?: string;
    };
}
