import { Role } from '@prisma/client';

export const canCreateListing = (role: Role) => role === 'SELLER' || role === 'SUPER_ADMIN';
