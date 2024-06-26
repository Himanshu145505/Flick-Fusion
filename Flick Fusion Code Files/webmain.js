// PLay Video Function for playing video in independent video player
function playVideo(videoFileName, box) {
    const videoPath = videoFileName;
    const video = box.querySelector('.poster-video');

    video.src = videoPath;
    video.style.display = 'block';
    video.play();
}

// Stop Video Function

function stopVideo(box) {
    const video = box.querySelector('.poster-video');

    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
}


// Video Contols over hover and in Player


function showVideoControls(videoFileName) {
    const videoPath = videoFileName;
    const encodedPath = encodeURIComponent(videoPath);
    const videoPlayerUrl = `videoPlayer.html?videoPath=${encodedPath}`;
    
  
    window.open(videoPlayerUrl, '_blank');
}


/* */
