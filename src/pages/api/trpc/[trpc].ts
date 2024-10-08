import { appRouter } from '@/server/api/trpc';
import * as trpcNext from '@trpc/server/adapters/next';

export default trpcNext.createNextApiHandler({
  router: appRouter
});