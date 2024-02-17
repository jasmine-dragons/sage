const addLocalVideo = async () => {
    const track = await Twilio.Video.createLocalVideoTrack();
    const video = document.getElementById('local').firstElementChild;
    video.appendChild(track.attach());
  };
  
addLocalVideo();