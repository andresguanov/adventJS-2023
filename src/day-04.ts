function decode(message: string): string {
  let messageArray = message.split("")
  let stack: number[] = []

  for (let i = 0; i < message.length; i++) {
    if (messageArray[i] === "(") {
      stack.push(i)
      
    } else if (messageArray[i] === ")") {
      const j = stack.pop()!
      messageArray = [
        ...messageArray.slice(0, j),
        ...messageArray.slice(j + 1, i).reverse(),
        ...messageArray.slice(i + 1, messageArray.length),
      ]

      i -= 2
    }
  }

  return messageArray.join("")
}
