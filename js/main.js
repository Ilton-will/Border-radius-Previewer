const bord = document.getElementById("border");

const topL = document.getElementById("tl");
const topR = document.getElementById("tr");
const botR = document.getElementById("br");
const botL = document.getElementById("bl");

const outtl = document.getElementById("outtl")
const outtr = document.getElementById("outtr")
const outbr = document.getElementById("outbr")
const outbl = document.getElementById("outbl")

const bun = document.getElementById("copiar")

topL.oninput = function(){
    bord.style.borderTopLeftRadius = topL.value + "%";
    outtl.value =  topL.value + "%";
}


topR.oninput = function(){
    bord.style.borderTopRightRadius = topR.value + "%";
    outtr.value =  topR.value + "%"
}

botR.oninput = function(){
    bord.style.borderBottomRightRadius = botR.value + "%";
    outbr.value =  botR.value + "%"
}

botL.oninput = function(){
    bord.style.borderBottomLeftRadius = botL.value + "%";
    outbl.value =  botL.value + "%"
}

bun.onclick = function(){
    const copy = "Border-radius: " + outtl.value + " " + outtr.value + " " + outbr.value + " " + outbl.value;

    function copyToClipboard(text) {
        var dummy = document.createElement("textarea");
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand("copy");
        document.body.removeChild(dummy);
    }

    copyToClipboard(copy) 
    alert(copy)

}