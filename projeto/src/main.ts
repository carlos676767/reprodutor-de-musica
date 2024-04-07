const audio = new Audio()

const colocarAudio = (link: string) => {
  audio.src = link
}


const tituloMusicas: any[] = []
const artistas: any[] = []
const musicas: any[] = []
const armazenarImagensMusicas: any[] = []


const musicasGeradas = async () => {
  try {
    const response = await fetch("https://api.deezer.com/chart/0/tracks?limit=100&country=ES");
    const date = await response.json();
    date.data.forEach((albuns: any) => {
      const { title, artist, preview, album } = albuns
      tituloMusicas.push(title)
      artistas.push(artist.name)
      musicas.push(preview)
      armazenarImagensMusicas.push(album.cover_medium)
      criarMostrarLteras(title, artist.name, preview, album.cover_medium)
    });
    passarMusicas()
    musicaDeAgora()
  } catch (erro) {
    console.log(erro)
  }
}

const progress = document.querySelector("progress") as HTMLProgressElement


const imagem = document.querySelector("img") as HTMLImageElement
const recberImagem = (link: string) => {
  imagem.src = link
}

const exibirNomeMusica = (nome: string) => {
  const exibirNome = document.querySelector("h3") as HTMLHeadElement;
  exibirNome.innerHTML = nome;
}

const nomeDbanda = (nomeArtista: string) => {
  const artistaNome = document.getElementById("artistaNome") as HTMLParagraphElement
  artistaNome.innerHTML = nomeArtista
}

const musicaDeAgora = () => {
  colocarAudio(musicas[0])
  recberImagem(armazenarImagensMusicas[0])
  exibirNomeMusica(tituloMusicas[0])
  nomeDbanda(artistas[0])
}


const tempoTotalMusica = () => {
  const tempoTotalMusica = document.getElementById("tempoTotalMusica") as HTMLParagraphElement
  audio.addEventListener("loadedmetadata", () => {
    const obterTemp = Math.floor(audio.duration)
    const minutos = Math.floor(obterTemp / 60)
    tempoTotalMusica.innerHTML = `${minutos}:${obterTemp}`
  })

}

const atualiarSegundosTempMusiuc = () => {
  const tempMusic = document.getElementById("tempMusic") as HTMLParagraphElement
  const obterTemp = Math.floor(audio.currentTime)
  const minutos = Math.floor(obterTemp / 60);
  const segundos = obterTemp - minutos * 60;
  const progresso = `${minutos} ${segundos}`
  tempMusic.innerHTML = `00:${progresso}`
}


const atualiarBarraProgresso = () => {
  const progressoMusica = document.getElementById("progressoMusica") as HTMLProgressElement
  const progressoo = (audio.currentTime / audio.duration) * 100
  isFinite(progressoo) ? progressoMusica.value = progressoo : null
  progressoo === 100 ? progressoMusica.value = 0 : null
}


audio.addEventListener("timeupdate", () => {
  atualiarBarraProgresso();
  atualiarSegundosTempMusiuc()
})


let contarMusicas: number = 0

const passarMusicas = () => {
  ++contarMusicas
  for (let j = 0; j < armazenarImagensMusicas.length; j++) {
    if (contarMusicas === j) {
      colocarAudio(musicas[j])
      recberImagem(armazenarImagensMusicas[j])
      exibirNomeMusica(tituloMusicas[j])
      nomeDbanda(artistas[j])
      playsOfEblock(pause, botaoPlay)
    }
  }
}

const musicaAnterior = () => {
  --contarMusicas
  for (let j = 0; j < armazenarImagensMusicas.length; j++) {
    if (contarMusicas == j) {
      colocarAudio(musicas[j])
      recberImagem(armazenarImagensMusicas[j])
      exibirNomeMusica(tituloMusicas[j])
      nomeDbanda(artistas[j])
      playsOfEblock(pause, botaoPlay)
    }
  }
}



const proximo = document.getElementById("proximo") as HTMLButtonElement
proximo.addEventListener("click", () => {
  passarMusicas()
})

const anterior = document.getElementById("anterior") as HTMLButtonElement


anterior.addEventListener("click", () => {
  musicaAnterior()
})


const criarMostrarLteras = (musica: string, artista: string, preview: string, album: string) => {
  const nomeMusica: HTMLParagraphElement = document.createElement("p")
  const playlist = document.querySelector(".playlist") as HTMLDivElement
  nomeMusica.innerHTML = `${musica} - ${artista} `
  playlist.appendChild(nomeMusica)
  nomeMusica.addEventListener("click", () => {
    colocarAudio(preview)
    recberImagem(album)
    atualiarSegundosTempMusiuc()
    tempoTotalMusica()
    nomeDbanda(artista)
    exibirNomeMusica(musica)
    playsOfEblock(pause, botaoPlay)
  })
}


const pesquisarMusicas = async () => {
  const musica = document.getElementById("musica") as HTMLInputElement
  try {
    const data = await fetch(`https://api.deezer.com/search/track?q=${musica.value}&limit=10`)
    const response = await data.json()
    response.data.forEach((musicas: any) => {
      const { title, artist, preview, album } = musicas
      console.log(preview);
      criarMostrarLteras(title, artist.name, preview, album.cover_medium)
    });
  } catch (error) {
    console.error(error)
  }
}


const musicasPesauqisads = document.querySelector(".fa-magnifying-glass") as HTMLElement
musicasPesauqisads.addEventListener("click", () => {
  pesquisarMusicas()
})




tempoTotalMusica()
musicasGeradas()

const daPlayAudio = () => {
  audio.play()
}

const botaoPlay = document.getElementById("play") as HTMLButtonElement
const pause = document.getElementById("pause") as HTMLButtonElement
const playsOfEblock = (valor1: HTMLElement, valor2: HTMLElement): void => {
  valor1.style.display = "none"
  valor2.style.display = "block"
}

botaoPlay.addEventListener("click", () => {
  daPlayAudio()
  playsOfEblock(botaoPlay, pause)
})


const pausarMusica = () => {
  audio.pause()
}

pause.addEventListener("click", () => {
  pausarMusica()
  playsOfEblock(pause, botaoPlay)
})

const inputVolume = document.getElementById("baixarVolume") as HTMLInputElement

const baixarVolumeFuncao = () => {
  const obterVolumes = parseInt(inputVolume.value) / 100
  audio.volume = obterVolumes
}


inputVolume.addEventListener("input", () => {
  baixarVolumeFuncao()
})

const audioMutado = document.querySelector(".fa-volume-xmark") as HTMLElement

const multarEdesbumutar = (mute: boolean) => {
  audio.muted = mute
}

audioMutado.addEventListener("click", () => {
  multarEdesbumutar(true)
  playsOfEblock(audioMutado, botaoDesmutado)
})


const botaoDesmutado = document.getElementById("desmutado") as HTMLElement


const desmultarAudio = () => {
  multarEdesbumutar(false)
}

botaoDesmutado.addEventListener("click", () => {
  desmultarAudio()
  playsOfEblock(botaoDesmutado, audioMutado)
})

const restart = document.getElementById("restart") as HTMLElement

const reiniciarPagina = () => {
  location.reload()
}

restart.addEventListener("click", () => {
  reiniciarPagina()
})

const botaoRepitir = document.querySelector(".fa-repeat") as HTMLElement

const musicaEmLoppInfinito = () => {
  audio.loop = true
}

botaoRepitir.addEventListener("click", () => {
  musicaEmLoppInfinito()
})

const like = document.querySelector(".fa-heart") as HTMLElement

const pesquisarMusica = document.getElementById("musica") as HTMLInputElement

like.addEventListener("click", () => {
  like.classList.add("coracaoVermelho")
  like.classList.remove("coracaoWhite")
  setTimeout(() => {
    like.classList.remove("coracaoVermelho")
    like.classList.add("coracaoWhite")
  }, 1000);
})