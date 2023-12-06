// Puntuación: 360

function findNaughtyStep(original: string, modified: string): string {
  if (original.length === modified.length) return ""

  let o = 0
  let m = 0

  while (original[o] == modified[m]) {
    o++
    m++
  }

  return original[o + 1] === modified[m] ? original[o] : modified[m]
}