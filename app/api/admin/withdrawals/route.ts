import { prisma } from '@/lib/prisma';
import { fail, ok } from '@/lib/api';

export async function GET() {
  const requests = await prisma.withdrawalRequest.findMany({ orderBy: { createdAt: 'desc' } });
  return ok(requests);
}

export async function POST(req: Request) {
  const { requestId, status, note } = await req.json();
  if (!requestId || !status) return fail('requestId and status required');

  const updated = await prisma.withdrawalRequest.update({ where: { id: requestId }, data: { status, note } });
  return ok(updated);
}
