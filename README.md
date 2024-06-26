# RTCVoiceChat
This is just an experiment about WebRTC and audio channels. I looked for a simple approach. First I made a base class (**P2PVoiceChannel**) to manage one channel to send audio from source (named **master** role) to destination (named **slave** role). Then I made a container class (**P2PVoiceChat**) that instance 2 times the **P2PVoiceChannel**, one as **EMITTER** and other for **RECEIVER**. 

To create a simple 2 agents voice chat, first you need to instantiate **P2PVoiceChat** at each end, then set for each instance a signal sender function, and finally leave it up to the instance to handle the abstract event *onsignalreceived* (you need to implement your own signal sender and receiver). 

```mermaid 
sequenceDiagram
  title Connection process
  participant E1 as AGENT 1 - Emitter
  participant R2 as AGENT 2 - Receiver

  E1->>R2: Send INVITE
  R2--xE1: Send REJECT
  Note over E1,R2: Call rejected, end of transaction
  R2->>E1: Send ACCEPT
  activate E1
  Note left of E1: Create<br/>OFFER
  E1->>R2: Send OFFER
  deactivate E1
  activate R2
  Note right of R2: Create<br/>ANSWER
  R2->>E1: Send ANSWER
  deactivate R2
  E1->>R2: Send READY
  Note over E1,R2: Channel between AGENT 1 Emitter<br/>and AGENT 2 Receiver established
  %% Emitter of agent 1 now has an open channel to Receiver of agent 2
  create participant E2 as AGENT 2 - Emitter
  R2->>E2: Pass control to his emitter
  create participant R1 as AGENT 1 - Receiver
  E2->>R1: Send INVITE
  R1->>E2: Send ACCEPT
  activate E2
  Note left of E2: Create<br/>OFFER
  E2->>R1: Send OFFER
  deactivate E2
  activate R1
  Note right of R1: Create<br/>ANSWER
  R1->>E2: Send ANSWER
  deactivate R1
  E2->>R1: Send READY
  Note over E2,R1: Channel between AGENT 2 Emitter<br/>and AGENT 1 Receiver established
  Note over E1,R1: Now 2 channel by agent are open and bidireccional communication is established
  
%%{init:{'themeCSS':':is(#root-4,#root-7) rect,#actor4,#actor7 { fill: #CAFFBF; stroke: #8EC383; };:is(#root-5,#root-6) rect,#actor5,#actor6 { fill: #A0C4FF; stroke: #6589C3; };g:has(.actor.actor-bottom) { display: none; }'}}%%
    
```

## How to use
First you need instantiate **RTCVoiceChat**:
```javascript
const voiceChat = new P2PVoiceChat({
    channelId: 'testvchat', // any text 
    signalSend: send // the function name that send signal to the other end
});
```
*signalSend* pass 4 parameters to the function: _channelId_, _type_, _data_ and _src_ (src carries the role of the sender, master or slave). 

Then, assuming that you have a signal receiver in a guessed object *signaling*, you must leave it up manage signals to voiceChat instance: 
```javascript
// Let's assume that e carries the data we need to send to the voiceChat signal processor.
signaling.onmessage = e => voiceChat.processSignal(e.type, e.data, e.src);
```

The _e_ parameter received in _onmessage_ should have at least _type_, _data_ and _src_. 

## P2PVoiceChat constructor parameters

```javascript
const voiceChat = new P2PVoiceChat({
    channelId: <text>            // Any text 
    signalSend: <function>       // Function that send signal to the other end,
    iceServers: <object>         // iceServers data. 
                                 // Default is: { iceServers: [{ urls: ["stun:stun.gmx.net"] }] }
    enableSounds: <boolean>      // Enable or not calling and ringing tone at each end. Default true.
    audiometer: <boolean>        // If true send to onaudiometer function audio intensity (0 to 100);
    onaudiometer: <function>     // Function that allow to draw a VUMeter or something like that.
                                 // P2PVoiceChat pass 2 parameters: intensity (1 to 100) and P2PVoiceChat instance
    onend: <function>            // It is executed once the communication is terminated when one of the 2 ends hangs up the call.
                                 // P2PVoiceChat pass as parameter P2PVoiceChat instance
    onreceiveinvite: <function>  // It is executed when the receiver part of P2PVoiceChat receive an "invite".
    onreceiveaccept: <function>  // It is executed when the emitter part of P2PVoiceChat receive an "accept".
    onreceivereject: <function>  // It is executed when the emitter part of P2PVoiceChat receive a "reject".   
});
```
