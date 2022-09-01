async function loadJson() {
const response = await fetch('../dist/script.js')
const text = await response.text()
  const bookmarkLink = document.querySelector('#bookmarkLink')
  bookmarkLink.href = text
}

loadJson()
