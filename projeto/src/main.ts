const musicasGeradas = async () => {
  const token = "BQA3cmSoYMWLQAg_com4plDvG3q5FcfsY4SvBywPWHbp89XPhalaZ3mK7B27rCk3lvXtlKAECEc9RE3jGi6wYOVO5UEbXYelE61-95EjK8yffeCCckUz2amhKcc5FZ-RmhM5iXmbJWZWtwod_df7O5b-VKj7EeVf9pue9OsXwOPm_c5GcrTYXgOumQRkpobKnOnX17qjUfptkyLVYR1C1F2UAkeZqc0qjWYgnbdksqE0f2Nb1B81egxz4JuMFViwKpIdkZDcfkGraOsDrMAN"
  try {
    const data = await fetch(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=enter+sandman&api_key=0e6a2fc1d401d2165d6a012ea73231e3&format=json    `, {
      method: "GET",
   
    })
    const response = await data.json()
    console.log(response);

  } catch (erro) {
    console.log(erro);
    
  }
}

musicasGeradas()


const audio = new Audio("m.mp3")

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