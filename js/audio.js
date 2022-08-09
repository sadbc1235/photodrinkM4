function preparedMusic() { //this will be executed when the page is ready
  const NBR_OF_BARS = 50;
  window.audioFiles = ['/audio/backnforth.mp3', '/audio/desires.mp3', '/audio/passion.mp3', '/audio/tilldawn.mp3']; //this is gonna be the array with all file names
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  context = new AudioContext();
  analyser = context.createAnalyser();
  // analyser.connect(context.destination);
  
  //now we take all the files and create a button for every file
  const audios = document.querySelectorAll("audio");
  const visualizerContainer__bars = document.querySelectorAll(".visualizer-container__bar");
  audios.forEach( audio => {
    audio.remove();
  })
  visualizerContainer__bars.forEach( visualizerContainer__bars => {
    visualizerContainer__bars.remove();
  })
  sources = []; //we create an array where we store all the created sources in.
  for (let x in audioFiles) {
    let elem = document.createElement('audio'); //we create an audio element
    elem.src = audioFiles[x]; //we append the specific source to it.
    // elem.setAttribute('controls', '');
    elem.setAttribute('loop', '');
    document.body.appendChild(elem); //now we add that element to the body
    sources[x] = context.createMediaElementSource(elem); //we create a mediasource for it
    sources[x].connect(analyser); //we connect that to the analyser
    sources[x].connect(context.destination);
  }
  const frequencyData = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(frequencyData);

  const visualizerContainer = document.querySelector(".visualizer");

  for( let i = 0; i < NBR_OF_BARS; i++ ) {

    const bar = document.createElement("div");
    bar.setAttribute("id", "bar" + i);
    bar.setAttribute("class", "visualizer-container__bar");
    bar.style.transform = `rotate(${7.2 * i}deg) translate(-100%, -130px)`;
    visualizerContainer.appendChild(bar);

  }

  function renderFrame() {

  // Update our frequency data array with the latest frequency data
  analyser.getByteFrequencyData(frequencyData);

  for( let i = 0; i < NBR_OF_BARS; i++ ) {

      // Since the frequency data array is 1024 in length, we don't want to fetch
      // the first NBR_OF_BARS of values, but try and grab frequencies over the whole spectrum
      const index = (i + 10) * 2;
      // fd is a frequency value between 0 and 255
      const fd = frequencyData[index];

      // Fetch the bar DIV element
      const bar = document.querySelector("#bar" + i);
      if( !bar ) {
          continue;
      }

      // If fd is undefined, default to 0, then make sure fd is at least 4
      // This will make make a quiet frequency at least 4px high for visual effects
      const barHeight = Math.max(4, fd/4 || 0);
      bar.style.height = barHeight + "px";

  }

  // At the next animation frame, call ourselves
  setTimeout(() => {
    renderFrame();
  }, 5)
  // window.requestAnimationFrame(renderFrame);

  }

  renderFrame();

  // audio.volume = 0.10;
  // audio.play();
}