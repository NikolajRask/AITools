import { AppRouter } from '@/server/api/trpc';
import { createTRPCReact } from '@trpc/react-query';

export const api = createTRPCReact<AppRouter>();
