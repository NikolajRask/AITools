import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

// Define your router
export const tools = t.router({
    getUser: t.procedure.query((ctx) => {
    })
});

// Export the API router's type
export type ToolsRouter = typeof tools;
