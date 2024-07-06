if ('serviceWorker' in navigator) {
   navigator.serviceWorker.register("/sw.js")
}

const SPLASH_COLORS = ['darkorange', 'crimson', 'blueviolet', 'yellowgreen', 'coral', 'deepskyblue', 'hotpink', 'royalblue', 'magenta', 'turquoise']
let currentSplashColor = SPLASH_COLORS[1]

const splashScreenEl = document.getElementById('splash-screen')
const counterEl = document.getElementById('counter')
const introTextEl = document.getElementById('intro-text')
const itemsContainerEl = document.getElementById('items-container')

let isCountdownRunning = false
splashScreenEl.addEventListener('click', () => {
   if(isCountdownRunning) {
      return
   }
   isCountdownRunning = true

   introTextEl.classList.add('hidden')
   counterEl.classList.remove('hidden')

   const items = itemsContainerEl.querySelectorAll('img')
   items.forEach(item => item.classList.add('hidden'))
   const itemsToShow = Math.ceil(Math.random() * items.length)

   for (let itemsVisible = 0; itemsVisible < itemsToShow; itemsVisible++) {
      const hiddenItems = itemsContainerEl.querySelectorAll('img.hidden')
      hiddenItems.item(Math.floor(Math.random() * hiddenItems.length)).classList.remove('hidden')
   }

   let currentCount = 5
   counterEl.innerHTML = currentCount--
   const countdownInterval = setInterval(() => {
      counterEl.innerHTML = currentCount--
      if(currentCount < 0) {
         clearInterval(countdownInterval)
         splashScreenEl.classList.add('hidden')
      }
   }, 1000)
})

itemsContainerEl.addEventListener('click', () => {
   isCountdownRunning = false
   splashScreenEl.classList.remove('hidden')
   introTextEl.classList.remove('hidden')
   counterEl.classList.add('hidden')
   currentSplashColor = SPLASH_COLORS[SPLASH_COLORS.indexOf(currentSplashColor) + 1]
   splashScreenEl.style.background = currentSplashColor
})