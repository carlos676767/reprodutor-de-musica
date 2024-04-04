const audio = new Audio("m.mp3")

const daPlayAudio = () => {
  audio.play()
}

const botaoPlay = document.getElementById("play") as HTMLButtonElement

botaoPlay.addEventListener("click", () => {
  daPlayAudio()
})

const inputVolume = document.getElementById("baixarVolume") as HTMLInputElement




const baixarVolumeFuncao = () => {
  const obterVolumes = parseInt(inputVolume.value)/100
  audio.volume = obterVolumes
}

inputVolume.addEventListener("input", () => {
  baixarVolumeFuncao()
})



