// Puntuación: 240

function drawGift(size: number, symbol: string): string {
  if (size === 1) return "#\n"
  let spacesLen = size - 1
  let rows = size * 2 - 2
  let res = ""
  let frontLen = -1
  let i = 0

  while (i <= rows) {
    const sym = i % (size - 1) === 0 ? "#" : symbol
    const spaces = Math.max(spacesLen, 0)
    const front = frontLen >= 0 ? symbol.repeat(frontLen) + "#" : ""
    const back = " ".repeat(spaces)

    res += `${back}#${sym.repeat(size - 2)}#${front}\n`

    if (i < rows / 2) {
      frontLen++
    } else {
      frontLen--
    }
    spacesLen--
    i++
  }

  return res
}