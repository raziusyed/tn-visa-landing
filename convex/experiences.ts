import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const experiences = await ctx.db.query("experiences").collect();
    // Sort by crossingDate descending
    return experiences.sort(
      (a, b) =>
        new Date(b.crossingDate).getTime() - new Date(a.crossingDate).getTime()
    );
  },
});
