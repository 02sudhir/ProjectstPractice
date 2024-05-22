import React from 'react'
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function Room() {
  const {id} = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
     const appID = 260343010;
     const serverSecret = "b1a3c0491c3f0405cc8b658cb07f8b8c";
     const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret, id, Date.now().toString(), "sudhir");

   
    // Create instance object from Kit Token.
     const zp = ZegoUIKitPrebuilt.create(kitToken);
     // start the call
     zp.joinRoom({
       container: element,
       sharedLinks: [
         {
           name: 'Personal link',
           url:`http://localhost:5173/room/${id}`,
         },
       ],
       scenario: {
         mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
       },
     });

   
 };
  return (
    <div
    className="myCallContainer"
    ref={myMeeting}
      ></div>
  )
}

export default Room