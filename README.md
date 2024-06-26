# RTCVoiceChat
This is just an experiment about WebRTC and audio channels. I looked for a simple approach. First I made a base class (P2PVoiceChannel) to manage one channel to send audio from source (named master role) to destination (named slave role). Then I made a container class (P2PVoiceChat) that instance 2 times the P2PVoiceChannel, one as EMITTER and other for RECEIVER. 

To create a simple 2 agents voice chat, first you need to instantiate P2PVoiceChat at each end, then set for each instance a signal sender function, and finally leave it up to the instance to handle the abstract event *onsignalreceived* (you need to implement your own signal sender and receiver). 

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
