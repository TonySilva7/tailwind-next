function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']

  if (bytes === 0) return '0 Byte'

  let values = bytes
  let unitIndex = 0

  while (values >= 1024 && unitIndex < units.length - 1) {
    values /= 1024
    unitIndex++
  }

  return `${values.toFixed(1)} ${units[unitIndex]}`
}

export { formatBytes }
