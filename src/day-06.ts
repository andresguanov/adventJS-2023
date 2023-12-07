// Puntuación: 360

function maxDistance(movements: string) {
  const map = {
    "<": 0,
    ">": 0,
    "*": 0,
  }

  for (const move of movements) {
    map[move]++
  }

  return Math.abs(map[">"] - map["<"]) + map["*"]
}