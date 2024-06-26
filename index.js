
const voiceChat = new P2PVoiceChat({ 
    channelId: 'testvchat',
    signalSend: send,
    audioMeter: true,
    onaudiometer: showAudio,
    onreceiveinvite: function() {
        btnCall.innerHTML = 'Accept';
        btnCall.onclick = voiceChat.accept.bind(voiceChat);
        btnHangUp.innerHTML = 'Reject';
        btnHangUp.onclick = voiceChat.reject.bind(voiceChat);
    },
    onvoicechatready: function(){
        meter.showPopover();
        resetButtons();
    },
    onreceivereject: resetButtons,
    onend: resetButtons,
});


/////////////////////////////////////////

const btnCall = document.getElementById('call');
const btnHangUp = document.getElementById('hangup');
const meter = document.getElementById('audioVisualizer');

function showAudio(v) {
    meter.style.scale = 1 + v / 100;
}

function resetButtons() {
    btnCall.innerHTML = 'Call';
    btnCall.onclick = voiceChat.call.bind(voiceChat);
    btnHangUp.innerHTML = 'Hang Up';
    btnHangUp.onclick = voiceChat.end.bind(voiceChat);
}
/////////////////////////////////////////

const signaling = new BroadcastChannel('testvchat');
signaling.onmessage = e => voiceChat.processSignal(e.data.type, e.data.data, e.data.src);

function send(_, type, data, src) {
    signaling.postMessage({data: data, type: type, src: src});
}
