import { rollup, RollupOptions, OutputOptions } from 'rollup'

export const buildExtension = async (options: RollupOptions) => {
  try {
    /* ----------- bundle new extension ----------- */
    if (!options.output)
      throw new TypeError(
        'Rollup options is missing output config',
      )

    const bundle = await rollup(options)
    await bundle.write(options.output as OutputOptions)
  } catch (error) {
    console.error(error)
  }
}
