const audio = document.querySelector('audio');

const constraints = window.constraints = {
    audio: true,
    video: false
};

function handleSuccess(stream) {
    const audioTracks = stream.getAudioTracks(); //audio取得
    console.log('Got stream with constraints:', constraints);
    console.log('Using audio device: ' + audioTracks[0].label); //device情報
    stream.oninactive = function () {
        console.log('Stream ended');
    };
    window.stream = stream;
    audio.srcObject = stream;
}

function handleError(error) {
    console.log('navigator.getUserMedia error: ', error);
}

navigator.mediaDevices.getUserMedia(constraints).then(handleSuccess).catch(handleError);