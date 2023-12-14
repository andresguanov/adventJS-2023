//Puntuación: 270

function createChristmasTree(ornaments: string, height: number): string {
  // pointers
  let spaces = height - 1
  let or = 0
  let h = 1

  let res = ""

  while (h <= height) {
    const row: string[] = []

    // iterate the ornaments per row
    for (let i = 0; i < h; i++) {
      const char = ornaments[or % ornaments.length]
      or++

      row.push(char)
    }

    // Add row to the response
    res += " ".repeat(spaces) + row.join(" ") + "\n"

    //update pointers
    spaces--
    h++
  }

  return res + "|".padStart(height, " ") + "\n"
}