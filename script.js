function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("view360")
  
    // pegar a tag img
    const img = document.querySelector("#product-img img")
  
    //substituir a imagem
    if (html.classList.contains("view360")) {
      // se tiver 360 mode, adicionar imagem light
      img.setAttribute("src", "./assets/product-animated.gif"),
      img.setAttribute(
          "alt",
          "Sofá elegante na cor rosa chá. Possui quatro pernas de madeira escura."
        )
    } else {
      // se tiver sem light mode, manter a imagem dark
      img.setAttribute("src", "./assets/product-static.jpg"),
      img.setAttribute(
          "alt",
          "Sofá elegante na cor rosa chá. Possui quatro pernas de madeira escura."
        )
    }
  }