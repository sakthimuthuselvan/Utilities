
  textLengthFixed = (text, size) => {
    let letters = text.split("").slice(0, size).join("")
    letters = letters + "..."
    return letters;
  }
