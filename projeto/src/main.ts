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
    const response = await fetch("https://api.deezer.com/chart/0/tracks");
    const date = await response.json();
    date.data.forEach((albuns: any) => {
      const {title, artist, preview, album} = albuns
      tituloMusicas.push(title)
      artistas.push(artist.name)
      musicas.push(preview)
      armazenarImagensMusicas.push(album.cover_medium)
    });
    testes()
  } catch (erro) {
    console.log(erro)
  }
}
const progress = document.querySelector("progress") as HTMLProgressElement

const atualiarSegundosTempMusiuc = () => {
  const tempMusic = document.getElementById("tempMusic") as HTMLParagraphElement
  const obterTemp = Math.floor(audio.currentTime)
  const minutos = Math.floor(obterTemp / 60);
  const segundos = obterTemp - minutos * 60;
  const progresso = `${minutos} ${segundos}`
  tempMusic.innerHTML = progresso
}

audio.addEventListener("timeupdate", () => {
 atualiarSegundosTempMusiuc();
})

const testes = () => {
  colocarAudio(musicas[4])
}


musicasGeradas()

const imagem = document.querySelector("img") as HTMLImageElement
const recberImagem = (link: string) => {
  imagem.src = link
  console.log(imagem);
}


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
  console.log(audio.duration);
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

like.addEventListener("click", () => {
  like.classList.add("coracaoVermelho")
  setTimeout(() => {
    like.classList.remove("coracaoVermelho")
    like.classList.add("coracaoWhite")
  }, 1000);
})