import path from 'node:path';
import type { PrismaConfig } from 'prisma';

export default {
  earlyAccess: true,
  schema: path.resolve(__dirname), // points to the folder, not the file
} satisfies PrismaConfig;
