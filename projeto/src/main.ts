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
console.log(botaoDesmutado);


const desmultarAudio = () => {
  multarEdesbumutar(false)
}

botaoDesmutado.addEventListener("click", () => {
  desmultarAudio()
  playsOfEblock(botaoDesmutado, audioMutado)
})