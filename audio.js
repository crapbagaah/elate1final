
    const audioPairs = document.querySelectorAll('.audioPlayer');
    
    const playButtons = document.querySelectorAll('.playButton');

    const pauseButtons = document.querySelectorAll('.pauseButton');

    const repeatButtons = document.querySelectorAll('.repeatButton');

    playButtons.forEach((playButton, index) => {
      const audioPlayer = audioPairs[index];
      const audioFile =playButton.getAttribute('data-audio');
    
    playButton.addEventListener('click', () => {
        audioPlayer.src= audioFile;
        audioPlayer.play();
  });
});

// Pause button event listeners
pauseButtons.forEach((pauseButton, index) => {
  const audioPlayer = audioPairs[index];

  pauseButton.addEventListener('click', () => {
    audioPlayer.pause();
  });
});

// Repeat button event listeners
repeatButtons.forEach((repeatButton, index) => {
  const audioPlayer = audioPairs[index];

  repeatButton.addEventListener('click', () => {
    audioPlayer.currentTime = 0;
    audioPlayer.play();
  });
});
