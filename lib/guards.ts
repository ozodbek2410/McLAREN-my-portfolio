import { UserRole } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from './auth';

export async function requireRole(roles: UserRole[]) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id || !session.user.role || !roles.includes(session.user.role)) {
    return { response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  }
  return { session };
}
