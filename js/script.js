// toogle menu button

function toggleMenu() {
  const menu = document.querySelector('.menu')
  const nav = document.querySelector('.nav')
  menu.classList.toggle('active')
  nav.classList.toggle('active')
}

// cahnga the bcg video when click

function changeVideo(name) {
  const bgVideoList = document.querySelector('.bg-video')
  bgVideo.src = `./assets/videos/${name}.mp4`
  bgVideo.play()
}
