
const voiceChat = new P2PVoiceChat({ 
    channelId: 'testvchat',
    signalSend: send,
    audioMeter: true,
    onaudiometer: showAudio,
    on
});


/////////////////////////////////////////

const meter = document.getElementById('audioVisualizer');
meter.showPopover();

function showAudio(v) {
    meter.style.scale = 1 + v / 100;
}

/////////////////////////////////////////

const signaling = new BroadcastChannel('testvchat');
signaling.onmessage = e => voiceChat.processSignal(e.data.type, e.data.data, e.data.src);

function send(_, type, data, src) {
    signaling.postMessage({data: data, type: type, src: src});
}
