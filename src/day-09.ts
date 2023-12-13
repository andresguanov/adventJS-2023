// Puntuación: 370

type Light = "🟢" | "🔴"

function adjustLights(lights: Light[]): number {
  const map : Record<Light, Light> = {
    "🟢": "🔴",
    "🔴": "🟢",
  }

  let count1 = 0
  let count2 = 0
  let temp1 = lights[0]
  let temp2 = lights[lights.length - 1]

  for (let i = 0; i < lights.length; i++) {
    if (lights[i] !== temp1) count1++
    if (lights[lights.length - i - 1] !== temp2) count2++

    temp1 = map[temp1]
    temp2 = map[temp2]
  }

  return Math.min(count1, count2)
}
