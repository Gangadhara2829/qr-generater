let fname= document.getElementsByTagName("input")[0]
let image=document.getElementsByTagName("img")[0]
let sub=document.getElementsByTagName("button")[0]
sub.addEventListener("click",()=>{
    image.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= ${fname.value}`
})