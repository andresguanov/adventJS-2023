// Puntuación: 250

function organizeGifts(gifts: string): string {
  let res = ""
  // pointers
  let n = 0
  let l = 1

  while (l < gifts.length) {
    const isLetter = gifts[l].match(/[a-z]/i)

    if (isLetter) {
      // Get number and letter
      const number = Number(gifts.slice(n, l))
      const letter = gifts[l]
      n = l + 1

      // Calculate pales, cajas and bolsas
      const pales = Math.floor(number / 50)
      const opTemp = number % 50
      const cajas = Math.floor(opTemp / 10)
      const bolsas = opTemp % 10

      // Build the gifts
      const countPales = `[${letter}]`.repeat(pales)
      const countCajas = `{${letter}}`.repeat(cajas)
      const countBolsas = bolsas > 0 ? `(${`${letter}`.repeat(bolsas)})` : ""

      res += countPales + countCajas + countBolsas
    }

    l++
  }

  return res
}