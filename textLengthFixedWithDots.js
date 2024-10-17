  textLengthFixed = (text, size) => {
    if(text.split("").length > size){
      let letters = text.split("").slice(0, size).join("")
      letters = letters + "..."
      return letters;
    }else{
      return text
    }
  }
