
    // Get the audio element tag
    const audio = document.querySelectorAll("audio");
    let audioCtx1= new AudioContext();
    let audioCtx2= new AudioContext();
    let audioCtx3= new AudioContext();
    let audioCtx4= new AudioContext();
    
    function preparedMusic(audioCtx ,audio) {
      
        // The number of bars that should be displayed
        const NBR_OF_BARS = 50;

        // Create an audio context
        const ctx = audioCtx;

        // Create an audio source
        const audioSource = ctx.createMediaElementSource(audio);

        // Create an audio analyzer
        const analayzer = ctx.createAnalyser();

        // Connect the source, to the analyzer, and then back the the context's destination
        audioSource.connect(analayzer);
        audioSource.connect(ctx.destination);

        // Print the analyze frequencies
        const frequencyData = new Uint8Array(analayzer.frequencyBinCount);
        analayzer.getByteFrequencyData(frequencyData);

        // Get the visualizer container
        const visualizerContainer = document.querySelectorAll(".visualizer");

        // Create a set of pre-defined bars
        for(let j=0; j<visualizerContainer.length; j++) {
          for( let i = 0; i < NBR_OF_BARS; i++ ) {

            const bar = document.createElement("div");
            bar.setAttribute("id", "bar" + i);
            bar.setAttribute("class", "visualizer-container__bar");
            bar.style.transform = `rotate(${7.2 * i}deg) translateY(130px)`;
            visualizerContainer[j].appendChild(bar);

          }
        }
        

        // This function has the task to adjust the bar heights according to the frequency data
        function renderFrame() {

            // Update our frequency data array with the latest frequency data
            analayzer.getByteFrequencyData(frequencyData);

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
                const barHeight = Math.max(4, (fd/2.5) || 0);
                bar.style.height = barHeight + "px";

            }

            // At the next animation frame, call ourselves
            window.requestAnimationFrame(renderFrame);

        }

        renderFrame();

        audio.volume = 0.10;
    };

    const startMusic = () => {
        audioCtx1.resume()
        audio[0].play();
    }

    const initMusic = () => {
      audio[0].currentTime = 0.1;
      audioCtx1.suspend();
    }

    preparedMusic(audioCtx1, audio[0]);
    // preparedMusic(audioCtx2, audio[1]);
    // preparedMusic(audioCtx3, audio[2]);
    // preparedMusic(audioCtx4, audio[3]);

    const startBtn = document.querySelector(".startBtn");
    const stopBtn = document.querySelector(".stopBtn");
  
    startBtn.onclick = () => {
      startMusic();
    }
    stopBtn.onclick = () => {
      initMusic();
    }
