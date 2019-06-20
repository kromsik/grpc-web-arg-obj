export const gparse = <T extends { [key: string]: (arg: unknown) => void }>(
  argClass: T,
  argObj: { [key: string]: unknown }
): T | undefined => {
  const argKeys = Object.keys(argObj)

  if (!argKeys.length) {
    return
  }

  const processed: T = { ...argClass }

  argKeys.forEach((key: string): void => {
    const k = `set${key.charAt(0).toUpperCase()}${key.slice(1)}`
    if (typeof processed[k] === 'function' && k in processed) {
      try {
        processed[k](argObj[key])
      } catch (error) {
        console.error(error)
        throw error
      }
    }
  })
  return processed
}
