let htmlElements = {
    welcomeH1: document.getElementById('welcome-h1'),
    pAbout: document.getElementById('p-about'),
    langSelect: document.getElementById('lang-select')
}

htmlElements.langSelect.addEventListener('change',()=>{
    let langSelected = htmlElements.langSelect.value;
    htmlElements.welcomeH1.innerHTML = languages[langSelected].welcomeH1;
    htmlElements.pAbout.innerHTML = languages[langSelected].aboutP;
})