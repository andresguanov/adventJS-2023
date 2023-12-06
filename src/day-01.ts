// Puntuación: 340

function findFirstRepeated(gifts: number[]): number {
  const set = new Set<number>()

  const res = gifts.find((gift, index) => {
    set.add(gifts[index - 1])
    return set.has(gift)
  })

  return res ?? -1
}