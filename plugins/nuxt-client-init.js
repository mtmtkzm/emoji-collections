export default async ctx => {
  /* eslint-disable no-return-await */
  return await ctx.store.dispatch('nuxtClientInit', ctx)
  /* eslint-enable */
}
