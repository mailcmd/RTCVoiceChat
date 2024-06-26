document.addEventListener('click', e => {
    P2PVoiceChat.callingTone.play();
    P2PVoiceChat.callingTone.pause();
    P2PVoiceChat.ringTone.play();
    P2PVoiceChat.ringTone.pause();
}, { once: true });

class P2PVoiceChat {
    static ringTone = new Audio('data:audio/mp3;base64,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');
    static callingTone = new Audio('data:audio/mp3;base64,SUQzAwAAAAABV1RTU0UAAAAvAAAATEFNRSA2NGJpdHMgdmVyc2lvbiAzLjEwMCAoaHR0cDovL2xhbWUuc2YubmV0KVRJVDIAAAAFAAAAMTYxNFRMRU4AAAAFAAAANDk5MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+MYxAAHuAHKOUIYALa2gbYoEpD63xBl3kOrw+Xf6/5xfnPkOXeH///xBE4dDgcDgeDwfDgAeOeLnHGJQUkl8UAMgGqxC+tH/+MYxBwUQQ72WZNQAMR+AAoDxoBThdMgbvHN/AbALhTgUAbBYQ47/4X4tk48MMnBKIgqd+D4EBAHwL/6OfDEGv/pZaKPU+r9/+MYxAYOMKJ0AdYAAWjUkOSFnRURWogqDUC4GGwV4GNYuIHRJAYG3slAGGsIgAQQwMDgEwMAYBg9MPVEFb5Pym///8J20UZL/+MYxAgNeKZkAD78YNIIDSqZGAwZgdDvGWPxwYwgvBgbg6mAoBgYBoCoGALEgCEz2aWv///+7////9Mt1+/8+1AkpVAQKYkU/+MYxA0OuKZcAFa8YGdQGwdnj/GH4OCcZuspp0CumGiDAYJADJEA0lKWeQCpfUmWjf//+p3////6P9pv//+wQMzWAaqrQaYJ/+MYxA0NGKZoAD58YPlRhbhqm1Q12Z2oU5hOAXGB2AmYDABgAAEL/q2NLxv////V/////TVv//04a5qsRfEADQqsEXMVGqMA/+MYxBMMCKZoAC68YGzEEIpwqDKFAJgKAWgPIgAFa2zX+j///1f////1Km///8IW5Jol/jFCNQ096DCgC1Ndtc0zQAhzCDAW/+MYxB0LEKZsAD58YAwFEWALVXWCaS6WH///+qpv///CBw2GO+ygxSzm6MIcQE1Jn/TLbDJMHQDgwKQFzAQAKLKIPrsa3y7//+MYxCsMaKZsAD58YP///////01v//+4M6qukAJgBYBSGIvmBaLQZF1dRiWiMGA4CeIQGEEav08WLPLf/////////9Bv///C/+MYxDQL+KZsAC68YKz5Q1HoDDAKk+yjCqBTNjswszdgOQUI8PAwA4BdAWqgz1u2v///+/////9Nb///wActljnJ3AkqZiYY/+MYxD8L6KZsAD58YDSJyaFkx5knh6mC0CMYD4DZgGAFFmC+auGv4////9/////6lW///8HTEUAxggJji5lWRrPJg+jcGl5p/+MYxEoMkKZsAC68YCGU6KwYMQMpgKgQIyr+L8prMFv+////3m///8FVOk/UqgcGFmIuPMMgB43LxmDQAAWAQq4CB4MBUAUE/+MYxFILuKZkAD68YIAaIDC2ia//0f/v/////TVv///EP23jJkQhkuYCUYGol5lDSmmLCHaYFwIRgGgLmAEAIgATXZo/fP///+MYxF4MmKZoAD68YP/v/////Qpv//+4LmUonFmTFDzKojZVzCTFINWigIzAQ/jB0BDMCEA5JFpSYqxmc5////9/////5epB/+MYxGYMWKZwABa8YIg9/b+roYz4YsBMKF+gLEgArAHvamJQH0dI77hrfBkGH+B+YNAERgYgOmuoEQgLT0PJnxX8jZV/8ns//+MYxG8MkKZoAD68YN3r//2f/+0SAAORbq1v9jU9PjSd5WXI3Dh5BwBQ8TDGeBMGULsAAXBcAtBIuhf72SPlfus9C+3+v5fV/+MYxHcQwKJcsKewgKNGy1v/r+zb//6KIAMYRb7N9/ZtQFKUhUEYIOZYuatQdi2YdoqRwhUkGk2IIYYQIZgigDDQDiHAvKl8/+MYxG8PoKZ6WBZ8YK2n3Zz9qN//2//dX//9/9X//9ct//+nCWpQXnWggPMCIBowYQZTEMGIOWG941PhODDpBlMGADIwMQJT/+MYxGsQuKJhcD68YHzMhi76cgcp3rQrzm4f+jb/////cm///8Ms2RxBQMYKKGBG5gsMYEA85jY86mHML6YBYOhYAtBgBRfg/+MYxGMPKKJcAFewZKwA08WhXv///9f////9NW///8UmASAMMZAYBAGAYHwNgAg0AxQDuAySHyA8xP6A48lVAwyg9AwOgAAw/+MYxGENGKZkAD78YDQAgDADB8IgmGX01c9WONq055V25buayllFTLmZilSh03rH4cXQcisCwAFwkqFJszOZUARGU2LTmBoy/+MYxGcN0KZsAVYAAJAIUGsLAOaJkPEkjc4lU1m2jCjuKyRJhfTNP//zc+anzYFgqz/1A4ZMGgk3/9YreZNKjNqpRih9X4oC/+MYxGoYQXa4AZtoALhgIwoC4CAkGAhRqwEKaqvOdVSjFD1XYCIRP8RFToKu/8S/LExBTUVMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxEQLOQIAAcMYAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxFIAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxI0AAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpMQU1FMy4xMDCqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxMQAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqVEFHMTYxNAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8=');

    constructor({
        channelId,
        signalSend, // 4 params: channelid, type, data, role
        iceServers = null,
        enableSounds = true,
        onend = ()=>{},
        audioMeter = false,
        onaudiometer = ()=>{},
        onreceiveinvite = ()=>{},
        onreceiveaccept = ()=>{},
        onreceivereject = ()=>{},
        onvoicechatready = ()=>{},
    }) {
        this.incurse = false;
        this.channelId = channelId;
        this.enableSounds = enableSounds;        
        this.onend = onend;
        this.onreceiveinvite = onreceiveinvite;
        this.onreceiveaccept = onreceiveaccept;
        this.onreceivereject = onreceivereject;
        this.onvoicechatready = onvoicechatready;
    
        this.emitter = new P2PVoiceChannel({
            role: 'master',
            channelId: channelId,
            iceOpts: iceServers,
            signalSend: signalSend,
            onchannelclosed: onend,
            onchannelready: (function() {
                this.incurse = true;
                this.onvoicechatready(this);
            }).bind(this),
            onreceiveaccept: (function() {
                console.log('Call accepted!');
                this.onreceiveaccept(this);
            }).bind(this),
            onreceivereject: (function() {
                console.log('Call rejected!');
                this.onreceivereject(this);
            }).bind(this)
        });
        
        this.receiver = new P2PVoiceChannel({
            role: 'slave',
            channelId: channelId,
            iceOpts: iceServers,
            signalSend: signalSend,
            onchannelready: this.#responseCall.bind(this),
            onchannelclosed: onend,
            onreceiveinvite: (function(data) {
                console.log('Incoming call...');
                this.onreceiveinvite(data);
            }).bind(this),
            audioMeter: audioMeter,
            onaudiometer: onaudiometer
        });        
    }
    
    call() {
        if (this.emitter.status == 'Disconnected') {
            this.emitter.invite();
            if (this.enableSounds) {
                P2PVoiceChat.callingTone.play();
            }
        } else {
            console.warn(`Cannot emit call, emitter is in '${this.emitter.status}' status`);
        }
    }
    
    accept() {
        if (this.enableSounds) {
            P2PVoiceChat.ringTone.pause();
        }
        this.receiver.sendAccept();
    }

    reject() {
        if (this.enableSounds) {
            P2PVoiceChat.ringTone.pause();
        }
        this.receiver.sendReject();
    }
    
    #responseCall() {
        if (this.emitter.status == 'Disconnected') {
            this.emitter.start();
        } else {
            console.warn(`Cannot emit response call, receiver is in '${this.emitter.status}' status`);
        }
    }
    
    end() {
        this.emitter.end();
        this.receiver.end();
        P2PVoiceChat.callingTone.pause();
        P2PVoiceChat.ringTone.pause();
        this.incurse = false;
        this.onend(this);
    }
    
    processSignal(type, data, fromRole) {
        switch (type) {
            case 'invite':
                if (this.enableSounds) {
                    P2PVoiceChat.ringTone.play();
                }
                this.receiver.recvInvite(JSON.parse(atob(data)));
                break;
            case 'accept':
                if (this.enableSounds) {
                    P2PVoiceChat.callingTone.pause();
                }
                this.emitter.recvAccept();
                break;
            case 'reject':
                if (this.enableSounds) {
                    P2PVoiceChat.callingTone.pause();
                }
                this.emitter.recvReject();
                break;
            case 'offer':
                if (this.enableSounds) {
                    P2PVoiceChat.ringTone.pause();
                }
                this.receiver.recvOffer(data);
                break;
            case 'answer':
                this.emitter.recvAnswer(data);
                break;
            case 'candidate':
                if (fromRole == 'master') {
                    this.receiver.recvCandidate(data);
                } else {
                    this.emitter.recvCandidate(data);
                }
                break;
            case 'ready':
                if (fromRole == 'master') {
                    this.receiver.recvReady();
                } else {
                    this.emitter.recvReady();
                }                    
                break;
            case 'end':
                if (fromRole == 'master') {
                    this.receiver.end();
                } else {
                    this.emitter.end();
                }                    
                break;
        }        
    }
    
    setChannelId(cid) {
        this.channelId = cid;
        this.emitter.setChannelId(cid);
        this.receiver.setChannelId(cid);
    }
    
}

P2PVoiceChat.callingTone.loop = true;
P2PVoiceChat.ringTone.loop = true;

class P2PVoiceChannel {
    static mediaConstraints = { audio: true, video: false };
    static offerOptions = { offerToReceiveAudio: true, offerToReceiveVideo: false };
    static p2pOpts = {
        iceServers: [{ urls: ["stun:stun.gmx.net"] }]
     };
    
    constructor({
        iceOpts,
        role,
        name,
        channelId,
        signalSend,    // 4 params: channelid, type, data, role
        onstatuschange = console.log,
        onreceiveinvite = console.log,
        onreceiveaccept = console.log,
        onreceivereject = console.log,
        onchannelready = console.log,
        onchannelclosed = console.log,
        audioMeter = false,
        onaudiometer = ()=>{},
        onconnectionstatechange = console.log, 
        oniceconnectionstatechange = console.log
    }) {       
        
        /// instance  
        this.audioStream = null;
        this.audioTracks = null;
        
        this._status = 'Disconnected';
        this.iceOpts = iceOpts ?? P2PVoiceChannel.p2pOpts;
        this.role = role;
        this.name = name;
        this.channelId = channelId;
        this.audioMeter = audioMeter;
        this.onaudiometer = onaudiometer;
        
        this.signalSend = (function(data, type) {
            signalSend(this.channelId, type, data, this.role);
        }).bind(this);

        this.onstatuschange = onstatuschange;
        this.onreceiveinvite = onreceiveinvite;
        this.onreceiveaccept = onreceiveaccept;
        this.onreceivereject = onreceivereject;
        this.onchannelready = onchannelready;
        this.onchannelclosed = onchannelclosed;
    }
    
    // getters / setters    
    get status() {
        return this._status;
    }
    set status(val) {
        this.onstatuschange(val);
        this._status = val;
    }
    
    get muted() {
        if (!this.audioTracks) {
            console.warn('Audio not initialized!');
            return;
        }
        return !this.audioTracks[0].enabled;
    }    
    set muted(v) {
        !!v ? this.mute() : this.unmute();
    }
    
    // general methods     
    setChannelId(cid) {
        this.channelId = cid;
    }
    
    mute() {        
        if (!this.audioTracks) {
            console.warn('Audio not initialized!');
            return;
        }
        this.audioTracks && (this.audioTracks[0].enabled = false);
    }
    unmute() {
        if (!this.audioTracks) {
            console.warn('Audio not initialized!');
            return;
        }
        this.audioTracks && (this.audioTracks[0].enabled = true);
    }

    end() {
        if (this.status == 'Disconnected') return;
        if (this.connection) this.connection.close();
        if (this.role == 'master' && this.audioTracks) this.audioTracks.forEach( track => track.stop() );
        if (this.audioContext) this.audioContext.close();
        this.status = 'Disconnected';
        this.signalSend(null, 'end');
        this.onchannelclosed(this);
    }

    recvReady() {
        this.status = 'Ready';
        if (this.role == 'slave') {
            if (this.audioMeter) this.audioVisualizer();
            this.remoteAudio.autoplay = true;
            this.remoteAudio.play();
            this.signalSend(null, 'ready');
        }
        this.onchannelready(this);
    }    

    // role master methods
    invite() {
        this.status = 'Calling';
        const data = btoa(JSON.stringify({channelId: this.channelId}));
        this.signalSend(data, 'invite');
    }
    
    recvAccept() {
        this.status = 'Call accepted';
        this.onreceiveaccept(this);
        this.start();
    }
    recvReject() {
        this.status = 'Disconnected';
        this.onreceivereject(this);
    }

    start() {
        this.status = 'Getting media';
        try {
            this.stream = navigator.mediaDevices.getUserMedia(P2PVoiceChannel.mediaConstraints).then( (function(stream) {
                this.audioStream = stream;
                this.audioTracks = this.audioStream.getAudioTracks();
                console.log(`Using audio device: ${this.audioTracks[0].label}`);
                this.connect();
            }).bind(this)).catch( err => console.log(err) );
        } catch (e) {
            console.error(`getUserMedia() error: ${e.name}`);
            return;
        }    
    } 
    
    connect() {
        this.status = 'Creating RTP connection';
        this.connection = new RTCPeerConnection({configuration: P2PVoiceChannel.offerOptions, ...this.iceOpts});        
        this.connection.onconnectionstatechange = this.onconnectionstatechange;
        this.connection.oniceconnectionstatechange = this.oniceconnectionstatechange;
        
        this.connection.onicecandidate = (async function(e) {
            if (e.candidate) {
                console.log(`Sending iceCandidate`);
                const data = btoa(JSON.stringify(e.candidate));
                this.signalSend(data, 'candidate');
            } 
        }).bind(this);
        this.status = 'Adding audio track';
        this.audioTracks.forEach( track => this.connection.addTrack(track, this.audioStream) );

        this.sendOffer();
    }

    sendOffer() {        
        this.status = 'Creating offer';
        this.connection.createOffer(P2PVoiceChannel.offerOptions).then( async offer => {
            this.status = 'Offer created';
            this.offer = offer;
            try {
                this.status = 'Setting master localDescription';
                await this.connection.setLocalDescription(this.offer);
                const data = btoa(JSON.stringify(this.offer));
                this.status = 'Sending offer';
                this.signalSend(data, 'offer');
            } catch (e) {
                console.error(`createOffer -> setLocalDescription error: ${e}`);
            }
        }).catch( e => console.error(`createOffer error: ${e}`) );
    }

    async recvAnswer(answer) {
        const answerDesc = new RTCSessionDescription(JSON.parse(atob(answer)));
        this.status = 'Setting master remoteDescription';
        await this.connection.setRemoteDescription(answerDesc);
        this.signalSend(null, 'ready');
    }
    
    // role slave methods
    recvInvite(data) {
        // It guessed that in this function the user has to receive a visual warning 
        // of a incomming call and choose accept or reject. 
        this.status = 'Incoming call';
        this.onreceiveinvite(data);
    }    
    
    // user choose accept
    sendAccept() {
        this.status = 'Accepting call';
        this.signalSend(null, 'accept');
    }
    // user choose reject
    sendReject() {
        this.status = 'Disconnected';
        this.signalSend(null, 'reject');
    }
    
    async recvOffer(offer) {
        this.connection = new RTCPeerConnection(this.iceOpts);
        this.connection.onconnectionstatechange = this.onconnectionstatechange;
        this.connection.oniceconnectionstatechange = this.oniceconnectionstatechange;
        
        this.connection.onicecandidate = (async function (e) {
            if (e.candidate) {
                console.log(`Sending iceCandidate`);
                const data = btoa(JSON.stringify(e.candidate));
                this.signalSend(data, 'candidate');
            } 
        }).bind(this);

        this.connection.ontrack = e => {
            this.status = 'Playing remote audio track';
            this.remoteAudio = new Audio();
            this.remoteAudio.srcObject = e.streams[0];
        }

        this.status = 'Receiving offer';
        const offerDesc = new RTCSessionDescription(JSON.parse(atob(offer)));

        this.status = 'Setting slave remoteDescription';
        await this.connection.setRemoteDescription(offerDesc);
        
        this.sendAnswer();
    }
    
    sendAnswer() {
        this.status = 'Creating answer';
        this.connection.createAnswer().then( async answer => {
            this.status = 'Answer created';
            this.answer = answer;
            try {
                this.status = 'Setting slave localDescription';
                this.localDescription = await this.connection.setLocalDescription(this.answer);
                const data = btoa(JSON.stringify(this.answer));
                this.status = 'Sending answer';
                this.signalSend(data, 'answer');
            } catch (e) {
                console.error(`createAnswer -> setLocalDescription error: ${e}`);
            }
        }).catch( e => console.error(`createAnswer error: ${e}`) );
    }

    async recvCandidate(candidate) {
        await this.connection.addIceCandidate(JSON.parse(atob(candidate)));
    }
    
    async audioVisualizer() {
        const audioContext = new AudioContext();
        this.audioContext = audioContext;
        
        if (!this.remoteAudio.captureStream) {
            const microphone = audioContext.createMediaElementSource(this.remoteAudio);
            const analyser = audioContext.createAnalyser();
            analyser.smoothingTimeConstant = 0.8;
            analyser.fftSize = 512;
            microphone.connect(analyser);
            const scriptProcessor = audioContext.createScriptProcessor(512, 1, 1);
            analyser.connect(scriptProcessor);

            scriptProcessor.connect(audioContext.destination);
            scriptProcessor.onaudioprocess = (function() {
                const array = new Uint8Array(analyser.frequencyBinCount);
                analyser.getByteFrequencyData(array);
                const arraySum = array.reduce((a, value) => a + value, 0);
                const average = arraySum / array.length;
                this.onaudiometer(Math.round(average), this);      
            }).bind(this);

        } else { 
            const microphone = audioContext.createMediaStreamSource(this.remoteAudio.captureStream());
            let url_worklet = URL.createObjectURL( new Blob([ `
                    // taken from https://stackoverflow.com/questions/62702721/how-to-get-microphone-volume-using-audioworklet
                    const SMOOTHING_FACTOR = 0.8;
                    const MINIMUM_VALUE = 1;
                    registerProcessor('vumeter', class extends AudioWorkletProcessor {

                      _volume
                      _updateIntervalInMS
                      _nextUpdateFrame

                      constructor () {
                        super();
                        this._volume = 0;
                      }

                      process (inputs, outputs, parameters) {
                        const input = inputs[0];
                        if (input.length > 0) {
                          const samples = input[0];
                          let sum = 0;
                          let rms = 0;

                          for (let i = 0; i < samples.length; ++i)
                            sum += Math.abs(samples[i]);

                          this._volume = Math.min(sum, MINIMUM_VALUE);
                          this.port.postMessage({volume: this._volume});
                        }                        
                        return true;
                      }
                    });
            ` ], { type: 'application/javascript' } ) );
            await audioContext.audioWorklet.addModule( url_worklet );
            const processor = new AudioWorkletNode( audioContext , 'vumeter');
            processor.port.onmessage = (function(e) { 
                this.onaudiometer(Math.round(100*e.data.volume), this);
            }).bind(this);
            microphone.connect(processor).connect(audioContext.destination);
        }
    }
}
