// Puntuación: 270

function manufacture(gifts: string[], materials: string): string[] {
  const mapMaterials = new Set<string>(materials)

  const isValid = (materials: Set<string>, gift: string) => {
    for (const letter of gift) {
      if (!materials.has(letter)) return false
    }

    return true
  }

  return gifts.filter(gift => isValid(mapMaterials, gift))
}