import path from 'node:path';
import type { PrismaConfig } from 'prisma';

type Env = any;

export default {
  earlyAccess: true,
  schema: path.join('prisma', 'schema'),
} satisfies PrismaConfig<Env>;
