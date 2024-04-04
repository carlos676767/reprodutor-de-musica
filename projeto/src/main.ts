const audio = new Audio("m.mp3")

const daPlayAudio = () => {
  audio.play()
}

const botaoPlay = document.getElementById("play") as HTMLButtonElement

botaoPlay.addEventListener("click", () => {
  daPlayAudio()
})

const inputVolume = document.getElementById("baixarVolume") as HTMLInputElement



interface Volumes {
  0: number,
  1: number,
  2: number,
  3: number,
  4: number
}

const baixarVolumeFuncao = () => {
  const volumesPersonaliados: Volumes = {
    0: 0,
    1: 0.25,
    2: 0.5,
    3: 0.75,
    4: 1
  }
  const obterVolumes = parseInt(inputVolume.value)
  console.log(volumesPersonaliados[obterVolumes]);
  
}

inputVolume.addEventListener("input", () => {
  baixarVolumeFuncao()
  
})



