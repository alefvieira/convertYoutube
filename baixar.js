function enviar(e){
    e.preventDefault();
    const type = 'mp3';
    const url = document.querySelector("#url");
    const formato = document.querySelector("#formato");
    console.log(url.value);
    if(url.value === undefined || url.value === "" || url.value === null){
        console.log("Campo inválido!");
    }
    else{
        if(formato.value === 'mp3' || formato.value === 'mp4'){
            document.querySelector(".fundo").style.visibility = 'visible';
            document.querySelector(".popup").classList.toggle('active')
            document.querySelector("#iframe").innerHTML = `
                <iframe id="buttonApi" src="https://convert2mp3s.com/api/button/${formato.value}?url=${url.value}" width="100%" height="100%" allowtransparency="true" scrolling="no" style="border:none"></iframe>
            `;
        }else console.log("formato inválido!")
    }
}
function closePopup(){
    document.querySelector(".popup").classList.toggle('active')
    document.querySelector(".fundo").style.visibility = 'hidden';   
    
}

document.querySelector(".fundo").addEventListener('click', ()=>{
    closePopup();
})