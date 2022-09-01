
const seekBar = document.createElement('div')
const playbackWrapper = document.createElement('div');

function init() {
  const playbackRate = [0.75, 1, 1.25, 1.5, 1.75, 2];
  playbackRate.forEach(item => {
    const el = document.createElement('button')
    el.textContent = item;
    el.addEventListener('click', () => {
      video.playbackRate = item;
    });
    playbackWrapper.appendChild(el)
  })
  controlBar.appendChild(playbackWrapper)

  const seekControls = [
    {label: '<<<', value: -20},
    {label: '<<', value: -10},
    {label: '<', value: -5},
    {label: '>', value: 5},
    {label: '>>', value: 10},
    {label: '>>>', value: 20},
  ]
  seekControls.forEach(item => {
    const el = document.createElement('button')
    el.textContent = item.label;
    el.addEventListener('click', () => {
      video.currentTime = video.currentTime + item.value;
    });
    seekBar.appendChild(el)
  })
  controlBar.appendChild(seekBar)

}

const video = document.querySelector('video');

// Video Indicator
const videoIndicator = document.createElement('input')
videoIndicator.type = 'checkbox'
videoIndicator.disabled = true

// Toggle 
const toggle = document.createElement('input')
toggle.type = 'checkbox'
toggle.addEventListener('click', event => {
  if(event.target.checked) {
    seekBar.style.visibility = 'hidden'
    playbackWrapper.style.visibility = 'hidden'
  } else {
    seekBar.style.visibility = 'visible'
    playbackWrapper.style.visibility = 'visible'
  }
})


// Control bar that holds everyting
const controlBar = document.createElement('div')
controlBar.style.position = 'fixed';
controlBar.style.top = '0px';
controlBar.style.left = '0px';
controlBar.appendChild(videoIndicator)  
controlBar.appendChild(toggle)  


document.body.appendChild(controlBar)
if (video) {
  videoIndicator.checked = true
  init();
}
