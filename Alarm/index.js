let c;
let h;


let str=()=>{
    let set=document.querySelector("#set-time").value;
    let head=document.querySelector("#head")
    let audio=document.querySelector("#audio")
    let box=document.querySelector("#box")
    box.style.display = "block";
    box.innerHTML = `<p>Alarm set for: ${set}</p>`;
     head.style.display="none"

    c= setInterval(() => {
        let t = new Date()
        let currenttime = `${t.getHours().toString().padStart(2, "0")}:${t.getMinutes().toString().padStart(2, "0")}`
    

        if(currenttime==set){
            head.innerHTML="Alarm is ringing..."
            audio.play();
        }
     

      }, 1000);
    
};

let stp=()=>{
    let head=document.querySelector("#head")
    let audio=document.querySelector("#audio")
    head.style.display="block"
    head.innerHTML="Alarm has stopped..."
        audio.pause()
        clearInterval(c)
  

}

