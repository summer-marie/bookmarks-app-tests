export const prisma = {
  bookmark: {
    findMany: async () => {
      throw new Error('Real Prisma should not be called in tests');
    },
  },
};