let dice=()=>{

    let roll=Math.floor(Math.random()*6+1)
    let img=document.querySelector("#img")
    let box1=document.querySelector("#box1")
    let box2=document.querySelector("#box2")
    let box3=document.querySelector("#box3")
    let box4=document.querySelector("#box4")
    let box5=document.querySelector("#box5")
    let box6=document.querySelector("#box6")
    console.log(roll)

    if(roll==1){
        img.style.opacity="0"
        box1.style.opacity="1"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"

    }


    if(roll==2){
        img.style.opacity="0"
        box1.style.opacity="0"
        box2.style.opacity="1"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"

    }

    if(roll==3){
        img.style.opacity="0"
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="3"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="0"

    }

    if(roll==4){
        img.style.opacity="0"
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="1"
        box5.style.opacity="0"
        box6.style.opacity="0"

    }

    if(roll==5){
        img.style.opacity="0"
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="1"
        box6.style.opacity="0"

    }

    if(roll==6){
        img.style.opacity="0"
        box1.style.opacity="0"
        box2.style.opacity="0"
        box3.style.opacity="0"
        box4.style.opacity="0"
        box5.style.opacity="0"
        box6.style.opacity="1"

    }
}

