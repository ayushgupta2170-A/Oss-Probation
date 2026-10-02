let localStream;
let remoteStream;
let peerConnection;

const servers={
    iceServers:[
    {
        urls:['stun:stun1.l.google.com:19302','stun:stun2.1.google.com:19302']
    }
  ]

}

let init=async()=>{
    localStream = await navigator.mediaDevices.getUserMedia({video:true,audio:false})
    document.getElementById('user-1').srcObject=localStream

    createOffer();
}
let createOffer=async ()=>{
    peerConnection=new RTCPeerConnection(servers);

    remoteStream=newMidStream();
    document.getElementById('user-2').srcObject=remoteStream

    localStream.getTracks().forEach((track)=>{
        peerConnection.track(track,localStream)
    })

    peerConnection.ontrack=(event)=>{
        event.streams[0].getTracks().forEach((track)=>{
            remoteStream.addTrack()
        })
    }

    let offer=await peerConnection.createOffer()
    await peerConnection.setLocalDescription(offer)

    console.log('Offer:',offer)
}