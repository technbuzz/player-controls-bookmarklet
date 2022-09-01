async function loadJson() {
const response = await fetch('../dist/bookmark.min.js')
const text = await response.text()
  const bookmarkLink = document.querySelector('#bookmarkLink')
  bookmarkLink.href = text
}

loadJson()
