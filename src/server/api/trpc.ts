import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

// Define your router
export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query(({ input }) => {
    return { name: input, age: 25 };
  }),
  createUser: t.procedure.input(z.object({ name: z.string(), age: z.number() })).mutation(({ input }) => {
    return { success: true, ...input };
  }),
});

// Export the API router's type
export type AppRouter = typeof appRouter;
