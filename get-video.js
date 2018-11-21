let captureButton = document.getElementById('capture');
captureButton.addEventListener('click', async (event) => {
    try {
        let mediaStrem = await navigator.mediaDevices.getUserMedia(
            { video: true, audio: true }
        );
        let mediaElement = document.createElement('video');
        mediaElement.srcObject = mediaStrem;
        mediaElement.autoplay = true;
        mediaElement.setAttribute('playsinline', 'true');
        document.body.appendChild(mediaElement);
        document.body.removeChild(captureButton);
    } catch (error) {
        console.log(error);
        alert('デバイスを利用できませんでした。');
    }
    event.preventDefault();
});