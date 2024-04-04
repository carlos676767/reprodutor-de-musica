const audio = new Audio("m.mp3")

const daPlayAudio = () => {
  audio.play()
}

const botaoPlay = document.getElementById("play") as HTMLButtonElement
const pause = document.getElementById("pause") as HTMLButtonElement
const playsOfEblock = (valor1: HTMLButtonElement, valor2:  HTMLButtonElement): void => {
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
  const obterVolumes = parseInt(inputVolume.value)/100
  audio.volume = obterVolumes
}


inputVolume.addEventListener("input", () => {
  baixarVolumeFuncao()
})

const audioMutado = document.querySelector(".fa-volume-xmark") as HTMLElement

const mutarAudio = () => {
  audio.muted = true
}

audioMutado.addEventListener("click", () => {
  mutarAudio()
})