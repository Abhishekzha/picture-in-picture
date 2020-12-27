const videoElement=document.getElementById('video');
const button=document.getElementById('button');

const selectMediaStream=async()=>{
     try{
       const mediaSelector=await navigator.mediaDevices.getDisplayMedia();
       videoElement.srcObject=mediaSelector;
       videoElement.onloadedmetadata=()=>{
           videoElement.play();
       }
     }catch(error){
         console.log("Error here:",error)
     }
}

button.addEventListener('click',async()=>{
         button.disabled=true;
         await videoElement.requestPictureInPicture();
         button.disabled=false;
})
selectMediaStream()