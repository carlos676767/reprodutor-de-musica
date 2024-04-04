const audio = new Audio("m.mp3")

const daPlayAudio = () => {
  audio.play()
}

const botaoPlay = document.getElementById("play") as HTMLButtonElement

botaoPlay.addEventListener("click", () => {
  daPlayAudio()
})