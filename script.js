let htmlElements = {
    langSelect: document.getElementById('lang-select'),
    gameSelect: document.getElementById('game-select'),
    desc: document.getElementById('description'),
    rate: document.getElementById('rate')
}
let langSelected=htmlElements.langSelect.value;
let gameSelected;


htmlElements.langSelect.addEventListener('change',()=>{
    langSelected = htmlElements.langSelect.value;
})

function changeGameLanguage(){
    gameSelected = htmlElements.gameSelect.value;
    try{
    for(field in games[gameSelected][langSelected]){
        if(document.getElementById(`${field}`)){
            document.getElementById(`${field}`).innerHTML= games[gameSelected][langSelected][field]
        }
    }}
    catch(e){
        htmlElements.desc.innerHTML = languages[langSelected].welcome;
    }
}

