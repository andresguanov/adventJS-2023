// Puntuación: 160

function cyberReindeer(road: string, time: number): string[] {
  const res = [road]
  let i = 1
  let p = 1
  let temp = "."
  let split = road.split("")

  while (i < time) {
    if ((i < 5) && (road[p] === "|")) {
      res.push(road)
      i++
      continue
    }
    if (i === 5) {
      road = road.replaceAll("|", "*")
      split = road.split("")
    }

    split[p - 1] = temp
    temp = split[p]
    split[p] = "S"

    road = split.join("")

    res.push(road)

    p++
    i++
  }
  return res
}